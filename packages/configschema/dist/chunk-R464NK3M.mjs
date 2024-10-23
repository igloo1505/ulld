import {
  databaseBuildSchema,
  databaseBuildSchemaOutput
} from "./chunk-6QYW7IIJ.mjs";
import {
  additionalUserContent,
  additionalUserContentOutput
} from "./chunk-MG7G2I5I.mjs";

// src/zod/build/main.ts
import { z } from "zod";
var buildOnlySchema = z.object({
  database: databaseBuildSchema.default({}),
  additionalUserContent
}).default({});
var buildOnlySchemaOutput = z.object({
  database: databaseBuildSchemaOutput,
  additionalUserContent: additionalUserContentOutput
});

export {
  buildOnlySchema,
  buildOnlySchemaOutput
};
//# sourceMappingURL=chunk-R464NK3M.mjs.map