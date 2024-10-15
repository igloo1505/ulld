import { z } from 'zod';
import { DJTWhereInputSchema } from '../inputTypeSchemas/DJTWhereInputSchema.js';
export const DJTDeleteManyArgsSchema = z.object({
    where: DJTWhereInputSchema.optional(),
}).strict();
export default DJTDeleteManyArgsSchema;
