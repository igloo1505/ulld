import { ParsedAppConfig } from "#/lib/config/zod/secondaryConfigParse/main";
import { mdxNoteWithParsedLatex, mdxNoteZodObject } from "#/lib/parsing/serverOnly/mdxNoteWithLatexServerSideZodObject";
import { AutoSettingWithRegex } from "#/trpc/routers/sync";
import { MdxNoteWithAll } from "#/types/prisma/bib/returnTypes";
import { zodLatexFieldSchema } from "#/utils/mdx/zodMdxParser";
import type { MdxNote } from "../MdxNote";
import { NoteBase } from "../NoteBase";
import type { PrismaMdxRelationshipProtocol } from "../type";
import type { Prisma, MdxNote as PrismaMdxNote } from "@prisma/client"
import { z } from 'zod'

export type PrismaMdxNoteWithKeys = PrismaMdxNote & { subject: undefined, definitions?: undefined, topics: undefined, citations: undefined, tags: undefined, isProtected?: string }

const pickFields = {
    subject: true as true,
    noteType: true as true,
    id: true as true,
    title: true as true,
    latexTitle: true as true,
    lastSync: true as true,
    tags: true as true,
    rootRelativePath: true as true,
    summary: true as true,
    href: true as true,
    firstSync: true as true,
    sequentialIndex: true as true,
    bookmarked: true as true
}

const extendsFields = {
    citations: z.object({ id: z.string() }).array().default([])
}

const requiredFields: Record<string, true> = {
    href: true
}

export const prismaMdxNoteSummaryZodSchema = mdxNoteWithParsedLatex.pick(pickFields).extend(extendsFields).required(requiredFields)

export const prismaMdxNoteSummaryZodSchemaPreOutput = mdxNoteZodObject.pick(pickFields).extend(extendsFields).required(requiredFields)

export type PrismaMdxNoteSummary = z.input<typeof prismaMdxNoteSummaryZodSchema>
export type PrismaMdxNoteSummaryOutput = z.output<typeof prismaMdxNoteSummaryZodSchema>



export abstract class MdxNoteProtocol extends NoteBase implements PrismaMdxRelationshipProtocol<Prisma.MdxNoteDelegate>  {
    constructor(rootRelativePath: string, extension: string) {
        super(rootRelativePath, extension)
    }
    abstract createArgs(autoSettings: AutoSettingWithRegex[], config: ParsedAppConfig): Prisma.MdxNoteCreateArgs | undefined
    abstract upsertArgs(autoSettings: AutoSettingWithRegex[], config: ParsedAppConfig): Prisma.MdxNoteUpsertArgs | undefined
    abstract connectOrCreateArgs(autoSettings: AutoSettingWithRegex[], config: ParsedAppConfig): Prisma.MdxNoteCreateOrConnectWithoutTagsInput | undefined
    abstract whereUniqueInput(config: ParsedAppConfig): Prisma.MdxNoteWhereUniqueInput
    abstract createInput(autoSettings: AutoSettingWithRegex[], config: ParsedAppConfig): Prisma.MdxNoteCreateInput | undefined
    abstract whereInput(config: ParsedAppConfig): Prisma.MdxNoteWhereInput
    static fromPrisma: (item: NonNullable<MdxNoteWithAll> | PrismaMdxNoteWithKeys, config: ParsedAppConfig) => MdxNote
}
