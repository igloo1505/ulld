import Image, { ImageProps } from "next/image";
import React from "react";
import clsx from 'clsx'

interface FeaturedImageProps
    extends Omit<ImageProps, "width" | "height" | "alt"> { }

const FeaturedImage = (props: FeaturedImageProps) => {
    return (
        <Image
            alt="Featured blog post image"
            {...props}
            className={clsx("w-full max-h-full object-cover rounded-tl-lg rounded-tr-lg lg:rounded-bl-lg lg:rounded-tr-none", props.className)}
            width={768}
            height={768} 
        />
    );
};

FeaturedImage.displayName = "FeaturedImage";

export default FeaturedImage;
