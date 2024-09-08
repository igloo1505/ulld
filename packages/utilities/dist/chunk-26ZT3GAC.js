var o=t=>t.includes("[#")&&t.endsWith("]")?t.slice(0,t.lastIndexOf("[")):t,s=t=>t.startsWith("#")?s(t.slice(1)):t,g=t=>{let e=/\<LogoAsText[^/]*\/\>/gm;return t.replace(e,"ULLD")},l=t=>t.replaceAll("`",""),a=[s,o,g,l],d=t=>t.indexOf(" "),c=t=>{let e=t;for(let r of a)e=r(e);return e},u=t=>/.*\[\#(?<content>[^\]]*)\]/gm.exec(t)?.groups?.content,p=t=>t.split(`
`).filter(n=>n.trim().startsWith("#")).map(n=>{let i=u(n);return {title:c(n),depth:d(n),url:i?`#${i}`:""}});

export { c as a, u as b, p as c };
//# sourceMappingURL=out.js.map
//# sourceMappingURL=chunk-26ZT3GAC.js.map