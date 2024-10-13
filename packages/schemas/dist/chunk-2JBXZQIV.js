// src/database/inputTypeSchemas/InputJsonValueSchema.ts
import { z } from "zod";
var InputJsonValueSchema = z.lazy(
  () => z.union([
    z.string(),
    z.number(),
    z.boolean(),
    z.object({ toJSON: z.function(z.tuple([]), z.any()) }),
    z.record(z.lazy(() => z.union([InputJsonValueSchema, z.literal(null)]))),
    z.array(z.lazy(() => z.union([InputJsonValueSchema, z.literal(null)])))
  ])
);
var InputJsonValueSchema_default = InputJsonValueSchema;

export {
  InputJsonValueSchema,
  InputJsonValueSchema_default
};
//# sourceMappingURL=chunk-2JBXZQIV.js.map