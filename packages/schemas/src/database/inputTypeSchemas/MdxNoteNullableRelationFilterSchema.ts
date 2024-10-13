import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { MdxNoteWhereInputSchema } from '../MdxNoteWhereInputSchema.js';
export const MdxNoteNullableRelationFilterSchema: z.ZodType<Prisma.MdxNoteNullableRelationFilter> = z.object({
  is: z.lazy(() => MdxNoteWhereInputSchema).optional().nullable(),
  isNot: z.lazy(() => MdxNoteWhereInputSchema).optional().nullable()
}).strict();
export default MdxNoteNullableRelationFilterSchema;