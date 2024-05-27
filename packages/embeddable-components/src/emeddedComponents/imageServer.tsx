import { EmbeddedImageProps } from "@ulld/utilities/types/embeddedImageProps";
import React from "react";
import fs from "fs";
import { EmbeddedImage } from "./image";

interface ServerEmbeddedImageProps extends EmbeddedImageProps { }

const ServerEmbeddedImage = async (props: ServerEmbeddedImageProps) => {
    /* const config = props.noConfig ? null : getInternalConfig(); */
    const { image, file, url } = props;
    let _src = props.src
        ? props.src
        : url
            ? url
            : await fs.promises.readFile(file as string);
    if (_src instanceof Buffer) {
        _src = _src.toString("base64url");
    }
    return <EmbeddedImage src={_src} {...props} />;
};

ServerEmbeddedImage.displayName = "ServerEmbeddedImage";

export default ServerEmbeddedImage;
