import { z } from 'zod';
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
//# sourceMappingURL=performanceConfig.d.ts.map