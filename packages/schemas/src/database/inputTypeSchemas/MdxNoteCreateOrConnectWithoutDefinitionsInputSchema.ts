import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { MdxNoteWhereUniqueInputSchema } from '../MdxNoteWhereUniqueInputSchema.js';
import { MdxNoteCreateWithoutDefinitionsInputSchema } from '../MdxNoteCreateWithoutDefinitionsInputSchema.js';
import { MdxNoteUncheckedCreateWithoutDefinitionsInputSchema } from '../MdxNoteUncheckedCreateWithoutDefinitionsInputSchema.js';
export const MdxNoteCreateOrConnectWithoutDefinitionsInputSchema: z.ZodType<Prisma.MdxNoteCreateOrConnectWithoutDefinitionsInput> = z.object({
  where: z.lazy(() => MdxNoteWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => MdxNoteCreateWithoutDefinitionsInputSchema),z.lazy(() => MdxNoteUncheckedCreateWithoutDefinitionsInputSchema) ]),
}).strict();
export default MdxNoteCreateOrConnectWithoutDefinitionsInputSchema;