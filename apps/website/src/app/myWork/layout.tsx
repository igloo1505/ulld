import MdxLayout from "#/components/layouts/mdxLayout";
import MathjaxProvider from "#/components/utility/providers/mathjax";
import React, { ReactNode } from "react";

interface MyWorkLayoutProps {
    children: ReactNode;
}

const MyWorkLayout = ({ children }: MyWorkLayoutProps) => {
    return (
        <MdxLayout>
            <MathjaxProvider>{children}</MathjaxProvider>
        </MdxLayout>
    );
};

MyWorkLayout.displayName = "MyWorkLayout";

export default MyWorkLayout;
