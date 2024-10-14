import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { AutoSettingCreateManyInputSchema } from '../inputTypeSchemas/AutoSettingCreateManyInputSchema'

export const AutoSettingCreateManyAndReturnArgsSchema: z.ZodType<Prisma.AutoSettingCreateManyAndReturnArgs> = z.object({
  data: z.union([ AutoSettingCreateManyInputSchema,AutoSettingCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default AutoSettingCreateManyAndReturnArgsSchema;
