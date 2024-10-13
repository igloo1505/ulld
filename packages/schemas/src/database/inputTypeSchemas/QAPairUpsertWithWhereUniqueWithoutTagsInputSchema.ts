import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { QAPairWhereUniqueInputSchema } from '../QAPairWhereUniqueInputSchema.js';
import { QAPairUpdateWithoutTagsInputSchema } from '../QAPairUpdateWithoutTagsInputSchema.js';
import { QAPairUncheckedUpdateWithoutTagsInputSchema } from '../QAPairUncheckedUpdateWithoutTagsInputSchema.js';
import { QAPairCreateWithoutTagsInputSchema } from '../QAPairCreateWithoutTagsInputSchema.js';
import { QAPairUncheckedCreateWithoutTagsInputSchema } from '../QAPairUncheckedCreateWithoutTagsInputSchema.js';
export const QAPairUpsertWithWhereUniqueWithoutTagsInputSchema: z.ZodType<Prisma.QAPairUpsertWithWhereUniqueWithoutTagsInput> = z.object({
  where: z.lazy(() => QAPairWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => QAPairUpdateWithoutTagsInputSchema),z.lazy(() => QAPairUncheckedUpdateWithoutTagsInputSchema) ]),
  create: z.union([ z.lazy(() => QAPairCreateWithoutTagsInputSchema),z.lazy(() => QAPairUncheckedCreateWithoutTagsInputSchema) ]),
}).strict();
export default QAPairUpsertWithWhereUniqueWithoutTagsInputSchema;