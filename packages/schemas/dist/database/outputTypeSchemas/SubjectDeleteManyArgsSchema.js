import { z } from 'zod';
import { SubjectWhereInputSchema } from '../inputTypeSchemas/SubjectWhereInputSchema.js';
export const SubjectDeleteManyArgsSchema = z.object({
    where: SubjectWhereInputSchema.optional(),
}).strict();
export default SubjectDeleteManyArgsSchema;
