import { z } from 'zod';
export declare const citationGroupSchema: z.ZodObject<{
    name: z.ZodString;
    description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    entries: z.ZodArray<z.ZodAny, "many">;
}, "strip", z.ZodTypeAny, {
    name: string;
    entries: any[];
    description?: string | null | undefined;
}, {
    name: string;
    entries: any[];
    description?: string | null | undefined;
}>;
declare const bibEntryPropsSchemaInner: z.ZodObject<{
    Bib: z.ZodOptional<z.ZodObject<{
        firstSync: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodUnion<[z.ZodString, z.ZodDate]>>>, Date | null | undefined, string | Date | null | undefined>;
        lastAccess: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodUnion<[z.ZodString, z.ZodDate]>>>, Date | null | undefined, string | Date | null | undefined>;
        filename: z.ZodDefault<z.ZodString>;
        id: z.ZodDefault<z.ZodNumber>;
        entries: z.ZodDefault<z.ZodArray<z.ZodAny, "many">>;
    }, "strip", z.ZodTypeAny, {
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
        name: string;
        entries: any[];
        description?: string | null | undefined;
    }, {
        name: string;
        entries: any[];
        description?: string | null | undefined;
    }>, "many">>;
    added: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodUnion<[z.ZodString, z.ZodDate, z.ZodString]>>>, Date, string | Date | null | undefined>;
}, "strip", z.ZodTypeAny, {
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
    note?: string | null | undefined;
    abstract?: string | null | undefined;
    type?: string | null | undefined;
    title?: string | null | undefined;
    copyright?: string | null | undefined;
    school?: string | null | undefined;
    volume?: string | null | undefined;
    journal?: string | null | undefined;
    url?: string | null | undefined;
    editor?: string | null | undefined;
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
    issue?: string | null | undefined;
    issn?: string | null | undefined;
    urldate?: string | null | undefined;
    keywords?: string | null | undefined;
    tempPageIndex?: number | null | undefined;
    MdxNotes?: any[] | null | undefined;
}, {
    id: string;
    number?: string | null | undefined;
    note?: string | null | undefined;
    abstract?: string | null | undefined;
    type?: string | null | undefined;
    title?: string | null | undefined;
    copyright?: string | null | undefined;
    school?: string | null | undefined;
    tags?: (string | {
        value: string;
        kanbanId?: number | null | undefined;
    })[] | undefined;
    volume?: string | null | undefined;
    journal?: string | null | undefined;
    readingList?: {
        name: string;
        description: string | null;
        bibEntries: any[];
        mdxNotes?: any[] | undefined;
        ipynbNotes?: any[] | undefined;
        createdAt?: string | Date | null | undefined;
        lastUpdate?: string | Date | null | undefined;
    }[] | undefined;
    url?: string | null | undefined;
    editor?: string | null | undefined;
    lastAccess?: string | Date | null | undefined;
    createdAt?: string | Date | null | undefined;
    Bib?: {
        id?: number | undefined;
        entries?: any[] | undefined;
        firstSync?: string | Date | null | undefined;
        lastAccess?: string | Date | null | undefined;
        filename?: string | undefined;
    } | undefined;
    BibId?: number | undefined;
    topics?: {
        value: string;
    }[] | undefined;
    subjects?: {
        value: string;
    }[] | undefined;
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
    issue?: string | null | undefined;
    issn?: string | null | undefined;
    urldate?: string | null | undefined;
    keywords?: string | null | undefined;
    tempPageIndex?: number | null | undefined;
    read?: boolean | undefined;
    OwnWork?: boolean | undefined;
    ColleaguesWork?: boolean | undefined;
    MdxNotes?: any[] | null | undefined;
    citationGroups?: {
        name: string;
        entries: any[];
        description?: string | null | undefined;
    }[] | undefined;
    added?: string | Date | null | undefined;
}>;
export declare const bibEntryTransform: (x: z.infer<typeof bibEntryPropsSchemaInner>) => Omit<z.infer<typeof bibEntryPropsSchemaInner>, "BibId"> & {
    BibId: number;
};
export declare const bibEntryPropsSchema: z.ZodEffects<z.ZodObject<{
    Bib: z.ZodOptional<z.ZodObject<{
        firstSync: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodUnion<[z.ZodString, z.ZodDate]>>>, Date | null | undefined, string | Date | null | undefined>;
        lastAccess: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodUnion<[z.ZodString, z.ZodDate]>>>, Date | null | undefined, string | Date | null | undefined>;
        filename: z.ZodDefault<z.ZodString>;
        id: z.ZodDefault<z.ZodNumber>;
        entries: z.ZodDefault<z.ZodArray<z.ZodAny, "many">>;
    }, "strip", z.ZodTypeAny, {
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
        name: string;
        entries: any[];
        description?: string | null | undefined;
    }, {
        name: string;
        entries: any[];
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
        name: string;
        entries: any[];
        description?: string | null | undefined;
    }, {
        name: string;
        entries: any[];
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
        name: string;
        entries: any[];
        description?: string | null | undefined;
    }, {
        name: string;
        entries: any[];
        description?: string | null | undefined;
    }>, "many">>;
    added: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodUnion<[z.ZodString, z.ZodDate, z.ZodString]>>>, Date, string | Date | null | undefined>;
}, z.ZodString, "strip">>, Omit<{
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
    note?: string | null | undefined;
    abstract?: string | null | undefined;
    type?: string | null | undefined;
    title?: string | null | undefined;
    copyright?: string | null | undefined;
    school?: string | null | undefined;
    volume?: string | null | undefined;
    journal?: string | null | undefined;
    url?: string | null | undefined;
    editor?: string | null | undefined;
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
        name: string;
        entries: any[];
        description?: string | null | undefined;
    }, {
        name: string;
        entries: any[];
        description?: string | null | undefined;
    }>, "many">>;
    added: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodUnion<[z.ZodString, z.ZodDate, z.ZodString]>>>, Date, string | Date | null | undefined>;
}, z.ZodString, "strip">>;
export {};
//# sourceMappingURL=classProps.d.ts.map