import React from "react";
import fs from "fs";
import path from 'path'
import type { ReactNode } from "react";
import type { EmbeddedImageProps } from "@ulld/utilities/types/embeddedImageProps";
import { fileExtension } from "@ulld/utilities/fsUtils";
import { readAppConfig } from "@ulld/developer/readAppConfig";
import type { AppConfigSchemaOutput } from "@ulld/configschema/types";
import { isNoConfig } from "@ulld/utilities/isNoConfig";
import { EmbeddedImage } from "./image";
import { formatImageSourceString } from "./serverUtils";

interface ServerEmbeddedImageProps extends EmbeddedImageProps {
    noConfig?: boolean;
}

const getImageFileSource = async (p: string): Promise<string> => {
    const _src = await fs.promises.readFile(p);
    return `data:image/${fileExtension(p)};base64, ${_src instanceof Buffer ? _src.toString("base64") : _src}`;
};

const getSource = async (
    props: ServerEmbeddedImageProps,
    config?: AppConfigSchemaOutput,
): Promise<string> => {
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
        return getImageFileSource(path.join(config.fsRoot, props.fsRootPath))
    }
    if(props.absolutePath){
        return getImageFileSource(props.absolutePath)
    }
    if (props.file || props.image) {
        let imgPath = props.file || props.image
        if (imgPath && config && !imgPath.includes(config.fsRoot)) {
            const _tests = config.UI.media.imageRemoteTest.map((t) => new RegExp(t));
            imgPath = formatImageSourceString(imgPath, _tests, config.fsRoot);
        }
        if(imgPath){
            return getImageFileSource(imgPath)
        }
    }
    // eslint-disable-next-line no-console -- Random catch block used during internal development. SHould never reach this point.. #MoveToLoggerPackage
    console.error(
        "Should not have reached this return statement. You must provide either a url, file, src, or image field to the embeddable Image component.",
    );
    return "";
};

export const ServerEmbeddedImage = async (props: ServerEmbeddedImageProps): Promise<ReactNode> => {
    const config = isNoConfig(props) ? undefined : await readAppConfig();
    const _src = await getSource(props, config);
    return <EmbeddedImage src={_src} {...props} />;
};

ServerEmbeddedImage.displayName = "ServerEmbeddedImage";
