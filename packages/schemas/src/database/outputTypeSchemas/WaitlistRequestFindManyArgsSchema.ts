import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { WaitlistRequestWhereInputSchema } from '../inputTypeSchemas/WaitlistRequestWhereInputSchema'
import { WaitlistRequestOrderByWithRelationInputSchema } from '../inputTypeSchemas/WaitlistRequestOrderByWithRelationInputSchema'
import { WaitlistRequestWhereUniqueInputSchema } from '../inputTypeSchemas/WaitlistRequestWhereUniqueInputSchema'
import { WaitlistRequestScalarFieldEnumSchema } from '../inputTypeSchemas/WaitlistRequestScalarFieldEnumSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const WaitlistRequestSelectSchema: z.ZodType<Prisma.WaitlistRequestSelect> = z.object({
  id: z.boolean().optional(),
  email: z.boolean().optional(),
  receivedOn: z.boolean().optional(),
  emailsSent: z.boolean().optional(),
}).strict()

export const WaitlistRequestFindManyArgsSchema: z.ZodType<Prisma.WaitlistRequestFindManyArgs> = z.object({
  select: WaitlistRequestSelectSchema.optional(),
  where: WaitlistRequestWhereInputSchema.optional(),
  orderBy: z.union([ WaitlistRequestOrderByWithRelationInputSchema.array(),WaitlistRequestOrderByWithRelationInputSchema ]).optional(),
  cursor: WaitlistRequestWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ WaitlistRequestScalarFieldEnumSchema,WaitlistRequestScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export default WaitlistRequestFindManyArgsSchema;
