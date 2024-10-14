import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema.js';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema.js';
import { BibEntryUpdateManyWithoutCitationGroupsNestedInputSchema } from './BibEntryUpdateManyWithoutCitationGroupsNestedInputSchema.js';
export const CitationsGroupUpdateInputSchema: z.ZodType<Prisma.CitationsGroupUpdateInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  entries: z.lazy(() => BibEntryUpdateManyWithoutCitationGroupsNestedInputSchema).optional()
}).strict();
export default CitationsGroupUpdateInputSchema;