import {
  databaseBuildSchema
} from "./chunk-G7O7W64T.js";
import {
  additionalUserContent
} from "./chunk-E4C6G2BG.js";

// src/zod/build/main.ts
import { z } from "zod";
var buildOnlySchema = z.object({
  database: databaseBuildSchema.default({}),
  additionalUserContent
}).default({});

export {
  buildOnlySchema
};
//# sourceMappingURL=chunk-W3Z5TGQR.js.map