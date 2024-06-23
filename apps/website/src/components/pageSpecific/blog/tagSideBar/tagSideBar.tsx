"use client";
import React, { useEffect, useRef } from "react";
import TagList from "./tagList";
import { usePathname, useSearchParams } from "next/navigation";
import { XIcon } from "lucide-react";
import { navbarButtonClasses } from "#/components/layouts/navbar/navbarButtonGroup";
import NavbarButtonPortal from "#/components/utility/portals/navbar";
import Backdrop from "#/components/utility/backdrop";
import { toggleBlogSidebar } from "#/lib/actions/client";
interface BlogTagSideBarProps { }



/* PRIORITY: Come back here first thing when on power again and handle the height discrepency when scrolling. It's almost not noticable on the blog page, but on a actual blog entry it's a nightmare. */
/* TODO: Add click outside listener conditional on blog entry page... not blog list page. */
const BlogTagSideBar = ({ }: BlogTagSideBarProps) => {
    const sp = useSearchParams();
    let t = sp.getAll("tags");
    const ref = useRef<HTMLDivElement>(null!);
    const footer = useRef<HTMLDivElement | null>(null!);
    const buttonRef = useRef<HTMLAnchorElement>(null!);
    const y = useRef<number>(null!);
    const pn = usePathname()

    const getSidebarPosition = (currentScrollPosition: number) => {
        if (footer.current) {
            let footerDiff =
                window.innerHeight +
                currentScrollPosition -
                footer.current?.offsetTop;
            if (footerDiff > 0) {
                return -footerDiff - 76;
            }
        }
        return -Math.min(currentScrollPosition, 76);
    };

    useEffect(() => {
        if (typeof window === "undefined" || !ref.current) return;
        let em = document.getElementById(
            "main-footer-container",
        ) as HTMLDivElement | null;
        footer.current = em || null;
        if (em) {
            let initialPosition = getSidebarPosition(window.scrollY);
            ref.current.style.transform = `translateY(${initialPosition}px)`;
            y.current = initialPosition;
        }
    }, []);

    const handleScroll = () => {
        let newPosition = getSidebarPosition(window.scrollY);
        ref.current.style.transform = `translateY(${newPosition}px)`;
        ref.current.style.height = `${Math.min(window.innerHeight, window.innerHeight - (76 - window.scrollY))}px`
        y.current = newPosition;
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    let activeTags: string[] = Array.isArray(t)
        ? t
        : t !== null
            ? [t]
            : ([] as string[]);


    /* TODO: A *horrible* approach to avoiding the flashing of a misaligned sidebar, but for now it's going to have to be good enough. Look further into this when on wifi. */
    /* if (!hasSetInitialPosition) return null; */

    return (
        <div
            ref={ref}
            className={
                "h-screen-noNav border-r w-[300px] fixed top-[76px] left-[-300px] group-[.open]/blogLayout:left-0 hidden blogMobile:block transition-[left] duration-300 bg-background z-50"
            }
        >
            {pn !== "/blog" && <Backdrop
                onClose={() => toggleBlogSidebar({buttonRef})}
            />}
            <NavbarButtonPortal>
                <a
                    role="button"
                    onClick={() => toggleBlogSidebar({buttonRef})}
                    ref={buttonRef}
                    className={navbarButtonClasses}
                    id="navbar-blog-sidebar-toggle"
                >
                    Explore
                </a>
            </NavbarButtonPortal>
            <div
                className={"relative"}
            >
                <button className={"top-4 right-4 absolute"} onClick={() => toggleBlogSidebar({buttonRef})}>
                    <XIcon
                        className={
                            "text-muted-foreground hover:text-foreground transition-colors duration-300 w-3 h-3"
                        }
                    />
                </button>
                <TagList activeTags={activeTags} />
            </div>
        </div>
    );
};

BlogTagSideBar.displayName = "BlogTagSideBar";

export default BlogTagSideBar;
