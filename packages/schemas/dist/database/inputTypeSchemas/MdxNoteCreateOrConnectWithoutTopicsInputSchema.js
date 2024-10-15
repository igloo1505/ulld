import { z } from 'zod';
import { MdxNoteWhereUniqueInputSchema } from './MdxNoteWhereUniqueInputSchema.js';
import { MdxNoteCreateWithoutTopicsInputSchema } from './MdxNoteCreateWithoutTopicsInputSchema.js';
import { MdxNoteUncheckedCreateWithoutTopicsInputSchema } from './MdxNoteUncheckedCreateWithoutTopicsInputSchema.js';
export const MdxNoteCreateOrConnectWithoutTopicsInputSchema = z.object({
    where: z.lazy(() => MdxNoteWhereUniqueInputSchema),
    create: z.union([z.lazy(() => MdxNoteCreateWithoutTopicsInputSchema), z.lazy(() => MdxNoteUncheckedCreateWithoutTopicsInputSchema)]),
}).strict();
export default MdxNoteCreateOrConnectWithoutTopicsInputSchema;
