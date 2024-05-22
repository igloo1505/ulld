import React from "react";
import citationsData from "#/staticData/citations.json";

interface CitationsProps {
    noteId?: string;
}

const Citations = ({ noteId }: CitationsProps) => {
    if (
        !noteId ||
        !citationsData[noteId as keyof typeof citationsData] ||
        citationsData[noteId as keyof typeof citationsData].citations.length === 0
    ) {
        return null;
    }
    return (
        <div
            className={
                "w-full group-[.mdx-wide]/mdxLayout:!max-w-[min(1440px,100%-64px)] group-[.mdx-full]/mdxLayout:!max-w-full"
            }
        >
            <h2 className={"w-full  text-start text-xl font-semibold my-4"}>
                References
            </h2>
            {citationsData[noteId as keyof typeof citationsData].citations.map(
                (citation) => {
                    return (
                        <div
                            className={"grid grid-cols-[auto_1fr] place-items-baseline text-sm text-gray-600 dark:text-gray-400"} 
                            key={citation.id}
                        >
                            <div className={"mr-2 text-link"}>{`${citation.pageIndex + 1}.`}</div>
                            <div
                                id={`bib-${citation.id}`}
                                key={`cit-${citation.id}`}
                                dangerouslySetInnerHTML={{ __html: citation.htmlCitation }}
                            />
                        </div>
                    );
                },
            )}
        </div>
    );
};

Citations.displayName = "Citations";

export default Citations;
