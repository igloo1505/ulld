import { z } from 'zod';
export declare const mdxNotePropsSchema: z.ZodObject<z.objectUtil.extendShape<{
    content: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    id: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    title: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    latexTitle: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    raw: z.ZodString;
    floatImages: z.ZodDefault<z.ZodBoolean>;
    formatted: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    citations: z.ZodDefault<z.ZodArray<z.ZodEffects<z.ZodObject<{
        Bib: z.ZodOptional<z.ZodObject<{
            firstSync: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodUnion<[z.ZodString, z.ZodDate]>>>, Date | null | undefined, string | Date | null | undefined>;
            lastAccess: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodUnion<[z.ZodString, z.ZodDate]>>>, Date | null | undefined, string | Date | null | undefined>;
            filename: z.ZodDefault<z.ZodString>;
            id: z.ZodDefault<z.ZodNumber>;
            entries: z.ZodDefault<z.ZodArray<z.ZodAny, "many">>;
        }, "strip", z.ZodTypeAny, {
            entries: any[];
            filename: string;
            id: number;
            firstSync?: Date | null | undefined;
            lastAccess?: Date | null | undefined;
        }, {
            entries?: any[] | undefined;
            firstSync?: string | Date | null | undefined;
            lastAccess?: string | Date | null | undefined;
            filename?: string | undefined;
            id?: number | undefined;
        }>>;
        BibId: z.ZodDefault<z.ZodNumber>;
        readingList: z.ZodDefault<z.ZodArray<z.ZodObject<{
            name: z.ZodString;
            description: z.ZodNullable<z.ZodString>;
            bibEntries: z.ZodArray<z.ZodAny, "many">;
            mdxNotes: z.ZodDefault<z.ZodArray<z.ZodAny, "many">>;
            ipynbNotes: z.ZodDefault<z.ZodArray<z.ZodAny, "many">>;
            createdAt: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodUnion<[z.ZodString, z.ZodDate]>>>, Date, string | Date | null | undefined>;
            lastUpdate: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodUnion<[z.ZodString, z.ZodDate]>>>, Date, string | Date | null | undefined>;
        }, "strip", z.ZodTypeAny, {
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
        topics: z.ZodDefault<z.ZodArray<z.ZodObject<{
            value: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            value: string;
        }, {
            value: string;
        }>, "many">>;
        subjects: z.ZodDefault<z.ZodArray<z.ZodObject<{
            value: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            value: string;
        }, {
            value: string;
        }>, "many">>;
        tags: z.ZodDefault<z.ZodArray<z.ZodUnion<[z.ZodObject<{
            value: z.ZodString;
            kanbanId: z.ZodOptional<z.ZodUnion<[z.ZodNumber, z.ZodNull, z.ZodUndefined]>>;
        }, "strip", z.ZodTypeAny, {
            value: string;
            kanbanId?: number | null | undefined;
        }, {
            value: string;
            kanbanId?: number | null | undefined;
        }>, z.ZodEffects<z.ZodString, {
            value: string;
            kanbanId?: number | null | undefined;
        }, string>]>, "many">>;
        id: z.ZodString;
        type: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        htmlCitation: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        PdfPath: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        address: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        annote: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        author: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        booktitle: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        chapter: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        crossref: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        doi: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        edition: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        editor: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        email: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        howpublished: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        institution: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        journal: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        month: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        note: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        number: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        organization: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        pages: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        publisher: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        school: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        series: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        title: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        volume: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        year: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        numpages: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        url: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        issue: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        issn: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        abstract: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        urldate: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        keywords: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        copyright: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        tempPageIndex: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        read: z.ZodDefault<z.ZodBoolean>;
        OwnWork: z.ZodDefault<z.ZodBoolean>;
        ColleaguesWork: z.ZodDefault<z.ZodBoolean>;
        MdxNotes: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodAny, "many">>>;
        createdAt: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodUnion<[z.ZodString, z.ZodDate, z.ZodString]>>>, Date, string | Date | null | undefined>;
        lastAccess: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodUnion<[z.ZodString, z.ZodDate, z.ZodString]>>>, Date, string | Date | null | undefined>;
        citationGroups: z.ZodDefault<z.ZodArray<z.ZodObject<{
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
        }>, "many">>;
        added: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodUnion<[z.ZodString, z.ZodDate, z.ZodString]>>>, Date, string | Date | null | undefined>;
    }, "strip", z.ZodString, z.objectOutputType<{
        Bib: z.ZodOptional<z.ZodObject<{
            firstSync: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodUnion<[z.ZodString, z.ZodDate]>>>, Date | null | undefined, string | Date | null | undefined>;
            lastAccess: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodUnion<[z.ZodString, z.ZodDate]>>>, Date | null | undefined, string | Date | null | undefined>;
            filename: z.ZodDefault<z.ZodString>;
            id: z.ZodDefault<z.ZodNumber>;
            entries: z.ZodDefault<z.ZodArray<z.ZodAny, "many">>;
        }, "strip", z.ZodTypeAny, {
            entries: any[];
            filename: string;
            id: number;
            firstSync?: Date | null | undefined;
            lastAccess?: Date | null | undefined;
        }, {
            entries?: any[] | undefined;
            firstSync?: string | Date | null | undefined;
            lastAccess?: string | Date | null | undefined;
            filename?: string | undefined;
            id?: number | undefined;
        }>>;
        BibId: z.ZodDefault<z.ZodNumber>;
        readingList: z.ZodDefault<z.ZodArray<z.ZodObject<{
            name: z.ZodString;
            description: z.ZodNullable<z.ZodString>;
            bibEntries: z.ZodArray<z.ZodAny, "many">;
            mdxNotes: z.ZodDefault<z.ZodArray<z.ZodAny, "many">>;
            ipynbNotes: z.ZodDefault<z.ZodArray<z.ZodAny, "many">>;
            createdAt: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodUnion<[z.ZodString, z.ZodDate]>>>, Date, string | Date | null | undefined>;
            lastUpdate: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodUnion<[z.ZodString, z.ZodDate]>>>, Date, string | Date | null | undefined>;
        }, "strip", z.ZodTypeAny, {
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
        topics: z.ZodDefault<z.ZodArray<z.ZodObject<{
            value: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            value: string;
        }, {
            value: string;
        }>, "many">>;
        subjects: z.ZodDefault<z.ZodArray<z.ZodObject<{
            value: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            value: string;
        }, {
            value: string;
        }>, "many">>;
        tags: z.ZodDefault<z.ZodArray<z.ZodUnion<[z.ZodObject<{
            value: z.ZodString;
            kanbanId: z.ZodOptional<z.ZodUnion<[z.ZodNumber, z.ZodNull, z.ZodUndefined]>>;
        }, "strip", z.ZodTypeAny, {
            value: string;
            kanbanId?: number | null | undefined;
        }, {
            value: string;
            kanbanId?: number | null | undefined;
        }>, z.ZodEffects<z.ZodString, {
            value: string;
            kanbanId?: number | null | undefined;
        }, string>]>, "many">>;
        id: z.ZodString;
        type: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        htmlCitation: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        PdfPath: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        address: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        annote: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        author: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        booktitle: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        chapter: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        crossref: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        doi: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        edition: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        editor: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        email: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        howpublished: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        institution: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        journal: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        month: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        note: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        number: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        organization: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        pages: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        publisher: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        school: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        series: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        title: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        volume: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        year: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        numpages: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        url: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        issue: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        issn: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        abstract: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        urldate: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        keywords: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        copyright: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        tempPageIndex: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        read: z.ZodDefault<z.ZodBoolean>;
        OwnWork: z.ZodDefault<z.ZodBoolean>;
        ColleaguesWork: z.ZodDefault<z.ZodBoolean>;
        MdxNotes: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodAny, "many">>>;
        createdAt: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodUnion<[z.ZodString, z.ZodDate, z.ZodString]>>>, Date, string | Date | null | undefined>;
        lastAccess: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodUnion<[z.ZodString, z.ZodDate, z.ZodString]>>>, Date, string | Date | null | undefined>;
        citationGroups: z.ZodDefault<z.ZodArray<z.ZodObject<{
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
        }>, "many">>;
        added: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodUnion<[z.ZodString, z.ZodDate, z.ZodString]>>>, Date, string | Date | null | undefined>;
    }, z.ZodString, "strip">, z.objectInputType<{
        Bib: z.ZodOptional<z.ZodObject<{
            firstSync: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodUnion<[z.ZodString, z.ZodDate]>>>, Date | null | undefined, string | Date | null | undefined>;
            lastAccess: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodUnion<[z.ZodString, z.ZodDate]>>>, Date | null | undefined, string | Date | null | undefined>;
            filename: z.ZodDefault<z.ZodString>;
            id: z.ZodDefault<z.ZodNumber>;
            entries: z.ZodDefault<z.ZodArray<z.ZodAny, "many">>;
        }, "strip", z.ZodTypeAny, {
            entries: any[];
            filename: string;
            id: number;
            firstSync?: Date | null | undefined;
            lastAccess?: Date | null | undefined;
        }, {
            entries?: any[] | undefined;
            firstSync?: string | Date | null | undefined;
            lastAccess?: string | Date | null | undefined;
            filename?: string | undefined;
            id?: number | undefined;
        }>>;
        BibId: z.ZodDefault<z.ZodNumber>;
        readingList: z.ZodDefault<z.ZodArray<z.ZodObject<{
            name: z.ZodString;
            description: z.ZodNullable<z.ZodString>;
            bibEntries: z.ZodArray<z.ZodAny, "many">;
            mdxNotes: z.ZodDefault<z.ZodArray<z.ZodAny, "many">>;
            ipynbNotes: z.ZodDefault<z.ZodArray<z.ZodAny, "many">>;
            createdAt: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodUnion<[z.ZodString, z.ZodDate]>>>, Date, string | Date | null | undefined>;
            lastUpdate: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodUnion<[z.ZodString, z.ZodDate]>>>, Date, string | Date | null | undefined>;
        }, "strip", z.ZodTypeAny, {
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
        topics: z.ZodDefault<z.ZodArray<z.ZodObject<{
            value: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            value: string;
        }, {
            value: string;
        }>, "many">>;
        subjects: z.ZodDefault<z.ZodArray<z.ZodObject<{
            value: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            value: string;
        }, {
            value: string;
        }>, "many">>;
        tags: z.ZodDefault<z.ZodArray<z.ZodUnion<[z.ZodObject<{
            value: z.ZodString;
            kanbanId: z.ZodOptional<z.ZodUnion<[z.ZodNumber, z.ZodNull, z.ZodUndefined]>>;
        }, "strip", z.ZodTypeAny, {
            value: string;
            kanbanId?: number | null | undefined;
        }, {
            value: string;
            kanbanId?: number | null | undefined;
        }>, z.ZodEffects<z.ZodString, {
            value: string;
            kanbanId?: number | null | undefined;
        }, string>]>, "many">>;
        id: z.ZodString;
        type: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        htmlCitation: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        PdfPath: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        address: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        annote: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        author: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        booktitle: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        chapter: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        crossref: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        doi: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        edition: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        editor: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        email: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        howpublished: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        institution: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        journal: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        month: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        note: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        number: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        organization: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        pages: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        publisher: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        school: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        series: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        title: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        volume: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        year: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        numpages: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        url: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        issue: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        issn: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        abstract: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        urldate: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        keywords: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        copyright: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        tempPageIndex: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        read: z.ZodDefault<z.ZodBoolean>;
        OwnWork: z.ZodDefault<z.ZodBoolean>;
        ColleaguesWork: z.ZodDefault<z.ZodBoolean>;
        MdxNotes: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodAny, "many">>>;
        createdAt: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodUnion<[z.ZodString, z.ZodDate, z.ZodString]>>>, Date, string | Date | null | undefined>;
        lastAccess: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodUnion<[z.ZodString, z.ZodDate, z.ZodString]>>>, Date, string | Date | null | undefined>;
        citationGroups: z.ZodDefault<z.ZodArray<z.ZodObject<{
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
        }>, "many">>;
        added: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodUnion<[z.ZodString, z.ZodDate, z.ZodString]>>>, Date, string | Date | null | undefined>;
    }, z.ZodString, "strip">>, Omit<{
        readingList: {
            name: string;
            description: string | null;
            bibEntries: any[];
            mdxNotes: any[];
            ipynbNotes: any[];
            createdAt: Date;
            lastUpdate: Date;
        }[];
        tags: {
            value: string;
            kanbanId?: number | null | undefined;
        }[];
        lastAccess: Date;
        id: string;
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
            entries: any[];
            name: string;
            description?: string | null | undefined;
        }[];
        added: Date;
        number?: string | null | undefined;
        journal?: string | null | undefined;
        editor?: string | null | undefined;
        abstract?: string | null | undefined;
        copyright?: string | null | undefined;
        note?: string | null | undefined;
        school?: string | null | undefined;
        type?: string | null | undefined;
        volume?: string | null | undefined;
        Bib?: {
            entries: any[];
            filename: string;
            id: number;
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
        title?: string | null | undefined;
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
    }, z.objectInputType<{
        Bib: z.ZodOptional<z.ZodObject<{
            firstSync: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodUnion<[z.ZodString, z.ZodDate]>>>, Date | null | undefined, string | Date | null | undefined>;
            lastAccess: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodUnion<[z.ZodString, z.ZodDate]>>>, Date | null | undefined, string | Date | null | undefined>;
            filename: z.ZodDefault<z.ZodString>;
            id: z.ZodDefault<z.ZodNumber>;
            entries: z.ZodDefault<z.ZodArray<z.ZodAny, "many">>;
        }, "strip", z.ZodTypeAny, {
            entries: any[];
            filename: string;
            id: number;
            firstSync?: Date | null | undefined;
            lastAccess?: Date | null | undefined;
        }, {
            entries?: any[] | undefined;
            firstSync?: string | Date | null | undefined;
            lastAccess?: string | Date | null | undefined;
            filename?: string | undefined;
            id?: number | undefined;
        }>>;
        BibId: z.ZodDefault<z.ZodNumber>;
        readingList: z.ZodDefault<z.ZodArray<z.ZodObject<{
            name: z.ZodString;
            description: z.ZodNullable<z.ZodString>;
            bibEntries: z.ZodArray<z.ZodAny, "many">;
            mdxNotes: z.ZodDefault<z.ZodArray<z.ZodAny, "many">>;
            ipynbNotes: z.ZodDefault<z.ZodArray<z.ZodAny, "many">>;
            createdAt: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodUnion<[z.ZodString, z.ZodDate]>>>, Date, string | Date | null | undefined>;
            lastUpdate: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodUnion<[z.ZodString, z.ZodDate]>>>, Date, string | Date | null | undefined>;
        }, "strip", z.ZodTypeAny, {
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
        topics: z.ZodDefault<z.ZodArray<z.ZodObject<{
            value: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            value: string;
        }, {
            value: string;
        }>, "many">>;
        subjects: z.ZodDefault<z.ZodArray<z.ZodObject<{
            value: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            value: string;
        }, {
            value: string;
        }>, "many">>;
        tags: z.ZodDefault<z.ZodArray<z.ZodUnion<[z.ZodObject<{
            value: z.ZodString;
            kanbanId: z.ZodOptional<z.ZodUnion<[z.ZodNumber, z.ZodNull, z.ZodUndefined]>>;
        }, "strip", z.ZodTypeAny, {
            value: string;
            kanbanId?: number | null | undefined;
        }, {
            value: string;
            kanbanId?: number | null | undefined;
        }>, z.ZodEffects<z.ZodString, {
            value: string;
            kanbanId?: number | null | undefined;
        }, string>]>, "many">>;
        id: z.ZodString;
        type: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        htmlCitation: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        PdfPath: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        address: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        annote: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        author: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        booktitle: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        chapter: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        crossref: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        doi: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        edition: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        editor: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        email: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        howpublished: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        institution: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        journal: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        month: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        note: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        number: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        organization: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        pages: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        publisher: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        school: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        series: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        title: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        volume: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        year: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        numpages: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        url: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        issue: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        issn: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        abstract: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        urldate: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        keywords: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        copyright: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        tempPageIndex: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        read: z.ZodDefault<z.ZodBoolean>;
        OwnWork: z.ZodDefault<z.ZodBoolean>;
        ColleaguesWork: z.ZodDefault<z.ZodBoolean>;
        MdxNotes: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodAny, "many">>>;
        createdAt: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodUnion<[z.ZodString, z.ZodDate, z.ZodString]>>>, Date, string | Date | null | undefined>;
        lastAccess: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodUnion<[z.ZodString, z.ZodDate, z.ZodString]>>>, Date, string | Date | null | undefined>;
        citationGroups: z.ZodDefault<z.ZodArray<z.ZodObject<{
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
        }>, "many">>;
        added: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodUnion<[z.ZodString, z.ZodDate, z.ZodString]>>>, Date, string | Date | null | undefined>;
    }, z.ZodString, "strip">>, "many">>;
    importantValues: z.ZodDefault<z.ZodArray<z.ZodNumber, "many">>;
    bookmarked: z.ZodDefault<z.ZodBoolean>;
    quickLinkId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    href: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    citationsListOrder: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
    outgoingQuickLinks: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
    rootRelativePath: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodString>>, string | null | undefined, string | null | undefined>;
    equationIds: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
    isProtected: z.ZodDefault<z.ZodOptional<z.ZodNullable<z.ZodBoolean>>>;
    sequentialKey: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    sequentialIndex: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
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
    remoteUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    noLog: z.ZodDefault<z.ZodBoolean>;
    saveFormatted: z.ZodDefault<z.ZodBoolean>;
    noteType: z.ZodEffects<z.ZodString, string, string>;
    trackRemote: z.ZodDefault<z.ZodBoolean>;
    toDo: z.ZodDefault<z.ZodArray<z.ZodObject<z.objectUtil.extendShape<{
        id: z.ZodNumber;
        createdAt: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodUnion<[z.ZodString, z.ZodDate]>>>, Date, string | Date | null | undefined>;
        task: z.ZodString;
        dueAt: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodUnion<[z.ZodString, z.ZodDate]>>>, Date, string | Date | null | undefined>;
        details: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        associatedNotes: z.ZodDefault<z.ZodArray<z.ZodAny, "many">>;
        parentId: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        category: z.ZodNativeEnum<{
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
        bookmarked: z.ZodDefault<z.ZodBoolean>;
        status: z.ZodEnum<["ToDo", "In_Progress", "Backlog", "Cancelled", "Done", "Future"]>;
        priority: z.ZodNumber;
        parent: z.ZodDefault<z.ZodOptional<z.ZodNullable<z.ZodAny>>>;
        child: z.ZodDefault<z.ZodOptional<z.ZodNullable<z.ZodAny>>>;
        ToDoList: z.ZodObject<z.objectUtil.extendShape<z.objectUtil.extendShape<{
            id: z.ZodNumber;
            label: z.ZodString;
            tasks: z.ZodDefault<z.ZodArray<z.ZodAny, "many">>;
        }, Pick<{
            name: z.ZodString;
            description: z.ZodNullable<z.ZodString>;
            bibEntries: z.ZodArray<z.ZodAny, "many">;
            mdxNotes: z.ZodDefault<z.ZodArray<z.ZodAny, "many">>;
            ipynbNotes: z.ZodDefault<z.ZodArray<z.ZodAny, "many">>;
            createdAt: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodUnion<[z.ZodString, z.ZodDate]>>>, Date, string | Date | null | undefined>;
            lastUpdate: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodUnion<[z.ZodString, z.ZodDate]>>>, Date, string | Date | null | undefined>;
        }, "createdAt" | "lastUpdate">>, {
            topics: z.ZodDefault<z.ZodArray<z.ZodObject<{
                value: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                value: string;
            }, {
                value: string;
            }>, "many">>;
            subjects: z.ZodDefault<z.ZodArray<z.ZodObject<{
                value: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                value: string;
            }, {
                value: string;
            }>, "many">>;
            tags: z.ZodDefault<z.ZodArray<z.ZodUnion<[z.ZodObject<{
                value: z.ZodString;
                kanbanId: z.ZodOptional<z.ZodUnion<[z.ZodNumber, z.ZodNull, z.ZodUndefined]>>;
            }, "strip", z.ZodTypeAny, {
                value: string;
                kanbanId?: number | null | undefined;
            }, {
                value: string;
                kanbanId?: number | null | undefined;
            }>, z.ZodEffects<z.ZodString, {
                value: string;
                kanbanId?: number | null | undefined;
            }, string>]>, "many">>;
        }>, "strip", z.ZodTypeAny, {
            tags: {
                value: string;
                kanbanId?: number | null | undefined;
            }[];
            id: number;
            createdAt: Date;
            lastUpdate: Date;
            topics: {
                value: string;
            }[];
            subjects: {
                value: string;
            }[];
            label: string;
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
        toDoListId: z.ZodNumber;
    }, {
        topics: z.ZodDefault<z.ZodArray<z.ZodObject<{
            value: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            value: string;
        }, {
            value: string;
        }>, "many">>;
        subjects: z.ZodDefault<z.ZodArray<z.ZodObject<{
            value: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            value: string;
        }, {
            value: string;
        }>, "many">>;
        tags: z.ZodDefault<z.ZodArray<z.ZodUnion<[z.ZodObject<{
            value: z.ZodString;
            kanbanId: z.ZodOptional<z.ZodUnion<[z.ZodNumber, z.ZodNull, z.ZodUndefined]>>;
        }, "strip", z.ZodTypeAny, {
            value: string;
            kanbanId?: number | null | undefined;
        }, {
            value: string;
            kanbanId?: number | null | undefined;
        }>, z.ZodEffects<z.ZodString, {
            value: string;
            kanbanId?: number | null | undefined;
        }, string>]>, "many">>;
    }>, "strip", z.ZodTypeAny, {
        tags: {
            value: string;
            kanbanId?: number | null | undefined;
        }[];
        status: "ToDo" | "In_Progress" | "Backlog" | "Cancelled" | "Done" | "Future";
        id: number;
        createdAt: Date;
        topics: {
            value: string;
        }[];
        subjects: {
            value: string;
        }[];
        ToDoList: {
            tags: {
                value: string;
                kanbanId?: number | null | undefined;
            }[];
            id: number;
            createdAt: Date;
            lastUpdate: Date;
            topics: {
                value: string;
            }[];
            subjects: {
                value: string;
            }[];
            label: string;
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
        status: "ToDo" | "In_Progress" | "Backlog" | "Cancelled" | "Done" | "Future";
        id: number;
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
    summary: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    firstSync: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodUnion<[z.ZodEffects<z.ZodString, Date, string>, z.ZodDate]>>>, Date, string | Date | null | undefined>;
    lastSync: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodUnion<[z.ZodEffects<z.ZodString, Date, string>, z.ZodDate]>>>, Date, string | Date | null | undefined>;
}, {
    topics: z.ZodDefault<z.ZodArray<z.ZodObject<{
        value: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        value: string;
    }, {
        value: string;
    }>, "many">>;
    subjects: z.ZodDefault<z.ZodArray<z.ZodObject<{
        value: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        value: string;
    }, {
        value: string;
    }>, "many">>;
    tags: z.ZodDefault<z.ZodArray<z.ZodUnion<[z.ZodObject<{
        value: z.ZodString;
        kanbanId: z.ZodOptional<z.ZodUnion<[z.ZodNumber, z.ZodNull, z.ZodUndefined]>>;
    }, "strip", z.ZodTypeAny, {
        value: string;
        kanbanId?: number | null | undefined;
    }, {
        value: string;
        kanbanId?: number | null | undefined;
    }>, z.ZodEffects<z.ZodString, {
        value: string;
        kanbanId?: number | null | undefined;
    }, string>]>, "many">>;
}>, "strip", z.ZodTypeAny, {
    tags: {
        value: string;
        kanbanId?: number | null | undefined;
    }[];
    firstSync: Date;
    topics: {
        value: string;
    }[];
    subjects: {
        value: string;
    }[];
    noteType: string;
    toDo: {
        tags: {
            value: string;
            kanbanId?: number | null | undefined;
        }[];
        status: "ToDo" | "In_Progress" | "Backlog" | "Cancelled" | "Done" | "Future";
        id: number;
        createdAt: Date;
        topics: {
            value: string;
        }[];
        subjects: {
            value: string;
        }[];
        ToDoList: {
            tags: {
                value: string;
                kanbanId?: number | null | undefined;
            }[];
            id: number;
            createdAt: Date;
            lastUpdate: Date;
            topics: {
                value: string;
            }[];
            subjects: {
                value: string;
            }[];
            label: string;
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
    raw: string;
    floatImages: boolean;
    citations: (Omit<{
        readingList: {
            name: string;
            description: string | null;
            bibEntries: any[];
            mdxNotes: any[];
            ipynbNotes: any[];
            createdAt: Date;
            lastUpdate: Date;
        }[];
        tags: {
            value: string;
            kanbanId?: number | null | undefined;
        }[];
        lastAccess: Date;
        id: string;
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
            entries: any[];
            name: string;
            description?: string | null | undefined;
        }[];
        added: Date;
        number?: string | null | undefined;
        journal?: string | null | undefined;
        editor?: string | null | undefined;
        abstract?: string | null | undefined;
        copyright?: string | null | undefined;
        note?: string | null | undefined;
        school?: string | null | undefined;
        type?: string | null | undefined;
        volume?: string | null | undefined;
        Bib?: {
            entries: any[];
            filename: string;
            id: number;
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
        title?: string | null | undefined;
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
    })[];
    importantValues: number[];
    citationsListOrder: string[];
    outgoingQuickLinks: string[];
    equationIds: string[];
    isProtected: boolean | null;
    noLog: boolean;
    saveFormatted: boolean;
    trackRemote: boolean;
    lastSync: Date;
    id?: number | null | undefined;
    title?: string | null | undefined;
    sequentialKey?: string | null | undefined;
    content?: string | null | undefined;
    latexTitle?: string | null | undefined;
    formatted?: string | null | undefined;
    quickLinkId?: string | null | undefined;
    href?: string | null | undefined;
    rootRelativePath?: string | null | undefined;
    sequentialIndex?: number | null | undefined;
    sequentialList?: {
        MdxNote: any[];
        Ipynb: any[];
        sequentialKey: string;
    } | undefined;
    remoteUrl?: string | null | undefined;
    summary?: string | null | undefined;
}, {
    noteType: string;
    raw: string;
    tags?: (string | {
        value: string;
        kanbanId?: number | null | undefined;
    })[] | undefined;
    firstSync?: string | Date | null | undefined;
    id?: number | null | undefined;
    topics?: {
        value: string;
    }[] | undefined;
    subjects?: {
        value: string;
    }[] | undefined;
    title?: string | null | undefined;
    toDo?: {
        status: "ToDo" | "In_Progress" | "Backlog" | "Cancelled" | "Done" | "Future";
        id: number;
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
    sequentialKey?: string | null | undefined;
    content?: string | null | undefined;
    latexTitle?: string | null | undefined;
    floatImages?: boolean | undefined;
    formatted?: string | null | undefined;
    citations?: z.objectInputType<{
        Bib: z.ZodOptional<z.ZodObject<{
            firstSync: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodUnion<[z.ZodString, z.ZodDate]>>>, Date | null | undefined, string | Date | null | undefined>;
            lastAccess: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodUnion<[z.ZodString, z.ZodDate]>>>, Date | null | undefined, string | Date | null | undefined>;
            filename: z.ZodDefault<z.ZodString>;
            id: z.ZodDefault<z.ZodNumber>;
            entries: z.ZodDefault<z.ZodArray<z.ZodAny, "many">>;
        }, "strip", z.ZodTypeAny, {
            entries: any[];
            filename: string;
            id: number;
            firstSync?: Date | null | undefined;
            lastAccess?: Date | null | undefined;
        }, {
            entries?: any[] | undefined;
            firstSync?: string | Date | null | undefined;
            lastAccess?: string | Date | null | undefined;
            filename?: string | undefined;
            id?: number | undefined;
        }>>;
        BibId: z.ZodDefault<z.ZodNumber>;
        readingList: z.ZodDefault<z.ZodArray<z.ZodObject<{
            name: z.ZodString;
            description: z.ZodNullable<z.ZodString>;
            bibEntries: z.ZodArray<z.ZodAny, "many">;
            mdxNotes: z.ZodDefault<z.ZodArray<z.ZodAny, "many">>;
            ipynbNotes: z.ZodDefault<z.ZodArray<z.ZodAny, "many">>;
            createdAt: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodUnion<[z.ZodString, z.ZodDate]>>>, Date, string | Date | null | undefined>;
            lastUpdate: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodUnion<[z.ZodString, z.ZodDate]>>>, Date, string | Date | null | undefined>;
        }, "strip", z.ZodTypeAny, {
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
        topics: z.ZodDefault<z.ZodArray<z.ZodObject<{
            value: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            value: string;
        }, {
            value: string;
        }>, "many">>;
        subjects: z.ZodDefault<z.ZodArray<z.ZodObject<{
            value: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            value: string;
        }, {
            value: string;
        }>, "many">>;
        tags: z.ZodDefault<z.ZodArray<z.ZodUnion<[z.ZodObject<{
            value: z.ZodString;
            kanbanId: z.ZodOptional<z.ZodUnion<[z.ZodNumber, z.ZodNull, z.ZodUndefined]>>;
        }, "strip", z.ZodTypeAny, {
            value: string;
            kanbanId?: number | null | undefined;
        }, {
            value: string;
            kanbanId?: number | null | undefined;
        }>, z.ZodEffects<z.ZodString, {
            value: string;
            kanbanId?: number | null | undefined;
        }, string>]>, "many">>;
        id: z.ZodString;
        type: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        htmlCitation: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        PdfPath: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        address: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        annote: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        author: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        booktitle: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        chapter: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        crossref: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        doi: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        edition: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        editor: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        email: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        howpublished: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        institution: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        journal: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        month: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        note: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        number: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        organization: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        pages: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        publisher: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        school: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        series: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        title: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        volume: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        year: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        numpages: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        url: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        issue: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        issn: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        abstract: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        urldate: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        keywords: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        copyright: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        tempPageIndex: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        read: z.ZodDefault<z.ZodBoolean>;
        OwnWork: z.ZodDefault<z.ZodBoolean>;
        ColleaguesWork: z.ZodDefault<z.ZodBoolean>;
        MdxNotes: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodAny, "many">>>;
        createdAt: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodUnion<[z.ZodString, z.ZodDate, z.ZodString]>>>, Date, string | Date | null | undefined>;
        lastAccess: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodUnion<[z.ZodString, z.ZodDate, z.ZodString]>>>, Date, string | Date | null | undefined>;
        citationGroups: z.ZodDefault<z.ZodArray<z.ZodObject<{
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
        }>, "many">>;
        added: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodUnion<[z.ZodString, z.ZodDate, z.ZodString]>>>, Date, string | Date | null | undefined>;
    }, z.ZodString, "strip">[] | undefined;
    importantValues?: number[] | undefined;
    quickLinkId?: string | null | undefined;
    href?: string | null | undefined;
    citationsListOrder?: string[] | undefined;
    outgoingQuickLinks?: string[] | undefined;
    rootRelativePath?: string | null | undefined;
    equationIds?: string[] | undefined;
    isProtected?: boolean | null | undefined;
    sequentialIndex?: number | null | undefined;
    sequentialList?: {
        sequentialKey: string;
        MdxNote?: any[] | undefined;
        Ipynb?: any[] | undefined;
    } | undefined;
    remoteUrl?: string | null | undefined;
    noLog?: boolean | undefined;
    saveFormatted?: boolean | undefined;
    trackRemote?: boolean | undefined;
    summary?: string | null | undefined;
    lastSync?: string | Date | null | undefined;
}>;
export type MdxNotePropsSchemaType = z.infer<typeof mdxNotePropsSchema>;
//# sourceMappingURL=classProps.d.ts.map