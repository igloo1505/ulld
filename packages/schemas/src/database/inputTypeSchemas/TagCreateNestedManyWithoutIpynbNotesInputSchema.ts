import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TagCreateWithoutIpynbNotesInputSchema } from './TagCreateWithoutIpynbNotesInputSchema';
import { TagUncheckedCreateWithoutIpynbNotesInputSchema } from './TagUncheckedCreateWithoutIpynbNotesInputSchema';
import { TagCreateOrConnectWithoutIpynbNotesInputSchema } from './TagCreateOrConnectWithoutIpynbNotesInputSchema';
import { TagWhereUniqueInputSchema } from './TagWhereUniqueInputSchema';

export const TagCreateNestedManyWithoutIpynbNotesInputSchema: z.ZodType<Prisma.TagCreateNestedManyWithoutIpynbNotesInput> = z.object({
  create: z.union([ z.lazy(() => TagCreateWithoutIpynbNotesInputSchema),z.lazy(() => TagCreateWithoutIpynbNotesInputSchema).array(),z.lazy(() => TagUncheckedCreateWithoutIpynbNotesInputSchema),z.lazy(() => TagUncheckedCreateWithoutIpynbNotesInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TagCreateOrConnectWithoutIpynbNotesInputSchema),z.lazy(() => TagCreateOrConnectWithoutIpynbNotesInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => TagWhereUniqueInputSchema),z.lazy(() => TagWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default TagCreateNestedManyWithoutIpynbNotesInputSchema;
