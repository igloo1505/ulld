import React, { useMemo } from "react";
import fs from "fs";
import clsx from "clsx";
import { getInternalConfig } from "@ulld/configschema/zod/getInternalConfig";
import ImageMapImage from "./imageMapImage";
import { EmbeddedImageProps } from "@ulld/utilities/types/embeddedImageProps";
import { isFullWidth } from "@ulld/state/formatting/styleUtilities";
import { getRandomId } from "@ulld/utilities/identity";
import SelfFigureIndex from "./selfImageIndex";
import DispatchRenderedImageEvent from "./dispatchRenderedImageEvent";


const C = (props: EmbeddedImageProps) => {
    let id = props.id || getRandomId();
    const fullWidth = isFullWidth(props);
    let imgProps = {
        src: props.src,
        alt: props.alt,
        id: id,
        ...(!props.notFigure && { "data-ulld-figure": true }),
    };

    const imageEm = useMemo(
        () => (
            <img
                {...imgProps}
                className={clsx(
                    "!m-0 h-auto not-prose",
                    Boolean(props.sm || props.small) && "max-w-[120px] max-h-[120px]",
                    Boolean(props.md || props.medium) && "max-w-[200px] max-h-[200px]",
                    Boolean(props.lg || props.large) && "max-w-[350px] max-h-[350px]",
                    props.xl && "max-w-[500px] max-h-[500px]",
                )}
            />
        ),
        [
            props.alt,
            props.src,
            props.sm,
            props.md,
            props.lg,
            props.medium,
            props.large,
            props.small,
            props.xl,
            id,
        ],
    );
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
                props.right && "float-right ml-4",
                props.left && "float-left mr-4",
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
                ) && "w-full flex flex-col justify-center items-center md:w-fit",
                Boolean(
                    (props.left || props.right) && !props.block && Boolean(props.xl),
                ) && "w-full flex flex-col justify-center items-center mdlg:w-fit",
            )}
            style={{
                ...(props.width && { width: props.width }),
                ...(props.height && { height: props.height }),
            }}
        >
            {imageEm}
            {(props.desc || props.label) && (
                <div
                    className={clsx(
                        "text-sm text-muted-foreground mt-2",
                        props.descRight && "w-full text-right",
                        props.descLeft && "w-full text-left",
                    )}
                >
                    {props.label ? <SelfFigureIndex id={id} /> : props.desc}
                </div>
            )}
            <DispatchRenderedImageEvent />
        </div>
    );
};

export const EmbeddedImage = async (props: EmbeddedImageProps) => {
    const config = props.noConfig ? null : getInternalConfig();
    const { image, file, url } = props;
    if (image && config && image in config.UI.media.imageMap) {
        return <ImageMapImage {...props} image={image} />;
    }
    let _src = props.src
        ? props.src
        : url
            ? url
            : await fs.promises.readFile(file as string);
    if (_src instanceof Buffer) {
        _src = _src.toString("base64url");
    }
    return <C {...props} src={_src} />;
};

EmbeddedImage.displayName = "EmbeddedImage";
