import { z } from 'zod';
import { SubjectWhereUniqueInputSchema } from './SubjectWhereUniqueInputSchema.js';
import { SubjectCreateWithoutEquationsInputSchema } from './SubjectCreateWithoutEquationsInputSchema.js';
import { SubjectUncheckedCreateWithoutEquationsInputSchema } from './SubjectUncheckedCreateWithoutEquationsInputSchema.js';
export const SubjectCreateOrConnectWithoutEquationsInputSchema = z.object({
    where: z.lazy(() => SubjectWhereUniqueInputSchema),
    create: z.union([z.lazy(() => SubjectCreateWithoutEquationsInputSchema), z.lazy(() => SubjectUncheckedCreateWithoutEquationsInputSchema)]),
}).strict();
export default SubjectCreateOrConnectWithoutEquationsInputSchema;
