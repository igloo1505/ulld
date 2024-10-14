import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { KanBanCardIncludeSchema } from '../inputTypeSchemas/KanBanCardIncludeSchema'
import { KanBanCardCreateInputSchema } from '../inputTypeSchemas/KanBanCardCreateInputSchema'
import { KanBanCardUncheckedCreateInputSchema } from '../inputTypeSchemas/KanBanCardUncheckedCreateInputSchema'
import { KanBanListArgsSchema } from "../outputTypeSchemas/KanBanListArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const KanBanCardSelectSchema: z.ZodType<Prisma.KanBanCardSelect> = z.object({
  id: z.boolean().optional(),
  listId: z.boolean().optional(),
  indexWithinList: z.boolean().optional(),
  label: z.boolean().optional(),
  details: z.boolean().optional(),
  KanBanList: z.union([z.boolean(),z.lazy(() => KanBanListArgsSchema)]).optional(),
}).strict()

export const KanBanCardCreateArgsSchema: z.ZodType<Prisma.KanBanCardCreateArgs> = z.object({
  select: KanBanCardSelectSchema.optional(),
  include: KanBanCardIncludeSchema.optional(),
  data: z.union([ KanBanCardCreateInputSchema,KanBanCardUncheckedCreateInputSchema ]),
}).strict() ;

export default KanBanCardCreateArgsSchema;
