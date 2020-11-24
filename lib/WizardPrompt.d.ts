import { DefaultArgOptions, WizardConfig } from "./Options";
export declare class WizardPrompt {
    private config;
    constructor(defaultOptions: DefaultArgOptions);
    startWizard(): Promise<void>;
    private reactWizard;
    private nodejsWizard;
    private staticWizard;
    private fullstackWizard;
    private generateConfig;
    private prompt;
    get getConfig(): WizardConfig;
}
