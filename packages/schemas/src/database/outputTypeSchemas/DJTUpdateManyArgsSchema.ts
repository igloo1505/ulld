import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
..//inputTypeSchemas/DJTUpdateManyMutationInputSchema.js
..//inputTypeSchemas/DJTUncheckedUpdateManyInputSchema.js
..//inputTypeSchemas/DJTWhereInputSchema.js
export const DJTUpdateManyArgsSchema: z.ZodType<Prisma.DJTUpdateManyArgs> = z.object({
  data: z.union([ DJTUpdateManyMutationInputSchema,DJTUncheckedUpdateManyInputSchema ]),
  where: DJTWhereInputSchema.optional(),
}).strict() ;
export default DJTUpdateManyArgsSchema;