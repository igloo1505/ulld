import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { BibEntryUncheckedUpdateManyWithoutCitationGroupsNestedInputSchema } from './BibEntryUncheckedUpdateManyWithoutCitationGroupsNestedInputSchema';

export const CitationsGroupUncheckedUpdateInputSchema: z.ZodType<Prisma.CitationsGroupUncheckedUpdateInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  entries: z.lazy(() => BibEntryUncheckedUpdateManyWithoutCitationGroupsNestedInputSchema).optional()
}).strict();

export default CitationsGroupUncheckedUpdateInputSchema;
