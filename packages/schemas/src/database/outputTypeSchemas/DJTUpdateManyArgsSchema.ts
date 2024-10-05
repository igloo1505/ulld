import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DJTUpdateManyMutationInputSchema } from '../inputTypeSchemas/DJTUpdateManyMutationInputSchema'
import { DJTUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/DJTUncheckedUpdateManyInputSchema'
import { DJTWhereInputSchema } from '../inputTypeSchemas/DJTWhereInputSchema'

export const DJTUpdateManyArgsSchema: z.ZodType<Prisma.DJTUpdateManyArgs> = z.object({
  data: z.union([ DJTUpdateManyMutationInputSchema,DJTUncheckedUpdateManyInputSchema ]),
  where: DJTWhereInputSchema.optional(),
}).strict() ;

export default DJTUpdateManyArgsSchema;
