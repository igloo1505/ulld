import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SettingsCreateManyInputSchema } from '../inputTypeSchemas/SettingsCreateManyInputSchema'

export const SettingsCreateManyAndReturnArgsSchema: z.ZodType<Prisma.SettingsCreateManyAndReturnArgs> = z.object({
  data: z.union([ SettingsCreateManyInputSchema,SettingsCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default SettingsCreateManyAndReturnArgsSchema;
