import { z } from 'zod'


export const zodStringFieldWithFileExtension = (fileExt: string) => {
    return z.custom<`${string}${typeof fileExt}`>((val) => {
        return typeof val === "string" ? val.endsWith(fileExt.startsWith(".") ? fileExt : `.${fileExt}`) : false;
    })
}


