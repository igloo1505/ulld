import { z } from 'zod';

/////////////////////////////////////////
// DJT SCHEMA
/////////////////////////////////////////

export const DJTSchema = z.object({
  id: z.number().int(),
  pluginName: z.string().nullable(),
  modelId: z.string().nullable(),
  utilityStringField: z.string().nullable(),
  utilityNumberField: z.number().nullable(),
  utilityDateField: z.coerce.date().nullable(),
  utilityDateFieldTwo: z.coerce.date().nullable(),
  data: z.instanceof(Buffer),
})

export type DJT = z.infer<typeof DJTSchema>

/////////////////////////////////////////
// DJT PARTIAL SCHEMA
/////////////////////////////////////////

export const DJTPartialSchema = DJTSchema.partial()

export type DJTPartial = z.infer<typeof DJTPartialSchema>

export default DJTSchema;
