import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
import { WhiteboardCreateManyInputSchema } from '../inputTypeSchemas/WhiteboardCreateManyInputSchema.js'
export const WhiteboardCreateManyArgsSchema: z.ZodType<Prisma.WhiteboardCreateManyArgs> = z.object({
  data: z.union([ WhiteboardCreateManyInputSchema,WhiteboardCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;
export default WhiteboardCreateManyArgsSchema;