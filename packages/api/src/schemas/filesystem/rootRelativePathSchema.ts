import { setSlashes } from "@ulld/utilities/utils/fsUtils"
import { z } from "zod"


export const getRootRelativePathSchema = (fsRoot: string) => {
    return z.string().transform((s) => {
        let j = setSlashes({
            value: s,
            leading: true,
            trailing: false
        }).split(fsRoot)
        return j[j.length - 1]
    })
}
