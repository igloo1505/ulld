import React, { ReactNode } from "react";
import "#/styles/proseStyles.scss"
import MdxLayout from "#/components/layouts/mdxLayout";

interface DocsLayoutProps {
  children: ReactNode;
}

const DocsLayout = ({ children }: DocsLayoutProps) => {
  return <MdxLayout>
            {children}
        </MdxLayout>
};

DocsLayout.displayName = "DocsLayout";

export default DocsLayout;
