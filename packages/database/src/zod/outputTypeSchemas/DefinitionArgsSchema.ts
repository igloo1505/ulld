import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DefinitionSelectSchema } from '../inputTypeSchemas/DefinitionSelectSchema';
import { DefinitionIncludeSchema } from '../inputTypeSchemas/DefinitionIncludeSchema';

export const DefinitionArgsSchema: z.ZodType<Prisma.DefinitionDefaultArgs> = z.object({
  select: z.lazy(() => DefinitionSelectSchema).optional(),
  include: z.lazy(() => DefinitionIncludeSchema).optional(),
}).strict();

export default DefinitionArgsSchema;
