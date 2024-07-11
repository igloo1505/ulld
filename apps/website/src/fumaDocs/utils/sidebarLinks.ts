import { BaseLayoutProps } from "fumadocs-ui/layout";

export const defaultDocsSidebarLinks: BaseLayoutProps["links"] = [
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
];


export const sidebarLinksWithoutHref = (href: string) => (defaultDocsSidebarLinks as any).filter((a: {url?: string}) => a.url !== href) as BaseLayoutProps["links"]
