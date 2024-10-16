import React from "react";
import { EmbeddedImageProps } from "@ulld/utilities/types/embeddedImageProps";
import fs from "fs";
import path from 'path'
import { EmbeddedImage } from "./image";
import { fileExtension } from "@ulld/utilities/fsUtils";
import { readAppConfig } from "@ulld/developer/readAppConfig";
import { AppConfigSchemaOutput } from "@ulld/configschema/types";
import { isNoConfig } from "@ulld/utilities/isNoConfig";
import { formatImageSourceString } from "./serverUtils";

interface ServerEmbeddedImageProps extends EmbeddedImageProps {
    noConfig?: boolean;
}

const getImageFileSource = async (p: string) => {
    let _src = await fs.promises.readFile(p);
    return `data:image/${fileExtension(p)};base64, ${_src instanceof Buffer ? _src.toString("base64") : _src}`;
};

const getSource = async (
    props: ServerEmbeddedImageProps,
    config?: AppConfigSchemaOutput,
) => {
    if (props.src) {
        return props.src;
    }
    if (props.url) {
        return props.url;
    }
    if(props.fsRootPath){
        if(!config){
            throw new Error("Cannot use fsRootPath image property without a config available. We can't read your fsRoot path without it!")
        }
        return await getImageFileSource(path.join(config.fsRoot, props.fsRootPath))
    }
    if(props.absolutePath){
        return await getImageFileSource(props.absolutePath)
    }
    if (props.file || props.image) {
        let p = (props.file || props.image) as string;
        if (config && !p.includes(config.fsRoot)) {
            let _tests = config.UI.media.imageRemoteTest.map((t) =>
                t instanceof RegExp ? t : new RegExp(t),
            );
            p = formatImageSourceString(p, _tests, config?.fsRoot);
        }
        return await getImageFileSource(props.file || props.image!)
    }
    console.error(
        "Should not have reached this return statement. You must provide either a url, file, src, or image field to the embeddable Image component.",
    );
    return "";
};

export const ServerEmbeddedImage = async (props: ServerEmbeddedImageProps) => {
    const config = isNoConfig(props) ? null : await readAppConfig();
    let _src = await getSource(props, config);
    return <EmbeddedImage src={_src} {...props} />;
    f;
};

ServerEmbeddedImage.displayName = "ServerEmbeddedImage";
