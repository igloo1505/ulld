import { z } from 'zod';
import { BibUpdateManyMutationInputSchema } from '../inputTypeSchemas/BibUpdateManyMutationInputSchema.js';
import { BibUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/BibUncheckedUpdateManyInputSchema.js';
import { BibWhereInputSchema } from '../inputTypeSchemas/BibWhereInputSchema.js';
export const BibUpdateManyArgsSchema = z.object({
    data: z.union([BibUpdateManyMutationInputSchema, BibUncheckedUpdateManyInputSchema]),
    where: BibWhereInputSchema.optional(),
}).strict();
export default BibUpdateManyArgsSchema;
