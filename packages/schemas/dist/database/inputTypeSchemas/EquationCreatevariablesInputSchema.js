import { z } from 'zod';
export const EquationCreatevariablesInputSchema = z.object({
    set: z.string().array()
}).strict();
export default EquationCreatevariablesInputSchema;
