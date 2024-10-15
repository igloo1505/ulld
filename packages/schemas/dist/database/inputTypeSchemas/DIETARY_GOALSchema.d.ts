import { z } from 'zod';
export declare const DIETARY_GOALSchema: z.ZodEnum<["weightLoss", "muscleGain", "autoImmune", "allergy", "gsd", "skin", "sexDrive", "anxiety", "memory", "energy", "adhd", "sleep", "depression", "mentalHealth"]>;
export type DIETARY_GOALType = `${z.infer<typeof DIETARY_GOALSchema>}`;
export default DIETARY_GOALSchema;
//# sourceMappingURL=DIETARY_GOALSchema.d.ts.map