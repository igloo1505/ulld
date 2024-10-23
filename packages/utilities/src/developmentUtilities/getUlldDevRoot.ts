export const getUlldDevRoot = (locationKey: string) => {
    if(!process.env.ULLD_DEV_ROOT){
        throw new Error(`Could not find ULLD_DEV_ROOT env variable. Cannot conitnue in ${locationKey}`)
    }
    return process.env.ULLD_DEV_ROOT
}
