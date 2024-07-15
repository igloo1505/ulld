"use client";
import clsx from "clsx";
import {
    useCallback,
    useEffect,
    useMemo,
    useRef,
    useState,
} from "react";
import PdfSuspended, { PdfClassKey } from "./Pdf";
import PdfAnnotationContainer from "./Annotator";
import { Button } from "@ulld/tailwind/button";
import TocContainer from "./TocContainer";
import { PdfManager } from "@ulld/state/classes/pdfManager";
import { htmlEm } from "@ulld/state/actions/clientOnly/dom";
import { FullPdfProps, pdfStateClasses } from "../../types";
type WithoutLoading = Omit<typeof pdfStateClasses, "loading">;


const nameMap: Record<keyof WithoutLoading, string> = {
    annotating: "Annotate",
    allPages: "View All",
    toc: "Show Toc",
    withNavigation: "Single Page",
    asGrid: "Grid",
};


interface ButtonProps {
    stateClass: keyof WithoutLoading;
    setState: (k: PdfClassKey) => void;
    activeState: PdfClassKey[];
}

const PdfStateButton = ({ stateClass, setState, activeState }: ButtonProps) => {
    const isActive = () => {
        return activeState.indexOf(stateClass) >= 0;
    };
    return (
        <Button
            className={clsx(
                stateClass === "toc" &&
                "group-[.pdf-view-state-asGrid]/pdfPageWrapper:hidden group-[.pdf-view-state-allPages]/pdfPageWrapper:hidden group-[.pdf-view-state-annotating]/pdfPageWrapper:hidden",
                isActive()
                    ? "bg-muted text-muted-foreground"
                    : "bg-primary text-primary-foreground",
            )}
            onClick={() => setState(stateClass)}
        >
            {nameMap[stateClass]}
        </Button>
    );
};

const getClasses = (classes: PdfClassKey[]) => {
    return classes.map((c) => pdfStateClasses[c]).join(" ");
};

const PdfPageWrapper = ({ file }: FullPdfProps) => {
    const [pdfViewState, setPdfViewState] = useState<PdfClassKey[]>([
        "withNavigation",
    ]);
    const [searchText, setSearchText] = useState("");
    const tocContainerRef = useRef<HTMLDivElement>(null!);
    const canvasRef = useRef<HTMLCanvasElement>(null!);
    const pdfGroupRef = useRef<HTMLDivElement>(null!);
    useEffect(() => {
        htmlEm()?.classList.add("no-nav-transparent");
    }, []);
    const handleStateChange = (_class: PdfClassKey) => {
        const inState = pdfViewState.indexOf(_class) >= 0;
        if (inState) {
            if (
                _class === "annotating" ||
                _class === "allPages" ||
                _class === "loading"
            ) {
                setPdfViewState(["withNavigation"]);
            }
            if (_class === "toc") {
                setPdfViewState(pdfViewState.filter((c) => c !== "toc"));
            }
        }
        if (!inState) {
            if (_class === "toc") {
                setPdfViewState([...pdfViewState, "toc"]);
                return;
            }
            setPdfViewState([_class]);
        }
    };

    const matchHeight = (e?: Event, _try: number = 0) => {
        if (!tocContainerRef.current || !canvasRef.current) {
            return;
        }
        tocContainerRef.current.style.height = canvasRef.current.style.height;
    };

    useEffect(() => {
        if (pdfViewState.includes("toc")) {
            matchHeight();
        }
    }, [pdfViewState]);

    useEffect(() => {
        matchHeight(undefined);
        window.addEventListener("resize", matchHeight);
        return () => window.removeEventListener("resize", matchHeight);
    }, []);

    const manager = useMemo(() => new PdfManager(file.rootRelativePath, canvasRef), []);

    const resetSelections = () => {
        manager.selectedText = [];
    };

    /* BUG: Find way to reliably map list of textItems on searchText change and clear array before the first index only. The approach used by react-pdf doesn't pass an index so it's not obvious how to do it without killing performance even more. */
    const annotationRenderer = useCallback(
        (item: any) => {
            return manager.annotationHighlighter(item, searchText);
        },
        [searchText],
    );

    return (
        <div
            className={clsx(
                "flex flex-col justify-start items-center gap-4 p-6 group/pdfPageWrapper",
                `pdf-view-state-${pdfViewState}`,
            )}
        >
            <div className={"flex flex-row justify-center items-center gap-4"}>
                {Object.keys(nameMap).map((k) => {
                    return (
                        <PdfStateButton
                            stateClass={k as keyof WithoutLoading}
                            setState={handleStateChange}
                            activeState={pdfViewState}
                            key={`pdf-view-state-${k}`}
                        />
                    );
                })}
            </div>
            <div
                className={clsx(
                    "grid grid-cols-[auto_1fr_auto] h-full w-fit group/pdfContainer gap-4 lg:gap-8",
                    getClasses(pdfViewState),
                )}
                ref={pdfGroupRef}
            >
                <TocContainer ref={tocContainerRef} />
                <div className={clsx("pdfview max-w-[100%-152px]")}>
                    <PdfSuspended
                        noResponsive
                        allowToc={true}
                        canvasRef={canvasRef}
                        textRenderer={annotationRenderer}
                        file={file.rootRelativePath}
                        tocContainerRef={tocContainerRef}
                        viewState={pdfViewState}
                        setViewState={handleStateChange}
                    />
                </div>
                <PdfAnnotationContainer
                    manager={manager}
                    pdfGroupRef={pdfGroupRef}
                    canvasRef={canvasRef}
                    resetSelection={resetSelections}
                    show={pdfViewState.includes("annotating")}
                    searchText={searchText}
                    setSearchText={setSearchText}
                />
            </div>
        </div>
    );
};

PdfPageWrapper.displayName = "PdfPageWrapper";

export default PdfPageWrapper;
