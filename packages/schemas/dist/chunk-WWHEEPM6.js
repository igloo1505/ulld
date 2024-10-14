// src/database/inputTypeSchemas/JsonValueSchema.ts
import { z } from "zod";
var JsonValueSchema = z.lazy(
  () => z.union([
    z.string(),
    z.number(),
    z.boolean(),
    z.literal(null),
    z.record(z.lazy(() => JsonValueSchema.optional())),
    z.array(z.lazy(() => JsonValueSchema))
  ])
);
var JsonValueSchema_default = JsonValueSchema;

export {
  JsonValueSchema,
  JsonValueSchema_default
};
//# sourceMappingURL=chunk-WWHEEPM6.js.map