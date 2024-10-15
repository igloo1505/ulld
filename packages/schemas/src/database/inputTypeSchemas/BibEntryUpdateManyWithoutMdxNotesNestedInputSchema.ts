import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { BibEntryCreateWithoutMdxNotesInputSchema } from './BibEntryCreateWithoutMdxNotesInputSchema.js';
import { BibEntryUncheckedCreateWithoutMdxNotesInputSchema } from './BibEntryUncheckedCreateWithoutMdxNotesInputSchema.js';
import { BibEntryCreateOrConnectWithoutMdxNotesInputSchema } from './BibEntryCreateOrConnectWithoutMdxNotesInputSchema.js';
import { BibEntryUpsertWithWhereUniqueWithoutMdxNotesInputSchema } from './BibEntryUpsertWithWhereUniqueWithoutMdxNotesInputSchema.js';
import { BibEntryWhereUniqueInputSchema } from './BibEntryWhereUniqueInputSchema.js';
import { BibEntryUpdateWithWhereUniqueWithoutMdxNotesInputSchema } from './BibEntryUpdateWithWhereUniqueWithoutMdxNotesInputSchema.js';
import { BibEntryUpdateManyWithWhereWithoutMdxNotesInputSchema } from './BibEntryUpdateManyWithWhereWithoutMdxNotesInputSchema.js';
import { BibEntryScalarWhereInputSchema } from './BibEntryScalarWhereInputSchema.js';
export const BibEntryUpdateManyWithoutMdxNotesNestedInputSchema: z.ZodType<Prisma.BibEntryUpdateManyWithoutMdxNotesNestedInput> = z.object({
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
export default BibEntryUpdateManyWithoutMdxNotesNestedInputSchema;