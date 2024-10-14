import {
  SubjectUncheckedUpdateManyInputSchema
} from "./chunk-4EEOT3OE.js";
import {
  SubjectUpdateManyMutationInputSchema
} from "./chunk-V3R3XKVB.js";
import {
  SubjectWhereInputSchema
} from "./chunk-LSOXTUZL.js";

// src/database/outputTypeSchemas/SubjectUpdateManyArgsSchema.ts
import { z } from "zod";
var SubjectUpdateManyArgsSchema = z.object({
  data: z.union([SubjectUpdateManyMutationInputSchema, SubjectUncheckedUpdateManyInputSchema]),
  where: SubjectWhereInputSchema.optional()
}).strict();
var SubjectUpdateManyArgsSchema_default = SubjectUpdateManyArgsSchema;

export {
  SubjectUpdateManyArgsSchema,
  SubjectUpdateManyArgsSchema_default
};
//# sourceMappingURL=chunk-3XVDBKJU.js.map