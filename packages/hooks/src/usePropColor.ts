// import { AppConfigSchemaOutput } from "@ulld/configschema/types"
import { useAppConfig } from "./useAppConfig"

interface PropColor {
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




type PropColorAsProp = Record<keyof PropColor, boolean>


export const usePropColor = (d: PropColorAsProp, prefix?: string, _default?: string) => {
    const [config] = useAppConfig()

    // TODO: Combine this with the identical output in packages/state/src/actions/ui/getPropColor.ts in a single function in the utilities package.
    let c: string | undefined = undefined
    let keys = Object.keys(d)
    Object.values(d).forEach((v, i) => {
        if (v === true && keys[i]) {
            c = keys[i]
        }
    })
    let _props: { [k: string]: any } = {}
    let k = Object.keys(config?.UI?.colors || {})
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
