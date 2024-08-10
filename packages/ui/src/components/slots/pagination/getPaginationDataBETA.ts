import { ArrayUtilities } from "@ulld/utilities/arrayUtilities";

interface PaginationItem {
    page: number;
    arrow?: "left" | "right";
    active: boolean;
}

interface PaginationDataProps {
    totalItems: number;
    itemsPerPage: number;
    currentPage?: number;
    maxButtons?: number;
}


// TEST: This needs to be tested thoroughly. Should be pretty staight foward.
export const getPaginationData = ({
    totalItems,
    itemsPerPage,
    currentPage = 1,
    maxButtons = 6,
}: PaginationDataProps) => {
    let totalPages = Math.ceil(totalItems / itemsPerPage);
    let pages: PaginationItem[] = Array(totalPages)
        .fill(0)
        .map((n, i) => ({
            page: i + 1,
            active: i + 1 === currentPage,
        }));
    let items = ArrayUtilities.sliceAroundIndex(pages, currentPage, maxButtons)
    if(items[0].page > 1){
        items[0].arrow = "left"
    }
    if(items[items.length - 1].page < totalPages){
        items[1].arrow = "right"
    }
    return {items, totalPages}
};
