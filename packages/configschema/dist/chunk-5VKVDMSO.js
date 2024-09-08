import {
  logLevelSchema
} from "./chunk-PESBV4SX.js";

// src/zod/terminalConfig.ts
import { z } from "zod";
var terminalConfigSchema = z.object({
  logLevel: logLevelSchema.default("info")
}).default({});

export {
  terminalConfigSchema
};
//# sourceMappingURL=chunk-5VKVDMSO.js.map