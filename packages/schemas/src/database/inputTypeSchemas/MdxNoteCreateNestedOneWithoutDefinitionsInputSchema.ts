import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { MdxNoteCreateWithoutDefinitionsInputSchema } from '../MdxNoteCreateWithoutDefinitionsInputSchema.js';
import { MdxNoteUncheckedCreateWithoutDefinitionsInputSchema } from '../MdxNoteUncheckedCreateWithoutDefinitionsInputSchema.js';
import { MdxNoteCreateOrConnectWithoutDefinitionsInputSchema } from '../MdxNoteCreateOrConnectWithoutDefinitionsInputSchema.js';
import { MdxNoteWhereUniqueInputSchema } from '../MdxNoteWhereUniqueInputSchema.js';
export const MdxNoteCreateNestedOneWithoutDefinitionsInputSchema: z.ZodType<Prisma.MdxNoteCreateNestedOneWithoutDefinitionsInput> = z.object({
  create: z.union([ z.lazy(() => MdxNoteCreateWithoutDefinitionsInputSchema),z.lazy(() => MdxNoteUncheckedCreateWithoutDefinitionsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => MdxNoteCreateOrConnectWithoutDefinitionsInputSchema).optional(),
  connect: z.lazy(() => MdxNoteWhereUniqueInputSchema).optional()
}).strict();
export default MdxNoteCreateNestedOneWithoutDefinitionsInputSchema;