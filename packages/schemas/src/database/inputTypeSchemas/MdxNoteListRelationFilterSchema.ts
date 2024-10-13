import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { MdxNoteWhereInputSchema } from '../MdxNoteWhereInputSchema.js';
export const MdxNoteListRelationFilterSchema: z.ZodType<Prisma.MdxNoteListRelationFilter> = z.object({
  every: z.lazy(() => MdxNoteWhereInputSchema).optional(),
  some: z.lazy(() => MdxNoteWhereInputSchema).optional(),
  none: z.lazy(() => MdxNoteWhereInputSchema).optional()
}).strict();
export default MdxNoteListRelationFilterSchema;