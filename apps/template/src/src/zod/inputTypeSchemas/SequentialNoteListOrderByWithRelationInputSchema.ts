import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { MdxNoteOrderByRelationAggregateInputSchema } from './MdxNoteOrderByRelationAggregateInputSchema';
import { IpynbOrderByRelationAggregateInputSchema } from './IpynbOrderByRelationAggregateInputSchema';
import { SequentialNoteListOrderByRelevanceInputSchema } from './SequentialNoteListOrderByRelevanceInputSchema';

export const SequentialNoteListOrderByWithRelationInputSchema: z.ZodType<Prisma.SequentialNoteListOrderByWithRelationInput> = z.object({
  sequentialKey: z.lazy(() => SortOrderSchema).optional(),
  MdxNote: z.lazy(() => MdxNoteOrderByRelationAggregateInputSchema).optional(),
  Ipynb: z.lazy(() => IpynbOrderByRelationAggregateInputSchema).optional(),
  _relevance: z.lazy(() => SequentialNoteListOrderByRelevanceInputSchema).optional()
}).strict();

export default SequentialNoteListOrderByWithRelationInputSchema;
