import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { EquationCreateWithoutMdxNotesInputSchema } from './EquationCreateWithoutMdxNotesInputSchema';
import { EquationUncheckedCreateWithoutMdxNotesInputSchema } from './EquationUncheckedCreateWithoutMdxNotesInputSchema';
import { EquationCreateOrConnectWithoutMdxNotesInputSchema } from './EquationCreateOrConnectWithoutMdxNotesInputSchema';
import { EquationUpsertWithWhereUniqueWithoutMdxNotesInputSchema } from './EquationUpsertWithWhereUniqueWithoutMdxNotesInputSchema';
import { EquationWhereUniqueInputSchema } from './EquationWhereUniqueInputSchema';
import { EquationUpdateWithWhereUniqueWithoutMdxNotesInputSchema } from './EquationUpdateWithWhereUniqueWithoutMdxNotesInputSchema';
import { EquationUpdateManyWithWhereWithoutMdxNotesInputSchema } from './EquationUpdateManyWithWhereWithoutMdxNotesInputSchema';
import { EquationScalarWhereInputSchema } from './EquationScalarWhereInputSchema';

export const EquationUncheckedUpdateManyWithoutMdxNotesNestedInputSchema: z.ZodType<Prisma.EquationUncheckedUpdateManyWithoutMdxNotesNestedInput> = z.object({
  create: z.union([ z.lazy(() => EquationCreateWithoutMdxNotesInputSchema),z.lazy(() => EquationCreateWithoutMdxNotesInputSchema).array(),z.lazy(() => EquationUncheckedCreateWithoutMdxNotesInputSchema),z.lazy(() => EquationUncheckedCreateWithoutMdxNotesInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => EquationCreateOrConnectWithoutMdxNotesInputSchema),z.lazy(() => EquationCreateOrConnectWithoutMdxNotesInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => EquationUpsertWithWhereUniqueWithoutMdxNotesInputSchema),z.lazy(() => EquationUpsertWithWhereUniqueWithoutMdxNotesInputSchema).array() ]).optional(),
  set: z.union([ z.lazy(() => EquationWhereUniqueInputSchema),z.lazy(() => EquationWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => EquationWhereUniqueInputSchema),z.lazy(() => EquationWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => EquationWhereUniqueInputSchema),z.lazy(() => EquationWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => EquationWhereUniqueInputSchema),z.lazy(() => EquationWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => EquationUpdateWithWhereUniqueWithoutMdxNotesInputSchema),z.lazy(() => EquationUpdateWithWhereUniqueWithoutMdxNotesInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => EquationUpdateManyWithWhereWithoutMdxNotesInputSchema),z.lazy(() => EquationUpdateManyWithWhereWithoutMdxNotesInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => EquationScalarWhereInputSchema),z.lazy(() => EquationScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default EquationUncheckedUpdateManyWithoutMdxNotesNestedInputSchema;
