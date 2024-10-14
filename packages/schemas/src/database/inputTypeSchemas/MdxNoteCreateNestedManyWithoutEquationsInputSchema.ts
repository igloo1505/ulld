import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { MdxNoteCreateWithoutEquationsInputSchema } from './MdxNoteCreateWithoutEquationsInputSchema.js';
import { MdxNoteUncheckedCreateWithoutEquationsInputSchema } from './MdxNoteUncheckedCreateWithoutEquationsInputSchema.js';
import { MdxNoteCreateOrConnectWithoutEquationsInputSchema } from './MdxNoteCreateOrConnectWithoutEquationsInputSchema.js';
import { MdxNoteWhereUniqueInputSchema } from './MdxNoteWhereUniqueInputSchema.js';
export const MdxNoteCreateNestedManyWithoutEquationsInputSchema: z.ZodType<Prisma.MdxNoteCreateNestedManyWithoutEquationsInput> = z.object({
  create: z.union([ z.lazy(() => MdxNoteCreateWithoutEquationsInputSchema),z.lazy(() => MdxNoteCreateWithoutEquationsInputSchema).array(),z.lazy(() => MdxNoteUncheckedCreateWithoutEquationsInputSchema),z.lazy(() => MdxNoteUncheckedCreateWithoutEquationsInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => MdxNoteCreateOrConnectWithoutEquationsInputSchema),z.lazy(() => MdxNoteCreateOrConnectWithoutEquationsInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => MdxNoteWhereUniqueInputSchema),z.lazy(() => MdxNoteWhereUniqueInputSchema).array() ]).optional(),
}).strict();
export default MdxNoteCreateNestedManyWithoutEquationsInputSchema;