import { z } from 'zod';
export const DIETARY_GOALSchema = z.enum(['weightLoss', 'muscleGain', 'autoImmune', 'allergy', 'gsd', 'skin', 'sexDrive', 'anxiety', 'memory', 'energy', 'adhd', 'sleep', 'depression', 'mentalHealth']);
export default DIETARY_GOALSchema;
