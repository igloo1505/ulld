import { z } from 'zod';
export const EquationCreatekeywordsInputSchema = z.object({
    set: z.string().array()
}).strict();
export default EquationCreatekeywordsInputSchema;
