import { z } from 'zod';

export const WaitlistRequestScalarFieldEnumSchema = z.enum(['id','email','receivedOn','emailsSent']);

export default WaitlistRequestScalarFieldEnumSchema;
