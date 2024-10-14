import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { QAPairWhereUniqueInputSchema } from './QAPairWhereUniqueInputSchema';
import { QAPairCreateWithoutTagsInputSchema } from './QAPairCreateWithoutTagsInputSchema';
import { QAPairUncheckedCreateWithoutTagsInputSchema } from './QAPairUncheckedCreateWithoutTagsInputSchema';

export const QAPairCreateOrConnectWithoutTagsInputSchema: z.ZodType<Prisma.QAPairCreateOrConnectWithoutTagsInput> = z.object({
  where: z.lazy(() => QAPairWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => QAPairCreateWithoutTagsInputSchema),z.lazy(() => QAPairUncheckedCreateWithoutTagsInputSchema) ]),
}).strict();

export default QAPairCreateOrConnectWithoutTagsInputSchema;
