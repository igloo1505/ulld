import type { ArrayToEnumStringProps, DevelopmentOutputFunctionPropMap, GenFileContentItem } from "./types"

export class DevelopmentOutput implements DevelopmentOutputFunctionPropMap {
    constructor(public initialContent = "") {

    }

    getInitialBody(body: string, opts: {prefixFirstLine?: string}): string {
        if(opts.prefixFirstLine){
            return `${opts.prefixFirstLine}\n${body}`
        }
        return body
    }
    arrayToEnum<T extends object>(props: ArrayToEnumStringProps<T>): string {
        let body = this.getInitialBody(`export enum ${props.enumName} {\n`, props)

        for (const _s of props.arr) {
            const s = typeof _s === "string" ? _s : props.getKey(_s)
            body += `    "${s}" = "${s}",\n`
        }
        body += "}"
        return body
    }

    genFileContent(items: GenFileContentItem[]): string {
        for (const item of items) {
            const res = this[item.fnc](...item.props)
            this.initialContent += `\n\n${res}`
        }
        return this.initialContent
    }
}
