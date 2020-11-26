import { WizardPrompt } from "./WizardPrompt";
import { ArgParser } from "./ArgParser";

export async function cli(rawArgs: string[]) {
  const parser = new ArgParser(rawArgs);
  const wizard = new WizardPrompt(parser.getOptions);
  await wizard.startWizard();

  const wizardConfig = wizard.getConfig;

  if (!!wizardConfig) {
    console.log(wizardConfig);
  }
  // if
  // const builder = new ProjectBuilder(wizard.getConfig)
}
