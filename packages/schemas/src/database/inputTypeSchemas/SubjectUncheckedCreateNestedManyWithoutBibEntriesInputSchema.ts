import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { SubjectCreateWithoutBibEntriesInputSchema } from '../SubjectCreateWithoutBibEntriesInputSchema.js';
import { SubjectUncheckedCreateWithoutBibEntriesInputSchema } from '../SubjectUncheckedCreateWithoutBibEntriesInputSchema.js';
import { SubjectCreateOrConnectWithoutBibEntriesInputSchema } from '../SubjectCreateOrConnectWithoutBibEntriesInputSchema.js';
import { SubjectWhereUniqueInputSchema } from '../SubjectWhereUniqueInputSchema.js';
export const SubjectUncheckedCreateNestedManyWithoutBibEntriesInputSchema: z.ZodType<Prisma.SubjectUncheckedCreateNestedManyWithoutBibEntriesInput> = z.object({
  create: z.union([ z.lazy(() => SubjectCreateWithoutBibEntriesInputSchema),z.lazy(() => SubjectCreateWithoutBibEntriesInputSchema).array(),z.lazy(() => SubjectUncheckedCreateWithoutBibEntriesInputSchema),z.lazy(() => SubjectUncheckedCreateWithoutBibEntriesInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => SubjectCreateOrConnectWithoutBibEntriesInputSchema),z.lazy(() => SubjectCreateOrConnectWithoutBibEntriesInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => SubjectWhereUniqueInputSchema),z.lazy(() => SubjectWhereUniqueInputSchema).array() ]).optional(),
}).strict();
export default SubjectUncheckedCreateNestedManyWithoutBibEntriesInputSchema;