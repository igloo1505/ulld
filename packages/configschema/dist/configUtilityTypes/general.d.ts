import { DocumentTypeConfig } from "../zod/documentConfigSchema.js";
import { AppConfigSchemaOutput } from "../zod/main.js";
import { DocTypes } from "./docTypes.js";
export declare const getDocumentTypeConfig: (docType: string | DocumentTypeConfig, config?: AppConfigSchemaOutput) => DocumentTypeConfig | undefined;
export declare const getNoteTypeFromPath: (rootRelativePath?: string | null, config?: AppConfigSchemaOutput) => {
    docType: string;
    id: string;
    url: string;
    label: string;
    icon: import("@ulld/utilities/validIconNameEnum").ValidIconNameEnumDynamicallyGenerated;
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
} | "RemoteNote" | undefined;
export declare const getRootRelativePath: (slug: string, docType: DocTypes, config?: AppConfigSchemaOutput) => string;
//# sourceMappingURL=general.d.ts.map