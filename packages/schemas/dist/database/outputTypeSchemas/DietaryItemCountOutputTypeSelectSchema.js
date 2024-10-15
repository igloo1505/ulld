import { z } from 'zod';
export const DietaryItemCountOutputTypeSelectSchema = z.object({
    Diet: z.boolean().optional(),
    Serving: z.boolean().optional(),
}).strict();
export default DietaryItemCountOutputTypeSelectSchema;
