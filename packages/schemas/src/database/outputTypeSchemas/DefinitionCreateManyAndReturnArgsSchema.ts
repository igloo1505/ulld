import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DefinitionCreateManyInputSchema } from '../inputTypeSchemas/DefinitionCreateManyInputSchema'

export const DefinitionCreateManyAndReturnArgsSchema: z.ZodType<Prisma.DefinitionCreateManyAndReturnArgs> = z.object({
  data: z.union([ DefinitionCreateManyInputSchema,DefinitionCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default DefinitionCreateManyAndReturnArgsSchema;
