import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { MdxNoteWhereUniqueInputSchema } from './MdxNoteWhereUniqueInputSchema';
import { MdxNoteUpdateWithoutTagsInputSchema } from './MdxNoteUpdateWithoutTagsInputSchema';
import { MdxNoteUncheckedUpdateWithoutTagsInputSchema } from './MdxNoteUncheckedUpdateWithoutTagsInputSchema';
import { MdxNoteCreateWithoutTagsInputSchema } from './MdxNoteCreateWithoutTagsInputSchema';
import { MdxNoteUncheckedCreateWithoutTagsInputSchema } from './MdxNoteUncheckedCreateWithoutTagsInputSchema';

export const MdxNoteUpsertWithWhereUniqueWithoutTagsInputSchema: z.ZodType<Prisma.MdxNoteUpsertWithWhereUniqueWithoutTagsInput> = z.object({
  where: z.lazy(() => MdxNoteWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => MdxNoteUpdateWithoutTagsInputSchema),z.lazy(() => MdxNoteUncheckedUpdateWithoutTagsInputSchema) ]),
  create: z.union([ z.lazy(() => MdxNoteCreateWithoutTagsInputSchema),z.lazy(() => MdxNoteUncheckedCreateWithoutTagsInputSchema) ]),
}).strict();

export default MdxNoteUpsertWithWhereUniqueWithoutTagsInputSchema;
