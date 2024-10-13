import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { IntFieldUpdateOperationsInputSchema } from '../IntFieldUpdateOperationsInputSchema.js';
import { NullableStringFieldUpdateOperationsInputSchema } from '../NullableStringFieldUpdateOperationsInputSchema.js';
export const KanBanCardUpdateWithoutKanBanListInputSchema: z.ZodType<Prisma.KanBanCardUpdateWithoutKanBanListInput> = z.object({
  indexWithinList: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  label: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  details: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();
export default KanBanCardUpdateWithoutKanBanListInputSchema;