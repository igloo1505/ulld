import { z } from 'zod';
/////////////////////////////////////////
// WHITEBOARD SCHEMA
/////////////////////////////////////////
export const WhiteboardSchema = z.object({
    id: z.string(),
    data: z.instanceof(Buffer),
});
/////////////////////////////////////////
// WHITEBOARD PARTIAL SCHEMA
/////////////////////////////////////////
export const WhiteboardPartialSchema = WhiteboardSchema.partial();
export default WhiteboardSchema;
