// src/database/modelSchema/RandomImageSchema.ts
import { z } from "zod";
var RandomImageSchema = z.object({
  path: z.string(),
  createdAt: z.coerce.date()
});
var RandomImagePartialSchema = RandomImageSchema.partial();
var RandomImageSchema_default = RandomImageSchema;

export {
  RandomImageSchema,
  RandomImagePartialSchema,
  RandomImageSchema_default
};
//# sourceMappingURL=chunk-LGAOVMNM.js.map