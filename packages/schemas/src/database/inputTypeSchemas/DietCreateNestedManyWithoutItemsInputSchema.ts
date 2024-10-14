import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DietCreateWithoutItemsInputSchema } from './DietCreateWithoutItemsInputSchema';
import { DietUncheckedCreateWithoutItemsInputSchema } from './DietUncheckedCreateWithoutItemsInputSchema';
import { DietCreateOrConnectWithoutItemsInputSchema } from './DietCreateOrConnectWithoutItemsInputSchema';
import { DietWhereUniqueInputSchema } from './DietWhereUniqueInputSchema';

export const DietCreateNestedManyWithoutItemsInputSchema: z.ZodType<Prisma.DietCreateNestedManyWithoutItemsInput> = z.object({
  create: z.union([ z.lazy(() => DietCreateWithoutItemsInputSchema),z.lazy(() => DietCreateWithoutItemsInputSchema).array(),z.lazy(() => DietUncheckedCreateWithoutItemsInputSchema),z.lazy(() => DietUncheckedCreateWithoutItemsInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => DietCreateOrConnectWithoutItemsInputSchema),z.lazy(() => DietCreateOrConnectWithoutItemsInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => DietWhereUniqueInputSchema),z.lazy(() => DietWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default DietCreateNestedManyWithoutItemsInputSchema;
