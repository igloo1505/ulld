import React, { ComponentProps } from 'react';
import BigText, { CFontProps } from 'ink-big-text';
import { ulldBlue } from '../../staticData/main.js';
import { Box } from 'ink';
import { render } from 'ink';
import InkAscii from "ink-ascii"

interface MainBannerProps {
    children: string;
    textProps?: Partial<CFontProps>;
}


const I = () => {
        return <InkAscii
                font="The Edge"
                text={"children!"}
            />
    }

const MainBanner = ({ textProps: tp = {}, children}: MainBannerProps) => {
    /* const winners = ['block', 'simple', 'chrome']; */

    return (
        <Box
            alignSelf="center"
            width={'fit-content'}
            flexDirection='column'
            justifyContent='center'
            alignItems='center'
        >
            <BigText
                {...tp}
                text={children}
                align={tp.align || 'center'}
                font={tp.font || 'chrome'}
                colors={[ulldBlue]}
            />
        </Box>
    );
};

MainBanner.displayName = 'MainBanner';

export default MainBanner;
