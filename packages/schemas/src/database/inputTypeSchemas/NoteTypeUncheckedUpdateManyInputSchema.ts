import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema.js';
export const NoteTypeUncheckedUpdateManyInputSchema: z.ZodType<Prisma.NoteTypeUncheckedUpdateManyInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();
export default NoteTypeUncheckedUpdateManyInputSchema;