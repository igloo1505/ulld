import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
import { WhiteboardCreateManyInputSchema } from '../inputTypeSchemas/WhiteboardCreateManyInputSchema.js'
export const WhiteboardCreateManyAndReturnArgsSchema: z.ZodType<Prisma.WhiteboardCreateManyAndReturnArgs> = z.object({
  data: z.union([ WhiteboardCreateManyInputSchema,WhiteboardCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;
export default WhiteboardCreateManyAndReturnArgsSchema;