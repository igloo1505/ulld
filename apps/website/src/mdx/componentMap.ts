import H1SizeContainer from "#/components/UIUtils/h1SizeContainer";
import ThemeSwitchTrigger from "#/components/UIUtils/themeSwitchButton";
import PayPalLinkQr from "#/components/brand/sponsor/paypalLinkSvg";
import InternalTag from "#/components/docUtils/button";
import ExtendsColorProps from "#/components/docUtils/extendsColorProps";
import Extends from "#/components/docUtils/extendsReference";
import ExtendsUtil from "#/components/docUtils/extendsUtil";
import RemoteExampleLimitation from "#/components/docUtils/remoteExampleLimitation";
import StaticDataLink from "#/components/docUtils/staticDataLink";
import StaticLinkValue from "#/components/docUtils/staticLinkValue";
import CodeBlock from "#/components/general/codeBlock";
import Hint from "#/components/general/hint";
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
        regex: new RegExp("<StaticLinkContent"),
        component: StaticLinkValue,
        label: "StaticLinkContent"
    },
    {
        regex: new RegExp("<ExtendsColorProps"),
        component: ExtendsColorProps,
        label: "ExtendsColorProps"
    },
    {
        regex: new RegExp("<ExtendsMap"),
        component: ExtendsUtil,
        label: "ExtendsMap"
    },
    {
        regex: new RegExp("<Tag"),
        component: InternalTag,
        label: "Tag"
    },
    {
        regex: new RegExp("<CodeBlock"),
        component: CodeBlock,
        label: "CodeBlock"
    },
    {
        regex: new RegExp("<StaticLink"),
        component: StaticDataLink,
        label: "StaticLink"
    },
    {
        regex: new RegExp("<StaticLinkContent"),
        component: StaticLinkValue,
        label: "StaticLinkContent"
    },
];
