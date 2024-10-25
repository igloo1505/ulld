import React from "react";
import clsx from "clsx";
import ImageMapImage from "../../imageMapImage";
import { EmbeddedImageProps } from "@ulld/utilities/types/embeddedImageProps";
import { isFullWidth } from "@ulld/state/formatting/styleUtilities";
import { getRandomId } from "@ulld/utilities/identity";
import SelfFigureIndex from "../../selfImageIndex";
import DispatchRenderedImageEvent from "../../dispatchRenderedImageEvent";
import { readAppConfigSync } from "@ulld/developer/readAppConfig";
import MemoizedEmbeddableClientImageElement from "./embeddableImageClientElement";
import { formatImageSourceString } from "./serverUtils";
import { isNoConfig } from "@ulld/utilities/isNoConfig";
import { AppConfigSchemaOutput, MinimalParsableAppConfig, MinimalParsableAppConfigOutput } from "@ulld/configschema/types";

type ImgProps = EmbeddedImageProps & Omit<React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>, "title"> & { 
    noConfig?: boolean
    publicDir?: boolean
}


const C = (props: ImgProps) => {

    let id = props.id || getRandomId();

    const fullWidth = isFullWidth(props);

    if(!props.src){
        return null
    }

    let imgProps = {
        src: props.src!,
        alt: props.alt,
        id: id,
        ...(!props.notFigure && { "data-ulld-figure": true }),
    };

    return (
        <div
            className={clsx(
                "px-3 !py-3 overflow-hidden [&_svg]:h-fit my-8",
                fullWidth && "w-full flex flex-col justify-center items-center",
                props.block && "w-full",
                props.block && props.right && "flex flex-row justify-end items-center",
                props.block &&
                props.center &&
                "flex flex-col justify-center items-center",
                props.right && "@[768px]/mdx:float-right @[768px]/mdx:ml-4",
                props.left && "@[768px]/mdx:float-left @[768px]/mdx:mr-4",
                Boolean(props.border || props.bordered) &&
                "border shadow-md hover:shadow-sm transition-shadow duration-200",
                props.inline && "inline h-4",
                props.circle
                    ? "rounded-full p-4"
                    : Boolean(props.border || props.bordered)
                        ? "rounded-lg p-2"
                        : "",
                Boolean(
                    (props.left || props.right) &&
                    !props.block &&
                    Boolean(props.md || props.medium),
                ) && "w-full flex flex-col justify-center items-center sm:w-fit",
                Boolean(
                    (props.left || props.right) &&
                    !props.block &&
                    Boolean(props.sm || props.small),
                ) && "w-full flex flex-col justify-center items-center xxs:w-fit",
                Boolean(
                    (props.left || props.right) &&
                    !props.block &&
                    Boolean(props.lg || props.large),
                ) && "w-full flex flex-col justify-center items-center @[768px]/mdx:w-fit",
                Boolean(
                    (props.left || props.right) && !props.block && Boolean(props.xl),
                ) && "w-full flex flex-col justify-center items-center mdlg:w-fit",
            )}
            style={{
                ...(props.width && { width: props.width }),
                ...(props.height && { height: props.height }),
            }}
        >
            <MemoizedEmbeddableClientImageElement
                {...props}
                imgProps={imgProps}
            />
            {(props.desc || props.label) ? (
                <div
                    className={clsx(
                        "text-sm text-muted-foreground mt-2",
                        props.descRight && "w-full text-right",
                        props.descLeft && "w-full text-left",
                    )}
                >
                    {(props.label || props.desc) ? <SelfFigureIndex 
                        id={id} 
                        desc={props.desc}
                        imageId={imgProps.id}
                    /> : null}
                </div>
            ) : null}
            <DispatchRenderedImageEvent />
        </div>
    );
};

const isImageMapImage = (config: MinimalParsableAppConfigOutput | undefined | null, props: ImgProps): boolean => {
    if(!props.image || !config){
        return false
    }
    const imageMap = config.UI?.media?.imageMap
    if(imageMap){
        return Boolean(props.image in imageMap)
    } 
    return false
}

export const EmbeddedImage = (props: ImgProps) => {
    const config = isNoConfig(props) ? null : readAppConfigSync();
    if (isImageMapImage(config, props)) {
        return <ImageMapImage
            {...props} 
            /* eslint-disable-next-line  */
            image={props.image!}
        />
    }
    return <C {...props} src={props.src || props.url} />
};

EmbeddedImage.displayName = "EmbeddedImage";
