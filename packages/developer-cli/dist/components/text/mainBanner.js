import React from 'react';
import BigText from 'ink-big-text';
import { ulldBlue } from '../../staticData/main.js';
import { Box } from 'ink';
import InkAscii from "ink-ascii";
const MainBanner = ({ textProps: tp = {}, children }) => {
    /* const winners = ['block', 'simple', 'chrome']; */
    let figProps = {};
    return (React.createElement(Box, { alignSelf: "center", width: 'fit-content', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' },
        React.createElement(BigText, { ...tp, text: children, align: tp.align || 'center', font: tp.font || 'chrome', colors: [ulldBlue] }),
        React.createElement(InkAscii, { font: "The Edge", text: children })));
};
MainBanner.displayName = 'MainBanner';
export default MainBanner;
//# sourceMappingURL=mainBanner.js.map