// eslint-disable eslint@next/next/no-img-element
import clsx from 'clsx'
import React from 'react'



interface LocalOnlyImageProps extends React.HTMLAttributes<HTMLImageElement> {
    file: string
    className?: string
    alt?: string
}

const LocalOnlyImage = ({ file, className, ...props }: LocalOnlyImageProps) => {
    return (
        <img
            {...props}
            src={file}
            alt={props.alt || "Local only image"}
            className={clsx("w-5/6 max-w-[480px] h-auto mb-3", className && className)}
        ></img>
    )
}


LocalOnlyImage.displayName = "LocalOnlyImage"


export default LocalOnlyImage;
