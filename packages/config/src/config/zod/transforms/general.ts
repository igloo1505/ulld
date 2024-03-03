import { setSlashes } from "#/lib/formatting/fsUtils"

export const slashesTransform = (leadingSlash: boolean, trailingSlash: boolean = false) => {
    return (val: string) => setSlashes({
        value: val,
        leading: leadingSlash,
        trailing: trailingSlash
    })
}
