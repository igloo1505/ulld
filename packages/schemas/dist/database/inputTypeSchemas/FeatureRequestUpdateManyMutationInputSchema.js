import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema.js';
import { FeatureRequestUpdatecategoryInputSchema } from './FeatureRequestUpdatecategoryInputSchema.js';
import { FeatureRequestUpdateuserBaseInputSchema } from './FeatureRequestUpdateuserBaseInputSchema.js';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema.js';
export const FeatureRequestUpdateManyMutationInputSchema = z.object({
    email: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
    message: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
    category: z.union([z.lazy(() => FeatureRequestUpdatecategoryInputSchema), z.string().array()]).optional(),
    userBase: z.union([z.lazy(() => FeatureRequestUpdateuserBaseInputSchema), z.string().array()]).optional(),
    receivedOn: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
}).strict();
export default FeatureRequestUpdateManyMutationInputSchema;
