import { z } from 'zod';
import { EquationFindManyArgsSchema } from "../outputTypeSchemas/EquationFindManyArgsSchema";
import { RelatedValuesCountOutputTypeArgsSchema } from "../outputTypeSchemas/RelatedValuesCountOutputTypeArgsSchema";
export const RelatedValuesIncludeSchema = z.object({
    equations: z.union([z.boolean(), z.lazy(() => EquationFindManyArgsSchema)]).optional(),
    _count: z.union([z.boolean(), z.lazy(() => RelatedValuesCountOutputTypeArgsSchema)]).optional(),
}).strict();
export default RelatedValuesIncludeSchema;
