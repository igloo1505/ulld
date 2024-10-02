import React, { DetailedHTMLProps, ImgHTMLAttributes, useMemo } from 'react'
import { EmbeddedImageProps } from '@ulld/utilities/types';
import clsx from 'clsx';



interface MemoizedEmbeddableClientImageElementProps extends EmbeddedImageProps{
  imgProps: DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>
}


/* WARN: Implemented this to avoid flickering that was caused originally by a bad event listener. Might not need this on the client anymore. */
const MemoizedEmbeddableClientImageElement = ({imgProps, id, ...props}: MemoizedEmbeddableClientImageElementProps) => {
    const imageEm = useMemo(
        () => (
            <img
                {...imgProps}
                className={clsx(
                    "!m-0 h-auto not-prose",
                    Boolean(props.sm || props.small) && "max-w-[120px] max-h-[120px]",
                    Boolean(props.md || props.medium) && "max-w-[200px] max-h-[200px]",
                    Boolean(props.lg || props.large) && "max-w-[min(350px,calc(100%-80px))] max-h-[350px]",
                    props.xl && "max-w-[min(500px,calc(100%-80px))] max-h-[500px]",
                )}
            />
        ),
        [
            imgProps.alt,
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
    return imageEm ? imageEm : null
}


MemoizedEmbeddableClientImageElement.displayName = "MemoizedEmbeddableClientImageElement"


export default MemoizedEmbeddableClientImageElement;
