import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { TagCreateWithoutIpynbNotesInputSchema } from '../TagCreateWithoutIpynbNotesInputSchema.js';
import { TagUncheckedCreateWithoutIpynbNotesInputSchema } from '../TagUncheckedCreateWithoutIpynbNotesInputSchema.js';
import { TagCreateOrConnectWithoutIpynbNotesInputSchema } from '../TagCreateOrConnectWithoutIpynbNotesInputSchema.js';
import { TagWhereUniqueInputSchema } from '../TagWhereUniqueInputSchema.js';
export const TagCreateNestedManyWithoutIpynbNotesInputSchema: z.ZodType<Prisma.TagCreateNestedManyWithoutIpynbNotesInput> = z.object({
  create: z.union([ z.lazy(() => TagCreateWithoutIpynbNotesInputSchema),z.lazy(() => TagCreateWithoutIpynbNotesInputSchema).array(),z.lazy(() => TagUncheckedCreateWithoutIpynbNotesInputSchema),z.lazy(() => TagUncheckedCreateWithoutIpynbNotesInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TagCreateOrConnectWithoutIpynbNotesInputSchema),z.lazy(() => TagCreateOrConnectWithoutIpynbNotesInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => TagWhereUniqueInputSchema),z.lazy(() => TagWhereUniqueInputSchema).array() ]).optional(),
}).strict();
export default TagCreateNestedManyWithoutIpynbNotesInputSchema;