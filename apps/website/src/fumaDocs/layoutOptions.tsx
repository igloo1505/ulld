import { type BaseLayoutProps, type DocsLayoutProps } from "fumadocs-ui/layout";
import { pageTree } from "docs";
import { appData } from "@ulld/utilities/appData";
import { AnimatedUlldLogo } from "@ulld/icons/ulld-animated";

// shared configuration
export const baseOptions: BaseLayoutProps = {
    nav: {
        title: (
            <span className={"h-12"}>
                <AnimatedUlldLogo speed={2.5} show={true} />
            </span>
        ),
        url: "/",
    },
    links: [
        {
            text: "Home",
            url: "/",
            active: "nested-url",
        },
        {
            text: "User",
            url: "/docs/user",
            active: "nested-url",
        },
        {
            text: "Developer",
            url: "/docs/developer",
            active: "nested-url",
        },
    ],
    githubUrl: appData.projectRepo.url,
};

// docs layout configuration
export const docsOptions: DocsLayoutProps = {
    ...baseOptions,
    tree: pageTree,
};
