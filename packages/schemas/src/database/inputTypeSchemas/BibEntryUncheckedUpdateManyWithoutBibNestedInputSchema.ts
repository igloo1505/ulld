import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { BibEntryCreateWithoutBibInputSchema } from './BibEntryCreateWithoutBibInputSchema.js';
import { BibEntryUncheckedCreateWithoutBibInputSchema } from './BibEntryUncheckedCreateWithoutBibInputSchema.js';
import { BibEntryCreateOrConnectWithoutBibInputSchema } from './BibEntryCreateOrConnectWithoutBibInputSchema.js';
import { BibEntryUpsertWithWhereUniqueWithoutBibInputSchema } from './BibEntryUpsertWithWhereUniqueWithoutBibInputSchema.js';
import { BibEntryCreateManyBibInputEnvelopeSchema } from './BibEntryCreateManyBibInputEnvelopeSchema.js';
import { BibEntryWhereUniqueInputSchema } from './BibEntryWhereUniqueInputSchema.js';
import { BibEntryUpdateWithWhereUniqueWithoutBibInputSchema } from './BibEntryUpdateWithWhereUniqueWithoutBibInputSchema.js';
import { BibEntryUpdateManyWithWhereWithoutBibInputSchema } from './BibEntryUpdateManyWithWhereWithoutBibInputSchema.js';
import { BibEntryScalarWhereInputSchema } from './BibEntryScalarWhereInputSchema.js';
export const BibEntryUncheckedUpdateManyWithoutBibNestedInputSchema: z.ZodType<Prisma.BibEntryUncheckedUpdateManyWithoutBibNestedInput> = z.object({
  create: z.union([ z.lazy(() => BibEntryCreateWithoutBibInputSchema),z.lazy(() => BibEntryCreateWithoutBibInputSchema).array(),z.lazy(() => BibEntryUncheckedCreateWithoutBibInputSchema),z.lazy(() => BibEntryUncheckedCreateWithoutBibInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => BibEntryCreateOrConnectWithoutBibInputSchema),z.lazy(() => BibEntryCreateOrConnectWithoutBibInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => BibEntryUpsertWithWhereUniqueWithoutBibInputSchema),z.lazy(() => BibEntryUpsertWithWhereUniqueWithoutBibInputSchema).array() ]).optional(),
  createMany: z.lazy(() => BibEntryCreateManyBibInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => BibEntryWhereUniqueInputSchema),z.lazy(() => BibEntryWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => BibEntryWhereUniqueInputSchema),z.lazy(() => BibEntryWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => BibEntryWhereUniqueInputSchema),z.lazy(() => BibEntryWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => BibEntryWhereUniqueInputSchema),z.lazy(() => BibEntryWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => BibEntryUpdateWithWhereUniqueWithoutBibInputSchema),z.lazy(() => BibEntryUpdateWithWhereUniqueWithoutBibInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => BibEntryUpdateManyWithWhereWithoutBibInputSchema),z.lazy(() => BibEntryUpdateManyWithWhereWithoutBibInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => BibEntryScalarWhereInputSchema),z.lazy(() => BibEntryScalarWhereInputSchema).array() ]).optional(),
}).strict();
export default BibEntryUncheckedUpdateManyWithoutBibNestedInputSchema;