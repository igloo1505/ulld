import { z } from "zod";
import { highlight } from "cli-highlight";


const optionsSchema = z
    .object({
        showDate: z.boolean().default(true),
        label: z.string().optional(),
        color: z.string().optional(),
        component: z.string().optional(),
        contentSyntaxType: z.string().optional(),
        disable: z.boolean().default(false)
    })
    .default({});

type LogOpts = z.input<typeof optionsSchema>;

type LogLevel = "normal" | "verbose" | "debug" | "info";

export class serverLogger {
    logLevel: LogLevel = "normal";
    private logLevelOrder: LogLevel[] = ["normal", "info", "verbose", "debug"];
    constructor() {
        if (
            process.env.ULLD_LOG_LEVEL &&
            this.logLevelOrder.includes(process.env.ULLD_LOG_LEVEL as any)
        ) {
            this.logLevel = process.env.ULLD_LOG_LEVEL as LogLevel;
        }
    }
    shouldLog(level: LogLevel) {
        return (
            this.logLevelOrder.indexOf(this.logLevel) >=
            this.logLevelOrder.indexOf(level)
        );
    }
    getValueContent(value: any, opts: z.output<typeof optionsSchema>) {
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
    getLabeledSeperator(label?: string) {
        return label ? `\n---------- ${label} ----------` : "----------";
    }
    getSeparator(opts: z.output<typeof optionsSchema>, type: "start" | "finish") {
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
    formatString(value: any, _opts: LogOpts) {
        let opts = optionsSchema.parse(_opts);
        let s = this.getSeparator(opts, "start");
        s += `\n${this.getValueContent(value, opts)}\n\n${this.getSeparator(opts, "finish")}`;
        return s;
    }
    logOfType(type: LogLevel, value: any, opts?: LogOpts) {
        if (opts?.disable) {
            return
        }
        if (this.shouldLog(type)) {
            console.log(this.formatString(value, opts));
        }
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
    static info(value: any, opts?: LogOpts) {
        new serverLogger().logOfType("normal", value, opts);
    }
    static verbose(value: any, opts?: LogOpts) {
        new serverLogger().logOfType("verbose", value, opts);
    }
    static debug(value: any, opts?: LogOpts) {
        new serverLogger().logOfType("debug", value, opts);
    }
    static error(value: any, opts?: LogOpts) {
        new serverLogger().logError(value, opts);
    }
}

export default serverLogger;
