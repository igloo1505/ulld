import type { ParseMdxStringParams, ParseMdxStringOptions } from "@ulld/parsers"
import type { AdditionalComponents, IsNoConfigProps } from "@ulld/types"

export interface MdxContentSERVERProps extends IsNoConfigProps {
    id?: string
    bareAss?: boolean
    content?: string
    inline?: boolean
    /** w-full and min-h-fit */
    full?: boolean
    notProse?: boolean
    prose?: boolean
    parentId?: string
    className?: string
    hideMathjaxLabels?: boolean
    isMathOnly?: boolean
    autoWrap?: boolean
    display?: boolean
    small?: boolean
    large?: boolean
    xl?: boolean
    live?: boolean // Might not be using this. Double check later.
    applyMathContextMenu?: boolean
    components?: AdditionalComponents
    appConfig?: ParseMdxStringParams["appConfig"]
    parserOpts?: ParseMdxStringOptions
}


export type MdxContentRSCProps = Omit<MdxContentSERVERProps, "parserOpts">

export type AnyMdxContentProps = MdxContentSERVERProps | MdxContentRSCProps


export type ParsedMdxContentProps<T extends AnyMdxContentProps> = Omit<T, "content"> & {
    displayType: "inline" | "display"
    content: string
}
