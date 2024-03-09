import axios from 'axios'


// TODO: Move this to a trpc method.
export const initializeBib = async (filename: string, databaseOnly: boolean) => {
    const res = await axios({ method: "post", url: "/api/citations/initBib", data: { filename, databaseOnly } })
    return res.data.success
}

