import React, { ReactNode } from "react";
import "#/styles/proseStyles.scss";
import DocsSidebar from "#/components/pageSpecific/docs/navigation/sidebar/main";

interface DocsLayoutProps {
    children: ReactNode;
}

const DocsLayout = ({ children }: DocsLayoutProps) => {
    return (
        <div className={"w-full min-h-screen-noNav grid grid-cols-[300px_1fr] gap-6 mt-[76px]"}>
            <DocsSidebar />
            <div className={"w-full pr-6"}>{children}</div>
        </div>
    );
};

DocsLayout.displayName = "DocsLayout";

export default DocsLayout;
