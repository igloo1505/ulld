import { getComponentMap } from "@ulld/component-map/server"

export interface OutputComponentMapIdsProps {
    mdxContent: string
    opts: Parameters<typeof getComponentMap>[1]
    additionalComponents: Parameters<typeof getComponentMap>[2]
}

export interface ComponentMapLabels {
    /** Strings that coincide with the label field for each component in the mdx note's content. */
    componentLabels: string[]
}

export const outputComponentMapIds = (props: OutputComponentMapIdsProps): ComponentMapLabels => {
    const c = getComponentMap(props.mdxContent, props.opts, props.additionalComponents)
    const componentLabels = Object.keys(c)
    return {
        componentLabels
    }
}
