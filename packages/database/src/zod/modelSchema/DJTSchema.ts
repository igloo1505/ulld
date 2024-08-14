import { z } from 'zod';

/////////////////////////////////////////
// DJT SCHEMA
/////////////////////////////////////////

export const DJTSchema = z.object({
  id: z.number().int(),
  type: z.string(),
  data: z.instanceof(Buffer),
})

export type DJT = z.infer<typeof DJTSchema>

/////////////////////////////////////////
// DJT PARTIAL SCHEMA
/////////////////////////////////////////

export const DJTPartialSchema = DJTSchema.partial()

export type DJTPartial = z.infer<typeof DJTPartialSchema>

export default DJTSchema;
