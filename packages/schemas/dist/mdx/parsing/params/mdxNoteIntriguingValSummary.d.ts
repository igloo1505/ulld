export declare const mdxNoteIntriguingValSummaryPropsSchema: import("zod").ZodObject<Omit<import("zod").objectUtil.extendShape<{
    content: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodString>>;
    id: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodNumber>>;
    title: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodString>>;
    latexTitle: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodString>>;
    raw: import("zod").ZodString;
    floatImages: import("zod").ZodDefault<import("zod").ZodBoolean>;
    formatted: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodString>>;
    citations: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodEffects<import("zod").ZodObject<{
        Bib: import("zod").ZodOptional<import("zod").ZodObject<{
            firstSync: import("zod").ZodEffects<import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodUnion<[import("zod").ZodString, import("zod").ZodDate]>>>, Date | null | undefined, string | Date | null | undefined>;
            lastAccess: import("zod").ZodEffects<import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodUnion<[import("zod").ZodString, import("zod").ZodDate]>>>, Date | null | undefined, string | Date | null | undefined>;
            filename: import("zod").ZodDefault<import("zod").ZodString>;
            id: import("zod").ZodDefault<import("zod").ZodNumber>;
            entries: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodAny, "many">>;
        }, "strip", import("zod").ZodTypeAny, {
            id: number;
            entries: any[];
            filename: string;
            firstSync?: Date | null | undefined;
            lastAccess?: Date | null | undefined;
        }, {
            id?: number | undefined;
            entries?: any[] | undefined;
            firstSync?: string | Date | null | undefined;
            lastAccess?: string | Date | null | undefined;
            filename?: string | undefined;
        }>>;
        BibId: import("zod").ZodDefault<import("zod").ZodNumber>;
        readingList: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodObject<{
            name: import("zod").ZodString;
            description: import("zod").ZodNullable<import("zod").ZodString>;
            bibEntries: import("zod").ZodArray<import("zod").ZodAny, "many">;
            mdxNotes: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodAny, "many">>;
            ipynbNotes: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodAny, "many">>;
            createdAt: import("zod").ZodEffects<import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodUnion<[import("zod").ZodString, import("zod").ZodDate]>>>, Date, string | Date | null | undefined>;
            lastUpdate: import("zod").ZodEffects<import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodUnion<[import("zod").ZodString, import("zod").ZodDate]>>>, Date, string | Date | null | undefined>;
        }, "strip", import("zod").ZodTypeAny, {
            name: string;
            description: string | null;
            bibEntries: any[];
            mdxNotes: any[];
            ipynbNotes: any[];
            createdAt: Date;
            lastUpdate: Date;
        }, {
            name: string;
            description: string | null;
            bibEntries: any[];
            mdxNotes?: any[] | undefined;
            ipynbNotes?: any[] | undefined;
            createdAt?: string | Date | null | undefined;
            lastUpdate?: string | Date | null | undefined;
        }>, "many">>;
        topics: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodObject<{
            value: import("zod").ZodString;
        }, "strip", import("zod").ZodTypeAny, {
            value: string;
        }, {
            value: string;
        }>, "many">>;
        subjects: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodObject<{
            value: import("zod").ZodString;
        }, "strip", import("zod").ZodTypeAny, {
            value: string;
        }, {
            value: string;
        }>, "many">>;
        tags: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodUnion<[import("zod").ZodObject<{
            value: import("zod").ZodString;
            kanbanId: import("zod").ZodOptional<import("zod").ZodUnion<[import("zod").ZodNumber, import("zod").ZodNull, import("zod").ZodUndefined]>>;
        }, "strip", import("zod").ZodTypeAny, {
            value: string;
            kanbanId?: number | null | undefined;
        }, {
            value: string;
            kanbanId?: number | null | undefined;
        }>, import("zod").ZodEffects<import("zod").ZodString, {
            value: string;
            kanbanId?: number | null | undefined;
        }, string>]>, "many">>;
        id: import("zod").ZodString;
        type: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodString>>;
        htmlCitation: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodString>>;
        PdfPath: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodString>>;
        address: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodString>>;
        annote: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodString>>;
        author: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodString>>;
        booktitle: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodString>>;
        chapter: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodString>>;
        crossref: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodString>>;
        doi: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodString>>;
        edition: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodString>>;
        editor: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodString>>;
        email: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodString>>;
        howpublished: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodString>>;
        institution: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodString>>;
        journal: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodString>>;
        month: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodString>>;
        note: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodString>>;
        number: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodString>>;
        organization: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodString>>;
        pages: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodString>>;
        publisher: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodString>>;
        school: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodString>>;
        series: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodString>>;
        title: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodString>>;
        volume: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodString>>;
        year: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodString>>;
        numpages: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodString>>;
        url: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodString>>;
        issue: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodString>>;
        issn: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodString>>;
        abstract: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodString>>;
        urldate: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodString>>;
        keywords: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodString>>;
        copyright: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodString>>;
        tempPageIndex: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodNumber>>;
        read: import("zod").ZodDefault<import("zod").ZodBoolean>;
        OwnWork: import("zod").ZodDefault<import("zod").ZodBoolean>;
        ColleaguesWork: import("zod").ZodDefault<import("zod").ZodBoolean>;
        MdxNotes: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodArray<import("zod").ZodAny, "many">>>;
        createdAt: import("zod").ZodEffects<import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodUnion<[import("zod").ZodString, import("zod").ZodDate, import("zod").ZodString]>>>, Date, string | Date | null | undefined>;
        lastAccess: import("zod").ZodEffects<import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodUnion<[import("zod").ZodString, import("zod").ZodDate, import("zod").ZodString]>>>, Date, string | Date | null | undefined>;
        citationGroups: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodObject<{
            name: import("zod").ZodString;
            description: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodString>>;
            entries: import("zod").ZodArray<import("zod").ZodAny, "many">;
        }, "strip", import("zod").ZodTypeAny, {
            name: string;
            entries: any[];
            description?: string | null | undefined;
        }, {
            name: string;
            entries: any[];
            description?: string | null | undefined;
        }>, "many">>;
        added: import("zod").ZodEffects<import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodUnion<[import("zod").ZodString, import("zod").ZodDate, import("zod").ZodString]>>>, Date, string | Date | null | undefined>;
    }, "strip", import("zod").ZodString, import("zod").objectOutputType<{
        Bib: import("zod").ZodOptional<import("zod").ZodObject<{
            firstSync: import("zod").ZodEffects<import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodUnion<[import("zod").ZodString, import("zod").ZodDate]>>>, Date | null | undefined, string | Date | null | undefined>;
            lastAccess: import("zod").ZodEffects<import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodUnion<[import("zod").ZodString, import("zod").ZodDate]>>>, Date | null | undefined, string | Date | null | undefined>;
            filename: import("zod").ZodDefault<import("zod").ZodString>;
            id: import("zod").ZodDefault<import("zod").ZodNumber>;
            entries: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodAny, "many">>;
        }, "strip", import("zod").ZodTypeAny, {
            id: number;
            entries: any[];
            filename: string;
            firstSync?: Date | null | undefined;
            lastAccess?: Date | null | undefined;
        }, {
            id?: number | undefined;
            entries?: any[] | undefined;
            firstSync?: string | Date | null | undefined;
            lastAccess?: string | Date | null | undefined;
            filename?: string | undefined;
        }>>;
        BibId: import("zod").ZodDefault<import("zod").ZodNumber>;
        readingList: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodObject<{
            name: import("zod").ZodString;
            description: import("zod").ZodNullable<import("zod").ZodString>;
            bibEntries: import("zod").ZodArray<import("zod").ZodAny, "many">;
            mdxNotes: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodAny, "many">>;
            ipynbNotes: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodAny, "many">>;
            createdAt: import("zod").ZodEffects<import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodUnion<[import("zod").ZodString, import("zod").ZodDate]>>>, Date, string | Date | null | undefined>;
            lastUpdate: import("zod").ZodEffects<import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodUnion<[import("zod").ZodString, import("zod").ZodDate]>>>, Date, string | Date | null | undefined>;
        }, "strip", import("zod").ZodTypeAny, {
            name: string;
            description: string | null;
            bibEntries: any[];
            mdxNotes: any[];
            ipynbNotes: any[];
            createdAt: Date;
            lastUpdate: Date;
        }, {
            name: string;
            description: string | null;
            bibEntries: any[];
            mdxNotes?: any[] | undefined;
            ipynbNotes?: any[] | undefined;
            createdAt?: string | Date | null | undefined;
            lastUpdate?: string | Date | null | undefined;
        }>, "many">>;
        topics: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodObject<{
            value: import("zod").ZodString;
        }, "strip", import("zod").ZodTypeAny, {
            value: string;
        }, {
            value: string;
        }>, "many">>;
        subjects: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodObject<{
            value: import("zod").ZodString;
        }, "strip", import("zod").ZodTypeAny, {
            value: string;
        }, {
            value: string;
        }>, "many">>;
        tags: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodUnion<[import("zod").ZodObject<{
            value: import("zod").ZodString;
            kanbanId: import("zod").ZodOptional<import("zod").ZodUnion<[import("zod").ZodNumber, import("zod").ZodNull, import("zod").ZodUndefined]>>;
        }, "strip", import("zod").ZodTypeAny, {
            value: string;
            kanbanId?: number | null | undefined;
        }, {
            value: string;
            kanbanId?: number | null | undefined;
        }>, import("zod").ZodEffects<import("zod").ZodString, {
            value: string;
            kanbanId?: number | null | undefined;
        }, string>]>, "many">>;
        id: import("zod").ZodString;
        type: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodString>>;
        htmlCitation: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodString>>;
        PdfPath: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodString>>;
        address: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodString>>;
        annote: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodString>>;
        author: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodString>>;
        booktitle: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodString>>;
        chapter: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodString>>;
        crossref: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodString>>;
        doi: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodString>>;
        edition: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodString>>;
        editor: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodString>>;
        email: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodString>>;
        howpublished: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodString>>;
        institution: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodString>>;
        journal: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodString>>;
        month: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodString>>;
        note: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodString>>;
        number: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodString>>;
        organization: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodString>>;
        pages: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodString>>;
        publisher: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodString>>;
        school: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodString>>;
        series: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodString>>;
        title: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodString>>;
        volume: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodString>>;
        year: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodString>>;
        numpages: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodString>>;
        url: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodString>>;
        issue: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodString>>;
        issn: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodString>>;
        abstract: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodString>>;
        urldate: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodString>>;
        keywords: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodString>>;
        copyright: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodString>>;
        tempPageIndex: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodNumber>>;
        read: import("zod").ZodDefault<import("zod").ZodBoolean>;
        OwnWork: import("zod").ZodDefault<import("zod").ZodBoolean>;
        ColleaguesWork: import("zod").ZodDefault<import("zod").ZodBoolean>;
        MdxNotes: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodArray<import("zod").ZodAny, "many">>>;
        createdAt: import("zod").ZodEffects<import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodUnion<[import("zod").ZodString, import("zod").ZodDate, import("zod").ZodString]>>>, Date, string | Date | null | undefined>;
        lastAccess: import("zod").ZodEffects<import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodUnion<[import("zod").ZodString, import("zod").ZodDate, import("zod").ZodString]>>>, Date, string | Date | null | undefined>;
        citationGroups: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodObject<{
            name: import("zod").ZodString;
            description: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodString>>;
            entries: import("zod").ZodArray<import("zod").ZodAny, "many">;
        }, "strip", import("zod").ZodTypeAny, {
            name: string;
            entries: any[];
            description?: string | null | undefined;
        }, {
            name: string;
            entries: any[];
            description?: string | null | undefined;
        }>, "many">>;
        added: import("zod").ZodEffects<import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodUnion<[import("zod").ZodString, import("zod").ZodDate, import("zod").ZodString]>>>, Date, string | Date | null | undefined>;
    }, import("zod").ZodString, "strip">, import("zod").objectInputType<{
        Bib: import("zod").ZodOptional<import("zod").ZodObject<{
            firstSync: import("zod").ZodEffects<import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodUnion<[import("zod").ZodString, import("zod").ZodDate]>>>, Date | null | undefined, string | Date | null | undefined>;
            lastAccess: import("zod").ZodEffects<import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodUnion<[import("zod").ZodString, import("zod").ZodDate]>>>, Date | null | undefined, string | Date | null | undefined>;
            filename: import("zod").ZodDefault<import("zod").ZodString>;
            id: import("zod").ZodDefault<import("zod").ZodNumber>;
            entries: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodAny, "many">>;
        }, "strip", import("zod").ZodTypeAny, {
            id: number;
            entries: any[];
            filename: string;
            firstSync?: Date | null | undefined;
            lastAccess?: Date | null | undefined;
        }, {
            id?: number | undefined;
            entries?: any[] | undefined;
            firstSync?: string | Date | null | undefined;
            lastAccess?: string | Date | null | undefined;
            filename?: string | undefined;
        }>>;
        BibId: import("zod").ZodDefault<import("zod").ZodNumber>;
        readingList: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodObject<{
            name: import("zod").ZodString;
            description: import("zod").ZodNullable<import("zod").ZodString>;
            bibEntries: import("zod").ZodArray<import("zod").ZodAny, "many">;
            mdxNotes: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodAny, "many">>;
            ipynbNotes: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodAny, "many">>;
            createdAt: import("zod").ZodEffects<import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodUnion<[import("zod").ZodString, import("zod").ZodDate]>>>, Date, string | Date | null | undefined>;
            lastUpdate: import("zod").ZodEffects<import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodUnion<[import("zod").ZodString, import("zod").ZodDate]>>>, Date, string | Date | null | undefined>;
        }, "strip", import("zod").ZodTypeAny, {
            name: string;
            description: string | null;
            bibEntries: any[];
            mdxNotes: any[];
            ipynbNotes: any[];
            createdAt: Date;
            lastUpdate: Date;
        }, {
            name: string;
            description: string | null;
            bibEntries: any[];
            mdxNotes?: any[] | undefined;
            ipynbNotes?: any[] | undefined;
            createdAt?: string | Date | null | undefined;
            lastUpdate?: string | Date | null | undefined;
        }>, "many">>;
        topics: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodObject<{
            value: import("zod").ZodString;
        }, "strip", import("zod").ZodTypeAny, {
            value: string;
        }, {
            value: string;
        }>, "many">>;
        subjects: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodObject<{
            value: import("zod").ZodString;
        }, "strip", import("zod").ZodTypeAny, {
            value: string;
        }, {
            value: string;
        }>, "many">>;
        tags: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodUnion<[import("zod").ZodObject<{
            value: import("zod").ZodString;
            kanbanId: import("zod").ZodOptional<import("zod").ZodUnion<[import("zod").ZodNumber, import("zod").ZodNull, import("zod").ZodUndefined]>>;
        }, "strip", import("zod").ZodTypeAny, {
            value: string;
            kanbanId?: number | null | undefined;
        }, {
            value: string;
            kanbanId?: number | null | undefined;
        }>, import("zod").ZodEffects<import("zod").ZodString, {
            value: string;
            kanbanId?: number | null | undefined;
        }, string>]>, "many">>;
        id: import("zod").ZodString;
        type: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodString>>;
        htmlCitation: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodString>>;
        PdfPath: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodString>>;
        address: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodString>>;
        annote: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodString>>;
        author: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodString>>;
        booktitle: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodString>>;
        chapter: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodString>>;
        crossref: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodString>>;
        doi: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodString>>;
        edition: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodString>>;
        editor: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodString>>;
        email: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodString>>;
        howpublished: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodString>>;
        institution: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodString>>;
        journal: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodString>>;
        month: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodString>>;
        note: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodString>>;
        number: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodString>>;
        organization: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodString>>;
        pages: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodString>>;
        publisher: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodString>>;
        school: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodString>>;
        series: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodString>>;
        title: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodString>>;
        volume: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodString>>;
        year: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodString>>;
        numpages: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodString>>;
        url: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodString>>;
        issue: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodString>>;
        issn: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodString>>;
        abstract: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodString>>;
        urldate: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodString>>;
        keywords: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodString>>;
        copyright: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodString>>;
        tempPageIndex: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodNumber>>;
        read: import("zod").ZodDefault<import("zod").ZodBoolean>;
        OwnWork: import("zod").ZodDefault<import("zod").ZodBoolean>;
        ColleaguesWork: import("zod").ZodDefault<import("zod").ZodBoolean>;
        MdxNotes: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodArray<import("zod").ZodAny, "many">>>;
        createdAt: import("zod").ZodEffects<import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodUnion<[import("zod").ZodString, import("zod").ZodDate, import("zod").ZodString]>>>, Date, string | Date | null | undefined>;
        lastAccess: import("zod").ZodEffects<import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodUnion<[import("zod").ZodString, import("zod").ZodDate, import("zod").ZodString]>>>, Date, string | Date | null | undefined>;
        citationGroups: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodObject<{
            name: import("zod").ZodString;
            description: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodString>>;
            entries: import("zod").ZodArray<import("zod").ZodAny, "many">;
        }, "strip", import("zod").ZodTypeAny, {
            name: string;
            entries: any[];
            description?: string | null | undefined;
        }, {
            name: string;
            entries: any[];
            description?: string | null | undefined;
        }>, "many">>;
        added: import("zod").ZodEffects<import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodUnion<[import("zod").ZodString, import("zod").ZodDate, import("zod").ZodString]>>>, Date, string | Date | null | undefined>;
    }, import("zod").ZodString, "strip">>, Omit<{
        id: string;
        tags: {
            value: string;
            kanbanId?: number | null | undefined;
        }[];
        readingList: {
            name: string;
            description: string | null;
            bibEntries: any[];
            mdxNotes: any[];
            ipynbNotes: any[];
            createdAt: Date;
            lastUpdate: Date;
        }[];
        lastAccess: Date;
        createdAt: Date;
        BibId: number;
        topics: {
            value: string;
        }[];
        subjects: {
            value: string;
        }[];
        read: boolean;
        OwnWork: boolean;
        ColleaguesWork: boolean;
        citationGroups: {
            name: string;
            entries: any[];
            description?: string | null | undefined;
        }[];
        added: Date;
        number?: string | null | undefined;
        journal?: string | null | undefined;
        editor?: string | null | undefined;
        note?: string | null | undefined;
        abstract?: string | null | undefined;
        type?: string | null | undefined;
        title?: string | null | undefined;
        copyright?: string | null | undefined;
        school?: string | null | undefined;
        volume?: string | null | undefined;
        Bib?: {
            id: number;
            entries: any[];
            filename: string;
            firstSync?: Date | null | undefined;
            lastAccess?: Date | null | undefined;
        } | undefined;
        htmlCitation?: string | null | undefined;
        PdfPath?: string | null | undefined;
        address?: string | null | undefined;
        annote?: string | null | undefined;
        author?: string | null | undefined;
        booktitle?: string | null | undefined;
        chapter?: string | null | undefined;
        crossref?: string | null | undefined;
        doi?: string | null | undefined;
        edition?: string | null | undefined;
        email?: string | null | undefined;
        howpublished?: string | null | undefined;
        institution?: string | null | undefined;
        month?: string | null | undefined;
        organization?: string | null | undefined;
        pages?: string | null | undefined;
        publisher?: string | null | undefined;
        series?: string | null | undefined;
        year?: string | null | undefined;
        numpages?: string | null | undefined;
        url?: string | null | undefined;
        issue?: string | null | undefined;
        issn?: string | null | undefined;
        urldate?: string | null | undefined;
        keywords?: string | null | undefined;
        tempPageIndex?: number | null | undefined;
        MdxNotes?: any[] | null | undefined;
    }, "BibId"> & {
        BibId: number;
    }, import("zod").objectInputType<{
        Bib: import("zod").ZodOptional<import("zod").ZodObject<{
            firstSync: import("zod").ZodEffects<import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodUnion<[import("zod").ZodString, import("zod").ZodDate]>>>, Date | null | undefined, string | Date | null | undefined>;
            lastAccess: import("zod").ZodEffects<import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodUnion<[import("zod").ZodString, import("zod").ZodDate]>>>, Date | null | undefined, string | Date | null | undefined>;
            filename: import("zod").ZodDefault<import("zod").ZodString>;
            id: import("zod").ZodDefault<import("zod").ZodNumber>;
            entries: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodAny, "many">>;
        }, "strip", import("zod").ZodTypeAny, {
            id: number;
            entries: any[];
            filename: string;
            firstSync?: Date | null | undefined;
            lastAccess?: Date | null | undefined;
        }, {
            id?: number | undefined;
            entries?: any[] | undefined;
            firstSync?: string | Date | null | undefined;
            lastAccess?: string | Date | null | undefined;
            filename?: string | undefined;
        }>>;
        BibId: import("zod").ZodDefault<import("zod").ZodNumber>;
        readingList: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodObject<{
            name: import("zod").ZodString;
            description: import("zod").ZodNullable<import("zod").ZodString>;
            bibEntries: import("zod").ZodArray<import("zod").ZodAny, "many">;
            mdxNotes: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodAny, "many">>;
            ipynbNotes: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodAny, "many">>;
            createdAt: import("zod").ZodEffects<import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodUnion<[import("zod").ZodString, import("zod").ZodDate]>>>, Date, string | Date | null | undefined>;
            lastUpdate: import("zod").ZodEffects<import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodUnion<[import("zod").ZodString, import("zod").ZodDate]>>>, Date, string | Date | null | undefined>;
        }, "strip", import("zod").ZodTypeAny, {
            name: string;
            description: string | null;
            bibEntries: any[];
            mdxNotes: any[];
            ipynbNotes: any[];
            createdAt: Date;
            lastUpdate: Date;
        }, {
            name: string;
            description: string | null;
            bibEntries: any[];
            mdxNotes?: any[] | undefined;
            ipynbNotes?: any[] | undefined;
            createdAt?: string | Date | null | undefined;
            lastUpdate?: string | Date | null | undefined;
        }>, "many">>;
        topics: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodObject<{
            value: import("zod").ZodString;
        }, "strip", import("zod").ZodTypeAny, {
            value: string;
        }, {
            value: string;
        }>, "many">>;
        subjects: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodObject<{
            value: import("zod").ZodString;
        }, "strip", import("zod").ZodTypeAny, {
            value: string;
        }, {
            value: string;
        }>, "many">>;
        tags: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodUnion<[import("zod").ZodObject<{
            value: import("zod").ZodString;
            kanbanId: import("zod").ZodOptional<import("zod").ZodUnion<[import("zod").ZodNumber, import("zod").ZodNull, import("zod").ZodUndefined]>>;
        }, "strip", import("zod").ZodTypeAny, {
            value: string;
            kanbanId?: number | null | undefined;
        }, {
            value: string;
            kanbanId?: number | null | undefined;
        }>, import("zod").ZodEffects<import("zod").ZodString, {
            value: string;
            kanbanId?: number | null | undefined;
        }, string>]>, "many">>;
        id: import("zod").ZodString;
        type: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodString>>;
        htmlCitation: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodString>>;
        PdfPath: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodString>>;
        address: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodString>>;
        annote: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodString>>;
        author: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodString>>;
        booktitle: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodString>>;
        chapter: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodString>>;
        crossref: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodString>>;
        doi: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodString>>;
        edition: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodString>>;
        editor: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodString>>;
        email: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodString>>;
        howpublished: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodString>>;
        institution: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodString>>;
        journal: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodString>>;
        month: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodString>>;
        note: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodString>>;
        number: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodString>>;
        organization: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodString>>;
        pages: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodString>>;
        publisher: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodString>>;
        school: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodString>>;
        series: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodString>>;
        title: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodString>>;
        volume: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodString>>;
        year: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodString>>;
        numpages: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodString>>;
        url: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodString>>;
        issue: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodString>>;
        issn: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodString>>;
        abstract: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodString>>;
        urldate: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodString>>;
        keywords: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodString>>;
        copyright: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodString>>;
        tempPageIndex: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodNumber>>;
        read: import("zod").ZodDefault<import("zod").ZodBoolean>;
        OwnWork: import("zod").ZodDefault<import("zod").ZodBoolean>;
        ColleaguesWork: import("zod").ZodDefault<import("zod").ZodBoolean>;
        MdxNotes: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodArray<import("zod").ZodAny, "many">>>;
        createdAt: import("zod").ZodEffects<import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodUnion<[import("zod").ZodString, import("zod").ZodDate, import("zod").ZodString]>>>, Date, string | Date | null | undefined>;
        lastAccess: import("zod").ZodEffects<import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodUnion<[import("zod").ZodString, import("zod").ZodDate, import("zod").ZodString]>>>, Date, string | Date | null | undefined>;
        citationGroups: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodObject<{
            name: import("zod").ZodString;
            description: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodString>>;
            entries: import("zod").ZodArray<import("zod").ZodAny, "many">;
        }, "strip", import("zod").ZodTypeAny, {
            name: string;
            entries: any[];
            description?: string | null | undefined;
        }, {
            name: string;
            entries: any[];
            description?: string | null | undefined;
        }>, "many">>;
        added: import("zod").ZodEffects<import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodUnion<[import("zod").ZodString, import("zod").ZodDate, import("zod").ZodString]>>>, Date, string | Date | null | undefined>;
    }, import("zod").ZodString, "strip">>, "many">>;
    importantValues: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodNumber, "many">>;
    bookmarked: import("zod").ZodDefault<import("zod").ZodBoolean>;
    quickLinkId: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodString>>;
    href: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodString>>;
    citationsListOrder: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodString, "many">>;
    outgoingQuickLinks: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodString, "many">>;
    rootRelativePath: import("zod").ZodEffects<import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodString>>, string | null | undefined, string | null | undefined>;
    equationIds: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodString, "many">>;
    isProtected: import("zod").ZodDefault<import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodBoolean>>>;
    sequentialKey: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodString>>;
    sequentialIndex: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodNumber>>;
    sequentialList: import("zod").ZodOptional<import("zod").ZodObject<{
        sequentialKey: import("zod").ZodString;
        MdxNote: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodAny, "many">>;
        Ipynb: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodAny, "many">>;
    }, "strip", import("zod").ZodTypeAny, {
        MdxNote: any[];
        Ipynb: any[];
        sequentialKey: string;
    }, {
        sequentialKey: string;
        MdxNote?: any[] | undefined;
        Ipynb?: any[] | undefined;
    }>>;
    remoteUrl: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodString>>;
    noLog: import("zod").ZodDefault<import("zod").ZodBoolean>;
    saveFormatted: import("zod").ZodDefault<import("zod").ZodBoolean>;
    noteType: import("zod").ZodEffects<import("zod").ZodString, string, string>;
    trackRemote: import("zod").ZodDefault<import("zod").ZodBoolean>;
    toDo: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodObject<import("zod").objectUtil.extendShape<{
        id: import("zod").ZodNumber;
        createdAt: import("zod").ZodEffects<import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodUnion<[import("zod").ZodString, import("zod").ZodDate]>>>, Date, string | Date | null | undefined>;
        task: import("zod").ZodString;
        dueAt: import("zod").ZodEffects<import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodUnion<[import("zod").ZodString, import("zod").ZodDate]>>>, Date, string | Date | null | undefined>;
        details: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodString>>;
        associatedNotes: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodAny, "many">>;
        parentId: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodNumber>>;
        category: import("zod").ZodNativeEnum<{
            bug: "bug";
            feature: "feature";
            documentation: "documentation";
            online: "online";
            priority: "priority";
            urgent: "urgent";
            work: "work";
            gym: "gym";
            freetime: "freetime";
            study: "study";
            research: "research";
            paper: "paper";
        }>;
        bookmarked: import("zod").ZodDefault<import("zod").ZodBoolean>;
        status: import("zod").ZodEnum<["ToDo", "In_Progress", "Backlog", "Cancelled", "Done", "Future"]>;
        priority: import("zod").ZodNumber;
        parent: import("zod").ZodDefault<import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodAny>>>;
        child: import("zod").ZodDefault<import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodAny>>>;
        ToDoList: import("zod").ZodObject<import("zod").objectUtil.extendShape<import("zod").objectUtil.extendShape<{
            id: import("zod").ZodNumber;
            label: import("zod").ZodString;
            tasks: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodAny, "many">>;
        }, Pick<{
            name: import("zod").ZodString;
            description: import("zod").ZodNullable<import("zod").ZodString>;
            bibEntries: import("zod").ZodArray<import("zod").ZodAny, "many">;
            mdxNotes: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodAny, "many">>;
            ipynbNotes: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodAny, "many">>;
            createdAt: import("zod").ZodEffects<import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodUnion<[import("zod").ZodString, import("zod").ZodDate]>>>, Date, string | Date | null | undefined>;
            lastUpdate: import("zod").ZodEffects<import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodUnion<[import("zod").ZodString, import("zod").ZodDate]>>>, Date, string | Date | null | undefined>;
        }, "createdAt" | "lastUpdate">>, {
            topics: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodObject<{
                value: import("zod").ZodString;
            }, "strip", import("zod").ZodTypeAny, {
                value: string;
            }, {
                value: string;
            }>, "many">>;
            subjects: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodObject<{
                value: import("zod").ZodString;
            }, "strip", import("zod").ZodTypeAny, {
                value: string;
            }, {
                value: string;
            }>, "many">>;
            tags: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodUnion<[import("zod").ZodObject<{
                value: import("zod").ZodString;
                kanbanId: import("zod").ZodOptional<import("zod").ZodUnion<[import("zod").ZodNumber, import("zod").ZodNull, import("zod").ZodUndefined]>>;
            }, "strip", import("zod").ZodTypeAny, {
                value: string;
                kanbanId?: number | null | undefined;
            }, {
                value: string;
                kanbanId?: number | null | undefined;
            }>, import("zod").ZodEffects<import("zod").ZodString, {
                value: string;
                kanbanId?: number | null | undefined;
            }, string>]>, "many">>;
        }>, "strip", import("zod").ZodTypeAny, {
            id: number;
            label: string;
            tags: {
                value: string;
                kanbanId?: number | null | undefined;
            }[];
            createdAt: Date;
            lastUpdate: Date;
            topics: {
                value: string;
            }[];
            subjects: {
                value: string;
            }[];
            tasks: any[];
        }, {
            id: number;
            label: string;
            tags?: (string | {
                value: string;
                kanbanId?: number | null | undefined;
            })[] | undefined;
            createdAt?: string | Date | null | undefined;
            lastUpdate?: string | Date | null | undefined;
            topics?: {
                value: string;
            }[] | undefined;
            subjects?: {
                value: string;
            }[] | undefined;
            tasks?: any[] | undefined;
        }>;
        toDoListId: import("zod").ZodNumber;
    }, {
        topics: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodObject<{
            value: import("zod").ZodString;
        }, "strip", import("zod").ZodTypeAny, {
            value: string;
        }, {
            value: string;
        }>, "many">>;
        subjects: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodObject<{
            value: import("zod").ZodString;
        }, "strip", import("zod").ZodTypeAny, {
            value: string;
        }, {
            value: string;
        }>, "many">>;
        tags: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodUnion<[import("zod").ZodObject<{
            value: import("zod").ZodString;
            kanbanId: import("zod").ZodOptional<import("zod").ZodUnion<[import("zod").ZodNumber, import("zod").ZodNull, import("zod").ZodUndefined]>>;
        }, "strip", import("zod").ZodTypeAny, {
            value: string;
            kanbanId?: number | null | undefined;
        }, {
            value: string;
            kanbanId?: number | null | undefined;
        }>, import("zod").ZodEffects<import("zod").ZodString, {
            value: string;
            kanbanId?: number | null | undefined;
        }, string>]>, "many">>;
    }>, "strip", import("zod").ZodTypeAny, {
        id: number;
        tags: {
            value: string;
            kanbanId?: number | null | undefined;
        }[];
        status: "ToDo" | "In_Progress" | "Backlog" | "Cancelled" | "Done" | "Future";
        createdAt: Date;
        topics: {
            value: string;
        }[];
        subjects: {
            value: string;
        }[];
        ToDoList: {
            id: number;
            label: string;
            tags: {
                value: string;
                kanbanId?: number | null | undefined;
            }[];
            createdAt: Date;
            lastUpdate: Date;
            topics: {
                value: string;
            }[];
            subjects: {
                value: string;
            }[];
            tasks: any[];
        };
        task: string;
        dueAt: Date;
        associatedNotes: any[];
        category: "bug" | "feature" | "documentation" | "online" | "priority" | "urgent" | "work" | "gym" | "freetime" | "study" | "research" | "paper";
        priority: number;
        bookmarked: boolean;
        toDoListId: number;
        details?: string | null | undefined;
        parentId?: number | null | undefined;
        parent?: any;
        child?: any;
    }, {
        id: number;
        status: "ToDo" | "In_Progress" | "Backlog" | "Cancelled" | "Done" | "Future";
        ToDoList: {
            id: number;
            label: string;
            tags?: (string | {
                value: string;
                kanbanId?: number | null | undefined;
            })[] | undefined;
            createdAt?: string | Date | null | undefined;
            lastUpdate?: string | Date | null | undefined;
            topics?: {
                value: string;
            }[] | undefined;
            subjects?: {
                value: string;
            }[] | undefined;
            tasks?: any[] | undefined;
        };
        task: string;
        category: "bug" | "feature" | "documentation" | "online" | "priority" | "urgent" | "work" | "gym" | "freetime" | "study" | "research" | "paper";
        priority: number;
        toDoListId: number;
        tags?: (string | {
            value: string;
            kanbanId?: number | null | undefined;
        })[] | undefined;
        createdAt?: string | Date | null | undefined;
        topics?: {
            value: string;
        }[] | undefined;
        subjects?: {
            value: string;
        }[] | undefined;
        dueAt?: string | Date | null | undefined;
        details?: string | null | undefined;
        associatedNotes?: any[] | undefined;
        parentId?: number | null | undefined;
        bookmarked?: boolean | undefined;
        parent?: any;
        child?: any;
    }>, "many">>;
    summary: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodString>>;
    firstSync: import("zod").ZodEffects<import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodUnion<[import("zod").ZodEffects<import("zod").ZodString, Date, string>, import("zod").ZodDate]>>>, Date, string | Date | null | undefined>;
    lastSync: import("zod").ZodEffects<import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodUnion<[import("zod").ZodEffects<import("zod").ZodString, Date, string>, import("zod").ZodDate]>>>, Date, string | Date | null | undefined>;
}, {
    topics: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodObject<{
        value: import("zod").ZodString;
    }, "strip", import("zod").ZodTypeAny, {
        value: string;
    }, {
        value: string;
    }>, "many">>;
    subjects: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodObject<{
        value: import("zod").ZodString;
    }, "strip", import("zod").ZodTypeAny, {
        value: string;
    }, {
        value: string;
    }>, "many">>;
    tags: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodUnion<[import("zod").ZodObject<{
        value: import("zod").ZodString;
        kanbanId: import("zod").ZodOptional<import("zod").ZodUnion<[import("zod").ZodNumber, import("zod").ZodNull, import("zod").ZodUndefined]>>;
    }, "strip", import("zod").ZodTypeAny, {
        value: string;
        kanbanId?: number | null | undefined;
    }, {
        value: string;
        kanbanId?: number | null | undefined;
    }>, import("zod").ZodEffects<import("zod").ZodString, {
        value: string;
        kanbanId?: number | null | undefined;
    }, string>]>, "many">>;
}>, "tags" | "topics" | "subjects" | "sequentialKey" | "latexTitle" | "raw" | "floatImages" | "formatted" | "citations" | "quickLinkId" | "citationsListOrder" | "outgoingQuickLinks" | "equationIds" | "isProtected" | "sequentialIndex" | "remoteUrl" | "noLog" | "saveFormatted" | "trackRemote">, "strip", import("zod").ZodTypeAny, {
    firstSync: Date;
    noteType: string;
    toDo: {
        id: number;
        tags: {
            value: string;
            kanbanId?: number | null | undefined;
        }[];
        status: "ToDo" | "In_Progress" | "Backlog" | "Cancelled" | "Done" | "Future";
        createdAt: Date;
        topics: {
            value: string;
        }[];
        subjects: {
            value: string;
        }[];
        ToDoList: {
            id: number;
            label: string;
            tags: {
                value: string;
                kanbanId?: number | null | undefined;
            }[];
            createdAt: Date;
            lastUpdate: Date;
            topics: {
                value: string;
            }[];
            subjects: {
                value: string;
            }[];
            tasks: any[];
        };
        task: string;
        dueAt: Date;
        associatedNotes: any[];
        category: "bug" | "feature" | "documentation" | "online" | "priority" | "urgent" | "work" | "gym" | "freetime" | "study" | "research" | "paper";
        priority: number;
        bookmarked: boolean;
        toDoListId: number;
        details?: string | null | undefined;
        parentId?: number | null | undefined;
        parent?: any;
        child?: any;
    }[];
    bookmarked: boolean;
    importantValues: number[];
    lastSync: Date;
    id?: number | null | undefined;
    href?: string | null | undefined;
    summary?: string | null | undefined;
    title?: string | null | undefined;
    content?: string | null | undefined;
    rootRelativePath?: string | null | undefined;
    sequentialList?: {
        MdxNote: any[];
        Ipynb: any[];
        sequentialKey: string;
    } | undefined;
}, {
    noteType: string;
    id?: number | null | undefined;
    href?: string | null | undefined;
    summary?: string | null | undefined;
    title?: string | null | undefined;
    content?: string | null | undefined;
    firstSync?: string | Date | null | undefined;
    toDo?: {
        id: number;
        status: "ToDo" | "In_Progress" | "Backlog" | "Cancelled" | "Done" | "Future";
        ToDoList: {
            id: number;
            label: string;
            tags?: (string | {
                value: string;
                kanbanId?: number | null | undefined;
            })[] | undefined;
            createdAt?: string | Date | null | undefined;
            lastUpdate?: string | Date | null | undefined;
            topics?: {
                value: string;
            }[] | undefined;
            subjects?: {
                value: string;
            }[] | undefined;
            tasks?: any[] | undefined;
        };
        task: string;
        category: "bug" | "feature" | "documentation" | "online" | "priority" | "urgent" | "work" | "gym" | "freetime" | "study" | "research" | "paper";
        priority: number;
        toDoListId: number;
        tags?: (string | {
            value: string;
            kanbanId?: number | null | undefined;
        })[] | undefined;
        createdAt?: string | Date | null | undefined;
        topics?: {
            value: string;
        }[] | undefined;
        subjects?: {
            value: string;
        }[] | undefined;
        dueAt?: string | Date | null | undefined;
        details?: string | null | undefined;
        associatedNotes?: any[] | undefined;
        parentId?: number | null | undefined;
        bookmarked?: boolean | undefined;
        parent?: any;
        child?: any;
    }[] | undefined;
    bookmarked?: boolean | undefined;
    importantValues?: number[] | undefined;
    rootRelativePath?: string | null | undefined;
    sequentialList?: {
        sequentialKey: string;
        MdxNote?: any[] | undefined;
        Ipynb?: any[] | undefined;
    } | undefined;
    lastSync?: string | Date | null | undefined;
}>;
//# sourceMappingURL=mdxNoteIntriguingValSummary.d.ts.map