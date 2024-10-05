import React from "react";
import type { z } from 'zod'


export type PropertiesOfType<T, K> = {
    [J in keyof T]: T[J] extends K ? T[J] : never
}

export type WithRequired<T, K extends keyof T> = T & { [P in K]-?: T[P] }

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

export type WithoutFunctions<T> = RemoveValuesOfType<{
    [key in keyof T]: T[key] extends Function ? never : T[key];
}, never>

export type ZodFriendly<T extends object> = { [key in keyof T]: T[key] extends never ? never : z.ZodType }


export type PartialBy<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>


export type PickPageParams<T> = {
    searchParams: "searchParams" extends keyof T ? T["searchParams"] : {},
    params: "params" extends keyof T ? T["params"] : {},
};

