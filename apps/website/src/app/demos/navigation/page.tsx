import MDXArticle from "#/components/layouts/mdxArticle";
import ComingSoon from "#/components/utility/comingSoon";
import { allDemos } from "contentlayer/generated";
import React from "react";

interface NavigationDemoPageProps { }

const NavigationDemoPage = (props: NavigationDemoPageProps) => {
    const item = allDemos.find((a) => a.id === "navigationDemo");
    if (!item) {
        throw new Error("No navigation demo found");
    }
    return <MDXArticle
        paddingTop={false}
        mdx={item}
    />;
};

NavigationDemoPage.displayName = "NavigationDemoPage";

export default NavigationDemoPage;
