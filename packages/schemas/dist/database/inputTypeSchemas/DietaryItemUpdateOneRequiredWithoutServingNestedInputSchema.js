import { z } from 'zod';
import { DietaryItemCreateWithoutServingInputSchema } from './DietaryItemCreateWithoutServingInputSchema.js';
import { DietaryItemUncheckedCreateWithoutServingInputSchema } from './DietaryItemUncheckedCreateWithoutServingInputSchema.js';
import { DietaryItemCreateOrConnectWithoutServingInputSchema } from './DietaryItemCreateOrConnectWithoutServingInputSchema.js';
import { DietaryItemUpsertWithoutServingInputSchema } from './DietaryItemUpsertWithoutServingInputSchema.js';
import { DietaryItemWhereUniqueInputSchema } from './DietaryItemWhereUniqueInputSchema.js';
import { DietaryItemUpdateToOneWithWhereWithoutServingInputSchema } from './DietaryItemUpdateToOneWithWhereWithoutServingInputSchema.js';
import { DietaryItemUpdateWithoutServingInputSchema } from './DietaryItemUpdateWithoutServingInputSchema.js';
import { DietaryItemUncheckedUpdateWithoutServingInputSchema } from './DietaryItemUncheckedUpdateWithoutServingInputSchema.js';
export const DietaryItemUpdateOneRequiredWithoutServingNestedInputSchema = z.object({
    create: z.union([z.lazy(() => DietaryItemCreateWithoutServingInputSchema), z.lazy(() => DietaryItemUncheckedCreateWithoutServingInputSchema)]).optional(),
    connectOrCreate: z.lazy(() => DietaryItemCreateOrConnectWithoutServingInputSchema).optional(),
    upsert: z.lazy(() => DietaryItemUpsertWithoutServingInputSchema).optional(),
    connect: z.lazy(() => DietaryItemWhereUniqueInputSchema).optional(),
    update: z.union([z.lazy(() => DietaryItemUpdateToOneWithWhereWithoutServingInputSchema), z.lazy(() => DietaryItemUpdateWithoutServingInputSchema), z.lazy(() => DietaryItemUncheckedUpdateWithoutServingInputSchema)]).optional(),
}).strict();
export default DietaryItemUpdateOneRequiredWithoutServingNestedInputSchema;
