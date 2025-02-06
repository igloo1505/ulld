import Image from "next/image";
import React, { type ReactNode } from "react";

export interface PdfPageImageProps {
    path: string;
    pdfTitle: string;
    idx: number;
    alt?: string;
}

const PdfPageImage = (props: PdfPageImageProps): ReactNode => {
    return (
        <Image
            alt={props.alt || `${props.pdfTitle} - page ${props.idx + 1}`}
            src={props.path}
            className="relative object-contain h-fit max-h-[980px] w-[min(800px,calc(100vw-4rem))]"
            width={800}
            height={980}
        />
    );
};

PdfPageImage.displayName = "PdfPageImage";

export default PdfPageImage;
