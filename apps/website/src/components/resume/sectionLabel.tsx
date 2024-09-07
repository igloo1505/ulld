import clsx from "clsx";
import { ArrowBigRight, ArrowLeftIcon } from "lucide-react";
import React, { ReactNode } from "react";

interface ResumeSectionLabelProps {
    children: ReactNode;
    dir: "left" | "right";
}

const labelHeight = 40;

const ResumeSectionLabel = ({ children, dir }: ResumeSectionLabelProps) => {
    const heightRatio = (labelHeight + 1.5) / Math.SQRT2;

    return (
        <div
            className={
                "w-fit overflow-x-visible relative border-2 border-primary bg-primary px-4 z-[1] select-none"
            }
            style={{
                height: `${labelHeight}px`,
            }}
        >
            <div className={"w-full h-full flex justify-center items-center z-10 bg-primary"}>
                {children}
            </div>
            <div
                className={clsx("absolute top-[3.5px] rotate-45 bg-primary z-[-1]")}
                style={{
                    height: `${heightRatio}px`,
                    width: `${heightRatio}px`,
                    ...(dir === "right"
                        ? {
                            right: `-17px`,
                        }
                        : {
                            left: `-17px`,
                        }),
                }}
            />
        </div>
    );
};

ResumeSectionLabel.displayName = "ResumeSectionLabel";

export default ResumeSectionLabel;
