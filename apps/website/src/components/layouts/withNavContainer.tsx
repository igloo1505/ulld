import React, { ReactNode } from "react";

interface WithNavContainerProps {
    children: ReactNode;
}

const WithNavContainer = ({ children }: WithNavContainerProps) => {
    return <div className={"pt-[76px] min-h-screen-noNav"}>{children}</div>;
};

WithNavContainer.displayName = "WithNavContainer";

export default WithNavContainer;
