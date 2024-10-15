import { z } from 'zod';
import { QAPairSelectSchema } from '../inputTypeSchemas/QAPairSelectSchema.js';
import { QAPairIncludeSchema } from '../inputTypeSchemas/QAPairIncludeSchema.js';
export const QAPairArgsSchema = z.object({
    select: z.lazy(() => QAPairSelectSchema).optional(),
    include: z.lazy(() => QAPairIncludeSchema).optional(),
}).strict();
export default QAPairArgsSchema;
