import H1SizeContainer from "#/components/UIUtils/h1SizeContainer";
import ThemeSwitchTrigger from "#/components/UIUtils/themeSwitchButton";
import PayPalLinkQr from "#/components/brand/sponsor/paypalLinkSvg";
import InternalTag from "#/components/docUtils/button";
import Extends from "#/components/docUtils/extendsReference";
import RemoteExampleLimitation from "#/components/docUtils/remoteExampleLimitation";
import Hint from "#/components/general/hint";
import { LogoAsText } from "#/components/general/logoAsText";
import ComingSoon from "#/components/utility/comingSoon";
import { AdditionalComponents } from "@ulld/component-map/types";
import { AnimatedUlldLogo } from "@ulld/icons/ulld-animated";
import { Button } from "@ulld/tailwind/button";

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
    {
        regex: new RegExp("<Hint"),
        component: Hint,
        label: "Hint"
    },
    {
        regex: new RegExp("<H1Size"),
        component: H1SizeContainer,
        label: "H1Size"
    },
    {
        regex: new RegExp("<RemoteExampleLimitation"),
        component: RemoteExampleLimitation,
        label: "RemoteExampleLimitation"
    },
    {
        regex: new RegExp("<ThemeSwitch"),
        component: ThemeSwitchTrigger,
        label: "ThemeSwitch"
    },
    {
        regex: new RegExp("<Extends"),
        component: Extends,
        label: "Extends"
    },
    {
        regex: new RegExp("<Tag"),
        component: InternalTag,
        label: "Tag"
    },
];
