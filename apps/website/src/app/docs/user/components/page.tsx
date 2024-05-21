import React from "react";
import { Documentation, allDocumentations } from "contentlayer/generated";
import staticContent from "staticContent";
import { notFound } from "next/navigation";
import MDXArticle from "#/components/layouts/mdxArticle";
import Analytics from "#/components/utility/analytics";

interface UserComponentDocumentationPageProps { }

const targetIds = [staticContent.docIds.user.componentsHome];

const UserComponentDocumentationPage = (
    props: UserComponentDocumentationPageProps,
) => {
    let articles = allDocumentations.filter(
        (a) => a.id && targetIds.includes(a.id),
    );
    let sorted: Documentation[] = targetIds
        .map((b) => articles.find((a) => a.id === b))
        .filter(Boolean) as Documentation[];
    if (!articles) return notFound();
    return (
        <>
            <Analytics
                pageView={{
                    path: "/docs/user/components",
                    title: "Documentation: Components",
                }}
            />
            {sorted.map((article) => {
                return <MDXArticle mdx={article} />;
            })}
        </>
    );
};

UserComponentDocumentationPage.displayName = "UserComponentDocumentationPage";

export default UserComponentDocumentationPage;
