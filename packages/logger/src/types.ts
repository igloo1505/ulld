import {logger as serverLogger} from "./server/logger"
import {logger as clientLogger} from "./client/logger"


export const ClientLogger = typeof clientLogger
export type ServerLogger = typeof serverLogger
