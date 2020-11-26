import prompts, { PromptObject } from "prompts";

import {
  DefaultArgOptions,
  ReactConfig,
  NodeConfig,
  StaticConfig,
  reactWizardChoices,
  nodeWizardChoices,
  staticWizardChoices,
  GeneralTemplates,
  UIKits,
  RenderMethods,
  StateManagement,
  WizardConfig,
  WizardStatus,
} from "./Options";

export class WizardPrompt {
  // #!TODO - interface for wizard options - arg options only a small part
  private config: WizardConfig = {
    status: WizardStatus.INIT,
  };

  constructor(defaultOptions: DefaultArgOptions) {
    this.config.defaultConfig = defaultOptions;
  }

  async startWizard(): Promise<void> {
    // Step 1. General Web APP Selector

    this.config.status = WizardStatus.STARTED;

    const { main_template } = await this.prompt({
      type: "select",
      name: "main_template",
      message: "Please choose which project template to use",
      choices: this.mapObjectValuesToChoices(GeneralTemplates),
      initial: 1,
    });

    // Step 2. Generate Config Depending on template selected
    switch (main_template) {
      case GeneralTemplates.React:
        await this.reactWizard();
        break;
      case GeneralTemplates.Node:
        await this.nodejsWizard();
        break;
      case GeneralTemplates.Fullstack:
        await this.fullstackWizard();
        break;
      case GeneralTemplates.Static:
        await this.staticWizard();
        break;
      default:
        break;
    }

    // TODO Step 3 - loggint out final setup - confirm to start

    if (this.config.status != (WizardStatus.ABORTED as WizardStatus)) {
      const { isConfirmed } = await this.prompt({
        type: "toggle",
        name: "isConfirmed",
        message: "Can you confirm?",
        initial: true,
        active: "Yes",
        inactive: "No",
      });

      if (isConfirmed) {
        this.config.status = WizardStatus.COMPLETED;
      }
    }
    return;
  }

  private async reactWizard(): Promise<void> {
    // Get answers for additional React options
    const { react_answers } = await this.prompt({
      type: "multiselect",
      name: "react_answers",
      message: "React Additional Options",
      choices: reactWizardChoices,
      style: "emoji",
    });

    // Generate Config Object from propmpt answers
    const reactConfig: ReactConfig = this.generateConfigFromAnswers(
      react_answers
    );

    // If Custom UI Kit selected - propmt which one to use and assign it to property

    if (reactConfig.uikit) {
      const { ui_kit_answer } = await this.prompt({
        type: "select",
        name: "ui_kit_answer",
        message: "✨Choose UI Kit you want to use",
        choices: this.mapObjectValuesToChoices(UIKits),
      });

      reactConfig.uikit = ui_kit_answer;
    }

    // If Global State selected - prompt which approach to use

    if (reactConfig.state_management) {
      const { state_answer } = await this.prompt({
        type: "select",
        name: "state_answer",
        message: "⚡Choose State Management Approach",
        choices: this.mapObjectValuesToChoices(StateManagement),
      });

      reactConfig.state_management = state_answer;
    }

    this.config.reactConfig = reactConfig;
    return;
  }

  private async nodejsWizard(): Promise<void> {
    // Get answers for additional NodeJS options
    const { node_answers } = await this.prompt({
      type: "multiselect",
      name: "node_answers",
      message: "Please choose Nodejs additional options",
      choices: nodeWizardChoices,
    });

    // Generate Config Object from propmpt answers
    const nodeConfig: NodeConfig = this.generateConfigFromAnswers(node_answers);

    if (!!nodeConfig.render_method) {
      const { render_answer } = await this.prompt({
        type: "select",
        name: "render_answer",
        message: "How NodeJS should handle * render route",
        choices: this.mapObjectValuesToChoices(RenderMethods),
      });
      nodeConfig.render_method = render_answer;
    }
    this.config.nodeConfig = nodeConfig;
    return;
  }

  private async staticWizard(): Promise<void> {
    // Get answers for additional NodeJS options
    const { static_answers } = await this.prompt({
      type: "multiselect",
      name: "static_answers",
      message: "Please choose Static Web Site additional options",
      choices: staticWizardChoices,
    });

    // Generate Config Object from propmpt answers
    const staticConfig: StaticConfig = this.generateConfigFromAnswers(
      static_answers
    );

    this.config.staticConfig = staticConfig;
    return;
  }

  private async fullstackWizard(): Promise<void> {
    await this.reactWizard();
    await this.nodejsWizard();

    // Maybe Some Additional Fullstack Settings
  }

  //  ===== UTILS ======
  private generateConfigFromAnswers(
    answers: string[]
  ): ReactConfig | NodeConfig | StaticConfig {
    return answers.reduce((obj: { [key: string]: boolean }, item) => {
      obj[item] = true;
      return obj;
    }, {});
  }

  private mapObjectValuesToChoices(target: {
    [key: string]: string;
  }): { title: string; value: string }[] {
    return Object.values(target).map((value) => ({
      title: value,
      value,
    }));
  }

  private prompt(questions: PromptObject) {
    return prompts(
      { ...questions, instructions: false },
      {
        onCancel: () => {
          this.config.status = WizardStatus.ABORTED;
          process.exit();
        },
      }
    );
  }

  // ===== PUBLIC API ======

  get getConfig() {
    return this.config.status === WizardStatus.COMPLETED
      ? this.config
      : undefined;
  }
}
