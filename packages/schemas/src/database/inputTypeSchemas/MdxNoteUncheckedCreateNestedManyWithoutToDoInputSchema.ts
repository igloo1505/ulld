import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { MdxNoteCreateWithoutToDoInputSchema } from './MdxNoteCreateWithoutToDoInputSchema';
import { MdxNoteUncheckedCreateWithoutToDoInputSchema } from './MdxNoteUncheckedCreateWithoutToDoInputSchema';
import { MdxNoteCreateOrConnectWithoutToDoInputSchema } from './MdxNoteCreateOrConnectWithoutToDoInputSchema';
import { MdxNoteWhereUniqueInputSchema } from './MdxNoteWhereUniqueInputSchema';

export const MdxNoteUncheckedCreateNestedManyWithoutToDoInputSchema: z.ZodType<Prisma.MdxNoteUncheckedCreateNestedManyWithoutToDoInput> = z.object({
  create: z.union([ z.lazy(() => MdxNoteCreateWithoutToDoInputSchema),z.lazy(() => MdxNoteCreateWithoutToDoInputSchema).array(),z.lazy(() => MdxNoteUncheckedCreateWithoutToDoInputSchema),z.lazy(() => MdxNoteUncheckedCreateWithoutToDoInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => MdxNoteCreateOrConnectWithoutToDoInputSchema),z.lazy(() => MdxNoteCreateOrConnectWithoutToDoInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => MdxNoteWhereUniqueInputSchema),z.lazy(() => MdxNoteWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default MdxNoteUncheckedCreateNestedManyWithoutToDoInputSchema;
