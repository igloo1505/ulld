import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SettingsCreateManyInputSchema } from '../inputTypeSchemas/SettingsCreateManyInputSchema'

export const SettingsCreateManyArgsSchema: z.ZodType<Prisma.SettingsCreateManyArgs> = z.object({
  data: z.union([ SettingsCreateManyInputSchema,SettingsCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default SettingsCreateManyArgsSchema;
