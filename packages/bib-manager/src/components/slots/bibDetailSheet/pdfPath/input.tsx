import React from "react";

interface PdfPathTriggerButtonProps {
    show: () => void;
}

const PdfPathTriggerButton = ({ show }: PdfPathTriggerButtonProps) => {
    return (
        <a
            role="button"
            onClick={show}
            className={
                "cursor-pointer w-full grid gap-2 place-items-center grid-cols-1"
            }
        >
            Set Pdf Path
        </a>
    );
};

PdfPathTriggerButton.displayName = "PdfPathTriggerButton";

export default PdfPathTriggerButton;
