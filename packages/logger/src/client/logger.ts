import { BaseUlldLogger } from "../base/main";
import { LogLevel } from "../base/sharedTypes";
import { LoggerOptionsSchema, optionsSchema } from "./types";
import { UlldLoggerImplementation } from "../base/implementation";


// TODO: Come back and make the output actually presentable
export class logger
    extends BaseUlldLogger
    implements UlldLoggerImplementation<"client"> {
    constructor() {
        super();
    }
    getOptions(opts: LoggerOptionsSchema) {
        return optionsSchema.parse(opts)
    }
    log(value: any, opts: LoggerOptionsSchema = {}) {
        let _opts = this.getOptions(opts)
        this.logOfTypeIfPermitted(value, "normal", _opts.type)
    }
    info(value: any, opts: LoggerOptionsSchema = {}) {
        const _opts = this.getOptions(opts)
        this.logOfTypeIfPermitted(value, "info", _opts.type)
    }
    verbose(value: any, opts: LoggerOptionsSchema = {}) {
        const _opts = this.getOptions(opts)
        this.logOfTypeIfPermitted(value, "verbose", _opts.type)
    }
    debug(value: any, opts: LoggerOptionsSchema = {}) {
        const _opts = this.getOptions(opts)
        this.logOfTypeIfPermitted(value, "debug", _opts.type)
    }
    logJson(value: string | object, logLevel: LogLevel) {
        return this[logLevel === "normal" ? "log" : logLevel](value);
    }
}

export default logger;
