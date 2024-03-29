import {z} from 'zod'


export const ipynbPropsSchema = z.object({
    filepath: z.string(),
    content: z.string().describe("Stringified json content")
})


export const ipynbRemotePropsSchema = ipynbPropsSchema.omit({filepath: true}).extend({
    remoteUrl: z.string(),
    filepath: z.string().nullable().default(null)
})


export type IpynbPropsOutput = z.output<typeof ipynbPropsSchema>
export type IpynbPropsInput = z.input<typeof ipynbPropsSchema>

export type IpynbRemotePropsOutput = z.output<typeof ipynbRemotePropsSchema>
export type IpynbRemotePropsInput = z.input<typeof ipynbRemotePropsSchema>
