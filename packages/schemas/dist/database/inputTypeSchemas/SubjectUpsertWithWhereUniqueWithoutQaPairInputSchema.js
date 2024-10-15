import { z } from 'zod';
import { SubjectWhereUniqueInputSchema } from './SubjectWhereUniqueInputSchema.js';
import { SubjectUpdateWithoutQaPairInputSchema } from './SubjectUpdateWithoutQaPairInputSchema.js';
import { SubjectUncheckedUpdateWithoutQaPairInputSchema } from './SubjectUncheckedUpdateWithoutQaPairInputSchema.js';
import { SubjectCreateWithoutQaPairInputSchema } from './SubjectCreateWithoutQaPairInputSchema.js';
import { SubjectUncheckedCreateWithoutQaPairInputSchema } from './SubjectUncheckedCreateWithoutQaPairInputSchema.js';
export const SubjectUpsertWithWhereUniqueWithoutQaPairInputSchema = z.object({
    where: z.lazy(() => SubjectWhereUniqueInputSchema),
    update: z.union([z.lazy(() => SubjectUpdateWithoutQaPairInputSchema), z.lazy(() => SubjectUncheckedUpdateWithoutQaPairInputSchema)]),
    create: z.union([z.lazy(() => SubjectCreateWithoutQaPairInputSchema), z.lazy(() => SubjectUncheckedCreateWithoutQaPairInputSchema)]),
}).strict();
export default SubjectUpsertWithWhereUniqueWithoutQaPairInputSchema;
