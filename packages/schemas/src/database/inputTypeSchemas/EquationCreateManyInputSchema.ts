import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { JsonNullValueInputSchema } from './JsonNullValueInputSchema.js';
import { InputJsonValueSchema } from './InputJsonValueSchema.js';
import { EquationCreatevariablesInputSchema } from './EquationCreatevariablesInputSchema.js';
import { EquationCreatekeywordsInputSchema } from './EquationCreatekeywordsInputSchema.js';
export const EquationCreateManyInputSchema: z.ZodType<Prisma.EquationCreateManyInput> = z.object({
  id: z.number().int().optional(),
  equationId: z.string().optional().nullable(),
  title: z.string(),
  desc: z.string().optional().nullable(),
  content: z.string(),
  asPython: z.string().optional().nullable(),
  variableLegend: z.union([ z.lazy(() => JsonNullValueInputSchema),InputJsonValueSchema ]).optional(),
  variables: z.union([ z.lazy(() => EquationCreatevariablesInputSchema),z.string().array() ]).optional(),
  keywords: z.union([ z.lazy(() => EquationCreatekeywordsInputSchema),z.string().array() ]).optional(),
  createdAt: z.coerce.date().optional(),
  lastAccess: z.coerce.date().optional()
}).strict();
export default EquationCreateManyInputSchema;