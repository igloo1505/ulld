import {serverLogger} from "./server/logger"
import {clientLogger} from "./client/logger"


export const ClientLogger = typeof clientLogger
export type ServerLogger = typeof serverLogger
