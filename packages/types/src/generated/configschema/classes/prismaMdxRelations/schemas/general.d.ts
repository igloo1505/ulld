import { z } from "zod";
import { Topic } from "../topic";
import { Subject } from "../subject";
import { Tag } from "../tag";
import { BibEntry } from "../BibEntry";
import { BibCore } from "../Bib";
import { ReadingList } from "../readingList";
import { CitationGroup } from "../CitationGroup";
export declare const taggableFields: z.ZodObject<{
    topics: z.ZodEffects<z.ZodDefault<z.ZodArray<z.ZodObject<{
        value: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        value: string;
    }, {
        value: string;
    }>, "many">>, Topic[], {
        value: string;
    }[] | undefined>;
    subjects: z.ZodEffects<z.ZodDefault<z.ZodArray<z.ZodObject<{
        value: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        value: string;
    }, {
        value: string;
    }>, "many">>, Subject[], {
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
    }, string>]>, "many">>, Tag[], (string | {
        value: string;
        kanbanId?: number | null | undefined;
    })[] | undefined>;
}, "strip", z.ZodTypeAny, {
    tags: Tag[];
    topics: Topic[];
    subjects: Subject[];
}, {
    topics?: {
        value: string;
    }[] | undefined;
    subjects?: {
        value: string;
    }[] | undefined;
    tags?: (string | {
        value: string;
        kanbanId?: number | null | undefined;
    })[] | undefined;
}>;
export declare const bibCoreSchema: z.ZodObject<{
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
}>;
export type BibPropsInput = z.input<typeof bibCoreSchema>;
export type BibPropsOutput = z.output<typeof bibCoreSchema>;
export declare const readingListZodObject: z.ZodObject<{
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
}>;
export type ReadingListPropsInput = z.input<typeof readingListZodObject>;
export type ReadingListPropsOutput = z.output<typeof readingListZodObject>;
export declare const citationGroupSchema: z.ZodObject<{
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
}>;
export type CitationGroupPropsInput = z.input<typeof citationGroupSchema>;
export type CitationGroupPropsOutput = z.output<typeof citationGroupSchema>;
export declare const bibEntryPropsSchema: z.ZodObject<{
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
    }>, BibCore, {
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
    }>, "many">>, ReadingList[], {
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
    }>, "many">>, Topic[], {
        value: string;
    }[] | undefined>;
    subjects: z.ZodEffects<z.ZodDefault<z.ZodArray<z.ZodObject<{
        value: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        value: string;
    }, {
        value: string;
    }>, "many">>, Subject[], {
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
    }, string>]>, "many">>, Tag[], (string | {
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
    }>, "many">, CitationGroup[], {
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
    }>, BibCore, {
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
    }>, "many">>, ReadingList[], {
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
    }>, "many">>, Topic[], {
        value: string;
    }[] | undefined>;
    subjects: z.ZodEffects<z.ZodDefault<z.ZodArray<z.ZodObject<{
        value: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        value: string;
    }, {
        value: string;
    }>, "many">>, Subject[], {
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
    }, string>]>, "many">>, Tag[], (string | {
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
    }>, "many">, CitationGroup[], {
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
    }>, BibCore, {
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
    }>, "many">>, ReadingList[], {
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
    }>, "many">>, Topic[], {
        value: string;
    }[] | undefined>;
    subjects: z.ZodEffects<z.ZodDefault<z.ZodArray<z.ZodObject<{
        value: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        value: string;
    }, {
        value: string;
    }>, "many">>, Subject[], {
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
    }, string>]>, "many">>, Tag[], (string | {
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
    }>, "many">, CitationGroup[], {
        entries: any[];
        name: string;
        description?: string | null | undefined;
    }[]>;
    added: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodUnion<[z.ZodString, z.ZodDate, z.ZodString]>>>, Date, string | Date | null | undefined>;
}, z.ZodString, "strip">>;
export declare const sequentialListPropsSchema: z.ZodObject<{
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
}>;
export type ParsedBibEntryProps = z.output<typeof bibEntryPropsSchema>;
export declare const todoListZodObject: z.ZodObject<{
    id: z.ZodNumber;
    label: z.ZodString;
    createdAt: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodUnion<[z.ZodString, z.ZodDate]>>>, Date, string | Date | null | undefined>;
    lastUpdate: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodUnion<[z.ZodString, z.ZodDate]>>>, Date, string | Date | null | undefined>;
    tasks: z.ZodDefault<z.ZodArray<z.ZodAny, "many">>;
    topics: z.ZodEffects<z.ZodDefault<z.ZodArray<z.ZodObject<{
        value: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        value: string;
    }, {
        value: string;
    }>, "many">>, Topic[], {
        value: string;
    }[] | undefined>;
    subjects: z.ZodEffects<z.ZodDefault<z.ZodArray<z.ZodObject<{
        value: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        value: string;
    }, {
        value: string;
    }>, "many">>, Subject[], {
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
    }, string>]>, "many">>, Tag[], (string | {
        value: string;
        kanbanId?: number | null | undefined;
    })[] | undefined>;
}, "strip", z.ZodTypeAny, {
    tags: Tag[];
    id: number;
    label: string;
    topics: Topic[];
    subjects: Subject[];
    createdAt: Date;
    lastUpdate: Date;
    tasks: any[];
}, {
    id: number;
    label: string;
    createdAt?: string | Date | null | undefined;
    lastUpdate?: string | Date | null | undefined;
    tasks?: any[] | undefined;
    topics?: {
        value: string;
    }[] | undefined;
    subjects?: {
        value: string;
    }[] | undefined;
    tags?: (string | {
        value: string;
        kanbanId?: number | null | undefined;
    })[] | undefined;
}>;
export declare const todoTaskZodObject: z.ZodObject<{
    id: z.ZodNumber;
    createdAt: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodUnion<[z.ZodString, z.ZodDate]>>>, Date, string | Date | null | undefined>;
    task: z.ZodString;
    dueAt: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodUnion<[z.ZodString, z.ZodDate]>>>, Date, string | Date | null | undefined>;
    details: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    associatedNotes: z.ZodDefault<z.ZodArray<z.ZodAny, "many">>;
    tags: z.ZodDefault<z.ZodArray<z.ZodUnion<[z.ZodObject<{
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
    }, string>]>, "many">>;
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
    status: z.ZodNativeEnum<{
        ToDo: "ToDo";
        In_Progress: "In_Progress";
        Backlog: "Backlog";
        Cancelled: "Cancelled";
        Done: "Done";
        Future: "Future";
    }>;
    priority: z.ZodNumber;
    parent: z.ZodDefault<z.ZodOptional<z.ZodNullable<z.ZodAny>>>;
    child: z.ZodDefault<z.ZodOptional<z.ZodNullable<z.ZodAny>>>;
    ToDoList: z.ZodObject<{
        id: z.ZodNumber;
        label: z.ZodString;
        createdAt: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodUnion<[z.ZodString, z.ZodDate]>>>, Date, string | Date | null | undefined>;
        lastUpdate: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodUnion<[z.ZodString, z.ZodDate]>>>, Date, string | Date | null | undefined>;
        tasks: z.ZodDefault<z.ZodArray<z.ZodAny, "many">>;
        topics: z.ZodEffects<z.ZodDefault<z.ZodArray<z.ZodObject<{
            value: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            value: string;
        }, {
            value: string;
        }>, "many">>, Topic[], {
            value: string;
        }[] | undefined>;
        subjects: z.ZodEffects<z.ZodDefault<z.ZodArray<z.ZodObject<{
            value: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            value: string;
        }, {
            value: string;
        }>, "many">>, Subject[], {
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
        }, string>]>, "many">>, Tag[], (string | {
            value: string;
            kanbanId?: number | null | undefined;
        })[] | undefined>;
    }, "strip", z.ZodTypeAny, {
        tags: Tag[];
        id: number;
        label: string;
        topics: Topic[];
        subjects: Subject[];
        createdAt: Date;
        lastUpdate: Date;
        tasks: any[];
    }, {
        id: number;
        label: string;
        createdAt?: string | Date | null | undefined;
        lastUpdate?: string | Date | null | undefined;
        tasks?: any[] | undefined;
        topics?: {
            value: string;
        }[] | undefined;
        subjects?: {
            value: string;
        }[] | undefined;
        tags?: (string | {
            value: string;
            kanbanId?: number | null | undefined;
        })[] | undefined;
    }>;
    toDoListId: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    status: "ToDo" | "In_Progress" | "Backlog" | "Cancelled" | "Done" | "Future";
    tags: {
        value: string;
        kanbanId: number | null;
    }[];
    id: number;
    ToDoList: {
        tags: Tag[];
        id: number;
        label: string;
        topics: Topic[];
        subjects: Subject[];
        createdAt: Date;
        lastUpdate: Date;
        tasks: any[];
    };
    category: "bug" | "research" | "work" | "priority" | "feature" | "documentation" | "online" | "urgent" | "gym" | "freetime" | "study" | "paper";
    bookmarked: boolean;
    topics: {
        value: string;
    }[];
    subjects: {
        value: string;
    }[];
    createdAt: Date;
    task: string;
    dueAt: Date;
    priority: number;
    associatedNotes: any[];
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
        createdAt?: string | Date | null | undefined;
        lastUpdate?: string | Date | null | undefined;
        tasks?: any[] | undefined;
        topics?: {
            value: string;
        }[] | undefined;
        subjects?: {
            value: string;
        }[] | undefined;
        tags?: (string | {
            value: string;
            kanbanId?: number | null | undefined;
        })[] | undefined;
    };
    category: "bug" | "research" | "work" | "priority" | "feature" | "documentation" | "online" | "urgent" | "gym" | "freetime" | "study" | "paper";
    task: string;
    priority: number;
    toDoListId: number;
    createdAt?: string | Date | null | undefined;
    dueAt?: string | Date | null | undefined;
    details?: string | null | undefined;
    associatedNotes?: any[] | undefined;
    tags?: (string | {
        value: string;
        kanbanId?: number | null | undefined;
    })[] | undefined;
    topics?: {
        value: string;
    }[] | undefined;
    subjects?: {
        value: string;
    }[] | undefined;
    parentId?: number | null | undefined;
    bookmarked?: boolean | undefined;
    parent?: any;
    child?: any;
}>;
export declare const mdxNotePropsSchema: z.ZodEffects<z.ZodObject<{
    id: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
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
        }>, BibCore, {
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
        }>, "many">>, ReadingList[], {
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
        }>, "many">>, Topic[], {
            value: string;
        }[] | undefined>;
        subjects: z.ZodEffects<z.ZodDefault<z.ZodArray<z.ZodObject<{
            value: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            value: string;
        }, {
            value: string;
        }>, "many">>, Subject[], {
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
        }, string>]>, "many">>, Tag[], (string | {
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
        }>, "many">, CitationGroup[], {
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
        }>, BibCore, {
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
        }>, "many">>, ReadingList[], {
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
        }>, "many">>, Topic[], {
            value: string;
        }[] | undefined>;
        subjects: z.ZodEffects<z.ZodDefault<z.ZodArray<z.ZodObject<{
            value: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            value: string;
        }, {
            value: string;
        }>, "many">>, Subject[], {
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
        }, string>]>, "many">>, Tag[], (string | {
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
        }>, "many">, CitationGroup[], {
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
        }>, BibCore, {
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
        }>, "many">>, ReadingList[], {
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
        }>, "many">>, Topic[], {
            value: string;
        }[] | undefined>;
        subjects: z.ZodEffects<z.ZodDefault<z.ZodArray<z.ZodObject<{
            value: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            value: string;
        }, {
            value: string;
        }>, "many">>, Subject[], {
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
        }, string>]>, "many">>, Tag[], (string | {
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
        }>, "many">, CitationGroup[], {
            entries: any[];
            name: string;
            description?: string | null | undefined;
        }[]>;
        added: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodUnion<[z.ZodString, z.ZodDate, z.ZodString]>>>, Date, string | Date | null | undefined>;
    }, z.ZodString, "strip">>, "many">>, BibEntry[], z.objectInputType<{
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
        }>, BibCore, {
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
        }>, "many">>, ReadingList[], {
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
        }>, "many">>, Topic[], {
            value: string;
        }[] | undefined>;
        subjects: z.ZodEffects<z.ZodDefault<z.ZodArray<z.ZodObject<{
            value: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            value: string;
        }, {
            value: string;
        }>, "many">>, Subject[], {
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
        }, string>]>, "many">>, Tag[], (string | {
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
        }>, "many">, CitationGroup[], {
            entries: any[];
            name: string;
            description?: string | null | undefined;
        }[]>;
        added: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodUnion<[z.ZodString, z.ZodDate, z.ZodString]>>>, Date, string | Date | null | undefined>;
    }, z.ZodString, "strip">[] | undefined>;
    noteType: z.ZodBranded<z.ZodEffects<z.ZodString, string, string>, "DocTypeName">;
    toDo: z.ZodDefault<z.ZodArray<z.ZodObject<{
        id: z.ZodNumber;
        createdAt: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodUnion<[z.ZodString, z.ZodDate]>>>, Date, string | Date | null | undefined>;
        task: z.ZodString;
        dueAt: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodUnion<[z.ZodString, z.ZodDate]>>>, Date, string | Date | null | undefined>;
        details: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        associatedNotes: z.ZodDefault<z.ZodArray<z.ZodAny, "many">>;
        tags: z.ZodDefault<z.ZodArray<z.ZodUnion<[z.ZodObject<{
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
        }, string>]>, "many">>;
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
        status: z.ZodNativeEnum<{
            ToDo: "ToDo";
            In_Progress: "In_Progress";
            Backlog: "Backlog";
            Cancelled: "Cancelled";
            Done: "Done";
            Future: "Future";
        }>;
        priority: z.ZodNumber;
        parent: z.ZodDefault<z.ZodOptional<z.ZodNullable<z.ZodAny>>>;
        child: z.ZodDefault<z.ZodOptional<z.ZodNullable<z.ZodAny>>>;
        ToDoList: z.ZodObject<{
            id: z.ZodNumber;
            label: z.ZodString;
            createdAt: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodUnion<[z.ZodString, z.ZodDate]>>>, Date, string | Date | null | undefined>;
            lastUpdate: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodUnion<[z.ZodString, z.ZodDate]>>>, Date, string | Date | null | undefined>;
            tasks: z.ZodDefault<z.ZodArray<z.ZodAny, "many">>;
            topics: z.ZodEffects<z.ZodDefault<z.ZodArray<z.ZodObject<{
                value: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                value: string;
            }, {
                value: string;
            }>, "many">>, Topic[], {
                value: string;
            }[] | undefined>;
            subjects: z.ZodEffects<z.ZodDefault<z.ZodArray<z.ZodObject<{
                value: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                value: string;
            }, {
                value: string;
            }>, "many">>, Subject[], {
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
            }, string>]>, "many">>, Tag[], (string | {
                value: string;
                kanbanId?: number | null | undefined;
            })[] | undefined>;
        }, "strip", z.ZodTypeAny, {
            tags: Tag[];
            id: number;
            label: string;
            topics: Topic[];
            subjects: Subject[];
            createdAt: Date;
            lastUpdate: Date;
            tasks: any[];
        }, {
            id: number;
            label: string;
            createdAt?: string | Date | null | undefined;
            lastUpdate?: string | Date | null | undefined;
            tasks?: any[] | undefined;
            topics?: {
                value: string;
            }[] | undefined;
            subjects?: {
                value: string;
            }[] | undefined;
            tags?: (string | {
                value: string;
                kanbanId?: number | null | undefined;
            })[] | undefined;
        }>;
        toDoListId: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        status: "ToDo" | "In_Progress" | "Backlog" | "Cancelled" | "Done" | "Future";
        tags: {
            value: string;
            kanbanId: number | null;
        }[];
        id: number;
        ToDoList: {
            tags: Tag[];
            id: number;
            label: string;
            topics: Topic[];
            subjects: Subject[];
            createdAt: Date;
            lastUpdate: Date;
            tasks: any[];
        };
        category: "bug" | "research" | "work" | "priority" | "feature" | "documentation" | "online" | "urgent" | "gym" | "freetime" | "study" | "paper";
        bookmarked: boolean;
        topics: {
            value: string;
        }[];
        subjects: {
            value: string;
        }[];
        createdAt: Date;
        task: string;
        dueAt: Date;
        priority: number;
        associatedNotes: any[];
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
            createdAt?: string | Date | null | undefined;
            lastUpdate?: string | Date | null | undefined;
            tasks?: any[] | undefined;
            topics?: {
                value: string;
            }[] | undefined;
            subjects?: {
                value: string;
            }[] | undefined;
            tags?: (string | {
                value: string;
                kanbanId?: number | null | undefined;
            })[] | undefined;
        };
        category: "bug" | "research" | "work" | "priority" | "feature" | "documentation" | "online" | "urgent" | "gym" | "freetime" | "study" | "paper";
        task: string;
        priority: number;
        toDoListId: number;
        createdAt?: string | Date | null | undefined;
        dueAt?: string | Date | null | undefined;
        details?: string | null | undefined;
        associatedNotes?: any[] | undefined;
        tags?: (string | {
            value: string;
            kanbanId?: number | null | undefined;
        })[] | undefined;
        topics?: {
            value: string;
        }[] | undefined;
        subjects?: {
            value: string;
        }[] | undefined;
        parentId?: number | null | undefined;
        bookmarked?: boolean | undefined;
        parent?: any;
        child?: any;
    }>, "many">>;
    bookmarked: z.ZodDefault<z.ZodBoolean>;
    isProtected: z.ZodDefault<z.ZodOptional<z.ZodNullable<z.ZodBoolean>>>;
    latexTitle: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    rootRelativePath: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodString>>, string | null | undefined, string | null | undefined>;
    content: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    formatted: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    summary: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    citationsListOrder: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
    importantValues: z.ZodDefault<z.ZodArray<z.ZodNumber, "many">>;
    sequentialIndex: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    floatImages: z.ZodDefault<z.ZodBoolean>;
    remoteUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    trackRemote: z.ZodDefault<z.ZodBoolean>;
    outgoingQuickLinks: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
    firstSync: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodUnion<[z.ZodEffects<z.ZodString, Date, string>, z.ZodDate]>>>, Date | null | undefined, string | Date | null | undefined>;
    lastSync: z.ZodOptional<z.ZodNullable<z.ZodUnion<[z.ZodEffects<z.ZodString, Date, string>, z.ZodDate]>>>;
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
    raw: z.ZodString;
    quickLinkId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    equationIds: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
    noLog: z.ZodDefault<z.ZodBoolean>;
    saveFormatted: z.ZodDefault<z.ZodBoolean>;
    topics: z.ZodEffects<z.ZodDefault<z.ZodArray<z.ZodObject<{
        value: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        value: string;
    }, {
        value: string;
    }>, "many">>, Topic[], {
        value: string;
    }[] | undefined>;
    subjects: z.ZodEffects<z.ZodDefault<z.ZodArray<z.ZodObject<{
        value: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        value: string;
    }, {
        value: string;
    }>, "many">>, Subject[], {
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
    }, string>]>, "many">>, Tag[], (string | {
        value: string;
        kanbanId?: number | null | undefined;
    })[] | undefined>;
}, "strip", z.ZodTypeAny, {
    tags: Tag[];
    citations: BibEntry[];
    noteType: string & z.BRAND<"DocTypeName">;
    toDo: {
        status: "ToDo" | "In_Progress" | "Backlog" | "Cancelled" | "Done" | "Future";
        tags: {
            value: string;
            kanbanId: number | null;
        }[];
        id: number;
        ToDoList: {
            tags: Tag[];
            id: number;
            label: string;
            topics: Topic[];
            subjects: Subject[];
            createdAt: Date;
            lastUpdate: Date;
            tasks: any[];
        };
        category: "bug" | "research" | "work" | "priority" | "feature" | "documentation" | "online" | "urgent" | "gym" | "freetime" | "study" | "paper";
        bookmarked: boolean;
        topics: {
            value: string;
        }[];
        subjects: {
            value: string;
        }[];
        createdAt: Date;
        task: string;
        dueAt: Date;
        priority: number;
        associatedNotes: any[];
        toDoListId: number;
        details?: string | null | undefined;
        parentId?: number | null | undefined;
        parent?: any;
        child?: any;
    }[];
    bookmarked: boolean;
    isProtected: boolean | null;
    citationsListOrder: string[];
    importantValues: number[];
    floatImages: boolean;
    trackRemote: boolean;
    outgoingQuickLinks: string[];
    topics: Topic[];
    subjects: Subject[];
    raw: string;
    equationIds: string[];
    noLog: boolean;
    saveFormatted: boolean;
    id?: number | null | undefined;
    href?: string | null | undefined;
    title?: string | null | undefined;
    latexTitle?: string | null | undefined;
    rootRelativePath?: string | null | undefined;
    content?: string | null | undefined;
    formatted?: string | null | undefined;
    summary?: string | null | undefined;
    sequentialIndex?: number | null | undefined;
    remoteUrl?: string | null | undefined;
    firstSync?: Date | null | undefined;
    lastSync?: Date | null | undefined;
    sequentialList?: {
        MdxNote: any[];
        Ipynb: any[];
        sequentialKey: string;
    } | undefined;
    sequentialKey?: string | null | undefined;
    quickLinkId?: string | null | undefined;
}, {
    noteType: string;
    raw: string;
    id?: number | null | undefined;
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
        }>, BibCore, {
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
        }>, "many">>, ReadingList[], {
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
        }>, "many">>, Topic[], {
            value: string;
        }[] | undefined>;
        subjects: z.ZodEffects<z.ZodDefault<z.ZodArray<z.ZodObject<{
            value: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            value: string;
        }, {
            value: string;
        }>, "many">>, Subject[], {
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
        }, string>]>, "many">>, Tag[], (string | {
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
        }>, "many">, CitationGroup[], {
            entries: any[];
            name: string;
            description?: string | null | undefined;
        }[]>;
        added: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodUnion<[z.ZodString, z.ZodDate, z.ZodString]>>>, Date, string | Date | null | undefined>;
    }, z.ZodString, "strip">[] | undefined;
    toDo?: {
        status: "ToDo" | "In_Progress" | "Backlog" | "Cancelled" | "Done" | "Future";
        id: number;
        ToDoList: {
            id: number;
            label: string;
            createdAt?: string | Date | null | undefined;
            lastUpdate?: string | Date | null | undefined;
            tasks?: any[] | undefined;
            topics?: {
                value: string;
            }[] | undefined;
            subjects?: {
                value: string;
            }[] | undefined;
            tags?: (string | {
                value: string;
                kanbanId?: number | null | undefined;
            })[] | undefined;
        };
        category: "bug" | "research" | "work" | "priority" | "feature" | "documentation" | "online" | "urgent" | "gym" | "freetime" | "study" | "paper";
        task: string;
        priority: number;
        toDoListId: number;
        createdAt?: string | Date | null | undefined;
        dueAt?: string | Date | null | undefined;
        details?: string | null | undefined;
        associatedNotes?: any[] | undefined;
        tags?: (string | {
            value: string;
            kanbanId?: number | null | undefined;
        })[] | undefined;
        topics?: {
            value: string;
        }[] | undefined;
        subjects?: {
            value: string;
        }[] | undefined;
        parentId?: number | null | undefined;
        bookmarked?: boolean | undefined;
        parent?: any;
        child?: any;
    }[] | undefined;
    bookmarked?: boolean | undefined;
    isProtected?: boolean | null | undefined;
    latexTitle?: string | null | undefined;
    rootRelativePath?: string | null | undefined;
    content?: string | null | undefined;
    formatted?: string | null | undefined;
    summary?: string | null | undefined;
    citationsListOrder?: string[] | undefined;
    importantValues?: number[] | undefined;
    sequentialIndex?: number | null | undefined;
    floatImages?: boolean | undefined;
    remoteUrl?: string | null | undefined;
    trackRemote?: boolean | undefined;
    outgoingQuickLinks?: string[] | undefined;
    firstSync?: string | Date | null | undefined;
    lastSync?: string | Date | null | undefined;
    sequentialList?: {
        sequentialKey: string;
        MdxNote?: any[] | undefined;
        Ipynb?: any[] | undefined;
    } | undefined;
    sequentialKey?: string | null | undefined;
    quickLinkId?: string | null | undefined;
    equationIds?: string[] | undefined;
    noLog?: boolean | undefined;
    saveFormatted?: boolean | undefined;
    topics?: {
        value: string;
    }[] | undefined;
    subjects?: {
        value: string;
    }[] | undefined;
    tags?: (string | {
        value: string;
        kanbanId?: number | null | undefined;
    })[] | undefined;
}>, {
    raw: string | null | undefined;
    importantValues: any;
    frontMatter: {
        tags?: any;
        id?: any;
        title?: any;
        summary?: any;
        importantValues?: any;
        topics?: any;
        sequentialKey?: any;
        subjects?: any;
        created?: any;
        updated?: any;
        sequential?: any;
        tableStyles?: any;
    };
    floatImages: any;
    isProtected: any;
    quickLinkId: any;
    sequentialKey: any;
    sequentialIndex: any;
    remoteUrl: any;
    trackRemote: any;
    topics: any[];
    subjects: any[];
    tags: any[];
    firstSync: Date | null | undefined;
    citations: BibEntry[];
    noteType: string & z.BRAND<"DocTypeName">;
    toDo: {
        status: "ToDo" | "In_Progress" | "Backlog" | "Cancelled" | "Done" | "Future";
        tags: {
            value: string;
            kanbanId: number | null;
        }[];
        id: number;
        ToDoList: {
            tags: Tag[];
            id: number;
            label: string;
            topics: Topic[];
            subjects: Subject[];
            createdAt: Date;
            lastUpdate: Date;
            tasks: any[];
        };
        category: "bug" | "research" | "work" | "priority" | "feature" | "documentation" | "online" | "urgent" | "gym" | "freetime" | "study" | "paper";
        bookmarked: boolean;
        topics: {
            value: string;
        }[];
        subjects: {
            value: string;
        }[];
        createdAt: Date;
        task: string;
        dueAt: Date;
        priority: number;
        associatedNotes: any[];
        toDoListId: number;
        details?: string | null | undefined;
        parentId?: number | null | undefined;
        parent?: any;
        child?: any;
    }[];
    bookmarked: boolean;
    citationsListOrder: string[];
    outgoingQuickLinks: string[];
    equationIds: string[];
    noLog: boolean;
    saveFormatted: boolean;
    id?: number | null | undefined;
    href?: string | null | undefined;
    title?: string | null | undefined;
    latexTitle?: string | null | undefined;
    rootRelativePath?: string | null | undefined;
    content?: string | null | undefined;
    formatted?: string | null | undefined;
    summary?: string | null | undefined;
    lastSync?: Date | null | undefined;
    sequentialList?: {
        MdxNote: any[];
        Ipynb: any[];
        sequentialKey: string;
    } | undefined;
}, {
    noteType: string;
    raw: string;
    id?: number | null | undefined;
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
        }>, BibCore, {
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
        }>, "many">>, ReadingList[], {
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
        }>, "many">>, Topic[], {
            value: string;
        }[] | undefined>;
        subjects: z.ZodEffects<z.ZodDefault<z.ZodArray<z.ZodObject<{
            value: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            value: string;
        }, {
            value: string;
        }>, "many">>, Subject[], {
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
        }, string>]>, "many">>, Tag[], (string | {
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
        }>, "many">, CitationGroup[], {
            entries: any[];
            name: string;
            description?: string | null | undefined;
        }[]>;
        added: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodUnion<[z.ZodString, z.ZodDate, z.ZodString]>>>, Date, string | Date | null | undefined>;
    }, z.ZodString, "strip">[] | undefined;
    toDo?: {
        status: "ToDo" | "In_Progress" | "Backlog" | "Cancelled" | "Done" | "Future";
        id: number;
        ToDoList: {
            id: number;
            label: string;
            createdAt?: string | Date | null | undefined;
            lastUpdate?: string | Date | null | undefined;
            tasks?: any[] | undefined;
            topics?: {
                value: string;
            }[] | undefined;
            subjects?: {
                value: string;
            }[] | undefined;
            tags?: (string | {
                value: string;
                kanbanId?: number | null | undefined;
            })[] | undefined;
        };
        category: "bug" | "research" | "work" | "priority" | "feature" | "documentation" | "online" | "urgent" | "gym" | "freetime" | "study" | "paper";
        task: string;
        priority: number;
        toDoListId: number;
        createdAt?: string | Date | null | undefined;
        dueAt?: string | Date | null | undefined;
        details?: string | null | undefined;
        associatedNotes?: any[] | undefined;
        tags?: (string | {
            value: string;
            kanbanId?: number | null | undefined;
        })[] | undefined;
        topics?: {
            value: string;
        }[] | undefined;
        subjects?: {
            value: string;
        }[] | undefined;
        parentId?: number | null | undefined;
        bookmarked?: boolean | undefined;
        parent?: any;
        child?: any;
    }[] | undefined;
    bookmarked?: boolean | undefined;
    isProtected?: boolean | null | undefined;
    latexTitle?: string | null | undefined;
    rootRelativePath?: string | null | undefined;
    content?: string | null | undefined;
    formatted?: string | null | undefined;
    summary?: string | null | undefined;
    citationsListOrder?: string[] | undefined;
    importantValues?: number[] | undefined;
    sequentialIndex?: number | null | undefined;
    floatImages?: boolean | undefined;
    remoteUrl?: string | null | undefined;
    trackRemote?: boolean | undefined;
    outgoingQuickLinks?: string[] | undefined;
    firstSync?: string | Date | null | undefined;
    lastSync?: string | Date | null | undefined;
    sequentialList?: {
        sequentialKey: string;
        MdxNote?: any[] | undefined;
        Ipynb?: any[] | undefined;
    } | undefined;
    sequentialKey?: string | null | undefined;
    quickLinkId?: string | null | undefined;
    equationIds?: string[] | undefined;
    noLog?: boolean | undefined;
    saveFormatted?: boolean | undefined;
    topics?: {
        value: string;
    }[] | undefined;
    subjects?: {
        value: string;
    }[] | undefined;
    tags?: (string | {
        value: string;
        kanbanId?: number | null | undefined;
    })[] | undefined;
}>;
export declare const mdxNoteSummaryPropSchema: z.ZodEffects<z.ZodObject<{
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
    }, string>]>, "many">>, Tag[], (string | {
        value: string;
        kanbanId?: number | null | undefined;
    })[] | undefined>;
    id: z.ZodNullable<z.ZodNumber>;
    href: z.ZodNullable<z.ZodString>;
    title: z.ZodNullable<z.ZodString>;
    noteType: z.ZodBranded<z.ZodEffects<z.ZodString, string, string>, "DocTypeName">;
    bookmarked: z.ZodDefault<z.ZodBoolean>;
    isProtected: z.ZodDefault<z.ZodOptional<z.ZodNullable<z.ZodBoolean>>>;
    latexTitle: z.ZodNullable<z.ZodString>;
    rootRelativePath: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodString>>, string | null | undefined, string | null | undefined>;
    formatted: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    summary: z.ZodNullable<z.ZodString>;
    citationsListOrder: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
    importantValues: z.ZodDefault<z.ZodArray<z.ZodNumber, "many">>;
    sequentialIndex: z.ZodNullable<z.ZodNumber>;
    floatImages: z.ZodDefault<z.ZodBoolean>;
    remoteUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    trackRemote: z.ZodDefault<z.ZodBoolean>;
    outgoingQuickLinks: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
    firstSync: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodUnion<[z.ZodEffects<z.ZodString, Date, string>, z.ZodDate]>>>, Date | null | undefined, string | Date | null | undefined>;
    lastSync: z.ZodNullable<z.ZodUnion<[z.ZodEffects<z.ZodString, Date, string>, z.ZodDate]>>;
    topics: z.ZodEffects<z.ZodDefault<z.ZodArray<z.ZodObject<{
        value: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        value: string;
    }, {
        value: string;
    }>, "many">>, Topic[], {
        value: string;
    }[] | undefined>;
    sequentialKey: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    subjects: z.ZodEffects<z.ZodDefault<z.ZodArray<z.ZodObject<{
        value: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        value: string;
    }, {
        value: string;
    }>, "many">>, Subject[], {
        value: string;
    }[] | undefined>;
    quickLinkId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    equationIds: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
    noLog: z.ZodDefault<z.ZodBoolean>;
    saveFormatted: z.ZodDefault<z.ZodBoolean>;
    sequentialList: z.ZodOptional<z.ZodNullable<z.ZodObject<Pick<{
        sequentialKey: z.ZodString;
        MdxNote: z.ZodDefault<z.ZodArray<z.ZodAny, "many">>;
        Ipynb: z.ZodDefault<z.ZodArray<z.ZodAny, "many">>;
    }, "sequentialKey">, "strip", z.ZodTypeAny, {
        sequentialKey: string;
    }, {
        sequentialKey: string;
    }>>>;
}, "strip", z.ZodTypeAny, {
    tags: Tag[];
    id: number | null;
    href: string | null;
    title: string | null;
    noteType: string & z.BRAND<"DocTypeName">;
    bookmarked: boolean;
    isProtected: boolean | null;
    latexTitle: string | null;
    summary: string | null;
    citationsListOrder: string[];
    importantValues: number[];
    sequentialIndex: number | null;
    floatImages: boolean;
    trackRemote: boolean;
    outgoingQuickLinks: string[];
    lastSync: Date | null;
    topics: Topic[];
    subjects: Subject[];
    equationIds: string[];
    noLog: boolean;
    saveFormatted: boolean;
    rootRelativePath?: string | null | undefined;
    formatted?: string | null | undefined;
    remoteUrl?: string | null | undefined;
    firstSync?: Date | null | undefined;
    sequentialKey?: string | null | undefined;
    quickLinkId?: string | null | undefined;
    sequentialList?: {
        sequentialKey: string;
    } | null | undefined;
}, {
    id: number | null;
    href: string | null;
    title: string | null;
    noteType: string;
    latexTitle: string | null;
    summary: string | null;
    sequentialIndex: number | null;
    lastSync: ((string | Date) & (string | Date | undefined)) | null;
    tags?: (string | {
        value: string;
        kanbanId?: number | null | undefined;
    })[] | undefined;
    bookmarked?: boolean | undefined;
    isProtected?: boolean | null | undefined;
    rootRelativePath?: string | null | undefined;
    formatted?: string | null | undefined;
    citationsListOrder?: string[] | undefined;
    importantValues?: number[] | undefined;
    floatImages?: boolean | undefined;
    remoteUrl?: string | null | undefined;
    trackRemote?: boolean | undefined;
    outgoingQuickLinks?: string[] | undefined;
    firstSync?: string | Date | null | undefined;
    topics?: {
        value: string;
    }[] | undefined;
    sequentialKey?: string | null | undefined;
    subjects?: {
        value: string;
    }[] | undefined;
    quickLinkId?: string | null | undefined;
    equationIds?: string[] | undefined;
    noLog?: boolean | undefined;
    saveFormatted?: boolean | undefined;
    sequentialList?: {
        sequentialKey: string;
    } | null | undefined;
}>, {
    firstSync: Date | null | undefined;
    tags: Tag[];
    id: number | null;
    href: string | null;
    title: string | null;
    noteType: string & z.BRAND<"DocTypeName">;
    bookmarked: boolean;
    isProtected: boolean | null;
    latexTitle: string | null;
    summary: string | null;
    citationsListOrder: string[];
    importantValues: number[];
    sequentialIndex: number | null;
    floatImages: boolean;
    trackRemote: boolean;
    outgoingQuickLinks: string[];
    lastSync: Date | null;
    topics: Topic[];
    subjects: Subject[];
    equationIds: string[];
    noLog: boolean;
    saveFormatted: boolean;
    rootRelativePath?: string | null | undefined;
    formatted?: string | null | undefined;
    remoteUrl?: string | null | undefined;
    sequentialKey?: string | null | undefined;
    quickLinkId?: string | null | undefined;
    sequentialList?: {
        sequentialKey: string;
    } | null | undefined;
}, {
    id: number | null;
    href: string | null;
    title: string | null;
    noteType: string;
    latexTitle: string | null;
    summary: string | null;
    sequentialIndex: number | null;
    lastSync: ((string | Date) & (string | Date | undefined)) | null;
    tags?: (string | {
        value: string;
        kanbanId?: number | null | undefined;
    })[] | undefined;
    bookmarked?: boolean | undefined;
    isProtected?: boolean | null | undefined;
    rootRelativePath?: string | null | undefined;
    formatted?: string | null | undefined;
    citationsListOrder?: string[] | undefined;
    importantValues?: number[] | undefined;
    floatImages?: boolean | undefined;
    remoteUrl?: string | null | undefined;
    trackRemote?: boolean | undefined;
    outgoingQuickLinks?: string[] | undefined;
    firstSync?: string | Date | null | undefined;
    topics?: {
        value: string;
    }[] | undefined;
    sequentialKey?: string | null | undefined;
    subjects?: {
        value: string;
    }[] | undefined;
    quickLinkId?: string | null | undefined;
    equationIds?: string[] | undefined;
    noLog?: boolean | undefined;
    saveFormatted?: boolean | undefined;
    sequentialList?: {
        sequentialKey: string;
    } | null | undefined;
}>;
export declare const fromMdxStringOptSchema: z.ZodDefault<z.ZodObject<{
    getBookmarkState: z.ZodDefault<z.ZodBoolean>;
}, "strip", z.ZodTypeAny, {
    getBookmarkState: boolean;
}, {
    getBookmarkState?: boolean | undefined;
}>>;
export declare const mdxNoteFromStringPropsSchema: z.ZodObject<Pick<{
    id: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
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
        }>, BibCore, {
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
        }>, "many">>, ReadingList[], {
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
        }>, "many">>, Topic[], {
            value: string;
        }[] | undefined>;
        subjects: z.ZodEffects<z.ZodDefault<z.ZodArray<z.ZodObject<{
            value: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            value: string;
        }, {
            value: string;
        }>, "many">>, Subject[], {
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
        }, string>]>, "many">>, Tag[], (string | {
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
        }>, "many">, CitationGroup[], {
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
        }>, BibCore, {
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
        }>, "many">>, ReadingList[], {
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
        }>, "many">>, Topic[], {
            value: string;
        }[] | undefined>;
        subjects: z.ZodEffects<z.ZodDefault<z.ZodArray<z.ZodObject<{
            value: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            value: string;
        }, {
            value: string;
        }>, "many">>, Subject[], {
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
        }, string>]>, "many">>, Tag[], (string | {
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
        }>, "many">, CitationGroup[], {
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
        }>, BibCore, {
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
        }>, "many">>, ReadingList[], {
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
        }>, "many">>, Topic[], {
            value: string;
        }[] | undefined>;
        subjects: z.ZodEffects<z.ZodDefault<z.ZodArray<z.ZodObject<{
            value: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            value: string;
        }, {
            value: string;
        }>, "many">>, Subject[], {
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
        }, string>]>, "many">>, Tag[], (string | {
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
        }>, "many">, CitationGroup[], {
            entries: any[];
            name: string;
            description?: string | null | undefined;
        }[]>;
        added: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodUnion<[z.ZodString, z.ZodDate, z.ZodString]>>>, Date, string | Date | null | undefined>;
    }, z.ZodString, "strip">>, "many">>, BibEntry[], z.objectInputType<{
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
        }>, BibCore, {
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
        }>, "many">>, ReadingList[], {
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
        }>, "many">>, Topic[], {
            value: string;
        }[] | undefined>;
        subjects: z.ZodEffects<z.ZodDefault<z.ZodArray<z.ZodObject<{
            value: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            value: string;
        }, {
            value: string;
        }>, "many">>, Subject[], {
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
        }, string>]>, "many">>, Tag[], (string | {
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
        }>, "many">, CitationGroup[], {
            entries: any[];
            name: string;
            description?: string | null | undefined;
        }[]>;
        added: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodUnion<[z.ZodString, z.ZodDate, z.ZodString]>>>, Date, string | Date | null | undefined>;
    }, z.ZodString, "strip">[] | undefined>;
    noteType: z.ZodBranded<z.ZodEffects<z.ZodString, string, string>, "DocTypeName">;
    toDo: z.ZodDefault<z.ZodArray<z.ZodObject<{
        id: z.ZodNumber;
        createdAt: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodUnion<[z.ZodString, z.ZodDate]>>>, Date, string | Date | null | undefined>;
        task: z.ZodString;
        dueAt: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodUnion<[z.ZodString, z.ZodDate]>>>, Date, string | Date | null | undefined>;
        details: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        associatedNotes: z.ZodDefault<z.ZodArray<z.ZodAny, "many">>;
        tags: z.ZodDefault<z.ZodArray<z.ZodUnion<[z.ZodObject<{
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
        }, string>]>, "many">>;
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
        status: z.ZodNativeEnum<{
            ToDo: "ToDo";
            In_Progress: "In_Progress";
            Backlog: "Backlog";
            Cancelled: "Cancelled";
            Done: "Done";
            Future: "Future";
        }>;
        priority: z.ZodNumber;
        parent: z.ZodDefault<z.ZodOptional<z.ZodNullable<z.ZodAny>>>;
        child: z.ZodDefault<z.ZodOptional<z.ZodNullable<z.ZodAny>>>;
        ToDoList: z.ZodObject<{
            id: z.ZodNumber;
            label: z.ZodString;
            createdAt: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodUnion<[z.ZodString, z.ZodDate]>>>, Date, string | Date | null | undefined>;
            lastUpdate: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodUnion<[z.ZodString, z.ZodDate]>>>, Date, string | Date | null | undefined>;
            tasks: z.ZodDefault<z.ZodArray<z.ZodAny, "many">>;
            topics: z.ZodEffects<z.ZodDefault<z.ZodArray<z.ZodObject<{
                value: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                value: string;
            }, {
                value: string;
            }>, "many">>, Topic[], {
                value: string;
            }[] | undefined>;
            subjects: z.ZodEffects<z.ZodDefault<z.ZodArray<z.ZodObject<{
                value: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                value: string;
            }, {
                value: string;
            }>, "many">>, Subject[], {
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
            }, string>]>, "many">>, Tag[], (string | {
                value: string;
                kanbanId?: number | null | undefined;
            })[] | undefined>;
        }, "strip", z.ZodTypeAny, {
            tags: Tag[];
            id: number;
            label: string;
            topics: Topic[];
            subjects: Subject[];
            createdAt: Date;
            lastUpdate: Date;
            tasks: any[];
        }, {
            id: number;
            label: string;
            createdAt?: string | Date | null | undefined;
            lastUpdate?: string | Date | null | undefined;
            tasks?: any[] | undefined;
            topics?: {
                value: string;
            }[] | undefined;
            subjects?: {
                value: string;
            }[] | undefined;
            tags?: (string | {
                value: string;
                kanbanId?: number | null | undefined;
            })[] | undefined;
        }>;
        toDoListId: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        status: "ToDo" | "In_Progress" | "Backlog" | "Cancelled" | "Done" | "Future";
        tags: {
            value: string;
            kanbanId: number | null;
        }[];
        id: number;
        ToDoList: {
            tags: Tag[];
            id: number;
            label: string;
            topics: Topic[];
            subjects: Subject[];
            createdAt: Date;
            lastUpdate: Date;
            tasks: any[];
        };
        category: "bug" | "research" | "work" | "priority" | "feature" | "documentation" | "online" | "urgent" | "gym" | "freetime" | "study" | "paper";
        bookmarked: boolean;
        topics: {
            value: string;
        }[];
        subjects: {
            value: string;
        }[];
        createdAt: Date;
        task: string;
        dueAt: Date;
        priority: number;
        associatedNotes: any[];
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
            createdAt?: string | Date | null | undefined;
            lastUpdate?: string | Date | null | undefined;
            tasks?: any[] | undefined;
            topics?: {
                value: string;
            }[] | undefined;
            subjects?: {
                value: string;
            }[] | undefined;
            tags?: (string | {
                value: string;
                kanbanId?: number | null | undefined;
            })[] | undefined;
        };
        category: "bug" | "research" | "work" | "priority" | "feature" | "documentation" | "online" | "urgent" | "gym" | "freetime" | "study" | "paper";
        task: string;
        priority: number;
        toDoListId: number;
        createdAt?: string | Date | null | undefined;
        dueAt?: string | Date | null | undefined;
        details?: string | null | undefined;
        associatedNotes?: any[] | undefined;
        tags?: (string | {
            value: string;
            kanbanId?: number | null | undefined;
        })[] | undefined;
        topics?: {
            value: string;
        }[] | undefined;
        subjects?: {
            value: string;
        }[] | undefined;
        parentId?: number | null | undefined;
        bookmarked?: boolean | undefined;
        parent?: any;
        child?: any;
    }>, "many">>;
    bookmarked: z.ZodDefault<z.ZodBoolean>;
    isProtected: z.ZodDefault<z.ZodOptional<z.ZodNullable<z.ZodBoolean>>>;
    latexTitle: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    rootRelativePath: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodString>>, string | null | undefined, string | null | undefined>;
    content: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    formatted: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    summary: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    citationsListOrder: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
    importantValues: z.ZodDefault<z.ZodArray<z.ZodNumber, "many">>;
    sequentialIndex: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    floatImages: z.ZodDefault<z.ZodBoolean>;
    remoteUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    trackRemote: z.ZodDefault<z.ZodBoolean>;
    outgoingQuickLinks: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
    firstSync: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodUnion<[z.ZodEffects<z.ZodString, Date, string>, z.ZodDate]>>>, Date | null | undefined, string | Date | null | undefined>;
    lastSync: z.ZodOptional<z.ZodNullable<z.ZodUnion<[z.ZodEffects<z.ZodString, Date, string>, z.ZodDate]>>>;
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
    raw: z.ZodString;
    quickLinkId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    equationIds: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
    noLog: z.ZodDefault<z.ZodBoolean>;
    saveFormatted: z.ZodDefault<z.ZodBoolean>;
    topics: z.ZodEffects<z.ZodDefault<z.ZodArray<z.ZodObject<{
        value: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        value: string;
    }, {
        value: string;
    }>, "many">>, Topic[], {
        value: string;
    }[] | undefined>;
    subjects: z.ZodEffects<z.ZodDefault<z.ZodArray<z.ZodObject<{
        value: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        value: string;
    }, {
        value: string;
    }>, "many">>, Subject[], {
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
    }, string>]>, "many">>, Tag[], (string | {
        value: string;
        kanbanId?: number | null | undefined;
    })[] | undefined>;
}, "rootRelativePath" | "raw">, "strip", z.ZodTypeAny, {
    raw: string;
    rootRelativePath?: string | null | undefined;
}, {
    raw: string;
    rootRelativePath?: string | null | undefined;
}>;
export declare const mdxNoteIntriguingValSummaryPropsSchema: z.ZodObject<Omit<{
    id: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
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
        }>, BibCore, {
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
        }>, "many">>, ReadingList[], {
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
        }>, "many">>, Topic[], {
            value: string;
        }[] | undefined>;
        subjects: z.ZodEffects<z.ZodDefault<z.ZodArray<z.ZodObject<{
            value: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            value: string;
        }, {
            value: string;
        }>, "many">>, Subject[], {
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
        }, string>]>, "many">>, Tag[], (string | {
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
        }>, "many">, CitationGroup[], {
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
        }>, BibCore, {
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
        }>, "many">>, ReadingList[], {
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
        }>, "many">>, Topic[], {
            value: string;
        }[] | undefined>;
        subjects: z.ZodEffects<z.ZodDefault<z.ZodArray<z.ZodObject<{
            value: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            value: string;
        }, {
            value: string;
        }>, "many">>, Subject[], {
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
        }, string>]>, "many">>, Tag[], (string | {
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
        }>, "many">, CitationGroup[], {
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
        }>, BibCore, {
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
        }>, "many">>, ReadingList[], {
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
        }>, "many">>, Topic[], {
            value: string;
        }[] | undefined>;
        subjects: z.ZodEffects<z.ZodDefault<z.ZodArray<z.ZodObject<{
            value: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            value: string;
        }, {
            value: string;
        }>, "many">>, Subject[], {
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
        }, string>]>, "many">>, Tag[], (string | {
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
        }>, "many">, CitationGroup[], {
            entries: any[];
            name: string;
            description?: string | null | undefined;
        }[]>;
        added: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodUnion<[z.ZodString, z.ZodDate, z.ZodString]>>>, Date, string | Date | null | undefined>;
    }, z.ZodString, "strip">>, "many">>, BibEntry[], z.objectInputType<{
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
        }>, BibCore, {
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
        }>, "many">>, ReadingList[], {
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
        }>, "many">>, Topic[], {
            value: string;
        }[] | undefined>;
        subjects: z.ZodEffects<z.ZodDefault<z.ZodArray<z.ZodObject<{
            value: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            value: string;
        }, {
            value: string;
        }>, "many">>, Subject[], {
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
        }, string>]>, "many">>, Tag[], (string | {
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
        }>, "many">, CitationGroup[], {
            entries: any[];
            name: string;
            description?: string | null | undefined;
        }[]>;
        added: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodUnion<[z.ZodString, z.ZodDate, z.ZodString]>>>, Date, string | Date | null | undefined>;
    }, z.ZodString, "strip">[] | undefined>;
    noteType: z.ZodBranded<z.ZodEffects<z.ZodString, string, string>, "DocTypeName">;
    toDo: z.ZodDefault<z.ZodArray<z.ZodObject<{
        id: z.ZodNumber;
        createdAt: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodUnion<[z.ZodString, z.ZodDate]>>>, Date, string | Date | null | undefined>;
        task: z.ZodString;
        dueAt: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodUnion<[z.ZodString, z.ZodDate]>>>, Date, string | Date | null | undefined>;
        details: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        associatedNotes: z.ZodDefault<z.ZodArray<z.ZodAny, "many">>;
        tags: z.ZodDefault<z.ZodArray<z.ZodUnion<[z.ZodObject<{
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
        }, string>]>, "many">>;
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
        status: z.ZodNativeEnum<{
            ToDo: "ToDo";
            In_Progress: "In_Progress";
            Backlog: "Backlog";
            Cancelled: "Cancelled";
            Done: "Done";
            Future: "Future";
        }>;
        priority: z.ZodNumber;
        parent: z.ZodDefault<z.ZodOptional<z.ZodNullable<z.ZodAny>>>;
        child: z.ZodDefault<z.ZodOptional<z.ZodNullable<z.ZodAny>>>;
        ToDoList: z.ZodObject<{
            id: z.ZodNumber;
            label: z.ZodString;
            createdAt: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodUnion<[z.ZodString, z.ZodDate]>>>, Date, string | Date | null | undefined>;
            lastUpdate: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodUnion<[z.ZodString, z.ZodDate]>>>, Date, string | Date | null | undefined>;
            tasks: z.ZodDefault<z.ZodArray<z.ZodAny, "many">>;
            topics: z.ZodEffects<z.ZodDefault<z.ZodArray<z.ZodObject<{
                value: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                value: string;
            }, {
                value: string;
            }>, "many">>, Topic[], {
                value: string;
            }[] | undefined>;
            subjects: z.ZodEffects<z.ZodDefault<z.ZodArray<z.ZodObject<{
                value: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                value: string;
            }, {
                value: string;
            }>, "many">>, Subject[], {
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
            }, string>]>, "many">>, Tag[], (string | {
                value: string;
                kanbanId?: number | null | undefined;
            })[] | undefined>;
        }, "strip", z.ZodTypeAny, {
            tags: Tag[];
            id: number;
            label: string;
            topics: Topic[];
            subjects: Subject[];
            createdAt: Date;
            lastUpdate: Date;
            tasks: any[];
        }, {
            id: number;
            label: string;
            createdAt?: string | Date | null | undefined;
            lastUpdate?: string | Date | null | undefined;
            tasks?: any[] | undefined;
            topics?: {
                value: string;
            }[] | undefined;
            subjects?: {
                value: string;
            }[] | undefined;
            tags?: (string | {
                value: string;
                kanbanId?: number | null | undefined;
            })[] | undefined;
        }>;
        toDoListId: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        status: "ToDo" | "In_Progress" | "Backlog" | "Cancelled" | "Done" | "Future";
        tags: {
            value: string;
            kanbanId: number | null;
        }[];
        id: number;
        ToDoList: {
            tags: Tag[];
            id: number;
            label: string;
            topics: Topic[];
            subjects: Subject[];
            createdAt: Date;
            lastUpdate: Date;
            tasks: any[];
        };
        category: "bug" | "research" | "work" | "priority" | "feature" | "documentation" | "online" | "urgent" | "gym" | "freetime" | "study" | "paper";
        bookmarked: boolean;
        topics: {
            value: string;
        }[];
        subjects: {
            value: string;
        }[];
        createdAt: Date;
        task: string;
        dueAt: Date;
        priority: number;
        associatedNotes: any[];
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
            createdAt?: string | Date | null | undefined;
            lastUpdate?: string | Date | null | undefined;
            tasks?: any[] | undefined;
            topics?: {
                value: string;
            }[] | undefined;
            subjects?: {
                value: string;
            }[] | undefined;
            tags?: (string | {
                value: string;
                kanbanId?: number | null | undefined;
            })[] | undefined;
        };
        category: "bug" | "research" | "work" | "priority" | "feature" | "documentation" | "online" | "urgent" | "gym" | "freetime" | "study" | "paper";
        task: string;
        priority: number;
        toDoListId: number;
        createdAt?: string | Date | null | undefined;
        dueAt?: string | Date | null | undefined;
        details?: string | null | undefined;
        associatedNotes?: any[] | undefined;
        tags?: (string | {
            value: string;
            kanbanId?: number | null | undefined;
        })[] | undefined;
        topics?: {
            value: string;
        }[] | undefined;
        subjects?: {
            value: string;
        }[] | undefined;
        parentId?: number | null | undefined;
        bookmarked?: boolean | undefined;
        parent?: any;
        child?: any;
    }>, "many">>;
    bookmarked: z.ZodDefault<z.ZodBoolean>;
    isProtected: z.ZodDefault<z.ZodOptional<z.ZodNullable<z.ZodBoolean>>>;
    latexTitle: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    rootRelativePath: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodString>>, string | null | undefined, string | null | undefined>;
    content: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    formatted: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    summary: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    citationsListOrder: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
    importantValues: z.ZodDefault<z.ZodArray<z.ZodNumber, "many">>;
    sequentialIndex: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    floatImages: z.ZodDefault<z.ZodBoolean>;
    remoteUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    trackRemote: z.ZodDefault<z.ZodBoolean>;
    outgoingQuickLinks: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
    firstSync: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodUnion<[z.ZodEffects<z.ZodString, Date, string>, z.ZodDate]>>>, Date | null | undefined, string | Date | null | undefined>;
    lastSync: z.ZodOptional<z.ZodNullable<z.ZodUnion<[z.ZodEffects<z.ZodString, Date, string>, z.ZodDate]>>>;
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
    raw: z.ZodString;
    quickLinkId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    equationIds: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
    noLog: z.ZodDefault<z.ZodBoolean>;
    saveFormatted: z.ZodDefault<z.ZodBoolean>;
    topics: z.ZodEffects<z.ZodDefault<z.ZodArray<z.ZodObject<{
        value: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        value: string;
    }, {
        value: string;
    }>, "many">>, Topic[], {
        value: string;
    }[] | undefined>;
    subjects: z.ZodEffects<z.ZodDefault<z.ZodArray<z.ZodObject<{
        value: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        value: string;
    }, {
        value: string;
    }>, "many">>, Subject[], {
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
    }, string>]>, "many">>, Tag[], (string | {
        value: string;
        kanbanId?: number | null | undefined;
    })[] | undefined>;
}, "tags" | "citations" | "isProtected" | "latexTitle" | "formatted" | "citationsListOrder" | "sequentialIndex" | "floatImages" | "remoteUrl" | "trackRemote" | "outgoingQuickLinks" | "topics" | "sequentialKey" | "subjects" | "raw" | "quickLinkId" | "equationIds" | "noLog" | "saveFormatted">, "strip", z.ZodTypeAny, {
    noteType: string & z.BRAND<"DocTypeName">;
    toDo: {
        status: "ToDo" | "In_Progress" | "Backlog" | "Cancelled" | "Done" | "Future";
        tags: {
            value: string;
            kanbanId: number | null;
        }[];
        id: number;
        ToDoList: {
            tags: Tag[];
            id: number;
            label: string;
            topics: Topic[];
            subjects: Subject[];
            createdAt: Date;
            lastUpdate: Date;
            tasks: any[];
        };
        category: "bug" | "research" | "work" | "priority" | "feature" | "documentation" | "online" | "urgent" | "gym" | "freetime" | "study" | "paper";
        bookmarked: boolean;
        topics: {
            value: string;
        }[];
        subjects: {
            value: string;
        }[];
        createdAt: Date;
        task: string;
        dueAt: Date;
        priority: number;
        associatedNotes: any[];
        toDoListId: number;
        details?: string | null | undefined;
        parentId?: number | null | undefined;
        parent?: any;
        child?: any;
    }[];
    bookmarked: boolean;
    importantValues: number[];
    id?: number | null | undefined;
    href?: string | null | undefined;
    title?: string | null | undefined;
    rootRelativePath?: string | null | undefined;
    content?: string | null | undefined;
    summary?: string | null | undefined;
    firstSync?: Date | null | undefined;
    lastSync?: Date | null | undefined;
    sequentialList?: {
        MdxNote: any[];
        Ipynb: any[];
        sequentialKey: string;
    } | undefined;
}, {
    noteType: string;
    id?: number | null | undefined;
    href?: string | null | undefined;
    title?: string | null | undefined;
    toDo?: {
        status: "ToDo" | "In_Progress" | "Backlog" | "Cancelled" | "Done" | "Future";
        id: number;
        ToDoList: {
            id: number;
            label: string;
            createdAt?: string | Date | null | undefined;
            lastUpdate?: string | Date | null | undefined;
            tasks?: any[] | undefined;
            topics?: {
                value: string;
            }[] | undefined;
            subjects?: {
                value: string;
            }[] | undefined;
            tags?: (string | {
                value: string;
                kanbanId?: number | null | undefined;
            })[] | undefined;
        };
        category: "bug" | "research" | "work" | "priority" | "feature" | "documentation" | "online" | "urgent" | "gym" | "freetime" | "study" | "paper";
        task: string;
        priority: number;
        toDoListId: number;
        createdAt?: string | Date | null | undefined;
        dueAt?: string | Date | null | undefined;
        details?: string | null | undefined;
        associatedNotes?: any[] | undefined;
        tags?: (string | {
            value: string;
            kanbanId?: number | null | undefined;
        })[] | undefined;
        topics?: {
            value: string;
        }[] | undefined;
        subjects?: {
            value: string;
        }[] | undefined;
        parentId?: number | null | undefined;
        bookmarked?: boolean | undefined;
        parent?: any;
        child?: any;
    }[] | undefined;
    bookmarked?: boolean | undefined;
    rootRelativePath?: string | null | undefined;
    content?: string | null | undefined;
    summary?: string | null | undefined;
    importantValues?: number[] | undefined;
    firstSync?: string | Date | null | undefined;
    lastSync?: string | Date | null | undefined;
    sequentialList?: {
        sequentialKey: string;
        MdxNote?: any[] | undefined;
        Ipynb?: any[] | undefined;
    } | undefined;
}>;
export type FromMdxStringOpts = z.input<typeof fromMdxStringOptSchema>;
export type MdxNotePropsInput = z.input<typeof mdxNotePropsSchema>;
export type MdxNotePropsOutput = z.output<typeof mdxNotePropsSchema>;
export type MdxNoteSummaryInput = z.input<typeof mdxNoteSummaryPropSchema>;
export type MdxNoteSummaryOutput = z.output<typeof mdxNoteSummaryPropSchema>;
export type MdxNoteFromStringInput = z.input<typeof mdxNoteFromStringPropsSchema>;
export type MdxNoteFromStringOutput = z.output<typeof mdxNoteFromStringPropsSchema>;
export type MdxNoteIntriguingValSummaryInput = z.input<typeof mdxNoteIntriguingValSummaryPropsSchema>;
export type MdxNoteIntriguingValSummaryOutput = z.output<typeof mdxNoteIntriguingValSummaryPropsSchema>;
//# sourceMappingURL=general.d.ts.map