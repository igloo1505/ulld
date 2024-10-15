import { z } from 'zod';
import { IpynbSelectSchema } from '../inputTypeSchemas/IpynbSelectSchema.js';
import { IpynbIncludeSchema } from '../inputTypeSchemas/IpynbIncludeSchema.js';
export const IpynbArgsSchema = z.object({
    select: z.lazy(() => IpynbSelectSchema).optional(),
    include: z.lazy(() => IpynbIncludeSchema).optional(),
}).strict();
export default IpynbArgsSchema;
