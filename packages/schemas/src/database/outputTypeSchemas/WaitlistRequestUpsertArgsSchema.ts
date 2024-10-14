import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { WaitlistRequestWhereUniqueInputSchema } from '../inputTypeSchemas/WaitlistRequestWhereUniqueInputSchema'
import { WaitlistRequestCreateInputSchema } from '../inputTypeSchemas/WaitlistRequestCreateInputSchema'
import { WaitlistRequestUncheckedCreateInputSchema } from '../inputTypeSchemas/WaitlistRequestUncheckedCreateInputSchema'
import { WaitlistRequestUpdateInputSchema } from '../inputTypeSchemas/WaitlistRequestUpdateInputSchema'
import { WaitlistRequestUncheckedUpdateInputSchema } from '../inputTypeSchemas/WaitlistRequestUncheckedUpdateInputSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const WaitlistRequestSelectSchema: z.ZodType<Prisma.WaitlistRequestSelect> = z.object({
  id: z.boolean().optional(),
  email: z.boolean().optional(),
  receivedOn: z.boolean().optional(),
  emailsSent: z.boolean().optional(),
}).strict()

export const WaitlistRequestUpsertArgsSchema: z.ZodType<Prisma.WaitlistRequestUpsertArgs> = z.object({
  select: WaitlistRequestSelectSchema.optional(),
  where: WaitlistRequestWhereUniqueInputSchema,
  create: z.union([ WaitlistRequestCreateInputSchema,WaitlistRequestUncheckedCreateInputSchema ]),
  update: z.union([ WaitlistRequestUpdateInputSchema,WaitlistRequestUncheckedUpdateInputSchema ]),
}).strict() ;

export default WaitlistRequestUpsertArgsSchema;
