import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { BibEntryCreateNestedManyWithoutCitationGroupsInputSchema } from './BibEntryCreateNestedManyWithoutCitationGroupsInputSchema.js';
export const CitationsGroupCreateInputSchema: z.ZodType<Prisma.CitationsGroupCreateInput> = z.object({
  name: z.string(),
  description: z.string().optional().nullable(),
  entries: z.lazy(() => BibEntryCreateNestedManyWithoutCitationGroupsInputSchema).optional()
}).strict();
export default CitationsGroupCreateInputSchema;