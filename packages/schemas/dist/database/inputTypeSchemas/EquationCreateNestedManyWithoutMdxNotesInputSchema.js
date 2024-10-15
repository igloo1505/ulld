import { z } from 'zod';
import { EquationCreateWithoutMdxNotesInputSchema } from './EquationCreateWithoutMdxNotesInputSchema.js';
import { EquationUncheckedCreateWithoutMdxNotesInputSchema } from './EquationUncheckedCreateWithoutMdxNotesInputSchema.js';
import { EquationCreateOrConnectWithoutMdxNotesInputSchema } from './EquationCreateOrConnectWithoutMdxNotesInputSchema.js';
import { EquationWhereUniqueInputSchema } from './EquationWhereUniqueInputSchema.js';
export const EquationCreateNestedManyWithoutMdxNotesInputSchema = z.object({
    create: z.union([z.lazy(() => EquationCreateWithoutMdxNotesInputSchema), z.lazy(() => EquationCreateWithoutMdxNotesInputSchema).array(), z.lazy(() => EquationUncheckedCreateWithoutMdxNotesInputSchema), z.lazy(() => EquationUncheckedCreateWithoutMdxNotesInputSchema).array()]).optional(),
    connectOrCreate: z.union([z.lazy(() => EquationCreateOrConnectWithoutMdxNotesInputSchema), z.lazy(() => EquationCreateOrConnectWithoutMdxNotesInputSchema).array()]).optional(),
    connect: z.union([z.lazy(() => EquationWhereUniqueInputSchema), z.lazy(() => EquationWhereUniqueInputSchema).array()]).optional(),
}).strict();
export default EquationCreateNestedManyWithoutMdxNotesInputSchema;
