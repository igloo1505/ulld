import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { MdxNoteWhereInputSchema } from './MdxNoteWhereInputSchema';
import { MdxNoteUpdateWithoutDefinitionsInputSchema } from './MdxNoteUpdateWithoutDefinitionsInputSchema';
import { MdxNoteUncheckedUpdateWithoutDefinitionsInputSchema } from './MdxNoteUncheckedUpdateWithoutDefinitionsInputSchema';

export const MdxNoteUpdateToOneWithWhereWithoutDefinitionsInputSchema: z.ZodType<Prisma.MdxNoteUpdateToOneWithWhereWithoutDefinitionsInput> = z.object({
  where: z.lazy(() => MdxNoteWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => MdxNoteUpdateWithoutDefinitionsInputSchema),z.lazy(() => MdxNoteUncheckedUpdateWithoutDefinitionsInputSchema) ]),
}).strict();

export default MdxNoteUpdateToOneWithWhereWithoutDefinitionsInputSchema;
