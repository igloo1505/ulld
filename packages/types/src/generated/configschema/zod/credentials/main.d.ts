import { z } from 'zod';
import { ZodOutputSchema } from '../../types.js';
export declare const credentialsConfigSchema: z.ZodDefault<z.ZodObject<{
    googleServiceAccountJsonPath: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    googleServiceAccountJsonPath?: string;
}, {
    googleServiceAccountJsonPath?: string;
}>>;
export declare const credentialsConfigSchemaOutput: ZodOutputSchema<typeof credentialsConfigSchema>;
