import { z } from 'zod';
import { EquationCreateWithoutRelatedValuesInputSchema } from './EquationCreateWithoutRelatedValuesInputSchema.js';
import { EquationUncheckedCreateWithoutRelatedValuesInputSchema } from './EquationUncheckedCreateWithoutRelatedValuesInputSchema.js';
import { EquationCreateOrConnectWithoutRelatedValuesInputSchema } from './EquationCreateOrConnectWithoutRelatedValuesInputSchema.js';
import { EquationUpsertWithWhereUniqueWithoutRelatedValuesInputSchema } from './EquationUpsertWithWhereUniqueWithoutRelatedValuesInputSchema.js';
import { EquationWhereUniqueInputSchema } from './EquationWhereUniqueInputSchema.js';
import { EquationUpdateWithWhereUniqueWithoutRelatedValuesInputSchema } from './EquationUpdateWithWhereUniqueWithoutRelatedValuesInputSchema.js';
import { EquationUpdateManyWithWhereWithoutRelatedValuesInputSchema } from './EquationUpdateManyWithWhereWithoutRelatedValuesInputSchema.js';
import { EquationScalarWhereInputSchema } from './EquationScalarWhereInputSchema.js';
export const EquationUpdateManyWithoutRelatedValuesNestedInputSchema = z.object({
    create: z.union([z.lazy(() => EquationCreateWithoutRelatedValuesInputSchema), z.lazy(() => EquationCreateWithoutRelatedValuesInputSchema).array(), z.lazy(() => EquationUncheckedCreateWithoutRelatedValuesInputSchema), z.lazy(() => EquationUncheckedCreateWithoutRelatedValuesInputSchema).array()]).optional(),
    connectOrCreate: z.union([z.lazy(() => EquationCreateOrConnectWithoutRelatedValuesInputSchema), z.lazy(() => EquationCreateOrConnectWithoutRelatedValuesInputSchema).array()]).optional(),
    upsert: z.union([z.lazy(() => EquationUpsertWithWhereUniqueWithoutRelatedValuesInputSchema), z.lazy(() => EquationUpsertWithWhereUniqueWithoutRelatedValuesInputSchema).array()]).optional(),
    set: z.union([z.lazy(() => EquationWhereUniqueInputSchema), z.lazy(() => EquationWhereUniqueInputSchema).array()]).optional(),
    disconnect: z.union([z.lazy(() => EquationWhereUniqueInputSchema), z.lazy(() => EquationWhereUniqueInputSchema).array()]).optional(),
    delete: z.union([z.lazy(() => EquationWhereUniqueInputSchema), z.lazy(() => EquationWhereUniqueInputSchema).array()]).optional(),
    connect: z.union([z.lazy(() => EquationWhereUniqueInputSchema), z.lazy(() => EquationWhereUniqueInputSchema).array()]).optional(),
    update: z.union([z.lazy(() => EquationUpdateWithWhereUniqueWithoutRelatedValuesInputSchema), z.lazy(() => EquationUpdateWithWhereUniqueWithoutRelatedValuesInputSchema).array()]).optional(),
    updateMany: z.union([z.lazy(() => EquationUpdateManyWithWhereWithoutRelatedValuesInputSchema), z.lazy(() => EquationUpdateManyWithWhereWithoutRelatedValuesInputSchema).array()]).optional(),
    deleteMany: z.union([z.lazy(() => EquationScalarWhereInputSchema), z.lazy(() => EquationScalarWhereInputSchema).array()]).optional(),
}).strict();
export default EquationUpdateManyWithoutRelatedValuesNestedInputSchema;
