import {
  logLevelSchema
} from "./chunk-XHBPEY36.mjs";

// src/zod/terminalConfig.ts
import { z } from "zod";
var terminalConfigSchema = z.object({
  logLevel: logLevelSchema.default("info")
}).default({});
var terminalConfigSchemaOutput = z.object({
  logLevel: logLevelSchema
});

export {
  terminalConfigSchema,
  terminalConfigSchemaOutput
};
//# sourceMappingURL=chunk-S2BPIAJV.mjs.map