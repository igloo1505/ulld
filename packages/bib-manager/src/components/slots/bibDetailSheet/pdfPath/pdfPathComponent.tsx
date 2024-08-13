"use client";
import React, { useEffect, useRef } from "react";
import PdfPathComponent from "./pathComponent";
import PdfPathTriggerButton from "./input";
import { FilePathInputModal } from "@ulld/ui/filePathInputModal";
import { useFilePathInputModal } from "@ulld/hooks/useFilePathInputModal";
import { client } from "@ulld/api/client";

interface BibSheetPdfPathComponentProps {
    inputId: string;
    itemId: string;
    initialValue?: string | null;
}

const BibSheetPdfPathComponent = ({
    inputId,
    itemId,
    initialValue,
}: BibSheetPdfPathComponentProps) => {

    const { value, isInitialValue, show: showFilePathModal } = useFilePathInputModal(
        inputId,
        initialValue,
    );

    const updating = useRef(false)

    const handlePathUpdate = async (newPath: string | null) => {
        if(updating.current) {
            return
        }
        console.log("newPath: ", newPath)
        updating.current = true
        let res = await client.bibliography.setBibEntryPdfPath.mutate({
            bibEntryId: itemId,
            pdfPath: newPath,
        });
        if (res) {
            showFilePathModal(null);
        }
        updating.current = false
    };

    useEffect(() => {
        if (value !== undefined && !isInitialValue) {
            handlePathUpdate(value);
        }
    }, [value, isInitialValue]);

    const showPdfPathModal = () => {
        showFilePathModal({
            glob: "**/*.pdf",
            label: "Pdf Path",
        });
    };

    return (
        <>
            <FilePathInputModal
                inputId={inputId}
                label="Pdf Path"
                title="Select a Pdf path"
                classes={{
                    container: "w-fit max-w-[90vw] min-w-fit",
                }}
                comboboxClasses={{
                    button: "w-fit max-w-[85vw] min-w-[300px]",
                    popoverContent: "min-w-[300px] w-fit max-w-[calc(100vw-2rem)]"
                }}
            />
            <div className={"cursor-pointer w-full text-sm max-w-full overflow-x-auto pb-2"}>
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
