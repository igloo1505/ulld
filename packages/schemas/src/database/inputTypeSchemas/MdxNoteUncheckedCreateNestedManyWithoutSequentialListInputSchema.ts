import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { MdxNoteCreateWithoutSequentialListInputSchema } from './MdxNoteCreateWithoutSequentialListInputSchema';
import { MdxNoteUncheckedCreateWithoutSequentialListInputSchema } from './MdxNoteUncheckedCreateWithoutSequentialListInputSchema';
import { MdxNoteCreateOrConnectWithoutSequentialListInputSchema } from './MdxNoteCreateOrConnectWithoutSequentialListInputSchema';
import { MdxNoteCreateManySequentialListInputEnvelopeSchema } from './MdxNoteCreateManySequentialListInputEnvelopeSchema';
import { MdxNoteWhereUniqueInputSchema } from './MdxNoteWhereUniqueInputSchema';

export const MdxNoteUncheckedCreateNestedManyWithoutSequentialListInputSchema: z.ZodType<Prisma.MdxNoteUncheckedCreateNestedManyWithoutSequentialListInput> = z.object({
  create: z.union([ z.lazy(() => MdxNoteCreateWithoutSequentialListInputSchema),z.lazy(() => MdxNoteCreateWithoutSequentialListInputSchema).array(),z.lazy(() => MdxNoteUncheckedCreateWithoutSequentialListInputSchema),z.lazy(() => MdxNoteUncheckedCreateWithoutSequentialListInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => MdxNoteCreateOrConnectWithoutSequentialListInputSchema),z.lazy(() => MdxNoteCreateOrConnectWithoutSequentialListInputSchema).array() ]).optional(),
  createMany: z.lazy(() => MdxNoteCreateManySequentialListInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => MdxNoteWhereUniqueInputSchema),z.lazy(() => MdxNoteWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default MdxNoteUncheckedCreateNestedManyWithoutSequentialListInputSchema;
