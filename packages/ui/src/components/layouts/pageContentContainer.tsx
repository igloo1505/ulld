import React, { ReactNode } from "react";
import ContentItemPageObserver from "../observers/ContentItemPageObserver";
import cn from "@ulld/utilities/cn";

interface PageContainerProps {
    children: ReactNode;
    canBookmark?: boolean;
    center?: boolean;
}

const PageContainer = ({
    children,
    canBookmark,
    center,
}: PageContainerProps) => {
    return (
        <>
            <ContentItemPageObserver canBookmark={canBookmark} />
            <div
                className={cn("pageMargins", center && "pageCenterContent")}
                id="page-content-container"
            >
                {children}
            </div>
        </>
    );
};

PageContainer.displayName = "PageContainer";

export default PageContainer;
