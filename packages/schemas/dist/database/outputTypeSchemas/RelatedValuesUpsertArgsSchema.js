import { z } from 'zod';
import { RelatedValuesIncludeSchema } from '../inputTypeSchemas/RelatedValuesIncludeSchema.js';
import { RelatedValuesWhereUniqueInputSchema } from '../inputTypeSchemas/RelatedValuesWhereUniqueInputSchema.js';
import { RelatedValuesCreateInputSchema } from '../inputTypeSchemas/RelatedValuesCreateInputSchema.js';
import { RelatedValuesUncheckedCreateInputSchema } from '../inputTypeSchemas/RelatedValuesUncheckedCreateInputSchema.js';
import { RelatedValuesUpdateInputSchema } from '../inputTypeSchemas/RelatedValuesUpdateInputSchema.js';
import { RelatedValuesUncheckedUpdateInputSchema } from '../inputTypeSchemas/RelatedValuesUncheckedUpdateInputSchema.js';
import { EquationFindManyArgsSchema } from "../outputTypeSchemas/EquationFindManyArgsSchema";
import { RelatedValuesCountOutputTypeArgsSchema } from "../outputTypeSchemas/RelatedValuesCountOutputTypeArgsSchema";
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------
export const RelatedValuesSelectSchema = z.object({
    id: z.boolean().optional(),
    input: z.boolean().optional(),
    output: z.boolean().optional(),
    equationId: z.boolean().optional(),
    equations: z.union([z.boolean(), z.lazy(() => EquationFindManyArgsSchema)]).optional(),
    _count: z.union([z.boolean(), z.lazy(() => RelatedValuesCountOutputTypeArgsSchema)]).optional(),
}).strict();
export const RelatedValuesUpsertArgsSchema = z.object({
    select: RelatedValuesSelectSchema.optional(),
    include: RelatedValuesIncludeSchema.optional(),
    where: RelatedValuesWhereUniqueInputSchema,
    create: z.union([RelatedValuesCreateInputSchema, RelatedValuesUncheckedCreateInputSchema]),
    update: z.union([RelatedValuesUpdateInputSchema, RelatedValuesUncheckedUpdateInputSchema]),
}).strict();
export default RelatedValuesUpsertArgsSchema;
