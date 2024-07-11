import { type BaseLayoutProps, type DocsLayoutProps } from "fumadocs-ui/layout";
import { pageTree } from "docs";
import { appData } from "@ulld/utilities/appData";
import { AnimatedUlldLogo } from "@ulld/icons/ulld-animated";

export const baseOptions: BaseLayoutProps = {
    nav: {
        title: (
            <span className={"h-12 w-16"}>
                <AnimatedUlldLogo speed={2.5} show={true} />
            </span>
        ),
        url: "/",
        transparentMode: "top"
    },
    links: [
        {
            text: "Home",
            url: "/",
            active: "nested-url",
        },
        {
            text: "Demos",
            url: "/demos",
            active: "nested-url",
        },
        {
            text: "Blog",
            url: "/blog",
            active: "nested-url",
        },
        {
            text: "My Work",
            url: "/myWork",
            active: "nested-url",
        },
        {
            text: "Configure",
            url: "/configure",
            active: "nested-url",
        },
        {
            text: "Sponsor",
            url: "/sponsor/newSponsors",
            active: "nested-url",
        },
    ],
    githubUrl: appData.projectRepo.url,
};


export const docsLayoutOptions: DocsLayoutProps = {
    ...baseOptions,
    tree: pageTree,
};
