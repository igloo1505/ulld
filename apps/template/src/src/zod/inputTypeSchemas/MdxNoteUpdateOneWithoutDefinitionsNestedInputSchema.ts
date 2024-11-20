import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { MdxNoteCreateWithoutDefinitionsInputSchema } from './MdxNoteCreateWithoutDefinitionsInputSchema';
import { MdxNoteUncheckedCreateWithoutDefinitionsInputSchema } from './MdxNoteUncheckedCreateWithoutDefinitionsInputSchema';
import { MdxNoteCreateOrConnectWithoutDefinitionsInputSchema } from './MdxNoteCreateOrConnectWithoutDefinitionsInputSchema';
import { MdxNoteUpsertWithoutDefinitionsInputSchema } from './MdxNoteUpsertWithoutDefinitionsInputSchema';
import { MdxNoteWhereInputSchema } from './MdxNoteWhereInputSchema';
import { MdxNoteWhereUniqueInputSchema } from './MdxNoteWhereUniqueInputSchema';
import { MdxNoteUpdateToOneWithWhereWithoutDefinitionsInputSchema } from './MdxNoteUpdateToOneWithWhereWithoutDefinitionsInputSchema';
import { MdxNoteUpdateWithoutDefinitionsInputSchema } from './MdxNoteUpdateWithoutDefinitionsInputSchema';
import { MdxNoteUncheckedUpdateWithoutDefinitionsInputSchema } from './MdxNoteUncheckedUpdateWithoutDefinitionsInputSchema';

export const MdxNoteUpdateOneWithoutDefinitionsNestedInputSchema: z.ZodType<Prisma.MdxNoteUpdateOneWithoutDefinitionsNestedInput> = z.object({
  create: z.union([ z.lazy(() => MdxNoteCreateWithoutDefinitionsInputSchema),z.lazy(() => MdxNoteUncheckedCreateWithoutDefinitionsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => MdxNoteCreateOrConnectWithoutDefinitionsInputSchema).optional(),
  upsert: z.lazy(() => MdxNoteUpsertWithoutDefinitionsInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => MdxNoteWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => MdxNoteWhereInputSchema) ]).optional(),
  connect: z.lazy(() => MdxNoteWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => MdxNoteUpdateToOneWithWhereWithoutDefinitionsInputSchema),z.lazy(() => MdxNoteUpdateWithoutDefinitionsInputSchema),z.lazy(() => MdxNoteUncheckedUpdateWithoutDefinitionsInputSchema) ]).optional(),
}).strict();

export default MdxNoteUpdateOneWithoutDefinitionsNestedInputSchema;
