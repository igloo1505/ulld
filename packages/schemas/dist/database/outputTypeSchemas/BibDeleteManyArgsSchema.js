import { z } from 'zod';
import { BibWhereInputSchema } from '../inputTypeSchemas/BibWhereInputSchema.js';
export const BibDeleteManyArgsSchema = z.object({
    where: BibWhereInputSchema.optional(),
}).strict();
export default BibDeleteManyArgsSchema;
