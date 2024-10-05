import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { WhiteboardCreateManyInputSchema } from '../inputTypeSchemas/WhiteboardCreateManyInputSchema'

export const WhiteboardCreateManyArgsSchema: z.ZodType<Prisma.WhiteboardCreateManyArgs> = z.object({
  data: z.union([ WhiteboardCreateManyInputSchema,WhiteboardCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default WhiteboardCreateManyArgsSchema;
