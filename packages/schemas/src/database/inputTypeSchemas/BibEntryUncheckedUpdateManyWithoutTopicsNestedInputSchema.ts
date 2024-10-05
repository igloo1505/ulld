import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BibEntryCreateWithoutTopicsInputSchema } from './BibEntryCreateWithoutTopicsInputSchema';
import { BibEntryUncheckedCreateWithoutTopicsInputSchema } from './BibEntryUncheckedCreateWithoutTopicsInputSchema';
import { BibEntryCreateOrConnectWithoutTopicsInputSchema } from './BibEntryCreateOrConnectWithoutTopicsInputSchema';
import { BibEntryUpsertWithWhereUniqueWithoutTopicsInputSchema } from './BibEntryUpsertWithWhereUniqueWithoutTopicsInputSchema';
import { BibEntryWhereUniqueInputSchema } from './BibEntryWhereUniqueInputSchema';
import { BibEntryUpdateWithWhereUniqueWithoutTopicsInputSchema } from './BibEntryUpdateWithWhereUniqueWithoutTopicsInputSchema';
import { BibEntryUpdateManyWithWhereWithoutTopicsInputSchema } from './BibEntryUpdateManyWithWhereWithoutTopicsInputSchema';
import { BibEntryScalarWhereInputSchema } from './BibEntryScalarWhereInputSchema';

export const BibEntryUncheckedUpdateManyWithoutTopicsNestedInputSchema: z.ZodType<Prisma.BibEntryUncheckedUpdateManyWithoutTopicsNestedInput> = z.object({
  create: z.union([ z.lazy(() => BibEntryCreateWithoutTopicsInputSchema),z.lazy(() => BibEntryCreateWithoutTopicsInputSchema).array(),z.lazy(() => BibEntryUncheckedCreateWithoutTopicsInputSchema),z.lazy(() => BibEntryUncheckedCreateWithoutTopicsInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => BibEntryCreateOrConnectWithoutTopicsInputSchema),z.lazy(() => BibEntryCreateOrConnectWithoutTopicsInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => BibEntryUpsertWithWhereUniqueWithoutTopicsInputSchema),z.lazy(() => BibEntryUpsertWithWhereUniqueWithoutTopicsInputSchema).array() ]).optional(),
  set: z.union([ z.lazy(() => BibEntryWhereUniqueInputSchema),z.lazy(() => BibEntryWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => BibEntryWhereUniqueInputSchema),z.lazy(() => BibEntryWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => BibEntryWhereUniqueInputSchema),z.lazy(() => BibEntryWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => BibEntryWhereUniqueInputSchema),z.lazy(() => BibEntryWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => BibEntryUpdateWithWhereUniqueWithoutTopicsInputSchema),z.lazy(() => BibEntryUpdateWithWhereUniqueWithoutTopicsInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => BibEntryUpdateManyWithWhereWithoutTopicsInputSchema),z.lazy(() => BibEntryUpdateManyWithWhereWithoutTopicsInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => BibEntryScalarWhereInputSchema),z.lazy(() => BibEntryScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default BibEntryUncheckedUpdateManyWithoutTopicsNestedInputSchema;
