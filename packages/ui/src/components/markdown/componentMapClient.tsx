import { A } from "./A";
import { Li } from "./Li";
import { Hr } from "./hr";
import { Ol } from "./ol";
import { TableWrapper } from "./tables/wrapper";
import Ul from "./ul";
import type { MDXComponents } from 'mdx/types'
import { MdxInput } from "./input";
import { ConditionalComponentProps, getConditionalComponents } from "./conditionalComponents";
import BlockQuote from "./text/blockQuote";
import { Highlight } from "./emeddedComponents/Hl";
import { ImgComponent } from "./img";
import { InternalMermaid } from "./emeddedComponents/diagrams/mermaid";
import { H1, H2, H3, H4, H5, H6 } from "../text/heading";
import { getConditionalClientComponents } from "./getConditionalClientComponents";


export const components: MDXComponents = {
    h1: H1,
    h2: H2,
    h3: H3,
    h4: H4,
    h5: H5,
    h6: H6,
    hr: Hr,
    a: A,
    ol: Ol,
    ul: Ul,
    li: Li,
    input: MdxInput,
    table: TableWrapper,
    blockquote: BlockQuote,
    mark: Highlight,
    img: ImgComponent,
    Mermaid: InternalMermaid,
}


export const getClientComponentMap = (content: string, opts?: ConditionalComponentProps) => {
     if (opts?.requiredOnly) {
        return components
     }
     return {
         ...components,
         ...getConditionalClientComponents(content, {
             all: false,
             ...opts
         })
     }
}

