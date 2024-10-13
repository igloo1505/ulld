import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { IntFieldUpdateOperationsInputSchema } from '../IntFieldUpdateOperationsInputSchema.js';
import { NullableStringFieldUpdateOperationsInputSchema } from '../NullableStringFieldUpdateOperationsInputSchema.js';
export const KanBanListUpdateManyMutationInputSchema: z.ZodType<Prisma.KanBanListUpdateManyMutationInput> = z.object({
  indexWithinBoard: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();
export default KanBanListUpdateManyMutationInputSchema;