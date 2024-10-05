import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BibEntryCreateWithoutMdxNotesInputSchema } from './BibEntryCreateWithoutMdxNotesInputSchema';
import { BibEntryUncheckedCreateWithoutMdxNotesInputSchema } from './BibEntryUncheckedCreateWithoutMdxNotesInputSchema';
import { BibEntryCreateOrConnectWithoutMdxNotesInputSchema } from './BibEntryCreateOrConnectWithoutMdxNotesInputSchema';
import { BibEntryUpsertWithWhereUniqueWithoutMdxNotesInputSchema } from './BibEntryUpsertWithWhereUniqueWithoutMdxNotesInputSchema';
import { BibEntryWhereUniqueInputSchema } from './BibEntryWhereUniqueInputSchema';
import { BibEntryUpdateWithWhereUniqueWithoutMdxNotesInputSchema } from './BibEntryUpdateWithWhereUniqueWithoutMdxNotesInputSchema';
import { BibEntryUpdateManyWithWhereWithoutMdxNotesInputSchema } from './BibEntryUpdateManyWithWhereWithoutMdxNotesInputSchema';
import { BibEntryScalarWhereInputSchema } from './BibEntryScalarWhereInputSchema';

export const BibEntryUncheckedUpdateManyWithoutMdxNotesNestedInputSchema: z.ZodType<Prisma.BibEntryUncheckedUpdateManyWithoutMdxNotesNestedInput> = z.object({
  create: z.union([ z.lazy(() => BibEntryCreateWithoutMdxNotesInputSchema),z.lazy(() => BibEntryCreateWithoutMdxNotesInputSchema).array(),z.lazy(() => BibEntryUncheckedCreateWithoutMdxNotesInputSchema),z.lazy(() => BibEntryUncheckedCreateWithoutMdxNotesInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => BibEntryCreateOrConnectWithoutMdxNotesInputSchema),z.lazy(() => BibEntryCreateOrConnectWithoutMdxNotesInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => BibEntryUpsertWithWhereUniqueWithoutMdxNotesInputSchema),z.lazy(() => BibEntryUpsertWithWhereUniqueWithoutMdxNotesInputSchema).array() ]).optional(),
  set: z.union([ z.lazy(() => BibEntryWhereUniqueInputSchema),z.lazy(() => BibEntryWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => BibEntryWhereUniqueInputSchema),z.lazy(() => BibEntryWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => BibEntryWhereUniqueInputSchema),z.lazy(() => BibEntryWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => BibEntryWhereUniqueInputSchema),z.lazy(() => BibEntryWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => BibEntryUpdateWithWhereUniqueWithoutMdxNotesInputSchema),z.lazy(() => BibEntryUpdateWithWhereUniqueWithoutMdxNotesInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => BibEntryUpdateManyWithWhereWithoutMdxNotesInputSchema),z.lazy(() => BibEntryUpdateManyWithWhereWithoutMdxNotesInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => BibEntryScalarWhereInputSchema),z.lazy(() => BibEntryScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default BibEntryUncheckedUpdateManyWithoutMdxNotesNestedInputSchema;
