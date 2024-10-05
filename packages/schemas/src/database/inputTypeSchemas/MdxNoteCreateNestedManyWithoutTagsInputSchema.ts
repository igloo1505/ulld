import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { MdxNoteCreateWithoutTagsInputSchema } from './MdxNoteCreateWithoutTagsInputSchema';
import { MdxNoteUncheckedCreateWithoutTagsInputSchema } from './MdxNoteUncheckedCreateWithoutTagsInputSchema';
import { MdxNoteCreateOrConnectWithoutTagsInputSchema } from './MdxNoteCreateOrConnectWithoutTagsInputSchema';
import { MdxNoteWhereUniqueInputSchema } from './MdxNoteWhereUniqueInputSchema';

export const MdxNoteCreateNestedManyWithoutTagsInputSchema: z.ZodType<Prisma.MdxNoteCreateNestedManyWithoutTagsInput> = z.object({
  create: z.union([ z.lazy(() => MdxNoteCreateWithoutTagsInputSchema),z.lazy(() => MdxNoteCreateWithoutTagsInputSchema).array(),z.lazy(() => MdxNoteUncheckedCreateWithoutTagsInputSchema),z.lazy(() => MdxNoteUncheckedCreateWithoutTagsInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => MdxNoteCreateOrConnectWithoutTagsInputSchema),z.lazy(() => MdxNoteCreateOrConnectWithoutTagsInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => MdxNoteWhereUniqueInputSchema),z.lazy(() => MdxNoteWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default MdxNoteCreateNestedManyWithoutTagsInputSchema;
