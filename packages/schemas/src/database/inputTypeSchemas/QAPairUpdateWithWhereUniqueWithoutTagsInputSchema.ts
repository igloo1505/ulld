import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { QAPairWhereUniqueInputSchema } from './QAPairWhereUniqueInputSchema.js';
import { QAPairUpdateWithoutTagsInputSchema } from './QAPairUpdateWithoutTagsInputSchema.js';
import { QAPairUncheckedUpdateWithoutTagsInputSchema } from './QAPairUncheckedUpdateWithoutTagsInputSchema.js';
export const QAPairUpdateWithWhereUniqueWithoutTagsInputSchema: z.ZodType<Prisma.QAPairUpdateWithWhereUniqueWithoutTagsInput> = z.object({
  where: z.lazy(() => QAPairWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => QAPairUpdateWithoutTagsInputSchema),z.lazy(() => QAPairUncheckedUpdateWithoutTagsInputSchema) ]),
}).strict();
export default QAPairUpdateWithWhereUniqueWithoutTagsInputSchema;