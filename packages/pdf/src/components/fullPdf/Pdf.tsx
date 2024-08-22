"use client";
import React from "react"
import "./initPdf";
import "react-pdf/dist/Page/TextLayer.css";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "./pdfStuff.scss";
import { Suspense, useEffect, useState } from "react";
import { Document, DocumentProps } from "react-pdf";
import PdfPage from "./pdfPage";
import Link from "next/link";
import PdfViewAllPages from "./PdfViewAll";
import PdfToc from "./Toc";
import { ChevronRight } from "lucide-react";
import { Button } from "@ulld/tailwind/button";
import { pdfStateClasses } from "../../types";
import { DynamicIcon } from "@ulld/icons";
import { PdfManager, TextRendererType } from "@ulld/state/classes/pdfManager";

export const options = {
    standardFontDataUrl: "/standard_fonts/",
};

export type PdfClassKey = keyof typeof pdfStateClasses;

interface Props {
    file: string;
    withIcon?: boolean;
    viewState?: PdfClassKey[];
    setViewState?: (k: PdfClassKey) => void;
    tocContainerRef: React.RefObject<HTMLDivElement>;
    canvasRef: React.RefObject<HTMLCanvasElement>;
    textRenderer?: TextRendererType;
    onRender?: () => void;
    forcePage?: number;
    pageWidth?: number;
    allowToc: boolean;
    noResponsive?: boolean;
    onPageLoad?: () => void;
}

export const PdfViewer = ({
    file,
    allowToc,
    noResponsive,
    pageWidth,
    onPageLoad,
    textRenderer,
    forcePage,
    onRender,
    withIcon,
    viewState,
    setViewState,
    tocContainerRef,
    canvasRef,
}: Props) => {
    const [fileBlob, setFileBlob] = useState<any | null>(null);
    const [numPages, setNumPages] = useState<number>(null as unknown as number);
    const [pageNumber, setPageNumber] = useState(forcePage || 1);
    const [width, setWidth] = useState(768);

    const setFile = async () => {
        const manager = new PdfManager(file);
        let response = await manager.getFile();
        setFileBlob(response.data);
    };

    const handleWidth = () => {
        if (typeof window === "undefined" || noResponsive) return;
        let vw = window.innerWidth;
        let shouldShowToc = Boolean(
            allowToc && window.innerWidth >= 768 + 152 + 32 + 54,
        );
        if (shouldShowToc) {
            return setWidth(768);
        }
        setWidth(Math.min(vw - 64, 768));
    };

    useEffect(() => {
        if (typeof window === "undefined") return;
        window.addEventListener("resize", handleWidth);
        return () => window.removeEventListener("resize", handleWidth);
    }, []);

    useEffect(() => {
        if (!fileBlob) {
            setFile();
        }
    }, []);

    function onDocumentLoadSuccess({ numPages, ...data }: { numPages: number }) {
        setNumPages(numPages);
        setPageNumber(forcePage || 1);
        if (numPages === 1) {
            tocContainerRef.current?.remove();
        }
        onRender && onRender();
    }

    function changePage(offset: number) {
        setPageNumber((prevPageNumber) => prevPageNumber + offset);
    }

    function previousPage() {
        changePage(-1);
    }

    function nextPage() {
        changePage(1);
    }

    const handleError = (error: any) => {
        console.error("error: ", error);
    };

    const handleLoadError = (loadError: any) => {
        console.error("loadError: ", loadError);
    };

    const handlePageFromViewAll = (n: number) => {
        setPageNumber(n);
        setViewState && setViewState("withNavigation");
    };

    const handleGridClick: DocumentProps["onItemClick"] = (item) => {
        console.log("handleGridClick");
        setPageNumber(item.pageNumber);
        setViewState && setViewState("withNavigation");
    };

    return (
        <>
            {fileBlob && (
                <>
                    <Document
                        file={fileBlob}
                        onItemClick={handleGridClick}
                        onLoadSuccess={onDocumentLoadSuccess}
                        onError={handleError}
                        onLoadError={handleLoadError}
                        className={
                            "group/pdfDocument relative w-fit h-fit max-w-[min(768px,calc(100vw-4rem))] group-[.pdf-as-grid]/pdfContainer:max-w-[100vw]"
                        }
                    >
                        {withIcon && (
                            <Link
                                href={{
                                    pathname: "/pdf",
                                    query: { file },
                                }}
                                className={
                                    "absolute top-3 transition-all duration-300 right-3 z-50 bg-primary rounded-md scale-0 opacity-0 group-hover/pdfDocument:scale-100 group-hover/pdfDocument:opacity-100"
                                }
                            >
                                <DynamicIcon
                                    name={"paperPdf"}
                                    className={"bg-primary text-primary-content m-2"}
                                />
                            </Link>
                        )}
                        {!forcePage && (
                            <PdfToc
                                numPages={numPages}
                                tocContainerRef={tocContainerRef}
                                activePage={pageNumber}
                            />
                        )}
                        {viewState &&
                            Boolean(
                                viewState.indexOf("allPages") >= 0 ||
                                viewState.indexOf("asGrid") >= 0,
                            ) ? (
                            <PdfViewAllPages
                                asGrid={viewState.indexOf("asGrid") >= 0}
                                setPage={handlePageFromViewAll}
                                numPages={numPages}
                            />
                        ) : (
                            <PdfPage
                                pageWidth={width}
                                pageNum={pageNumber}
                                forcePage={forcePage}
                                textRenderer={textRenderer}
                                canvasRef={canvasRef}
                                onLoad={() => {
                                    if (onPageLoad) {
                                        onPageLoad();
                                    }
                                }}
                            />
                        )}
                    </Document>
                    {!forcePage && (
                        <div
                            className={
                                "flex-col justify-center items-center gap-2 hidden group-[.pdf-with-navigation]/pdfContainer:flex group-[.pdf-annotating]/pdfContainer:flex"
                            }
                        >
                            <p>
                                Page {pageNumber || (numPages ? 1 : "--")} of {numPages || "--"}
                            </p>
                            <div
                                className={"flex flex-row gap-2 justify-center items-center"}
                            >
                                <Button
                                    type="button"
                                    disabled={pageNumber <= 1}
                                    onClick={previousPage}
                                    className={"p-3 rounded-md"}
                                >
                                    <ChevronRight className={"rotate-180"} />
                                </Button>
                                <Button
                                    type="button"
                                    disabled={Boolean(numPages && pageNumber >= numPages)}
                                    onClick={nextPage}
                                    className={"p-3 rounded-md"}
                                >
                                    <ChevronRight />
                                </Button>
                            </div>
                        </div>
                    )}
                </>
            )}
        </>
    );
};

PdfViewer.displayName = "Pdf Viewer";

const PdfSuspended = (props: Props) => {
    return (
        <Suspense fallback="Loading pdf...">
            <PdfViewer {...props} />
        </Suspense>
    );
};

export default PdfSuspended;
