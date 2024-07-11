import { BaseLayoutProps, DocsLayout } from "fumadocs-ui/layout";
import type { ReactNode } from "react";
import { AnimatedUlldLogo } from "@ulld/icons/ulld-animated";
import { appData } from "@ulld/utilities/appData";
import { pageTree } from "sources/blog"
import { sidebarLinksWithoutHref } from "#/fumaDocs/utils/sidebarLinks";

const baseOptions: BaseLayoutProps = {
    nav: {
        title: (
            <span className={"h-12 w-16"}>
                <AnimatedUlldLogo speed={2.5} show={true} />
            </span>
        ),
        url: "/",
        transparentMode: "top"
    },
    links: sidebarLinksWithoutHref("/blog"),
    githubUrl: appData.projectRepo.url,
};

export default function Layout({ children }: { children: ReactNode }) {
    return (
        <DocsLayout
            {...baseOptions}
            tree={pageTree}
            containerProps={{
                className: "relative [&_#nd-sidebar]:sticky [&_#nd-sidebar]:top-0 bg-background text-foreground",
            }}
            sidebar={{
                footerProps: {
                    className: "[&_.lucide-sun]:hidden [&_.lucide-moon]:hidden"
                },
                // Add a search bar here.
                /* banner: ( */ 
                /*     <RootToggle */
                /*         options={[ */
                /*             { */
                /*                 title: "User", */
                /*                 description: "User Documentation", */
                /*                 url: "/docs/user", */
                /*                 icon: <UserIcon />, */
                /*             }, */
                /*             { */
                /*                 title: "Developer", */
                /*                 description: "Developer Documentation", */
                /*                 url: "/docs/developer", */
                /*                 icon: <TerminalIcon />, */
                /*             }, */
                /*         ]} */
                /*     /> */
                /* ), */
            }}
        >
            {children}
        </DocsLayout>
    );
}
