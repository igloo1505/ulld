import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { WhiteboardUpdateManyMutationInputSchema } from '../inputTypeSchemas/WhiteboardUpdateManyMutationInputSchema'
import { WhiteboardUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/WhiteboardUncheckedUpdateManyInputSchema'
import { WhiteboardWhereInputSchema } from '../inputTypeSchemas/WhiteboardWhereInputSchema'

export const WhiteboardUpdateManyArgsSchema: z.ZodType<Prisma.WhiteboardUpdateManyArgs> = z.object({
  data: z.union([ WhiteboardUpdateManyMutationInputSchema,WhiteboardUncheckedUpdateManyInputSchema ]),
  where: WhiteboardWhereInputSchema.optional(),
}).strict() ;

export default WhiteboardUpdateManyArgsSchema;
