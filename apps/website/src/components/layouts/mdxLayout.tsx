import React, { ReactNode } from "react";

interface MdxLayoutProps {
    children: ReactNode;
}

const MdxLayout = ({ children }: MdxLayoutProps) => {
    return (
        <div
            className={
                "group/mdxLayout w-full mdx-wide flex flex-col justify-start items-center"
            }
        >
            {children}
        </div>
    );
};

MdxLayout.displayName = "MdxLayout";

export default MdxLayout;
