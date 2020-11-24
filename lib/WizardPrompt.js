"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WizardPrompt = void 0;
const tslib_1 = require("tslib");
const inquirer_1 = tslib_1.__importDefault(require("inquirer"));
const Options_1 = require("./Options");
class WizardPrompt {
    constructor(defaultOptions) {
        // #!TODO - interface for wizard options - arg options only a small part
        this.config = {
            isConfirmed: false,
        };
        this.config.defaultConfig = defaultOptions;
    }
    async startWizard() {
        // Step 1. General Web APP Selector
        const { main_template } = await this.prompt({
            type: "list",
            name: "main_template",
            message: "Please choose which project template to use",
            choices: Object.values(Options_1.GeneralTemplates),
            default: Options_1.GeneralTemplates.Fullstack,
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
        console.log(this.config);
        const { isConfirmed } = await this.prompt({
            type: "confirm",
            name: "isConfirmed",
            message: "Proceed?",
        });
        // Step 4. Set Wizard as Completed
        this.config.isConfirmed = isConfirmed;
        return;
    }
    async reactWizard() {
        // Get answers for additional React options
        const { react_answers } = await this.prompt({
            type: "checkbox",
            name: "react_answers",
            message: "⚙️ React Additional Options",
            choices: [...Options_1.reactWizardChoices, new inquirer_1.default.Separator()],
        });
        // Generate Config Object from propmpt answers
        const reactConfig = this.generateConfig(react_answers);
        // If Custom UI Kit selected - propmt which one to use and assign it to property
        if (reactConfig.uikit) {
            const { ui_kit_answer } = await this.prompt({
                type: "list",
                name: "ui_kit_answer",
                message: "🎨 Choose UI Kit you want to use",
                choices: Object.values(Options_1.UIKits),
            });
            reactConfig.uikit = ui_kit_answer;
        }
        // If Global State selected - prompt which approach to use
        if (reactConfig.state_management) {
            const { state_answer } = await this.prompt({
                type: "list",
                name: "state_answer",
                message: "⚡ Choose State Management Approach",
                choices: Object.values(Options_1.StateManagement),
            });
            reactConfig.state_management = state_answer;
        }
        this.config.reactConfig = reactConfig;
        return;
    }
    async nodejsWizard() {
        // Get answers for additional NodeJS options
        const { node_answers } = await this.prompt({
            type: "checkbox",
            name: "node_answers",
            message: "⚙️ Please choose Nodejs additional options",
            choices: [...Options_1.nodeWizardChoices, new inquirer_1.default.Separator()],
        });
        // Generate Config Object from propmpt answers
        const nodeConfig = this.generateConfig(node_answers);
        this.config.nodeConfig = nodeConfig;
        return;
    }
    async staticWizard() { }
    async fullstackWizard() {
        await this.reactWizard();
        await this.nodejsWizard();
        // Maybe Some Additional Fullstack Settings
    }
    generateConfig(answers) {
        return answers.reduce((obj, item) => {
            obj[item] = true;
            return obj;
        }, {});
    }
    prompt(questions) {
        return inquirer_1.default.prompt(questions);
    }
    get getConfig() {
        return this.config;
    }
}
exports.WizardPrompt = WizardPrompt;
