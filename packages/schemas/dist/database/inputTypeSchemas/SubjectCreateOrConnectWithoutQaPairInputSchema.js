import { z } from 'zod';
import { SubjectWhereUniqueInputSchema } from './SubjectWhereUniqueInputSchema.js';
import { SubjectCreateWithoutQaPairInputSchema } from './SubjectCreateWithoutQaPairInputSchema.js';
import { SubjectUncheckedCreateWithoutQaPairInputSchema } from './SubjectUncheckedCreateWithoutQaPairInputSchema.js';
export const SubjectCreateOrConnectWithoutQaPairInputSchema = z.object({
    where: z.lazy(() => SubjectWhereUniqueInputSchema),
    create: z.union([z.lazy(() => SubjectCreateWithoutQaPairInputSchema), z.lazy(() => SubjectUncheckedCreateWithoutQaPairInputSchema)]),
}).strict();
export default SubjectCreateOrConnectWithoutQaPairInputSchema;
