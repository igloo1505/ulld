import { DocsLayoutProps, DocsLayout } from "fumadocs-ui/layout";
import type { ReactNode } from "react";
import { AnimatedUlldLogo } from "@ulld/icons/ulld-animated";
import { appData } from "@ulld/utilities/appData";
import { pageTree } from "sources/blog";
import { sidebarLinksWithoutHref } from "#/fumaDocs/utils/sidebarLinks";

const baseOptions: Omit<DocsLayoutProps, "tree"> = {
    nav: {
        title: (
            <span className={"h-12 w-16"}>
                <AnimatedUlldLogo speed={2.5} show={true} />
            </span>
        ),
        url: "/",
        transparentMode: "top",
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
                className:
                    "relative [&_#nd-sidebar]:md:sticky [&_#nd-sidebar]:top-0 [&_#nd-sidebar]:bg-background bg-background text-foreground",
            }}
            sidebar={{
                footerProps: {
                    className: "[&_.lucide-sun]:hidden [&_.lucide-moon]:hidden",
                },
            }}
        >
            {children}
        </DocsLayout>
    );
}
