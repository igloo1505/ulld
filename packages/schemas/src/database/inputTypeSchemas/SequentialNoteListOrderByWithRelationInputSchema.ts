import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { SortOrderSchema } from '../SortOrderSchema.js';
import { MdxNoteOrderByRelationAggregateInputSchema } from '../MdxNoteOrderByRelationAggregateInputSchema.js';
import { IpynbOrderByRelationAggregateInputSchema } from '../IpynbOrderByRelationAggregateInputSchema.js';
import { SequentialNoteListOrderByRelevanceInputSchema } from '../SequentialNoteListOrderByRelevanceInputSchema.js';
export const SequentialNoteListOrderByWithRelationInputSchema: z.ZodType<Prisma.SequentialNoteListOrderByWithRelationInput> = z.object({
  sequentialKey: z.lazy(() => SortOrderSchema).optional(),
  MdxNote: z.lazy(() => MdxNoteOrderByRelationAggregateInputSchema).optional(),
  Ipynb: z.lazy(() => IpynbOrderByRelationAggregateInputSchema).optional(),
  _relevance: z.lazy(() => SequentialNoteListOrderByRelevanceInputSchema).optional()
}).strict();
export default SequentialNoteListOrderByWithRelationInputSchema;