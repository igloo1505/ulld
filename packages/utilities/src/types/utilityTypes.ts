import type React from "react";
import type { z } from 'zod'


export type PropertiesOfType<T, K> = {
    [J in keyof T]: T[J] extends K ? T[J] : never
}

export type WithRequired<T, K extends keyof T> = T & { [P in K]-?: T[P] }

export type WithRequiredOnly<T, K extends keyof T> = WithRequired<Partial<T>, K>

export type WithOptional<T, K extends keyof T> = T & { [P in K]?: T[P] | undefined }

export type MakeNullish<T> = T & { [P in keyof PropertiesOfType<T, null | undefined>]?: T[P] | null }

export type ExpandRecursively<T> = T extends object
    ? T extends infer O ? { [K in keyof O]: ExpandRecursively<O[K]> } : never
    : T;

export interface ArrayLike<T> {
    length: number
    [n: number]: T
}

export interface WithChildren {
    children: React.ReactNode
}

export type RemoveValuesOfType<T, U> = { [P in keyof T as T[P] extends U ? never : P]: T[P] }

// Disable to remove all functions, regardless of type.
/* eslint-disable @typescript-eslint/ban-types */
export type WithoutFunctions<T> = RemoveValuesOfType<{
    [key in keyof T]: T[key] extends Function ? never : T[key];
}, never>

export type ZodFriendly<T extends object> = { [key in keyof T]: T[key] extends never ? never : z.ZodType }


export type PartialBy<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>


export interface PickPageParams<T> {
    searchParams: "searchParams" extends keyof T ? T["searchParams"] : object,
    params: "params" extends keyof T ? T["params"] : object,
};


// Experimental stuff below


// Tuple stuff

export type Length<T> = T extends { length: infer L } ? L : never;
export type Push<T extends unknown[], U> = T extends [...infer R] ? [...T, U] : never;
export type PushFront<T extends unknown[], U> = T extends [...infer R] ? [U, ...T] : never;
export type Pop<T extends unknown[]> = T extends [...infer R, infer U] ? U : never;
export type PopFront<T extends unknown[]> = T extends [infer U, ...infer R] ? U : never;
export type Shift<T extends unknown[]> = T extends [infer U, ...infer R] ? R : never;
export type ShiftRight<T extends unknown[]> = T extends [...infer R, infer U] ? R : never;
export type Filter<T extends unknown[], U> = T extends [] ? [] : T extends [infer F, ...infer R] ? F extends U ? Filter<R, U> : [F, ...Filter<R, U>] : never
export type TupleIncludes<T extends unknown[], U> = Length<Filter<T, U>> extends Length<T> ? false : true
/** Converts a tuple of strings to a joined string */
export type Join<T extends unknown[], D extends string> = string[] extends T ? string : T extends string[]
  ? PopFront<T> extends string ? Length<T> extends 1 ? `${PopFront<T>}` : `${PopFront<T>}${D}${Join<Shift<T>, D>}` : never
  : never;
// String stuff
export type StringIncludes<S extends string, D extends string> = S extends `${infer T}${D}${infer U}` ? true : false;
export type Split<S extends string, D extends string> =
    string extends S ? string[] :
        S extends '' ? [] :
            S extends `${infer T}${D}${infer U}` ?  [T, ...Split<U, D>] : [S];
// General stuff

/** Accepts either a tuple or a string */
export type Includes<T extends unknown[]|string, U> = T extends unknown[] ? TupleIncludes<T, U> : T extends string ? U extends string ? StringIncludes<T, U> : never : never;

export type OneOf<T, Strict extends boolean = true> = {
    [OuterKey in keyof T]: Strict extends false
        ? { [K in OuterKey]: T[K] }
        : { [InnerKey in OuterKey|keyof T]?: InnerKey extends OuterKey ? T[OuterKey] : never } & { [TheKey in OuterKey]: T[OuterKey] } 
}[keyof T];

export type ValidPaths<T> = keyof T extends never ? never : ({
     [K in keyof T]: T[K] extends never ? never : T[K] extends Record<string|number|symbol, unknown>
       ? K extends string ? `${K}.${ValidPaths<T[K]>}` | K : never
       : K
   })[keyof T] & string;

export type ValidPathTuples<T> = keyof T extends never ? never : ({
     [K in keyof T]: T[K] extends never ? never : T[K] extends Record<string|number|symbol, unknown>
       ? [K, ...ValidPathTuples<T[K]>] | [K]
       : [K]
   })[keyof T];

export type NestedType<T, P extends string> = (
  Includes<P, '.'> extends true
    ? PopFront<Split<P, '.'>> extends keyof T
      ? NestedType<T[PopFront<Split<P, '.'>>], Join<Shift<Split<P, '.'>>, '.'>>
      : never
    : P extends keyof T ? T[P] : never
);

type NestedTypeByTuple<T, P extends string[]> = (
  Length<P> extends 1
    ? Pop<P> extends keyof T ? T[Pop<P>] : never
    : PopFront<P> extends keyof T ? Shift<P> extends string[] 
      ? NestedTypeByTuple<T[PopFront<P>], Shift<P>>
      : never : never
);
