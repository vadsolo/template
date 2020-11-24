"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArgParser = void 0;
const tslib_1 = require("tslib");
const arg_1 = tslib_1.__importDefault(require("arg"));
class ArgParser {
    constructor(rawArgs) {
        this.options = this.parseArguments(rawArgs);
    }
    parseArguments(rawArgs) {
        const args = arg_1.default({
            "--yes": Boolean,
            "-y": "--yes",
        }, {
            argv: rawArgs.slice(2),
        });
        return {
            skipPrompts: args["--yes"] || false,
        };
    }
    get getOptions() {
        return this.options;
    }
}
exports.ArgParser = ArgParser;
