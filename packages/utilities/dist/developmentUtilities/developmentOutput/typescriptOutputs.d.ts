import { DevelopmentOutputUtils } from "./outputUtils";
import type { ArrayToEnumStringProps, ArrayToTypescriptArrayProps, ArrayToTypescriptObjectProps, ArrayToTypeUnionProps, DevelopmentOutputConstructorProps, DevelopmentOutputFunctionPropMap, RawContentProps, SourceLocationCommentProps, GeneratedFromScriptCommentProps } from "./types";
export declare class DevelopmentTypescriptOutputs extends DevelopmentOutputUtils implements DevelopmentOutputFunctionPropMap {
    constructor(props?: DevelopmentOutputConstructorProps);
    arrayToEnum<T>(props: ArrayToEnumStringProps<T>): string;
    arrayToTypeUnion<T>(props: ArrayToTypeUnionProps<T>): string;
    arrayToTypescriptRecord<T>(props: ArrayToTypescriptObjectProps<T>): string;
    rawInlineContent(props: RawContentProps): string;
    rawSuffixContent(props: RawContentProps): string;
    rawPrefixContent(props: RawContentProps): string;
    rawFileHeader(props: RawContentProps): string;
    sourceLocationComment(props: SourceLocationCommentProps): string;
    generatedFromScriptComment(props: GeneratedFromScriptCommentProps): string;
    arrayToTypescriptArray<T>(props: ArrayToTypescriptArrayProps<T>): string;
}
//# sourceMappingURL=typescriptOutputs.d.ts.map