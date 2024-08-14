import { AppConfigSchemaOutput } from "@ulld/configschema/types";

export const highlightTransformerMap: Record<
    keyof AppConfigSchemaOutput["code"]["syntaxHighlighting"]["transformers"],
    string
> = {
    regexHighlight: "transformerMetaWordHighlight",
    lineHighlight: "transformerMetaHighlight",
    lineFocus: "transformerNotationFocus",
    lineErrorLevel: "transformerNotationErrorLevel",
    lineDiff: "transformerNotationDiff",
};
