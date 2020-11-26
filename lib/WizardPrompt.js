"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WizardPrompt = void 0;
const tslib_1 = require("tslib");
const prompts_1 = tslib_1.__importDefault(require("prompts"));
const Options_1 = require("./Options");
class WizardPrompt {
    constructor(defaultOptions) {
        // #!TODO - interface for wizard options - arg options only a small part
        this.config = {
            status: Options_1.WizardStatus.INIT,
        };
        this.config.defaultConfig = defaultOptions;
    }
    async startWizard() {
        // Step 1. General Web APP Selector
        this.config.status = Options_1.WizardStatus.STARTED;
        const { main_template } = await this.prompt({
            type: "select",
            name: "main_template",
            message: "Please choose which project template to use",
            choices: this.mapObjectValuesToChoices(Options_1.GeneralTemplates),
            initial: 1,
        });
        // Step 2. Generate Config Depending on template selected
        switch (main_template) {
            case Options_1.GeneralTemplates.React:
                await this.reactWizard();
                break;
            case Options_1.GeneralTemplates.Node:
                await this.nodejsWizard();
                break;
            case Options_1.GeneralTemplates.Fullstack:
                await this.fullstackWizard();
                break;
            case Options_1.GeneralTemplates.Static:
                await this.staticWizard();
                break;
            default:
                break;
        }
        // TODO Step 3 - loggint out final setup - confirm to start
        if (this.config.status != Options_1.WizardStatus.ABORTED) {
            const { isConfirmed } = await this.prompt({
                type: "toggle",
                name: "isConfirmed",
                message: "Can you confirm?",
                initial: true,
                active: "Yes",
                inactive: "No",
            });
            if (isConfirmed) {
                this.config.status = Options_1.WizardStatus.COMPLETED;
            }
        }
        return;
    }
    async reactWizard() {
        // Get answers for additional React options
        const { react_answers } = await this.prompt({
            type: "multiselect",
            name: "react_answers",
            message: "React Additional Options",
            choices: Options_1.reactWizardChoices,
            style: "emoji",
        });
        // Generate Config Object from propmpt answers
        const reactConfig = this.generateConfigFromAnswers(react_answers);
        // If Custom UI Kit selected - propmt which one to use and assign it to property
        if (reactConfig.uikit) {
            const { ui_kit_answer } = await this.prompt({
                type: "select",
                name: "ui_kit_answer",
                message: "✨Choose UI Kit you want to use",
                choices: this.mapObjectValuesToChoices(Options_1.UIKits),
            });
            reactConfig.uikit = ui_kit_answer;
        }
        // If Global State selected - prompt which approach to use
        if (reactConfig.state_management) {
            const { state_answer } = await this.prompt({
                type: "select",
                name: "state_answer",
                message: "⚡Choose State Management Approach",
                choices: this.mapObjectValuesToChoices(Options_1.StateManagement),
            });
            reactConfig.state_management = state_answer;
        }
        this.config.reactConfig = reactConfig;
        return;
    }
    async nodejsWizard() {
        // Get answers for additional NodeJS options
        const { node_answers } = await this.prompt({
            type: "multiselect",
            name: "node_answers",
            message: "Please choose Nodejs additional options",
            choices: Options_1.nodeWizardChoices,
        });
        // Generate Config Object from propmpt answers
        const nodeConfig = this.generateConfigFromAnswers(node_answers);
        if (!!nodeConfig.render_method) {
            const { render_answer } = await this.prompt({
                type: "select",
                name: "render_answer",
                message: "How NodeJS should handle * render route",
                choices: this.mapObjectValuesToChoices(Options_1.RenderMethods),
            });
            nodeConfig.render_method = render_answer;
        }
        this.config.nodeConfig = nodeConfig;
        return;
    }
    async staticWizard() {
        // Get answers for additional NodeJS options
        const { static_answers } = await this.prompt({
            type: "multiselect",
            name: "static_answers",
            message: "Please choose Static Web Site additional options",
            choices: Options_1.staticWizardChoices,
        });
        // Generate Config Object from propmpt answers
        const staticConfig = this.generateConfigFromAnswers(static_answers);
        this.config.staticConfig = staticConfig;
        return;
    }
    async fullstackWizard() {
        await this.reactWizard();
        await this.nodejsWizard();
        // Maybe Some Additional Fullstack Settings
    }
    //  ===== UTILS ======
    generateConfigFromAnswers(answers) {
        return answers.reduce((obj, item) => {
            obj[item] = true;
            return obj;
        }, {});
    }
    mapObjectValuesToChoices(target) {
        return Object.values(target).map((value) => ({
            title: value,
            value,
        }));
    }
    prompt(questions) {
        return prompts_1.default(Object.assign(Object.assign({}, questions), { instructions: false }), {
            onCancel: () => {
                this.config.status = Options_1.WizardStatus.ABORTED;
                process.exit();
            },
        });
    }
    // ===== PUBLIC API ======
    get getConfig() {
        return this.config.status === Options_1.WizardStatus.COMPLETED
            ? this.config
            : undefined;
    }
}
exports.WizardPrompt = WizardPrompt;
