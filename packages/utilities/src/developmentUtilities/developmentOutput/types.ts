import { InternalAppName } from "@ulld/types";

interface UniversalOutputOptions {
    /** Insert a string in the line before the declaration. Useful for things like es-lint comments. */
    prefixFirstLine?: string;
}

export interface DevelopmentOutputConstructorProps {
    initialContent?: string;
}

export type StringifiableTypes = object | string | number;

export interface CommonWrapperProps {
    prefixFirstLine?: string;
}

export interface SourceLocationCommentProps {
    sourceFile: string;
}

export interface GeneratedFromScriptCommentProps {
    scriptName: string
    package: InternalAppName | "buildUtils"
}

export interface CommonVariableDeclarationFields extends CommonWrapperProps {
    varName: string;
    typescriptType: string;
    /** Export the generated variable */
    exportVar?: boolean;
    /** Default export the generated variable */
    defaultExportVar?: boolean;
}

export interface CommonArrayMethods<T> {
    arr: T[];
    getKey: (val: T) => string;
    /** Don't forget to quote value if it's intended to be a string */
    getValue: (val: T) => string;
}

export interface ParsedArrayValues {
    value: string
    key?: string
}


export interface GetRelativeImportStringProps {
    outputFile: string;
    importSourceFile: string;
    importName: string;
    defaultExport?: boolean;
    typeImport?: boolean;
}

export interface RawContentProps {
    content: string;
}

export interface ArrayToTypescriptArrayProps<T>
    extends CommonVariableDeclarationFields,
    CommonArrayMethods<T> {
    readOnly?: boolean;
    castToType?: string;
}

export interface SeparatedInputTypes<T> {
    prefix: T[];
    body: T[];
    suffix: T[];
    locationComments: T[];
}

export interface ArrayToTypescriptObjectProps<T>
    extends CommonVariableDeclarationFields,
    CommonArrayMethods<T> {
    arr: T[];
    importString?: GetRelativeImportStringProps;
}

export interface ArrayToEnumStringProps<T> extends CommonArrayMethods<T>, CommonVariableDeclarationFields {}

export interface ArrayToTypeUnionProps<T>
    extends Omit<CommonVariableDeclarationFields, "typescriptType">,
    Omit<CommonArrayMethods<T>, "getKey"> { }

export interface DevelopmentOutputFunctionPropMap<T = unknown> {
    arrayToEnum: (props: ArrayToEnumStringProps<T>) => string;
    arrayToTypescriptRecord: (props: ArrayToTypescriptObjectProps<T>) => string;
    arrayToTypeUnion: (props: ArrayToTypeUnionProps<T>) => string;
    rawFileHeader: (props: RawContentProps) => string;
    rawInlineContent: (props: RawContentProps) => string;
    rawPrefixContent: (props: RawContentProps) => string;
    rawSuffixContent: (props: RawContentProps) => string;
    arrayToTypescriptArray: (props: ArrayToTypescriptArrayProps<T>) => string;
    sourceLocationComment: (props: SourceLocationCommentProps) => void;
    generatedFromScriptComment: (props: GeneratedFromScriptCommentProps) => string;
}

export interface GenFileContentItem<
    K extends
    keyof DevelopmentOutputFunctionPropMap = keyof DevelopmentOutputFunctionPropMap,
    J = unknown,
> {
    fnc: K;
    props: Parameters<DevelopmentOutputFunctionPropMap<J>[K]>[0];
}

export type OutputToFileOpts = {
    filePath: string;
} & (
        | {
            useUlldDevRootEnvVar: true;
            isAbsolutePath?: never;
        }
        | {
            useUlldDevRootEnvVar?: never;
            isAbsolutePath: true;
        }
    );
