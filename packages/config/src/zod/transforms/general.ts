import { setSlashes } from "@ulld/utilities"

export const slashesTransform = (leadingSlash: boolean, trailingSlash: boolean = false) => {
    return (val: string) => setSlashes({
        value: val,
        leading: leadingSlash,
        trailing: trailingSlash
    })
}
