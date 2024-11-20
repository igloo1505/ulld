import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { WhiteboardCreateManyInputSchema } from '../inputTypeSchemas/WhiteboardCreateManyInputSchema'

export const WhiteboardCreateManyAndReturnArgsSchema: z.ZodType<Prisma.WhiteboardCreateManyAndReturnArgs> = z.object({
  data: z.union([ WhiteboardCreateManyInputSchema,WhiteboardCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default WhiteboardCreateManyAndReturnArgsSchema;
