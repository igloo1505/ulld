import React from 'react'
import fs from 'fs'
import clsx from 'clsx'
import ImageMapImage, { EmbeddedImageProps } from './imageMapImage'
import { getInternalConfig } from '#/lib/config/zod/getInternalConfig'




const isFullWidth = (props: EmbeddedImageProps) => {
    return props.full || props.fullWidth || props.width === "full"
}



const EmbeddedImage = async (props: EmbeddedImageProps) => {
    const config = getInternalConfig()
    const { alt, block, image, file, url, left, right, inline, width, height, full, fullWidth: fw } = props
    if (image && image in config.UI.media.imageMap) {
        return <ImageMapImage {...props} image={image} />
    }
    let _src = url ? url : await fs.promises.readFile(file as string)
    if (_src instanceof Buffer) {
        _src = _src.toString("base64url")
    }
    if (!_src) return

    /* TODO: Come back and handle this entire component. Styles completely untested and the svg component from the imageMap is very unlikely to work well as is. */
    return (
        <div
            className={clsx("m-3", left && "float-left", right && "float-right", inline && "inline", block && "w-full flex flex-col justify-center items-center")}
            style={{
                maxWidth: block ? "100%" : `min(calc(100vw-4rem), ${width || 400}px)`,
                maxHeight: `min(60vh, ${height || 400}px)`,
            }}
        >
            <img
                alt={alt || ""}
                src={_src}
                className={"object-contain"}
            />
        </div>
    )
}


EmbeddedImage.displayName = "EmbeddedImage"


export default EmbeddedImage;
