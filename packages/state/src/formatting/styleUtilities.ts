import {EmbeddedImageProps} from "@ulld/utilities/types/embeddedImageProps"

export const isFullWidth = (props: EmbeddedImageProps) => {
    return props.full || props.fullWidth || props.width === "full"
}

