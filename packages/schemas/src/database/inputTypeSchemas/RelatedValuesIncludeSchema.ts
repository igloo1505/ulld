import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { EquationFindManyArgsSchema } from "../outputTypeSchemas/EquationFindManyArgsSchema"
import { RelatedValuesCountOutputTypeArgsSchema } from "../outputTypeSchemas/RelatedValuesCountOutputTypeArgsSchema"

export const RelatedValuesIncludeSchema: z.ZodType<Prisma.RelatedValuesInclude> = z.object({
  equations: z.union([z.boolean(),z.lazy(() => EquationFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => RelatedValuesCountOutputTypeArgsSchema)]).optional(),
}).strict()

export default RelatedValuesIncludeSchema;
