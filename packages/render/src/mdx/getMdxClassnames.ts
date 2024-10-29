import { clsx } from 'clsx'
import type { AnyMdxContentProps } from './typeUtils'


export const getMdxClassnames = (d: AnyMdxContentProps): string => {
    return clsx("mdx @container/mdx", d.full !== false && "w-full min-h-fit", d.large && "text-xl", d.xl && "text-2xl", d.small && "text-sm", d.hideMathjaxLabels && "hideMathjaxEquationLabels", d.className, d.notProse && "not-prose", d.prose && "prose-all")
}

