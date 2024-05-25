import PayPalLinkQr from "#/components/brand/sponsor/paypalLinkSvg";
import { LogoAsText } from "#/components/general/logoAsText";
import ComingSoon from "#/components/utility/comingSoon";
import { AdditionalComponents } from "@ulld/component-map/types";
import { AnimatedUlldLogo } from "@ulld/icons/ulld-animated";

export const webComponentMap: AdditionalComponents<any> = [
    {
        regex: new RegExp("<LogoAsText"),
        component: LogoAsText,
        label: "LogoAsText",
    },
    {
        regex: new RegExp("<AnimatedLogo"),
        component: AnimatedUlldLogo,
        label: "AnimatedLogo",
    },
    {
        regex: new RegExp("<PayPalQR"),
        component: PayPalLinkQr,
        label: "PayPalQR",
    },
    {
        regex: new RegExp("<ComingSoon"),
        component: ComingSoon,
        label: "ComingSoon",
    },
];
