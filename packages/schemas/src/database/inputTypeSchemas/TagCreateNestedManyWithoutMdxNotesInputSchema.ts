import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TagCreateWithoutMdxNotesInputSchema } from './TagCreateWithoutMdxNotesInputSchema';
import { TagUncheckedCreateWithoutMdxNotesInputSchema } from './TagUncheckedCreateWithoutMdxNotesInputSchema';
import { TagCreateOrConnectWithoutMdxNotesInputSchema } from './TagCreateOrConnectWithoutMdxNotesInputSchema';
import { TagWhereUniqueInputSchema } from './TagWhereUniqueInputSchema';

export const TagCreateNestedManyWithoutMdxNotesInputSchema: z.ZodType<Prisma.TagCreateNestedManyWithoutMdxNotesInput> = z.object({
  create: z.union([ z.lazy(() => TagCreateWithoutMdxNotesInputSchema),z.lazy(() => TagCreateWithoutMdxNotesInputSchema).array(),z.lazy(() => TagUncheckedCreateWithoutMdxNotesInputSchema),z.lazy(() => TagUncheckedCreateWithoutMdxNotesInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TagCreateOrConnectWithoutMdxNotesInputSchema),z.lazy(() => TagCreateOrConnectWithoutMdxNotesInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => TagWhereUniqueInputSchema),z.lazy(() => TagWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default TagCreateNestedManyWithoutMdxNotesInputSchema;
