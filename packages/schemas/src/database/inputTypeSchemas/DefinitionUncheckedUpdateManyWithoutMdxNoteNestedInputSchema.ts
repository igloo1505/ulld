import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DefinitionCreateWithoutMdxNoteInputSchema } from './DefinitionCreateWithoutMdxNoteInputSchema';
import { DefinitionUncheckedCreateWithoutMdxNoteInputSchema } from './DefinitionUncheckedCreateWithoutMdxNoteInputSchema';
import { DefinitionCreateOrConnectWithoutMdxNoteInputSchema } from './DefinitionCreateOrConnectWithoutMdxNoteInputSchema';
import { DefinitionUpsertWithWhereUniqueWithoutMdxNoteInputSchema } from './DefinitionUpsertWithWhereUniqueWithoutMdxNoteInputSchema';
import { DefinitionCreateManyMdxNoteInputEnvelopeSchema } from './DefinitionCreateManyMdxNoteInputEnvelopeSchema';
import { DefinitionWhereUniqueInputSchema } from './DefinitionWhereUniqueInputSchema';
import { DefinitionUpdateWithWhereUniqueWithoutMdxNoteInputSchema } from './DefinitionUpdateWithWhereUniqueWithoutMdxNoteInputSchema';
import { DefinitionUpdateManyWithWhereWithoutMdxNoteInputSchema } from './DefinitionUpdateManyWithWhereWithoutMdxNoteInputSchema';
import { DefinitionScalarWhereInputSchema } from './DefinitionScalarWhereInputSchema';

export const DefinitionUncheckedUpdateManyWithoutMdxNoteNestedInputSchema: z.ZodType<Prisma.DefinitionUncheckedUpdateManyWithoutMdxNoteNestedInput> = z.object({
  create: z.union([ z.lazy(() => DefinitionCreateWithoutMdxNoteInputSchema),z.lazy(() => DefinitionCreateWithoutMdxNoteInputSchema).array(),z.lazy(() => DefinitionUncheckedCreateWithoutMdxNoteInputSchema),z.lazy(() => DefinitionUncheckedCreateWithoutMdxNoteInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => DefinitionCreateOrConnectWithoutMdxNoteInputSchema),z.lazy(() => DefinitionCreateOrConnectWithoutMdxNoteInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => DefinitionUpsertWithWhereUniqueWithoutMdxNoteInputSchema),z.lazy(() => DefinitionUpsertWithWhereUniqueWithoutMdxNoteInputSchema).array() ]).optional(),
  createMany: z.lazy(() => DefinitionCreateManyMdxNoteInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => DefinitionWhereUniqueInputSchema),z.lazy(() => DefinitionWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => DefinitionWhereUniqueInputSchema),z.lazy(() => DefinitionWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => DefinitionWhereUniqueInputSchema),z.lazy(() => DefinitionWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => DefinitionWhereUniqueInputSchema),z.lazy(() => DefinitionWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => DefinitionUpdateWithWhereUniqueWithoutMdxNoteInputSchema),z.lazy(() => DefinitionUpdateWithWhereUniqueWithoutMdxNoteInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => DefinitionUpdateManyWithWhereWithoutMdxNoteInputSchema),z.lazy(() => DefinitionUpdateManyWithWhereWithoutMdxNoteInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => DefinitionScalarWhereInputSchema),z.lazy(() => DefinitionScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default DefinitionUncheckedUpdateManyWithoutMdxNoteNestedInputSchema;
