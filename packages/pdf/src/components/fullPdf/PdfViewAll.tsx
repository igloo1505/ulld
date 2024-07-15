"use client"
import React, { useEffect, useState } from 'react'
import { Page } from 'react-pdf'



interface PdfViewAllPagesProps {
    numPages: number
    setPage: (n: number) => void
    asGrid: boolean
}

const PdfViewAllPages = ({ numPages, asGrid, setPage }: PdfViewAllPagesProps) => {
    const [width, setWidth] = useState(0)
    const setMax = (vw: number) => {
        setWidth(vw >= 768 ? 768 : vw)
    }
    const viewportListener = () => {
        if (!asGrid) return
        let vw = window.innerWidth
        if (vw >= 1024) {
            return setWidth(0.3 * vw)
        }
        if (vw >= 768) {
            return setWidth(0.4 * vw)
        }
        setWidth(0.85 * vw)
    }
    const handleWidth = () => {
        console.log("asGrid: ", asGrid)
        if (asGrid) {
            viewportListener()
        } else {
            setMax(window.innerWidth)
        }
    }
    useEffect(() => {
        handleWidth()
    }, [asGrid])

    useEffect(() => {
        handleWidth()
        window.addEventListener("resize", handleWidth)
        return () => window.removeEventListener("resize", handleWidth)
    }, [])


    return (
        <div className={"grid max-w-screen gap-2 group-[.pdf-as-grid]/pdfContainer:grid-cols-[1fr] group-[.pdf-as-grid]/pdfContainer:md:grid-cols-[1fr_1fr] group-[.pdf-as-grid]/pdfContainer:lg:grid-cols-[1fr_1fr_1fr]"}
        >
            {width && Array.from(
                new Array(numPages),
                (el, index) => (
                    <div
                        key={`page_${index + 1}`}
                        className={"relative w-fit h-fit group/pageContainer"}>
                        <Page
                            renderAnnotationLayer={false}
                            renderMode={"canvas"}
                            width={width}
                            pageNumber={index + 1}
                            className={"w-full h-auto group-[.pdf-as-grid]/pdfContainer:w-full group-[.as-grid]/pdfContainer:md:w-[40vw] group-[.as-grid]/pdfContainer:lg:w-[30vw] group-[.as-grid]/pdfContainer:lg:max-w-[30vw]"}
                        />
                        <div className={"absolute z-50 w-full h-full text-white top-0 left-0 bottom-0 right-0 bg-black opacity-0 justify-center items-center hidden group-[.pdf-as-grid]/pdfContainer:flex group-hover/pageContainer:opacity-70 cursor-pointer"} onClick={() => setPage(index + 1)}>
                            {`Page ${index + 1}`}
                        </div>
                    </div>
                ),
            )}
        </div>
    )
}


PdfViewAllPages.displayName = "PdfViewAllPages"


export default PdfViewAllPages;
