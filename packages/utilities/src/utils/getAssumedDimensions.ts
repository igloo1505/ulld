import { CSSProperties } from "react";

export const getAssumedDimensions = ({
    width,
    height,
    maxViewportWidth = 90,
    maxViewportHeight = 70,
    maxSource = "container",
    includeMin = true
}: {
    width?: number;
    height?: number;
    maxViewportWidth?: number;
    maxViewportHeight?: number;
    maxSource?: "container" | "window"
    includeMin?: boolean
}): CSSProperties => {
    let data: CSSProperties = {
        maxWidth: "100%",
        maxHeight: "100%"
    };
    if (width) {
        data.width =
            width > 1 ? `min(${maxViewportWidth}${maxSource === "container" ? "%" : "vw"}, ${width}px)` : `${width}vw`;
    }
    if (height) {
        data.height =
            height > 1 ? `min(${maxViewportHeight}${maxSource === "container" ? "%" : "vh"}, ${height}px)` : `${height}vh`;
    }
    if(includeMin){
        data.minWidth = data.width
        data.minHeight = data.height
    }
    return data;
};
