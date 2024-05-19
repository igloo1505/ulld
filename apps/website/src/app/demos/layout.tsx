import MdxLayout from "#/components/layouts/mdxLayout";
import React, { ReactNode } from "react";

interface DemoLayoutProps {
    children: ReactNode;
}

const DemoLayout = ({ children }: DemoLayoutProps) => {
    return <MdxLayout>{children}</MdxLayout>;
};

DemoLayout.displayName = "DemoLayout";

export default DemoLayout;
