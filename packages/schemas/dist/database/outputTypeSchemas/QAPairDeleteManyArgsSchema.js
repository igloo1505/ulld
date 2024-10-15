import { z } from 'zod';
import { QAPairWhereInputSchema } from '../inputTypeSchemas/QAPairWhereInputSchema.js';
export const QAPairDeleteManyArgsSchema = z.object({
    where: QAPairWhereInputSchema.optional(),
}).strict();
export default QAPairDeleteManyArgsSchema;
