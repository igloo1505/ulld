import { EmbeddedImageProps } from "@ulld/utilities"

export const isFullWidth = (props: EmbeddedImageProps) => {
    return props.full || props.fullWidth || props.width === "full"
}

