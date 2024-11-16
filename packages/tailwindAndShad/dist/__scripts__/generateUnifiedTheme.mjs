import { a } from '../chunk-GMF6ZQJ2.mjs';
import '../chunk-PD25TUY5.mjs';
import n from 'fs';
import o from 'path';
import { globSync } from 'glob';

var r="unifiedTheme.scss",s=o.join(__dirname,`../shad/defaultThemes/${r}`),d=globSync(`${o.join(__dirname,"../shad/defaultThemes/")}/*.scss`,{}),t=`@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
`;d.map(e=>new a(e)).filter(e=>e.isValid).forEach(e=>{t+=e.getUnifiedContent();});t+=`
    * {
      @apply border-border;
    }

    body {
      @apply bg-background text-foreground font-sans;
    }
  }
`;n.writeFileSync(s,t,{encoding:"utf-8"});
//# sourceMappingURL=out.js.map
//# sourceMappingURL=generateUnifiedTheme.mjs.map