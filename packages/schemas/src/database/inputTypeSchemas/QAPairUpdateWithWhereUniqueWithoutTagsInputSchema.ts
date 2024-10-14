import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { QAPairWhereUniqueInputSchema } from './QAPairWhereUniqueInputSchema';
import { QAPairUpdateWithoutTagsInputSchema } from './QAPairUpdateWithoutTagsInputSchema';
import { QAPairUncheckedUpdateWithoutTagsInputSchema } from './QAPairUncheckedUpdateWithoutTagsInputSchema';

export const QAPairUpdateWithWhereUniqueWithoutTagsInputSchema: z.ZodType<Prisma.QAPairUpdateWithWhereUniqueWithoutTagsInput> = z.object({
  where: z.lazy(() => QAPairWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => QAPairUpdateWithoutTagsInputSchema),z.lazy(() => QAPairUncheckedUpdateWithoutTagsInputSchema) ]),
}).strict();

export default QAPairUpdateWithWhereUniqueWithoutTagsInputSchema;
