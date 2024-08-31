import { ReadingList } from '@ulld/database/internalDatabaseTypes'
import dayjs from 'dayjs'
import { Route } from 'next'
import { z } from 'zod'
import { MdxNote } from '../../classes/prismaMdxRelations/MdxNote'
import { tagZodObject, topicZodObject, subjectZodObject } from '@ulld/configschema/configUtilityTypes/docTypes'
import { zodDocTypeInput } from '@ulld/configschema/zod/documentConfigSchema'
import { zodMdxFieldSchema } from '@ulld/parsers/latex/zodLatexFieldSchema'
import { zodCoerceToDate, zodOptStr, zodOptNum, zodOptBool } from '@ulld/utilities/schemas/utility'
import {zodFrontMatterObject} from "@ulld/state/classes/frontMatter/zodFrontMatterObject"
import {WithoutFunctions, ZodFriendly} from "@ulld/utilities/types/utilityTypes"
import { currentParsableExtensions } from '@ulld/configschema/zod/secondaryConfigParse/getParsableExtensions'



export type MdxNoteWithoutFunctions = WithoutFunctions<InstanceType<typeof MdxNote>>


type ZodMdxNoteFieldsType = ZodFriendly<Omit<MdxNoteWithoutFunctions, "noLog">>
export const readingListZodObject = z.object({
    name: z.string(),
    description: z.string().nullable(),
    createdAt: zodCoerceToDate(false).optional(),
    lastUpdate: zodCoerceToDate(false)
} satisfies ZodFriendly<ReadingList>)



export const zodCitationGroupSchema = z.object({
    name: z.string(),
    description: zodOptStr
})


const bibEntryFields = {
    id: zodOptStr,
    htmlCitation: zodOptStr,
    BibId: zodOptNum,
    readingList: readingListZodObject.array().default([]),
    OwnWork: zodOptBool(false),
    ColleaguesWork: zodOptBool(false),
    read: zodOptBool(false),
    PdfPath: zodOptStr.transform((a) => a as Route),
    address: zodOptStr,
    annote: zodOptStr,
    author: zodOptStr,
    booktitle: zodOptStr,
    chapter: zodOptStr,
    crossref: zodOptStr,
    doi: zodOptStr,
    edition: zodOptStr,
    editor: zodOptStr,
    email: z.string().email().optional().nullable(),
    howpublished: zodOptStr,
    institution: zodOptStr,
    journal: zodOptStr,
    month: zodOptStr,
    note: zodOptStr,
    number: zodOptStr,
    organization: zodOptStr,
    pages: zodOptStr,
    publisher: zodOptStr,
    school: zodOptStr,
    series: zodOptStr,
    title: zodOptStr,
    volume: zodOptStr,
    type: zodOptStr,
    year: zodOptStr,
    numpages: zodOptStr,
    url: zodOptStr,
    issue: zodOptStr,
    issn: zodOptStr,
    abstract: zodOptStr,
    urldate: z.union([z.string(), z.date()]).optional().nullable().transform((a) => {
        let d = dayjs(a)
        return d.isValid() ? d.format("MMM Do YYYY") : undefined
    }),
    keywords: zodOptStr,
    copyright: zodOptStr,
    citationGroups: zodCitationGroupSchema.array().optional().default([]),
    tags: tagZodObject.array(),
    tempPageIndex: zodOptNum,
} 



const bibEntryZodObject = z.object(bibEntryFields)


const definitionZodObject = z.object({
    id: z.string(),
    label: zodOptStr,
    content: zodOptStr,
    mdxNoteId: zodOptNum
})

const mdxNoteFields = {
    id: z.number().int().optional(),
    title: z.string(),
    latexTitle: zodOptStr,
    summary: zodOptStr,
    raw: z.string(),
    floatImages: zodOptBool(false),
    citations: bibEntryZodObject.array().optional().default([]),
    topics: topicZodObject.array().optional(),
    subjects: subjectZodObject.array().optional(),
    definitions: definitionZodObject.array(),
    tags: tagZodObject.array().optional().default([]),
    quickLinkId: zodOptStr,
    href: zodOptStr,
    citationsListOrder: z.string().array().optional(),
    outgoingQuickLinks: z.string().array().optional(),
    equationIds: z.string().array().optional(),
    ftExtension: currentParsableExtensions,
    isProtected: zodOptBool(false),
    sequentialKey: zodOptStr,
    sequentialIndex: z.coerce.number().optional().nullable(),
    frontMatter: zodFrontMatterObject.optional(),
    remoteUrl: z.string().url().optional().nullable(),
    trackRemote: zodOptBool(true),
    noteType: zodDocTypeInput,
    bookmarked: zodOptBool(false),
    lastSync: zodCoerceToDate(true),
    firstSync: zodCoerceToDate(true),
    rootRelativePath: z.string(),
    formatted: zodOptStr,
    importantValues: z.number().array().default([]),
    saveFormatted: zodOptBool(true),
    imageSrc: zodOptStr
} satisfies Omit<ZodMdxNoteFieldsType, "haveSetFrontMatter">


export const mdxNoteZodObject = z.object(mdxNoteFields)


export const mdxNoteWithParsedLatex = mdxNoteZodObject.extend({
    title: zodMdxFieldSchema,
    summary: zodMdxFieldSchema.optional().nullable()
})

export type MdxNotePlainObject = z.input<typeof mdxNoteZodObject>

export type ParsedMdxOutput = z.output<typeof mdxNoteWithParsedLatex>
export type ParseMdxInput = z.input<typeof mdxNoteWithParsedLatex>

export type BibEntryZodInput = z.input<typeof bibEntryZodObject>
