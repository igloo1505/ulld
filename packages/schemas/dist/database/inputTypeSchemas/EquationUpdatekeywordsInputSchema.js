import { z } from 'zod';
export const EquationUpdatekeywordsInputSchema = z.object({
    set: z.string().array().optional(),
    push: z.union([z.string(), z.string().array()]).optional(),
}).strict();
export default EquationUpdatekeywordsInputSchema;
