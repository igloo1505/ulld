import { BaseLayoutProps } from "../../types/general";

export const defaultDocsSidebarLinks: BaseLayoutProps["links"] = [
    {
        text: "Home",
        url: "/",
        active: "nested-url",
    },
    {
        text: "Docs",
        url: "/docs/user",
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
        url: "/sponsor",
        active: "nested-url",
    },
];


export const sidebarLinksWithoutHref = (href: string) => (defaultDocsSidebarLinks as any).filter((a: {url?: string}) => a.url !== href) as BaseLayoutProps["links"]
