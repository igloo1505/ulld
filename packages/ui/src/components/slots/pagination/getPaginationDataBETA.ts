interface PaginationItem {
    page: number
    arrow?: "left" | "right"
    active: boolean
}

interface PaginationDataProps {
    totalItems: number
    itemsPerPage: number
    currentPage?: number
    maxButtons?: number
}

const getPaginationData = ({totalItems, itemsPerPage, currentPage = 1, maxButtons = 6}: PaginationDataProps) => {
    let totalPages = Math.ceil(totalItems / itemsPerPage)
    let pages: PaginationItem[] = totalPages.map((n, i) => totalPages.push({
        page: i + 1,
        active: (i + 1) === currentPage
    }))
        
    }
