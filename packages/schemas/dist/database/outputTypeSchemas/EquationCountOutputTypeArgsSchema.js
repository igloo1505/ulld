import { z } from 'zod';
import { EquationCountOutputTypeSelectSchema } from './EquationCountOutputTypeSelectSchema.js';
export const EquationCountOutputTypeArgsSchema = z.object({
    select: z.lazy(() => EquationCountOutputTypeSelectSchema).nullish(),
}).strict();
export default EquationCountOutputTypeSelectSchema;
