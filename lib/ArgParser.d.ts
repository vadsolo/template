import { DefaultArgOptions } from "./Options";
export declare class ArgParser {
    private options;
    constructor(rawArgs: string[]);
    private parseArguments;
    get getOptions(): DefaultArgOptions;
}
