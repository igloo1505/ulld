import React from 'react';
import { Box, Text } from 'ink';
import zod from 'zod';
import MainBanner from '../components/text/mainBanner.js';
/* import useStdOutDims from 'ink-use-stdout-dimensions'; */
export const options = zod.object({
    name: zod.string().default('Stranger').describe('Name'),
});
export default function Index({ options }) {
    /* const size = useStdOutDims(); */
    /* console.log("size: ", size) */
    return (React.createElement(Box, { flexDirection: "column", justifyContent: "center", alignItems: "center", flexWrap: "wrap" },
        React.createElement(MainBanner, null, "Uh Little Less Dum"),
        React.createElement(Box, { position: "relative", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" },
            React.createElement(Text, null, "Hi!"))));
}
//# sourceMappingURL=index.js.map