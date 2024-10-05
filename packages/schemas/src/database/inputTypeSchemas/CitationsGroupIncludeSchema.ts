import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BibEntryFindManyArgsSchema } from "../outputTypeSchemas/BibEntryFindManyArgsSchema"
import { CitationsGroupCountOutputTypeArgsSchema } from "../outputTypeSchemas/CitationsGroupCountOutputTypeArgsSchema"

export const CitationsGroupIncludeSchema: z.ZodType<Prisma.CitationsGroupInclude> = z.object({
  entries: z.union([z.boolean(),z.lazy(() => BibEntryFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => CitationsGroupCountOutputTypeArgsSchema)]).optional(),
}).strict()

export default CitationsGroupIncludeSchema;
