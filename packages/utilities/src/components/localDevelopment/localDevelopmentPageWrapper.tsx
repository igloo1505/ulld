import React, { ReactNode } from "react";

interface LocalDevelopmentPageWrapperProps {
    children: ReactNode;
}

const LocalDevelopmentPageWrapper = ({
    children,
}: LocalDevelopmentPageWrapperProps) => {
    return (
        <div
            className={
                "w-full h-full min-h-screen flex flex-col justify-center items-center gap-6 p-8 md:px-16"
            }
        >
            {children}
        </div>
    );
};

LocalDevelopmentPageWrapper.displayName = "LocalDevelopmentPageWrapper";

export default LocalDevelopmentPageWrapper;
