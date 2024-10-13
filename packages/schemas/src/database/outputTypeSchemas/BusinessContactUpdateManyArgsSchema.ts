import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
..//inputTypeSchemas/BusinessContactUpdateManyMutationInputSchema.js
..//inputTypeSchemas/BusinessContactUncheckedUpdateManyInputSchema.js
..//inputTypeSchemas/BusinessContactWhereInputSchema.js
export const BusinessContactUpdateManyArgsSchema: z.ZodType<Prisma.BusinessContactUpdateManyArgs> = z.object({
  data: z.union([ BusinessContactUpdateManyMutationInputSchema,BusinessContactUncheckedUpdateManyInputSchema ]),
  where: BusinessContactWhereInputSchema.optional(),
}).strict() ;
export default BusinessContactUpdateManyArgsSchema;