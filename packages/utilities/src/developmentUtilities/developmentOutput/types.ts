interface UniversalOutputOptions {
    /** Insert a string in the line before the declaration. Useful for things like es-lint comments. */
   prefixFirstLine?: string
}


export type ArrayToEnumStringProps<T extends object> = {
      enumName: string
} & UniversalOutputOptions & (
{
    arr: T[],
    getKey: (val: T) => string
} | {
    arr: string[]
    getKey: never
}
)

export interface DevelopmentOutputFunctionPropMap<T extends object = object>  {
    arrayToEnum: (props: ArrayToEnumStringProps<T>) => string
}

export interface GenFileContentItem<K extends keyof DevelopmentOutputFunctionPropMap = keyof DevelopmentOutputFunctionPropMap>  {
   fnc: K
   props: Parameters<DevelopmentOutputFunctionPropMap[K]>
}
