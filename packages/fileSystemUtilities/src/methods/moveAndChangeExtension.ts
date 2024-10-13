import path from 'path'

export interface MoveAndChangeExtensionProps {
    rootRelativePath: string
    outputDir: string
    newExtension: `.${string}`
}

export const moveAndChangeExtension = (props: MoveAndChangeExtensionProps) => {
    let pathData = path.parse(path.join(props.outputDir, props.rootRelativePath))

    return path.join(
        `${pathData.dir}`,
        `${pathData.name}${props.newExtension}`,
    );

}
