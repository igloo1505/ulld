import { highlight } from "cli-highlight";
import {BaseUlldLogger} from "../base/main"
import {LoggerOptionsSchema, LoggerOptionsSchemaOutput, LogOpts, optionsSchema} from "./types"
import { LogLevel } from "../base/sharedTypes";

export class serverLogger extends BaseUlldLogger {
    logLevel: LogLevel = "normal";
    constructor() {
        super()
    }
    #getValueContent(value: any, opts: LoggerOptionsSchemaOutput) {
        return value === null
            ? "null"
            : typeof value === "object"
                ? this.highlightJson(value)
                : typeof value === "undefined"
                    ? "undefined"
                    : opts.contentSyntaxType
                        ? this.highlightSyntax(value, opts.contentSyntaxType)
                        : value;
    }
    formatString(value: any, _opts: LoggerOptionsSchema) {
        let opts = optionsSchema.parse(_opts);
        let s = this.getSeparator(opts, "start");
        s += `\n${this.#getValueContent(value, opts)}\n\n${this.getSeparator(opts, "finish")}`;
        return s;
    }
    logError(value: any, opts?: LogOpts) {
        // TODO: Handle this better with chalk.
        console.log(this.formatString(value, opts));
    }
    highlightSyntax(value: any, language: string) {
        return highlight(value, { language, ignoreIllegals: true });
    }
    highlightJson(value: object | string) {
        if (value === null) {
            return "null"
        }
        let val = ""
        try {
            val = typeof value === "object" ? JSON.stringify(value, null, 4) : value
        } catch (error) {
           val = `${value}`
        }
        return highlight(
            val || "",
            { language: "json", ignoreIllegals: true },
        );
    }
    // TODO: Need to come back and handle these methods
    static info(value: any, opts?: LoggerOptionsSchema) {
        // new serverLogger().logOfType("normal", value, opts);
    }
    static verbose(value: any, opts?: LoggerOptionsSchema) {
        // new serverLogger().logOfType("verbose", value, opts);
    }
    static debug(value: any, opts?: LoggerOptionsSchema) {
        // new serverLogger().logOfType("debug", value, opts);
    }
    static error(value: any, opts?: LoggerOptionsSchema) {
        new serverLogger().logError(value, opts);
    }
}

export default serverLogger;
