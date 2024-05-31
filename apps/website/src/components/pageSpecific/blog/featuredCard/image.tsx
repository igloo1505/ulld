import Image, { ImageProps } from 'next/image'
import React from 'react'



interface FeaturedImageProps extends Omit<ImageProps, "width" | "height" | "alt"> {
}

const FeaturedImage = (props: FeaturedImageProps) => {
return (
    <Image alt="Featured blog post image" {...props}/>
)
}


FeaturedImage.displayName = "FeaturedImage"


export default FeaturedImage;
