export class GeneralQueryManager<T extends object> {
    params: T
    baseUrl?: string
    query?: string
    href?: string
    constructor({ params, baseUrl }: { params: T, baseUrl?: string }) {
        this.params = params
        this.baseUrl = baseUrl
    }
    flattenParams() {
        let _params: any[] = []
        Object.keys(this.params).forEach((k) => {
            // @ts-ignore
            _params.push([k, this.params[k]])
        })
        return _params
    }
    getSearchParams() {
        const query = new URLSearchParams()
        this.flattenParams().forEach((pair) => {
            query.set(pair[0], pair[1])
        })
        this.query = query.toString()
        if (this.baseUrl) {
            this.href = `${this.baseUrl}?${query}`
        }
        return this.query
    }
}
