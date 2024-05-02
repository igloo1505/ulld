import clsx from "clsx"
import { WithRequired } from "@ulld/utilities/types/utilityTypes"
import {EmbeddedImageProps} from "@ulld/utilities/types/embeddedImageProps"
import {isFullWidth} from "@ulld/state/formatting/styleUtilities"
import {DefaultImageMapName, defaultImageMapNames} from "@ulld/configschema/staticData/defaultImageMap"
import {DynamicDefaultImageMapImage} from "@ulld/default-image-map/dynamicByName"



const getImagePath = (s: string) => {    
    if(defaultImageMapNames.includes(s as any)) {
        return {path: s as DefaultImageMapName, default: true}
    }
    /* TODO: Right now this additional config image map isn't set up at all. Come back to this once more important things are handled. */
    /* let im = getInternalConfig()?.UI?.media?.imageMap?.imageMap */
    /* if (!im) return */
    /* const _s = im[s as keyof typeof im] */
    /* return {path: _s, default: false} */
    }


const ImageMapImage = (props: WithRequired<EmbeddedImageProps, "image">) => {
    const fullWidth = isFullWidth(props)
    const data = getImagePath(props.image)
    if (!data) return null


    return <div className={clsx("px-3 !py-3 overflow-hidden [&_svg]:h-fit", fullWidth && "w-full flex justify-center items-center", props.block && "w-full", props.block && props.right && "flex flex-row justify-end items-center", props.block && props.center && "flex justify-center items-center", props.right && "float-right ml-4", props.left && "float-left mr-4", Boolean(props.border || props.bordered) && "border shadow-md hover:shadow-sm transition-shadow duration-200", props.inline && "inline h-4", props.circle ? "rounded-full p-4" : Boolean(props.border || props.bordered) ? "rounded-lg p-2" : "", Boolean((props.left || props.right) && !props.block && Boolean(props.md || props.medium)) && "w-full flex justify-center items-center sm:w-fit", Boolean((props.left || props.right) && !props.block && Boolean(props.sm || props.small)) && "w-full flex justify-center items-center xxs:w-fit", Boolean((props.left || props.right) && !props.block && Boolean(props.lg || props.large)) && "w-full flex justify-center items-center md:w-fit", Boolean((props.left || props.right) && !props.block && Boolean(props.xl)) && "w-full flex justify-center items-center mdlg:w-fit")}
        style={{
            ...(props.width && { width: props.width }),
            ...(props.height && { height: props.height }),
        }}
    >
        <DynamicDefaultImageMapImage name={data.path} className={clsx(Boolean(props.sm || props.small) && "max-w-[120px] max-h-[120px]", Boolean(props.md || props.medium) && "max-w-[200px] max-h-[200px]", Boolean(props.lg || props.large) && "max-w-[350px] max-h-[350px]", props.xl && "max-w-[500px] max-h-[500px]")} />
    </div>
}


export default ImageMapImage
