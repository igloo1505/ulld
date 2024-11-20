import { z } from 'zod';
import type { Prisma } from '@prisma/client';
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

export const DJTFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.DJTFindUniqueOrThrowArgs> = z.object({
  select: DJTSelectSchema.optional(),
  where: DJTWhereUniqueInputSchema,
}).strict() ;

export default DJTFindUniqueOrThrowArgsSchema;
