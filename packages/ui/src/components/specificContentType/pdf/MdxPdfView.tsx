"use client"
import React, { useEffect, useRef, useState } from 'react'
import { PdfViewer } from './Pdf'
import clsx from 'clsx'
import TocContainer from './TocContainer'
import { pdfStateClasses } from '../../../types/general'


interface MdxPdfViewerProps {
    file: string
    page?: number
    hideToc?: boolean
    width?: number
}

export const MdxPdfViewer = ({ file, width, page, hideToc }: MdxPdfViewerProps) => {
    const allowToc = !page && !hideToc
    const [showToc, setShowToc] = useState(typeof window === "undefined" ? allowToc : Boolean(allowToc && window.innerWidth >= 768 + 152 + 32 + 54))
    const tocRef = useRef<HTMLDivElement>(null!)
    const canvasRef = useRef<HTMLCanvasElement>(null!)


    const viewportListener = () => {
        if (allowToc) {
            setShowToc(window.innerWidth >= 768)
            matchHeight()
        }
    }


    const matchHeight = () => {
        if (!tocRef.current || !canvasRef.current) {
            return
        }
        tocRef.current.style.height = canvasRef.current.style.height
    }


    const handleShowToc = () => {
        let shouldShowToc = Boolean(allowToc && window.innerWidth >= 768 + 152 + 32 + 54)
        setShowToc(shouldShowToc)
        if (shouldShowToc) matchHeight()
    }

    useEffect(() => {
        if (showToc) matchHeight()
    }, [showToc])


    useEffect(() => {
        if (!allowToc) return
        matchHeight()
        handleShowToc()
        window.addEventListener("resize", handleShowToc)
        return () => {
            window.removeEventListener("resize", handleShowToc)
        }
    }, [])


    const initialEffects = () => {
        if (!allowToc) return
        viewportListener()
    }


    return (
        <div className={clsx("pdfview my-4 w-screen flex justify-center items-center", pdfStateClasses.withNavigation)}>
            <div className={clsx("grid grid-cols-[auto_1fr] my-3 -ml-24 h-full w-fit group/pdfContainer gap-4 lg:gap-8", showToc && "pdf-show-toc")}>
                <TocContainer ref={tocRef} />
                <PdfViewer
                    pageWidth={width}
                    file={file}
                    allowToc={allowToc}
                    forcePage={page}
                    onRender={initialEffects}
                    canvasRef={canvasRef}
                    tocContainerRef={tocRef}
                    onPageLoad={matchHeight}
                    withIcon
                />
            </div>
        </div>
    )
}


MdxPdfViewer.displayName = "MdxPdfViewer"

