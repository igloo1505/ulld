declare const _default: import("@trpc/server").CreateRouterInner<import("@trpc/server").RootConfig<{
    ctx: object;
    meta: object;
    errorShape: import("@trpc/server").DefaultErrorShape;
    transformer: import("@trpc/server").DefaultDataTransformer;
}>, {
    getPrismaBib: import("@trpc/server").BuildProcedure<"query", {
        _config: import("@trpc/server").RootConfig<{
            ctx: object;
            meta: object;
            errorShape: import("@trpc/server").DefaultErrorShape;
            transformer: import("@trpc/server").DefaultDataTransformer;
        }>;
        _ctx_out: object;
        _input_in: typeof import("@trpc/server").unsetMarker;
        _input_out: typeof import("@trpc/server").unsetMarker;
        _output_in: typeof import("@trpc/server").unsetMarker;
        _output_out: typeof import("@trpc/server").unsetMarker;
        _meta: object;
    }, ({
        entries: ({
            tags: {
                value: string;
                kanbanId: number | null;
            }[];
            MdxNotes: {
                href: string;
                title: string;
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
        id: number;
        filename: string;
        firstSync: Date;
        lastSync: Date;
    }) | null>;
    bibSync: import("@trpc/server").BuildProcedure<"mutation", {
        _config: import("@trpc/server").RootConfig<{
            ctx: object;
            meta: object;
            errorShape: import("@trpc/server").DefaultErrorShape;
            transformer: import("@trpc/server").DefaultDataTransformer;
        }>;
        _meta: object;
        _ctx_out: object;
        _input_in: any;
        _input_out: any;
        _output_in: typeof import("@trpc/server").unsetMarker;
        _output_out: typeof import("@trpc/server").unsetMarker;
    }, void>;
    syncBibServerSide: import("@trpc/server").BuildProcedure<"mutation", {
        _config: import("@trpc/server").RootConfig<{
            ctx: object;
            meta: object;
            errorShape: import("@trpc/server").DefaultErrorShape;
            transformer: import("@trpc/server").DefaultDataTransformer;
        }>;
        _meta: object;
        _ctx_out: object;
        _input_in: number | undefined;
        _input_out: number | undefined;
        _output_in: typeof import("@trpc/server").unsetMarker;
        _output_out: typeof import("@trpc/server").unsetMarker;
    }, {
        entries: {
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
    } & {
        id: number;
        filename: string;
        firstSync: Date;
        lastSync: Date;
    }>;
    readBibFromFileSystem: import("@trpc/server").BuildProcedure<"query", {
        _config: import("@trpc/server").RootConfig<{
            ctx: object;
            meta: object;
            errorShape: import("@trpc/server").DefaultErrorShape;
            transformer: import("@trpc/server").DefaultDataTransformer;
        }>;
        _ctx_out: object;
        _input_in: typeof import("@trpc/server").unsetMarker;
        _input_out: typeof import("@trpc/server").unsetMarker;
        _output_in: typeof import("@trpc/server").unsetMarker;
        _output_out: typeof import("@trpc/server").unsetMarker;
        _meta: object;
    }, string | undefined>;
    getBib: import("@trpc/server").BuildProcedure<"query", {
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
    }, ({
        entries: ({
            readingList: {
                name: string;
                description: string | null;
                createdAt: Date;
                lastUpdate: Date;
            }[];
            tags: {
                value: string;
                kanbanId: number | null;
            }[];
            MdxNotes: ({
                tags: {
                    value: string;
                    kanbanId: number | null;
                }[];
                topics: {
                    value: string;
                    kanbanId: number | null;
                }[];
                subjects: {
                    value: string;
                    kanbanId: number | null;
                }[];
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
            })[];
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
        id: number;
        filename: string;
        firstSync: Date;
        lastSync: Date;
    }) | null>;
    getBibCitation: import("@trpc/server").BuildProcedure<"query", {
        _config: import("@trpc/server").RootConfig<{
            ctx: object;
            meta: object;
            errorShape: import("@trpc/server").DefaultErrorShape;
            transformer: import("@trpc/server").DefaultDataTransformer;
        }>;
        _meta: object;
        _ctx_out: object;
        _input_in: string[];
        _input_out: string[];
        _output_in: typeof import("@trpc/server").unsetMarker;
        _output_out: typeof import("@trpc/server").unsetMarker;
    }, {
        id: string;
        htmlCitation: string | null;
    }[]>;
    getBibEntry: import("@trpc/server").BuildProcedure<"query", {
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
        readingList: ({
            bibEntries: {
                id: string;
                title: string | null;
                added: Date;
            }[];
        } & {
            name: string;
            description: string | null;
            createdAt: Date;
            lastUpdate: Date;
        })[];
        tags: {
            value: string;
            kanbanId: number | null;
        }[];
        MdxNotes: ({
            tags: {
                value: string;
                kanbanId: number | null;
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
            topics: {
                value: string;
                kanbanId: number | null;
            }[];
            subjects: {
                value: string;
                kanbanId: number | null;
            }[];
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
        })[];
        citationGroups: ({
            entries: {
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
        } & {
            name: string;
            description: string | null;
        })[];
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
    }) | null>;
    addBibItemTag: import("@trpc/server").BuildProcedure<"mutation", {
        _config: import("@trpc/server").RootConfig<{
            ctx: object;
            meta: object;
            errorShape: import("@trpc/server").DefaultErrorShape;
            transformer: import("@trpc/server").DefaultDataTransformer;
        }>;
        _meta: object;
        _ctx_out: object;
        _input_in: {
            tag: string;
            bibItemId: string;
        };
        _input_out: {
            tag: string;
            bibItemId: string;
        };
        _output_in: typeof import("@trpc/server").unsetMarker;
        _output_out: typeof import("@trpc/server").unsetMarker;
    }, {
        tags: {
            value: string;
            kanbanId: number | null;
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
    }>;
    removeBibEntryTag: import("@trpc/server").BuildProcedure<"mutation", {
        _config: import("@trpc/server").RootConfig<{
            ctx: object;
            meta: object;
            errorShape: import("@trpc/server").DefaultErrorShape;
            transformer: import("@trpc/server").DefaultDataTransformer;
        }>;
        _meta: object;
        _ctx_out: object;
        _input_in: {
            tag: string;
            bibEntryId: string;
        };
        _input_out: {
            tag: string;
            bibEntryId: string;
        };
        _output_in: typeof import("@trpc/server").unsetMarker;
        _output_out: typeof import("@trpc/server").unsetMarker;
    }, {
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
    }>;
    bibEntryUpsert: import("@trpc/server").BuildProcedure<"mutation", {
        _config: import("@trpc/server").RootConfig<{
            ctx: object;
            meta: object;
            errorShape: import("@trpc/server").DefaultErrorShape;
            transformer: import("@trpc/server").DefaultDataTransformer;
        }>;
        _meta: object;
        _ctx_out: object;
        _input_in: any;
        _input_out: any;
        _output_in: typeof import("@trpc/server").unsetMarker;
        _output_out: typeof import("@trpc/server").unsetMarker;
    }, {
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
    }>;
    bibFilename: import("@trpc/server").BuildProcedure<"query", {
        _config: import("@trpc/server").RootConfig<{
            ctx: object;
            meta: object;
            errorShape: import("@trpc/server").DefaultErrorShape;
            transformer: import("@trpc/server").DefaultDataTransformer;
        }>;
        _meta: object;
        _ctx_out: object;
        _input_in: number | undefined;
        _input_out: number | undefined;
        _output_in: typeof import("@trpc/server").unsetMarker;
        _output_out: typeof import("@trpc/server").unsetMarker;
    }, string | {
        filename: string;
    } | undefined>;
    getCitationGroup: import("@trpc/server").BuildProcedure<"query", {
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
        entries: ({
            tags: {
                value: string;
                kanbanId: number | null;
            }[];
            MdxNotes: {
                id: number;
                title: string;
                summary: string | null;
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
    }) | null>;
}>;
export default _default;
//# sourceMappingURL=bibliographyRouter.d.ts.map