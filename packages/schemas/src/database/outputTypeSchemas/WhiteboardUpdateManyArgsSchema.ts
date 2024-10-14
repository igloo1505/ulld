import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
import { WhiteboardUpdateManyMutationInputSchema } from '../inputTypeSchemas/WhiteboardUpdateManyMutationInputSchema.js'
import { WhiteboardUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/WhiteboardUncheckedUpdateManyInputSchema.js'
import { WhiteboardWhereInputSchema } from '../inputTypeSchemas/WhiteboardWhereInputSchema.js'
export const WhiteboardUpdateManyArgsSchema: z.ZodType<Prisma.WhiteboardUpdateManyArgs> = z.object({
  data: z.union([ WhiteboardUpdateManyMutationInputSchema,WhiteboardUncheckedUpdateManyInputSchema ]),
  where: WhiteboardWhereInputSchema.optional(),
}).strict() ;
export default WhiteboardUpdateManyArgsSchema;