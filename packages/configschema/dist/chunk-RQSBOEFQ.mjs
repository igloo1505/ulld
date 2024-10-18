import {
  logLevelSchema
} from "./chunk-XHBPEY36.mjs";

// src/zod/terminalConfig.ts
import { z } from "zod";
var terminalConfigSchema = z.object({
  logLevel: logLevelSchema.default("info")
}).default({});

export {
  terminalConfigSchema
};
//# sourceMappingURL=chunk-RQSBOEFQ.mjs.map