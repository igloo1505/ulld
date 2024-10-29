import { autoWrapMath } from "@ulld/utilities/latexUtils"
import type { AnyMdxContentProps, ParsedMdxContentProps } from "./typeUtils"

const getFormattedContent = <T extends AnyMdxContentProps>(p: T, inline: boolean): string => {
    if (!p.content) {
        return ""
    }
    return p.autoWrap ? autoWrapMath(p.content, !inline) : p.content
}

export const parseMdxContentProps = <T extends AnyMdxContentProps>(p: T): ParsedMdxContentProps<T> => {
    const inline = p.display !== true
    return {
        ...p,
        displayType: inline ? "inline" as const : "display" as const,
        content: getFormattedContent(p, inline)
    }
}
