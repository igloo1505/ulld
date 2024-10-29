import type {
    DevelopmentOutputFunctionPropMap,
    SeparatedInputTypes,
} from "./types";

export const functionPlacementMap: Omit<
    SeparatedInputTypes<keyof DevelopmentOutputFunctionPropMap>,
    "body"
> = {
    prefix: ["rawFileHeader", "rawPrefixContent"],
    suffix: ["rawSuffixContent"],
    locationComments: ["sourceLocationComment", "generatedFromScriptComment"],
};
