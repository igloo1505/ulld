import { LogLevel, LogType } from "./sharedTypes";
import { LoggerOptionsSchemaOutput } from "../client/types";


export abstract class BaseUlldLogger {
    logLevel: LogLevel = "normal";
    #logLevelOrder: LogLevel[] = ["normal", "info", "verbose", "debug"];
    constructor() {
        if (
            process.env.ULLD_LOG_LEVEL &&
            this.#logLevelOrder.includes(process.env.ULLD_LOG_LEVEL as any)
        ) {
            this.logLevel = process.env.ULLD_LOG_LEVEL as LogLevel;
        }
    }

    protected shouldLog(level: LogLevel) {
        return (
            this.#logLevelOrder.indexOf(this.logLevel) >=
            this.#logLevelOrder.indexOf(level)
        );
    }

    protected logOfTypeIfPermitted(value: any, level: LogLevel, type: LogType) {
        if(this.shouldLog(level)){
            console[type](value)
        }
    }

    protected getLabeledSeperator(label?: string) {
        return label ? `\n---------- ${label} ----------` : "----------";
    }

    protected getSeparator(opts: LoggerOptionsSchemaOutput, type: "start" | "finish") {
        let sa = opts.label
            ? opts.label
            : opts.showDate
                ? new Date().toLocaleTimeString()
                : undefined;
        let s = this.getLabeledSeperator(type === "start" ? sa : undefined);
        if (type === "finish") return `${s}\n`;
        if (opts.component) {
            s += `\nComponent: ${opts.component}\n`;
        }
        return s;
    }
}
