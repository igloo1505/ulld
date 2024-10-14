import { z } from 'zod';

/////////////////////////////////////////
// WHITEBOARD SCHEMA
/////////////////////////////////////////

export const WhiteboardSchema = z.object({
  id: z.string(),
  data: z.instanceof(Buffer),
})

export type Whiteboard = z.infer<typeof WhiteboardSchema>

/////////////////////////////////////////
// WHITEBOARD PARTIAL SCHEMA
/////////////////////////////////////////

export const WhiteboardPartialSchema = WhiteboardSchema.partial()

export type WhiteboardPartial = z.infer<typeof WhiteboardPartialSchema>

export default WhiteboardSchema;
