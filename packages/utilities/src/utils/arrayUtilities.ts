import { Tag, Topic, Subject } from "@ulld/database/internalDatabaseTypes";
import { Row } from "@tanstack/react-table";

// TEST:  Test this properly asap.
export class ArrayUtilities {
    constructor() { }
    static itemFromListWithLoop<T extends unknown>(list: T[], index: number): T {
        if (index < list.length - 1) {
            return list[index];
        }
        return list[index % list.length];
    }

    static listFromListWithLoop<T extends unknown>(list: T[], take: number): T[] {
        let items: T[] = [];
        for (var i = 0; i < take; i++) {
            items.push(ArrayUtilities.itemFromListWithLoop<T>(list, i));
        }
        return items;
    }
    // TODO: Look up how to type n-dimensional arrays and apply that everywhere this is called
    static meshGrid<T>(N: number[], dimensions: number) {
        let d = N;
        let l = 0;
        let b: number[][] | number[] = [];
        for (var i = 0; i < dimensions - 1; i++) {
            let a = d.flat(dimensions).map(() => N);
            do {
                let j = a.slice(l, l + N.length);
                if (j.length > 0) {
                    // @ts-ignore
                    b.length > 0 ? b.push(j) : (b = j);
                }
                l += N.length;
            } while (l < a.length - N.length);
        }
        return b as T;
    }

    static randomFromList<T extends unknown>(list: T[]) {
        list[Math.floor(Math.random() * list.length)];
    }

    static compute1DIfNotNull(f: (n: number) => number, axisData: number[]) {
        let values: number[][] = [[], []];
        axisData.forEach((n) => {
            let val = f(n);
            if (n) {
                values[0].push(n);
                values[1].push(val);
            }
        });
        return values;
    }

    static generateData(func: (n: number) => number) {
        let data: [number, number][] = [];
        for (let i = -200; i <= 200; i += 0.1) {
            data.push([i, func(i)]);
        }
        return data;
    }

    static doesOverlap<T extends unknown>(
        a: Array<T>,
        b: Array<T>,
        caseInsensitive: boolean = false,
    ): boolean {
        if (caseInsensitive) {
            /// @ts-ignore
            a = a.map((s) => s.toLowerCase());
        }
        for (var i = 0; i < b.length; i++) {
            /// @ts-ignore
            if (a.indexOf(caseInsensitive ? b[i].toLowerCase() : b[i]) >= 0)
                return true;
        }
        return false;
    }

    static containsAll<T extends unknown>(a: Array<T>, b: Array<T>): boolean {
        `Returns true if a contains all elements of b`;
        for (var i = 0; i < b.length; i++) {
            if (a.indexOf(b[i]) === -1) return false;
        }
        return true;
    }

    static arrayTruthy(a: any) {
        Boolean(Array.isArray(a) && a.length > 0);
    }

    static arrayOrItem<T>(
        a?: T | T[] | null,
        validate:
            | "nullIfMoreThanOne"
            | "firstIfMoreThanOne"
            | "arrayIfMoreThanOne"
            | "arrayIfExists"
            | "alwaysReturnArray" = "arrayIfMoreThanOne",
    ): T | null | T[] {
        if (!a) return validate === "alwaysReturnArray" ? [] : null;
        if (validate === "alwaysReturnArray") return Array.isArray(a) ? a : [a];
        if (Array.isArray(a)) {
            if (validate === "arrayIfMoreThanOne") return a as T[];
            if (validate === "firstIfMoreThanOne") return a[0] as T;
            if (validate === "nullIfMoreThanOne") return a.length === 1 ? a[0] : null;
            if (validate === "arrayIfExists") return a;
        }
        return validate === "arrayIfExists" ? ([a] as T[]) : (a as T);
    }

    static asArray = (a: any | any[] | undefined | null) =>
        Boolean(a) ? (Array.isArray(a) ? a : [a]) : [];

    static arrayStrictBoolean(a: any) {
        return Array.isArray(a) && a.length > 0;
    }

    static arange(start: number = 0, end: number = 10, diff: number = 1) {
        let data = [start];
        do {
            data.push(data[data.length - 1] + diff);
        } while (data[data.length - 1] + diff <= end);
        return data;
    }

    static stringArrayToTagSubjectOrTopicConnectOrCreate<
        T extends Tag | Topic | Subject,
    >(
        items: string[],
    ) {
        return items.map((t) => ({
            where: {
                value: t as string,
            },
            create: {
                value: t as string,
            },
        }));
    }

    static fieldArrayIsSame<
        T extends { [k: string]: unknown },
        K extends keyof T,
    >(a: Row<T>[], k: K): T[K] | undefined {
        if (!a.length) return;
        let first = a[0].getValue(k as string) as T[K];
        return a.every((l) => l.getValue(k as string) === first)
            ? first
            : undefined;
    }

    static toggleItemInArray<T extends unknown>(
        items: T[],
        val: T,
        tester?: (v1: T, v2: T) => boolean,
        mapAdjustment?: (item: T) => string | number,
    ) {
        let _items = mapAdjustment ? items.map(mapAdjustment) : items;
        return _items.includes(mapAdjustment ? mapAdjustment(val) : (val as any))
            ? items.filter((a) => {
                if (mapAdjustment) {
                    return mapAdjustment(a) !== mapAdjustment(val);
                } else {
                    return a !== val;
                }
            })
            : [...items, val];
    }

    static replaceSelfInArray<T extends unknown, H extends string | number>(
        arr: T[],
        comparison: H,
        equalityCheck: (a: T) => H,
        replacer: (val: T) => T | any,
    ) {
        return arr.map((a) => (equalityCheck(a) === comparison ? replacer(a) : a));
    }
    static beArray<T extends unknown>(val: T | T[]): T[] {
        return Array.isArray(val) ? val : [val]
    }
    static concatWithoutDuplicates<T extends unknown>(initial: T[], additional: T[], comparer?: (a: T, b: T) => boolean): T[] {
        let items = initial
        for (const item of additional) {
            if(comparer && !items.some((x) => comparer(x, item))){
                items.push(item)
            } else {
                if(!items.includes(item)){
                    items.push(item)
                }
            }
        }
        return items
    }

    static sliceAroundIndex<T>(data: T[], targetIndex: number, maxItems: number) {
        let items: T[] = [data[targetIndex]]
        let i = 1
        let shouldRun = true
        do {
           if(items.length <= targetIndex + i) {
                items.push(data[targetIndex + i])
            } 
            if((items.length < maxItems) && (targetIndex - i >= 0)){
                items.push(data[targetIndex - i])
            }
            if(items.length < maxItems && (i + 1 + targetIndex < data.length || targetIndex - (i + 1) > 0)){
                i++
            } else {
                shouldRun = false
            }
        } while (shouldRun);
        return items
    }
    static clampInArray<T extends unknown>(arr: T[], index: number): T {
        return index >= arr.length ? arr[index % arr.length] : arr[index]
    }
    static concatWithOptionalArray<T extends unknown>(arr: T[] | undefined | null, newArray: T[]): T[] {
        return (arr || [] as T[]).concat(newArray)
    }
}
