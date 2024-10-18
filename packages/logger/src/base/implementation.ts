import { LogLevel } from "./sharedTypes"
import { 
    LoggerOptionsSchema as LoggerOptionsSchemaClient,
    LoggerOptionsSchemaOutput as LoggerOptionsSchemaClientOutput
} from "../client/types"
import { 
    LoggerOptionsSchema as LoggerOptionsSchemaServer,
    LoggerOptionsSchemaOutput as LoggerOptionsSchemaServerOutput
} from "../server/types"

type LoggerLogFunction<T extends "server" | "client"> = (value: any, opts: T extends "server"? LoggerOptionsSchemaServer : LoggerOptionsSchemaClient) => void

type UlldLogLevelFunctions<T extends "server" | "client"> = {
    [K in Exclude<LogLevel, "normal">]: LoggerLogFunction<T>
}


export interface UlldLoggerImplementation<T extends "server" | "client"> extends UlldLogLevelFunctions<T> {
    log: LoggerLogFunction<T>
    getOptions: (val: T extends "server"? LoggerOptionsSchemaServer : LoggerOptionsSchemaClient) => T extends "server"? LoggerOptionsSchemaServerOutput : LoggerOptionsSchemaClientOutput
}
