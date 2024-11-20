import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TagCreateWithoutEquationsInputSchema } from './TagCreateWithoutEquationsInputSchema';
import { TagUncheckedCreateWithoutEquationsInputSchema } from './TagUncheckedCreateWithoutEquationsInputSchema';
import { TagCreateOrConnectWithoutEquationsInputSchema } from './TagCreateOrConnectWithoutEquationsInputSchema';
import { TagUpsertWithWhereUniqueWithoutEquationsInputSchema } from './TagUpsertWithWhereUniqueWithoutEquationsInputSchema';
import { TagWhereUniqueInputSchema } from './TagWhereUniqueInputSchema';
import { TagUpdateWithWhereUniqueWithoutEquationsInputSchema } from './TagUpdateWithWhereUniqueWithoutEquationsInputSchema';
import { TagUpdateManyWithWhereWithoutEquationsInputSchema } from './TagUpdateManyWithWhereWithoutEquationsInputSchema';
import { TagScalarWhereInputSchema } from './TagScalarWhereInputSchema';

export const TagUpdateManyWithoutEquationsNestedInputSchema: z.ZodType<Prisma.TagUpdateManyWithoutEquationsNestedInput> = z.object({
  create: z.union([ z.lazy(() => TagCreateWithoutEquationsInputSchema),z.lazy(() => TagCreateWithoutEquationsInputSchema).array(),z.lazy(() => TagUncheckedCreateWithoutEquationsInputSchema),z.lazy(() => TagUncheckedCreateWithoutEquationsInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TagCreateOrConnectWithoutEquationsInputSchema),z.lazy(() => TagCreateOrConnectWithoutEquationsInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => TagUpsertWithWhereUniqueWithoutEquationsInputSchema),z.lazy(() => TagUpsertWithWhereUniqueWithoutEquationsInputSchema).array() ]).optional(),
  set: z.union([ z.lazy(() => TagWhereUniqueInputSchema),z.lazy(() => TagWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => TagWhereUniqueInputSchema),z.lazy(() => TagWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => TagWhereUniqueInputSchema),z.lazy(() => TagWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => TagWhereUniqueInputSchema),z.lazy(() => TagWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => TagUpdateWithWhereUniqueWithoutEquationsInputSchema),z.lazy(() => TagUpdateWithWhereUniqueWithoutEquationsInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => TagUpdateManyWithWhereWithoutEquationsInputSchema),z.lazy(() => TagUpdateManyWithWhereWithoutEquationsInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => TagScalarWhereInputSchema),z.lazy(() => TagScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default TagUpdateManyWithoutEquationsNestedInputSchema;
