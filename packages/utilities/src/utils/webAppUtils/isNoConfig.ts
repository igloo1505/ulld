export const isNoConfig = (props: {noConfig?: boolean}) => {
    return props.noConfig || process.env.ULLD_NO_CONFIG
}
