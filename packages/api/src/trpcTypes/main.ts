import { serverClient } from "../trpc/serverClient"

export type MdxNoteWithAll = Awaited<ReturnType<typeof serverClient.mdx.getRemoteMdx | typeof serverClient.mdx.getRemoteMdxFromPathname>>
export type ReadingListReturned = Awaited<ReturnType<typeof serverClient.readingList.getReadingListContent>>
export type CitationGroupReturned = Awaited<ReturnType<typeof serverClient.bibliography.getCitationGroup>>
export type BibEntryReturned = Awaited<ReturnType<typeof serverClient.bibliography.getBibEntry>>
export type BibReturnType = Awaited<ReturnType<typeof serverClient.bibliography.getBib>>
export type FsMdxReturnType = Awaited<ReturnType<typeof serverClient.mdx.getFsMdx>>
export type MdxNoteSummary = Awaited<ReturnType<typeof serverClient.universalNotes.getSummaryOfAllNotes>>[number]

export type RetrievedSettings = Awaited<ReturnType<typeof serverClient.settings.getSettings>>
