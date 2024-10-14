import {
  RandomImageUpdateInputSchema
} from "./chunk-F5RHGFEZ.js";
import {
  RandomImageUncheckedUpdateInputSchema
} from "./chunk-33SR3KXZ.js";
import {
  RandomImageWhereUniqueInputSchema
} from "./chunk-7CX6JICO.js";

// src/database/outputTypeSchemas/RandomImageUpdateArgsSchema.ts
import { z } from "zod";
var RandomImageSelectSchema = z.object({
  path: z.boolean().optional(),
  createdAt: z.boolean().optional()
}).strict();
var RandomImageUpdateArgsSchema = z.object({
  select: RandomImageSelectSchema.optional(),
  data: z.union([RandomImageUpdateInputSchema, RandomImageUncheckedUpdateInputSchema]),
  where: RandomImageWhereUniqueInputSchema
}).strict();
var RandomImageUpdateArgsSchema_default = RandomImageUpdateArgsSchema;

export {
  RandomImageSelectSchema,
  RandomImageUpdateArgsSchema,
  RandomImageUpdateArgsSchema_default
};
//# sourceMappingURL=chunk-4QMBDSTA.js.map