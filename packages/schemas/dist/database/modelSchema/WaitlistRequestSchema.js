import { z } from 'zod';
/////////////////////////////////////////
// WAITLIST REQUEST SCHEMA
/////////////////////////////////////////
export const WaitlistRequestSchema = z.object({
    id: z.number().int(),
    email: z.string(),
    receivedOn: z.coerce.date(),
    emailsSent: z.number().int(),
});
/////////////////////////////////////////
// WAITLIST REQUEST PARTIAL SCHEMA
/////////////////////////////////////////
export const WaitlistRequestPartialSchema = WaitlistRequestSchema.partial();
export default WaitlistRequestSchema;
