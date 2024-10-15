import { z } from 'zod';
import { EquationWhereUniqueInputSchema } from './EquationWhereUniqueInputSchema.js';
import { EquationCreateWithoutSubjectsInputSchema } from './EquationCreateWithoutSubjectsInputSchema.js';
import { EquationUncheckedCreateWithoutSubjectsInputSchema } from './EquationUncheckedCreateWithoutSubjectsInputSchema.js';
export const EquationCreateOrConnectWithoutSubjectsInputSchema = z.object({
    where: z.lazy(() => EquationWhereUniqueInputSchema),
    create: z.union([z.lazy(() => EquationCreateWithoutSubjectsInputSchema), z.lazy(() => EquationUncheckedCreateWithoutSubjectsInputSchema)]),
}).strict();
export default EquationCreateOrConnectWithoutSubjectsInputSchema;
