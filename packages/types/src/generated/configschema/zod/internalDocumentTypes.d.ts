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
                bg?: string;
                fg?: string;
            }, {
                bg?: string;
                fg?: string;
            }>>;
            light: z.ZodDefault<z.ZodObject<{
                bg: z.ZodOptional<z.ZodString>;
                fg: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                bg?: string;
                fg?: string;
            }, {
                bg?: string;
                fg?: string;
            }>>;
        }, "strip", z.ZodTypeAny, {
            dark?: {
                bg?: string;
                fg?: string;
            };
            light?: {
                bg?: string;
                fg?: string;
            };
        }, {
            dark?: {
                bg?: string;
                fg?: string;
            };
            light?: {
                bg?: string;
                fg?: string;
            };
        }>>;
    }, "strip", z.ZodTypeAny, {
        styles?: {
            dark?: {
                bg?: string;
                fg?: string;
            };
            light?: {
                bg?: string;
                fg?: string;
            };
        };
    }, {
        styles?: {
            dark?: {
                bg?: string;
                fg?: string;
            };
            light?: {
                bg?: string;
                fg?: string;
            };
        };
    }>>>;
    fs: z.ZodOptional<z.ZodEffects<z.ZodString, string, string>>;
    url: z.ZodEffects<z.ZodString, string, string>;
    id: z.ZodOptional<z.ZodString>;
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
    label?: string;
    icon?: string;
    UI?: {
        styles?: {
            dark?: {
                bg?: string;
                fg?: string;
            };
            light?: {
                bg?: string;
                fg?: string;
            };
        };
    };
    fs?: string;
    url?: string;
    id?: string;
    docType?: string;
    filePathPattern?: string;
    matchWeight?: number;
    urlQuery?: Record<string, string | number | string[] | number[]>;
    keywords?: string[];
    topicLabel?: string;
    subjectLabel?: string;
    autoTag?: string[];
    autoTopic?: string[];
    autoSubject?: string[];
    inSidebar?: boolean;
    inNavbar?: boolean;
}, {
    label?: string;
    icon?: string;
    UI?: {
        styles?: {
            dark?: {
                bg?: string;
                fg?: string;
            };
            light?: {
                bg?: string;
                fg?: string;
            };
        };
    };
    fs?: string;
    url?: string;
    id?: string;
    docType?: string;
    filePathPattern?: string;
    matchWeight?: number;
    urlQuery?: Record<string, string | number | string[] | number[]>;
    keywords?: string[];
    topicLabel?: string;
    subjectLabel?: string;
    autoTag?: string[];
    autoTopic?: string[];
    autoSubject?: string[];
    inSidebar?: boolean;
    inNavbar?: boolean;
}>;
export type InternalDocumentConfigType = z.output<typeof internalDocumentTypeConfigSchema>;
export type InternalDocumentConfigInput = z.input<typeof internalDocumentTypeConfigSchema>;
export declare const internalDocumentTypes: z.input<typeof internalDocumentTypeConfigSchema>[];
