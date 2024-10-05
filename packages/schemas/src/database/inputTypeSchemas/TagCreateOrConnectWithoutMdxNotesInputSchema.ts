import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TagWhereUniqueInputSchema } from './TagWhereUniqueInputSchema';
import { TagCreateWithoutMdxNotesInputSchema } from './TagCreateWithoutMdxNotesInputSchema';
import { TagUncheckedCreateWithoutMdxNotesInputSchema } from './TagUncheckedCreateWithoutMdxNotesInputSchema';

export const TagCreateOrConnectWithoutMdxNotesInputSchema: z.ZodType<Prisma.TagCreateOrConnectWithoutMdxNotesInput> = z.object({
  where: z.lazy(() => TagWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => TagCreateWithoutMdxNotesInputSchema),z.lazy(() => TagUncheckedCreateWithoutMdxNotesInputSchema) ]),
}).strict();

export default TagCreateOrConnectWithoutMdxNotesInputSchema;
