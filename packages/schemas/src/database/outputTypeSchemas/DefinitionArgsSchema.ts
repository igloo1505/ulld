import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
..//inputTypeSchemas/DefinitionSelectSchema.js
..//inputTypeSchemas/DefinitionIncludeSchema.js
export const DefinitionArgsSchema: z.ZodType<Prisma.DefinitionDefaultArgs> = z.object({
  select: z.lazy(() => DefinitionSelectSchema).optional(),
  include: z.lazy(() => DefinitionIncludeSchema).optional(),
}).strict();
export default DefinitionArgsSchema;