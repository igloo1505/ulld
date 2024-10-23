import React from 'react';
import { CFontProps } from 'ink-big-text';
interface MainBannerProps {
    children: string;
    textProps?: Partial<CFontProps>;
    subTitle?: string;
}
declare const MainBanner: {
    ({ textProps: tp, children, subTitle, }: MainBannerProps): React.JSX.Element;
    displayName: string;
};
export default MainBanner;
