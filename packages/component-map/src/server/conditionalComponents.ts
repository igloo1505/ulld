import { MDXComponents } from "mdx/types";
import { EmbeddableClientComponents } from "../client/componentList";
import { AdditionalComponentType, AdditionalComponents, ConditionalComponentProps, ConditionalComponentQuery } from "../types";
import { conditionallyAddComponent } from "../utils";
import { conditionalServerComponents } from "./componentList";


// type EmbeddableServerComponents = typeof Admonition | typeof ErrorMargin | typeof Abstract



export const getConditionalServerComponents = <J extends AdditionalComponentType>(content: string, opts: ConditionalComponentProps, extraComponents: AdditionalComponents<J> = []) => {
    let components: { [k: string]: ConditionalComponentQuery<EmbeddableClientComponents & J>['component'] } = {}
    for (const k of conditionalServerComponents) {
        conditionallyAddComponent(k, content, opts, components)
    }
    for (const k of extraComponents) {
        conditionallyAddComponent(k, content, opts, components)
    }
    return components satisfies MDXComponents
}

