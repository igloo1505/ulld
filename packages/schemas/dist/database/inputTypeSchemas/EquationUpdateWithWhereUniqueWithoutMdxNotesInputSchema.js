import { z } from 'zod';
import { EquationWhereUniqueInputSchema } from './EquationWhereUniqueInputSchema.js';
import { EquationUpdateWithoutMdxNotesInputSchema } from './EquationUpdateWithoutMdxNotesInputSchema.js';
import { EquationUncheckedUpdateWithoutMdxNotesInputSchema } from './EquationUncheckedUpdateWithoutMdxNotesInputSchema.js';
export const EquationUpdateWithWhereUniqueWithoutMdxNotesInputSchema = z.object({
    where: z.lazy(() => EquationWhereUniqueInputSchema),
    data: z.union([z.lazy(() => EquationUpdateWithoutMdxNotesInputSchema), z.lazy(() => EquationUncheckedUpdateWithoutMdxNotesInputSchema)]),
}).strict();
export default EquationUpdateWithWhereUniqueWithoutMdxNotesInputSchema;
