export declare const readDocumentTypes: () => {
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
}[];
//# sourceMappingURL=readDocumentTypes.d.ts.map