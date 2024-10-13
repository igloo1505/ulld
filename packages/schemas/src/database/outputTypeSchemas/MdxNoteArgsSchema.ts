import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
..//inputTypeSchemas/MdxNoteSelectSchema.js
..//inputTypeSchemas/MdxNoteIncludeSchema.js
export const MdxNoteArgsSchema: z.ZodType<Prisma.MdxNoteDefaultArgs> = z.object({
  select: z.lazy(() => MdxNoteSelectSchema).optional(),
  include: z.lazy(() => MdxNoteIncludeSchema).optional(),
}).strict();
export default MdxNoteArgsSchema;