import { a as a$1 } from './chunk-XH5OVMD2.js';
import e from 'react';
import s from 'fs';
import t from 'path';
import { marked } from 'marked';
import p from 'chalk';
import { markedTerminal } from 'marked-terminal';
import { Box, Text } from 'ink';

var c={firstHeading:p.hex(a$1),emoji:!0},g=({content:r,options:i=c,highlightOptions:n={}})=>{marked.setOptions({gfm:!0}),marked.use(markedTerminal(i,n));let d=marked.parse(r);return e.createElement(Box,{paddingX:4},e.createElement(Text,null,d))},h=r=>(console.log(import.meta.dirname),t.join(import.meta.dirname.endsWith("dist")?t.join(import.meta.dirname,"markdown"):t.resolve(import.meta.dirname,"../../markdown"),r)),a=r=>{console.log("import.meta.dirname: ",import.meta.dirname);let n={content:"content"in r?r.content:s.readFileSync(h(r.filePath),{encoding:"utf-8"})};return e.createElement(g,{...n})};a.displayName="Markdown";var v=a;

export { v as a };
//# sourceMappingURL=out.js.map
//# sourceMappingURL=chunk-K4NUQMQN.js.map