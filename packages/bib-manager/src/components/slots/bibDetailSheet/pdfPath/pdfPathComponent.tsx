import React from "react";
import PdfPathComponent from "./pathComponent";
import PdfPathTriggerButton from "./input";
import { FilePathInputModal } from "@ulld/ui/filePathInputModal";

interface BibSheetPdfPathComponentProps {
    inputId: string;
    itemId: string;
}

const BibSheetPdfPathComponent = ({
    inputId,
    itemId,
}: BibSheetPdfPathComponentProps) => {
    const { value, show: showFilePathModal } = useFilePathInputModal(
        pdfPathId,
        "pdfPath" in item ? item.pdfPath : null,
    );

    const handlePathUpdate = (newPath: string) => {
        console.log("newPath: ", newPath);
    };

    useEffect(() => {
        handlePathUpdate(value);
    }, [value]);
    const showPdfPathModal = () => {
        showFilePathModal({
            glob: "**/*.pdf",
            label: "Pdf Path",
        });
    };

    return (
        <>
            <FilePathInputModal id={pdfPathId} />
            <div className={"cursor-pointer w-full text-sm"}>
                {value ? (
                    <PdfPathComponent pdfPath={value} show={showPdfPathModal} />
                ) : (
                    <PdfPathTriggerButton show={showPdfPathModal} />
                )}
            </div>
        </>
    );
};

BibSheetPdfPathComponent.displayName = "BibSheetPdfPathComponent";

export default BibSheetPdfPathComponent;
