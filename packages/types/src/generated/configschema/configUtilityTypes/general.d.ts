import { DocumentTypeConfig } from "../zod/documentConfigSchema.js";
import { AppConfigSchemaOutput } from "../zod/main.js";
import { DocTypes } from "./docTypes.js";
export declare const getDocumentTypeConfig: (docType: string | DocumentTypeConfig, config?: AppConfigSchemaOutput) => DocumentTypeConfig | undefined;
export declare const getNoteTypeFromPath: (rootRelativePath?: string | null, config?: AppConfigSchemaOutput) => {
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
} | "RemoteNote";
export declare const getRootRelativePath: (slug: string, docType: DocTypes, config?: AppConfigSchemaOutput) => string;
