import { z } from 'zod';

/////////////////////////////////////////
// WAITLIST REQUEST SCHEMA
/////////////////////////////////////////

export const WaitlistRequestSchema = z.object({
  id: z.number().int(),
  email: z.string(),
  receivedOn: z.coerce.date(),
  emailsSent: z.number().int(),
})

export type WaitlistRequest = z.infer<typeof WaitlistRequestSchema>

/////////////////////////////////////////
// WAITLIST REQUEST PARTIAL SCHEMA
/////////////////////////////////////////

export const WaitlistRequestPartialSchema = WaitlistRequestSchema.partial()

export type WaitlistRequestPartial = z.infer<typeof WaitlistRequestPartialSchema>

export default WaitlistRequestSchema;
