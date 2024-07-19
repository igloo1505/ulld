export interface SearchAllParams {
    query?: string
    tags?: string[]
    categories?: string[]
    subjects?: string[]
    topics?: string[]
    citations?: string[]
    tagRegex?: RegExp[]
    equationId?: string
    sequentialId?: string
    perPage?: string
    take?: string
    page?: string
    remote?: boolean
}

export interface WithFSSearchParams {
    params: {
        slug: string[] | string
    }
    searchParams?: SearchAllParams & {
        fs?: boolean | string | undefined | null
        vid?: string
        time?: string
    }
}
