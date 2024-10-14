import { z } from 'zod';

export const DIETARY_GOALSchema = z.enum(['weightLoss','muscleGain','autoImmune','allergy','gsd','skin','sexDrive','anxiety','memory','energy','adhd','sleep','depression','mentalHealth']);

export type DIETARY_GOALType = `${z.infer<typeof DIETARY_GOALSchema>}`

export default DIETARY_GOALSchema;
