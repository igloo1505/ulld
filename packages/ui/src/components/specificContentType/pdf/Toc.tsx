import clsx from 'clsx'
import React from 'react'
import { createPortal } from 'react-dom'
import { Thumbnail } from 'react-pdf'



interface PdfTocProps {
    numPages: number
    activePage: number
    tocContainerRef: React.RefObject<HTMLDivElement>
}




const ThumbNailEm = ({ pageNum, activePage, onClick }: { pageNum: number, activePage: number, onClick?: (n: number) => void }) => {
    return (
        <Thumbnail
            className={clsx("border-l-[6px]", pageNum === activePage ? "border-l-blue-500" : "border-l-transparent")}
            pageNumber={pageNum}
            width={130}
        />
    )
}


const PdfToc = ({ numPages, tocContainerRef, activePage }: PdfTocProps) => {
    if (!tocContainerRef.current || numPages === 1) return null
    return (
        createPortal(
            (<div className={"flex flex-col gap-2 justify-start items-center w-[calc(100%-1rem)] mx-2"}>
                {Array.from(
                    new Array(numPages),
                    (el, index) => (
                        <ThumbNailEm activePage={activePage} pageNum={index + 1} key={`toc-em-${index}`} />
                    ))
                }
            </div>), tocContainerRef.current)
    )
}


PdfToc.displayName = "PdfToc"


export default PdfToc;
