import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { KanBanCardIncludeSchema } from '../inputTypeSchemas/KanBanCardIncludeSchema'
import { KanBanCardWhereInputSchema } from '../inputTypeSchemas/KanBanCardWhereInputSchema'
import { KanBanCardOrderByWithRelationInputSchema } from '../inputTypeSchemas/KanBanCardOrderByWithRelationInputSchema'
import { KanBanCardWhereUniqueInputSchema } from '../inputTypeSchemas/KanBanCardWhereUniqueInputSchema'
import { KanBanCardScalarFieldEnumSchema } from '../inputTypeSchemas/KanBanCardScalarFieldEnumSchema'
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

export const KanBanCardFindFirstArgsSchema: z.ZodType<Prisma.KanBanCardFindFirstArgs> = z.object({
  select: KanBanCardSelectSchema.optional(),
  include: KanBanCardIncludeSchema.optional(),
  where: KanBanCardWhereInputSchema.optional(),
  orderBy: z.union([ KanBanCardOrderByWithRelationInputSchema.array(),KanBanCardOrderByWithRelationInputSchema ]).optional(),
  cursor: KanBanCardWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ KanBanCardScalarFieldEnumSchema,KanBanCardScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export default KanBanCardFindFirstArgsSchema;
