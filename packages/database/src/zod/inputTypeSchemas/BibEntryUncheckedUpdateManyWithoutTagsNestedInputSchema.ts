import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BibEntryCreateWithoutTagsInputSchema } from './BibEntryCreateWithoutTagsInputSchema';
import { BibEntryUncheckedCreateWithoutTagsInputSchema } from './BibEntryUncheckedCreateWithoutTagsInputSchema';
import { BibEntryCreateOrConnectWithoutTagsInputSchema } from './BibEntryCreateOrConnectWithoutTagsInputSchema';
import { BibEntryUpsertWithWhereUniqueWithoutTagsInputSchema } from './BibEntryUpsertWithWhereUniqueWithoutTagsInputSchema';
import { BibEntryWhereUniqueInputSchema } from './BibEntryWhereUniqueInputSchema';
import { BibEntryUpdateWithWhereUniqueWithoutTagsInputSchema } from './BibEntryUpdateWithWhereUniqueWithoutTagsInputSchema';
import { BibEntryUpdateManyWithWhereWithoutTagsInputSchema } from './BibEntryUpdateManyWithWhereWithoutTagsInputSchema';
import { BibEntryScalarWhereInputSchema } from './BibEntryScalarWhereInputSchema';

export const BibEntryUncheckedUpdateManyWithoutTagsNestedInputSchema: z.ZodType<Prisma.BibEntryUncheckedUpdateManyWithoutTagsNestedInput> = z.object({
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

export default BibEntryUncheckedUpdateManyWithoutTagsNestedInputSchema;
