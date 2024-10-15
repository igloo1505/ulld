import { z } from 'zod';
import { QAPairUpdateManyMutationInputSchema } from '../inputTypeSchemas/QAPairUpdateManyMutationInputSchema.js';
import { QAPairUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/QAPairUncheckedUpdateManyInputSchema.js';
import { QAPairWhereInputSchema } from '../inputTypeSchemas/QAPairWhereInputSchema.js';
export const QAPairUpdateManyArgsSchema = z.object({
    data: z.union([QAPairUpdateManyMutationInputSchema, QAPairUncheckedUpdateManyInputSchema]),
    where: QAPairWhereInputSchema.optional(),
}).strict();
export default QAPairUpdateManyArgsSchema;
