import { z } from 'zod';
import { SubjectCreateWithoutEquationsInputSchema } from './SubjectCreateWithoutEquationsInputSchema.js';
import { SubjectUncheckedCreateWithoutEquationsInputSchema } from './SubjectUncheckedCreateWithoutEquationsInputSchema.js';
import { SubjectCreateOrConnectWithoutEquationsInputSchema } from './SubjectCreateOrConnectWithoutEquationsInputSchema.js';
import { SubjectWhereUniqueInputSchema } from './SubjectWhereUniqueInputSchema.js';
export const SubjectUncheckedCreateNestedManyWithoutEquationsInputSchema = z.object({
    create: z.union([z.lazy(() => SubjectCreateWithoutEquationsInputSchema), z.lazy(() => SubjectCreateWithoutEquationsInputSchema).array(), z.lazy(() => SubjectUncheckedCreateWithoutEquationsInputSchema), z.lazy(() => SubjectUncheckedCreateWithoutEquationsInputSchema).array()]).optional(),
    connectOrCreate: z.union([z.lazy(() => SubjectCreateOrConnectWithoutEquationsInputSchema), z.lazy(() => SubjectCreateOrConnectWithoutEquationsInputSchema).array()]).optional(),
    connect: z.union([z.lazy(() => SubjectWhereUniqueInputSchema), z.lazy(() => SubjectWhereUniqueInputSchema).array()]).optional(),
}).strict();
export default SubjectUncheckedCreateNestedManyWithoutEquationsInputSchema;
