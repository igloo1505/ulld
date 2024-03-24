import clsx from "clsx"
import dynamic from "next/dynamic"
import { getInternalConfig } from "@ulld/configschema/zod/getInternalConfig"
import { WithRequired } from "@tanstack/react-query"
import {EmbeddedImageProps} from "@ulld/utilities/types/embeddedImageProps"
import {isFullWidth} from "@ulld/state/formatting/styleUtilities"




const ImageMapImage = (props: WithRequired<EmbeddedImageProps, "image">) => {
    const fullWidth = isFullWidth(props)
    const { image } = props
    let im = getInternalConfig()?.UI?.media?.imageMap?.imageMap
    if (!im) return
    const _s = im[image as keyof typeof im]
    if (!_s) return null

    const Em: React.FC<{ className?: string }> = dynamic(() => import(`../../../imageMap/${_s.slice(0, _s.length - 4)}`)) as React.FC<{ className?: string }>

    return <div className={clsx("px-3 !py-3 overflow-hidden [&_svg]:h-fit", fullWidth && "w-full flex justify-center items-center", props.block && "w-full", props.block && props.right && "flex flex-row justify-end items-center", props.block && props.center && "flex justify-center items-center", props.right && "float-right ml-4", props.left && "float-left mr-4", Boolean(props.border || props.bordered) && "border shadow-md hover:shadow-sm transition-shadow duration-200", props.inline && "inline h-4", props.circle ? "rounded-full p-4" : Boolean(props.border || props.bordered) ? "rounded-lg p-2" : "", Boolean((props.left || props.right) && !props.block && Boolean(props.md || props.medium)) && "w-full flex justify-center items-center sm:w-fit", Boolean((props.left || props.right) && !props.block && Boolean(props.sm || props.small)) && "w-full flex justify-center items-center xxs:w-fit", Boolean((props.left || props.right) && !props.block && Boolean(props.lg || props.large)) && "w-full flex justify-center items-center md:w-fit", Boolean((props.left || props.right) && !props.block && Boolean(props.xl)) && "w-full flex justify-center items-center mdlg:w-fit")}
        style={{
            ...(props.width && { width: props.width }),
            ...(props.height && { height: props.height }),
        }}
    >
        <Em className={clsx(Boolean(props.sm || props.small) && "max-w-[120px] max-h-[120px]", Boolean(props.md || props.medium) && "max-w-[200px] max-h-[200px]", Boolean(props.lg || props.large) && "max-w-[350px] max-h-[350px]", props.xl && "max-w-[500px] max-h-[500px]")} />
    </div>
}


export default ImageMapImage
