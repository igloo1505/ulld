import React, { useId } from 'react'
import clsx from 'clsx'
import ContentItemPageObserver from '../observers/ContentItemPageObserver'
import Footer from '../footer/footer'


interface MDXContentContainerProps {
    children: React.ReactNode
    center?: boolean
    centerX?: boolean
    className?: string
    className_inner?: string
    className_lastChild?: string
    notebook?: boolean
    canBookmark?: boolean
    containerId?: string
    minimal?: boolean
}


export const PageContentContainer = ({ children, containerId, notebook, className_inner, className_lastChild, className, centerX, center, canBookmark, minimal }: MDXContentContainerProps) => {
    const id = useId()

    if (minimal && !notebook) {
        return (
            <main
                className={"w-full min-h-screen relative overflow-hidden pt-4 pageContent_minimal"}
                id={containerId || id}
            >
                <ContentItemPageObserver canBookmark={canBookmark} />
                <div className={clsx("vhnav", className)}>
                    {children}
                </div>
                <Footer />
            </main>
        )
    }

    if (notebook) {
        return (
            <div
                className={clsx("w-full min-h-screen relative overflow-hidden flex flex-col justify-center items-center gap-3 pageContent_notebook bg-background", className && className)}
                id={containerId || id}
            >
                <ContentItemPageObserver notebook canBookmark={canBookmark} />
                <div className={clsx("px-4 md:px-8 w-full relative pb-6 vhnav bg-background [&_div[role='alert']]:text-foreground", className_lastChild && className_lastChild)}>{children}</div>
                <Footer
                    className={"w-full"}
                    style={{
                        marginTop: "2rem !important",
                    }}
                />
            </div>
        )
    }

    const anyCenter = Boolean(center || centerX)

    return (
        <main
            className={clsx("w-full min-h-screen relative overflow-hidden pt-4 pageContent_default", className && className)}
            id={containerId || id}
        >
            <ContentItemPageObserver canBookmark={canBookmark} />
            <div className={clsx("w-full flex flex-col justify-start items-center vhnav sidebarAdjust", center && "justify-center", className_inner && className_inner)} id={"page-content-container"}>
                {anyCenter && children}
                {!anyCenter && <div className={clsx("px-8 md:px-16 w-full min-h-full relative pb-6", className_lastChild && className_lastChild)}>{children}</div>}
            </div>
            <Footer />
        </main>
    )
}


PageContentContainer.displayName = "MDXContentContainer"
