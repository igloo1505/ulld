import { z } from 'zod';
import { DietaryItemIncludeSchema } from '../inputTypeSchemas/DietaryItemIncludeSchema.js';
import { DietaryItemUpdateInputSchema } from '../inputTypeSchemas/DietaryItemUpdateInputSchema.js';
import { DietaryItemUncheckedUpdateInputSchema } from '../inputTypeSchemas/DietaryItemUncheckedUpdateInputSchema.js';
import { DietaryItemWhereUniqueInputSchema } from '../inputTypeSchemas/DietaryItemWhereUniqueInputSchema.js';
import { DietFindManyArgsSchema } from "../outputTypeSchemas/DietFindManyArgsSchema";
import { ServingFindManyArgsSchema } from "../outputTypeSchemas/ServingFindManyArgsSchema";
import { DietaryItemCountOutputTypeArgsSchema } from "../outputTypeSchemas/DietaryItemCountOutputTypeArgsSchema";
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------
export const DietaryItemSelectSchema = z.object({
    id: z.boolean().optional(),
    name: z.boolean().optional(),
    barcode: z.boolean().optional(),
    gi: z.boolean().optional(),
    calsPerOz: z.boolean().optional(),
    glutenFree: z.boolean().optional(),
    minimalFructose: z.boolean().optional(),
    natural: z.boolean().optional(),
    organic: z.boolean().optional(),
    impactScore: z.boolean().optional(),
    Diet: z.union([z.boolean(), z.lazy(() => DietFindManyArgsSchema)]).optional(),
    Serving: z.union([z.boolean(), z.lazy(() => ServingFindManyArgsSchema)]).optional(),
    _count: z.union([z.boolean(), z.lazy(() => DietaryItemCountOutputTypeArgsSchema)]).optional(),
}).strict();
export const DietaryItemUpdateArgsSchema = z.object({
    select: DietaryItemSelectSchema.optional(),
    include: DietaryItemIncludeSchema.optional(),
    data: z.union([DietaryItemUpdateInputSchema, DietaryItemUncheckedUpdateInputSchema]),
    where: DietaryItemWhereUniqueInputSchema,
}).strict();
export default DietaryItemUpdateArgsSchema;
