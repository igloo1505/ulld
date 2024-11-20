import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DJTUpdateInputSchema } from '../inputTypeSchemas/DJTUpdateInputSchema'
import { DJTUncheckedUpdateInputSchema } from '../inputTypeSchemas/DJTUncheckedUpdateInputSchema'
import { DJTWhereUniqueInputSchema } from '../inputTypeSchemas/DJTWhereUniqueInputSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const DJTSelectSchema: z.ZodType<Prisma.DJTSelect> = z.object({
  id: z.boolean().optional(),
  pluginName: z.boolean().optional(),
  modelId: z.boolean().optional(),
  utilityStringField: z.boolean().optional(),
  utilityNumberField: z.boolean().optional(),
  utilityDateField: z.boolean().optional(),
  utilityDateFieldTwo: z.boolean().optional(),
  data: z.boolean().optional(),
}).strict()

export const DJTUpdateArgsSchema: z.ZodType<Prisma.DJTUpdateArgs> = z.object({
  select: DJTSelectSchema.optional(),
  data: z.union([ DJTUpdateInputSchema,DJTUncheckedUpdateInputSchema ]),
  where: DJTWhereUniqueInputSchema,
}).strict() ;

export default DJTUpdateArgsSchema;
