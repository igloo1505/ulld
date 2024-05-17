import type { MDXComponents } from "mdx/types";
import { AdditionalComponentType, AdditionalComponents, ConditionalComponentQuery } from "../types";
import { EmbeddableClientComponents, conditionalClientComponents } from "./componentList";
import { conditionallyAddComponent } from "../utils";


export interface ConditionalComponentProps {
    all?: boolean
    noMermaid?: boolean
    requiredOnly?: boolean
    avoidKeys?: string[]
}


export const getConditionalClientComponents = <J extends AdditionalComponentType>(content: string, opts: ConditionalComponentProps, extraComponents: AdditionalComponents<J> = []) => {
    let components: { [k: string]: ConditionalComponentQuery<EmbeddableClientComponents & J>['component'] } = {}
    for (const k of conditionalClientComponents) {
        conditionallyAddComponent(k, content, opts, components)
    }
    for (const k of extraComponents) {
        conditionallyAddComponent(k, content, opts, components)
    }
    return components satisfies MDXComponents
}
