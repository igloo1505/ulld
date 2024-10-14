import React from 'react';
import { Box, BoxProps, Text, TextProps } from 'ink';
import zod from 'zod';
import MainBanner from '../components/text/mainBanner.js';
/* import useStdOutDims from 'ink-use-stdout-dimensions'; */

export const options = zod.object({
    name: zod.string().default('Stranger').describe('Name'),
});

type Props = {
    options: zod.infer<typeof options>;
};

export default function Index({ options }: Props) {
    /* const size = useStdOutDims(); */
    /* console.log("size: ", size) */
    return (
        <Box
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            flexWrap="wrap"
            /* width={size[0]} */
        >
            <MainBanner>
                Uh Little Less Dum
            </MainBanner>
            <Box
                position="relative"
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
            >
                <Text>Hi!</Text>
            </Box>
        </Box>
    );
}
