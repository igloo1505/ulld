import {
  logLevelSchema
} from "./chunk-6ITAWCMZ.js";

// src/zod/terminalConfig.ts
import { z } from "zod";
var terminalConfigSchema = z.object({
  logLevel: logLevelSchema.default("info")
}).default({});

export {
  terminalConfigSchema
};
//# sourceMappingURL=chunk-4P5MM5K3.js.map