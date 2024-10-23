import { HTMLProps } from "react";

type ValidHtmlProps = "className" | "id" | "style"

export interface PassedLogoProps extends Pick<HTMLProps<HTMLElement>, ValidHtmlProps> {
}
