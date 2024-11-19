import { z } from 'zod';
export declare const internalDocTypes: z.ZodUnion<[z.ZodLiteral<"bookmarks">, z.ZodLiteral<"snippets">]>;
export declare const internalDocumentTypeConfigSchema: z.ZodObject<{
    label: z.ZodString;
    icon: z.ZodDefault<z.ZodEffects<z.ZodString, string, string>>;
    UI: z.ZodDefault<z.ZodDefault<z.ZodObject<{
        styles: z.ZodDefault<z.ZodObject<{
            dark: z.ZodDefault<z.ZodObject<{
                bg: z.ZodOptional<z.ZodString>;
                fg: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                bg?: string | undefined;
                fg?: string | undefined;
            }, {
                bg?: string | undefined;
                fg?: string | undefined;
            }>>;
            light: z.ZodDefault<z.ZodObject<{
                bg: z.ZodOptional<z.ZodString>;
                fg: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                bg?: string | undefined;
                fg?: string | undefined;
            }, {
                bg?: string | undefined;
                fg?: string | undefined;
            }>>;
        }, "strip", z.ZodTypeAny, {
            dark: {
                bg?: string | undefined;
                fg?: string | undefined;
            };
            light: {
                bg?: string | undefined;
                fg?: string | undefined;
            };
        }, {
            dark?: {
                bg?: string | undefined;
                fg?: string | undefined;
            } | undefined;
            light?: {
                bg?: string | undefined;
                fg?: string | undefined;
            } | undefined;
        }>>;
    }, "strip", z.ZodTypeAny, {
        styles: {
            dark: {
                bg?: string | undefined;
                fg?: string | undefined;
            };
            light: {
                bg?: string | undefined;
                fg?: string | undefined;
            };
        };
    }, {
        styles?: {
            dark?: {
                bg?: string | undefined;
                fg?: string | undefined;
            } | undefined;
            light?: {
                bg?: string | undefined;
                fg?: string | undefined;
            } | undefined;
        } | undefined;
    }>>>;
    fs: z.ZodOptional<z.ZodEffects<z.ZodString, string, string>>;
    id: z.ZodOptional<z.ZodString>;
    url: z.ZodEffects<z.ZodString, string, string>;
    docType: z.ZodOptional<z.ZodEffects<z.ZodString, string, string>>;
    filePathPattern: z.ZodOptional<z.ZodString>;
    matchWeight: z.ZodDefault<z.ZodNumber>;
    urlQuery: z.ZodDefault<z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnion<[z.ZodString, z.ZodArray<z.ZodString, "many">, z.ZodNumber, z.ZodArray<z.ZodNumber, "many">]>>>>;
    keywords: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
    topicLabel: z.ZodOptional<z.ZodString>;
    subjectLabel: z.ZodOptional<z.ZodString>;
    autoTag: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
    autoTopic: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
    autoSubject: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
    inSidebar: z.ZodDefault<z.ZodBoolean>;
    inNavbar: z.ZodDefault<z.ZodBoolean>;
}, "strip", z.ZodTypeAny, {
    label: string;
    icon: string;
    UI: {
        styles: {
            dark: {
                bg?: string | undefined;
                fg?: string | undefined;
            };
            light: {
                bg?: string | undefined;
                fg?: string | undefined;
            };
        };
    };
    url: string;
    matchWeight: number;
    urlQuery: Record<string, string | number | string[] | number[]>;
    keywords: string[];
    autoTag: string[];
    autoTopic: string[];
    autoSubject: string[];
    inSidebar: boolean;
    inNavbar: boolean;
    fs?: string | undefined;
    id?: string | undefined;
    docType?: string | undefined;
    filePathPattern?: string | undefined;
    topicLabel?: string | undefined;
    subjectLabel?: string | undefined;
}, {
    label: string;
    url: string;
    icon?: string | undefined;
    UI?: {
        styles?: {
            dark?: {
                bg?: string | undefined;
                fg?: string | undefined;
            } | undefined;
            light?: {
                bg?: string | undefined;
                fg?: string | undefined;
            } | undefined;
        } | undefined;
    } | undefined;
    fs?: string | undefined;
    id?: string | undefined;
    docType?: string | undefined;
    filePathPattern?: string | undefined;
    matchWeight?: number | undefined;
    urlQuery?: Record<string, string | number | string[] | number[]> | undefined;
    keywords?: string[] | undefined;
    topicLabel?: string | undefined;
    subjectLabel?: string | undefined;
    autoTag?: string[] | undefined;
    autoTopic?: string[] | undefined;
    autoSubject?: string[] | undefined;
    inSidebar?: boolean | undefined;
    inNavbar?: boolean | undefined;
}>;
export type InternalDocumentConfigType = z.output<typeof internalDocumentTypeConfigSchema>;
export type InternalDocumentConfigInput = z.input<typeof internalDocumentTypeConfigSchema>;
export declare const internalDocumentTypes: z.input<typeof internalDocumentTypeConfigSchema>[];
//# sourceMappingURL=internalDocumentTypes.d.ts.map