import { ConditionalComponentQuery } from "./types"
import { ConditionalComponentProps } from "./client/conditionalComponents"
import { ComponentType } from "react"
import { MDXComponents } from "mdx/types"


export const conditionallyAddComponent = <T extends unknown>(k: ConditionalComponentQuery<T>, content: string, opts: ConditionalComponentProps, componentRecord: Record<string, ComponentType<any>>) => { 
        if(opts.avoidKeys && opts.avoidKeys.includes(k.label)) return
        const hasComponent = k.regex.test(content)
        if (opts.all || hasComponent) {
            if (!(opts.noMermaid && k.label === "Mermaid")) {
                /* @ts-ignore */
                componentRecord[k.label] = k.component
            }
        }
    }


export const getBaseComponents = (baseComponents: MDXComponents, avoid: string[]): MDXComponents => {
    let components: MDXComponents = {}
    for (const k in baseComponents){
        if(!avoid.includes(k)){
            components[k] = baseComponents[k]
        }
    }
    return components
}
