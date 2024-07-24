// TODO: Make this the new source of truth for supported file types. This exists in far too many locations right now.
export const supportedFileTypes = [
    "mdx",
    "md",
    "pdf",
    "json",
    "tsv",
    "csv",
    "html"
] as const


export type SupportedFileType = typeof supportedFileTypes[number]
