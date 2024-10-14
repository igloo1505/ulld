import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BibEntryCreateWithoutCitationGroupsInputSchema } from './BibEntryCreateWithoutCitationGroupsInputSchema';
import { BibEntryUncheckedCreateWithoutCitationGroupsInputSchema } from './BibEntryUncheckedCreateWithoutCitationGroupsInputSchema';
import { BibEntryCreateOrConnectWithoutCitationGroupsInputSchema } from './BibEntryCreateOrConnectWithoutCitationGroupsInputSchema';
import { BibEntryUpsertWithWhereUniqueWithoutCitationGroupsInputSchema } from './BibEntryUpsertWithWhereUniqueWithoutCitationGroupsInputSchema';
import { BibEntryWhereUniqueInputSchema } from './BibEntryWhereUniqueInputSchema';
import { BibEntryUpdateWithWhereUniqueWithoutCitationGroupsInputSchema } from './BibEntryUpdateWithWhereUniqueWithoutCitationGroupsInputSchema';
import { BibEntryUpdateManyWithWhereWithoutCitationGroupsInputSchema } from './BibEntryUpdateManyWithWhereWithoutCitationGroupsInputSchema';
import { BibEntryScalarWhereInputSchema } from './BibEntryScalarWhereInputSchema';

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
