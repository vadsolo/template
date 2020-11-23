import arg from "arg";
import inquirer from "inquirer";

interface DefaultArgumentOptions {
  skipPrompts: boolean;
  git: boolean;
  template: any;
  runInstall: boolean;
}

enum GeneralTemplates {
  React = "React only project",
  Node = "Node.js only project",
  Fullstack = "React + Node Fullstack project",
}

enum ReactTemplates {
  ReactWithJS = "React with JS",
  ReactWithTS = "React with TS",
}

enum NodeTemplates {
  NodeWithJS = "Node with JS",
  NodeWithTS = "React with TS",
}

function parseArgumentsIntoOptions(rawArgs: string[]): DefaultArgumentOptions {
  const args = arg(
    {
      "--git": Boolean,
      "--install": Boolean,
      "--yes": Boolean,
      "-g": "--git",
      "-i": "--install",
      "-y": "--yes",
    },
    {
      argv: rawArgs.slice(2),
    }
  );

  return {
    skipPrompts: args["--yes"] || false,
    git: args["--git"] || false,
    template: args._[0],
    runInstall: args["--install"] || false,
  };
}

async function promptOptions(options: DefaultArgumentOptions) {
  const defaultTemplate = GeneralTemplates.Fullstack;
  if (options.skipPrompts) {
    return {
      ...options,
      template: options.template || defaultTemplate,
    };
  }

  const questions = [];
  if (!options.template) {
    questions.push({
      type: "list",
      name: "main_template",
      message: "Please choose which project template to use",
      choices: Object.values(GeneralTemplates),
      default: defaultTemplate,
    });
  }

  if (!options.git) {
    questions.push({
      type: "confirm",
      name: "git",
      message: "Initialize a git repository?",
      default: false,
    });
  }
  const { main_template, git } = await inquirer.prompt(questions);

  const nodeTemplateSelector = {
    type: "checkbox",
    name: "node_template",
    message: "Select Node.js Template",
    choices: Object.values(NodeTemplates),
  };

  const reactTemplateSelector = {
    type: "list",
    name: "react_template",
    message: "Select React Template",
    choices: Object.values(ReactTemplates),
  };
  if (main_template === GeneralTemplates.Node) {
    const { node_template } = await inquirer.prompt([nodeTemplateSelector]);
  }

  if (main_template === GeneralTemplates.React) {
    const { react_template } = await inquirer.prompt([reactTemplateSelector]);
  }

  if (main_template === GeneralTemplates.Fullstack) {
    const { react_template, node_template } = await inquirer.prompt([
      reactTemplateSelector,
      nodeTemplateSelector,
    ]);
  }
  // return {
  //   ...options,
  //   template: options.template || answers.template,
  //   git: options.git || answers.git,
  // };
  return { ...options };
}

export async function cli(args: string[]) {
  let options = parseArgumentsIntoOptions(args);
  options = await promptOptions(options);
  console.log(options);
}
