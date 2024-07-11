export const mdxContentPaths = [
    "/docs",
    "/blog/"
]

export const pathIsMdxContent = (pathname: string) => {
 return mdxContentPaths.some((f) => pathname.startsWith(f))
}
