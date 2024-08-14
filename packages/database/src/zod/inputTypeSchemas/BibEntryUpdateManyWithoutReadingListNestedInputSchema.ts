import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BibEntryCreateWithoutReadingListInputSchema } from './BibEntryCreateWithoutReadingListInputSchema';
import { BibEntryUncheckedCreateWithoutReadingListInputSchema } from './BibEntryUncheckedCreateWithoutReadingListInputSchema';
import { BibEntryCreateOrConnectWithoutReadingListInputSchema } from './BibEntryCreateOrConnectWithoutReadingListInputSchema';
import { BibEntryUpsertWithWhereUniqueWithoutReadingListInputSchema } from './BibEntryUpsertWithWhereUniqueWithoutReadingListInputSchema';
import { BibEntryWhereUniqueInputSchema } from './BibEntryWhereUniqueInputSchema';
import { BibEntryUpdateWithWhereUniqueWithoutReadingListInputSchema } from './BibEntryUpdateWithWhereUniqueWithoutReadingListInputSchema';
import { BibEntryUpdateManyWithWhereWithoutReadingListInputSchema } from './BibEntryUpdateManyWithWhereWithoutReadingListInputSchema';
import { BibEntryScalarWhereInputSchema } from './BibEntryScalarWhereInputSchema';

export const BibEntryUpdateManyWithoutReadingListNestedInputSchema: z.ZodType<Prisma.BibEntryUpdateManyWithoutReadingListNestedInput> = z.object({
  create: z.union([ z.lazy(() => BibEntryCreateWithoutReadingListInputSchema),z.lazy(() => BibEntryCreateWithoutReadingListInputSchema).array(),z.lazy(() => BibEntryUncheckedCreateWithoutReadingListInputSchema),z.lazy(() => BibEntryUncheckedCreateWithoutReadingListInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => BibEntryCreateOrConnectWithoutReadingListInputSchema),z.lazy(() => BibEntryCreateOrConnectWithoutReadingListInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => BibEntryUpsertWithWhereUniqueWithoutReadingListInputSchema),z.lazy(() => BibEntryUpsertWithWhereUniqueWithoutReadingListInputSchema).array() ]).optional(),
  set: z.union([ z.lazy(() => BibEntryWhereUniqueInputSchema),z.lazy(() => BibEntryWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => BibEntryWhereUniqueInputSchema),z.lazy(() => BibEntryWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => BibEntryWhereUniqueInputSchema),z.lazy(() => BibEntryWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => BibEntryWhereUniqueInputSchema),z.lazy(() => BibEntryWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => BibEntryUpdateWithWhereUniqueWithoutReadingListInputSchema),z.lazy(() => BibEntryUpdateWithWhereUniqueWithoutReadingListInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => BibEntryUpdateManyWithWhereWithoutReadingListInputSchema),z.lazy(() => BibEntryUpdateManyWithWhereWithoutReadingListInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => BibEntryScalarWhereInputSchema),z.lazy(() => BibEntryScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default BibEntryUpdateManyWithoutReadingListNestedInputSchema;
