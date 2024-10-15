import { z } from 'zod';
import { SequentialNoteListWhereInputSchema } from './SequentialNoteListWhereInputSchema.js';
import { MdxNoteListRelationFilterSchema } from './MdxNoteListRelationFilterSchema.js';
import { IpynbListRelationFilterSchema } from './IpynbListRelationFilterSchema.js';
export const SequentialNoteListWhereUniqueInputSchema = z.object({
    sequentialKey: z.string()
})
    .and(z.object({
    sequentialKey: z.string().optional(),
    AND: z.union([z.lazy(() => SequentialNoteListWhereInputSchema), z.lazy(() => SequentialNoteListWhereInputSchema).array()]).optional(),
    OR: z.lazy(() => SequentialNoteListWhereInputSchema).array().optional(),
    NOT: z.union([z.lazy(() => SequentialNoteListWhereInputSchema), z.lazy(() => SequentialNoteListWhereInputSchema).array()]).optional(),
    MdxNote: z.lazy(() => MdxNoteListRelationFilterSchema).optional(),
    Ipynb: z.lazy(() => IpynbListRelationFilterSchema).optional()
}).strict());
export default SequentialNoteListWhereUniqueInputSchema;
