import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { MdxNoteCreateWithoutCitationsInputSchema } from './MdxNoteCreateWithoutCitationsInputSchema';
import { MdxNoteUncheckedCreateWithoutCitationsInputSchema } from './MdxNoteUncheckedCreateWithoutCitationsInputSchema';
import { MdxNoteCreateOrConnectWithoutCitationsInputSchema } from './MdxNoteCreateOrConnectWithoutCitationsInputSchema';
import { MdxNoteUpsertWithWhereUniqueWithoutCitationsInputSchema } from './MdxNoteUpsertWithWhereUniqueWithoutCitationsInputSchema';
import { MdxNoteWhereUniqueInputSchema } from './MdxNoteWhereUniqueInputSchema';
import { MdxNoteUpdateWithWhereUniqueWithoutCitationsInputSchema } from './MdxNoteUpdateWithWhereUniqueWithoutCitationsInputSchema';
import { MdxNoteUpdateManyWithWhereWithoutCitationsInputSchema } from './MdxNoteUpdateManyWithWhereWithoutCitationsInputSchema';
import { MdxNoteScalarWhereInputSchema } from './MdxNoteScalarWhereInputSchema';

export const MdxNoteUncheckedUpdateManyWithoutCitationsNestedInputSchema: z.ZodType<Prisma.MdxNoteUncheckedUpdateManyWithoutCitationsNestedInput> = z.object({
  create: z.union([ z.lazy(() => MdxNoteCreateWithoutCitationsInputSchema),z.lazy(() => MdxNoteCreateWithoutCitationsInputSchema).array(),z.lazy(() => MdxNoteUncheckedCreateWithoutCitationsInputSchema),z.lazy(() => MdxNoteUncheckedCreateWithoutCitationsInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => MdxNoteCreateOrConnectWithoutCitationsInputSchema),z.lazy(() => MdxNoteCreateOrConnectWithoutCitationsInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => MdxNoteUpsertWithWhereUniqueWithoutCitationsInputSchema),z.lazy(() => MdxNoteUpsertWithWhereUniqueWithoutCitationsInputSchema).array() ]).optional(),
  set: z.union([ z.lazy(() => MdxNoteWhereUniqueInputSchema),z.lazy(() => MdxNoteWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => MdxNoteWhereUniqueInputSchema),z.lazy(() => MdxNoteWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => MdxNoteWhereUniqueInputSchema),z.lazy(() => MdxNoteWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => MdxNoteWhereUniqueInputSchema),z.lazy(() => MdxNoteWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => MdxNoteUpdateWithWhereUniqueWithoutCitationsInputSchema),z.lazy(() => MdxNoteUpdateWithWhereUniqueWithoutCitationsInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => MdxNoteUpdateManyWithWhereWithoutCitationsInputSchema),z.lazy(() => MdxNoteUpdateManyWithWhereWithoutCitationsInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => MdxNoteScalarWhereInputSchema),z.lazy(() => MdxNoteScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default MdxNoteUncheckedUpdateManyWithoutCitationsNestedInputSchema;
