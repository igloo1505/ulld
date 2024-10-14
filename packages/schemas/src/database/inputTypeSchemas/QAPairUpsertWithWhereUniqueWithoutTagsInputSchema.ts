import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { QAPairWhereUniqueInputSchema } from './QAPairWhereUniqueInputSchema';
import { QAPairUpdateWithoutTagsInputSchema } from './QAPairUpdateWithoutTagsInputSchema';
import { QAPairUncheckedUpdateWithoutTagsInputSchema } from './QAPairUncheckedUpdateWithoutTagsInputSchema';
import { QAPairCreateWithoutTagsInputSchema } from './QAPairCreateWithoutTagsInputSchema';
import { QAPairUncheckedCreateWithoutTagsInputSchema } from './QAPairUncheckedCreateWithoutTagsInputSchema';

export const QAPairUpsertWithWhereUniqueWithoutTagsInputSchema: z.ZodType<Prisma.QAPairUpsertWithWhereUniqueWithoutTagsInput> = z.object({
  where: z.lazy(() => QAPairWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => QAPairUpdateWithoutTagsInputSchema),z.lazy(() => QAPairUncheckedUpdateWithoutTagsInputSchema) ]),
  create: z.union([ z.lazy(() => QAPairCreateWithoutTagsInputSchema),z.lazy(() => QAPairUncheckedCreateWithoutTagsInputSchema) ]),
}).strict();

export default QAPairUpsertWithWhereUniqueWithoutTagsInputSchema;
