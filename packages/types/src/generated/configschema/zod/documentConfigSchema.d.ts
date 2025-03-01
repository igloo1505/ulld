import { z } from "zod";
import { ValidIconName } from "@ulld/types";
import { ZodOutputSchema } from "../types.js";
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
    icon: z.ZodDefault<z.ZodEffects<z.ZodString, string, string>>;
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
    fs: string;
    url: string;
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
    topicLabel?: string | undefined;
    subjectLabel?: string | undefined;
}, {
    label: string;
    fs: string;
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
    fs: z.ZodEffects<z.ZodString, string, string>;
    id: z.ZodOptional<z.ZodString>;
    url: z.ZodOptional<z.ZodEffects<z.ZodString, string, string>>;
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
    url?: string | undefined;
    docType?: string | undefined;
    filePathPattern?: string | undefined;
    topicLabel?: string | undefined;
    subjectLabel?: string | undefined;
}, {
    label: string;
    fs: string;
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
    id?: string | undefined;
    url?: string | undefined;
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
export declare const documentTypeConfigSchema: z.ZodEffects<z.ZodObject<{
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
    fs: z.ZodEffects<z.ZodString, string, string>;
    id: z.ZodOptional<z.ZodString>;
    url: z.ZodOptional<z.ZodEffects<z.ZodString, string, string>>;
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
    url?: string | undefined;
    docType?: string | undefined;
    filePathPattern?: string | undefined;
    topicLabel?: string | undefined;
    subjectLabel?: string | undefined;
}, {
    label: string;
    fs: string;
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
    id?: string | undefined;
    url?: string | undefined;
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
}>, {
    docType: string;
    id: string;
    url: string;
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
    id?: string | undefined;
    url?: string | undefined;
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
export declare const documentTypeConfigSchemaOutputSchema: z.ZodObject<z.objectUtil.extendShape<{
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
    fs: z.ZodEffects<z.ZodString, string, string>;
    id: z.ZodOptional<z.ZodString>;
    url: z.ZodOptional<z.ZodEffects<z.ZodString, string, string>>;
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
    icon: z.ZodEffects<z.ZodString, string, string>;
    inSidebar: z.ZodBoolean;
    inNavbar: z.ZodBoolean;
}>, "strip", z.ZodTypeAny, {
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
    fs: string;
    id: string;
    url: string;
    docType: string;
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
    fs: string;
    id: string;
    url: string;
    docType: string;
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
    }>>>>;
    fs: z.ZodOptional<z.ZodEffects<z.ZodString, string, string>>;
    id: z.ZodOptional<z.ZodOptional<z.ZodString>>;
    url: z.ZodOptional<z.ZodOptional<z.ZodEffects<z.ZodString, string, string>>>;
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
    }>>>>;
    icon: z.ZodOptional<z.ZodEffects<z.ZodString, string, string>>;
    inSidebar: z.ZodOptional<z.ZodBoolean>;
    inNavbar: z.ZodOptional<z.ZodBoolean>;
    fs: z.ZodString;
}>, "strip", z.ZodTypeAny, {
    fs: string;
    label?: string | undefined;
    icon?: string | undefined;
    UI?: {
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
    } | undefined;
    id?: string | undefined;
    url?: string | undefined;
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
}, {
    fs: string;
    label?: string | undefined;
    icon?: string | undefined;
    UI?: {
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
    } | undefined;
    id?: string | undefined;
    url?: string | undefined;
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
export type DocumentTypeConfigAsDocTypeDataField = {
    docTypeData: Omit<z.infer<typeof documentTypeConfigSchema>, "icon"> & {
        icon: ValidIconName;
    };
};
export type DocumentTypeConfig = z.output<typeof documentTypeConfigSchema>;
export type DocumentTypeConfigInput = z.input<typeof documentTypeConfigSchema>;
//# sourceMappingURL=documentConfigSchema.d.ts.map