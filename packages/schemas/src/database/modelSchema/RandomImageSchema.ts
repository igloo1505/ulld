import { z } from 'zod';

/////////////////////////////////////////
// RANDOM IMAGE SCHEMA
/////////////////////////////////////////

export const RandomImageSchema = z.object({
  path: z.string(),
  createdAt: z.coerce.date(),
})

export type RandomImage = z.infer<typeof RandomImageSchema>

/////////////////////////////////////////
// RANDOM IMAGE PARTIAL SCHEMA
/////////////////////////////////////////

export const RandomImagePartialSchema = RandomImageSchema.partial()

export type RandomImagePartial = z.infer<typeof RandomImagePartialSchema>

export default RandomImageSchema;
