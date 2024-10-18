export type ArrayToEnumStringProps<T extends object> = {
    enumName: string;
} & ({
    arr: T[];
    getKey: (val: T) => string;
} | {
    arr: string[];
    getKey: never;
});
export interface DevelopmentOutputFunctionPropMap<T extends object = object> {
    arrayToEnum: (props: ArrayToEnumStringProps<T>) => string;
}
export interface GenFileContentItem<K extends keyof DevelopmentOutputFunctionPropMap = keyof DevelopmentOutputFunctionPropMap> {
    fnc: K;
    props: Parameters<DevelopmentOutputFunctionPropMap[K]>;
}
//# sourceMappingURL=types.d.ts.map