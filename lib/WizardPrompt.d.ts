import { DefaultArgOptions, WizardConfig } from "./Options";
export declare class WizardPrompt {
    private config;
    constructor(defaultOptions: DefaultArgOptions);
    startWizard(): Promise<void>;
    private reactWizard;
    private nodejsWizard;
    private staticWizard;
    private fullstackWizard;
    private generateConfigFromAnswers;
    private prompt;
    get getConfig(): WizardConfig;
}
