import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { MdxNoteCreateWithoutDefinitionsInputSchema } from './MdxNoteCreateWithoutDefinitionsInputSchema';
import { MdxNoteUncheckedCreateWithoutDefinitionsInputSchema } from './MdxNoteUncheckedCreateWithoutDefinitionsInputSchema';
import { MdxNoteCreateOrConnectWithoutDefinitionsInputSchema } from './MdxNoteCreateOrConnectWithoutDefinitionsInputSchema';
import { MdxNoteWhereUniqueInputSchema } from './MdxNoteWhereUniqueInputSchema';

export const MdxNoteCreateNestedOneWithoutDefinitionsInputSchema: z.ZodType<Prisma.MdxNoteCreateNestedOneWithoutDefinitionsInput> = z.object({
  create: z.union([ z.lazy(() => MdxNoteCreateWithoutDefinitionsInputSchema),z.lazy(() => MdxNoteUncheckedCreateWithoutDefinitionsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => MdxNoteCreateOrConnectWithoutDefinitionsInputSchema).optional(),
  connect: z.lazy(() => MdxNoteWhereUniqueInputSchema).optional()
}).strict();

export default MdxNoteCreateNestedOneWithoutDefinitionsInputSchema;
