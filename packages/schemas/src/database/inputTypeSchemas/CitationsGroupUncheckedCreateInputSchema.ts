import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { BibEntryUncheckedCreateNestedManyWithoutCitationGroupsInputSchema } from '../BibEntryUncheckedCreateNestedManyWithoutCitationGroupsInputSchema.js';
export const CitationsGroupUncheckedCreateInputSchema: z.ZodType<Prisma.CitationsGroupUncheckedCreateInput> = z.object({
  name: z.string(),
  description: z.string().optional().nullable(),
  entries: z.lazy(() => BibEntryUncheckedCreateNestedManyWithoutCitationGroupsInputSchema).optional()
}).strict();
export default CitationsGroupUncheckedCreateInputSchema;