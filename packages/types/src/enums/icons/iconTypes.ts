import type { ValidIconName } from "../../internallyGenerated/validIconNameUnion";


export const logoIconNames = [
    "youtube",
    "vercel",
    "ulld",
    "swift",
    "react",
    "python",
    "paypal",
    "patreon",
    "npm",
    "node",
    "markdown",
    "kotlin",
    "jupyter",
    "github",
    "css"
] as const satisfies ValidIconName[];;

export type LogoIconNames = (typeof logoIconNames)[number];