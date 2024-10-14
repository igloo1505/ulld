import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BibEntryCreateWithoutIpynbNotesInputSchema } from './BibEntryCreateWithoutIpynbNotesInputSchema';
import { BibEntryUncheckedCreateWithoutIpynbNotesInputSchema } from './BibEntryUncheckedCreateWithoutIpynbNotesInputSchema';
import { BibEntryCreateOrConnectWithoutIpynbNotesInputSchema } from './BibEntryCreateOrConnectWithoutIpynbNotesInputSchema';
import { BibEntryUpsertWithWhereUniqueWithoutIpynbNotesInputSchema } from './BibEntryUpsertWithWhereUniqueWithoutIpynbNotesInputSchema';
import { BibEntryWhereUniqueInputSchema } from './BibEntryWhereUniqueInputSchema';
import { BibEntryUpdateWithWhereUniqueWithoutIpynbNotesInputSchema } from './BibEntryUpdateWithWhereUniqueWithoutIpynbNotesInputSchema';
import { BibEntryUpdateManyWithWhereWithoutIpynbNotesInputSchema } from './BibEntryUpdateManyWithWhereWithoutIpynbNotesInputSchema';
import { BibEntryScalarWhereInputSchema } from './BibEntryScalarWhereInputSchema';

export const BibEntryUpdateManyWithoutIpynbNotesNestedInputSchema: z.ZodType<Prisma.BibEntryUpdateManyWithoutIpynbNotesNestedInput> = z.object({
  create: z.union([ z.lazy(() => BibEntryCreateWithoutIpynbNotesInputSchema),z.lazy(() => BibEntryCreateWithoutIpynbNotesInputSchema).array(),z.lazy(() => BibEntryUncheckedCreateWithoutIpynbNotesInputSchema),z.lazy(() => BibEntryUncheckedCreateWithoutIpynbNotesInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => BibEntryCreateOrConnectWithoutIpynbNotesInputSchema),z.lazy(() => BibEntryCreateOrConnectWithoutIpynbNotesInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => BibEntryUpsertWithWhereUniqueWithoutIpynbNotesInputSchema),z.lazy(() => BibEntryUpsertWithWhereUniqueWithoutIpynbNotesInputSchema).array() ]).optional(),
  set: z.union([ z.lazy(() => BibEntryWhereUniqueInputSchema),z.lazy(() => BibEntryWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => BibEntryWhereUniqueInputSchema),z.lazy(() => BibEntryWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => BibEntryWhereUniqueInputSchema),z.lazy(() => BibEntryWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => BibEntryWhereUniqueInputSchema),z.lazy(() => BibEntryWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => BibEntryUpdateWithWhereUniqueWithoutIpynbNotesInputSchema),z.lazy(() => BibEntryUpdateWithWhereUniqueWithoutIpynbNotesInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => BibEntryUpdateManyWithWhereWithoutIpynbNotesInputSchema),z.lazy(() => BibEntryUpdateManyWithWhereWithoutIpynbNotesInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => BibEntryScalarWhereInputSchema),z.lazy(() => BibEntryScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default BibEntryUpdateManyWithoutIpynbNotesNestedInputSchema;
