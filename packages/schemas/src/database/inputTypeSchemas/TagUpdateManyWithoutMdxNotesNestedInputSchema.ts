import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TagCreateWithoutMdxNotesInputSchema } from './TagCreateWithoutMdxNotesInputSchema';
import { TagUncheckedCreateWithoutMdxNotesInputSchema } from './TagUncheckedCreateWithoutMdxNotesInputSchema';
import { TagCreateOrConnectWithoutMdxNotesInputSchema } from './TagCreateOrConnectWithoutMdxNotesInputSchema';
import { TagUpsertWithWhereUniqueWithoutMdxNotesInputSchema } from './TagUpsertWithWhereUniqueWithoutMdxNotesInputSchema';
import { TagWhereUniqueInputSchema } from './TagWhereUniqueInputSchema';
import { TagUpdateWithWhereUniqueWithoutMdxNotesInputSchema } from './TagUpdateWithWhereUniqueWithoutMdxNotesInputSchema';
import { TagUpdateManyWithWhereWithoutMdxNotesInputSchema } from './TagUpdateManyWithWhereWithoutMdxNotesInputSchema';
import { TagScalarWhereInputSchema } from './TagScalarWhereInputSchema';

export const TagUpdateManyWithoutMdxNotesNestedInputSchema: z.ZodType<Prisma.TagUpdateManyWithoutMdxNotesNestedInput> = z.object({
  create: z.union([ z.lazy(() => TagCreateWithoutMdxNotesInputSchema),z.lazy(() => TagCreateWithoutMdxNotesInputSchema).array(),z.lazy(() => TagUncheckedCreateWithoutMdxNotesInputSchema),z.lazy(() => TagUncheckedCreateWithoutMdxNotesInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TagCreateOrConnectWithoutMdxNotesInputSchema),z.lazy(() => TagCreateOrConnectWithoutMdxNotesInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => TagUpsertWithWhereUniqueWithoutMdxNotesInputSchema),z.lazy(() => TagUpsertWithWhereUniqueWithoutMdxNotesInputSchema).array() ]).optional(),
  set: z.union([ z.lazy(() => TagWhereUniqueInputSchema),z.lazy(() => TagWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => TagWhereUniqueInputSchema),z.lazy(() => TagWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => TagWhereUniqueInputSchema),z.lazy(() => TagWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => TagWhereUniqueInputSchema),z.lazy(() => TagWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => TagUpdateWithWhereUniqueWithoutMdxNotesInputSchema),z.lazy(() => TagUpdateWithWhereUniqueWithoutMdxNotesInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => TagUpdateManyWithWhereWithoutMdxNotesInputSchema),z.lazy(() => TagUpdateManyWithWhereWithoutMdxNotesInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => TagScalarWhereInputSchema),z.lazy(() => TagScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default TagUpdateManyWithoutMdxNotesNestedInputSchema;
