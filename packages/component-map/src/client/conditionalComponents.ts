import { AdditionalComponentType, AdditionalComponents, ConditionalComponentProps, ConditionalComponentQuery } from "../types";
import { EmbeddableClientComponents, conditionalClientComponents } from "./componentList";
import { conditionallyAddComponent } from "../utils";
import { MDXComponents } from "mdx/types";




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
