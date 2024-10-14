import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { MdxNoteCreateWithoutTopicsInputSchema } from './MdxNoteCreateWithoutTopicsInputSchema';
import { MdxNoteUncheckedCreateWithoutTopicsInputSchema } from './MdxNoteUncheckedCreateWithoutTopicsInputSchema';
import { MdxNoteCreateOrConnectWithoutTopicsInputSchema } from './MdxNoteCreateOrConnectWithoutTopicsInputSchema';
import { MdxNoteWhereUniqueInputSchema } from './MdxNoteWhereUniqueInputSchema';

export const MdxNoteCreateNestedManyWithoutTopicsInputSchema: z.ZodType<Prisma.MdxNoteCreateNestedManyWithoutTopicsInput> = z.object({
  create: z.union([ z.lazy(() => MdxNoteCreateWithoutTopicsInputSchema),z.lazy(() => MdxNoteCreateWithoutTopicsInputSchema).array(),z.lazy(() => MdxNoteUncheckedCreateWithoutTopicsInputSchema),z.lazy(() => MdxNoteUncheckedCreateWithoutTopicsInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => MdxNoteCreateOrConnectWithoutTopicsInputSchema),z.lazy(() => MdxNoteCreateOrConnectWithoutTopicsInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => MdxNoteWhereUniqueInputSchema),z.lazy(() => MdxNoteWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default MdxNoteCreateNestedManyWithoutTopicsInputSchema;
