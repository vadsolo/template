"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cli = void 0;
const WizardPrompt_1 = require("./WizardPrompt");
const ArgParser_1 = require("./ArgParser");
async function cli(rawArgs) {
    const parser = new ArgParser_1.ArgParser(rawArgs);
    const wizard = new WizardPrompt_1.WizardPrompt(parser.getOptions);
    await wizard.startWizard();
    // if wizard.getConfig.completed
    // const builder = new ProjectBuilder(wizard.getConfig)
}
exports.cli = cli;
