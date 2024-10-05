import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { QAPairScalarWhereInputSchema } from './QAPairScalarWhereInputSchema';
import { QAPairUpdateManyMutationInputSchema } from './QAPairUpdateManyMutationInputSchema';
import { QAPairUncheckedUpdateManyWithoutTagsInputSchema } from './QAPairUncheckedUpdateManyWithoutTagsInputSchema';

export const QAPairUpdateManyWithWhereWithoutTagsInputSchema: z.ZodType<Prisma.QAPairUpdateManyWithWhereWithoutTagsInput> = z.object({
  where: z.lazy(() => QAPairScalarWhereInputSchema),
  data: z.union([ z.lazy(() => QAPairUpdateManyMutationInputSchema),z.lazy(() => QAPairUncheckedUpdateManyWithoutTagsInputSchema) ]),
}).strict();

export default QAPairUpdateManyWithWhereWithoutTagsInputSchema;
