import { z } from 'zod';
import { EquationFindManyArgsSchema } from "../outputTypeSchemas/EquationFindManyArgsSchema";
import { RelatedValuesCountOutputTypeArgsSchema } from "../outputTypeSchemas/RelatedValuesCountOutputTypeArgsSchema";
export const RelatedValuesSelectSchema = z.object({
    id: z.boolean().optional(),
    input: z.boolean().optional(),
    output: z.boolean().optional(),
    equationId: z.boolean().optional(),
    equations: z.union([z.boolean(), z.lazy(() => EquationFindManyArgsSchema)]).optional(),
    _count: z.union([z.boolean(), z.lazy(() => RelatedValuesCountOutputTypeArgsSchema)]).optional(),
}).strict();
export default RelatedValuesSelectSchema;
