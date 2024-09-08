import { Tag, Topic, Subject } from "@ulld/database/internalDatabaseTypes";
import { Row } from "@tanstack/react-table";
export declare class ArrayUtilities {
    constructor();
    static itemFromListWithLoop<T extends unknown>(list: T[], index: number): T;
    static listFromListWithLoop<T extends unknown>(list: T[], take: number): T[];
    static meshGrid<T>(N: number[], dimensions: number): T;
    static randomFromList<T extends unknown>(list: T[]): void;
    static compute1DIfNotNull(f: (n: number) => number, axisData: number[]): number[][];
    static generateData(func: (n: number) => number): [number, number][];
    static doesOverlap<T extends unknown>(a: Array<T>, b: Array<T>, caseInsensitive?: boolean): boolean;
    static containsAll<T extends unknown>(a: Array<T>, b: Array<T>): boolean;
    static arrayTruthy(a: any): void;
    static arrayOrItem<T>(a?: T | T[] | null, validate?: "nullIfMoreThanOne" | "firstIfMoreThanOne" | "arrayIfMoreThanOne" | "arrayIfExists" | "alwaysReturnArray"): T | null | T[];
    static asArray: (a: any | any[] | undefined | null) => any[];
    static arrayStrictBoolean(a: any): boolean;
    static arange(start?: number, end?: number, diff?: number): number[];
    static stringArrayToTagSubjectOrTopicConnectOrCreate<T extends Tag | Topic | Subject>(items: string[]): {
        where: {
            value: string;
        };
        create: {
            value: string;
        };
    }[];
    static fieldArrayIsSame<T extends {
        [k: string]: unknown;
    }, K extends keyof T>(a: Row<T>[], k: K): T[K] | undefined;
    static toggleItemInArray<T extends unknown>(items: T[], val: T, tester?: (v1: T, v2: T) => boolean, mapAdjustment?: (item: T) => string | number): T[];
    static replaceSelfInArray<T extends unknown, H extends string | number>(arr: T[], comparison: H, equalityCheck: (a: T) => H, replacer: (val: T) => T | any): any[];
    static beArray<T extends unknown>(val: T | T[]): T[];
    static concatWithoutDuplicates<T extends unknown>(initial: T[], additional: T[], comparer?: (a: T, b: T) => boolean): T[];
    static sliceAroundIndex<T>(data: T[], targetIndex: number, maxItems: number): T[];
    static clampInArray<T extends unknown>(arr: T[], index: number): T;
    static concatWithOptionalArray<T extends unknown>(arr: T[] | undefined | null, newArray: T[]): T[];
}
//# sourceMappingURL=arrayUtilities.d.ts.map