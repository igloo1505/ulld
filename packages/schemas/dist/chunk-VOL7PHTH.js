import {
  RandomImageCreateInputSchema
} from "./chunk-TSFSCV2I.js";
import {
  RandomImageUncheckedCreateInputSchema
} from "./chunk-4ZXR3LEC.js";
import {
  RandomImageUpdateInputSchema
} from "./chunk-F5RHGFEZ.js";
import {
  RandomImageUncheckedUpdateInputSchema
} from "./chunk-33SR3KXZ.js";
import {
  RandomImageWhereUniqueInputSchema
} from "./chunk-7CX6JICO.js";

// src/database/outputTypeSchemas/RandomImageUpsertArgsSchema.ts
import { z } from "zod";
var RandomImageSelectSchema = z.object({
  path: z.boolean().optional(),
  createdAt: z.boolean().optional()
}).strict();
var RandomImageUpsertArgsSchema = z.object({
  select: RandomImageSelectSchema.optional(),
  where: RandomImageWhereUniqueInputSchema,
  create: z.union([RandomImageCreateInputSchema, RandomImageUncheckedCreateInputSchema]),
  update: z.union([RandomImageUpdateInputSchema, RandomImageUncheckedUpdateInputSchema])
}).strict();
var RandomImageUpsertArgsSchema_default = RandomImageUpsertArgsSchema;

export {
  RandomImageSelectSchema,
  RandomImageUpsertArgsSchema,
  RandomImageUpsertArgsSchema_default
};
//# sourceMappingURL=chunk-VOL7PHTH.js.map