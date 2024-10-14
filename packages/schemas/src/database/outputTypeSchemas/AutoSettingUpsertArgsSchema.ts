import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { AutoSettingWhereUniqueInputSchema } from '../inputTypeSchemas/AutoSettingWhereUniqueInputSchema'
import { AutoSettingCreateInputSchema } from '../inputTypeSchemas/AutoSettingCreateInputSchema'
import { AutoSettingUncheckedCreateInputSchema } from '../inputTypeSchemas/AutoSettingUncheckedCreateInputSchema'
import { AutoSettingUpdateInputSchema } from '../inputTypeSchemas/AutoSettingUpdateInputSchema'
import { AutoSettingUncheckedUpdateInputSchema } from '../inputTypeSchemas/AutoSettingUncheckedUpdateInputSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const AutoSettingSelectSchema: z.ZodType<Prisma.AutoSettingSelect> = z.object({
  id: z.boolean().optional(),
  type: z.boolean().optional(),
  glob: z.boolean().optional(),
  value: z.boolean().optional(),
}).strict()

export const AutoSettingUpsertArgsSchema: z.ZodType<Prisma.AutoSettingUpsertArgs> = z.object({
  select: AutoSettingSelectSchema.optional(),
  where: AutoSettingWhereUniqueInputSchema,
  create: z.union([ AutoSettingCreateInputSchema,AutoSettingUncheckedCreateInputSchema ]),
  update: z.union([ AutoSettingUpdateInputSchema,AutoSettingUncheckedUpdateInputSchema ]),
}).strict() ;

export default AutoSettingUpsertArgsSchema;
