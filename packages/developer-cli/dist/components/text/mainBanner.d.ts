import React from 'react';
import { CFontProps } from 'ink-big-text';
interface MainBannerProps {
    children: string;
    textProps?: Partial<CFontProps>;
}
declare const MainBanner: {
    ({ textProps: tp, children }: MainBannerProps): React.JSX.Element;
    displayName: string;
};
export default MainBanner;
