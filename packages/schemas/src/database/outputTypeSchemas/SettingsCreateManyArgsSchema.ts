import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
..//inputTypeSchemas/SettingsCreateManyInputSchema.js
export const SettingsCreateManyArgsSchema: z.ZodType<Prisma.SettingsCreateManyArgs> = z.object({
  data: z.union([ SettingsCreateManyInputSchema,SettingsCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;
export default SettingsCreateManyArgsSchema;