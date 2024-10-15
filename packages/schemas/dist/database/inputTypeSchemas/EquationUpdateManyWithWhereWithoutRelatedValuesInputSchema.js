import { z } from 'zod';
import { EquationScalarWhereInputSchema } from './EquationScalarWhereInputSchema.js';
import { EquationUpdateManyMutationInputSchema } from './EquationUpdateManyMutationInputSchema.js';
import { EquationUncheckedUpdateManyWithoutRelatedValuesInputSchema } from './EquationUncheckedUpdateManyWithoutRelatedValuesInputSchema.js';
export const EquationUpdateManyWithWhereWithoutRelatedValuesInputSchema = z.object({
    where: z.lazy(() => EquationScalarWhereInputSchema),
    data: z.union([z.lazy(() => EquationUpdateManyMutationInputSchema), z.lazy(() => EquationUncheckedUpdateManyWithoutRelatedValuesInputSchema)]),
}).strict();
export default EquationUpdateManyWithWhereWithoutRelatedValuesInputSchema;
