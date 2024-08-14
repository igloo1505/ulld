import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TagWhereUniqueInputSchema } from './TagWhereUniqueInputSchema';
import { TagCreateWithoutIpynbNotesInputSchema } from './TagCreateWithoutIpynbNotesInputSchema';
import { TagUncheckedCreateWithoutIpynbNotesInputSchema } from './TagUncheckedCreateWithoutIpynbNotesInputSchema';

export const TagCreateOrConnectWithoutIpynbNotesInputSchema: z.ZodType<Prisma.TagCreateOrConnectWithoutIpynbNotesInput> = z.object({
  where: z.lazy(() => TagWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => TagCreateWithoutIpynbNotesInputSchema),z.lazy(() => TagUncheckedCreateWithoutIpynbNotesInputSchema) ]),
}).strict();

export default TagCreateOrConnectWithoutIpynbNotesInputSchema;
