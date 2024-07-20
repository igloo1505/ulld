import React from "react";
import { ComponentDocsListPageProps } from "../../../types/general";
import ComponentDocsSummaryItem from "./componentDocsItem";

const ComponentDocsListPage = ({ items }: ComponentDocsListPageProps) => {
    return (
        <div
            className={
                "w-full h-full min-h-fit flex flex-col justify-start items-center gap-4 md:grid md:grid-cols-2"
            }
        >
            {items.map((x) => {
                return (
                    <ComponentDocsSummaryItem key={`doc-${x.componentId}`} item={x} />
                );
            })}
        </div>
    );
};

ComponentDocsListPage.displayName = "ComponentDocsListPage";

export default ComponentDocsListPage;
