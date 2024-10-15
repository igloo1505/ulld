import { z } from 'zod';
import { SequentialNoteListUpdateWithoutMdxNoteInputSchema } from './SequentialNoteListUpdateWithoutMdxNoteInputSchema.js';
import { SequentialNoteListUncheckedUpdateWithoutMdxNoteInputSchema } from './SequentialNoteListUncheckedUpdateWithoutMdxNoteInputSchema.js';
import { SequentialNoteListCreateWithoutMdxNoteInputSchema } from './SequentialNoteListCreateWithoutMdxNoteInputSchema.js';
import { SequentialNoteListUncheckedCreateWithoutMdxNoteInputSchema } from './SequentialNoteListUncheckedCreateWithoutMdxNoteInputSchema.js';
import { SequentialNoteListWhereInputSchema } from './SequentialNoteListWhereInputSchema.js';
export const SequentialNoteListUpsertWithoutMdxNoteInputSchema = z.object({
    update: z.union([z.lazy(() => SequentialNoteListUpdateWithoutMdxNoteInputSchema), z.lazy(() => SequentialNoteListUncheckedUpdateWithoutMdxNoteInputSchema)]),
    create: z.union([z.lazy(() => SequentialNoteListCreateWithoutMdxNoteInputSchema), z.lazy(() => SequentialNoteListUncheckedCreateWithoutMdxNoteInputSchema)]),
    where: z.lazy(() => SequentialNoteListWhereInputSchema).optional()
}).strict();
export default SequentialNoteListUpsertWithoutMdxNoteInputSchema;
