import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema.js';
import { MdxNoteListRelationFilterSchema } from './MdxNoteListRelationFilterSchema.js';
import { IpynbListRelationFilterSchema } from './IpynbListRelationFilterSchema.js';
export const SequentialNoteListWhereInputSchema = z.object({
    AND: z.union([z.lazy(() => SequentialNoteListWhereInputSchema), z.lazy(() => SequentialNoteListWhereInputSchema).array()]).optional(),
    OR: z.lazy(() => SequentialNoteListWhereInputSchema).array().optional(),
    NOT: z.union([z.lazy(() => SequentialNoteListWhereInputSchema), z.lazy(() => SequentialNoteListWhereInputSchema).array()]).optional(),
    sequentialKey: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
    MdxNote: z.lazy(() => MdxNoteListRelationFilterSchema).optional(),
    Ipynb: z.lazy(() => IpynbListRelationFilterSchema).optional()
}).strict();
export default SequentialNoteListWhereInputSchema;
