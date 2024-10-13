import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { MdxNoteCreateWithoutTagsInputSchema } from '../MdxNoteCreateWithoutTagsInputSchema.js';
import { MdxNoteUncheckedCreateWithoutTagsInputSchema } from '../MdxNoteUncheckedCreateWithoutTagsInputSchema.js';
import { MdxNoteCreateOrConnectWithoutTagsInputSchema } from '../MdxNoteCreateOrConnectWithoutTagsInputSchema.js';
import { MdxNoteWhereUniqueInputSchema } from '../MdxNoteWhereUniqueInputSchema.js';
export const MdxNoteUncheckedCreateNestedManyWithoutTagsInputSchema: z.ZodType<Prisma.MdxNoteUncheckedCreateNestedManyWithoutTagsInput> = z.object({
  create: z.union([ z.lazy(() => MdxNoteCreateWithoutTagsInputSchema),z.lazy(() => MdxNoteCreateWithoutTagsInputSchema).array(),z.lazy(() => MdxNoteUncheckedCreateWithoutTagsInputSchema),z.lazy(() => MdxNoteUncheckedCreateWithoutTagsInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => MdxNoteCreateOrConnectWithoutTagsInputSchema),z.lazy(() => MdxNoteCreateOrConnectWithoutTagsInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => MdxNoteWhereUniqueInputSchema),z.lazy(() => MdxNoteWhereUniqueInputSchema).array() ]).optional(),
}).strict();
export default MdxNoteUncheckedCreateNestedManyWithoutTagsInputSchema;