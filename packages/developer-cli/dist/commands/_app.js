import React from 'react';
import FullScreen from '../components/layout/fullScreen.js';
/* process.stdout.write('\x1b[?1049h'); // enter alternate buffer */
/* process.on('exit', () => { */
/*     process.stdout.write('\x1b[?1049l'); // leave alternate buffer */
/* }); */
const fullScreen = false;
export default function App({ Component, commandProps }) {
    if (fullScreen) {
        return (React.createElement(FullScreen, { applyHeight: false, 
            /* height={windowSize[1]} */
            flexDirection: "column", justifyContent: "center", alignItems: "center" },
            React.createElement(Component, { ...commandProps })));
    }
    return React.createElement(Component, { ...commandProps });
}
//# sourceMappingURL=_app.js.map