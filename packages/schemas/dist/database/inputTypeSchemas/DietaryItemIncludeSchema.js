import { z } from 'zod';
import { DietFindManyArgsSchema } from "../outputTypeSchemas/DietFindManyArgsSchema";
import { ServingFindManyArgsSchema } from "../outputTypeSchemas/ServingFindManyArgsSchema";
import { DietaryItemCountOutputTypeArgsSchema } from "../outputTypeSchemas/DietaryItemCountOutputTypeArgsSchema";
export const DietaryItemIncludeSchema = z.object({
    Diet: z.union([z.boolean(), z.lazy(() => DietFindManyArgsSchema)]).optional(),
    Serving: z.union([z.boolean(), z.lazy(() => ServingFindManyArgsSchema)]).optional(),
    _count: z.union([z.boolean(), z.lazy(() => DietaryItemCountOutputTypeArgsSchema)]).optional(),
}).strict();
export default DietaryItemIncludeSchema;
