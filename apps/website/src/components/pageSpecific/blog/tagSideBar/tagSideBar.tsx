"use client";
import React, { useEffect, useRef } from "react";
import TagList from "./tagList";
import { useSearchParams } from "next/navigation";
import { XIcon } from "lucide-react";
import { navbarButtonClasses } from "#/components/layouts/navbar/navbarButtonGroup";
import NavbarButtonPortal from "#/components/utility/portals/navbar";
interface BlogTagSideBarProps { }



/* PRIORITY: Come back here first thing when on power again and handle the height discrepency when scrolling. It's almost not noticable on the blog page, but on a actual blog entry it's a nightmare. */
/* TODO: Add click outside listener conditional on blog entry page... not blog list page. */
const BlogTagSideBar = ({ }: BlogTagSideBarProps) => {
    const sp = useSearchParams();
    let t = sp.getAll("tags");
    const ref = useRef<HTMLDivElement>(null!);
    const footer = useRef<HTMLDivElement | null>(null!);
    const buttonRef = useRef<HTMLButtonElement>(null!);
    const y = useRef<number>(null!);

    const getSidebarPosition = (currentScrollPosition: number) => {
        if (footer.current) {
            let footerDiff =
                window.innerHeight +
                currentScrollPosition -
                footer.current?.offsetTop -
                76;
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

    const toggleOpen = () => {
        let em = document.getElementById("blog-layout");
        if (!em) return;
        let isOpen = !em?.classList.contains("open");
        em.classList.add("transitioning");
        em.ontransitionend = () => em.classList.remove("transitioning")
        if (isOpen) {
            em.classList.add("open");
            buttonRef.current.style.color = "hsl(var(--foreground))";
            return;
        }
        em.classList.remove("open");
        buttonRef.current.style.color = "hsl(var(--muted-foreground))";
        /* setTimeout(() => em.classList.remove("transitioning"), 400) */
        };

    /* TODO: A *horrible* approach to avoiding the flashing of a misaligned sidebar, but for now it's going to have to be good enough. Look further into this when on wifi. */
    /* if (!hasSetInitialPosition) return null; */

    return (
        <div
            ref={ref}
            className={
                "h-screen-noNav border-r w-[300px] fixed top-[76px] left-[-300px] group-[.open]/blogLayout:left-0 hidden blogMobile:block transition-[left] duration-300 bg-background z-10"
            }
        >
            <NavbarButtonPortal>
                <button
                    onClick={toggleOpen}
                    ref={buttonRef}
                    className={navbarButtonClasses}
                >
                    Explore
                </button>
            </NavbarButtonPortal>
            <div
                className={"relative"}
            >
                <button className={"top-4 right-4 absolute"} onClick={toggleOpen}>
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
