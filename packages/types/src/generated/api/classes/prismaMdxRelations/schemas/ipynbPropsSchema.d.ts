import { z } from "zod";
export declare const ipynbPropsSchema: z.ZodEffects<z.ZodObject<{
    readingList: z.ZodBoolean;
    content: z.ZodString;
    remoteUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    filepath: z.ZodString;
    tags: z.ZodEffects<z.ZodDefault<z.ZodArray<z.ZodUnion<[z.ZodObject<{
        value: z.ZodString;
        kanbanId: z.ZodDefault<z.ZodUnion<[z.ZodNumber, z.ZodNull, z.ZodUndefined]>>;
    }, "strip", z.ZodTypeAny, {
        value: string;
        kanbanId: number | null;
    }, {
        value: string;
        kanbanId?: number | null | undefined;
    }>, z.ZodEffects<z.ZodString, {
        value: string;
        kanbanId: number | null;
    }, string>]>, "many">>, import("../tag").Tag[], (string | {
        value: string;
        kanbanId?: number | null | undefined;
    })[] | undefined>;
    href: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    title: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    citations: z.ZodEffects<z.ZodDefault<z.ZodArray<z.ZodObject<{
        Bib: z.ZodEffects<z.ZodObject<{
            firstSync: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodUnion<[z.ZodString, z.ZodDate]>>>, Date | null | undefined, string | Date | null | undefined>;
            lastSync: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodUnion<[z.ZodString, z.ZodDate]>>>, Date | null | undefined, string | Date | null | undefined>;
            filename: z.ZodDefault<z.ZodString>;
            id: z.ZodDefault<z.ZodNumber>;
            entries: z.ZodDefault<z.ZodArray<z.ZodAny, "many">>;
        }, "strip", z.ZodTypeAny, {
            entries: any[];
            id: number;
            filename: string;
            firstSync?: Date | null | undefined;
            lastSync?: Date | null | undefined;
        }, {
            firstSync?: string | Date | null | undefined;
            lastSync?: string | Date | null | undefined;
            filename?: string | undefined;
            id?: number | undefined;
            entries?: any[] | undefined;
        }>, import("../Bib").BibCore, {
            firstSync?: string | Date | null | undefined;
            lastSync?: string | Date | null | undefined;
            filename?: string | undefined;
            id?: number | undefined;
            entries?: any[] | undefined;
        }>;
        BibId: z.ZodDefault<z.ZodNumber>;
        readingList: z.ZodEffects<z.ZodDefault<z.ZodArray<z.ZodObject<{
            name: z.ZodString;
            description: z.ZodNullable<z.ZodString>;
            bibEntries: z.ZodArray<z.ZodAny, "many">;
            mdxNotes: z.ZodArray<z.ZodAny, "many">;
            ipynbNotes: z.ZodArray<z.ZodAny, "many">;
            createdAt: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodUnion<[z.ZodString, z.ZodDate]>>>, Date, string | Date | null | undefined>;
            lastUpdate: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodUnion<[z.ZodString, z.ZodDate]>>>, Date, string | Date | null | undefined>;
        }, "strip", z.ZodTypeAny, {
            name: string;
            bibEntries: any[];
            description: string | null;
            createdAt: Date;
            lastUpdate: Date;
            ipynbNotes: any[];
            mdxNotes: any[];
        }, {
            name: string;
            bibEntries: any[];
            description: string | null;
            ipynbNotes: any[];
            mdxNotes: any[];
            createdAt?: string | Date | null | undefined;
            lastUpdate?: string | Date | null | undefined;
        }>, "many">>, import("../readingList").ReadingList[], {
            name: string;
            bibEntries: any[];
            description: string | null;
            ipynbNotes: any[];
            mdxNotes: any[];
            createdAt?: string | Date | null | undefined;
            lastUpdate?: string | Date | null | undefined;
        }[] | undefined>;
        topics: z.ZodEffects<z.ZodDefault<z.ZodArray<z.ZodObject<{
            value: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            value: string;
        }, {
            value: string;
        }>, "many">>, import("../topic").Topic[], {
            value: string;
        }[] | undefined>;
        subjects: z.ZodEffects<z.ZodDefault<z.ZodArray<z.ZodObject<{
            value: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            value: string;
        }, {
            value: string;
        }>, "many">>, import("../subject").Subject[], {
            value: string;
        }[] | undefined>;
        tags: z.ZodEffects<z.ZodDefault<z.ZodArray<z.ZodUnion<[z.ZodObject<{
            value: z.ZodString;
            kanbanId: z.ZodDefault<z.ZodUnion<[z.ZodNumber, z.ZodNull, z.ZodUndefined]>>;
        }, "strip", z.ZodTypeAny, {
            value: string;
            kanbanId: number | null;
        }, {
            value: string;
            kanbanId?: number | null | undefined;
        }>, z.ZodEffects<z.ZodString, {
            value: string;
            kanbanId: number | null;
        }, string>]>, "many">>, import("../tag").Tag[], (string | {
            value: string;
            kanbanId?: number | null | undefined;
        })[] | undefined>;
        type: z.ZodString;
        id: z.ZodString;
        htmlCitation: z.ZodNullable<z.ZodString>;
        PdfPath: z.ZodNullable<z.ZodString>;
        address: z.ZodNullable<z.ZodString>;
        annote: z.ZodNullable<z.ZodString>;
        author: z.ZodNullable<z.ZodString>;
        booktitle: z.ZodNullable<z.ZodString>;
        chapter: z.ZodNullable<z.ZodString>;
        crossref: z.ZodNullable<z.ZodString>;
        doi: z.ZodNullable<z.ZodString>;
        edition: z.ZodNullable<z.ZodString>;
        editor: z.ZodNullable<z.ZodString>;
        email: z.ZodNullable<z.ZodString>;
        howpublished: z.ZodNullable<z.ZodString>;
        institution: z.ZodNullable<z.ZodString>;
        journal: z.ZodNullable<z.ZodString>;
        month: z.ZodNullable<z.ZodString>;
        note: z.ZodNullable<z.ZodString>;
        number: z.ZodNullable<z.ZodString>;
        organization: z.ZodNullable<z.ZodString>;
        pages: z.ZodNullable<z.ZodString>;
        publisher: z.ZodNullable<z.ZodString>;
        school: z.ZodNullable<z.ZodString>;
        series: z.ZodNullable<z.ZodString>;
        title: z.ZodNullable<z.ZodString>;
        volume: z.ZodNullable<z.ZodString>;
        year: z.ZodNullable<z.ZodString>;
        numpages: z.ZodNullable<z.ZodString>;
        url: z.ZodNullable<z.ZodString>;
        issue: z.ZodNullable<z.ZodString>;
        issn: z.ZodNullable<z.ZodString>;
        abstract: z.ZodNullable<z.ZodString>;
        urldate: z.ZodNullable<z.ZodString>;
        keywords: z.ZodNullable<z.ZodString>;
        copyright: z.ZodNullable<z.ZodString>;
        tempPageIndex: z.ZodNullable<z.ZodNumber>;
        read: z.ZodDefault<z.ZodBoolean>;
        OwnWork: z.ZodDefault<z.ZodBoolean>;
        ColleaguesWork: z.ZodDefault<z.ZodBoolean>;
        citationGroups: z.ZodEffects<z.ZodArray<z.ZodObject<{
            name: z.ZodString;
            description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            entries: z.ZodArray<z.ZodAny, "many">;
        }, "strip", z.ZodTypeAny, {
            entries: any[];
            name: string;
            description?: string | null | undefined;
        }, {
            entries: any[];
            name: string;
            description?: string | null | undefined;
        }>, "many">, import("../CitationGroup").CitationGroup[], {
            entries: any[];
            name: string;
            description?: string | null | undefined;
        }[]>;
        added: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodUnion<[z.ZodString, z.ZodDate, z.ZodString]>>>, Date, string | Date | null | undefined>;
    }, "strip", z.ZodString, z.objectOutputType<{
        Bib: z.ZodEffects<z.ZodObject<{
            firstSync: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodUnion<[z.ZodString, z.ZodDate]>>>, Date | null | undefined, string | Date | null | undefined>;
            lastSync: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodUnion<[z.ZodString, z.ZodDate]>>>, Date | null | undefined, string | Date | null | undefined>;
            filename: z.ZodDefault<z.ZodString>;
            id: z.ZodDefault<z.ZodNumber>;
            entries: z.ZodDefault<z.ZodArray<z.ZodAny, "many">>;
        }, "strip", z.ZodTypeAny, {
            entries: any[];
            id: number;
            filename: string;
            firstSync?: Date | null | undefined;
            lastSync?: Date | null | undefined;
        }, {
            firstSync?: string | Date | null | undefined;
            lastSync?: string | Date | null | undefined;
            filename?: string | undefined;
            id?: number | undefined;
            entries?: any[] | undefined;
        }>, import("../Bib").BibCore, {
            firstSync?: string | Date | null | undefined;
            lastSync?: string | Date | null | undefined;
            filename?: string | undefined;
            id?: number | undefined;
            entries?: any[] | undefined;
        }>;
        BibId: z.ZodDefault<z.ZodNumber>;
        readingList: z.ZodEffects<z.ZodDefault<z.ZodArray<z.ZodObject<{
            name: z.ZodString;
            description: z.ZodNullable<z.ZodString>;
            bibEntries: z.ZodArray<z.ZodAny, "many">;
            mdxNotes: z.ZodArray<z.ZodAny, "many">;
            ipynbNotes: z.ZodArray<z.ZodAny, "many">;
            createdAt: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodUnion<[z.ZodString, z.ZodDate]>>>, Date, string | Date | null | undefined>;
            lastUpdate: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodUnion<[z.ZodString, z.ZodDate]>>>, Date, string | Date | null | undefined>;
        }, "strip", z.ZodTypeAny, {
            name: string;
            bibEntries: any[];
            description: string | null;
            createdAt: Date;
            lastUpdate: Date;
            ipynbNotes: any[];
            mdxNotes: any[];
        }, {
            name: string;
            bibEntries: any[];
            description: string | null;
            ipynbNotes: any[];
            mdxNotes: any[];
            createdAt?: string | Date | null | undefined;
            lastUpdate?: string | Date | null | undefined;
        }>, "many">>, import("../readingList").ReadingList[], {
            name: string;
            bibEntries: any[];
            description: string | null;
            ipynbNotes: any[];
            mdxNotes: any[];
            createdAt?: string | Date | null | undefined;
            lastUpdate?: string | Date | null | undefined;
        }[] | undefined>;
        topics: z.ZodEffects<z.ZodDefault<z.ZodArray<z.ZodObject<{
            value: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            value: string;
        }, {
            value: string;
        }>, "many">>, import("../topic").Topic[], {
            value: string;
        }[] | undefined>;
        subjects: z.ZodEffects<z.ZodDefault<z.ZodArray<z.ZodObject<{
            value: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            value: string;
        }, {
            value: string;
        }>, "many">>, import("../subject").Subject[], {
            value: string;
        }[] | undefined>;
        tags: z.ZodEffects<z.ZodDefault<z.ZodArray<z.ZodUnion<[z.ZodObject<{
            value: z.ZodString;
            kanbanId: z.ZodDefault<z.ZodUnion<[z.ZodNumber, z.ZodNull, z.ZodUndefined]>>;
        }, "strip", z.ZodTypeAny, {
            value: string;
            kanbanId: number | null;
        }, {
            value: string;
            kanbanId?: number | null | undefined;
        }>, z.ZodEffects<z.ZodString, {
            value: string;
            kanbanId: number | null;
        }, string>]>, "many">>, import("../tag").Tag[], (string | {
            value: string;
            kanbanId?: number | null | undefined;
        })[] | undefined>;
        type: z.ZodString;
        id: z.ZodString;
        htmlCitation: z.ZodNullable<z.ZodString>;
        PdfPath: z.ZodNullable<z.ZodString>;
        address: z.ZodNullable<z.ZodString>;
        annote: z.ZodNullable<z.ZodString>;
        author: z.ZodNullable<z.ZodString>;
        booktitle: z.ZodNullable<z.ZodString>;
        chapter: z.ZodNullable<z.ZodString>;
        crossref: z.ZodNullable<z.ZodString>;
        doi: z.ZodNullable<z.ZodString>;
        edition: z.ZodNullable<z.ZodString>;
        editor: z.ZodNullable<z.ZodString>;
        email: z.ZodNullable<z.ZodString>;
        howpublished: z.ZodNullable<z.ZodString>;
        institution: z.ZodNullable<z.ZodString>;
        journal: z.ZodNullable<z.ZodString>;
        month: z.ZodNullable<z.ZodString>;
        note: z.ZodNullable<z.ZodString>;
        number: z.ZodNullable<z.ZodString>;
        organization: z.ZodNullable<z.ZodString>;
        pages: z.ZodNullable<z.ZodString>;
        publisher: z.ZodNullable<z.ZodString>;
        school: z.ZodNullable<z.ZodString>;
        series: z.ZodNullable<z.ZodString>;
        title: z.ZodNullable<z.ZodString>;
        volume: z.ZodNullable<z.ZodString>;
        year: z.ZodNullable<z.ZodString>;
        numpages: z.ZodNullable<z.ZodString>;
        url: z.ZodNullable<z.ZodString>;
        issue: z.ZodNullable<z.ZodString>;
        issn: z.ZodNullable<z.ZodString>;
        abstract: z.ZodNullable<z.ZodString>;
        urldate: z.ZodNullable<z.ZodString>;
        keywords: z.ZodNullable<z.ZodString>;
        copyright: z.ZodNullable<z.ZodString>;
        tempPageIndex: z.ZodNullable<z.ZodNumber>;
        read: z.ZodDefault<z.ZodBoolean>;
        OwnWork: z.ZodDefault<z.ZodBoolean>;
        ColleaguesWork: z.ZodDefault<z.ZodBoolean>;
        citationGroups: z.ZodEffects<z.ZodArray<z.ZodObject<{
            name: z.ZodString;
            description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            entries: z.ZodArray<z.ZodAny, "many">;
        }, "strip", z.ZodTypeAny, {
            entries: any[];
            name: string;
            description?: string | null | undefined;
        }, {
            entries: any[];
            name: string;
            description?: string | null | undefined;
        }>, "many">, import("../CitationGroup").CitationGroup[], {
            entries: any[];
            name: string;
            description?: string | null | undefined;
        }[]>;
        added: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodUnion<[z.ZodString, z.ZodDate, z.ZodString]>>>, Date, string | Date | null | undefined>;
    }, z.ZodString, "strip">, z.objectInputType<{
        Bib: z.ZodEffects<z.ZodObject<{
            firstSync: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodUnion<[z.ZodString, z.ZodDate]>>>, Date | null | undefined, string | Date | null | undefined>;
            lastSync: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodUnion<[z.ZodString, z.ZodDate]>>>, Date | null | undefined, string | Date | null | undefined>;
            filename: z.ZodDefault<z.ZodString>;
            id: z.ZodDefault<z.ZodNumber>;
            entries: z.ZodDefault<z.ZodArray<z.ZodAny, "many">>;
        }, "strip", z.ZodTypeAny, {
            entries: any[];
            id: number;
            filename: string;
            firstSync?: Date | null | undefined;
            lastSync?: Date | null | undefined;
        }, {
            firstSync?: string | Date | null | undefined;
            lastSync?: string | Date | null | undefined;
            filename?: string | undefined;
            id?: number | undefined;
            entries?: any[] | undefined;
        }>, import("../Bib").BibCore, {
            firstSync?: string | Date | null | undefined;
            lastSync?: string | Date | null | undefined;
            filename?: string | undefined;
            id?: number | undefined;
            entries?: any[] | undefined;
        }>;
        BibId: z.ZodDefault<z.ZodNumber>;
        readingList: z.ZodEffects<z.ZodDefault<z.ZodArray<z.ZodObject<{
            name: z.ZodString;
            description: z.ZodNullable<z.ZodString>;
            bibEntries: z.ZodArray<z.ZodAny, "many">;
            mdxNotes: z.ZodArray<z.ZodAny, "many">;
            ipynbNotes: z.ZodArray<z.ZodAny, "many">;
            createdAt: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodUnion<[z.ZodString, z.ZodDate]>>>, Date, string | Date | null | undefined>;
            lastUpdate: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodUnion<[z.ZodString, z.ZodDate]>>>, Date, string | Date | null | undefined>;
        }, "strip", z.ZodTypeAny, {
            name: string;
            bibEntries: any[];
            description: string | null;
            createdAt: Date;
            lastUpdate: Date;
            ipynbNotes: any[];
            mdxNotes: any[];
        }, {
            name: string;
            bibEntries: any[];
            description: string | null;
            ipynbNotes: any[];
            mdxNotes: any[];
            createdAt?: string | Date | null | undefined;
            lastUpdate?: string | Date | null | undefined;
        }>, "many">>, import("../readingList").ReadingList[], {
            name: string;
            bibEntries: any[];
            description: string | null;
            ipynbNotes: any[];
            mdxNotes: any[];
            createdAt?: string | Date | null | undefined;
            lastUpdate?: string | Date | null | undefined;
        }[] | undefined>;
        topics: z.ZodEffects<z.ZodDefault<z.ZodArray<z.ZodObject<{
            value: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            value: string;
        }, {
            value: string;
        }>, "many">>, import("../topic").Topic[], {
            value: string;
        }[] | undefined>;
        subjects: z.ZodEffects<z.ZodDefault<z.ZodArray<z.ZodObject<{
            value: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            value: string;
        }, {
            value: string;
        }>, "many">>, import("../subject").Subject[], {
            value: string;
        }[] | undefined>;
        tags: z.ZodEffects<z.ZodDefault<z.ZodArray<z.ZodUnion<[z.ZodObject<{
            value: z.ZodString;
            kanbanId: z.ZodDefault<z.ZodUnion<[z.ZodNumber, z.ZodNull, z.ZodUndefined]>>;
        }, "strip", z.ZodTypeAny, {
            value: string;
            kanbanId: number | null;
        }, {
            value: string;
            kanbanId?: number | null | undefined;
        }>, z.ZodEffects<z.ZodString, {
            value: string;
            kanbanId: number | null;
        }, string>]>, "many">>, import("../tag").Tag[], (string | {
            value: string;
            kanbanId?: number | null | undefined;
        })[] | undefined>;
        type: z.ZodString;
        id: z.ZodString;
        htmlCitation: z.ZodNullable<z.ZodString>;
        PdfPath: z.ZodNullable<z.ZodString>;
        address: z.ZodNullable<z.ZodString>;
        annote: z.ZodNullable<z.ZodString>;
        author: z.ZodNullable<z.ZodString>;
        booktitle: z.ZodNullable<z.ZodString>;
        chapter: z.ZodNullable<z.ZodString>;
        crossref: z.ZodNullable<z.ZodString>;
        doi: z.ZodNullable<z.ZodString>;
        edition: z.ZodNullable<z.ZodString>;
        editor: z.ZodNullable<z.ZodString>;
        email: z.ZodNullable<z.ZodString>;
        howpublished: z.ZodNullable<z.ZodString>;
        institution: z.ZodNullable<z.ZodString>;
        journal: z.ZodNullable<z.ZodString>;
        month: z.ZodNullable<z.ZodString>;
        note: z.ZodNullable<z.ZodString>;
        number: z.ZodNullable<z.ZodString>;
        organization: z.ZodNullable<z.ZodString>;
        pages: z.ZodNullable<z.ZodString>;
        publisher: z.ZodNullable<z.ZodString>;
        school: z.ZodNullable<z.ZodString>;
        series: z.ZodNullable<z.ZodString>;
        title: z.ZodNullable<z.ZodString>;
        volume: z.ZodNullable<z.ZodString>;
        year: z.ZodNullable<z.ZodString>;
        numpages: z.ZodNullable<z.ZodString>;
        url: z.ZodNullable<z.ZodString>;
        issue: z.ZodNullable<z.ZodString>;
        issn: z.ZodNullable<z.ZodString>;
        abstract: z.ZodNullable<z.ZodString>;
        urldate: z.ZodNullable<z.ZodString>;
        keywords: z.ZodNullable<z.ZodString>;
        copyright: z.ZodNullable<z.ZodString>;
        tempPageIndex: z.ZodNullable<z.ZodNumber>;
        read: z.ZodDefault<z.ZodBoolean>;
        OwnWork: z.ZodDefault<z.ZodBoolean>;
        ColleaguesWork: z.ZodDefault<z.ZodBoolean>;
        citationGroups: z.ZodEffects<z.ZodArray<z.ZodObject<{
            name: z.ZodString;
            description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            entries: z.ZodArray<z.ZodAny, "many">;
        }, "strip", z.ZodTypeAny, {
            entries: any[];
            name: string;
            description?: string | null | undefined;
        }, {
            entries: any[];
            name: string;
            description?: string | null | undefined;
        }>, "many">, import("../CitationGroup").CitationGroup[], {
            entries: any[];
            name: string;
            description?: string | null | undefined;
        }[]>;
        added: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodUnion<[z.ZodString, z.ZodDate, z.ZodString]>>>, Date, string | Date | null | undefined>;
    }, z.ZodString, "strip">>, "many">>, import("../BibEntry").BibEntry[], z.objectInputType<{
        Bib: z.ZodEffects<z.ZodObject<{
            firstSync: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodUnion<[z.ZodString, z.ZodDate]>>>, Date | null | undefined, string | Date | null | undefined>;
            lastSync: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodUnion<[z.ZodString, z.ZodDate]>>>, Date | null | undefined, string | Date | null | undefined>;
            filename: z.ZodDefault<z.ZodString>;
            id: z.ZodDefault<z.ZodNumber>;
            entries: z.ZodDefault<z.ZodArray<z.ZodAny, "many">>;
        }, "strip", z.ZodTypeAny, {
            entries: any[];
            id: number;
            filename: string;
            firstSync?: Date | null | undefined;
            lastSync?: Date | null | undefined;
        }, {
            firstSync?: string | Date | null | undefined;
            lastSync?: string | Date | null | undefined;
            filename?: string | undefined;
            id?: number | undefined;
            entries?: any[] | undefined;
        }>, import("../Bib").BibCore, {
            firstSync?: string | Date | null | undefined;
            lastSync?: string | Date | null | undefined;
            filename?: string | undefined;
            id?: number | undefined;
            entries?: any[] | undefined;
        }>;
        BibId: z.ZodDefault<z.ZodNumber>;
        readingList: z.ZodEffects<z.ZodDefault<z.ZodArray<z.ZodObject<{
            name: z.ZodString;
            description: z.ZodNullable<z.ZodString>;
            bibEntries: z.ZodArray<z.ZodAny, "many">;
            mdxNotes: z.ZodArray<z.ZodAny, "many">;
            ipynbNotes: z.ZodArray<z.ZodAny, "many">;
            createdAt: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodUnion<[z.ZodString, z.ZodDate]>>>, Date, string | Date | null | undefined>;
            lastUpdate: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodUnion<[z.ZodString, z.ZodDate]>>>, Date, string | Date | null | undefined>;
        }, "strip", z.ZodTypeAny, {
            name: string;
            bibEntries: any[];
            description: string | null;
            createdAt: Date;
            lastUpdate: Date;
            ipynbNotes: any[];
            mdxNotes: any[];
        }, {
            name: string;
            bibEntries: any[];
            description: string | null;
            ipynbNotes: any[];
            mdxNotes: any[];
            createdAt?: string | Date | null | undefined;
            lastUpdate?: string | Date | null | undefined;
        }>, "many">>, import("../readingList").ReadingList[], {
            name: string;
            bibEntries: any[];
            description: string | null;
            ipynbNotes: any[];
            mdxNotes: any[];
            createdAt?: string | Date | null | undefined;
            lastUpdate?: string | Date | null | undefined;
        }[] | undefined>;
        topics: z.ZodEffects<z.ZodDefault<z.ZodArray<z.ZodObject<{
            value: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            value: string;
        }, {
            value: string;
        }>, "many">>, import("../topic").Topic[], {
            value: string;
        }[] | undefined>;
        subjects: z.ZodEffects<z.ZodDefault<z.ZodArray<z.ZodObject<{
            value: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            value: string;
        }, {
            value: string;
        }>, "many">>, import("../subject").Subject[], {
            value: string;
        }[] | undefined>;
        tags: z.ZodEffects<z.ZodDefault<z.ZodArray<z.ZodUnion<[z.ZodObject<{
            value: z.ZodString;
            kanbanId: z.ZodDefault<z.ZodUnion<[z.ZodNumber, z.ZodNull, z.ZodUndefined]>>;
        }, "strip", z.ZodTypeAny, {
            value: string;
            kanbanId: number | null;
        }, {
            value: string;
            kanbanId?: number | null | undefined;
        }>, z.ZodEffects<z.ZodString, {
            value: string;
            kanbanId: number | null;
        }, string>]>, "many">>, import("../tag").Tag[], (string | {
            value: string;
            kanbanId?: number | null | undefined;
        })[] | undefined>;
        type: z.ZodString;
        id: z.ZodString;
        htmlCitation: z.ZodNullable<z.ZodString>;
        PdfPath: z.ZodNullable<z.ZodString>;
        address: z.ZodNullable<z.ZodString>;
        annote: z.ZodNullable<z.ZodString>;
        author: z.ZodNullable<z.ZodString>;
        booktitle: z.ZodNullable<z.ZodString>;
        chapter: z.ZodNullable<z.ZodString>;
        crossref: z.ZodNullable<z.ZodString>;
        doi: z.ZodNullable<z.ZodString>;
        edition: z.ZodNullable<z.ZodString>;
        editor: z.ZodNullable<z.ZodString>;
        email: z.ZodNullable<z.ZodString>;
        howpublished: z.ZodNullable<z.ZodString>;
        institution: z.ZodNullable<z.ZodString>;
        journal: z.ZodNullable<z.ZodString>;
        month: z.ZodNullable<z.ZodString>;
        note: z.ZodNullable<z.ZodString>;
        number: z.ZodNullable<z.ZodString>;
        organization: z.ZodNullable<z.ZodString>;
        pages: z.ZodNullable<z.ZodString>;
        publisher: z.ZodNullable<z.ZodString>;
        school: z.ZodNullable<z.ZodString>;
        series: z.ZodNullable<z.ZodString>;
        title: z.ZodNullable<z.ZodString>;
        volume: z.ZodNullable<z.ZodString>;
        year: z.ZodNullable<z.ZodString>;
        numpages: z.ZodNullable<z.ZodString>;
        url: z.ZodNullable<z.ZodString>;
        issue: z.ZodNullable<z.ZodString>;
        issn: z.ZodNullable<z.ZodString>;
        abstract: z.ZodNullable<z.ZodString>;
        urldate: z.ZodNullable<z.ZodString>;
        keywords: z.ZodNullable<z.ZodString>;
        copyright: z.ZodNullable<z.ZodString>;
        tempPageIndex: z.ZodNullable<z.ZodNumber>;
        read: z.ZodDefault<z.ZodBoolean>;
        OwnWork: z.ZodDefault<z.ZodBoolean>;
        ColleaguesWork: z.ZodDefault<z.ZodBoolean>;
        citationGroups: z.ZodEffects<z.ZodArray<z.ZodObject<{
            name: z.ZodString;
            description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            entries: z.ZodArray<z.ZodAny, "many">;
        }, "strip", z.ZodTypeAny, {
            entries: any[];
            name: string;
            description?: string | null | undefined;
        }, {
            entries: any[];
            name: string;
            description?: string | null | undefined;
        }>, "many">, import("../CitationGroup").CitationGroup[], {
            entries: any[];
            name: string;
            description?: string | null | undefined;
        }[]>;
        added: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodUnion<[z.ZodString, z.ZodDate, z.ZodString]>>>, Date, string | Date | null | undefined>;
    }, z.ZodString, "strip">[] | undefined>;
    bookmarked: z.ZodDefault<z.ZodBoolean>;
    isProtected: z.ZodDefault<z.ZodOptional<z.ZodNullable<z.ZodBoolean>>>;
    latexTitle: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    rootRelativePath: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodString>>, string | null | undefined, string | null | undefined>;
    citationsListOrder: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
    sequentialIndex: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    outgoingQuickLinks: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
    firstSync: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodUnion<[z.ZodEffects<z.ZodString, Date, string>, z.ZodDate]>>>, Date | null | undefined, string | Date | null | undefined>;
    lastSync: z.ZodOptional<z.ZodNullable<z.ZodUnion<[z.ZodEffects<z.ZodString, Date, string>, z.ZodDate]>>>;
    topics: z.ZodEffects<z.ZodDefault<z.ZodArray<z.ZodObject<{
        value: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        value: string;
    }, {
        value: string;
    }>, "many">>, import("../topic").Topic[], {
        value: string;
    }[] | undefined>;
    sequentialList: z.ZodOptional<z.ZodObject<{
        sequentialKey: z.ZodString;
        MdxNote: z.ZodDefault<z.ZodArray<z.ZodAny, "many">>;
        Ipynb: z.ZodDefault<z.ZodArray<z.ZodAny, "many">>;
    }, "strip", z.ZodTypeAny, {
        MdxNote: any[];
        Ipynb: any[];
        sequentialKey: string;
    }, {
        sequentialKey: string;
        MdxNote?: any[] | undefined;
        Ipynb?: any[] | undefined;
    }>>;
    sequentialKey: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    subjects: z.ZodEffects<z.ZodDefault<z.ZodArray<z.ZodObject<{
        value: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        value: string;
    }, {
        value: string;
    }>, "many">>, import("../subject").Subject[], {
        value: string;
    }[] | undefined>;
    raw: z.ZodString;
}, "strip", z.ZodTypeAny, {
    readingList: boolean;
    tags: import("../tag").Tag[];
    citations: import("../BibEntry").BibEntry[];
    bookmarked: boolean;
    isProtected: boolean | null;
    content: string;
    citationsListOrder: string[];
    outgoingQuickLinks: string[];
    topics: import("../topic").Topic[];
    subjects: import("../subject").Subject[];
    raw: string;
    filepath: string;
    remoteUrl?: string | null | undefined;
    href?: string | null | undefined;
    title?: string | null | undefined;
    latexTitle?: string | null | undefined;
    rootRelativePath?: string | null | undefined;
    sequentialIndex?: number | null | undefined;
    firstSync?: Date | null | undefined;
    lastSync?: Date | null | undefined;
    sequentialList?: {
        MdxNote: any[];
        Ipynb: any[];
        sequentialKey: string;
    } | undefined;
    sequentialKey?: string | null | undefined;
}, {
    readingList: boolean;
    content: string;
    raw: string;
    filepath: string;
    remoteUrl?: string | null | undefined;
    tags?: (string | {
        value: string;
        kanbanId?: number | null | undefined;
    })[] | undefined;
    href?: string | null | undefined;
    title?: string | null | undefined;
    citations?: z.objectInputType<{
        Bib: z.ZodEffects<z.ZodObject<{
            firstSync: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodUnion<[z.ZodString, z.ZodDate]>>>, Date | null | undefined, string | Date | null | undefined>;
            lastSync: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodUnion<[z.ZodString, z.ZodDate]>>>, Date | null | undefined, string | Date | null | undefined>;
            filename: z.ZodDefault<z.ZodString>;
            id: z.ZodDefault<z.ZodNumber>;
            entries: z.ZodDefault<z.ZodArray<z.ZodAny, "many">>;
        }, "strip", z.ZodTypeAny, {
            entries: any[];
            id: number;
            filename: string;
            firstSync?: Date | null | undefined;
            lastSync?: Date | null | undefined;
        }, {
            firstSync?: string | Date | null | undefined;
            lastSync?: string | Date | null | undefined;
            filename?: string | undefined;
            id?: number | undefined;
            entries?: any[] | undefined;
        }>, import("../Bib").BibCore, {
            firstSync?: string | Date | null | undefined;
            lastSync?: string | Date | null | undefined;
            filename?: string | undefined;
            id?: number | undefined;
            entries?: any[] | undefined;
        }>;
        BibId: z.ZodDefault<z.ZodNumber>;
        readingList: z.ZodEffects<z.ZodDefault<z.ZodArray<z.ZodObject<{
            name: z.ZodString;
            description: z.ZodNullable<z.ZodString>;
            bibEntries: z.ZodArray<z.ZodAny, "many">;
            mdxNotes: z.ZodArray<z.ZodAny, "many">;
            ipynbNotes: z.ZodArray<z.ZodAny, "many">;
            createdAt: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodUnion<[z.ZodString, z.ZodDate]>>>, Date, string | Date | null | undefined>;
            lastUpdate: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodUnion<[z.ZodString, z.ZodDate]>>>, Date, string | Date | null | undefined>;
        }, "strip", z.ZodTypeAny, {
            name: string;
            bibEntries: any[];
            description: string | null;
            createdAt: Date;
            lastUpdate: Date;
            ipynbNotes: any[];
            mdxNotes: any[];
        }, {
            name: string;
            bibEntries: any[];
            description: string | null;
            ipynbNotes: any[];
            mdxNotes: any[];
            createdAt?: string | Date | null | undefined;
            lastUpdate?: string | Date | null | undefined;
        }>, "many">>, import("../readingList").ReadingList[], {
            name: string;
            bibEntries: any[];
            description: string | null;
            ipynbNotes: any[];
            mdxNotes: any[];
            createdAt?: string | Date | null | undefined;
            lastUpdate?: string | Date | null | undefined;
        }[] | undefined>;
        topics: z.ZodEffects<z.ZodDefault<z.ZodArray<z.ZodObject<{
            value: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            value: string;
        }, {
            value: string;
        }>, "many">>, import("../topic").Topic[], {
            value: string;
        }[] | undefined>;
        subjects: z.ZodEffects<z.ZodDefault<z.ZodArray<z.ZodObject<{
            value: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            value: string;
        }, {
            value: string;
        }>, "many">>, import("../subject").Subject[], {
            value: string;
        }[] | undefined>;
        tags: z.ZodEffects<z.ZodDefault<z.ZodArray<z.ZodUnion<[z.ZodObject<{
            value: z.ZodString;
            kanbanId: z.ZodDefault<z.ZodUnion<[z.ZodNumber, z.ZodNull, z.ZodUndefined]>>;
        }, "strip", z.ZodTypeAny, {
            value: string;
            kanbanId: number | null;
        }, {
            value: string;
            kanbanId?: number | null | undefined;
        }>, z.ZodEffects<z.ZodString, {
            value: string;
            kanbanId: number | null;
        }, string>]>, "many">>, import("../tag").Tag[], (string | {
            value: string;
            kanbanId?: number | null | undefined;
        })[] | undefined>;
        type: z.ZodString;
        id: z.ZodString;
        htmlCitation: z.ZodNullable<z.ZodString>;
        PdfPath: z.ZodNullable<z.ZodString>;
        address: z.ZodNullable<z.ZodString>;
        annote: z.ZodNullable<z.ZodString>;
        author: z.ZodNullable<z.ZodString>;
        booktitle: z.ZodNullable<z.ZodString>;
        chapter: z.ZodNullable<z.ZodString>;
        crossref: z.ZodNullable<z.ZodString>;
        doi: z.ZodNullable<z.ZodString>;
        edition: z.ZodNullable<z.ZodString>;
        editor: z.ZodNullable<z.ZodString>;
        email: z.ZodNullable<z.ZodString>;
        howpublished: z.ZodNullable<z.ZodString>;
        institution: z.ZodNullable<z.ZodString>;
        journal: z.ZodNullable<z.ZodString>;
        month: z.ZodNullable<z.ZodString>;
        note: z.ZodNullable<z.ZodString>;
        number: z.ZodNullable<z.ZodString>;
        organization: z.ZodNullable<z.ZodString>;
        pages: z.ZodNullable<z.ZodString>;
        publisher: z.ZodNullable<z.ZodString>;
        school: z.ZodNullable<z.ZodString>;
        series: z.ZodNullable<z.ZodString>;
        title: z.ZodNullable<z.ZodString>;
        volume: z.ZodNullable<z.ZodString>;
        year: z.ZodNullable<z.ZodString>;
        numpages: z.ZodNullable<z.ZodString>;
        url: z.ZodNullable<z.ZodString>;
        issue: z.ZodNullable<z.ZodString>;
        issn: z.ZodNullable<z.ZodString>;
        abstract: z.ZodNullable<z.ZodString>;
        urldate: z.ZodNullable<z.ZodString>;
        keywords: z.ZodNullable<z.ZodString>;
        copyright: z.ZodNullable<z.ZodString>;
        tempPageIndex: z.ZodNullable<z.ZodNumber>;
        read: z.ZodDefault<z.ZodBoolean>;
        OwnWork: z.ZodDefault<z.ZodBoolean>;
        ColleaguesWork: z.ZodDefault<z.ZodBoolean>;
        citationGroups: z.ZodEffects<z.ZodArray<z.ZodObject<{
            name: z.ZodString;
            description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            entries: z.ZodArray<z.ZodAny, "many">;
        }, "strip", z.ZodTypeAny, {
            entries: any[];
            name: string;
            description?: string | null | undefined;
        }, {
            entries: any[];
            name: string;
            description?: string | null | undefined;
        }>, "many">, import("../CitationGroup").CitationGroup[], {
            entries: any[];
            name: string;
            description?: string | null | undefined;
        }[]>;
        added: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodUnion<[z.ZodString, z.ZodDate, z.ZodString]>>>, Date, string | Date | null | undefined>;
    }, z.ZodString, "strip">[] | undefined;
    bookmarked?: boolean | undefined;
    isProtected?: boolean | null | undefined;
    latexTitle?: string | null | undefined;
    rootRelativePath?: string | null | undefined;
    citationsListOrder?: string[] | undefined;
    sequentialIndex?: number | null | undefined;
    outgoingQuickLinks?: string[] | undefined;
    firstSync?: string | Date | null | undefined;
    lastSync?: string | Date | null | undefined;
    topics?: {
        value: string;
    }[] | undefined;
    sequentialList?: {
        sequentialKey: string;
        MdxNote?: any[] | undefined;
        Ipynb?: any[] | undefined;
    } | undefined;
    sequentialKey?: string | null | undefined;
    subjects?: {
        value: string;
    }[] | undefined;
}>, {
    raw: string;
    href: string;
    readingList: boolean;
    tags: import("../tag").Tag[];
    citations: import("../BibEntry").BibEntry[];
    bookmarked: boolean;
    isProtected: boolean | null;
    content: string;
    citationsListOrder: string[];
    outgoingQuickLinks: string[];
    topics: import("../topic").Topic[];
    subjects: import("../subject").Subject[];
    filepath: string;
    remoteUrl?: string | null | undefined;
    title?: string | null | undefined;
    latexTitle?: string | null | undefined;
    rootRelativePath?: string | null | undefined;
    sequentialIndex?: number | null | undefined;
    firstSync?: Date | null | undefined;
    lastSync?: Date | null | undefined;
    sequentialList?: {
        MdxNote: any[];
        Ipynb: any[];
        sequentialKey: string;
    } | undefined;
    sequentialKey?: string | null | undefined;
}, {
    readingList: boolean;
    content: string;
    raw: string;
    filepath: string;
    remoteUrl?: string | null | undefined;
    tags?: (string | {
        value: string;
        kanbanId?: number | null | undefined;
    })[] | undefined;
    href?: string | null | undefined;
    title?: string | null | undefined;
    citations?: z.objectInputType<{
        Bib: z.ZodEffects<z.ZodObject<{
            firstSync: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodUnion<[z.ZodString, z.ZodDate]>>>, Date | null | undefined, string | Date | null | undefined>;
            lastSync: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodUnion<[z.ZodString, z.ZodDate]>>>, Date | null | undefined, string | Date | null | undefined>;
            filename: z.ZodDefault<z.ZodString>;
            id: z.ZodDefault<z.ZodNumber>;
            entries: z.ZodDefault<z.ZodArray<z.ZodAny, "many">>;
        }, "strip", z.ZodTypeAny, {
            entries: any[];
            id: number;
            filename: string;
            firstSync?: Date | null | undefined;
            lastSync?: Date | null | undefined;
        }, {
            firstSync?: string | Date | null | undefined;
            lastSync?: string | Date | null | undefined;
            filename?: string | undefined;
            id?: number | undefined;
            entries?: any[] | undefined;
        }>, import("../Bib").BibCore, {
            firstSync?: string | Date | null | undefined;
            lastSync?: string | Date | null | undefined;
            filename?: string | undefined;
            id?: number | undefined;
            entries?: any[] | undefined;
        }>;
        BibId: z.ZodDefault<z.ZodNumber>;
        readingList: z.ZodEffects<z.ZodDefault<z.ZodArray<z.ZodObject<{
            name: z.ZodString;
            description: z.ZodNullable<z.ZodString>;
            bibEntries: z.ZodArray<z.ZodAny, "many">;
            mdxNotes: z.ZodArray<z.ZodAny, "many">;
            ipynbNotes: z.ZodArray<z.ZodAny, "many">;
            createdAt: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodUnion<[z.ZodString, z.ZodDate]>>>, Date, string | Date | null | undefined>;
            lastUpdate: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodUnion<[z.ZodString, z.ZodDate]>>>, Date, string | Date | null | undefined>;
        }, "strip", z.ZodTypeAny, {
            name: string;
            bibEntries: any[];
            description: string | null;
            createdAt: Date;
            lastUpdate: Date;
            ipynbNotes: any[];
            mdxNotes: any[];
        }, {
            name: string;
            bibEntries: any[];
            description: string | null;
            ipynbNotes: any[];
            mdxNotes: any[];
            createdAt?: string | Date | null | undefined;
            lastUpdate?: string | Date | null | undefined;
        }>, "many">>, import("../readingList").ReadingList[], {
            name: string;
            bibEntries: any[];
            description: string | null;
            ipynbNotes: any[];
            mdxNotes: any[];
            createdAt?: string | Date | null | undefined;
            lastUpdate?: string | Date | null | undefined;
        }[] | undefined>;
        topics: z.ZodEffects<z.ZodDefault<z.ZodArray<z.ZodObject<{
            value: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            value: string;
        }, {
            value: string;
        }>, "many">>, import("../topic").Topic[], {
            value: string;
        }[] | undefined>;
        subjects: z.ZodEffects<z.ZodDefault<z.ZodArray<z.ZodObject<{
            value: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            value: string;
        }, {
            value: string;
        }>, "many">>, import("../subject").Subject[], {
            value: string;
        }[] | undefined>;
        tags: z.ZodEffects<z.ZodDefault<z.ZodArray<z.ZodUnion<[z.ZodObject<{
            value: z.ZodString;
            kanbanId: z.ZodDefault<z.ZodUnion<[z.ZodNumber, z.ZodNull, z.ZodUndefined]>>;
        }, "strip", z.ZodTypeAny, {
            value: string;
            kanbanId: number | null;
        }, {
            value: string;
            kanbanId?: number | null | undefined;
        }>, z.ZodEffects<z.ZodString, {
            value: string;
            kanbanId: number | null;
        }, string>]>, "many">>, import("../tag").Tag[], (string | {
            value: string;
            kanbanId?: number | null | undefined;
        })[] | undefined>;
        type: z.ZodString;
        id: z.ZodString;
        htmlCitation: z.ZodNullable<z.ZodString>;
        PdfPath: z.ZodNullable<z.ZodString>;
        address: z.ZodNullable<z.ZodString>;
        annote: z.ZodNullable<z.ZodString>;
        author: z.ZodNullable<z.ZodString>;
        booktitle: z.ZodNullable<z.ZodString>;
        chapter: z.ZodNullable<z.ZodString>;
        crossref: z.ZodNullable<z.ZodString>;
        doi: z.ZodNullable<z.ZodString>;
        edition: z.ZodNullable<z.ZodString>;
        editor: z.ZodNullable<z.ZodString>;
        email: z.ZodNullable<z.ZodString>;
        howpublished: z.ZodNullable<z.ZodString>;
        institution: z.ZodNullable<z.ZodString>;
        journal: z.ZodNullable<z.ZodString>;
        month: z.ZodNullable<z.ZodString>;
        note: z.ZodNullable<z.ZodString>;
        number: z.ZodNullable<z.ZodString>;
        organization: z.ZodNullable<z.ZodString>;
        pages: z.ZodNullable<z.ZodString>;
        publisher: z.ZodNullable<z.ZodString>;
        school: z.ZodNullable<z.ZodString>;
        series: z.ZodNullable<z.ZodString>;
        title: z.ZodNullable<z.ZodString>;
        volume: z.ZodNullable<z.ZodString>;
        year: z.ZodNullable<z.ZodString>;
        numpages: z.ZodNullable<z.ZodString>;
        url: z.ZodNullable<z.ZodString>;
        issue: z.ZodNullable<z.ZodString>;
        issn: z.ZodNullable<z.ZodString>;
        abstract: z.ZodNullable<z.ZodString>;
        urldate: z.ZodNullable<z.ZodString>;
        keywords: z.ZodNullable<z.ZodString>;
        copyright: z.ZodNullable<z.ZodString>;
        tempPageIndex: z.ZodNullable<z.ZodNumber>;
        read: z.ZodDefault<z.ZodBoolean>;
        OwnWork: z.ZodDefault<z.ZodBoolean>;
        ColleaguesWork: z.ZodDefault<z.ZodBoolean>;
        citationGroups: z.ZodEffects<z.ZodArray<z.ZodObject<{
            name: z.ZodString;
            description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            entries: z.ZodArray<z.ZodAny, "many">;
        }, "strip", z.ZodTypeAny, {
            entries: any[];
            name: string;
            description?: string | null | undefined;
        }, {
            entries: any[];
            name: string;
            description?: string | null | undefined;
        }>, "many">, import("../CitationGroup").CitationGroup[], {
            entries: any[];
            name: string;
            description?: string | null | undefined;
        }[]>;
        added: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodUnion<[z.ZodString, z.ZodDate, z.ZodString]>>>, Date, string | Date | null | undefined>;
    }, z.ZodString, "strip">[] | undefined;
    bookmarked?: boolean | undefined;
    isProtected?: boolean | null | undefined;
    latexTitle?: string | null | undefined;
    rootRelativePath?: string | null | undefined;
    citationsListOrder?: string[] | undefined;
    sequentialIndex?: number | null | undefined;
    outgoingQuickLinks?: string[] | undefined;
    firstSync?: string | Date | null | undefined;
    lastSync?: string | Date | null | undefined;
    topics?: {
        value: string;
    }[] | undefined;
    sequentialList?: {
        sequentialKey: string;
        MdxNote?: any[] | undefined;
        Ipynb?: any[] | undefined;
    } | undefined;
    sequentialKey?: string | null | undefined;
    subjects?: {
        value: string;
    }[] | undefined;
}>;
export declare const ipynbRemotePropsSchema: z.ZodObject<{
    readingList: z.ZodBoolean;
    tags: z.ZodEffects<z.ZodDefault<z.ZodArray<z.ZodUnion<[z.ZodObject<{
        value: z.ZodString;
        kanbanId: z.ZodDefault<z.ZodUnion<[z.ZodNumber, z.ZodNull, z.ZodUndefined]>>;
    }, "strip", z.ZodTypeAny, {
        value: string;
        kanbanId: number | null;
    }, {
        value: string;
        kanbanId?: number | null | undefined;
    }>, z.ZodEffects<z.ZodString, {
        value: string;
        kanbanId: number | null;
    }, string>]>, "many">>, import("../tag").Tag[], (string | {
        value: string;
        kanbanId?: number | null | undefined;
    })[] | undefined>;
    href: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    title: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    citations: z.ZodEffects<z.ZodDefault<z.ZodArray<z.ZodObject<{
        Bib: z.ZodEffects<z.ZodObject<{
            firstSync: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodUnion<[z.ZodString, z.ZodDate]>>>, Date | null | undefined, string | Date | null | undefined>;
            lastSync: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodUnion<[z.ZodString, z.ZodDate]>>>, Date | null | undefined, string | Date | null | undefined>;
            filename: z.ZodDefault<z.ZodString>;
            id: z.ZodDefault<z.ZodNumber>;
            entries: z.ZodDefault<z.ZodArray<z.ZodAny, "many">>;
        }, "strip", z.ZodTypeAny, {
            entries: any[];
            id: number;
            filename: string;
            firstSync?: Date | null | undefined;
            lastSync?: Date | null | undefined;
        }, {
            firstSync?: string | Date | null | undefined;
            lastSync?: string | Date | null | undefined;
            filename?: string | undefined;
            id?: number | undefined;
            entries?: any[] | undefined;
        }>, import("../Bib").BibCore, {
            firstSync?: string | Date | null | undefined;
            lastSync?: string | Date | null | undefined;
            filename?: string | undefined;
            id?: number | undefined;
            entries?: any[] | undefined;
        }>;
        BibId: z.ZodDefault<z.ZodNumber>;
        readingList: z.ZodEffects<z.ZodDefault<z.ZodArray<z.ZodObject<{
            name: z.ZodString;
            description: z.ZodNullable<z.ZodString>;
            bibEntries: z.ZodArray<z.ZodAny, "many">;
            mdxNotes: z.ZodArray<z.ZodAny, "many">;
            ipynbNotes: z.ZodArray<z.ZodAny, "many">;
            createdAt: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodUnion<[z.ZodString, z.ZodDate]>>>, Date, string | Date | null | undefined>;
            lastUpdate: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodUnion<[z.ZodString, z.ZodDate]>>>, Date, string | Date | null | undefined>;
        }, "strip", z.ZodTypeAny, {
            name: string;
            bibEntries: any[];
            description: string | null;
            createdAt: Date;
            lastUpdate: Date;
            ipynbNotes: any[];
            mdxNotes: any[];
        }, {
            name: string;
            bibEntries: any[];
            description: string | null;
            ipynbNotes: any[];
            mdxNotes: any[];
            createdAt?: string | Date | null | undefined;
            lastUpdate?: string | Date | null | undefined;
        }>, "many">>, import("../readingList").ReadingList[], {
            name: string;
            bibEntries: any[];
            description: string | null;
            ipynbNotes: any[];
            mdxNotes: any[];
            createdAt?: string | Date | null | undefined;
            lastUpdate?: string | Date | null | undefined;
        }[] | undefined>;
        topics: z.ZodEffects<z.ZodDefault<z.ZodArray<z.ZodObject<{
            value: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            value: string;
        }, {
            value: string;
        }>, "many">>, import("../topic").Topic[], {
            value: string;
        }[] | undefined>;
        subjects: z.ZodEffects<z.ZodDefault<z.ZodArray<z.ZodObject<{
            value: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            value: string;
        }, {
            value: string;
        }>, "many">>, import("../subject").Subject[], {
            value: string;
        }[] | undefined>;
        tags: z.ZodEffects<z.ZodDefault<z.ZodArray<z.ZodUnion<[z.ZodObject<{
            value: z.ZodString;
            kanbanId: z.ZodDefault<z.ZodUnion<[z.ZodNumber, z.ZodNull, z.ZodUndefined]>>;
        }, "strip", z.ZodTypeAny, {
            value: string;
            kanbanId: number | null;
        }, {
            value: string;
            kanbanId?: number | null | undefined;
        }>, z.ZodEffects<z.ZodString, {
            value: string;
            kanbanId: number | null;
        }, string>]>, "many">>, import("../tag").Tag[], (string | {
            value: string;
            kanbanId?: number | null | undefined;
        })[] | undefined>;
        type: z.ZodString;
        id: z.ZodString;
        htmlCitation: z.ZodNullable<z.ZodString>;
        PdfPath: z.ZodNullable<z.ZodString>;
        address: z.ZodNullable<z.ZodString>;
        annote: z.ZodNullable<z.ZodString>;
        author: z.ZodNullable<z.ZodString>;
        booktitle: z.ZodNullable<z.ZodString>;
        chapter: z.ZodNullable<z.ZodString>;
        crossref: z.ZodNullable<z.ZodString>;
        doi: z.ZodNullable<z.ZodString>;
        edition: z.ZodNullable<z.ZodString>;
        editor: z.ZodNullable<z.ZodString>;
        email: z.ZodNullable<z.ZodString>;
        howpublished: z.ZodNullable<z.ZodString>;
        institution: z.ZodNullable<z.ZodString>;
        journal: z.ZodNullable<z.ZodString>;
        month: z.ZodNullable<z.ZodString>;
        note: z.ZodNullable<z.ZodString>;
        number: z.ZodNullable<z.ZodString>;
        organization: z.ZodNullable<z.ZodString>;
        pages: z.ZodNullable<z.ZodString>;
        publisher: z.ZodNullable<z.ZodString>;
        school: z.ZodNullable<z.ZodString>;
        series: z.ZodNullable<z.ZodString>;
        title: z.ZodNullable<z.ZodString>;
        volume: z.ZodNullable<z.ZodString>;
        year: z.ZodNullable<z.ZodString>;
        numpages: z.ZodNullable<z.ZodString>;
        url: z.ZodNullable<z.ZodString>;
        issue: z.ZodNullable<z.ZodString>;
        issn: z.ZodNullable<z.ZodString>;
        abstract: z.ZodNullable<z.ZodString>;
        urldate: z.ZodNullable<z.ZodString>;
        keywords: z.ZodNullable<z.ZodString>;
        copyright: z.ZodNullable<z.ZodString>;
        tempPageIndex: z.ZodNullable<z.ZodNumber>;
        read: z.ZodDefault<z.ZodBoolean>;
        OwnWork: z.ZodDefault<z.ZodBoolean>;
        ColleaguesWork: z.ZodDefault<z.ZodBoolean>;
        citationGroups: z.ZodEffects<z.ZodArray<z.ZodObject<{
            name: z.ZodString;
            description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            entries: z.ZodArray<z.ZodAny, "many">;
        }, "strip", z.ZodTypeAny, {
            entries: any[];
            name: string;
            description?: string | null | undefined;
        }, {
            entries: any[];
            name: string;
            description?: string | null | undefined;
        }>, "many">, import("../CitationGroup").CitationGroup[], {
            entries: any[];
            name: string;
            description?: string | null | undefined;
        }[]>;
        added: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodUnion<[z.ZodString, z.ZodDate, z.ZodString]>>>, Date, string | Date | null | undefined>;
    }, "strip", z.ZodString, z.objectOutputType<{
        Bib: z.ZodEffects<z.ZodObject<{
            firstSync: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodUnion<[z.ZodString, z.ZodDate]>>>, Date | null | undefined, string | Date | null | undefined>;
            lastSync: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodUnion<[z.ZodString, z.ZodDate]>>>, Date | null | undefined, string | Date | null | undefined>;
            filename: z.ZodDefault<z.ZodString>;
            id: z.ZodDefault<z.ZodNumber>;
            entries: z.ZodDefault<z.ZodArray<z.ZodAny, "many">>;
        }, "strip", z.ZodTypeAny, {
            entries: any[];
            id: number;
            filename: string;
            firstSync?: Date | null | undefined;
            lastSync?: Date | null | undefined;
        }, {
            firstSync?: string | Date | null | undefined;
            lastSync?: string | Date | null | undefined;
            filename?: string | undefined;
            id?: number | undefined;
            entries?: any[] | undefined;
        }>, import("../Bib").BibCore, {
            firstSync?: string | Date | null | undefined;
            lastSync?: string | Date | null | undefined;
            filename?: string | undefined;
            id?: number | undefined;
            entries?: any[] | undefined;
        }>;
        BibId: z.ZodDefault<z.ZodNumber>;
        readingList: z.ZodEffects<z.ZodDefault<z.ZodArray<z.ZodObject<{
            name: z.ZodString;
            description: z.ZodNullable<z.ZodString>;
            bibEntries: z.ZodArray<z.ZodAny, "many">;
            mdxNotes: z.ZodArray<z.ZodAny, "many">;
            ipynbNotes: z.ZodArray<z.ZodAny, "many">;
            createdAt: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodUnion<[z.ZodString, z.ZodDate]>>>, Date, string | Date | null | undefined>;
            lastUpdate: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodUnion<[z.ZodString, z.ZodDate]>>>, Date, string | Date | null | undefined>;
        }, "strip", z.ZodTypeAny, {
            name: string;
            bibEntries: any[];
            description: string | null;
            createdAt: Date;
            lastUpdate: Date;
            ipynbNotes: any[];
            mdxNotes: any[];
        }, {
            name: string;
            bibEntries: any[];
            description: string | null;
            ipynbNotes: any[];
            mdxNotes: any[];
            createdAt?: string | Date | null | undefined;
            lastUpdate?: string | Date | null | undefined;
        }>, "many">>, import("../readingList").ReadingList[], {
            name: string;
            bibEntries: any[];
            description: string | null;
            ipynbNotes: any[];
            mdxNotes: any[];
            createdAt?: string | Date | null | undefined;
            lastUpdate?: string | Date | null | undefined;
        }[] | undefined>;
        topics: z.ZodEffects<z.ZodDefault<z.ZodArray<z.ZodObject<{
            value: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            value: string;
        }, {
            value: string;
        }>, "many">>, import("../topic").Topic[], {
            value: string;
        }[] | undefined>;
        subjects: z.ZodEffects<z.ZodDefault<z.ZodArray<z.ZodObject<{
            value: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            value: string;
        }, {
            value: string;
        }>, "many">>, import("../subject").Subject[], {
            value: string;
        }[] | undefined>;
        tags: z.ZodEffects<z.ZodDefault<z.ZodArray<z.ZodUnion<[z.ZodObject<{
            value: z.ZodString;
            kanbanId: z.ZodDefault<z.ZodUnion<[z.ZodNumber, z.ZodNull, z.ZodUndefined]>>;
        }, "strip", z.ZodTypeAny, {
            value: string;
            kanbanId: number | null;
        }, {
            value: string;
            kanbanId?: number | null | undefined;
        }>, z.ZodEffects<z.ZodString, {
            value: string;
            kanbanId: number | null;
        }, string>]>, "many">>, import("../tag").Tag[], (string | {
            value: string;
            kanbanId?: number | null | undefined;
        })[] | undefined>;
        type: z.ZodString;
        id: z.ZodString;
        htmlCitation: z.ZodNullable<z.ZodString>;
        PdfPath: z.ZodNullable<z.ZodString>;
        address: z.ZodNullable<z.ZodString>;
        annote: z.ZodNullable<z.ZodString>;
        author: z.ZodNullable<z.ZodString>;
        booktitle: z.ZodNullable<z.ZodString>;
        chapter: z.ZodNullable<z.ZodString>;
        crossref: z.ZodNullable<z.ZodString>;
        doi: z.ZodNullable<z.ZodString>;
        edition: z.ZodNullable<z.ZodString>;
        editor: z.ZodNullable<z.ZodString>;
        email: z.ZodNullable<z.ZodString>;
        howpublished: z.ZodNullable<z.ZodString>;
        institution: z.ZodNullable<z.ZodString>;
        journal: z.ZodNullable<z.ZodString>;
        month: z.ZodNullable<z.ZodString>;
        note: z.ZodNullable<z.ZodString>;
        number: z.ZodNullable<z.ZodString>;
        organization: z.ZodNullable<z.ZodString>;
        pages: z.ZodNullable<z.ZodString>;
        publisher: z.ZodNullable<z.ZodString>;
        school: z.ZodNullable<z.ZodString>;
        series: z.ZodNullable<z.ZodString>;
        title: z.ZodNullable<z.ZodString>;
        volume: z.ZodNullable<z.ZodString>;
        year: z.ZodNullable<z.ZodString>;
        numpages: z.ZodNullable<z.ZodString>;
        url: z.ZodNullable<z.ZodString>;
        issue: z.ZodNullable<z.ZodString>;
        issn: z.ZodNullable<z.ZodString>;
        abstract: z.ZodNullable<z.ZodString>;
        urldate: z.ZodNullable<z.ZodString>;
        keywords: z.ZodNullable<z.ZodString>;
        copyright: z.ZodNullable<z.ZodString>;
        tempPageIndex: z.ZodNullable<z.ZodNumber>;
        read: z.ZodDefault<z.ZodBoolean>;
        OwnWork: z.ZodDefault<z.ZodBoolean>;
        ColleaguesWork: z.ZodDefault<z.ZodBoolean>;
        citationGroups: z.ZodEffects<z.ZodArray<z.ZodObject<{
            name: z.ZodString;
            description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            entries: z.ZodArray<z.ZodAny, "many">;
        }, "strip", z.ZodTypeAny, {
            entries: any[];
            name: string;
            description?: string | null | undefined;
        }, {
            entries: any[];
            name: string;
            description?: string | null | undefined;
        }>, "many">, import("../CitationGroup").CitationGroup[], {
            entries: any[];
            name: string;
            description?: string | null | undefined;
        }[]>;
        added: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodUnion<[z.ZodString, z.ZodDate, z.ZodString]>>>, Date, string | Date | null | undefined>;
    }, z.ZodString, "strip">, z.objectInputType<{
        Bib: z.ZodEffects<z.ZodObject<{
            firstSync: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodUnion<[z.ZodString, z.ZodDate]>>>, Date | null | undefined, string | Date | null | undefined>;
            lastSync: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodUnion<[z.ZodString, z.ZodDate]>>>, Date | null | undefined, string | Date | null | undefined>;
            filename: z.ZodDefault<z.ZodString>;
            id: z.ZodDefault<z.ZodNumber>;
            entries: z.ZodDefault<z.ZodArray<z.ZodAny, "many">>;
        }, "strip", z.ZodTypeAny, {
            entries: any[];
            id: number;
            filename: string;
            firstSync?: Date | null | undefined;
            lastSync?: Date | null | undefined;
        }, {
            firstSync?: string | Date | null | undefined;
            lastSync?: string | Date | null | undefined;
            filename?: string | undefined;
            id?: number | undefined;
            entries?: any[] | undefined;
        }>, import("../Bib").BibCore, {
            firstSync?: string | Date | null | undefined;
            lastSync?: string | Date | null | undefined;
            filename?: string | undefined;
            id?: number | undefined;
            entries?: any[] | undefined;
        }>;
        BibId: z.ZodDefault<z.ZodNumber>;
        readingList: z.ZodEffects<z.ZodDefault<z.ZodArray<z.ZodObject<{
            name: z.ZodString;
            description: z.ZodNullable<z.ZodString>;
            bibEntries: z.ZodArray<z.ZodAny, "many">;
            mdxNotes: z.ZodArray<z.ZodAny, "many">;
            ipynbNotes: z.ZodArray<z.ZodAny, "many">;
            createdAt: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodUnion<[z.ZodString, z.ZodDate]>>>, Date, string | Date | null | undefined>;
            lastUpdate: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodUnion<[z.ZodString, z.ZodDate]>>>, Date, string | Date | null | undefined>;
        }, "strip", z.ZodTypeAny, {
            name: string;
            bibEntries: any[];
            description: string | null;
            createdAt: Date;
            lastUpdate: Date;
            ipynbNotes: any[];
            mdxNotes: any[];
        }, {
            name: string;
            bibEntries: any[];
            description: string | null;
            ipynbNotes: any[];
            mdxNotes: any[];
            createdAt?: string | Date | null | undefined;
            lastUpdate?: string | Date | null | undefined;
        }>, "many">>, import("../readingList").ReadingList[], {
            name: string;
            bibEntries: any[];
            description: string | null;
            ipynbNotes: any[];
            mdxNotes: any[];
            createdAt?: string | Date | null | undefined;
            lastUpdate?: string | Date | null | undefined;
        }[] | undefined>;
        topics: z.ZodEffects<z.ZodDefault<z.ZodArray<z.ZodObject<{
            value: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            value: string;
        }, {
            value: string;
        }>, "many">>, import("../topic").Topic[], {
            value: string;
        }[] | undefined>;
        subjects: z.ZodEffects<z.ZodDefault<z.ZodArray<z.ZodObject<{
            value: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            value: string;
        }, {
            value: string;
        }>, "many">>, import("../subject").Subject[], {
            value: string;
        }[] | undefined>;
        tags: z.ZodEffects<z.ZodDefault<z.ZodArray<z.ZodUnion<[z.ZodObject<{
            value: z.ZodString;
            kanbanId: z.ZodDefault<z.ZodUnion<[z.ZodNumber, z.ZodNull, z.ZodUndefined]>>;
        }, "strip", z.ZodTypeAny, {
            value: string;
            kanbanId: number | null;
        }, {
            value: string;
            kanbanId?: number | null | undefined;
        }>, z.ZodEffects<z.ZodString, {
            value: string;
            kanbanId: number | null;
        }, string>]>, "many">>, import("../tag").Tag[], (string | {
            value: string;
            kanbanId?: number | null | undefined;
        })[] | undefined>;
        type: z.ZodString;
        id: z.ZodString;
        htmlCitation: z.ZodNullable<z.ZodString>;
        PdfPath: z.ZodNullable<z.ZodString>;
        address: z.ZodNullable<z.ZodString>;
        annote: z.ZodNullable<z.ZodString>;
        author: z.ZodNullable<z.ZodString>;
        booktitle: z.ZodNullable<z.ZodString>;
        chapter: z.ZodNullable<z.ZodString>;
        crossref: z.ZodNullable<z.ZodString>;
        doi: z.ZodNullable<z.ZodString>;
        edition: z.ZodNullable<z.ZodString>;
        editor: z.ZodNullable<z.ZodString>;
        email: z.ZodNullable<z.ZodString>;
        howpublished: z.ZodNullable<z.ZodString>;
        institution: z.ZodNullable<z.ZodString>;
        journal: z.ZodNullable<z.ZodString>;
        month: z.ZodNullable<z.ZodString>;
        note: z.ZodNullable<z.ZodString>;
        number: z.ZodNullable<z.ZodString>;
        organization: z.ZodNullable<z.ZodString>;
        pages: z.ZodNullable<z.ZodString>;
        publisher: z.ZodNullable<z.ZodString>;
        school: z.ZodNullable<z.ZodString>;
        series: z.ZodNullable<z.ZodString>;
        title: z.ZodNullable<z.ZodString>;
        volume: z.ZodNullable<z.ZodString>;
        year: z.ZodNullable<z.ZodString>;
        numpages: z.ZodNullable<z.ZodString>;
        url: z.ZodNullable<z.ZodString>;
        issue: z.ZodNullable<z.ZodString>;
        issn: z.ZodNullable<z.ZodString>;
        abstract: z.ZodNullable<z.ZodString>;
        urldate: z.ZodNullable<z.ZodString>;
        keywords: z.ZodNullable<z.ZodString>;
        copyright: z.ZodNullable<z.ZodString>;
        tempPageIndex: z.ZodNullable<z.ZodNumber>;
        read: z.ZodDefault<z.ZodBoolean>;
        OwnWork: z.ZodDefault<z.ZodBoolean>;
        ColleaguesWork: z.ZodDefault<z.ZodBoolean>;
        citationGroups: z.ZodEffects<z.ZodArray<z.ZodObject<{
            name: z.ZodString;
            description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            entries: z.ZodArray<z.ZodAny, "many">;
        }, "strip", z.ZodTypeAny, {
            entries: any[];
            name: string;
            description?: string | null | undefined;
        }, {
            entries: any[];
            name: string;
            description?: string | null | undefined;
        }>, "many">, import("../CitationGroup").CitationGroup[], {
            entries: any[];
            name: string;
            description?: string | null | undefined;
        }[]>;
        added: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodUnion<[z.ZodString, z.ZodDate, z.ZodString]>>>, Date, string | Date | null | undefined>;
    }, z.ZodString, "strip">>, "many">>, import("../BibEntry").BibEntry[], z.objectInputType<{
        Bib: z.ZodEffects<z.ZodObject<{
            firstSync: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodUnion<[z.ZodString, z.ZodDate]>>>, Date | null | undefined, string | Date | null | undefined>;
            lastSync: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodUnion<[z.ZodString, z.ZodDate]>>>, Date | null | undefined, string | Date | null | undefined>;
            filename: z.ZodDefault<z.ZodString>;
            id: z.ZodDefault<z.ZodNumber>;
            entries: z.ZodDefault<z.ZodArray<z.ZodAny, "many">>;
        }, "strip", z.ZodTypeAny, {
            entries: any[];
            id: number;
            filename: string;
            firstSync?: Date | null | undefined;
            lastSync?: Date | null | undefined;
        }, {
            firstSync?: string | Date | null | undefined;
            lastSync?: string | Date | null | undefined;
            filename?: string | undefined;
            id?: number | undefined;
            entries?: any[] | undefined;
        }>, import("../Bib").BibCore, {
            firstSync?: string | Date | null | undefined;
            lastSync?: string | Date | null | undefined;
            filename?: string | undefined;
            id?: number | undefined;
            entries?: any[] | undefined;
        }>;
        BibId: z.ZodDefault<z.ZodNumber>;
        readingList: z.ZodEffects<z.ZodDefault<z.ZodArray<z.ZodObject<{
            name: z.ZodString;
            description: z.ZodNullable<z.ZodString>;
            bibEntries: z.ZodArray<z.ZodAny, "many">;
            mdxNotes: z.ZodArray<z.ZodAny, "many">;
            ipynbNotes: z.ZodArray<z.ZodAny, "many">;
            createdAt: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodUnion<[z.ZodString, z.ZodDate]>>>, Date, string | Date | null | undefined>;
            lastUpdate: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodUnion<[z.ZodString, z.ZodDate]>>>, Date, string | Date | null | undefined>;
        }, "strip", z.ZodTypeAny, {
            name: string;
            bibEntries: any[];
            description: string | null;
            createdAt: Date;
            lastUpdate: Date;
            ipynbNotes: any[];
            mdxNotes: any[];
        }, {
            name: string;
            bibEntries: any[];
            description: string | null;
            ipynbNotes: any[];
            mdxNotes: any[];
            createdAt?: string | Date | null | undefined;
            lastUpdate?: string | Date | null | undefined;
        }>, "many">>, import("../readingList").ReadingList[], {
            name: string;
            bibEntries: any[];
            description: string | null;
            ipynbNotes: any[];
            mdxNotes: any[];
            createdAt?: string | Date | null | undefined;
            lastUpdate?: string | Date | null | undefined;
        }[] | undefined>;
        topics: z.ZodEffects<z.ZodDefault<z.ZodArray<z.ZodObject<{
            value: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            value: string;
        }, {
            value: string;
        }>, "many">>, import("../topic").Topic[], {
            value: string;
        }[] | undefined>;
        subjects: z.ZodEffects<z.ZodDefault<z.ZodArray<z.ZodObject<{
            value: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            value: string;
        }, {
            value: string;
        }>, "many">>, import("../subject").Subject[], {
            value: string;
        }[] | undefined>;
        tags: z.ZodEffects<z.ZodDefault<z.ZodArray<z.ZodUnion<[z.ZodObject<{
            value: z.ZodString;
            kanbanId: z.ZodDefault<z.ZodUnion<[z.ZodNumber, z.ZodNull, z.ZodUndefined]>>;
        }, "strip", z.ZodTypeAny, {
            value: string;
            kanbanId: number | null;
        }, {
            value: string;
            kanbanId?: number | null | undefined;
        }>, z.ZodEffects<z.ZodString, {
            value: string;
            kanbanId: number | null;
        }, string>]>, "many">>, import("../tag").Tag[], (string | {
            value: string;
            kanbanId?: number | null | undefined;
        })[] | undefined>;
        type: z.ZodString;
        id: z.ZodString;
        htmlCitation: z.ZodNullable<z.ZodString>;
        PdfPath: z.ZodNullable<z.ZodString>;
        address: z.ZodNullable<z.ZodString>;
        annote: z.ZodNullable<z.ZodString>;
        author: z.ZodNullable<z.ZodString>;
        booktitle: z.ZodNullable<z.ZodString>;
        chapter: z.ZodNullable<z.ZodString>;
        crossref: z.ZodNullable<z.ZodString>;
        doi: z.ZodNullable<z.ZodString>;
        edition: z.ZodNullable<z.ZodString>;
        editor: z.ZodNullable<z.ZodString>;
        email: z.ZodNullable<z.ZodString>;
        howpublished: z.ZodNullable<z.ZodString>;
        institution: z.ZodNullable<z.ZodString>;
        journal: z.ZodNullable<z.ZodString>;
        month: z.ZodNullable<z.ZodString>;
        note: z.ZodNullable<z.ZodString>;
        number: z.ZodNullable<z.ZodString>;
        organization: z.ZodNullable<z.ZodString>;
        pages: z.ZodNullable<z.ZodString>;
        publisher: z.ZodNullable<z.ZodString>;
        school: z.ZodNullable<z.ZodString>;
        series: z.ZodNullable<z.ZodString>;
        title: z.ZodNullable<z.ZodString>;
        volume: z.ZodNullable<z.ZodString>;
        year: z.ZodNullable<z.ZodString>;
        numpages: z.ZodNullable<z.ZodString>;
        url: z.ZodNullable<z.ZodString>;
        issue: z.ZodNullable<z.ZodString>;
        issn: z.ZodNullable<z.ZodString>;
        abstract: z.ZodNullable<z.ZodString>;
        urldate: z.ZodNullable<z.ZodString>;
        keywords: z.ZodNullable<z.ZodString>;
        copyright: z.ZodNullable<z.ZodString>;
        tempPageIndex: z.ZodNullable<z.ZodNumber>;
        read: z.ZodDefault<z.ZodBoolean>;
        OwnWork: z.ZodDefault<z.ZodBoolean>;
        ColleaguesWork: z.ZodDefault<z.ZodBoolean>;
        citationGroups: z.ZodEffects<z.ZodArray<z.ZodObject<{
            name: z.ZodString;
            description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            entries: z.ZodArray<z.ZodAny, "many">;
        }, "strip", z.ZodTypeAny, {
            entries: any[];
            name: string;
            description?: string | null | undefined;
        }, {
            entries: any[];
            name: string;
            description?: string | null | undefined;
        }>, "many">, import("../CitationGroup").CitationGroup[], {
            entries: any[];
            name: string;
            description?: string | null | undefined;
        }[]>;
        added: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodUnion<[z.ZodString, z.ZodDate, z.ZodString]>>>, Date, string | Date | null | undefined>;
    }, z.ZodString, "strip">[] | undefined>;
    bookmarked: z.ZodDefault<z.ZodBoolean>;
    isProtected: z.ZodDefault<z.ZodOptional<z.ZodNullable<z.ZodBoolean>>>;
    latexTitle: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    rootRelativePath: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodString>>, string | null | undefined, string | null | undefined>;
    content: z.ZodString;
    citationsListOrder: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
    sequentialIndex: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    outgoingQuickLinks: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
    firstSync: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodUnion<[z.ZodEffects<z.ZodString, Date, string>, z.ZodDate]>>>, Date | null | undefined, string | Date | null | undefined>;
    lastSync: z.ZodOptional<z.ZodNullable<z.ZodUnion<[z.ZodEffects<z.ZodString, Date, string>, z.ZodDate]>>>;
    topics: z.ZodEffects<z.ZodDefault<z.ZodArray<z.ZodObject<{
        value: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        value: string;
    }, {
        value: string;
    }>, "many">>, import("../topic").Topic[], {
        value: string;
    }[] | undefined>;
    sequentialList: z.ZodOptional<z.ZodObject<{
        sequentialKey: z.ZodString;
        MdxNote: z.ZodDefault<z.ZodArray<z.ZodAny, "many">>;
        Ipynb: z.ZodDefault<z.ZodArray<z.ZodAny, "many">>;
    }, "strip", z.ZodTypeAny, {
        MdxNote: any[];
        Ipynb: any[];
        sequentialKey: string;
    }, {
        sequentialKey: string;
        MdxNote?: any[] | undefined;
        Ipynb?: any[] | undefined;
    }>>;
    sequentialKey: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    subjects: z.ZodEffects<z.ZodDefault<z.ZodArray<z.ZodObject<{
        value: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        value: string;
    }, {
        value: string;
    }>, "many">>, import("../subject").Subject[], {
        value: string;
    }[] | undefined>;
    raw: z.ZodString;
    remoteUrl: z.ZodString;
    filepath: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, "strip", z.ZodTypeAny, {
    readingList: boolean;
    tags: import("../tag").Tag[];
    citations: import("../BibEntry").BibEntry[];
    bookmarked: boolean;
    isProtected: boolean | null;
    content: string;
    citationsListOrder: string[];
    remoteUrl: string;
    outgoingQuickLinks: string[];
    topics: import("../topic").Topic[];
    subjects: import("../subject").Subject[];
    raw: string;
    filepath: string | null;
    href?: string | null | undefined;
    title?: string | null | undefined;
    latexTitle?: string | null | undefined;
    rootRelativePath?: string | null | undefined;
    sequentialIndex?: number | null | undefined;
    firstSync?: Date | null | undefined;
    lastSync?: Date | null | undefined;
    sequentialList?: {
        MdxNote: any[];
        Ipynb: any[];
        sequentialKey: string;
    } | undefined;
    sequentialKey?: string | null | undefined;
}, {
    readingList: boolean;
    content: string;
    remoteUrl: string;
    raw: string;
    tags?: (string | {
        value: string;
        kanbanId?: number | null | undefined;
    })[] | undefined;
    href?: string | null | undefined;
    title?: string | null | undefined;
    citations?: z.objectInputType<{
        Bib: z.ZodEffects<z.ZodObject<{
            firstSync: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodUnion<[z.ZodString, z.ZodDate]>>>, Date | null | undefined, string | Date | null | undefined>;
            lastSync: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodUnion<[z.ZodString, z.ZodDate]>>>, Date | null | undefined, string | Date | null | undefined>;
            filename: z.ZodDefault<z.ZodString>;
            id: z.ZodDefault<z.ZodNumber>;
            entries: z.ZodDefault<z.ZodArray<z.ZodAny, "many">>;
        }, "strip", z.ZodTypeAny, {
            entries: any[];
            id: number;
            filename: string;
            firstSync?: Date | null | undefined;
            lastSync?: Date | null | undefined;
        }, {
            firstSync?: string | Date | null | undefined;
            lastSync?: string | Date | null | undefined;
            filename?: string | undefined;
            id?: number | undefined;
            entries?: any[] | undefined;
        }>, import("../Bib").BibCore, {
            firstSync?: string | Date | null | undefined;
            lastSync?: string | Date | null | undefined;
            filename?: string | undefined;
            id?: number | undefined;
            entries?: any[] | undefined;
        }>;
        BibId: z.ZodDefault<z.ZodNumber>;
        readingList: z.ZodEffects<z.ZodDefault<z.ZodArray<z.ZodObject<{
            name: z.ZodString;
            description: z.ZodNullable<z.ZodString>;
            bibEntries: z.ZodArray<z.ZodAny, "many">;
            mdxNotes: z.ZodArray<z.ZodAny, "many">;
            ipynbNotes: z.ZodArray<z.ZodAny, "many">;
            createdAt: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodUnion<[z.ZodString, z.ZodDate]>>>, Date, string | Date | null | undefined>;
            lastUpdate: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodUnion<[z.ZodString, z.ZodDate]>>>, Date, string | Date | null | undefined>;
        }, "strip", z.ZodTypeAny, {
            name: string;
            bibEntries: any[];
            description: string | null;
            createdAt: Date;
            lastUpdate: Date;
            ipynbNotes: any[];
            mdxNotes: any[];
        }, {
            name: string;
            bibEntries: any[];
            description: string | null;
            ipynbNotes: any[];
            mdxNotes: any[];
            createdAt?: string | Date | null | undefined;
            lastUpdate?: string | Date | null | undefined;
        }>, "many">>, import("../readingList").ReadingList[], {
            name: string;
            bibEntries: any[];
            description: string | null;
            ipynbNotes: any[];
            mdxNotes: any[];
            createdAt?: string | Date | null | undefined;
            lastUpdate?: string | Date | null | undefined;
        }[] | undefined>;
        topics: z.ZodEffects<z.ZodDefault<z.ZodArray<z.ZodObject<{
            value: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            value: string;
        }, {
            value: string;
        }>, "many">>, import("../topic").Topic[], {
            value: string;
        }[] | undefined>;
        subjects: z.ZodEffects<z.ZodDefault<z.ZodArray<z.ZodObject<{
            value: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            value: string;
        }, {
            value: string;
        }>, "many">>, import("../subject").Subject[], {
            value: string;
        }[] | undefined>;
        tags: z.ZodEffects<z.ZodDefault<z.ZodArray<z.ZodUnion<[z.ZodObject<{
            value: z.ZodString;
            kanbanId: z.ZodDefault<z.ZodUnion<[z.ZodNumber, z.ZodNull, z.ZodUndefined]>>;
        }, "strip", z.ZodTypeAny, {
            value: string;
            kanbanId: number | null;
        }, {
            value: string;
            kanbanId?: number | null | undefined;
        }>, z.ZodEffects<z.ZodString, {
            value: string;
            kanbanId: number | null;
        }, string>]>, "many">>, import("../tag").Tag[], (string | {
            value: string;
            kanbanId?: number | null | undefined;
        })[] | undefined>;
        type: z.ZodString;
        id: z.ZodString;
        htmlCitation: z.ZodNullable<z.ZodString>;
        PdfPath: z.ZodNullable<z.ZodString>;
        address: z.ZodNullable<z.ZodString>;
        annote: z.ZodNullable<z.ZodString>;
        author: z.ZodNullable<z.ZodString>;
        booktitle: z.ZodNullable<z.ZodString>;
        chapter: z.ZodNullable<z.ZodString>;
        crossref: z.ZodNullable<z.ZodString>;
        doi: z.ZodNullable<z.ZodString>;
        edition: z.ZodNullable<z.ZodString>;
        editor: z.ZodNullable<z.ZodString>;
        email: z.ZodNullable<z.ZodString>;
        howpublished: z.ZodNullable<z.ZodString>;
        institution: z.ZodNullable<z.ZodString>;
        journal: z.ZodNullable<z.ZodString>;
        month: z.ZodNullable<z.ZodString>;
        note: z.ZodNullable<z.ZodString>;
        number: z.ZodNullable<z.ZodString>;
        organization: z.ZodNullable<z.ZodString>;
        pages: z.ZodNullable<z.ZodString>;
        publisher: z.ZodNullable<z.ZodString>;
        school: z.ZodNullable<z.ZodString>;
        series: z.ZodNullable<z.ZodString>;
        title: z.ZodNullable<z.ZodString>;
        volume: z.ZodNullable<z.ZodString>;
        year: z.ZodNullable<z.ZodString>;
        numpages: z.ZodNullable<z.ZodString>;
        url: z.ZodNullable<z.ZodString>;
        issue: z.ZodNullable<z.ZodString>;
        issn: z.ZodNullable<z.ZodString>;
        abstract: z.ZodNullable<z.ZodString>;
        urldate: z.ZodNullable<z.ZodString>;
        keywords: z.ZodNullable<z.ZodString>;
        copyright: z.ZodNullable<z.ZodString>;
        tempPageIndex: z.ZodNullable<z.ZodNumber>;
        read: z.ZodDefault<z.ZodBoolean>;
        OwnWork: z.ZodDefault<z.ZodBoolean>;
        ColleaguesWork: z.ZodDefault<z.ZodBoolean>;
        citationGroups: z.ZodEffects<z.ZodArray<z.ZodObject<{
            name: z.ZodString;
            description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            entries: z.ZodArray<z.ZodAny, "many">;
        }, "strip", z.ZodTypeAny, {
            entries: any[];
            name: string;
            description?: string | null | undefined;
        }, {
            entries: any[];
            name: string;
            description?: string | null | undefined;
        }>, "many">, import("../CitationGroup").CitationGroup[], {
            entries: any[];
            name: string;
            description?: string | null | undefined;
        }[]>;
        added: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodUnion<[z.ZodString, z.ZodDate, z.ZodString]>>>, Date, string | Date | null | undefined>;
    }, z.ZodString, "strip">[] | undefined;
    bookmarked?: boolean | undefined;
    isProtected?: boolean | null | undefined;
    latexTitle?: string | null | undefined;
    rootRelativePath?: string | null | undefined;
    citationsListOrder?: string[] | undefined;
    sequentialIndex?: number | null | undefined;
    outgoingQuickLinks?: string[] | undefined;
    firstSync?: string | Date | null | undefined;
    lastSync?: string | Date | null | undefined;
    topics?: {
        value: string;
    }[] | undefined;
    sequentialList?: {
        sequentialKey: string;
        MdxNote?: any[] | undefined;
        Ipynb?: any[] | undefined;
    } | undefined;
    sequentialKey?: string | null | undefined;
    subjects?: {
        value: string;
    }[] | undefined;
    filepath?: string | null | undefined;
}>;
export type IpynbPropsOutput = z.output<typeof ipynbPropsSchema>;
export type IpynbPropsInput = z.input<typeof ipynbPropsSchema>;
export type IpynbRemotePropsOutput = z.output<typeof ipynbRemotePropsSchema>;
export type IpynbRemotePropsInput = z.input<typeof ipynbRemotePropsSchema>;
//# sourceMappingURL=ipynbPropsSchema.d.ts.map