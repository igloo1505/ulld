import {
  logLevelSchema
} from "./chunk-VHM7ROJU.js";

// src/zod/terminalConfig.ts
import { z } from "zod";
var terminalConfigSchema = z.object({
  logLevel: logLevelSchema.default("info")
}).default({});

export {
  terminalConfigSchema
};
//# sourceMappingURL=chunk-UXQ4RAFZ.js.map