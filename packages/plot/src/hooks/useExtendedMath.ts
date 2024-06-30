import { useMemo } from "react";
import { Variable } from "../types";
// import {ExtendedMath} from "@ulld/math/extendedMath"


export const useExtendedMath = (variables: Record<string, number>) => {
    return useMemo(() => {
        const math = new ExtendedMath()
        math.applyVariables(variables)
        return math
    }, [variables])
}
