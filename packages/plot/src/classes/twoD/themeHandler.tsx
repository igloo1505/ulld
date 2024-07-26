export type ColorThemeProps = {} & (
    | { color?: string; theme?: never }
    | { color?: never; theme: Record<"light" | "dark", string> }
  )



export class PlotThemeHandler {
    constructor(public themeProps: ColorThemeProps){}
}
