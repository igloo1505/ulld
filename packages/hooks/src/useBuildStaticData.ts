import { BuildStaticDataOutput } from "@ulld/configschema/buildTypes"
import { useLocalStorage } from "./useLocalStorage"

// TODO: Actually enable this by storing the data at this key in the sttae handler.
export const useBuildStaticData = () => {
    return useLocalStorage<BuildStaticDataOutput>("ulldBuildStaticData", undefined)
}
