import { ComponentType } from "react";

export type AdditionalComponentType = ComponentType<unknown>[]

export type AdditionalComponents<J extends AdditionalComponentType> = ConditionalComponentQuery<J>[]

export interface ConditionalComponentQuery<T> {
    regex: RegExp,
    component: T,
    label: string
}