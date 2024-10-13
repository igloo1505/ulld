import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { BibCreateWithoutEntriesInputSchema } from '../BibCreateWithoutEntriesInputSchema.js';
import { BibUncheckedCreateWithoutEntriesInputSchema } from '../BibUncheckedCreateWithoutEntriesInputSchema.js';
import { BibCreateOrConnectWithoutEntriesInputSchema } from '../BibCreateOrConnectWithoutEntriesInputSchema.js';
import { BibUpsertWithoutEntriesInputSchema } from '../BibUpsertWithoutEntriesInputSchema.js';
import { BibWhereInputSchema } from '../BibWhereInputSchema.js';
import { BibWhereUniqueInputSchema } from '../BibWhereUniqueInputSchema.js';
import { BibUpdateToOneWithWhereWithoutEntriesInputSchema } from '../BibUpdateToOneWithWhereWithoutEntriesInputSchema.js';
import { BibUpdateWithoutEntriesInputSchema } from '../BibUpdateWithoutEntriesInputSchema.js';
import { BibUncheckedUpdateWithoutEntriesInputSchema } from '../BibUncheckedUpdateWithoutEntriesInputSchema.js';
export const BibUpdateOneWithoutEntriesNestedInputSchema: z.ZodType<Prisma.BibUpdateOneWithoutEntriesNestedInput> = z.object({
  create: z.union([ z.lazy(() => BibCreateWithoutEntriesInputSchema),z.lazy(() => BibUncheckedCreateWithoutEntriesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => BibCreateOrConnectWithoutEntriesInputSchema).optional(),
  upsert: z.lazy(() => BibUpsertWithoutEntriesInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => BibWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => BibWhereInputSchema) ]).optional(),
  connect: z.lazy(() => BibWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => BibUpdateToOneWithWhereWithoutEntriesInputSchema),z.lazy(() => BibUpdateWithoutEntriesInputSchema),z.lazy(() => BibUncheckedUpdateWithoutEntriesInputSchema) ]).optional(),
}).strict();
export default BibUpdateOneWithoutEntriesNestedInputSchema;