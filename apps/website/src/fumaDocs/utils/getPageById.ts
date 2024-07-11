import { PageType } from "#/types/general";

export const getPageById = (pages: PageType[], id: string) => {
    return pages.find((p) => Boolean("id" in p.data && p.data.id === id));
};
