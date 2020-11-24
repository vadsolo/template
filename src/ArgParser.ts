import arg from "arg";
import { DefaultArgOptions } from "./Options";

export class ArgParser {
  private options: DefaultArgOptions;

  constructor(rawArgs: string[]) {
    this.options = this.parseArguments(rawArgs);
  }
  private parseArguments(rawArgs: string[]): DefaultArgOptions {
    const args = arg(
      {
        "--yes": Boolean,
        "-y": "--yes",
      },
      {
        argv: rawArgs.slice(2),
      }
    );

    return {
      skipPrompts: args["--yes"] || false,
    };
  }

  public get getOptions() {
    return this.options;
  }
}
