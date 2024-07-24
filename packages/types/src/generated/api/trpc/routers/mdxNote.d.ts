export declare const mdxNoteActionsRouter: import("@trpc/server").CreateRouterInner<import("@trpc/server").RootConfig<{
    ctx: object;
    meta: object;
    errorShape: import("@trpc/server").DefaultErrorShape;
    transformer: import("@trpc/server").DefaultDataTransformer;
}>, {
    deleteNoteById: import("@trpc/server").BuildProcedure<"mutation", {
        _config: import("@trpc/server").RootConfig<{
            ctx: object;
            meta: object;
            errorShape: import("@trpc/server").DefaultErrorShape;
            transformer: import("@trpc/server").DefaultDataTransformer;
        }>;
        _meta: object;
        _ctx_out: object;
        _input_in: number | number[];
        _input_out: any[];
        _output_in: typeof import("@trpc/server").unsetMarker;
        _output_out: typeof import("@trpc/server").unsetMarker;
    }, import(".prisma/client").Prisma.BatchPayload>;
    toggleBookmarkedById: import("@trpc/server").BuildProcedure<"mutation", {
        _config: import("@trpc/server").RootConfig<{
            ctx: object;
            meta: object;
            errorShape: import("@trpc/server").DefaultErrorShape;
            transformer: import("@trpc/server").DefaultDataTransformer;
        }>;
        _meta: object;
        _ctx_out: object;
        _input_in: number;
        _input_out: number;
        _output_in: typeof import("@trpc/server").unsetMarker;
        _output_out: typeof import("@trpc/server").unsetMarker;
    }, boolean>;
    getRemoteMdx: import("@trpc/server").BuildProcedure<"query", {
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
        tags: {
            value: string;
            kanbanId: number | null;
        }[];
        equations: {
            id: number;
            equationId: string | null;
            title: string;
            desc: string | null;
            content: string;
            asPython: string | null;
            variableLegend: import(".prisma/client").Prisma.JsonValue | null;
            variables: string[];
            keywords: string[];
            createdAt: Date;
        }[];
        citations: {
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
        }[];
        toDo: {
            id: number;
            createdAt: Date;
            task: string;
            dueAt: Date | null;
            details: string | null;
            parentId: number | null;
            category: import(".prisma/client").$Enums.TaskCategory | null;
            bookmarked: boolean;
            status: import(".prisma/client").$Enums.ToDoListStatus;
            priority: number;
            toDoListId: number | null;
        }[];
        ReadingList: {
            name: string;
            description: string | null;
            createdAt: Date;
            lastUpdate: Date;
        }[];
        topics: {
            value: string;
            kanbanId: number | null;
        }[];
        sequentialList: {
            sequentialKey: string;
        } | null;
        definitions: {
            id: string;
            label: string | null;
            content: string | null;
            alphabeticalLabel: string | null;
            mdxNoteId: number | null;
        }[];
        subjects: {
            value: string;
            kanbanId: number | null;
        }[];
        _count: {
            topics: number;
            subjects: number;
            tags: number;
            citations: number;
            sequentialList: number;
            ReadingList: number;
            equations: number;
            definitions: number;
            toDo: number;
        };
    } & {
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
    }) | null>;
    getRemoteMdxFromPathname: import("@trpc/server").BuildProcedure<"query", {
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
        tags: {
            value: string;
            kanbanId: number | null;
        }[];
        equations: {
            id: number;
            equationId: string | null;
            title: string;
            desc: string | null;
            content: string;
            asPython: string | null;
            variableLegend: import(".prisma/client").Prisma.JsonValue | null;
            variables: string[];
            keywords: string[];
            createdAt: Date;
        }[];
        citations: {
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
        }[];
        toDo: {
            id: number;
            createdAt: Date;
            task: string;
            dueAt: Date | null;
            details: string | null;
            parentId: number | null;
            category: import(".prisma/client").$Enums.TaskCategory | null;
            bookmarked: boolean;
            status: import(".prisma/client").$Enums.ToDoListStatus;
            priority: number;
            toDoListId: number | null;
        }[];
        ReadingList: {
            name: string;
            description: string | null;
            createdAt: Date;
            lastUpdate: Date;
        }[];
        topics: {
            value: string;
            kanbanId: number | null;
        }[];
        sequentialList: {
            sequentialKey: string;
        } | null;
        definitions: {
            id: string;
            label: string | null;
            content: string | null;
            alphabeticalLabel: string | null;
            mdxNoteId: number | null;
        }[];
        subjects: {
            value: string;
            kanbanId: number | null;
        }[];
        _count: {
            topics: number;
            subjects: number;
            tags: number;
            citations: number;
            sequentialList: number;
            ReadingList: number;
            equations: number;
            definitions: number;
            toDo: number;
        };
    } & {
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
    }) | null>;
    getFsMdx: import("@trpc/server").BuildProcedure<"query", {
        _config: import("@trpc/server").RootConfig<{
            ctx: object;
            meta: object;
            errorShape: import("@trpc/server").DefaultErrorShape;
            transformer: import("@trpc/server").DefaultDataTransformer;
        }>;
        _meta: object;
        _ctx_out: object;
        _input_in: {
            rootRelativePath: string;
            extension: ".mdx" | ".md";
            useProcessRoot?: boolean | undefined;
        };
        _input_out: {
            rootRelativePath: string;
            extension: ".mdx" | ".md";
            useProcessRoot: boolean;
        };
        _output_in: typeof import("@trpc/server").unsetMarker;
        _output_out: typeof import("@trpc/server").unsetMarker;
    }, string>;
    parseMdxString: import("@trpc/server").BuildProcedure<"mutation", {
        _config: import("@trpc/server").RootConfig<{
            ctx: object;
            meta: object;
            errorShape: import("@trpc/server").DefaultErrorShape;
            transformer: import("@trpc/server").DefaultDataTransformer;
        }>;
        _meta: object;
        _ctx_out: object;
        _input_in: {
            content: string;
            display?: "display" | "inline" | undefined;
        };
        _input_out: {
            display: "display" | "inline";
            content: string;
        };
        _output_in: typeof import("@trpc/server").unsetMarker;
        _output_out: typeof import("@trpc/server").unsetMarker;
    }, string>;
}>;
//# sourceMappingURL=mdxNote.d.ts.map