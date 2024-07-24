import { Route } from 'next';
import { z } from 'zod';
import { MdxNote } from '../../classes/prismaMdxRelations/MdxNote';
import { WithoutFunctions } from "@ulld/utilities/types/utilityTypes";
export type MdxNoteWithoutFunctions = WithoutFunctions<InstanceType<typeof MdxNote>>;
export declare const readingListZodObject: z.ZodObject<{
    name: z.ZodString;
    description: z.ZodNullable<z.ZodString>;
    createdAt: z.ZodOptional<z.ZodEffects<z.ZodNullable<z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodDate]>>>, any, string | number | Date | null | undefined>> | z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodDate]>, Date, string | number | Date>>;
    lastUpdate: z.ZodEffects<z.ZodNullable<z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodDate]>>>, any, string | number | Date | null | undefined> | z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodDate]>, Date, string | number | Date>;
}, "strip", z.ZodTypeAny, {
    name: string;
    description: string | null;
    createdAt?: any;
    lastUpdate?: any;
}, {
    name: string;
    description: string | null;
    createdAt?: string | number | Date | null | undefined;
    lastUpdate?: string | number | Date | null | undefined;
}>;
export declare const zodCitationGroupSchema: z.ZodObject<{
    name: z.ZodString;
    description: z.ZodNullable<z.ZodOptional<z.ZodString>>;
}, "strip", z.ZodTypeAny, {
    name: string;
    description?: string | null | undefined;
}, {
    name: string;
    description?: string | null | undefined;
}>;
declare const bibEntryZodObject: z.ZodObject<{
    id: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    htmlCitation: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    BibId: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
    readingList: z.ZodDefault<z.ZodArray<z.ZodObject<{
        name: z.ZodString;
        description: z.ZodNullable<z.ZodString>;
        createdAt: z.ZodOptional<z.ZodEffects<z.ZodNullable<z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodDate]>>>, any, string | number | Date | null | undefined>> | z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodDate]>, Date, string | number | Date>>;
        lastUpdate: z.ZodEffects<z.ZodNullable<z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodDate]>>>, any, string | number | Date | null | undefined> | z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodDate]>, Date, string | number | Date>;
    }, "strip", z.ZodTypeAny, {
        name: string;
        description: string | null;
        createdAt?: any;
        lastUpdate?: any;
    }, {
        name: string;
        description: string | null;
        createdAt?: string | number | Date | null | undefined;
        lastUpdate?: string | number | Date | null | undefined;
    }>, "many">>;
    OwnWork: z.ZodEffects<z.ZodDefault<z.ZodNullable<z.ZodOptional<z.ZodUnion<[z.ZodBoolean, z.ZodString]>>>>, boolean, string | boolean | null | undefined>;
    ColleaguesWork: z.ZodEffects<z.ZodDefault<z.ZodNullable<z.ZodOptional<z.ZodUnion<[z.ZodBoolean, z.ZodString]>>>>, boolean, string | boolean | null | undefined>;
    read: z.ZodEffects<z.ZodDefault<z.ZodNullable<z.ZodOptional<z.ZodUnion<[z.ZodBoolean, z.ZodString]>>>>, boolean, string | boolean | null | undefined>;
    PdfPath: z.ZodEffects<z.ZodNullable<z.ZodOptional<z.ZodString>>, Route<RouteInferType>, string | null | undefined>;
    address: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    annote: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    author: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    booktitle: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    chapter: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    crossref: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    doi: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    edition: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    editor: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    email: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    howpublished: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    institution: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    journal: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    month: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    note: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    number: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    organization: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    pages: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    publisher: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    school: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    series: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    title: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    volume: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    year: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    numpages: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    url: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    issue: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    issn: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    abstract: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    urldate: z.ZodEffects<z.ZodNullable<z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodDate]>>>, string | undefined, string | Date | null | undefined>;
    keywords: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    copyright: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    citationGroups: z.ZodDefault<z.ZodOptional<z.ZodArray<z.ZodObject<{
        name: z.ZodString;
        description: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    }, "strip", z.ZodTypeAny, {
        name: string;
        description?: string | null | undefined;
    }, {
        name: string;
        description?: string | null | undefined;
    }>, "many">>>;
    tags: z.ZodArray<z.ZodUnion<[z.ZodObject<{
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
    }, string>]>, "many">;
    tempPageIndex: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
}, "strip", z.ZodTypeAny, {
    readingList: {
        name: string;
        description: string | null;
        createdAt?: any;
        lastUpdate?: any;
    }[];
    tags: {
        value: string;
        kanbanId: number | null;
    }[];
    OwnWork: boolean;
    ColleaguesWork: boolean;
    read: boolean;
    PdfPath: string;
    citationGroups: {
        name: string;
        description?: string | null | undefined;
    }[];
    id?: string | null | undefined;
    htmlCitation?: string | null | undefined;
    BibId?: number | null | undefined;
    address?: string | null | undefined;
    annote?: string | null | undefined;
    author?: string | null | undefined;
    booktitle?: string | null | undefined;
    chapter?: string | null | undefined;
    crossref?: string | null | undefined;
    doi?: string | null | undefined;
    edition?: string | null | undefined;
    editor?: string | null | undefined;
    email?: string | null | undefined;
    howpublished?: string | null | undefined;
    institution?: string | null | undefined;
    journal?: string | null | undefined;
    month?: string | null | undefined;
    note?: string | null | undefined;
    number?: string | null | undefined;
    organization?: string | null | undefined;
    pages?: string | null | undefined;
    publisher?: string | null | undefined;
    school?: string | null | undefined;
    series?: string | null | undefined;
    title?: string | null | undefined;
    volume?: string | null | undefined;
    type?: string | null | undefined;
    year?: string | null | undefined;
    numpages?: string | null | undefined;
    url?: string | null | undefined;
    issue?: string | null | undefined;
    issn?: string | null | undefined;
    abstract?: string | null | undefined;
    urldate?: string | undefined;
    keywords?: string | null | undefined;
    copyright?: string | null | undefined;
    tempPageIndex?: number | null | undefined;
}, {
    tags: (string | {
        value: string;
        kanbanId?: number | null | undefined;
    })[];
    id?: string | null | undefined;
    htmlCitation?: string | null | undefined;
    BibId?: number | null | undefined;
    readingList?: {
        name: string;
        description: string | null;
        createdAt?: string | number | Date | null | undefined;
        lastUpdate?: string | number | Date | null | undefined;
    }[] | undefined;
    OwnWork?: string | boolean | null | undefined;
    ColleaguesWork?: string | boolean | null | undefined;
    read?: string | boolean | null | undefined;
    PdfPath?: string | null | undefined;
    address?: string | null | undefined;
    annote?: string | null | undefined;
    author?: string | null | undefined;
    booktitle?: string | null | undefined;
    chapter?: string | null | undefined;
    crossref?: string | null | undefined;
    doi?: string | null | undefined;
    edition?: string | null | undefined;
    editor?: string | null | undefined;
    email?: string | null | undefined;
    howpublished?: string | null | undefined;
    institution?: string | null | undefined;
    journal?: string | null | undefined;
    month?: string | null | undefined;
    note?: string | null | undefined;
    number?: string | null | undefined;
    organization?: string | null | undefined;
    pages?: string | null | undefined;
    publisher?: string | null | undefined;
    school?: string | null | undefined;
    series?: string | null | undefined;
    title?: string | null | undefined;
    volume?: string | null | undefined;
    type?: string | null | undefined;
    year?: string | null | undefined;
    numpages?: string | null | undefined;
    url?: string | null | undefined;
    issue?: string | null | undefined;
    issn?: string | null | undefined;
    abstract?: string | null | undefined;
    urldate?: string | Date | null | undefined;
    keywords?: string | null | undefined;
    copyright?: string | null | undefined;
    citationGroups?: {
        name: string;
        description?: string | null | undefined;
    }[] | undefined;
    tempPageIndex?: number | null | undefined;
}>;
export declare const mdxNoteZodObject: z.ZodObject<{
    id: z.ZodOptional<z.ZodNumber>;
    title: z.ZodString;
    latexTitle: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    summary: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    raw: z.ZodString;
    floatImages: z.ZodEffects<z.ZodDefault<z.ZodNullable<z.ZodOptional<z.ZodUnion<[z.ZodBoolean, z.ZodString]>>>>, boolean, string | boolean | null | undefined>;
    citations: z.ZodDefault<z.ZodOptional<z.ZodArray<z.ZodObject<{
        id: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        htmlCitation: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        BibId: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
        readingList: z.ZodDefault<z.ZodArray<z.ZodObject<{
            name: z.ZodString;
            description: z.ZodNullable<z.ZodString>;
            createdAt: z.ZodOptional<z.ZodEffects<z.ZodNullable<z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodDate]>>>, any, string | number | Date | null | undefined>> | z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodDate]>, Date, string | number | Date>>;
            lastUpdate: z.ZodEffects<z.ZodNullable<z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodDate]>>>, any, string | number | Date | null | undefined> | z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodDate]>, Date, string | number | Date>;
        }, "strip", z.ZodTypeAny, {
            name: string;
            description: string | null;
            createdAt?: any;
            lastUpdate?: any;
        }, {
            name: string;
            description: string | null;
            createdAt?: string | number | Date | null | undefined;
            lastUpdate?: string | number | Date | null | undefined;
        }>, "many">>;
        OwnWork: z.ZodEffects<z.ZodDefault<z.ZodNullable<z.ZodOptional<z.ZodUnion<[z.ZodBoolean, z.ZodString]>>>>, boolean, string | boolean | null | undefined>;
        ColleaguesWork: z.ZodEffects<z.ZodDefault<z.ZodNullable<z.ZodOptional<z.ZodUnion<[z.ZodBoolean, z.ZodString]>>>>, boolean, string | boolean | null | undefined>;
        read: z.ZodEffects<z.ZodDefault<z.ZodNullable<z.ZodOptional<z.ZodUnion<[z.ZodBoolean, z.ZodString]>>>>, boolean, string | boolean | null | undefined>;
        PdfPath: z.ZodEffects<z.ZodNullable<z.ZodOptional<z.ZodString>>, Route<RouteInferType>, string | null | undefined>;
        address: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        annote: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        author: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        booktitle: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        chapter: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        crossref: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        doi: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        edition: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        editor: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        email: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        howpublished: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        institution: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        journal: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        month: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        note: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        number: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        organization: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        pages: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        publisher: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        school: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        series: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        title: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        volume: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        year: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        numpages: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        url: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        issue: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        issn: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        abstract: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        urldate: z.ZodEffects<z.ZodNullable<z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodDate]>>>, string | undefined, string | Date | null | undefined>;
        keywords: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        copyright: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        citationGroups: z.ZodDefault<z.ZodOptional<z.ZodArray<z.ZodObject<{
            name: z.ZodString;
            description: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        }, "strip", z.ZodTypeAny, {
            name: string;
            description?: string | null | undefined;
        }, {
            name: string;
            description?: string | null | undefined;
        }>, "many">>>;
        tags: z.ZodArray<z.ZodUnion<[z.ZodObject<{
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
        }, string>]>, "many">;
        tempPageIndex: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
    }, "strip", z.ZodTypeAny, {
        readingList: {
            name: string;
            description: string | null;
            createdAt?: any;
            lastUpdate?: any;
        }[];
        tags: {
            value: string;
            kanbanId: number | null;
        }[];
        OwnWork: boolean;
        ColleaguesWork: boolean;
        read: boolean;
        PdfPath: string;
        citationGroups: {
            name: string;
            description?: string | null | undefined;
        }[];
        id?: string | null | undefined;
        htmlCitation?: string | null | undefined;
        BibId?: number | null | undefined;
        address?: string | null | undefined;
        annote?: string | null | undefined;
        author?: string | null | undefined;
        booktitle?: string | null | undefined;
        chapter?: string | null | undefined;
        crossref?: string | null | undefined;
        doi?: string | null | undefined;
        edition?: string | null | undefined;
        editor?: string | null | undefined;
        email?: string | null | undefined;
        howpublished?: string | null | undefined;
        institution?: string | null | undefined;
        journal?: string | null | undefined;
        month?: string | null | undefined;
        note?: string | null | undefined;
        number?: string | null | undefined;
        organization?: string | null | undefined;
        pages?: string | null | undefined;
        publisher?: string | null | undefined;
        school?: string | null | undefined;
        series?: string | null | undefined;
        title?: string | null | undefined;
        volume?: string | null | undefined;
        type?: string | null | undefined;
        year?: string | null | undefined;
        numpages?: string | null | undefined;
        url?: string | null | undefined;
        issue?: string | null | undefined;
        issn?: string | null | undefined;
        abstract?: string | null | undefined;
        urldate?: string | undefined;
        keywords?: string | null | undefined;
        copyright?: string | null | undefined;
        tempPageIndex?: number | null | undefined;
    }, {
        tags: (string | {
            value: string;
            kanbanId?: number | null | undefined;
        })[];
        id?: string | null | undefined;
        htmlCitation?: string | null | undefined;
        BibId?: number | null | undefined;
        readingList?: {
            name: string;
            description: string | null;
            createdAt?: string | number | Date | null | undefined;
            lastUpdate?: string | number | Date | null | undefined;
        }[] | undefined;
        OwnWork?: string | boolean | null | undefined;
        ColleaguesWork?: string | boolean | null | undefined;
        read?: string | boolean | null | undefined;
        PdfPath?: string | null | undefined;
        address?: string | null | undefined;
        annote?: string | null | undefined;
        author?: string | null | undefined;
        booktitle?: string | null | undefined;
        chapter?: string | null | undefined;
        crossref?: string | null | undefined;
        doi?: string | null | undefined;
        edition?: string | null | undefined;
        editor?: string | null | undefined;
        email?: string | null | undefined;
        howpublished?: string | null | undefined;
        institution?: string | null | undefined;
        journal?: string | null | undefined;
        month?: string | null | undefined;
        note?: string | null | undefined;
        number?: string | null | undefined;
        organization?: string | null | undefined;
        pages?: string | null | undefined;
        publisher?: string | null | undefined;
        school?: string | null | undefined;
        series?: string | null | undefined;
        title?: string | null | undefined;
        volume?: string | null | undefined;
        type?: string | null | undefined;
        year?: string | null | undefined;
        numpages?: string | null | undefined;
        url?: string | null | undefined;
        issue?: string | null | undefined;
        issn?: string | null | undefined;
        abstract?: string | null | undefined;
        urldate?: string | Date | null | undefined;
        keywords?: string | null | undefined;
        copyright?: string | null | undefined;
        citationGroups?: {
            name: string;
            description?: string | null | undefined;
        }[] | undefined;
        tempPageIndex?: number | null | undefined;
    }>, "many">>>;
    topics: z.ZodOptional<z.ZodArray<z.ZodObject<{
        value: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        value: string;
    }, {
        value: string;
    }>, "many">>;
    subjects: z.ZodOptional<z.ZodArray<z.ZodObject<{
        value: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        value: string;
    }, {
        value: string;
    }>, "many">>;
    definitions: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        label: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        content: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        mdxNoteId: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
    }, "strip", z.ZodTypeAny, {
        id: string;
        label?: string | null | undefined;
        content?: string | null | undefined;
        mdxNoteId?: number | null | undefined;
    }, {
        id: string;
        label?: string | null | undefined;
        content?: string | null | undefined;
        mdxNoteId?: number | null | undefined;
    }>, "many">;
    tags: z.ZodDefault<z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodObject<{
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
    }, string>]>, "many">>>;
    quickLinkId: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    href: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    citationsListOrder: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    outgoingQuickLinks: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    equationIds: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    ftExtension: z.ZodUnion<[z.ZodUnion<[z.ZodLiteral<".mdx">, z.ZodLiteral<".md">]>, z.ZodLiteral<".ipynb">]>;
    isProtected: z.ZodEffects<z.ZodDefault<z.ZodNullable<z.ZodOptional<z.ZodUnion<[z.ZodBoolean, z.ZodString]>>>>, boolean, string | boolean | null | undefined>;
    sequentialKey: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    sequentialIndex: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
    frontMatter: z.ZodOptional<z.ZodObject<Record<"tags" | "id" | "title" | "summary" | "importantValues" | "topics" | "sequentialKey" | "subjects" | "created" | "updated" | "sequential" | "tableStyles", z.ZodTypeAny>, "strip", z.ZodTypeAny, {
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
    }, {
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
    }>>;
    remoteUrl: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    trackRemote: z.ZodEffects<z.ZodDefault<z.ZodNullable<z.ZodOptional<z.ZodUnion<[z.ZodBoolean, z.ZodString]>>>>, boolean, string | boolean | null | undefined>;
    noteType: z.ZodBranded<z.ZodEffects<z.ZodString, string, string>, "DocTypeName">;
    bookmarked: z.ZodEffects<z.ZodDefault<z.ZodNullable<z.ZodOptional<z.ZodUnion<[z.ZodBoolean, z.ZodString]>>>>, boolean, string | boolean | null | undefined>;
    lastSync: z.ZodEffects<z.ZodNullable<z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodDate]>>>, any, string | number | Date | null | undefined> | z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodDate]>, Date, string | number | Date>;
    firstSync: z.ZodEffects<z.ZodNullable<z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodDate]>>>, any, string | number | Date | null | undefined> | z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodDate]>, Date, string | number | Date>;
    rootRelativePath: z.ZodString;
    formatted: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    importantValues: z.ZodDefault<z.ZodArray<z.ZodNumber, "many">>;
    saveFormatted: z.ZodEffects<z.ZodDefault<z.ZodNullable<z.ZodOptional<z.ZodUnion<[z.ZodBoolean, z.ZodString]>>>>, boolean, string | boolean | null | undefined>;
    imageSrc: z.ZodNullable<z.ZodOptional<z.ZodString>>;
}, "strip", z.ZodTypeAny, {
    tags: {
        value: string;
        kanbanId: number | null;
    }[];
    title: string;
    citations: {
        readingList: {
            name: string;
            description: string | null;
            createdAt?: any;
            lastUpdate?: any;
        }[];
        tags: {
            value: string;
            kanbanId: number | null;
        }[];
        OwnWork: boolean;
        ColleaguesWork: boolean;
        read: boolean;
        PdfPath: string;
        citationGroups: {
            name: string;
            description?: string | null | undefined;
        }[];
        id?: string | null | undefined;
        htmlCitation?: string | null | undefined;
        BibId?: number | null | undefined;
        address?: string | null | undefined;
        annote?: string | null | undefined;
        author?: string | null | undefined;
        booktitle?: string | null | undefined;
        chapter?: string | null | undefined;
        crossref?: string | null | undefined;
        doi?: string | null | undefined;
        edition?: string | null | undefined;
        editor?: string | null | undefined;
        email?: string | null | undefined;
        howpublished?: string | null | undefined;
        institution?: string | null | undefined;
        journal?: string | null | undefined;
        month?: string | null | undefined;
        note?: string | null | undefined;
        number?: string | null | undefined;
        organization?: string | null | undefined;
        pages?: string | null | undefined;
        publisher?: string | null | undefined;
        school?: string | null | undefined;
        series?: string | null | undefined;
        title?: string | null | undefined;
        volume?: string | null | undefined;
        type?: string | null | undefined;
        year?: string | null | undefined;
        numpages?: string | null | undefined;
        url?: string | null | undefined;
        issue?: string | null | undefined;
        issn?: string | null | undefined;
        abstract?: string | null | undefined;
        urldate?: string | undefined;
        keywords?: string | null | undefined;
        copyright?: string | null | undefined;
        tempPageIndex?: number | null | undefined;
    }[];
    noteType: string & z.BRAND<"DocTypeName">;
    bookmarked: boolean;
    isProtected: boolean;
    rootRelativePath: string;
    importantValues: number[];
    floatImages: boolean;
    trackRemote: boolean;
    definitions: {
        id: string;
        label?: string | null | undefined;
        content?: string | null | undefined;
        mdxNoteId?: number | null | undefined;
    }[];
    raw: string;
    saveFormatted: boolean;
    ftExtension: ".mdx" | ".md" | ".ipynb";
    id?: number | undefined;
    latexTitle?: string | null | undefined;
    summary?: string | null | undefined;
    topics?: {
        value: string;
    }[] | undefined;
    subjects?: {
        value: string;
    }[] | undefined;
    quickLinkId?: string | null | undefined;
    href?: string | null | undefined;
    citationsListOrder?: string[] | undefined;
    outgoingQuickLinks?: string[] | undefined;
    equationIds?: string[] | undefined;
    sequentialKey?: string | null | undefined;
    sequentialIndex?: number | null | undefined;
    frontMatter?: {
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
    } | undefined;
    remoteUrl?: string | null | undefined;
    lastSync?: any;
    firstSync?: any;
    formatted?: string | null | undefined;
    imageSrc?: string | null | undefined;
}, {
    title: string;
    noteType: string;
    rootRelativePath: string;
    definitions: {
        id: string;
        label?: string | null | undefined;
        content?: string | null | undefined;
        mdxNoteId?: number | null | undefined;
    }[];
    raw: string;
    ftExtension: ".mdx" | ".md" | ".ipynb";
    id?: number | undefined;
    latexTitle?: string | null | undefined;
    summary?: string | null | undefined;
    floatImages?: string | boolean | null | undefined;
    citations?: {
        tags: (string | {
            value: string;
            kanbanId?: number | null | undefined;
        })[];
        id?: string | null | undefined;
        htmlCitation?: string | null | undefined;
        BibId?: number | null | undefined;
        readingList?: {
            name: string;
            description: string | null;
            createdAt?: string | number | Date | null | undefined;
            lastUpdate?: string | number | Date | null | undefined;
        }[] | undefined;
        OwnWork?: string | boolean | null | undefined;
        ColleaguesWork?: string | boolean | null | undefined;
        read?: string | boolean | null | undefined;
        PdfPath?: string | null | undefined;
        address?: string | null | undefined;
        annote?: string | null | undefined;
        author?: string | null | undefined;
        booktitle?: string | null | undefined;
        chapter?: string | null | undefined;
        crossref?: string | null | undefined;
        doi?: string | null | undefined;
        edition?: string | null | undefined;
        editor?: string | null | undefined;
        email?: string | null | undefined;
        howpublished?: string | null | undefined;
        institution?: string | null | undefined;
        journal?: string | null | undefined;
        month?: string | null | undefined;
        note?: string | null | undefined;
        number?: string | null | undefined;
        organization?: string | null | undefined;
        pages?: string | null | undefined;
        publisher?: string | null | undefined;
        school?: string | null | undefined;
        series?: string | null | undefined;
        title?: string | null | undefined;
        volume?: string | null | undefined;
        type?: string | null | undefined;
        year?: string | null | undefined;
        numpages?: string | null | undefined;
        url?: string | null | undefined;
        issue?: string | null | undefined;
        issn?: string | null | undefined;
        abstract?: string | null | undefined;
        urldate?: string | Date | null | undefined;
        keywords?: string | null | undefined;
        copyright?: string | null | undefined;
        citationGroups?: {
            name: string;
            description?: string | null | undefined;
        }[] | undefined;
        tempPageIndex?: number | null | undefined;
    }[] | undefined;
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
    quickLinkId?: string | null | undefined;
    href?: string | null | undefined;
    citationsListOrder?: string[] | undefined;
    outgoingQuickLinks?: string[] | undefined;
    equationIds?: string[] | undefined;
    isProtected?: string | boolean | null | undefined;
    sequentialKey?: string | null | undefined;
    sequentialIndex?: number | null | undefined;
    frontMatter?: {
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
    } | undefined;
    remoteUrl?: string | null | undefined;
    trackRemote?: string | boolean | null | undefined;
    bookmarked?: string | boolean | null | undefined;
    lastSync?: string | number | Date | null | undefined;
    firstSync?: string | number | Date | null | undefined;
    formatted?: string | null | undefined;
    importantValues?: number[] | undefined;
    saveFormatted?: string | boolean | null | undefined;
    imageSrc?: string | null | undefined;
}>;
export declare const mdxNoteWithParsedLatex: z.ZodObject<{
    tags: z.ZodDefault<z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodObject<{
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
    }, string>]>, "many">>>;
    id: z.ZodOptional<z.ZodNumber>;
    href: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    citations: z.ZodDefault<z.ZodOptional<z.ZodArray<z.ZodObject<{
        id: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        htmlCitation: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        BibId: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
        readingList: z.ZodDefault<z.ZodArray<z.ZodObject<{
            name: z.ZodString;
            description: z.ZodNullable<z.ZodString>;
            createdAt: z.ZodOptional<z.ZodEffects<z.ZodNullable<z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodDate]>>>, any, string | number | Date | null | undefined>> | z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodDate]>, Date, string | number | Date>>;
            lastUpdate: z.ZodEffects<z.ZodNullable<z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodDate]>>>, any, string | number | Date | null | undefined> | z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodDate]>, Date, string | number | Date>;
        }, "strip", z.ZodTypeAny, {
            name: string;
            description: string | null;
            createdAt?: any;
            lastUpdate?: any;
        }, {
            name: string;
            description: string | null;
            createdAt?: string | number | Date | null | undefined;
            lastUpdate?: string | number | Date | null | undefined;
        }>, "many">>;
        OwnWork: z.ZodEffects<z.ZodDefault<z.ZodNullable<z.ZodOptional<z.ZodUnion<[z.ZodBoolean, z.ZodString]>>>>, boolean, string | boolean | null | undefined>;
        ColleaguesWork: z.ZodEffects<z.ZodDefault<z.ZodNullable<z.ZodOptional<z.ZodUnion<[z.ZodBoolean, z.ZodString]>>>>, boolean, string | boolean | null | undefined>;
        read: z.ZodEffects<z.ZodDefault<z.ZodNullable<z.ZodOptional<z.ZodUnion<[z.ZodBoolean, z.ZodString]>>>>, boolean, string | boolean | null | undefined>;
        PdfPath: z.ZodEffects<z.ZodNullable<z.ZodOptional<z.ZodString>>, Route<RouteInferType>, string | null | undefined>;
        address: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        annote: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        author: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        booktitle: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        chapter: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        crossref: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        doi: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        edition: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        editor: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        email: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        howpublished: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        institution: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        journal: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        month: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        note: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        number: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        organization: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        pages: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        publisher: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        school: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        series: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        title: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        volume: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        year: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        numpages: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        url: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        issue: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        issn: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        abstract: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        urldate: z.ZodEffects<z.ZodNullable<z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodDate]>>>, string | undefined, string | Date | null | undefined>;
        keywords: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        copyright: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        citationGroups: z.ZodDefault<z.ZodOptional<z.ZodArray<z.ZodObject<{
            name: z.ZodString;
            description: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        }, "strip", z.ZodTypeAny, {
            name: string;
            description?: string | null | undefined;
        }, {
            name: string;
            description?: string | null | undefined;
        }>, "many">>>;
        tags: z.ZodArray<z.ZodUnion<[z.ZodObject<{
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
        }, string>]>, "many">;
        tempPageIndex: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
    }, "strip", z.ZodTypeAny, {
        readingList: {
            name: string;
            description: string | null;
            createdAt?: any;
            lastUpdate?: any;
        }[];
        tags: {
            value: string;
            kanbanId: number | null;
        }[];
        OwnWork: boolean;
        ColleaguesWork: boolean;
        read: boolean;
        PdfPath: string;
        citationGroups: {
            name: string;
            description?: string | null | undefined;
        }[];
        id?: string | null | undefined;
        htmlCitation?: string | null | undefined;
        BibId?: number | null | undefined;
        address?: string | null | undefined;
        annote?: string | null | undefined;
        author?: string | null | undefined;
        booktitle?: string | null | undefined;
        chapter?: string | null | undefined;
        crossref?: string | null | undefined;
        doi?: string | null | undefined;
        edition?: string | null | undefined;
        editor?: string | null | undefined;
        email?: string | null | undefined;
        howpublished?: string | null | undefined;
        institution?: string | null | undefined;
        journal?: string | null | undefined;
        month?: string | null | undefined;
        note?: string | null | undefined;
        number?: string | null | undefined;
        organization?: string | null | undefined;
        pages?: string | null | undefined;
        publisher?: string | null | undefined;
        school?: string | null | undefined;
        series?: string | null | undefined;
        title?: string | null | undefined;
        volume?: string | null | undefined;
        type?: string | null | undefined;
        year?: string | null | undefined;
        numpages?: string | null | undefined;
        url?: string | null | undefined;
        issue?: string | null | undefined;
        issn?: string | null | undefined;
        abstract?: string | null | undefined;
        urldate?: string | undefined;
        keywords?: string | null | undefined;
        copyright?: string | null | undefined;
        tempPageIndex?: number | null | undefined;
    }, {
        tags: (string | {
            value: string;
            kanbanId?: number | null | undefined;
        })[];
        id?: string | null | undefined;
        htmlCitation?: string | null | undefined;
        BibId?: number | null | undefined;
        readingList?: {
            name: string;
            description: string | null;
            createdAt?: string | number | Date | null | undefined;
            lastUpdate?: string | number | Date | null | undefined;
        }[] | undefined;
        OwnWork?: string | boolean | null | undefined;
        ColleaguesWork?: string | boolean | null | undefined;
        read?: string | boolean | null | undefined;
        PdfPath?: string | null | undefined;
        address?: string | null | undefined;
        annote?: string | null | undefined;
        author?: string | null | undefined;
        booktitle?: string | null | undefined;
        chapter?: string | null | undefined;
        crossref?: string | null | undefined;
        doi?: string | null | undefined;
        edition?: string | null | undefined;
        editor?: string | null | undefined;
        email?: string | null | undefined;
        howpublished?: string | null | undefined;
        institution?: string | null | undefined;
        journal?: string | null | undefined;
        month?: string | null | undefined;
        note?: string | null | undefined;
        number?: string | null | undefined;
        organization?: string | null | undefined;
        pages?: string | null | undefined;
        publisher?: string | null | undefined;
        school?: string | null | undefined;
        series?: string | null | undefined;
        title?: string | null | undefined;
        volume?: string | null | undefined;
        type?: string | null | undefined;
        year?: string | null | undefined;
        numpages?: string | null | undefined;
        url?: string | null | undefined;
        issue?: string | null | undefined;
        issn?: string | null | undefined;
        abstract?: string | null | undefined;
        urldate?: string | Date | null | undefined;
        keywords?: string | null | undefined;
        copyright?: string | null | undefined;
        citationGroups?: {
            name: string;
            description?: string | null | undefined;
        }[] | undefined;
        tempPageIndex?: number | null | undefined;
    }>, "many">>>;
    noteType: z.ZodBranded<z.ZodEffects<z.ZodString, string, string>, "DocTypeName">;
    bookmarked: z.ZodEffects<z.ZodDefault<z.ZodNullable<z.ZodOptional<z.ZodUnion<[z.ZodBoolean, z.ZodString]>>>>, boolean, string | boolean | null | undefined>;
    isProtected: z.ZodEffects<z.ZodDefault<z.ZodNullable<z.ZodOptional<z.ZodUnion<[z.ZodBoolean, z.ZodString]>>>>, boolean, string | boolean | null | undefined>;
    latexTitle: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    rootRelativePath: z.ZodString;
    formatted: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    citationsListOrder: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    importantValues: z.ZodDefault<z.ZodArray<z.ZodNumber, "many">>;
    imageSrc: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    sequentialIndex: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
    floatImages: z.ZodEffects<z.ZodDefault<z.ZodNullable<z.ZodOptional<z.ZodUnion<[z.ZodBoolean, z.ZodString]>>>>, boolean, string | boolean | null | undefined>;
    remoteUrl: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    trackRemote: z.ZodEffects<z.ZodDefault<z.ZodNullable<z.ZodOptional<z.ZodUnion<[z.ZodBoolean, z.ZodString]>>>>, boolean, string | boolean | null | undefined>;
    outgoingQuickLinks: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    firstSync: z.ZodEffects<z.ZodNullable<z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodDate]>>>, any, string | number | Date | null | undefined> | z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodDate]>, Date, string | number | Date>;
    lastSync: z.ZodEffects<z.ZodNullable<z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodDate]>>>, any, string | number | Date | null | undefined> | z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodDate]>, Date, string | number | Date>;
    topics: z.ZodOptional<z.ZodArray<z.ZodObject<{
        value: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        value: string;
    }, {
        value: string;
    }>, "many">>;
    definitions: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        label: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        content: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        mdxNoteId: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
    }, "strip", z.ZodTypeAny, {
        id: string;
        label?: string | null | undefined;
        content?: string | null | undefined;
        mdxNoteId?: number | null | undefined;
    }, {
        id: string;
        label?: string | null | undefined;
        content?: string | null | undefined;
        mdxNoteId?: number | null | undefined;
    }>, "many">;
    sequentialKey: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    subjects: z.ZodOptional<z.ZodArray<z.ZodObject<{
        value: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        value: string;
    }, {
        value: string;
    }>, "many">>;
    raw: z.ZodString;
    quickLinkId: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    equationIds: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    saveFormatted: z.ZodEffects<z.ZodDefault<z.ZodNullable<z.ZodOptional<z.ZodUnion<[z.ZodBoolean, z.ZodString]>>>>, boolean, string | boolean | null | undefined>;
    frontMatter: z.ZodOptional<z.ZodObject<Record<"tags" | "id" | "title" | "summary" | "importantValues" | "topics" | "sequentialKey" | "subjects" | "created" | "updated" | "sequential" | "tableStyles", z.ZodTypeAny>, "strip", z.ZodTypeAny, {
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
    }, {
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
    }>>;
    ftExtension: z.ZodUnion<[z.ZodUnion<[z.ZodLiteral<".mdx">, z.ZodLiteral<".md">]>, z.ZodLiteral<".ipynb">]>;
    title: z.ZodString;
    summary: z.ZodNullable<z.ZodOptional<z.ZodString>>;
}, "strip", z.ZodTypeAny, {
    tags: {
        value: string;
        kanbanId: number | null;
    }[];
    title: string;
    citations: {
        readingList: {
            name: string;
            description: string | null;
            createdAt?: any;
            lastUpdate?: any;
        }[];
        tags: {
            value: string;
            kanbanId: number | null;
        }[];
        OwnWork: boolean;
        ColleaguesWork: boolean;
        read: boolean;
        PdfPath: string;
        citationGroups: {
            name: string;
            description?: string | null | undefined;
        }[];
        id?: string | null | undefined;
        htmlCitation?: string | null | undefined;
        BibId?: number | null | undefined;
        address?: string | null | undefined;
        annote?: string | null | undefined;
        author?: string | null | undefined;
        booktitle?: string | null | undefined;
        chapter?: string | null | undefined;
        crossref?: string | null | undefined;
        doi?: string | null | undefined;
        edition?: string | null | undefined;
        editor?: string | null | undefined;
        email?: string | null | undefined;
        howpublished?: string | null | undefined;
        institution?: string | null | undefined;
        journal?: string | null | undefined;
        month?: string | null | undefined;
        note?: string | null | undefined;
        number?: string | null | undefined;
        organization?: string | null | undefined;
        pages?: string | null | undefined;
        publisher?: string | null | undefined;
        school?: string | null | undefined;
        series?: string | null | undefined;
        title?: string | null | undefined;
        volume?: string | null | undefined;
        type?: string | null | undefined;
        year?: string | null | undefined;
        numpages?: string | null | undefined;
        url?: string | null | undefined;
        issue?: string | null | undefined;
        issn?: string | null | undefined;
        abstract?: string | null | undefined;
        urldate?: string | undefined;
        keywords?: string | null | undefined;
        copyright?: string | null | undefined;
        tempPageIndex?: number | null | undefined;
    }[];
    noteType: string & z.BRAND<"DocTypeName">;
    bookmarked: boolean;
    isProtected: boolean;
    rootRelativePath: string;
    importantValues: number[];
    floatImages: boolean;
    trackRemote: boolean;
    definitions: {
        id: string;
        label?: string | null | undefined;
        content?: string | null | undefined;
        mdxNoteId?: number | null | undefined;
    }[];
    raw: string;
    saveFormatted: boolean;
    ftExtension: ".mdx" | ".md" | ".ipynb";
    id?: number | undefined;
    href?: string | null | undefined;
    latexTitle?: string | null | undefined;
    formatted?: string | null | undefined;
    citationsListOrder?: string[] | undefined;
    imageSrc?: string | null | undefined;
    sequentialIndex?: number | null | undefined;
    remoteUrl?: string | null | undefined;
    outgoingQuickLinks?: string[] | undefined;
    firstSync?: any;
    lastSync?: any;
    topics?: {
        value: string;
    }[] | undefined;
    sequentialKey?: string | null | undefined;
    subjects?: {
        value: string;
    }[] | undefined;
    quickLinkId?: string | null | undefined;
    equationIds?: string[] | undefined;
    frontMatter?: {
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
    } | undefined;
    summary?: string | null | undefined;
}, {
    title: string;
    noteType: string;
    rootRelativePath: string;
    definitions: {
        id: string;
        label?: string | null | undefined;
        content?: string | null | undefined;
        mdxNoteId?: number | null | undefined;
    }[];
    raw: string;
    ftExtension: ".mdx" | ".md" | ".ipynb";
    tags?: (string | {
        value: string;
        kanbanId?: number | null | undefined;
    })[] | undefined;
    id?: number | undefined;
    href?: string | null | undefined;
    citations?: {
        tags: (string | {
            value: string;
            kanbanId?: number | null | undefined;
        })[];
        id?: string | null | undefined;
        htmlCitation?: string | null | undefined;
        BibId?: number | null | undefined;
        readingList?: {
            name: string;
            description: string | null;
            createdAt?: string | number | Date | null | undefined;
            lastUpdate?: string | number | Date | null | undefined;
        }[] | undefined;
        OwnWork?: string | boolean | null | undefined;
        ColleaguesWork?: string | boolean | null | undefined;
        read?: string | boolean | null | undefined;
        PdfPath?: string | null | undefined;
        address?: string | null | undefined;
        annote?: string | null | undefined;
        author?: string | null | undefined;
        booktitle?: string | null | undefined;
        chapter?: string | null | undefined;
        crossref?: string | null | undefined;
        doi?: string | null | undefined;
        edition?: string | null | undefined;
        editor?: string | null | undefined;
        email?: string | null | undefined;
        howpublished?: string | null | undefined;
        institution?: string | null | undefined;
        journal?: string | null | undefined;
        month?: string | null | undefined;
        note?: string | null | undefined;
        number?: string | null | undefined;
        organization?: string | null | undefined;
        pages?: string | null | undefined;
        publisher?: string | null | undefined;
        school?: string | null | undefined;
        series?: string | null | undefined;
        title?: string | null | undefined;
        volume?: string | null | undefined;
        type?: string | null | undefined;
        year?: string | null | undefined;
        numpages?: string | null | undefined;
        url?: string | null | undefined;
        issue?: string | null | undefined;
        issn?: string | null | undefined;
        abstract?: string | null | undefined;
        urldate?: string | Date | null | undefined;
        keywords?: string | null | undefined;
        copyright?: string | null | undefined;
        citationGroups?: {
            name: string;
            description?: string | null | undefined;
        }[] | undefined;
        tempPageIndex?: number | null | undefined;
    }[] | undefined;
    bookmarked?: string | boolean | null | undefined;
    isProtected?: string | boolean | null | undefined;
    latexTitle?: string | null | undefined;
    formatted?: string | null | undefined;
    citationsListOrder?: string[] | undefined;
    importantValues?: number[] | undefined;
    imageSrc?: string | null | undefined;
    sequentialIndex?: number | null | undefined;
    floatImages?: string | boolean | null | undefined;
    remoteUrl?: string | null | undefined;
    trackRemote?: string | boolean | null | undefined;
    outgoingQuickLinks?: string[] | undefined;
    firstSync?: string | number | Date | null | undefined;
    lastSync?: string | number | Date | null | undefined;
    topics?: {
        value: string;
    }[] | undefined;
    sequentialKey?: string | null | undefined;
    subjects?: {
        value: string;
    }[] | undefined;
    quickLinkId?: string | null | undefined;
    equationIds?: string[] | undefined;
    saveFormatted?: string | boolean | null | undefined;
    frontMatter?: {
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
    } | undefined;
    summary?: string | null | undefined;
}>;
export type MdxNotePlainObject = z.input<typeof mdxNoteZodObject>;
export type ParsedMdxOutput = z.output<typeof mdxNoteWithParsedLatex>;
export type ParseMdxInput = z.input<typeof mdxNoteWithParsedLatex>;
export type BibEntryZodInput = z.input<typeof bibEntryZodObject>;
export {};
//# sourceMappingURL=parsing.d.ts.map