export declare const readDocumentTypes: () => {
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
}[];
