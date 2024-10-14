import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { MdxNoteCreateWithoutCitationsInputSchema } from './MdxNoteCreateWithoutCitationsInputSchema';
import { MdxNoteUncheckedCreateWithoutCitationsInputSchema } from './MdxNoteUncheckedCreateWithoutCitationsInputSchema';
import { MdxNoteCreateOrConnectWithoutCitationsInputSchema } from './MdxNoteCreateOrConnectWithoutCitationsInputSchema';
import { MdxNoteWhereUniqueInputSchema } from './MdxNoteWhereUniqueInputSchema';

export const MdxNoteUncheckedCreateNestedManyWithoutCitationsInputSchema: z.ZodType<Prisma.MdxNoteUncheckedCreateNestedManyWithoutCitationsInput> = z.object({
  create: z.union([ z.lazy(() => MdxNoteCreateWithoutCitationsInputSchema),z.lazy(() => MdxNoteCreateWithoutCitationsInputSchema).array(),z.lazy(() => MdxNoteUncheckedCreateWithoutCitationsInputSchema),z.lazy(() => MdxNoteUncheckedCreateWithoutCitationsInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => MdxNoteCreateOrConnectWithoutCitationsInputSchema),z.lazy(() => MdxNoteCreateOrConnectWithoutCitationsInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => MdxNoteWhereUniqueInputSchema),z.lazy(() => MdxNoteWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default MdxNoteUncheckedCreateNestedManyWithoutCitationsInputSchema;
