import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
import { SnippetWhereInputSchema } from '../inputTypeSchemas/SnippetWhereInputSchema.js'
export const SnippetDeleteManyArgsSchema: z.ZodType<Prisma.SnippetDeleteManyArgs> = z.object({
  where: SnippetWhereInputSchema.optional(),
}).strict() ;
export default SnippetDeleteManyArgsSchema;