import { z } from 'zod';
import { MdxNoteCreateWithoutDefinitionsInputSchema } from './MdxNoteCreateWithoutDefinitionsInputSchema.js';
import { MdxNoteUncheckedCreateWithoutDefinitionsInputSchema } from './MdxNoteUncheckedCreateWithoutDefinitionsInputSchema.js';
import { MdxNoteCreateOrConnectWithoutDefinitionsInputSchema } from './MdxNoteCreateOrConnectWithoutDefinitionsInputSchema.js';
import { MdxNoteUpsertWithoutDefinitionsInputSchema } from './MdxNoteUpsertWithoutDefinitionsInputSchema.js';
import { MdxNoteWhereInputSchema } from './MdxNoteWhereInputSchema.js';
import { MdxNoteWhereUniqueInputSchema } from './MdxNoteWhereUniqueInputSchema.js';
import { MdxNoteUpdateToOneWithWhereWithoutDefinitionsInputSchema } from './MdxNoteUpdateToOneWithWhereWithoutDefinitionsInputSchema.js';
import { MdxNoteUpdateWithoutDefinitionsInputSchema } from './MdxNoteUpdateWithoutDefinitionsInputSchema.js';
import { MdxNoteUncheckedUpdateWithoutDefinitionsInputSchema } from './MdxNoteUncheckedUpdateWithoutDefinitionsInputSchema.js';
export const MdxNoteUpdateOneWithoutDefinitionsNestedInputSchema = z.object({
    create: z.union([z.lazy(() => MdxNoteCreateWithoutDefinitionsInputSchema), z.lazy(() => MdxNoteUncheckedCreateWithoutDefinitionsInputSchema)]).optional(),
    connectOrCreate: z.lazy(() => MdxNoteCreateOrConnectWithoutDefinitionsInputSchema).optional(),
    upsert: z.lazy(() => MdxNoteUpsertWithoutDefinitionsInputSchema).optional(),
    disconnect: z.union([z.boolean(), z.lazy(() => MdxNoteWhereInputSchema)]).optional(),
    delete: z.union([z.boolean(), z.lazy(() => MdxNoteWhereInputSchema)]).optional(),
    connect: z.lazy(() => MdxNoteWhereUniqueInputSchema).optional(),
    update: z.union([z.lazy(() => MdxNoteUpdateToOneWithWhereWithoutDefinitionsInputSchema), z.lazy(() => MdxNoteUpdateWithoutDefinitionsInputSchema), z.lazy(() => MdxNoteUncheckedUpdateWithoutDefinitionsInputSchema)]).optional(),
}).strict();
export default MdxNoteUpdateOneWithoutDefinitionsNestedInputSchema;
