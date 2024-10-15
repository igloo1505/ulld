import { z } from 'zod';
import { EquationWhereUniqueInputSchema } from './EquationWhereUniqueInputSchema.js';
import { EquationCreateWithoutTopicsInputSchema } from './EquationCreateWithoutTopicsInputSchema.js';
import { EquationUncheckedCreateWithoutTopicsInputSchema } from './EquationUncheckedCreateWithoutTopicsInputSchema.js';
export const EquationCreateOrConnectWithoutTopicsInputSchema = z.object({
    where: z.lazy(() => EquationWhereUniqueInputSchema),
    create: z.union([z.lazy(() => EquationCreateWithoutTopicsInputSchema), z.lazy(() => EquationUncheckedCreateWithoutTopicsInputSchema)]),
}).strict();
export default EquationCreateOrConnectWithoutTopicsInputSchema;
