import { z } from 'zod';
import { EquationScalarWhereInputSchema } from './EquationScalarWhereInputSchema.js';
import { EquationUpdateManyMutationInputSchema } from './EquationUpdateManyMutationInputSchema.js';
import { EquationUncheckedUpdateManyWithoutMdxNotesInputSchema } from './EquationUncheckedUpdateManyWithoutMdxNotesInputSchema.js';
export const EquationUpdateManyWithWhereWithoutMdxNotesInputSchema = z.object({
    where: z.lazy(() => EquationScalarWhereInputSchema),
    data: z.union([z.lazy(() => EquationUpdateManyMutationInputSchema), z.lazy(() => EquationUncheckedUpdateManyWithoutMdxNotesInputSchema)]),
}).strict();
export default EquationUpdateManyWithWhereWithoutMdxNotesInputSchema;
