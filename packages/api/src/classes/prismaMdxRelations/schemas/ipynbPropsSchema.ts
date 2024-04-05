import {z} from 'zod'
import { mdxNotePropsSchema } from './general'


export const ipynbPropsSchema = z.object({
    filepath: z.string(),
    content: z.string().describe("Stringified json content"),
}).merge(mdxNotePropsSchema.innerType().pick({
    rootRelativePath: true,
    isProtected: true,
    title: true,
    latexTitle: true,
    tags: true,
    topics: true,
    subjects: true,
    citations: true,
    citationsListOrder: true,
    href: true,
    outgoingQuickLinks: true,
    raw: true,
    sequentialList: true,
    sequentialKey: true,
    sequentialIndex: true,
    bookmarked: true,
    firstSync: true,
    lastSync: true,
    readingList: true
})).transform((a) => {
    return {
        ...a,
        raw: a.raw || a.content
    }
})


export const ipynbRemotePropsSchema = ipynbPropsSchema.innerType().omit({filepath: true}).extend({
    remoteUrl: z.string(),
    filepath: z.string().nullable().default(null)
})


export type IpynbPropsOutput = z.output<typeof ipynbPropsSchema>
export type IpynbPropsInput = z.input<typeof ipynbPropsSchema>

export type IpynbRemotePropsOutput = z.output<typeof ipynbRemotePropsSchema>
export type IpynbRemotePropsInput = z.input<typeof ipynbRemotePropsSchema>
