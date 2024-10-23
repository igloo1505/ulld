import { AppConfigSchemaOutput } from "@ulld/configschema/types";
import type * as ShikiExports from "@shikijs/transformers"


export const highlightTransformerMap: Record<
    keyof AppConfigSchemaOutput["code"]["syntaxHighlighting"]["transformers"],
    keyof typeof ShikiExports
> = {
    regexHighlight: "transformerMetaWordHighlight",
    lineHighlight: "transformerMetaHighlight",
    lineFocus: "transformerNotationFocus",
    lineErrorLevel: "transformerNotationErrorLevel",
    lineDiff: "transformerNotationDiff",
};
