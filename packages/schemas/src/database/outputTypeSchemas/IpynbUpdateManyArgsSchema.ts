import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { IpynbUpdateManyMutationInputSchema } from '../inputTypeSchemas/IpynbUpdateManyMutationInputSchema'
import { IpynbUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/IpynbUncheckedUpdateManyInputSchema'
import { IpynbWhereInputSchema } from '../inputTypeSchemas/IpynbWhereInputSchema'

export const IpynbUpdateManyArgsSchema: z.ZodType<Prisma.IpynbUpdateManyArgs> = z.object({
  data: z.union([ IpynbUpdateManyMutationInputSchema,IpynbUncheckedUpdateManyInputSchema ]),
  where: IpynbWhereInputSchema.optional(),
}).strict() ;

export default IpynbUpdateManyArgsSchema;
