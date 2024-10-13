import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { IntFieldUpdateOperationsInputSchema } from '../IntFieldUpdateOperationsInputSchema.js';
import { NullableStringFieldUpdateOperationsInputSchema } from '../NullableStringFieldUpdateOperationsInputSchema.js';
import { NullableIntFieldUpdateOperationsInputSchema } from '../NullableIntFieldUpdateOperationsInputSchema.js';
export const KanBanListUncheckedUpdateManyInputSchema: z.ZodType<Prisma.KanBanListUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  indexWithinBoard: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  boardId: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();
export default KanBanListUncheckedUpdateManyInputSchema;