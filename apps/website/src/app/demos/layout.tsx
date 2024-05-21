import MdxLayout from "#/components/layouts/mdxLayout";
import MathjaxProvider from "#/components/utility/providers/mathjax";
import React, { ReactNode } from "react";

interface DemoLayoutProps {
    children: ReactNode;
}

const DemoLayout = ({ children }: DemoLayoutProps) => {
    return (
        <MdxLayout>
            <MathjaxProvider>{children}</MathjaxProvider>
        </MdxLayout>
    );
};

DemoLayout.displayName = "DemoLayout";

export default DemoLayout;
