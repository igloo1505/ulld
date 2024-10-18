import {
  databaseBuildSchema
} from "./chunk-2YNAZVL3.mjs";
import {
  additionalUserContent
} from "./chunk-QK5DXQK6.mjs";

// src/zod/build/main.ts
import { z } from "zod";
var buildOnlySchema = z.object({
  database: databaseBuildSchema.default({}),
  additionalUserContent
}).default({});

export {
  buildOnlySchema
};
//# sourceMappingURL=chunk-4IIPTVTZ.mjs.map