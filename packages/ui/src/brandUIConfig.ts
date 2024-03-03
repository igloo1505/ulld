interface ColorGroup {
    foreground: string;
    background: string;
    primary: string;
    primaryForeground: string;
    muted: string;
    mutedForeground: string;
    secondary: string;
    secondaryForeground: string;
    card: string;
    cardForeground: string;
    popover: string;
    popoverForeground: string;
    accent: string;
    accentForeground: string;
    destructive: string;
    destructiveForeground: string;
    border: string;
    input: string;
    ring: string;
    radius: string;
}

export const brandUIConfig: {
    light: ColorGroup;
    dark: ColorGroup;
} = {
    light: {
        background: "rgb(0.0, 0.0, 0.0)",
        foreground: "rgb(-217.24, 360.04, 360.03999999996734)",
        card: "rgb(0.0, 0.0, 0.0)",
        cardForeground: "rgb(-217.24, 360.04, 360.03999999996734)",
        popover: "rgb(0.0, 0.0, 0.0)",
        popoverForeground: "rgb(-217.24, 360.04, 360.03999999996734)",
        primary: "rgb(-4673.639999999999, -868.0880000012976, 4840.24)",
        primaryForeground: "rgb(-1842.0, 1882.0, 1881.9999999997892)",
        secondary: "rgb(-1261.17, 1289.77, 1289.7699999998556)",
        secondaryForeground:
            "rgb(-381.99999999999994, 460.5999999999999, -44.960000000018965)",
        muted: "rgb(-1261.17, 1289.77, 1289.7699999998556)",
        mutedForeground: "rgb(-355.29, 373.09000000000003, 373.08999999995876)",
        accent: "rgb(-1261.17, 1289.77, 1289.7699999998556)",
        accentForeground:
            "rgb(-381.99999999999994, 460.5999999999999, -44.960000000018965)",
        destructive: "rgb(-4924.4400000000005, 5092.84, 5092.84)",
        destructiveForeground: "rgb(-1842.0, 1882.0, 1881.9999999997892)",
        border: "rgb(-1079.0, 1105.0, 1104.9999999998763)",
        input: "rgb(-1079.0, 1105.0, 1104.9999999998763)",
        ring: "rgb(-4673.639999999999, -868.0880000012976, 4840.24)",
        radius: "0.5rem",
    },
    dark: {
        background: "rgb(-217.24, 360.04, 360.03999999996734)",
        foreground: "rgb(-1842.0, 1882.0, 1881.9999999997892)",
        card: "rgb(-217.24, 360.04, 360.03999999996734)",
        cardForeground: "rgb(-1842.0, 1882.0, 1881.9999999997892)",
        popover: "rgb(-217.24, 360.04, 360.03999999996734)",
        popoverForeground: "rgb(-1842.0, 1882.0, 1881.9999999997892)",
        primary: "rgb(3547.6, -3407.6, 765.5200000001582)",
        primaryForeground: "rgb(-1842.0, 1882.0, 1881.9999999997892)",
        secondary:
            "rgb(-426.7099999999999, 482.50999999999993, 482.50999999994843)",
        secondaryForeground: "rgb(-1842.0, 1882.0, 1881.9999999997892)",
        muted: "rgb(-426.7099999999999, 482.50999999999993, 482.50999999994843)",
        mutedForeground: "rgb(-612.44, 633.6400000000001, -114.008000000028)",
        accent: "rgb(-426.7099999999999, 482.50999999999993, 482.50999999994843)",
        accentForeground: "rgb(-1842.0, 1882.0, 1881.9999999997892)",
        destructive: "rgb(-3549.0, 3693.0, 3693.0)",
        destructiveForeground: "rgb(-1842.0, 1882.0, 1881.9999999997892)",
        border: "rgb(-426.7099999999999, 482.50999999999993, 482.50999999994843)",
        input: "rgb(-426.7099999999999, 482.50999999999993, 482.50999999994843)",
        ring: "rgb(3547.6, -3407.6, 765.5200000001582)",
        radius: "0.5rem",
    },
};
