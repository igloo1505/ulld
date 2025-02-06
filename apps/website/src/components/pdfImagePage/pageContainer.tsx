import React, { type ReactNode } from "react";
import PdfPageImage, { PdfPageImageProps } from "./pdfPage";

interface PdfPageContainerProps
    extends Pick<PdfPageImageProps, "pdfTitle" | "alt"> {
    pages: string[];
}

const PdfPageContainer = ({
    pages,
    ...props
}: PdfPageContainerProps): ReactNode => {
    return (
        <div className="w-full flex flex-col justify-start items-center min-h-screen gap-6 md:gap-8 my-8">
            {pages.map((p, i) => {
                return <PdfPageImage path={p} {...props} idx={i} />;
            })}
        </div>
    );
};

PdfPageContainer.displayName = "PdfPageContainer";

export default PdfPageContainer;
