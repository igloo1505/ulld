export const isNoConfig = (props: {noConfig?: boolean}): boolean => {
    return Boolean(props.noConfig || process.env.ULLD_NO_CONFIG)
}
