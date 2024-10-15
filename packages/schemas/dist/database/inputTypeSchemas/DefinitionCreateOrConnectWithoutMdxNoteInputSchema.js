import { z } from 'zod';
import { DefinitionWhereUniqueInputSchema } from './DefinitionWhereUniqueInputSchema.js';
import { DefinitionCreateWithoutMdxNoteInputSchema } from './DefinitionCreateWithoutMdxNoteInputSchema.js';
import { DefinitionUncheckedCreateWithoutMdxNoteInputSchema } from './DefinitionUncheckedCreateWithoutMdxNoteInputSchema.js';
export const DefinitionCreateOrConnectWithoutMdxNoteInputSchema = z.object({
    where: z.lazy(() => DefinitionWhereUniqueInputSchema),
    create: z.union([z.lazy(() => DefinitionCreateWithoutMdxNoteInputSchema), z.lazy(() => DefinitionUncheckedCreateWithoutMdxNoteInputSchema)]),
}).strict();
export default DefinitionCreateOrConnectWithoutMdxNoteInputSchema;
