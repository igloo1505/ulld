import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TagCreateWithoutQAPairInputSchema } from './TagCreateWithoutQAPairInputSchema';
import { TagUncheckedCreateWithoutQAPairInputSchema } from './TagUncheckedCreateWithoutQAPairInputSchema';
import { TagCreateOrConnectWithoutQAPairInputSchema } from './TagCreateOrConnectWithoutQAPairInputSchema';
import { TagUpsertWithWhereUniqueWithoutQAPairInputSchema } from './TagUpsertWithWhereUniqueWithoutQAPairInputSchema';
import { TagWhereUniqueInputSchema } from './TagWhereUniqueInputSchema';
import { TagUpdateWithWhereUniqueWithoutQAPairInputSchema } from './TagUpdateWithWhereUniqueWithoutQAPairInputSchema';
import { TagUpdateManyWithWhereWithoutQAPairInputSchema } from './TagUpdateManyWithWhereWithoutQAPairInputSchema';
import { TagScalarWhereInputSchema } from './TagScalarWhereInputSchema';

export const TagUncheckedUpdateManyWithoutQAPairNestedInputSchema: z.ZodType<Prisma.TagUncheckedUpdateManyWithoutQAPairNestedInput> = z.object({
  create: z.union([ z.lazy(() => TagCreateWithoutQAPairInputSchema),z.lazy(() => TagCreateWithoutQAPairInputSchema).array(),z.lazy(() => TagUncheckedCreateWithoutQAPairInputSchema),z.lazy(() => TagUncheckedCreateWithoutQAPairInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TagCreateOrConnectWithoutQAPairInputSchema),z.lazy(() => TagCreateOrConnectWithoutQAPairInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => TagUpsertWithWhereUniqueWithoutQAPairInputSchema),z.lazy(() => TagUpsertWithWhereUniqueWithoutQAPairInputSchema).array() ]).optional(),
  set: z.union([ z.lazy(() => TagWhereUniqueInputSchema),z.lazy(() => TagWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => TagWhereUniqueInputSchema),z.lazy(() => TagWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => TagWhereUniqueInputSchema),z.lazy(() => TagWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => TagWhereUniqueInputSchema),z.lazy(() => TagWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => TagUpdateWithWhereUniqueWithoutQAPairInputSchema),z.lazy(() => TagUpdateWithWhereUniqueWithoutQAPairInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => TagUpdateManyWithWhereWithoutQAPairInputSchema),z.lazy(() => TagUpdateManyWithWhereWithoutQAPairInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => TagScalarWhereInputSchema),z.lazy(() => TagScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default TagUncheckedUpdateManyWithoutQAPairNestedInputSchema;
