import { z } from 'zod';
import { ZodOutputSchema } from '../types.js';
export declare const performanceConfigSchema: z.ZodDefault<z.ZodObject<{
    latexParsingDebounceTimeout: z.ZodDefault<z.ZodNumber>;
    mdxParsingDebounceTimeout: z.ZodDefault<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    latexParsingDebounceTimeout: number;
    mdxParsingDebounceTimeout: number;
}, {
    latexParsingDebounceTimeout?: number | undefined;
    mdxParsingDebounceTimeout?: number | undefined;
}>>;
export declare const performanceConfigSchemaOutput: ZodOutputSchema<typeof performanceConfigSchema>;
//# sourceMappingURL=performanceConfig.d.ts.map