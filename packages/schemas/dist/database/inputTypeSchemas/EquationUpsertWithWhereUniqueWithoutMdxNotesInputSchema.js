import { z } from 'zod';
import { EquationWhereUniqueInputSchema } from './EquationWhereUniqueInputSchema.js';
import { EquationUpdateWithoutMdxNotesInputSchema } from './EquationUpdateWithoutMdxNotesInputSchema.js';
import { EquationUncheckedUpdateWithoutMdxNotesInputSchema } from './EquationUncheckedUpdateWithoutMdxNotesInputSchema.js';
import { EquationCreateWithoutMdxNotesInputSchema } from './EquationCreateWithoutMdxNotesInputSchema.js';
import { EquationUncheckedCreateWithoutMdxNotesInputSchema } from './EquationUncheckedCreateWithoutMdxNotesInputSchema.js';
export const EquationUpsertWithWhereUniqueWithoutMdxNotesInputSchema = z.object({
    where: z.lazy(() => EquationWhereUniqueInputSchema),
    update: z.union([z.lazy(() => EquationUpdateWithoutMdxNotesInputSchema), z.lazy(() => EquationUncheckedUpdateWithoutMdxNotesInputSchema)]),
    create: z.union([z.lazy(() => EquationCreateWithoutMdxNotesInputSchema), z.lazy(() => EquationUncheckedCreateWithoutMdxNotesInputSchema)]),
}).strict();
export default EquationUpsertWithWhereUniqueWithoutMdxNotesInputSchema;
