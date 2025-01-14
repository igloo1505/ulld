import type { IsNoConfigProps } from "@ulld/types"

export const isNoConfig = (props?: IsNoConfigProps): boolean => {
    return Boolean(props?.noConfig || process.env.ULLD_NO_CONFIG === "true")
}
