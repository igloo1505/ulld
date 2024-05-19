import React, { ReactNode } from "react";

interface MdxLayoutProps {
    children: ReactNode;
}

const MdxLayout = ({ children }: MdxLayoutProps) => {
    return <div>
        {children}
    </div>;
};

MdxLayout.displayName = "MdxLayout";

export default MdxLayout;
