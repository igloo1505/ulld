import clsx from 'clsx'
import { MdxContentSERVERProps } from './mdxContentSERVER'


export const getMdxClassnames = (d: MdxContentSERVERProps) => {
    return clsx("mdx", d.large && "text-xl", d.xl && "text-2xl", d.small && "text-sm")
}

