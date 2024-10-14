import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SnippetWhereInputSchema } from '../inputTypeSchemas/SnippetWhereInputSchema'

export const SnippetDeleteManyArgsSchema: z.ZodType<Prisma.SnippetDeleteManyArgs> = z.object({
  where: SnippetWhereInputSchema.optional(),
}).strict() ;

export default SnippetDeleteManyArgsSchema;
