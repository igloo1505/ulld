import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { KanbanCreateManyInputSchema } from '../inputTypeSchemas/KanbanCreateManyInputSchema'

export const KanbanCreateManyArgsSchema: z.ZodType<Prisma.KanbanCreateManyArgs> = z.object({
  data: z.union([ KanbanCreateManyInputSchema,KanbanCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default KanbanCreateManyArgsSchema;
