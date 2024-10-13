import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
..//inputTypeSchemas/WhiteboardUpdateManyMutationInputSchema.js
..//inputTypeSchemas/WhiteboardUncheckedUpdateManyInputSchema.js
..//inputTypeSchemas/WhiteboardWhereInputSchema.js
export const WhiteboardUpdateManyArgsSchema: z.ZodType<Prisma.WhiteboardUpdateManyArgs> = z.object({
  data: z.union([ WhiteboardUpdateManyMutationInputSchema,WhiteboardUncheckedUpdateManyInputSchema ]),
  where: WhiteboardWhereInputSchema.optional(),
}).strict() ;
export default WhiteboardUpdateManyArgsSchema;