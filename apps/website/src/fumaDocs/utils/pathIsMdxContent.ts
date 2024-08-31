export const mdxContentPaths = ["/docs", "/blog", "/myWork", "/demos"];

export const pathIsMdxContent = (pathname: string) => {
    return mdxContentPaths.some((f) => pathname.startsWith(f));
};

const modalPages = [
    "/contactMe",
    "/featureRequest",
    "/imageGallery",
    "/joinMailingList",
];

export const pathIsModalPage = (pathname: string) => { 
    return modalPages.some((f) => pathname.startsWith(f))
};
