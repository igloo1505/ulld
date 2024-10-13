import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { BibEntryCreateWithoutTagsInputSchema } from '../BibEntryCreateWithoutTagsInputSchema.js';
import { BibEntryUncheckedCreateWithoutTagsInputSchema } from '../BibEntryUncheckedCreateWithoutTagsInputSchema.js';
import { BibEntryCreateOrConnectWithoutTagsInputSchema } from '../BibEntryCreateOrConnectWithoutTagsInputSchema.js';
import { BibEntryUpsertWithWhereUniqueWithoutTagsInputSchema } from '../BibEntryUpsertWithWhereUniqueWithoutTagsInputSchema.js';
import { BibEntryWhereUniqueInputSchema } from '../BibEntryWhereUniqueInputSchema.js';
import { BibEntryUpdateWithWhereUniqueWithoutTagsInputSchema } from '../BibEntryUpdateWithWhereUniqueWithoutTagsInputSchema.js';
import { BibEntryUpdateManyWithWhereWithoutTagsInputSchema } from '../BibEntryUpdateManyWithWhereWithoutTagsInputSchema.js';
import { BibEntryScalarWhereInputSchema } from '../BibEntryScalarWhereInputSchema.js';
export const BibEntryUpdateManyWithoutTagsNestedInputSchema: z.ZodType<Prisma.BibEntryUpdateManyWithoutTagsNestedInput> = z.object({
  create: z.union([ z.lazy(() => BibEntryCreateWithoutTagsInputSchema),z.lazy(() => BibEntryCreateWithoutTagsInputSchema).array(),z.lazy(() => BibEntryUncheckedCreateWithoutTagsInputSchema),z.lazy(() => BibEntryUncheckedCreateWithoutTagsInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => BibEntryCreateOrConnectWithoutTagsInputSchema),z.lazy(() => BibEntryCreateOrConnectWithoutTagsInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => BibEntryUpsertWithWhereUniqueWithoutTagsInputSchema),z.lazy(() => BibEntryUpsertWithWhereUniqueWithoutTagsInputSchema).array() ]).optional(),
  set: z.union([ z.lazy(() => BibEntryWhereUniqueInputSchema),z.lazy(() => BibEntryWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => BibEntryWhereUniqueInputSchema),z.lazy(() => BibEntryWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => BibEntryWhereUniqueInputSchema),z.lazy(() => BibEntryWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => BibEntryWhereUniqueInputSchema),z.lazy(() => BibEntryWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => BibEntryUpdateWithWhereUniqueWithoutTagsInputSchema),z.lazy(() => BibEntryUpdateWithWhereUniqueWithoutTagsInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => BibEntryUpdateManyWithWhereWithoutTagsInputSchema),z.lazy(() => BibEntryUpdateManyWithWhereWithoutTagsInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => BibEntryScalarWhereInputSchema),z.lazy(() => BibEntryScalarWhereInputSchema).array() ]).optional(),
}).strict();
export default BibEntryUpdateManyWithoutTagsNestedInputSchema;