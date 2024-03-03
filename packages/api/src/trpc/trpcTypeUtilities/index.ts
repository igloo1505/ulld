import { serverClient } from "../serverClient"

export type MdxNoteWithAll = Awaited<ReturnType<typeof serverClient.mdxNote.getRemoteMdx | typeof serverClient.mdxNote.getRemoteMdxFromPathname>>
export type ReadingListReturned = Awaited<ReturnType<typeof serverClient.readingList.getReadingListContent>>
export type CitationGroupReturned = Awaited<ReturnType<typeof serverClient.bibliography.getCitationGroup>>
export type BibEntryReturned = Awaited<ReturnType<typeof serverClient.bibliography.getBibEntry>>
export type BibReturnType = Awaited<ReturnType<typeof serverClient.bibliography.getBib>>
export type FsMdxReturnType = Awaited<ReturnType<typeof serverClient.mdxNote.getFsMdx>>
export type MdxNoteSummary = Awaited<ReturnType<typeof serverClient.universalNotes.getSummaryOfAllNotes>>[number]
