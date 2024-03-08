"use client"
import { client } from '#/trpc/client';
import React, { useEffect, useId, useRef, useState } from 'react'
import ImageGallery, { ReactImageGalleryItem } from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

/* BUG: This needs to be dramatically improved. It works as it is, ***kinda,*** but it lags super bad and renders images that didn't load successfully, causing the entire carousel to collapse when those images are moved into focus. Either fix this implementation or develop something from scratch. */

/* TODO: Come back and add ability to supply an array of ReactImageGalleryItems, and only change the paths to reflect API end point to make use of other properties like titles and captions and whatnot. */
type CarouselProps = {
} & ({
    dir: string
    recursive?: boolean
    paths?: undefined
    lazy?: boolean
    thumbnails?: boolean
}) | ({
    paths: string[]
    dir?: undefined
    recursive?: undefined
    thumbnails?: boolean
    lazy?: boolean
})


const Carousel = ({ dir, recursive, paths, thumbnails, lazy }: CarouselProps) => {
    const [_paths, set_paths] = useState<ReactImageGalleryItem[]>([])
    const formatPaths = (__paths: string[]) => {
        return __paths.map((p, i) => {
            let sp = new URLSearchParams()
            sp.set("file", p)
            return {
                original: `/api/media/images/get?${sp.toString()}`,
                ...(thumbnails && { thumbnail: `/api/media/images/get?${sp.toString()}` }),
                loading: i === 0 ? "eager" : lazy ? "lazy" : "eager"
            } satisfies ReactImageGalleryItem
        })
    }

    const setPaths = async () => {
        console.log("paths, dir: ", paths, dir)
        if (paths) {
            let _p = formatPaths(paths)
            set_paths(_p)
        } else if (dir) {
            let _p = await client.getImagesInDir.query({
                path: dir,
                recursive: Boolean(recursive)
            })
            let formatted = formatPaths(_p)
            console.log("formatted: ", formatted)
            set_paths(formatted)
        }
    }


    useEffect(() => {
        setPaths()
    }, [paths])


    return (
        <div className={"w-full h-fit flex justify-center items-center m-3"}>
            <div className={"w-full h-fit max-w-screen-md max-h-[90vh]"}>
                <ImageGallery
                    items={_paths || []}
                />
            </div>
        </div>
    )
}


Carousel.displayName = "Carousel"


export default Carousel;
