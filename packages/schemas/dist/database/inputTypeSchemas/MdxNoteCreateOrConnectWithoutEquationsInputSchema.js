import { z } from 'zod';
import { MdxNoteWhereUniqueInputSchema } from './MdxNoteWhereUniqueInputSchema.js';
import { MdxNoteCreateWithoutEquationsInputSchema } from './MdxNoteCreateWithoutEquationsInputSchema.js';
import { MdxNoteUncheckedCreateWithoutEquationsInputSchema } from './MdxNoteUncheckedCreateWithoutEquationsInputSchema.js';
export const MdxNoteCreateOrConnectWithoutEquationsInputSchema = z.object({
    where: z.lazy(() => MdxNoteWhereUniqueInputSchema),
    create: z.union([z.lazy(() => MdxNoteCreateWithoutEquationsInputSchema), z.lazy(() => MdxNoteUncheckedCreateWithoutEquationsInputSchema)]),
}).strict();
export default MdxNoteCreateOrConnectWithoutEquationsInputSchema;
