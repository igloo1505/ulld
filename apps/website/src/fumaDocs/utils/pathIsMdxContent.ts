export const mdxContentPaths = [
    "/docs",
    "/blog/",
    "/myWork"
]

export const pathIsMdxContent = (pathname: string) => {
 return mdxContentPaths.some((f) => pathname.startsWith(f))
}
