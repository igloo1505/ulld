import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { KanBanListUpdateOneWithoutCardsNestedInputSchema } from './KanBanListUpdateOneWithoutCardsNestedInputSchema';

export const KanBanCardUpdateInputSchema: z.ZodType<Prisma.KanBanCardUpdateInput> = z.object({
  indexWithinList: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  label: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  details: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  KanBanList: z.lazy(() => KanBanListUpdateOneWithoutCardsNestedInputSchema).optional()
}).strict();

export default KanBanCardUpdateInputSchema;
