import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { AutoSettingWhereUniqueInputSchema } from '../inputTypeSchemas/AutoSettingWhereUniqueInputSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const AutoSettingSelectSchema: z.ZodType<Prisma.AutoSettingSelect> = z.object({
  id: z.boolean().optional(),
  type: z.boolean().optional(),
  glob: z.boolean().optional(),
  value: z.boolean().optional(),
}).strict()

export const AutoSettingFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.AutoSettingFindUniqueOrThrowArgs> = z.object({
  select: AutoSettingSelectSchema.optional(),
  where: AutoSettingWhereUniqueInputSchema,
}).strict() ;

export default AutoSettingFindUniqueOrThrowArgsSchema;
