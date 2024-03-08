"use client"
import { useEffect } from 'react'
import lightOrDarkImage from '@check-light-or-dark/image';


interface ImageBackgroundOverlayProps {
    image: string
}

const ImageBackgroundOverlay = ({ image }: ImageBackgroundOverlayProps) => {
    const getDarkness = async () => {
        let alpha = await lightOrDarkImage({
            image: image,
        })
        let em = document.getElementById("pinnedQuoteContainer")
        if (em) {
            em.setAttribute("data-bg", alpha)
        }
    }

    useEffect(() => {
        getDarkness()
    }, [])
    return null
}


ImageBackgroundOverlay.displayName = "ImageBackgroundOverlay"


export default ImageBackgroundOverlay;
