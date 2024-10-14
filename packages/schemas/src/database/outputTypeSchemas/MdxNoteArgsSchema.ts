import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { MdxNoteSelectSchema } from '../inputTypeSchemas/MdxNoteSelectSchema';
import { MdxNoteIncludeSchema } from '../inputTypeSchemas/MdxNoteIncludeSchema';

export const MdxNoteArgsSchema: z.ZodType<Prisma.MdxNoteDefaultArgs> = z.object({
  select: z.lazy(() => MdxNoteSelectSchema).optional(),
  include: z.lazy(() => MdxNoteIncludeSchema).optional(),
}).strict();

export default MdxNoteArgsSchema;
