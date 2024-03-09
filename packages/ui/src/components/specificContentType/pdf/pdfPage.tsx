"use client"
import { TextRendererType } from '@ulld/state'
import clsx from 'clsx'
import React, { useState } from 'react'
import { Page } from 'react-pdf'






interface PdfPageProps {
    pageNum: number
    canvasRef: React.RefObject<HTMLCanvasElement>
    textRenderer: TextRendererType
    forcePage?: number
    pageWidth?: number
    onLoad?: () => void
}


const PdfPage = ({ pageNum, pageWidth, forcePage, textRenderer, onLoad, canvasRef }: PdfPageProps) => {
    const [hasLoaded, setHasLoaded] = useState(false)

    const handleLoaded = () => {
        setHasLoaded(true)
        onLoad && onLoad()
    }

    let params = {
        ...(canvasRef && { canvasRef: canvasRef })
    }

    const singlePage = typeof forcePage !== "undefined"

    console.log("pageWidth: ", pageWidth)

    return (
        <>
            <Page
                pageNumber={pageNum}
                renderAnnotationLayer={true}
                width={pageWidth ? pageWidth : window.innerWidth - 152}
                onLoadSuccess={handleLoaded}
                className={clsx("w-fit opacity-0 overflow-hidden", hasLoaded && "opacity-100")}
                customTextRenderer={singlePage ? undefined : textRenderer}
                {...params}
            />
        </>
    )
}


PdfPage.displayName = "PdfPage"


export default PdfPage;
