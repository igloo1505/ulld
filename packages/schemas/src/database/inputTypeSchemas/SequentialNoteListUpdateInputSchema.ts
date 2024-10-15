import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema.js';
import { MdxNoteUpdateManyWithoutSequentialListNestedInputSchema } from './MdxNoteUpdateManyWithoutSequentialListNestedInputSchema.js';
import { IpynbUpdateManyWithoutSequentialListNestedInputSchema } from './IpynbUpdateManyWithoutSequentialListNestedInputSchema.js';
export const SequentialNoteListUpdateInputSchema: z.ZodType<Prisma.SequentialNoteListUpdateInput> = z.object({
  sequentialKey: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  MdxNote: z.lazy(() => MdxNoteUpdateManyWithoutSequentialListNestedInputSchema).optional(),
  Ipynb: z.lazy(() => IpynbUpdateManyWithoutSequentialListNestedInputSchema).optional()
}).strict();
export default SequentialNoteListUpdateInputSchema;