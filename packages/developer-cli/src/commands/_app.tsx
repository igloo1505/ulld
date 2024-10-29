import React, { useState } from 'react';
import type { AppProps } from 'pastel';
import FullScreen from '../components/layout/fullScreen.js';

/* process.stdout.write('\x1b[?1049h'); // enter alternate buffer */

/* process.on('exit', () => { */
/*     process.stdout.write('\x1b[?1049l'); // leave alternate buffer */
/* }); */

const fullScreen = false;

export default function App({ Component, commandProps }: AppProps) {
    if (fullScreen) {
        return (
            <FullScreen
                applyHeight={false}
                /* height={windowSize[1]} */
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
            >
                <Component {...commandProps} />
            </FullScreen>
        );
    }

    return <Component {...commandProps} />;
}
