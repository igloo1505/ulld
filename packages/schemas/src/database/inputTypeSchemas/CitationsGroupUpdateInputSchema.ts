import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { BibEntryUpdateManyWithoutCitationGroupsNestedInputSchema } from './BibEntryUpdateManyWithoutCitationGroupsNestedInputSchema';

export const CitationsGroupUpdateInputSchema: z.ZodType<Prisma.CitationsGroupUpdateInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  entries: z.lazy(() => BibEntryUpdateManyWithoutCitationGroupsNestedInputSchema).optional()
}).strict();

export default CitationsGroupUpdateInputSchema;
