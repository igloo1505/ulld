import { ParsedAppConfig, getInternalConfig } from "@ulld/configschema"

export interface PropColor {
    [k: string]: string
    yellow: string
    primary: string
    blue: string
    orange: string
    green: string
    red: string
    error: string
    success: string
    info: string
}




export type PropColorAsProp = Record<keyof PropColor, boolean>

export const getPropColor = (d: PropColorAsProp, prefix?: string, _default?: string | undefined, config?: ParsedAppConfig) => {
    const _config = config || getInternalConfig()
    let c: string | undefined = undefined
    let keys = Object.keys(d)
    Object.values(d).forEach((v, i) => {
        if (v === true && keys[i]) {
            c = keys[i]
        }
    })
    let _props: { [k: string]: any } = {}
    let k = Object.keys(_config.UI.colors)
    for (const l in d) {
        if (!k.includes(l)) {
            _props[l] = d[l]
        }
    }
    if (!c) {
        c = _default ? _default : "yellow"
    }
    return { color: `${prefix || ""}${prefix ? "-" : ""}gen-${c}`, props: _props }
}
