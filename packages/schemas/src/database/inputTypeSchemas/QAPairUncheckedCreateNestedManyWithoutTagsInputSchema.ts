import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { QAPairCreateWithoutTagsInputSchema } from './QAPairCreateWithoutTagsInputSchema';
import { QAPairUncheckedCreateWithoutTagsInputSchema } from './QAPairUncheckedCreateWithoutTagsInputSchema';
import { QAPairCreateOrConnectWithoutTagsInputSchema } from './QAPairCreateOrConnectWithoutTagsInputSchema';
import { QAPairWhereUniqueInputSchema } from './QAPairWhereUniqueInputSchema';

export const QAPairUncheckedCreateNestedManyWithoutTagsInputSchema: z.ZodType<Prisma.QAPairUncheckedCreateNestedManyWithoutTagsInput> = z.object({
  create: z.union([ z.lazy(() => QAPairCreateWithoutTagsInputSchema),z.lazy(() => QAPairCreateWithoutTagsInputSchema).array(),z.lazy(() => QAPairUncheckedCreateWithoutTagsInputSchema),z.lazy(() => QAPairUncheckedCreateWithoutTagsInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => QAPairCreateOrConnectWithoutTagsInputSchema),z.lazy(() => QAPairCreateOrConnectWithoutTagsInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => QAPairWhereUniqueInputSchema),z.lazy(() => QAPairWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default QAPairUncheckedCreateNestedManyWithoutTagsInputSchema;
