import { z } from "zod"
import { setSlashes } from "@ulld/parsers"


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
