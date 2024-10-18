import { z } from "zod";
import { ValidIconNameEnumDynamicallyGenerated } from "@ulld/utilities/validIconNameEnum";
export declare const docTypeUISchema: z.ZodDefault<z.ZodObject<{
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
}>>;
export declare const zodDocTypeInput: z.ZodEffects<z.ZodString, string, string>;
export declare const documentTypeConfigSchemaBase: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    docType: z.ZodOptional<z.ZodEffects<z.ZodString, string, string>>;
    filePathPattern: z.ZodOptional<z.ZodString>;
    matchWeight: z.ZodDefault<z.ZodNumber>;
    fs: z.ZodEffects<z.ZodString, string, string>;
    url: z.ZodEffects<z.ZodString, string, string>;
    urlQuery: z.ZodDefault<z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnion<[z.ZodString, z.ZodArray<z.ZodString, "many">, z.ZodNumber, z.ZodArray<z.ZodNumber, "many">]>>>>;
    keywords: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
    label: z.ZodString;
    topicLabel: z.ZodOptional<z.ZodString>;
    subjectLabel: z.ZodOptional<z.ZodString>;
    autoTag: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
    autoTopic: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
    autoSubject: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
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
    icon: z.ZodDefault<z.ZodNativeEnum<typeof ValidIconNameEnumDynamicallyGenerated>>;
    inSidebar: z.ZodDefault<z.ZodBoolean>;
    inNavbar: z.ZodDefault<z.ZodBoolean>;
}, "strip", z.ZodTypeAny, {
    label: string;
    icon: ValidIconNameEnumDynamicallyGenerated;
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
    fs: string;
    matchWeight: number;
    url: string;
    urlQuery: Record<string, string | number | string[] | number[]>;
    keywords: string[];
    autoTag: string[];
    autoTopic: string[];
    autoSubject: string[];
    inSidebar: boolean;
    inNavbar: boolean;
    id?: string | undefined;
    docType?: string | undefined;
    filePathPattern?: string | undefined;
    topicLabel?: string | undefined;
    subjectLabel?: string | undefined;
}, {
    label: string;
    fs: string;
    url: string;
    icon?: ValidIconNameEnumDynamicallyGenerated | undefined;
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
export declare const documentTypeConfigSchemaInner: z.ZodObject<{
    label: z.ZodString;
    icon: z.ZodDefault<z.ZodNativeEnum<typeof ValidIconNameEnumDynamicallyGenerated>>;
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
    fs: z.ZodEffects<z.ZodString, string, string>;
    id: z.ZodOptional<z.ZodString>;
    docType: z.ZodOptional<z.ZodEffects<z.ZodString, string, string>>;
    filePathPattern: z.ZodOptional<z.ZodString>;
    matchWeight: z.ZodDefault<z.ZodNumber>;
    url: z.ZodOptional<z.ZodEffects<z.ZodString, string, string>>;
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
    icon: ValidIconNameEnumDynamicallyGenerated;
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
    fs: string;
    matchWeight: number;
    urlQuery: Record<string, string | number | string[] | number[]>;
    keywords: string[];
    autoTag: string[];
    autoTopic: string[];
    autoSubject: string[];
    inSidebar: boolean;
    inNavbar: boolean;
    id?: string | undefined;
    docType?: string | undefined;
    filePathPattern?: string | undefined;
    url?: string | undefined;
    topicLabel?: string | undefined;
    subjectLabel?: string | undefined;
}, {
    label: string;
    fs: string;
    icon?: ValidIconNameEnumDynamicallyGenerated | undefined;
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
    id?: string | undefined;
    docType?: string | undefined;
    filePathPattern?: string | undefined;
    matchWeight?: number | undefined;
    url?: string | undefined;
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
export declare const documentTypeConfigSchema: z.ZodEffects<z.ZodObject<{
    label: z.ZodString;
    icon: z.ZodDefault<z.ZodNativeEnum<typeof ValidIconNameEnumDynamicallyGenerated>>;
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
    fs: z.ZodEffects<z.ZodString, string, string>;
    id: z.ZodOptional<z.ZodString>;
    docType: z.ZodOptional<z.ZodEffects<z.ZodString, string, string>>;
    filePathPattern: z.ZodOptional<z.ZodString>;
    matchWeight: z.ZodDefault<z.ZodNumber>;
    url: z.ZodOptional<z.ZodEffects<z.ZodString, string, string>>;
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
    icon: ValidIconNameEnumDynamicallyGenerated;
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
    fs: string;
    matchWeight: number;
    urlQuery: Record<string, string | number | string[] | number[]>;
    keywords: string[];
    autoTag: string[];
    autoTopic: string[];
    autoSubject: string[];
    inSidebar: boolean;
    inNavbar: boolean;
    id?: string | undefined;
    docType?: string | undefined;
    filePathPattern?: string | undefined;
    url?: string | undefined;
    topicLabel?: string | undefined;
    subjectLabel?: string | undefined;
}, {
    label: string;
    fs: string;
    icon?: ValidIconNameEnumDynamicallyGenerated | undefined;
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
    id?: string | undefined;
    docType?: string | undefined;
    filePathPattern?: string | undefined;
    matchWeight?: number | undefined;
    url?: string | undefined;
    urlQuery?: Record<string, string | number | string[] | number[]> | undefined;
    keywords?: string[] | undefined;
    topicLabel?: string | undefined;
    subjectLabel?: string | undefined;
    autoTag?: string[] | undefined;
    autoTopic?: string[] | undefined;
    autoSubject?: string[] | undefined;
    inSidebar?: boolean | undefined;
    inNavbar?: boolean | undefined;
}>, {
    docType: string;
    id: string;
    url: string;
    label: string;
    icon: ValidIconNameEnumDynamicallyGenerated;
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
    fs: string;
    matchWeight: number;
    urlQuery: Record<string, string | number | string[] | number[]>;
    keywords: string[];
    autoTag: string[];
    autoTopic: string[];
    autoSubject: string[];
    inSidebar: boolean;
    inNavbar: boolean;
    filePathPattern?: string | undefined;
    topicLabel?: string | undefined;
    subjectLabel?: string | undefined;
}, {
    label: string;
    fs: string;
    icon?: ValidIconNameEnumDynamicallyGenerated | undefined;
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
    id?: string | undefined;
    docType?: string | undefined;
    filePathPattern?: string | undefined;
    matchWeight?: number | undefined;
    url?: string | undefined;
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
export type DocumentTypeConfig = z.output<typeof documentTypeConfigSchema>;
export type DocumentTypeConfigInput = z.input<typeof documentTypeConfigSchema>;
//# sourceMappingURL=documentConfigSchema.d.ts.map