import { z } from 'zod';
import { TagCreateWithoutMdxNotesInputSchema } from './TagCreateWithoutMdxNotesInputSchema.js';
import { TagUncheckedCreateWithoutMdxNotesInputSchema } from './TagUncheckedCreateWithoutMdxNotesInputSchema.js';
import { TagCreateOrConnectWithoutMdxNotesInputSchema } from './TagCreateOrConnectWithoutMdxNotesInputSchema.js';
import { TagWhereUniqueInputSchema } from './TagWhereUniqueInputSchema.js';
export const TagUncheckedCreateNestedManyWithoutMdxNotesInputSchema = z.object({
    create: z.union([z.lazy(() => TagCreateWithoutMdxNotesInputSchema), z.lazy(() => TagCreateWithoutMdxNotesInputSchema).array(), z.lazy(() => TagUncheckedCreateWithoutMdxNotesInputSchema), z.lazy(() => TagUncheckedCreateWithoutMdxNotesInputSchema).array()]).optional(),
    connectOrCreate: z.union([z.lazy(() => TagCreateOrConnectWithoutMdxNotesInputSchema), z.lazy(() => TagCreateOrConnectWithoutMdxNotesInputSchema).array()]).optional(),
    connect: z.union([z.lazy(() => TagWhereUniqueInputSchema), z.lazy(() => TagWhereUniqueInputSchema).array()]).optional(),
}).strict();
export default TagUncheckedCreateNestedManyWithoutMdxNotesInputSchema;
