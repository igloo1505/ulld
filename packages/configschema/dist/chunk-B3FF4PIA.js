import {
  databaseBuildSchema
} from "./chunk-GDQ3UHZV.js";
import {
  additionalUserContent
} from "./chunk-ZDHGZVOB.js";

// src/zod/build/main.ts
import { z } from "zod";
var buildOnlySchema = z.object({
  database: databaseBuildSchema.default({}),
  additionalUserContent
}).default({});

export {
  buildOnlySchema
};
//# sourceMappingURL=chunk-B3FF4PIA.js.map