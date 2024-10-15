import { z } from 'zod';
import { DefinitionScalarWhereInputSchema } from './DefinitionScalarWhereInputSchema.js';
import { DefinitionUpdateManyMutationInputSchema } from './DefinitionUpdateManyMutationInputSchema.js';
import { DefinitionUncheckedUpdateManyWithoutMdxNoteInputSchema } from './DefinitionUncheckedUpdateManyWithoutMdxNoteInputSchema.js';
export const DefinitionUpdateManyWithWhereWithoutMdxNoteInputSchema = z.object({
    where: z.lazy(() => DefinitionScalarWhereInputSchema),
    data: z.union([z.lazy(() => DefinitionUpdateManyMutationInputSchema), z.lazy(() => DefinitionUncheckedUpdateManyWithoutMdxNoteInputSchema)]),
}).strict();
export default DefinitionUpdateManyWithWhereWithoutMdxNoteInputSchema;
