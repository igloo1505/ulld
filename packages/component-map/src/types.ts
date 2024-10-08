import { ComponentType } from "react";

// TODO: Remove references to this. Moved this to the types package.
export interface ConditionalComponentQuery<T = ComponentType<any>> {
    regex: RegExp,
    component: T,
    label: string
}

export type AdditionalComponentType = ComponentType<unknown>[]

export type AdditionalComponents<J extends AdditionalComponentType = any> = ConditionalComponentQuery<J>[]


export interface ConditionalComponentProps {
    all?: boolean
    noMermaid?: boolean
    requiredOnly?: boolean
    noDefaults?: boolean
    avoidKeys?: string[]
}
