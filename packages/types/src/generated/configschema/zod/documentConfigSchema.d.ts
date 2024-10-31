import { z } from "zod";
import { ValidIconName } from "@ulld/types";
import { ZodOutputSchema } from "../types.js";
export declare const docTypeUISchema: z.ZodDefault<z.ZodObject<{
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
}>>;
export declare const docTypeUISchemaOutput: ZodOutputSchema<typeof docTypeUISchema>;
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
    icon: z.ZodDefault<z.ZodEffects<z.ZodString, string, string>>;
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
export declare const documentTypeConfigSchemaInner: z.ZodObject<{
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
    fs: z.ZodEffects<z.ZodString, string, string>;
    url: z.ZodOptional<z.ZodEffects<z.ZodString, string, string>>;
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
export declare const documentTypeConfigSchema: z.ZodEffects<z.ZodObject<{
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
    fs: z.ZodEffects<z.ZodString, string, string>;
    url: z.ZodOptional<z.ZodEffects<z.ZodString, string, string>>;
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
}>, {
    docType: string;
    id: string;
    url: string;
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
export declare const documentTypeConfigSchemaOutputSchema: z.ZodObject<z.objectUtil.extendShape<{
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
    fs: z.ZodEffects<z.ZodString, string, string>;
    url: z.ZodOptional<z.ZodEffects<z.ZodString, string, string>>;
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
}, {
    id: z.ZodString;
    docType: z.ZodString;
    matchWeight: z.ZodNumber;
    urlQuery: z.ZodRecord<z.ZodString, z.ZodUnion<[z.ZodString, z.ZodArray<z.ZodString, "many">, z.ZodNumber, z.ZodArray<z.ZodNumber, "many">]>>;
    url: z.ZodString;
    keywords: z.ZodArray<z.ZodString, "many">;
    autoTag: z.ZodArray<z.ZodString, "many">;
    autoTopic: z.ZodArray<z.ZodString, "many">;
    autoSubject: z.ZodArray<z.ZodString, "many">;
    UI: ZodOutputSchema<z.ZodDefault<z.ZodObject<{
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
    icon: z.ZodEffects<z.ZodString, string, string>;
    inSidebar: z.ZodBoolean;
    inNavbar: z.ZodBoolean;
}>, "strip", z.ZodTypeAny, {
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
export declare const documentTypeConfigMinimalOutputSchema: z.ZodObject<z.objectUtil.extendShape<{
    label: z.ZodOptional<z.ZodString>;
    icon: z.ZodOptional<z.ZodDefault<z.ZodEffects<z.ZodString, string, string>>>;
    UI: z.ZodOptional<z.ZodDefault<z.ZodDefault<z.ZodObject<{
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
    }>>>>;
    fs: z.ZodOptional<z.ZodEffects<z.ZodString, string, string>>;
    url: z.ZodOptional<z.ZodOptional<z.ZodEffects<z.ZodString, string, string>>>;
    id: z.ZodOptional<z.ZodOptional<z.ZodString>>;
    docType: z.ZodOptional<z.ZodOptional<z.ZodEffects<z.ZodString, string, string>>>;
    filePathPattern: z.ZodOptional<z.ZodOptional<z.ZodString>>;
    matchWeight: z.ZodOptional<z.ZodDefault<z.ZodNumber>>;
    urlQuery: z.ZodOptional<z.ZodDefault<z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnion<[z.ZodString, z.ZodArray<z.ZodString, "many">, z.ZodNumber, z.ZodArray<z.ZodNumber, "many">]>>>>>;
    keywords: z.ZodOptional<z.ZodDefault<z.ZodArray<z.ZodString, "many">>>;
    topicLabel: z.ZodOptional<z.ZodOptional<z.ZodString>>;
    subjectLabel: z.ZodOptional<z.ZodOptional<z.ZodString>>;
    autoTag: z.ZodOptional<z.ZodDefault<z.ZodArray<z.ZodString, "many">>>;
    autoTopic: z.ZodOptional<z.ZodDefault<z.ZodArray<z.ZodString, "many">>>;
    autoSubject: z.ZodOptional<z.ZodDefault<z.ZodArray<z.ZodString, "many">>>;
    inSidebar: z.ZodOptional<z.ZodDefault<z.ZodBoolean>>;
    inNavbar: z.ZodOptional<z.ZodDefault<z.ZodBoolean>>;
}, {
    id: z.ZodOptional<z.ZodString>;
    docType: z.ZodOptional<z.ZodString>;
    matchWeight: z.ZodOptional<z.ZodNumber>;
    urlQuery: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnion<[z.ZodString, z.ZodArray<z.ZodString, "many">, z.ZodNumber, z.ZodArray<z.ZodNumber, "many">]>>>;
    url: z.ZodOptional<z.ZodString>;
    keywords: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    autoTag: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    autoTopic: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    autoSubject: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    UI: z.ZodOptional<ZodOutputSchema<z.ZodDefault<z.ZodObject<{
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
    }>>>>;
    icon: z.ZodOptional<z.ZodEffects<z.ZodString, string, string>>;
    inSidebar: z.ZodOptional<z.ZodBoolean>;
    inNavbar: z.ZodOptional<z.ZodBoolean>;
    fs: z.ZodString;
}>, "strip", z.ZodTypeAny, {
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
export type DocumentTypeConfigAsDocTypeDataField = {
    docTypeData: Omit<z.infer<typeof documentTypeConfigSchema>, "icon"> & {
        icon: ValidIconName;
    };
};
export type DocumentTypeConfig = z.output<typeof documentTypeConfigSchema>;
export type DocumentTypeConfigInput = z.input<typeof documentTypeConfigSchema>;
