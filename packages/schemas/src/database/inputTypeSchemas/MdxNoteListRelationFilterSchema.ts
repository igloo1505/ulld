import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { MdxNoteWhereInputSchema } from './MdxNoteWhereInputSchema';

export const MdxNoteListRelationFilterSchema: z.ZodType<Prisma.MdxNoteListRelationFilter> = z.object({
  every: z.lazy(() => MdxNoteWhereInputSchema).optional(),
  some: z.lazy(() => MdxNoteWhereInputSchema).optional(),
  none: z.lazy(() => MdxNoteWhereInputSchema).optional()
}).strict();

export default MdxNoteListRelationFilterSchema;
