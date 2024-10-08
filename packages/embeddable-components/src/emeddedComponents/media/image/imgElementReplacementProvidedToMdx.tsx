import { fileExtension } from "@ulld/utilities/fsUtils";
import React, { ImgHTMLAttributes } from "react";
import Image from "next/image";
/* import { imageToBase64Url } from "@ulld/state/formatting/getLocalImageAsString"; */
import { isRemote } from "./utils";
import { useAppConfig } from "@ulld/hooks/useAppConfig";


export const ImgComponent = (
    props: ImgHTMLAttributes<HTMLImageElement>,
) => {
    const [config] = useAppConfig()
    /* const config = await readAppConfig(); */
    let internalProps: ImgHTMLAttributes<HTMLImageElement> = {
        className:
            "h-auto w-full max-h-screen max-w-full min-h-[350px] md:w-fit md:max-w-[768px] sm:max-h-[60vh] max-h-[90vh] object-contain m-4 group-[.floatImages]/mdxNote:float-right",
    };
    if (props.title) {
        internalProps.title = props.title;
    }
    if (!props.src) {
        return;
    }

    /* TODO: Disabled the image-map in this component to support client rendering */
    /* let remote = isRemote(props.src, config.UI.media.imageRemoteTest); */
    /* let src: string | undefined = undefined; */
    /* if (!remote) { */
    /*     if (props.src.startsWith("imageMap-")) { */
    /*         src = await import( */
    /*             `${config.UI.media.imageMap[props.src.split("imageMap-")[1] as keyof typeof config.UI.media.imageMap]}` */
    /*         ); */
    /*         return ( */
    /*             <div */
    /*                 className={ */
    /*                     "w-full flex flex-col justify-center items-center h-fit md:w-fit md:inline-block md:float-left" */
    /*                 } */
    /*             > */
    /*                 <img */
    /*                     src={src} */
    /*                     alt={props.alt || "Embedded Mdx Image"} */
    /*                     {...internalProps} */
    /*                 /> */
    /*             </div> */
    /*         ); */
    /*     } else { */
    /*         console.log(`Getting src as base64 string.`); */
    /*         let baseString = await imageToBase64Url(props.src, config.fsRoot); */
    /*         if (!baseString) { */
    /*             return null; */
    /*         } else { */
    /*             src = baseString; */
    /*         } */
    /*         return ( */
    /*             // eslint-disable-next-line */
    /*             <img */
    /*                 src={`data:image/${fileExtension(props.src)};base64, ${src}`} */
    /*                 alt={props.alt || "Embedded Mdx Image"} */
    /*                 className={internalProps.className} */
    /*             /> */
    /*         ); */
    /*     } */
    /* } */

    /* if (!remote) { */
    /*     if (!src) return null; */
    /*     return ( */
    /*         // eslint-disable-next-line */
    /*         <img */
    /*             src={`data:image/${fileExtension(props.src)};base64, ${src}`} */
    /*             alt={props.alt || "Embedded Mdx Image"} */
    /*             className={internalProps.className} */
    /*         /> */
    /*     ); */
    /* } */

    return (
        <Image
            src={props.src}
            alt={props.alt || "Embedded Mdx Image"}
            width={768}
            height={768}
            className={internalProps.className}
        />
    );
};

ImgComponent.displayName = "ImgComponent";

export { isRemote };
