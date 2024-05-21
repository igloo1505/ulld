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
        <div className={"w-full group-[.mdx-wide]/mdxLayout:!max-w-[min(1440px,100vw-128px)] group-[.mdx-full]/mdxLayout:!max-w-full"}>
            <h2 className={"w-full  text-start text-xl font-semibold my-4"}>
                References
            </h2>
            {citationsData[noteId as keyof typeof citationsData].citations.map(
                (citation) => {
                    return (
                    <div id={`bib-${citation.id}`} className={"flex flex-row justify-start items-start gap-4 text-sm text-gray-600 dark:text-gray-400 px-8"} key={`cit-${citation.id}`} dangerouslySetInnerHTML={{ __html: citation.htmlCitation }} />
                    );
                },
            )}
        </div>
    );
};

Citations.displayName = "Citations";

export default Citations;
