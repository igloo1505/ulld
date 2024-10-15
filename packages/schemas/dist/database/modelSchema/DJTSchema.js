import { z } from 'zod';
/////////////////////////////////////////
// DJT SCHEMA
/////////////////////////////////////////
export const DJTSchema = z.object({
    id: z.number().int(),
    type: z.string(),
    data: z.instanceof(Buffer),
});
/////////////////////////////////////////
// DJT PARTIAL SCHEMA
/////////////////////////////////////////
export const DJTPartialSchema = DJTSchema.partial();
export default DJTSchema;
