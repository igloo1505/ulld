import { z } from 'zod';
import { IpynbWhereInputSchema } from '../inputTypeSchemas/IpynbWhereInputSchema.js';
export const IpynbDeleteManyArgsSchema = z.object({
    where: IpynbWhereInputSchema.optional(),
}).strict();
export default IpynbDeleteManyArgsSchema;
