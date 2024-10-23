import React from 'react';
import BigText from 'ink-big-text';
import { ulldBlue } from '../../staticData/main.js';
import { Box, Text } from 'ink';
const MainBanner = ({ textProps: tp = {}, children, subTitle, }) => {
    /* const winners = ['block', 'simple', 'chrome']; */
    return (React.createElement(React.Fragment, null,
        React.createElement(Box, { flexDirection: "column", justifyContent: "center", alignItems: "center", flexWrap: "wrap", gap: 0 },
            React.createElement(BigText, { ...tp, text: children, align: tp.align || 'center', font: tp.font || 'chrome', colors: [ulldBlue], lineHeight: 1 })),
        subTitle && (React.createElement(Box, { position: "relative", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" },
            React.createElement(Text, { bold: true }, subTitle)))));
};
MainBanner.displayName = 'MainBanner';
export default MainBanner;
//# sourceMappingURL=mainBanner.js.map