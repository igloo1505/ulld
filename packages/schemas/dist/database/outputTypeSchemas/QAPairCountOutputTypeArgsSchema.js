import { z } from 'zod';
import { QAPairCountOutputTypeSelectSchema } from './QAPairCountOutputTypeSelectSchema.js';
export const QAPairCountOutputTypeArgsSchema = z.object({
    select: z.lazy(() => QAPairCountOutputTypeSelectSchema).nullish(),
}).strict();
export default QAPairCountOutputTypeSelectSchema;
