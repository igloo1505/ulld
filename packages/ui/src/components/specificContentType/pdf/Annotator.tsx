import { PdfManager, TextItemType, selectionObserver } from '#/classes/pdfManager'
import TextInput from '#/components/inputs/text'
import clsx from 'clsx'
import React, { ChangeEvent, useEffect, useState } from 'react'
import { useDocumentContext, usePageContext } from 'react-pdf'



interface PdfAnnotationContainerProps {
    show: boolean
    searchText: string
    setSearchText: (s: string) => void
    resetSelection: () => void
    manager: PdfManager
    canvasRef: React.RefObject<HTMLCanvasElement>
    pdfGroupRef: React.RefObject<HTMLDivElement>
}


const PdfSearchResult = ({ item }: { item: TextItemType }) => {
    const handleHover = (hover: boolean) => {
        document.getElementById(item.id)?.classList?.[hover ? "add" : "remove"]("highlight-hover")
    }
    return (
        <div
            className={"w-full px-4 py-4 bg-gray-200 dark:bg-gray-700 border-b-gray-300 dark:border-b-gray-300"}
            onMouseEnter={() => handleHover(true)}
            onMouseLeave={() => handleHover(false)}
        >{item.str}</div>
    )
}

const PdfAnnotationContainer = ({ show, pdfGroupRef, manager, setSearchText, searchText, canvasRef }: PdfAnnotationContainerProps) => {
    const [searchResults, setSearchResults] = useState<TextItemType[]>([])

    const selectHandler = () => {
        selectionObserver(manager)
    }

    useEffect(() => {
        document.addEventListener("selectionchange", selectHandler)
        manager.setCanvasRect()
        return () => document.removeEventListener("selectionchange", selectHandler)
    }, [])


    useEffect(() => {
        setSearchResults(manager.selectedText)
    }, [manager.selectedText])

    const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchText(e.target.value)
    }

    const handlePdfSearch = () => {

    }

    return (
        <div className={clsx("h-full bg-gray-100 overflow-hidden rounded-lg dark:bg-gray-800 transition-[width] duration-200", show ? "w-[40vw] py-2 px-5" : "w-0 p-0")}>
            <TextInput
                onUpdate={handlePdfSearch}
                onChange={handleSearchChange}
                value={searchText}
                classes={{ container: "mb-2" }}
            />
            <div className={"w-full flex flex-col justify-center items-center"}>
                {searchResults.map((r, i) => <PdfSearchResult item={r} key={`pdf-result-${i}`} />)}
            </div>
        </div>
    )
}


PdfAnnotationContainer.displayName = "PdfAnnotationContainer"


export default PdfAnnotationContainer;
