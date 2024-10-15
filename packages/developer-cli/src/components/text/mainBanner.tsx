import React from 'react';
import BigText, { CFontProps } from 'ink-big-text';
import { ulldBlue } from '../../staticData/main.js';
import { Box, Text } from 'ink';
import { render } from 'ink';

interface MainBannerProps {
    children: string;
    textProps?: Partial<CFontProps>;
    subTitle?: string;
}

const MainBanner = ({
    textProps: tp = {},
    children,
    subTitle,
}: MainBannerProps) => {
    /* const winners = ['block', 'simple', 'chrome']; */

    return (
        <>
            <Box
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                flexWrap="wrap"
                gap={0}
            >
                <BigText
                    {...tp}
                    text={children}
                    align={tp.align || 'center'}
                    font={tp.font || 'chrome'}
                    colors={[ulldBlue]}
                    lineHeight={1}
                />
            </Box>
            {subTitle && (
                <Box
                    position="relative"
                    display="flex"
                    flexDirection="column"
                    justifyContent="center"
                    alignItems="center"
                >
                    <Text bold>{subTitle}</Text>
                </Box>
            )}
        </>
    );
};

MainBanner.displayName = 'MainBanner';

export default MainBanner;
