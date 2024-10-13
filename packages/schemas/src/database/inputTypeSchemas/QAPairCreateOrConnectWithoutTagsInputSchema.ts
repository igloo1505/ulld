import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { QAPairWhereUniqueInputSchema } from '../QAPairWhereUniqueInputSchema.js';
import { QAPairCreateWithoutTagsInputSchema } from '../QAPairCreateWithoutTagsInputSchema.js';
import { QAPairUncheckedCreateWithoutTagsInputSchema } from '../QAPairUncheckedCreateWithoutTagsInputSchema.js';
export const QAPairCreateOrConnectWithoutTagsInputSchema: z.ZodType<Prisma.QAPairCreateOrConnectWithoutTagsInput> = z.object({
  where: z.lazy(() => QAPairWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => QAPairCreateWithoutTagsInputSchema),z.lazy(() => QAPairUncheckedCreateWithoutTagsInputSchema) ]),
}).strict();
export default QAPairCreateOrConnectWithoutTagsInputSchema;