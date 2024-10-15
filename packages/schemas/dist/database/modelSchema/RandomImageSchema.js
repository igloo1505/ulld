import { z } from 'zod';
/////////////////////////////////////////
// RANDOM IMAGE SCHEMA
/////////////////////////////////////////
export const RandomImageSchema = z.object({
    path: z.string(),
    createdAt: z.coerce.date(),
});
/////////////////////////////////////////
// RANDOM IMAGE PARTIAL SCHEMA
/////////////////////////////////////////
export const RandomImagePartialSchema = RandomImageSchema.partial();
export default RandomImageSchema;
