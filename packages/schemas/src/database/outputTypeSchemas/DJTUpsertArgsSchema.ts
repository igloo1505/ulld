import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
..//inputTypeSchemas/DJTWhereUniqueInputSchema.js
..//inputTypeSchemas/DJTCreateInputSchema.js
..//inputTypeSchemas/DJTUncheckedCreateInputSchema.js
..//inputTypeSchemas/DJTUpdateInputSchema.js
..//inputTypeSchemas/DJTUncheckedUpdateInputSchema.js
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------
export const DJTSelectSchema: z.ZodType<Prisma.DJTSelect> = z.object({
  id: z.boolean().optional(),
  type: z.boolean().optional(),
  data: z.boolean().optional(),
}).strict()
export const DJTUpsertArgsSchema: z.ZodType<Prisma.DJTUpsertArgs> = z.object({
  select: DJTSelectSchema.optional(),
  where: DJTWhereUniqueInputSchema,
  create: z.union([ DJTCreateInputSchema,DJTUncheckedCreateInputSchema ]),
  update: z.union([ DJTUpdateInputSchema,DJTUncheckedUpdateInputSchema ]),
}).strict() ;
export default DJTUpsertArgsSchema;