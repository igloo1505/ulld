import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema.js';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema.js';
import { BibEntryUncheckedUpdateManyWithoutCitationGroupsNestedInputSchema } from './BibEntryUncheckedUpdateManyWithoutCitationGroupsNestedInputSchema.js';
export const CitationsGroupUncheckedUpdateInputSchema: z.ZodType<Prisma.CitationsGroupUncheckedUpdateInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  entries: z.lazy(() => BibEntryUncheckedUpdateManyWithoutCitationGroupsNestedInputSchema).optional()
}).strict();
export default CitationsGroupUncheckedUpdateInputSchema;