import{a as i}from"../chunk-YZCURYJT.mjs";import"../chunk-PD25TUY5.mjs";import n from"fs";import o from"path";import{globSync as a}from"glob";var r="unifiedTheme.scss",s=o.join(__dirname,`../shad/defaultThemes/${r}`),d=a(`${o.join(__dirname,"../shad/defaultThemes/")}/*.scss`,{}),t=`@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
`;d.map(e=>new i(e)).filter(e=>e.isValid).forEach(e=>{t+=e.getUnifiedContent()});t+=`
    * {
      @apply border-border;
    }

    body {
      @apply bg-background text-foreground font-sans;
    }
  }
`;n.writeFileSync(s,t,{encoding:"utf-8"});
//# sourceMappingURL=generateUnifiedTheme.mjs.map