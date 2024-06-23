import BlogLayout from "#/components/layouts/blogLayout";
import React, { ReactNode } from "react";

interface BlogLayoutPageProps {
    children: ReactNode;
}

const BlogLayoutPage = ({ children }: BlogLayoutPageProps) => {
    return (
        <BlogLayout>
            {children}
        </BlogLayout>
    );
};

BlogLayoutPage.displayName = "BlogLayoutPage";

export default BlogLayoutPage;
