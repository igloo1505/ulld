import { z } from 'zod';
import { SubjectUpdateManyMutationInputSchema } from '../inputTypeSchemas/SubjectUpdateManyMutationInputSchema.js';
import { SubjectUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/SubjectUncheckedUpdateManyInputSchema.js';
import { SubjectWhereInputSchema } from '../inputTypeSchemas/SubjectWhereInputSchema.js';
export const SubjectUpdateManyArgsSchema = z.object({
    data: z.union([SubjectUpdateManyMutationInputSchema, SubjectUncheckedUpdateManyInputSchema]),
    where: SubjectWhereInputSchema.optional(),
}).strict();
export default SubjectUpdateManyArgsSchema;
