export declare const readingListRouter: import("@trpc/server").CreateRouterInner<import("@trpc/server").RootConfig<{
    ctx: object;
    meta: object;
    errorShape: import("@trpc/server").DefaultErrorShape;
    transformer: import("@trpc/server").DefaultDataTransformer;
}>, {
    addToReadingList: import("@trpc/server").BuildProcedure<"mutation", {
        _config: import("@trpc/server").RootConfig<{
            ctx: object;
            meta: object;
            errorShape: import("@trpc/server").DefaultErrorShape;
            transformer: import("@trpc/server").DefaultDataTransformer;
        }>;
        _meta: object;
        _ctx_out: object;
        _input_in: {
            type: "BibEntry" | "MdxNote";
            itemId: string | number;
            readingListName?: string | undefined;
        };
        _input_out: {
            type: "BibEntry" | "MdxNote";
            readingListName: string;
            itemId: string | number;
        };
        _output_in: typeof import("@trpc/server").unsetMarker;
        _output_out: typeof import("@trpc/server").unsetMarker;
    }, {
        name: string;
        description: string | null;
        createdAt: Date;
        lastUpdate: Date;
    }>;
    getReadingListContent: import("@trpc/server").BuildProcedure<"query", {
        _config: import("@trpc/server").RootConfig<{
            ctx: object;
            meta: object;
            errorShape: import("@trpc/server").DefaultErrorShape;
            transformer: import("@trpc/server").DefaultDataTransformer;
        }>;
        _meta: object;
        _ctx_out: object;
        _input_in: string;
        _input_out: string;
        _output_in: typeof import("@trpc/server").unsetMarker;
        _output_out: typeof import("@trpc/server").unsetMarker;
    }, ({
        bibEntries: ({
            tags: {
                value: string;
                kanbanId: number | null;
            }[];
            MdxNotes: {
                id: number;
                isProtected: boolean | null;
                dietSummaryKey: string | null;
                title: string;
                latexTitle: string | null;
                rootRelativePath: string;
                noteType: string;
                content: string;
                formatted: string | null;
                summary: string | null;
                citationsListOrder: string[];
                importantValues: number[];
                imageSrc: string | null;
                href: string;
                sequentialKey: string | null;
                sequentialIndex: number | null;
                floatImages: boolean;
                remoteUrl: string | null;
                trackRemote: boolean;
                outgoingQuickLinks: string[];
                quickLink: string | null;
                bookmarked: boolean;
                firstSync: Date;
                lastSync: Date;
            }[];
            citationGroups: {
                name: string;
                description: string | null;
            }[];
        } & {
            id: string;
            BibId: number | null;
            OwnWork: boolean;
            ColleaguesWork: boolean;
            read: boolean;
            htmlCitation: string | null;
            PdfPath: string | null;
            address: string | null;
            annote: string | null;
            author: string | null;
            booktitle: string | null;
            chapter: string | null;
            crossref: string | null;
            doi: string | null;
            edition: string | null;
            editor: string | null;
            email: string | null;
            howpublished: string | null;
            institution: string | null;
            journal: string | null;
            month: string | null;
            note: string | null;
            number: string | null;
            organization: string | null;
            pages: string | null;
            publisher: string | null;
            school: string | null;
            series: string | null;
            title: string | null;
            volume: string | null;
            type: string | null;
            year: string | null;
            numpages: string | null;
            url: string | null;
            issue: string | null;
            issn: string | null;
            abstract: string | null;
            urldate: string | null;
            keywords: string | null;
            copyright: string | null;
            added: Date;
        })[];
    } & {
        name: string;
        description: string | null;
        createdAt: Date;
        lastUpdate: Date;
    }) | null>;
}>;
//# sourceMappingURL=readingList.d.ts.map