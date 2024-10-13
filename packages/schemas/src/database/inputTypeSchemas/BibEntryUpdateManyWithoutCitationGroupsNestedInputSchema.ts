import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { BibEntryCreateWithoutCitationGroupsInputSchema } from '../BibEntryCreateWithoutCitationGroupsInputSchema.js';
import { BibEntryUncheckedCreateWithoutCitationGroupsInputSchema } from '../BibEntryUncheckedCreateWithoutCitationGroupsInputSchema.js';
import { BibEntryCreateOrConnectWithoutCitationGroupsInputSchema } from '../BibEntryCreateOrConnectWithoutCitationGroupsInputSchema.js';
import { BibEntryUpsertWithWhereUniqueWithoutCitationGroupsInputSchema } from '../BibEntryUpsertWithWhereUniqueWithoutCitationGroupsInputSchema.js';
import { BibEntryWhereUniqueInputSchema } from '../BibEntryWhereUniqueInputSchema.js';
import { BibEntryUpdateWithWhereUniqueWithoutCitationGroupsInputSchema } from '../BibEntryUpdateWithWhereUniqueWithoutCitationGroupsInputSchema.js';
import { BibEntryUpdateManyWithWhereWithoutCitationGroupsInputSchema } from '../BibEntryUpdateManyWithWhereWithoutCitationGroupsInputSchema.js';
import { BibEntryScalarWhereInputSchema } from '../BibEntryScalarWhereInputSchema.js';
export const BibEntryUpdateManyWithoutCitationGroupsNestedInputSchema: z.ZodType<Prisma.BibEntryUpdateManyWithoutCitationGroupsNestedInput> = z.object({
  create: z.union([ z.lazy(() => BibEntryCreateWithoutCitationGroupsInputSchema),z.lazy(() => BibEntryCreateWithoutCitationGroupsInputSchema).array(),z.lazy(() => BibEntryUncheckedCreateWithoutCitationGroupsInputSchema),z.lazy(() => BibEntryUncheckedCreateWithoutCitationGroupsInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => BibEntryCreateOrConnectWithoutCitationGroupsInputSchema),z.lazy(() => BibEntryCreateOrConnectWithoutCitationGroupsInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => BibEntryUpsertWithWhereUniqueWithoutCitationGroupsInputSchema),z.lazy(() => BibEntryUpsertWithWhereUniqueWithoutCitationGroupsInputSchema).array() ]).optional(),
  set: z.union([ z.lazy(() => BibEntryWhereUniqueInputSchema),z.lazy(() => BibEntryWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => BibEntryWhereUniqueInputSchema),z.lazy(() => BibEntryWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => BibEntryWhereUniqueInputSchema),z.lazy(() => BibEntryWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => BibEntryWhereUniqueInputSchema),z.lazy(() => BibEntryWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => BibEntryUpdateWithWhereUniqueWithoutCitationGroupsInputSchema),z.lazy(() => BibEntryUpdateWithWhereUniqueWithoutCitationGroupsInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => BibEntryUpdateManyWithWhereWithoutCitationGroupsInputSchema),z.lazy(() => BibEntryUpdateManyWithWhereWithoutCitationGroupsInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => BibEntryScalarWhereInputSchema),z.lazy(() => BibEntryScalarWhereInputSchema).array() ]).optional(),
}).strict();
export default BibEntryUpdateManyWithoutCitationGroupsNestedInputSchema;