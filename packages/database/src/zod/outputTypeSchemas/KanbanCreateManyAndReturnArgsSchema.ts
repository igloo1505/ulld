import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { KanbanCreateManyInputSchema } from '../inputTypeSchemas/KanbanCreateManyInputSchema'

export const KanbanCreateManyAndReturnArgsSchema: z.ZodType<Prisma.KanbanCreateManyAndReturnArgs> = z.object({
  data: z.union([ KanbanCreateManyInputSchema,KanbanCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default KanbanCreateManyAndReturnArgsSchema;
