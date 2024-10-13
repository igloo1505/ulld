import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
..//inputTypeSchemas/IpynbUpdateManyMutationInputSchema.js
..//inputTypeSchemas/IpynbUncheckedUpdateManyInputSchema.js
..//inputTypeSchemas/IpynbWhereInputSchema.js
export const IpynbUpdateManyArgsSchema: z.ZodType<Prisma.IpynbUpdateManyArgs> = z.object({
  data: z.union([ IpynbUpdateManyMutationInputSchema,IpynbUncheckedUpdateManyInputSchema ]),
  where: IpynbWhereInputSchema.optional(),
}).strict() ;
export default IpynbUpdateManyArgsSchema;