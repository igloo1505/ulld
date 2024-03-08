export interface EmbeddedImageProps extends React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement> {
    file?: string
    url?: string
    image?: string
    left?: boolean
    center?: boolean
    right?: boolean
    inline?: boolean
    width?: number | "full" | string
    height?: number | string
    block?: boolean
    full?: boolean
    fullWidth?: boolean
    md?: boolean
    sm?: boolean
    lg?: boolean
    xl?: boolean
    small?: boolean
    medium?: boolean
    large?: boolean
    border?: boolean
    bordered?: boolean
    circle?: boolean
}
