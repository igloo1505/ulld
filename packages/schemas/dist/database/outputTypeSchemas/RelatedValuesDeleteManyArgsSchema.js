import { z } from 'zod';
import { RelatedValuesWhereInputSchema } from '../inputTypeSchemas/RelatedValuesWhereInputSchema.js';
export const RelatedValuesDeleteManyArgsSchema = z.object({
    where: RelatedValuesWhereInputSchema.optional(),
}).strict();
export default RelatedValuesDeleteManyArgsSchema;
