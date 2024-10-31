import { z } from 'zod';
import { ZodOutputSchema } from '../types.js';
export declare const monacoEditorConfigSchema: z.ZodDefault<z.ZodObject<{
    defaultLangauge: z.ZodDefault<z.ZodString>;
    useVimMode: z.ZodDefault<z.ZodBoolean>;
}, "strip", z.ZodTypeAny, {
    defaultLangauge: string;
    useVimMode: boolean;
}, {
    defaultLangauge?: string | undefined;
    useVimMode?: boolean | undefined;
}>>;
export declare const monacoEditorConfigSchemaOutput: ZodOutputSchema<typeof monacoEditorConfigSchema>;
//# sourceMappingURL=codeEditorConfig.d.ts.map