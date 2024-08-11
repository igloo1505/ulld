import React from "react";
import Link from "next/link";
import {
    ContextMenu,
    ContextMenuTrigger,
    ContextMenuContent,
    ContextMenuItem,
} from "@ulld/tailwind/context-menu";

interface PdfPathComponentProps {
    showPathModal: () => void;
    pdfPath: string;
}

const PdfPathComponent = ({
    showPathModal,
    pdfPath,
}: PdfPathComponentProps) => {
    return (
        <ContextMenu>
            <ContextMenuTrigger>
                <Link
                    className={
                        "place-self-start w-[310px] flex flex-row justify-start items-start gap-0 flex-wrap transition-opacity duration-200 delay-300"
                    }
                    href={`/pdf?${(() => {
                        let _params = new URLSearchParams();
                        _params.set("file", pdfPath);
                        return _params.toString();
                    })()}`}
                >
                    {pdfPath.split("/").map((s, i, a) => {
                        return (
                            <span key={`pk-${i}`}>{i === a.length - 1 ? s : `${s}/`}</span>
                        );
                    })}
                </Link>
            </ContextMenuTrigger>
            <ContextMenuContent>
                <ContextMenuItem inset onClick={showPathModal}>
                    {"Edit"}
                </ContextMenuItem>
            </ContextMenuContent>
        </ContextMenu>
    );
};

PdfPathComponent.displayName = "PdfPathComponent";

export default PdfPathComponent;
