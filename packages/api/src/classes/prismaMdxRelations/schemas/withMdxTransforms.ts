import {z} from 'zod'
import { mdxNoteSummaryPropSchema } from './general'
import { zodMdxFieldSchema } from '@ulld/parsers/latex/zodLatexFieldSchema'

export const mdxNoteSummaryWithMdxTransforms = mdxNoteSummaryPropSchema.innerType().omit({
    title: true
}).merge(z.object({
    title: zodMdxFieldSchema,
}))


export type MdxNoteSummaryOutputWithMdxTransforms = z.output<typeof mdxNoteSummaryWithMdxTransforms>
