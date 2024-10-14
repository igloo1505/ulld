import { z } from 'zod';

/////////////////////////////////////////
// FEATURE REQUEST SCHEMA
/////////////////////////////////////////

export const FeatureRequestSchema = z.object({
  id: z.number().int(),
  email: z.string(),
  message: z.string(),
  category: z.string().array(),
  userBase: z.string().array(),
  receivedOn: z.coerce.date(),
})

export type FeatureRequest = z.infer<typeof FeatureRequestSchema>

/////////////////////////////////////////
// FEATURE REQUEST PARTIAL SCHEMA
/////////////////////////////////////////

export const FeatureRequestPartialSchema = FeatureRequestSchema.partial()

export type FeatureRequestPartial = z.infer<typeof FeatureRequestPartialSchema>

export default FeatureRequestSchema;
