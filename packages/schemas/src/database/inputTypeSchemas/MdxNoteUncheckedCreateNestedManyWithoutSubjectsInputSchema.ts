import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { MdxNoteCreateWithoutSubjectsInputSchema } from './MdxNoteCreateWithoutSubjectsInputSchema';
import { MdxNoteUncheckedCreateWithoutSubjectsInputSchema } from './MdxNoteUncheckedCreateWithoutSubjectsInputSchema';
import { MdxNoteCreateOrConnectWithoutSubjectsInputSchema } from './MdxNoteCreateOrConnectWithoutSubjectsInputSchema';
import { MdxNoteWhereUniqueInputSchema } from './MdxNoteWhereUniqueInputSchema';

export const MdxNoteUncheckedCreateNestedManyWithoutSubjectsInputSchema: z.ZodType<Prisma.MdxNoteUncheckedCreateNestedManyWithoutSubjectsInput> = z.object({
  create: z.union([ z.lazy(() => MdxNoteCreateWithoutSubjectsInputSchema),z.lazy(() => MdxNoteCreateWithoutSubjectsInputSchema).array(),z.lazy(() => MdxNoteUncheckedCreateWithoutSubjectsInputSchema),z.lazy(() => MdxNoteUncheckedCreateWithoutSubjectsInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => MdxNoteCreateOrConnectWithoutSubjectsInputSchema),z.lazy(() => MdxNoteCreateOrConnectWithoutSubjectsInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => MdxNoteWhereUniqueInputSchema),z.lazy(() => MdxNoteWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default MdxNoteUncheckedCreateNestedManyWithoutSubjectsInputSchema;
