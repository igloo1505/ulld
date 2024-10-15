import { z } from 'zod';
import { MdxNoteSelectSchema } from '../inputTypeSchemas/MdxNoteSelectSchema.js';
import { MdxNoteIncludeSchema } from '../inputTypeSchemas/MdxNoteIncludeSchema.js';
export const MdxNoteArgsSchema = z.object({
    select: z.lazy(() => MdxNoteSelectSchema).optional(),
    include: z.lazy(() => MdxNoteIncludeSchema).optional(),
}).strict();
export default MdxNoteArgsSchema;
