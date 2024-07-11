import { z } from 'zod';
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
//# sourceMappingURL=codeEditorConfig.d.ts.map