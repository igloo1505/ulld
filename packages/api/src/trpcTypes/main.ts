import { ParserKey } from "@ulld/configschema/developer";
import { FrontMatterType } from "@ulld/types";
import { UnifiedMdxParserParams } from "../individualTypesForDocumentation/parser/unifiedMdxParserParams";
import { serverClient } from "../trpc/serverClient"


export type MdxNoteWithAll = Awaited<ReturnType<typeof serverClient.mdx.getDatabaseMdx | typeof serverClient.mdx.getDatabaseMdxFromPathname>>
export type ReadingListReturned = Awaited<ReturnType<typeof serverClient.readingList.getReadingListContent>>
export type CitationGroupReturned = Awaited<ReturnType<typeof serverClient.bibliography.getCitationGroup>>
export type BibEntryReturned = Awaited<ReturnType<typeof serverClient.bibliography.getBibEntry>>
export type BibReturnType = Awaited<ReturnType<typeof serverClient.bibliography.getBib>>
export type FsMdxReturnType = Awaited<ReturnType<typeof serverClient.mdx.getFsMdx>>
export type MdxNoteSummary = Awaited<ReturnType<typeof serverClient.universalNotes.getSummaryOfAllNotes>>[number]

export type RetrievedSettings = Awaited<ReturnType<typeof serverClient.settings.getSettings>>

export type MdxParserReturnType<T extends object = {}> = {
  content: string;
  data?: FrontMatterType & T;
};

// TODO: Remove this. It was moved to the schemas package.
export type UnifiedMdxParser<ExtendedFrontMatterType extends object = {}> = (
  parserProps: UnifiedMdxParserParams,
) => Promise<MdxParserReturnType<ExtendedFrontMatterType>>;

type UnifiedParserMap<ExtendedFrontMatterType extends object = {}> = {
  mdx: UnifiedMdxParser<ExtendedFrontMatterType>;
};

export type UnifiedParserOfType<
  T extends ParserKey,
  ExtendedFrontMatterType extends object = {},
> = UnifiedParserMap<ExtendedFrontMatterType>[T];
