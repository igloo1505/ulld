import { z } from 'zod';
export declare const minimalParsableAppConfig: z.ZodObject<{
    code: z.ZodOptional<z.ZodDefault<z.ZodObject<{
        theme: z.ZodDefault<z.ZodObject<{
            dark: z.ZodDefault<z.ZodUnion<[z.ZodLiteral<"andromeeda">, z.ZodLiteral<"aurora-x">, z.ZodLiteral<"ayu-dark">, z.ZodLiteral<"catppuccin-frappe">, z.ZodLiteral<"catppuccin-latte">, z.ZodLiteral<"catppuccin-macchiato">, z.ZodLiteral<"catppuccin-mocha">, z.ZodLiteral<"dark-plus">, z.ZodLiteral<"dracula">, z.ZodLiteral<"dracula-soft">, z.ZodLiteral<"github-dark">, z.ZodLiteral<"github-dark-dimmed">, z.ZodLiteral<"github-light">, z.ZodLiteral<"light-plus">, z.ZodLiteral<"material-theme">, z.ZodLiteral<"material-theme-darker">, z.ZodLiteral<"material-theme-lighter">, z.ZodLiteral<"material-theme-ocean">, z.ZodLiteral<"material-theme-palenight">, z.ZodLiteral<"min-dark">, z.ZodLiteral<"min-light">, z.ZodLiteral<"monokai">, z.ZodLiteral<"night-owl">, z.ZodLiteral<"nord">, z.ZodLiteral<"one-dark-pro">, z.ZodLiteral<"poimandres">, z.ZodLiteral<"red">, z.ZodLiteral<"rose-pine">, z.ZodLiteral<"rose-pine-dawn">, z.ZodLiteral<"rose-pine-moon">, z.ZodLiteral<"slack-dark">, z.ZodLiteral<"slack-ochin">, z.ZodLiteral<"solarized-dark">, z.ZodLiteral<"solarized-light">, z.ZodLiteral<"synthwave-84">, z.ZodLiteral<"tokyo-night">, z.ZodLiteral<"vesper">, z.ZodLiteral<"vitesse-black">, z.ZodLiteral<"vitesse-dark">, z.ZodLiteral<"vitesse-light">]>>;
            light: z.ZodDefault<z.ZodUnion<[z.ZodLiteral<"andromeeda">, z.ZodLiteral<"aurora-x">, z.ZodLiteral<"ayu-dark">, z.ZodLiteral<"catppuccin-frappe">, z.ZodLiteral<"catppuccin-latte">, z.ZodLiteral<"catppuccin-macchiato">, z.ZodLiteral<"catppuccin-mocha">, z.ZodLiteral<"dark-plus">, z.ZodLiteral<"dracula">, z.ZodLiteral<"dracula-soft">, z.ZodLiteral<"github-dark">, z.ZodLiteral<"github-dark-dimmed">, z.ZodLiteral<"github-light">, z.ZodLiteral<"light-plus">, z.ZodLiteral<"material-theme">, z.ZodLiteral<"material-theme-darker">, z.ZodLiteral<"material-theme-lighter">, z.ZodLiteral<"material-theme-ocean">, z.ZodLiteral<"material-theme-palenight">, z.ZodLiteral<"min-dark">, z.ZodLiteral<"min-light">, z.ZodLiteral<"monokai">, z.ZodLiteral<"night-owl">, z.ZodLiteral<"nord">, z.ZodLiteral<"one-dark-pro">, z.ZodLiteral<"poimandres">, z.ZodLiteral<"red">, z.ZodLiteral<"rose-pine">, z.ZodLiteral<"rose-pine-dawn">, z.ZodLiteral<"rose-pine-moon">, z.ZodLiteral<"slack-dark">, z.ZodLiteral<"slack-ochin">, z.ZodLiteral<"solarized-dark">, z.ZodLiteral<"solarized-light">, z.ZodLiteral<"synthwave-84">, z.ZodLiteral<"tokyo-night">, z.ZodLiteral<"vesper">, z.ZodLiteral<"vitesse-black">, z.ZodLiteral<"vitesse-dark">, z.ZodLiteral<"vitesse-light">]>>;
        }, "strip", z.ZodTypeAny, {
            dark: "andromeeda" | "aurora-x" | "ayu-dark" | "catppuccin-frappe" | "catppuccin-latte" | "catppuccin-macchiato" | "catppuccin-mocha" | "dark-plus" | "dracula" | "dracula-soft" | "github-dark" | "github-dark-dimmed" | "github-light" | "light-plus" | "material-theme" | "material-theme-darker" | "material-theme-lighter" | "material-theme-ocean" | "material-theme-palenight" | "min-dark" | "min-light" | "monokai" | "night-owl" | "nord" | "one-dark-pro" | "poimandres" | "red" | "rose-pine" | "rose-pine-dawn" | "rose-pine-moon" | "slack-dark" | "slack-ochin" | "solarized-dark" | "solarized-light" | "synthwave-84" | "tokyo-night" | "vesper" | "vitesse-black" | "vitesse-dark" | "vitesse-light";
            light: "andromeeda" | "aurora-x" | "ayu-dark" | "catppuccin-frappe" | "catppuccin-latte" | "catppuccin-macchiato" | "catppuccin-mocha" | "dark-plus" | "dracula" | "dracula-soft" | "github-dark" | "github-dark-dimmed" | "github-light" | "light-plus" | "material-theme" | "material-theme-darker" | "material-theme-lighter" | "material-theme-ocean" | "material-theme-palenight" | "min-dark" | "min-light" | "monokai" | "night-owl" | "nord" | "one-dark-pro" | "poimandres" | "red" | "rose-pine" | "rose-pine-dawn" | "rose-pine-moon" | "slack-dark" | "slack-ochin" | "solarized-dark" | "solarized-light" | "synthwave-84" | "tokyo-night" | "vesper" | "vitesse-black" | "vitesse-dark" | "vitesse-light";
        }, {
            dark?: "andromeeda" | "aurora-x" | "ayu-dark" | "catppuccin-frappe" | "catppuccin-latte" | "catppuccin-macchiato" | "catppuccin-mocha" | "dark-plus" | "dracula" | "dracula-soft" | "github-dark" | "github-dark-dimmed" | "github-light" | "light-plus" | "material-theme" | "material-theme-darker" | "material-theme-lighter" | "material-theme-ocean" | "material-theme-palenight" | "min-dark" | "min-light" | "monokai" | "night-owl" | "nord" | "one-dark-pro" | "poimandres" | "red" | "rose-pine" | "rose-pine-dawn" | "rose-pine-moon" | "slack-dark" | "slack-ochin" | "solarized-dark" | "solarized-light" | "synthwave-84" | "tokyo-night" | "vesper" | "vitesse-black" | "vitesse-dark" | "vitesse-light" | undefined;
            light?: "andromeeda" | "aurora-x" | "ayu-dark" | "catppuccin-frappe" | "catppuccin-latte" | "catppuccin-macchiato" | "catppuccin-mocha" | "dark-plus" | "dracula" | "dracula-soft" | "github-dark" | "github-dark-dimmed" | "github-light" | "light-plus" | "material-theme" | "material-theme-darker" | "material-theme-lighter" | "material-theme-ocean" | "material-theme-palenight" | "min-dark" | "min-light" | "monokai" | "night-owl" | "nord" | "one-dark-pro" | "poimandres" | "red" | "rose-pine" | "rose-pine-dawn" | "rose-pine-moon" | "slack-dark" | "slack-ochin" | "solarized-dark" | "solarized-light" | "synthwave-84" | "tokyo-night" | "vesper" | "vitesse-black" | "vitesse-dark" | "vitesse-light" | undefined;
        }>>;
        editor: z.ZodDefault<z.ZodObject<{
            defaultLangauge: z.ZodDefault<z.ZodString>;
            useVimMode: z.ZodDefault<z.ZodBoolean>;
        }, "strip", z.ZodTypeAny, {
            defaultLangauge: string;
            useVimMode: boolean;
        }, {
            defaultLangauge?: string | undefined;
            useVimMode?: boolean | undefined;
        }>>;
        syntaxHighlighting: z.ZodDefault<z.ZodObject<{
            transformers: z.ZodDefault<z.ZodObject<{
                regexHighlight: z.ZodDefault<z.ZodBoolean>;
                lineHighlight: z.ZodDefault<z.ZodBoolean>;
                lineFocus: z.ZodDefault<z.ZodBoolean>;
                lineErrorLevel: z.ZodDefault<z.ZodBoolean>;
                lineDiff: z.ZodDefault<z.ZodBoolean>;
            }, "strip", z.ZodTypeAny, {
                regexHighlight: boolean;
                lineHighlight: boolean;
                lineFocus: boolean;
                lineErrorLevel: boolean;
                lineDiff: boolean;
            }, {
                regexHighlight?: boolean | undefined;
                lineHighlight?: boolean | undefined;
                lineFocus?: boolean | undefined;
                lineErrorLevel?: boolean | undefined;
                lineDiff?: boolean | undefined;
            }>>;
            defaultLanguage: z.ZodEffects<z.ZodDefault<z.ZodUnion<[z.ZodEnum<["abap", "actionscript-3", "ada", "angular-html", "angular-ts", "apache", "apex", "apl", "applescript", "ara", "asm", "astro", "awk", "ballerina", "bat", "beancount", "berry", "bibtex", "bicep", "blade", "c", "cadence", "clarity", "clojure", "cmake", "cobol", "codeql", "coffee", "cpp", "crystal", "csharp", "css", "csv", "cue", "cypher", "d", "dart", "dax", "diff", "docker", "dream-maker", "elixir", "elm", "erb", "erlang", "fish", "fortran-fixed-form", "fortran-free-form", "fsharp", "gdresource", "gdscript", "gdshader", "gherkin", "git-commit", "git-rebase", "glimmer-js", "glimmer-ts", "glsl", "gnuplot", "go", "graphql", "groovy", "hack", "haml", "handlebars", "haskell", "hcl", "hjson", "hlsl", "html", "html-derivative", "http", "imba", "ini", "java", "javascript", "jinja", "jison", "json", "json5", "jsonc", "jsonl", "jsonnet", "jssm", "jsx", "julia", "kotlin", "kusto", "latex", "less", "liquid", "lisp", "logo", "lua", "make", "markdown", "marko", "matlab", "mdc", "mdx", "mermaid", "mojo", "move", "narrat", "nextflow", "nginx", "nim", "nix", "nushell", "objective-c", "objective-cpp", "ocaml", "pascal", "perl", "php", "plsql", "postcss", "powerquery", "powershell", "prisma", "prolog", "proto", "pug", "puppet", "purescript", "python", "r", "raku", "razor", "reg", "rel", "riscv", "rst", "ruby", "rust", "sas", "sass", "scala", "scheme", "scss", "shaderlab", "shellscript", "shellsession", "smalltalk", "solidity", "sparql", "splunk", "sql", "ssh-config", "stata", "stylus", "svelte", "swift", "system-verilog", "tasl", "tcl", "terraform", "tex", "toml", "tsx", "turtle", "twig", "typescript", "typst", "v", "vb", "verilog", "vhdl", "viml", "vue", "vue-html", "vyper", "wasm", "wenyan", "wgsl", "wolfram", "xml", "xsl", "yaml", "zenscript", "zig", "batch", "be", "cdc", "clj", "ql", "coffeescript", "c++", "c#", "cs", "cql", "dockerfile", "erl", "f", "for", "f77", "f90", "f95", "f03", "f08", "f18", "f#", "fs", "gjs", "gts", "gql", "hbs", "hs", "properties", "js", "fsl", "kt", "kts", "kql", "makefile", "md", "nar", "nf", "nu", "objc", "ps", "ps1", "jade", "py", "perl6", "rb", "rs", "shader", "bash", "sh", "shell", "zsh", "console", "spl", "styl", "tf", "tfvars", "ts", "typ", "cmd", "vim", "vimscript", "vy", "文言", "wl", "yml"]>, z.ZodObject<{
                inline: z.ZodEnum<["abap", "actionscript-3", "ada", "angular-html", "angular-ts", "apache", "apex", "apl", "applescript", "ara", "asm", "astro", "awk", "ballerina", "bat", "beancount", "berry", "bibtex", "bicep", "blade", "c", "cadence", "clarity", "clojure", "cmake", "cobol", "codeql", "coffee", "cpp", "crystal", "csharp", "css", "csv", "cue", "cypher", "d", "dart", "dax", "diff", "docker", "dream-maker", "elixir", "elm", "erb", "erlang", "fish", "fortran-fixed-form", "fortran-free-form", "fsharp", "gdresource", "gdscript", "gdshader", "gherkin", "git-commit", "git-rebase", "glimmer-js", "glimmer-ts", "glsl", "gnuplot", "go", "graphql", "groovy", "hack", "haml", "handlebars", "haskell", "hcl", "hjson", "hlsl", "html", "html-derivative", "http", "imba", "ini", "java", "javascript", "jinja", "jison", "json", "json5", "jsonc", "jsonl", "jsonnet", "jssm", "jsx", "julia", "kotlin", "kusto", "latex", "less", "liquid", "lisp", "logo", "lua", "make", "markdown", "marko", "matlab", "mdc", "mdx", "mermaid", "mojo", "move", "narrat", "nextflow", "nginx", "nim", "nix", "nushell", "objective-c", "objective-cpp", "ocaml", "pascal", "perl", "php", "plsql", "postcss", "powerquery", "powershell", "prisma", "prolog", "proto", "pug", "puppet", "purescript", "python", "r", "raku", "razor", "reg", "rel", "riscv", "rst", "ruby", "rust", "sas", "sass", "scala", "scheme", "scss", "shaderlab", "shellscript", "shellsession", "smalltalk", "solidity", "sparql", "splunk", "sql", "ssh-config", "stata", "stylus", "svelte", "swift", "system-verilog", "tasl", "tcl", "terraform", "tex", "toml", "tsx", "turtle", "twig", "typescript", "typst", "v", "vb", "verilog", "vhdl", "viml", "vue", "vue-html", "vyper", "wasm", "wenyan", "wgsl", "wolfram", "xml", "xsl", "yaml", "zenscript", "zig", "batch", "be", "cdc", "clj", "ql", "coffeescript", "c++", "c#", "cs", "cql", "dockerfile", "erl", "f", "for", "f77", "f90", "f95", "f03", "f08", "f18", "f#", "fs", "gjs", "gts", "gql", "hbs", "hs", "properties", "js", "fsl", "kt", "kts", "kql", "makefile", "md", "nar", "nf", "nu", "objc", "ps", "ps1", "jade", "py", "perl6", "rb", "rs", "shader", "bash", "sh", "shell", "zsh", "console", "spl", "styl", "tf", "tfvars", "ts", "typ", "cmd", "vim", "vimscript", "vy", "文言", "wl", "yml"]>;
                block: z.ZodEnum<["abap", "actionscript-3", "ada", "angular-html", "angular-ts", "apache", "apex", "apl", "applescript", "ara", "asm", "astro", "awk", "ballerina", "bat", "beancount", "berry", "bibtex", "bicep", "blade", "c", "cadence", "clarity", "clojure", "cmake", "cobol", "codeql", "coffee", "cpp", "crystal", "csharp", "css", "csv", "cue", "cypher", "d", "dart", "dax", "diff", "docker", "dream-maker", "elixir", "elm", "erb", "erlang", "fish", "fortran-fixed-form", "fortran-free-form", "fsharp", "gdresource", "gdscript", "gdshader", "gherkin", "git-commit", "git-rebase", "glimmer-js", "glimmer-ts", "glsl", "gnuplot", "go", "graphql", "groovy", "hack", "haml", "handlebars", "haskell", "hcl", "hjson", "hlsl", "html", "html-derivative", "http", "imba", "ini", "java", "javascript", "jinja", "jison", "json", "json5", "jsonc", "jsonl", "jsonnet", "jssm", "jsx", "julia", "kotlin", "kusto", "latex", "less", "liquid", "lisp", "logo", "lua", "make", "markdown", "marko", "matlab", "mdc", "mdx", "mermaid", "mojo", "move", "narrat", "nextflow", "nginx", "nim", "nix", "nushell", "objective-c", "objective-cpp", "ocaml", "pascal", "perl", "php", "plsql", "postcss", "powerquery", "powershell", "prisma", "prolog", "proto", "pug", "puppet", "purescript", "python", "r", "raku", "razor", "reg", "rel", "riscv", "rst", "ruby", "rust", "sas", "sass", "scala", "scheme", "scss", "shaderlab", "shellscript", "shellsession", "smalltalk", "solidity", "sparql", "splunk", "sql", "ssh-config", "stata", "stylus", "svelte", "swift", "system-verilog", "tasl", "tcl", "terraform", "tex", "toml", "tsx", "turtle", "twig", "typescript", "typst", "v", "vb", "verilog", "vhdl", "viml", "vue", "vue-html", "vyper", "wasm", "wenyan", "wgsl", "wolfram", "xml", "xsl", "yaml", "zenscript", "zig", "batch", "be", "cdc", "clj", "ql", "coffeescript", "c++", "c#", "cs", "cql", "dockerfile", "erl", "f", "for", "f77", "f90", "f95", "f03", "f08", "f18", "f#", "fs", "gjs", "gts", "gql", "hbs", "hs", "properties", "js", "fsl", "kt", "kts", "kql", "makefile", "md", "nar", "nf", "nu", "objc", "ps", "ps1", "jade", "py", "perl6", "rb", "rs", "shader", "bash", "sh", "shell", "zsh", "console", "spl", "styl", "tf", "tfvars", "ts", "typ", "cmd", "vim", "vimscript", "vy", "文言", "wl", "yml"]>;
            }, "strip", z.ZodTypeAny, {
                inline: "coffee" | "diff" | "fish" | "move" | "shell" | "turtle" | "swift" | "python" | "markdown" | "kotlin" | "css" | "latex" | "fs" | "json" | "rel" | "mdx" | "md" | "csv" | "html" | "abap" | "actionscript-3" | "ada" | "angular-html" | "angular-ts" | "apache" | "apex" | "apl" | "applescript" | "ara" | "asm" | "astro" | "awk" | "ballerina" | "bat" | "beancount" | "berry" | "bibtex" | "bicep" | "blade" | "c" | "cadence" | "clarity" | "clojure" | "cmake" | "cobol" | "codeql" | "cpp" | "crystal" | "csharp" | "cue" | "cypher" | "d" | "dart" | "dax" | "docker" | "dream-maker" | "elixir" | "elm" | "erb" | "erlang" | "fortran-fixed-form" | "fortran-free-form" | "fsharp" | "gdresource" | "gdscript" | "gdshader" | "gherkin" | "git-commit" | "git-rebase" | "glimmer-js" | "glimmer-ts" | "glsl" | "gnuplot" | "go" | "graphql" | "groovy" | "hack" | "haml" | "handlebars" | "haskell" | "hcl" | "hjson" | "hlsl" | "html-derivative" | "http" | "imba" | "ini" | "java" | "javascript" | "jinja" | "jison" | "json5" | "jsonc" | "jsonl" | "jsonnet" | "jssm" | "jsx" | "julia" | "kusto" | "less" | "liquid" | "lisp" | "logo" | "lua" | "make" | "marko" | "matlab" | "mdc" | "mermaid" | "mojo" | "narrat" | "nextflow" | "nginx" | "nim" | "nix" | "nushell" | "objective-c" | "objective-cpp" | "ocaml" | "pascal" | "perl" | "php" | "plsql" | "postcss" | "powerquery" | "powershell" | "prisma" | "prolog" | "proto" | "pug" | "puppet" | "purescript" | "r" | "raku" | "razor" | "reg" | "riscv" | "rst" | "ruby" | "rust" | "sas" | "sass" | "scala" | "scheme" | "scss" | "shaderlab" | "shellscript" | "shellsession" | "smalltalk" | "solidity" | "sparql" | "splunk" | "sql" | "ssh-config" | "stata" | "stylus" | "svelte" | "system-verilog" | "tasl" | "tcl" | "terraform" | "tex" | "toml" | "tsx" | "twig" | "typescript" | "typst" | "v" | "vb" | "verilog" | "vhdl" | "viml" | "vue" | "vue-html" | "vyper" | "wasm" | "wenyan" | "wgsl" | "wolfram" | "xml" | "xsl" | "yaml" | "zenscript" | "zig" | "batch" | "be" | "cdc" | "clj" | "ql" | "coffeescript" | "c++" | "c#" | "cs" | "cql" | "dockerfile" | "erl" | "f" | "for" | "f77" | "f90" | "f95" | "f03" | "f08" | "f18" | "f#" | "gjs" | "gts" | "gql" | "hbs" | "hs" | "properties" | "js" | "fsl" | "kt" | "kts" | "kql" | "makefile" | "nar" | "nf" | "nu" | "objc" | "ps" | "ps1" | "jade" | "py" | "perl6" | "rb" | "rs" | "shader" | "bash" | "sh" | "zsh" | "console" | "spl" | "styl" | "tf" | "tfvars" | "ts" | "typ" | "cmd" | "vim" | "vimscript" | "vy" | "文言" | "wl" | "yml";
                block: "coffee" | "diff" | "fish" | "move" | "shell" | "turtle" | "swift" | "python" | "markdown" | "kotlin" | "css" | "latex" | "fs" | "json" | "rel" | "mdx" | "md" | "csv" | "html" | "abap" | "actionscript-3" | "ada" | "angular-html" | "angular-ts" | "apache" | "apex" | "apl" | "applescript" | "ara" | "asm" | "astro" | "awk" | "ballerina" | "bat" | "beancount" | "berry" | "bibtex" | "bicep" | "blade" | "c" | "cadence" | "clarity" | "clojure" | "cmake" | "cobol" | "codeql" | "cpp" | "crystal" | "csharp" | "cue" | "cypher" | "d" | "dart" | "dax" | "docker" | "dream-maker" | "elixir" | "elm" | "erb" | "erlang" | "fortran-fixed-form" | "fortran-free-form" | "fsharp" | "gdresource" | "gdscript" | "gdshader" | "gherkin" | "git-commit" | "git-rebase" | "glimmer-js" | "glimmer-ts" | "glsl" | "gnuplot" | "go" | "graphql" | "groovy" | "hack" | "haml" | "handlebars" | "haskell" | "hcl" | "hjson" | "hlsl" | "html-derivative" | "http" | "imba" | "ini" | "java" | "javascript" | "jinja" | "jison" | "json5" | "jsonc" | "jsonl" | "jsonnet" | "jssm" | "jsx" | "julia" | "kusto" | "less" | "liquid" | "lisp" | "logo" | "lua" | "make" | "marko" | "matlab" | "mdc" | "mermaid" | "mojo" | "narrat" | "nextflow" | "nginx" | "nim" | "nix" | "nushell" | "objective-c" | "objective-cpp" | "ocaml" | "pascal" | "perl" | "php" | "plsql" | "postcss" | "powerquery" | "powershell" | "prisma" | "prolog" | "proto" | "pug" | "puppet" | "purescript" | "r" | "raku" | "razor" | "reg" | "riscv" | "rst" | "ruby" | "rust" | "sas" | "sass" | "scala" | "scheme" | "scss" | "shaderlab" | "shellscript" | "shellsession" | "smalltalk" | "solidity" | "sparql" | "splunk" | "sql" | "ssh-config" | "stata" | "stylus" | "svelte" | "system-verilog" | "tasl" | "tcl" | "terraform" | "tex" | "toml" | "tsx" | "twig" | "typescript" | "typst" | "v" | "vb" | "verilog" | "vhdl" | "viml" | "vue" | "vue-html" | "vyper" | "wasm" | "wenyan" | "wgsl" | "wolfram" | "xml" | "xsl" | "yaml" | "zenscript" | "zig" | "batch" | "be" | "cdc" | "clj" | "ql" | "coffeescript" | "c++" | "c#" | "cs" | "cql" | "dockerfile" | "erl" | "f" | "for" | "f77" | "f90" | "f95" | "f03" | "f08" | "f18" | "f#" | "gjs" | "gts" | "gql" | "hbs" | "hs" | "properties" | "js" | "fsl" | "kt" | "kts" | "kql" | "makefile" | "nar" | "nf" | "nu" | "objc" | "ps" | "ps1" | "jade" | "py" | "perl6" | "rb" | "rs" | "shader" | "bash" | "sh" | "zsh" | "console" | "spl" | "styl" | "tf" | "tfvars" | "ts" | "typ" | "cmd" | "vim" | "vimscript" | "vy" | "文言" | "wl" | "yml";
            }, {
                inline: "coffee" | "diff" | "fish" | "move" | "shell" | "turtle" | "swift" | "python" | "markdown" | "kotlin" | "css" | "latex" | "fs" | "json" | "rel" | "mdx" | "md" | "csv" | "html" | "abap" | "actionscript-3" | "ada" | "angular-html" | "angular-ts" | "apache" | "apex" | "apl" | "applescript" | "ara" | "asm" | "astro" | "awk" | "ballerina" | "bat" | "beancount" | "berry" | "bibtex" | "bicep" | "blade" | "c" | "cadence" | "clarity" | "clojure" | "cmake" | "cobol" | "codeql" | "cpp" | "crystal" | "csharp" | "cue" | "cypher" | "d" | "dart" | "dax" | "docker" | "dream-maker" | "elixir" | "elm" | "erb" | "erlang" | "fortran-fixed-form" | "fortran-free-form" | "fsharp" | "gdresource" | "gdscript" | "gdshader" | "gherkin" | "git-commit" | "git-rebase" | "glimmer-js" | "glimmer-ts" | "glsl" | "gnuplot" | "go" | "graphql" | "groovy" | "hack" | "haml" | "handlebars" | "haskell" | "hcl" | "hjson" | "hlsl" | "html-derivative" | "http" | "imba" | "ini" | "java" | "javascript" | "jinja" | "jison" | "json5" | "jsonc" | "jsonl" | "jsonnet" | "jssm" | "jsx" | "julia" | "kusto" | "less" | "liquid" | "lisp" | "logo" | "lua" | "make" | "marko" | "matlab" | "mdc" | "mermaid" | "mojo" | "narrat" | "nextflow" | "nginx" | "nim" | "nix" | "nushell" | "objective-c" | "objective-cpp" | "ocaml" | "pascal" | "perl" | "php" | "plsql" | "postcss" | "powerquery" | "powershell" | "prisma" | "prolog" | "proto" | "pug" | "puppet" | "purescript" | "r" | "raku" | "razor" | "reg" | "riscv" | "rst" | "ruby" | "rust" | "sas" | "sass" | "scala" | "scheme" | "scss" | "shaderlab" | "shellscript" | "shellsession" | "smalltalk" | "solidity" | "sparql" | "splunk" | "sql" | "ssh-config" | "stata" | "stylus" | "svelte" | "system-verilog" | "tasl" | "tcl" | "terraform" | "tex" | "toml" | "tsx" | "twig" | "typescript" | "typst" | "v" | "vb" | "verilog" | "vhdl" | "viml" | "vue" | "vue-html" | "vyper" | "wasm" | "wenyan" | "wgsl" | "wolfram" | "xml" | "xsl" | "yaml" | "zenscript" | "zig" | "batch" | "be" | "cdc" | "clj" | "ql" | "coffeescript" | "c++" | "c#" | "cs" | "cql" | "dockerfile" | "erl" | "f" | "for" | "f77" | "f90" | "f95" | "f03" | "f08" | "f18" | "f#" | "gjs" | "gts" | "gql" | "hbs" | "hs" | "properties" | "js" | "fsl" | "kt" | "kts" | "kql" | "makefile" | "nar" | "nf" | "nu" | "objc" | "ps" | "ps1" | "jade" | "py" | "perl6" | "rb" | "rs" | "shader" | "bash" | "sh" | "zsh" | "console" | "spl" | "styl" | "tf" | "tfvars" | "ts" | "typ" | "cmd" | "vim" | "vimscript" | "vy" | "文言" | "wl" | "yml";
                block: "coffee" | "diff" | "fish" | "move" | "shell" | "turtle" | "swift" | "python" | "markdown" | "kotlin" | "css" | "latex" | "fs" | "json" | "rel" | "mdx" | "md" | "csv" | "html" | "abap" | "actionscript-3" | "ada" | "angular-html" | "angular-ts" | "apache" | "apex" | "apl" | "applescript" | "ara" | "asm" | "astro" | "awk" | "ballerina" | "bat" | "beancount" | "berry" | "bibtex" | "bicep" | "blade" | "c" | "cadence" | "clarity" | "clojure" | "cmake" | "cobol" | "codeql" | "cpp" | "crystal" | "csharp" | "cue" | "cypher" | "d" | "dart" | "dax" | "docker" | "dream-maker" | "elixir" | "elm" | "erb" | "erlang" | "fortran-fixed-form" | "fortran-free-form" | "fsharp" | "gdresource" | "gdscript" | "gdshader" | "gherkin" | "git-commit" | "git-rebase" | "glimmer-js" | "glimmer-ts" | "glsl" | "gnuplot" | "go" | "graphql" | "groovy" | "hack" | "haml" | "handlebars" | "haskell" | "hcl" | "hjson" | "hlsl" | "html-derivative" | "http" | "imba" | "ini" | "java" | "javascript" | "jinja" | "jison" | "json5" | "jsonc" | "jsonl" | "jsonnet" | "jssm" | "jsx" | "julia" | "kusto" | "less" | "liquid" | "lisp" | "logo" | "lua" | "make" | "marko" | "matlab" | "mdc" | "mermaid" | "mojo" | "narrat" | "nextflow" | "nginx" | "nim" | "nix" | "nushell" | "objective-c" | "objective-cpp" | "ocaml" | "pascal" | "perl" | "php" | "plsql" | "postcss" | "powerquery" | "powershell" | "prisma" | "prolog" | "proto" | "pug" | "puppet" | "purescript" | "r" | "raku" | "razor" | "reg" | "riscv" | "rst" | "ruby" | "rust" | "sas" | "sass" | "scala" | "scheme" | "scss" | "shaderlab" | "shellscript" | "shellsession" | "smalltalk" | "solidity" | "sparql" | "splunk" | "sql" | "ssh-config" | "stata" | "stylus" | "svelte" | "system-verilog" | "tasl" | "tcl" | "terraform" | "tex" | "toml" | "tsx" | "twig" | "typescript" | "typst" | "v" | "vb" | "verilog" | "vhdl" | "viml" | "vue" | "vue-html" | "vyper" | "wasm" | "wenyan" | "wgsl" | "wolfram" | "xml" | "xsl" | "yaml" | "zenscript" | "zig" | "batch" | "be" | "cdc" | "clj" | "ql" | "coffeescript" | "c++" | "c#" | "cs" | "cql" | "dockerfile" | "erl" | "f" | "for" | "f77" | "f90" | "f95" | "f03" | "f08" | "f18" | "f#" | "gjs" | "gts" | "gql" | "hbs" | "hs" | "properties" | "js" | "fsl" | "kt" | "kts" | "kql" | "makefile" | "nar" | "nf" | "nu" | "objc" | "ps" | "ps1" | "jade" | "py" | "perl6" | "rb" | "rs" | "shader" | "bash" | "sh" | "zsh" | "console" | "spl" | "styl" | "tf" | "tfvars" | "ts" | "typ" | "cmd" | "vim" | "vimscript" | "vy" | "文言" | "wl" | "yml";
            }>]>>, {
                inline: "coffee" | "diff" | "fish" | "move" | "shell" | "turtle" | "swift" | "python" | "markdown" | "kotlin" | "css" | "latex" | "fs" | "json" | "rel" | "mdx" | "md" | "csv" | "html" | "abap" | "actionscript-3" | "ada" | "angular-html" | "angular-ts" | "apache" | "apex" | "apl" | "applescript" | "ara" | "asm" | "astro" | "awk" | "ballerina" | "bat" | "beancount" | "berry" | "bibtex" | "bicep" | "blade" | "c" | "cadence" | "clarity" | "clojure" | "cmake" | "cobol" | "codeql" | "cpp" | "crystal" | "csharp" | "cue" | "cypher" | "d" | "dart" | "dax" | "docker" | "dream-maker" | "elixir" | "elm" | "erb" | "erlang" | "fortran-fixed-form" | "fortran-free-form" | "fsharp" | "gdresource" | "gdscript" | "gdshader" | "gherkin" | "git-commit" | "git-rebase" | "glimmer-js" | "glimmer-ts" | "glsl" | "gnuplot" | "go" | "graphql" | "groovy" | "hack" | "haml" | "handlebars" | "haskell" | "hcl" | "hjson" | "hlsl" | "html-derivative" | "http" | "imba" | "ini" | "java" | "javascript" | "jinja" | "jison" | "json5" | "jsonc" | "jsonl" | "jsonnet" | "jssm" | "jsx" | "julia" | "kusto" | "less" | "liquid" | "lisp" | "logo" | "lua" | "make" | "marko" | "matlab" | "mdc" | "mermaid" | "mojo" | "narrat" | "nextflow" | "nginx" | "nim" | "nix" | "nushell" | "objective-c" | "objective-cpp" | "ocaml" | "pascal" | "perl" | "php" | "plsql" | "postcss" | "powerquery" | "powershell" | "prisma" | "prolog" | "proto" | "pug" | "puppet" | "purescript" | "r" | "raku" | "razor" | "reg" | "riscv" | "rst" | "ruby" | "rust" | "sas" | "sass" | "scala" | "scheme" | "scss" | "shaderlab" | "shellscript" | "shellsession" | "smalltalk" | "solidity" | "sparql" | "splunk" | "sql" | "ssh-config" | "stata" | "stylus" | "svelte" | "system-verilog" | "tasl" | "tcl" | "terraform" | "tex" | "toml" | "tsx" | "twig" | "typescript" | "typst" | "v" | "vb" | "verilog" | "vhdl" | "viml" | "vue" | "vue-html" | "vyper" | "wasm" | "wenyan" | "wgsl" | "wolfram" | "xml" | "xsl" | "yaml" | "zenscript" | "zig" | "batch" | "be" | "cdc" | "clj" | "ql" | "coffeescript" | "c++" | "c#" | "cs" | "cql" | "dockerfile" | "erl" | "f" | "for" | "f77" | "f90" | "f95" | "f03" | "f08" | "f18" | "f#" | "gjs" | "gts" | "gql" | "hbs" | "hs" | "properties" | "js" | "fsl" | "kt" | "kts" | "kql" | "makefile" | "nar" | "nf" | "nu" | "objc" | "ps" | "ps1" | "jade" | "py" | "perl6" | "rb" | "rs" | "shader" | "bash" | "sh" | "zsh" | "console" | "spl" | "styl" | "tf" | "tfvars" | "ts" | "typ" | "cmd" | "vim" | "vimscript" | "vy" | "文言" | "wl" | "yml";
                block: "coffee" | "diff" | "fish" | "move" | "shell" | "turtle" | "swift" | "python" | "markdown" | "kotlin" | "css" | "latex" | "fs" | "json" | "rel" | "mdx" | "md" | "csv" | "html" | "abap" | "actionscript-3" | "ada" | "angular-html" | "angular-ts" | "apache" | "apex" | "apl" | "applescript" | "ara" | "asm" | "astro" | "awk" | "ballerina" | "bat" | "beancount" | "berry" | "bibtex" | "bicep" | "blade" | "c" | "cadence" | "clarity" | "clojure" | "cmake" | "cobol" | "codeql" | "cpp" | "crystal" | "csharp" | "cue" | "cypher" | "d" | "dart" | "dax" | "docker" | "dream-maker" | "elixir" | "elm" | "erb" | "erlang" | "fortran-fixed-form" | "fortran-free-form" | "fsharp" | "gdresource" | "gdscript" | "gdshader" | "gherkin" | "git-commit" | "git-rebase" | "glimmer-js" | "glimmer-ts" | "glsl" | "gnuplot" | "go" | "graphql" | "groovy" | "hack" | "haml" | "handlebars" | "haskell" | "hcl" | "hjson" | "hlsl" | "html-derivative" | "http" | "imba" | "ini" | "java" | "javascript" | "jinja" | "jison" | "json5" | "jsonc" | "jsonl" | "jsonnet" | "jssm" | "jsx" | "julia" | "kusto" | "less" | "liquid" | "lisp" | "logo" | "lua" | "make" | "marko" | "matlab" | "mdc" | "mermaid" | "mojo" | "narrat" | "nextflow" | "nginx" | "nim" | "nix" | "nushell" | "objective-c" | "objective-cpp" | "ocaml" | "pascal" | "perl" | "php" | "plsql" | "postcss" | "powerquery" | "powershell" | "prisma" | "prolog" | "proto" | "pug" | "puppet" | "purescript" | "r" | "raku" | "razor" | "reg" | "riscv" | "rst" | "ruby" | "rust" | "sas" | "sass" | "scala" | "scheme" | "scss" | "shaderlab" | "shellscript" | "shellsession" | "smalltalk" | "solidity" | "sparql" | "splunk" | "sql" | "ssh-config" | "stata" | "stylus" | "svelte" | "system-verilog" | "tasl" | "tcl" | "terraform" | "tex" | "toml" | "tsx" | "twig" | "typescript" | "typst" | "v" | "vb" | "verilog" | "vhdl" | "viml" | "vue" | "vue-html" | "vyper" | "wasm" | "wenyan" | "wgsl" | "wolfram" | "xml" | "xsl" | "yaml" | "zenscript" | "zig" | "batch" | "be" | "cdc" | "clj" | "ql" | "coffeescript" | "c++" | "c#" | "cs" | "cql" | "dockerfile" | "erl" | "f" | "for" | "f77" | "f90" | "f95" | "f03" | "f08" | "f18" | "f#" | "gjs" | "gts" | "gql" | "hbs" | "hs" | "properties" | "js" | "fsl" | "kt" | "kts" | "kql" | "makefile" | "nar" | "nf" | "nu" | "objc" | "ps" | "ps1" | "jade" | "py" | "perl6" | "rb" | "rs" | "shader" | "bash" | "sh" | "zsh" | "console" | "spl" | "styl" | "tf" | "tfvars" | "ts" | "typ" | "cmd" | "vim" | "vimscript" | "vy" | "文言" | "wl" | "yml";
            }, "coffee" | "diff" | "fish" | "move" | "shell" | "turtle" | "swift" | "python" | "markdown" | "kotlin" | "css" | "latex" | "fs" | "json" | "rel" | "mdx" | "md" | "csv" | "html" | "abap" | "actionscript-3" | "ada" | "angular-html" | "angular-ts" | "apache" | "apex" | "apl" | "applescript" | "ara" | "asm" | "astro" | "awk" | "ballerina" | "bat" | "beancount" | "berry" | "bibtex" | "bicep" | "blade" | "c" | "cadence" | "clarity" | "clojure" | "cmake" | "cobol" | "codeql" | "cpp" | "crystal" | "csharp" | "cue" | "cypher" | "d" | "dart" | "dax" | "docker" | "dream-maker" | "elixir" | "elm" | "erb" | "erlang" | "fortran-fixed-form" | "fortran-free-form" | "fsharp" | "gdresource" | "gdscript" | "gdshader" | "gherkin" | "git-commit" | "git-rebase" | "glimmer-js" | "glimmer-ts" | "glsl" | "gnuplot" | "go" | "graphql" | "groovy" | "hack" | "haml" | "handlebars" | "haskell" | "hcl" | "hjson" | "hlsl" | "html-derivative" | "http" | "imba" | "ini" | "java" | "javascript" | "jinja" | "jison" | "json5" | "jsonc" | "jsonl" | "jsonnet" | "jssm" | "jsx" | "julia" | "kusto" | "less" | "liquid" | "lisp" | "logo" | "lua" | "make" | "marko" | "matlab" | "mdc" | "mermaid" | "mojo" | "narrat" | "nextflow" | "nginx" | "nim" | "nix" | "nushell" | "objective-c" | "objective-cpp" | "ocaml" | "pascal" | "perl" | "php" | "plsql" | "postcss" | "powerquery" | "powershell" | "prisma" | "prolog" | "proto" | "pug" | "puppet" | "purescript" | "r" | "raku" | "razor" | "reg" | "riscv" | "rst" | "ruby" | "rust" | "sas" | "sass" | "scala" | "scheme" | "scss" | "shaderlab" | "shellscript" | "shellsession" | "smalltalk" | "solidity" | "sparql" | "splunk" | "sql" | "ssh-config" | "stata" | "stylus" | "svelte" | "system-verilog" | "tasl" | "tcl" | "terraform" | "tex" | "toml" | "tsx" | "twig" | "typescript" | "typst" | "v" | "vb" | "verilog" | "vhdl" | "viml" | "vue" | "vue-html" | "vyper" | "wasm" | "wenyan" | "wgsl" | "wolfram" | "xml" | "xsl" | "yaml" | "zenscript" | "zig" | "batch" | "be" | "cdc" | "clj" | "ql" | "coffeescript" | "c++" | "c#" | "cs" | "cql" | "dockerfile" | "erl" | "f" | "for" | "f77" | "f90" | "f95" | "f03" | "f08" | "f18" | "f#" | "gjs" | "gts" | "gql" | "hbs" | "hs" | "properties" | "js" | "fsl" | "kt" | "kts" | "kql" | "makefile" | "nar" | "nf" | "nu" | "objc" | "ps" | "ps1" | "jade" | "py" | "perl6" | "rb" | "rs" | "shader" | "bash" | "sh" | "zsh" | "console" | "spl" | "styl" | "tf" | "tfvars" | "ts" | "typ" | "cmd" | "vim" | "vimscript" | "vy" | "文言" | "wl" | "yml" | {
                inline: "coffee" | "diff" | "fish" | "move" | "shell" | "turtle" | "swift" | "python" | "markdown" | "kotlin" | "css" | "latex" | "fs" | "json" | "rel" | "mdx" | "md" | "csv" | "html" | "abap" | "actionscript-3" | "ada" | "angular-html" | "angular-ts" | "apache" | "apex" | "apl" | "applescript" | "ara" | "asm" | "astro" | "awk" | "ballerina" | "bat" | "beancount" | "berry" | "bibtex" | "bicep" | "blade" | "c" | "cadence" | "clarity" | "clojure" | "cmake" | "cobol" | "codeql" | "cpp" | "crystal" | "csharp" | "cue" | "cypher" | "d" | "dart" | "dax" | "docker" | "dream-maker" | "elixir" | "elm" | "erb" | "erlang" | "fortran-fixed-form" | "fortran-free-form" | "fsharp" | "gdresource" | "gdscript" | "gdshader" | "gherkin" | "git-commit" | "git-rebase" | "glimmer-js" | "glimmer-ts" | "glsl" | "gnuplot" | "go" | "graphql" | "groovy" | "hack" | "haml" | "handlebars" | "haskell" | "hcl" | "hjson" | "hlsl" | "html-derivative" | "http" | "imba" | "ini" | "java" | "javascript" | "jinja" | "jison" | "json5" | "jsonc" | "jsonl" | "jsonnet" | "jssm" | "jsx" | "julia" | "kusto" | "less" | "liquid" | "lisp" | "logo" | "lua" | "make" | "marko" | "matlab" | "mdc" | "mermaid" | "mojo" | "narrat" | "nextflow" | "nginx" | "nim" | "nix" | "nushell" | "objective-c" | "objective-cpp" | "ocaml" | "pascal" | "perl" | "php" | "plsql" | "postcss" | "powerquery" | "powershell" | "prisma" | "prolog" | "proto" | "pug" | "puppet" | "purescript" | "r" | "raku" | "razor" | "reg" | "riscv" | "rst" | "ruby" | "rust" | "sas" | "sass" | "scala" | "scheme" | "scss" | "shaderlab" | "shellscript" | "shellsession" | "smalltalk" | "solidity" | "sparql" | "splunk" | "sql" | "ssh-config" | "stata" | "stylus" | "svelte" | "system-verilog" | "tasl" | "tcl" | "terraform" | "tex" | "toml" | "tsx" | "twig" | "typescript" | "typst" | "v" | "vb" | "verilog" | "vhdl" | "viml" | "vue" | "vue-html" | "vyper" | "wasm" | "wenyan" | "wgsl" | "wolfram" | "xml" | "xsl" | "yaml" | "zenscript" | "zig" | "batch" | "be" | "cdc" | "clj" | "ql" | "coffeescript" | "c++" | "c#" | "cs" | "cql" | "dockerfile" | "erl" | "f" | "for" | "f77" | "f90" | "f95" | "f03" | "f08" | "f18" | "f#" | "gjs" | "gts" | "gql" | "hbs" | "hs" | "properties" | "js" | "fsl" | "kt" | "kts" | "kql" | "makefile" | "nar" | "nf" | "nu" | "objc" | "ps" | "ps1" | "jade" | "py" | "perl6" | "rb" | "rs" | "shader" | "bash" | "sh" | "zsh" | "console" | "spl" | "styl" | "tf" | "tfvars" | "ts" | "typ" | "cmd" | "vim" | "vimscript" | "vy" | "文言" | "wl" | "yml";
                block: "coffee" | "diff" | "fish" | "move" | "shell" | "turtle" | "swift" | "python" | "markdown" | "kotlin" | "css" | "latex" | "fs" | "json" | "rel" | "mdx" | "md" | "csv" | "html" | "abap" | "actionscript-3" | "ada" | "angular-html" | "angular-ts" | "apache" | "apex" | "apl" | "applescript" | "ara" | "asm" | "astro" | "awk" | "ballerina" | "bat" | "beancount" | "berry" | "bibtex" | "bicep" | "blade" | "c" | "cadence" | "clarity" | "clojure" | "cmake" | "cobol" | "codeql" | "cpp" | "crystal" | "csharp" | "cue" | "cypher" | "d" | "dart" | "dax" | "docker" | "dream-maker" | "elixir" | "elm" | "erb" | "erlang" | "fortran-fixed-form" | "fortran-free-form" | "fsharp" | "gdresource" | "gdscript" | "gdshader" | "gherkin" | "git-commit" | "git-rebase" | "glimmer-js" | "glimmer-ts" | "glsl" | "gnuplot" | "go" | "graphql" | "groovy" | "hack" | "haml" | "handlebars" | "haskell" | "hcl" | "hjson" | "hlsl" | "html-derivative" | "http" | "imba" | "ini" | "java" | "javascript" | "jinja" | "jison" | "json5" | "jsonc" | "jsonl" | "jsonnet" | "jssm" | "jsx" | "julia" | "kusto" | "less" | "liquid" | "lisp" | "logo" | "lua" | "make" | "marko" | "matlab" | "mdc" | "mermaid" | "mojo" | "narrat" | "nextflow" | "nginx" | "nim" | "nix" | "nushell" | "objective-c" | "objective-cpp" | "ocaml" | "pascal" | "perl" | "php" | "plsql" | "postcss" | "powerquery" | "powershell" | "prisma" | "prolog" | "proto" | "pug" | "puppet" | "purescript" | "r" | "raku" | "razor" | "reg" | "riscv" | "rst" | "ruby" | "rust" | "sas" | "sass" | "scala" | "scheme" | "scss" | "shaderlab" | "shellscript" | "shellsession" | "smalltalk" | "solidity" | "sparql" | "splunk" | "sql" | "ssh-config" | "stata" | "stylus" | "svelte" | "system-verilog" | "tasl" | "tcl" | "terraform" | "tex" | "toml" | "tsx" | "twig" | "typescript" | "typst" | "v" | "vb" | "verilog" | "vhdl" | "viml" | "vue" | "vue-html" | "vyper" | "wasm" | "wenyan" | "wgsl" | "wolfram" | "xml" | "xsl" | "yaml" | "zenscript" | "zig" | "batch" | "be" | "cdc" | "clj" | "ql" | "coffeescript" | "c++" | "c#" | "cs" | "cql" | "dockerfile" | "erl" | "f" | "for" | "f77" | "f90" | "f95" | "f03" | "f08" | "f18" | "f#" | "gjs" | "gts" | "gql" | "hbs" | "hs" | "properties" | "js" | "fsl" | "kt" | "kts" | "kql" | "makefile" | "nar" | "nf" | "nu" | "objc" | "ps" | "ps1" | "jade" | "py" | "perl6" | "rb" | "rs" | "shader" | "bash" | "sh" | "zsh" | "console" | "spl" | "styl" | "tf" | "tfvars" | "ts" | "typ" | "cmd" | "vim" | "vimscript" | "vy" | "文言" | "wl" | "yml";
            } | undefined>;
        }, "strip", z.ZodTypeAny, {
            transformers: {
                regexHighlight: boolean;
                lineHighlight: boolean;
                lineFocus: boolean;
                lineErrorLevel: boolean;
                lineDiff: boolean;
            };
            defaultLanguage: {
                inline: "coffee" | "diff" | "fish" | "move" | "shell" | "turtle" | "swift" | "python" | "markdown" | "kotlin" | "css" | "latex" | "fs" | "json" | "rel" | "mdx" | "md" | "csv" | "html" | "abap" | "actionscript-3" | "ada" | "angular-html" | "angular-ts" | "apache" | "apex" | "apl" | "applescript" | "ara" | "asm" | "astro" | "awk" | "ballerina" | "bat" | "beancount" | "berry" | "bibtex" | "bicep" | "blade" | "c" | "cadence" | "clarity" | "clojure" | "cmake" | "cobol" | "codeql" | "cpp" | "crystal" | "csharp" | "cue" | "cypher" | "d" | "dart" | "dax" | "docker" | "dream-maker" | "elixir" | "elm" | "erb" | "erlang" | "fortran-fixed-form" | "fortran-free-form" | "fsharp" | "gdresource" | "gdscript" | "gdshader" | "gherkin" | "git-commit" | "git-rebase" | "glimmer-js" | "glimmer-ts" | "glsl" | "gnuplot" | "go" | "graphql" | "groovy" | "hack" | "haml" | "handlebars" | "haskell" | "hcl" | "hjson" | "hlsl" | "html-derivative" | "http" | "imba" | "ini" | "java" | "javascript" | "jinja" | "jison" | "json5" | "jsonc" | "jsonl" | "jsonnet" | "jssm" | "jsx" | "julia" | "kusto" | "less" | "liquid" | "lisp" | "logo" | "lua" | "make" | "marko" | "matlab" | "mdc" | "mermaid" | "mojo" | "narrat" | "nextflow" | "nginx" | "nim" | "nix" | "nushell" | "objective-c" | "objective-cpp" | "ocaml" | "pascal" | "perl" | "php" | "plsql" | "postcss" | "powerquery" | "powershell" | "prisma" | "prolog" | "proto" | "pug" | "puppet" | "purescript" | "r" | "raku" | "razor" | "reg" | "riscv" | "rst" | "ruby" | "rust" | "sas" | "sass" | "scala" | "scheme" | "scss" | "shaderlab" | "shellscript" | "shellsession" | "smalltalk" | "solidity" | "sparql" | "splunk" | "sql" | "ssh-config" | "stata" | "stylus" | "svelte" | "system-verilog" | "tasl" | "tcl" | "terraform" | "tex" | "toml" | "tsx" | "twig" | "typescript" | "typst" | "v" | "vb" | "verilog" | "vhdl" | "viml" | "vue" | "vue-html" | "vyper" | "wasm" | "wenyan" | "wgsl" | "wolfram" | "xml" | "xsl" | "yaml" | "zenscript" | "zig" | "batch" | "be" | "cdc" | "clj" | "ql" | "coffeescript" | "c++" | "c#" | "cs" | "cql" | "dockerfile" | "erl" | "f" | "for" | "f77" | "f90" | "f95" | "f03" | "f08" | "f18" | "f#" | "gjs" | "gts" | "gql" | "hbs" | "hs" | "properties" | "js" | "fsl" | "kt" | "kts" | "kql" | "makefile" | "nar" | "nf" | "nu" | "objc" | "ps" | "ps1" | "jade" | "py" | "perl6" | "rb" | "rs" | "shader" | "bash" | "sh" | "zsh" | "console" | "spl" | "styl" | "tf" | "tfvars" | "ts" | "typ" | "cmd" | "vim" | "vimscript" | "vy" | "文言" | "wl" | "yml";
                block: "coffee" | "diff" | "fish" | "move" | "shell" | "turtle" | "swift" | "python" | "markdown" | "kotlin" | "css" | "latex" | "fs" | "json" | "rel" | "mdx" | "md" | "csv" | "html" | "abap" | "actionscript-3" | "ada" | "angular-html" | "angular-ts" | "apache" | "apex" | "apl" | "applescript" | "ara" | "asm" | "astro" | "awk" | "ballerina" | "bat" | "beancount" | "berry" | "bibtex" | "bicep" | "blade" | "c" | "cadence" | "clarity" | "clojure" | "cmake" | "cobol" | "codeql" | "cpp" | "crystal" | "csharp" | "cue" | "cypher" | "d" | "dart" | "dax" | "docker" | "dream-maker" | "elixir" | "elm" | "erb" | "erlang" | "fortran-fixed-form" | "fortran-free-form" | "fsharp" | "gdresource" | "gdscript" | "gdshader" | "gherkin" | "git-commit" | "git-rebase" | "glimmer-js" | "glimmer-ts" | "glsl" | "gnuplot" | "go" | "graphql" | "groovy" | "hack" | "haml" | "handlebars" | "haskell" | "hcl" | "hjson" | "hlsl" | "html-derivative" | "http" | "imba" | "ini" | "java" | "javascript" | "jinja" | "jison" | "json5" | "jsonc" | "jsonl" | "jsonnet" | "jssm" | "jsx" | "julia" | "kusto" | "less" | "liquid" | "lisp" | "logo" | "lua" | "make" | "marko" | "matlab" | "mdc" | "mermaid" | "mojo" | "narrat" | "nextflow" | "nginx" | "nim" | "nix" | "nushell" | "objective-c" | "objective-cpp" | "ocaml" | "pascal" | "perl" | "php" | "plsql" | "postcss" | "powerquery" | "powershell" | "prisma" | "prolog" | "proto" | "pug" | "puppet" | "purescript" | "r" | "raku" | "razor" | "reg" | "riscv" | "rst" | "ruby" | "rust" | "sas" | "sass" | "scala" | "scheme" | "scss" | "shaderlab" | "shellscript" | "shellsession" | "smalltalk" | "solidity" | "sparql" | "splunk" | "sql" | "ssh-config" | "stata" | "stylus" | "svelte" | "system-verilog" | "tasl" | "tcl" | "terraform" | "tex" | "toml" | "tsx" | "twig" | "typescript" | "typst" | "v" | "vb" | "verilog" | "vhdl" | "viml" | "vue" | "vue-html" | "vyper" | "wasm" | "wenyan" | "wgsl" | "wolfram" | "xml" | "xsl" | "yaml" | "zenscript" | "zig" | "batch" | "be" | "cdc" | "clj" | "ql" | "coffeescript" | "c++" | "c#" | "cs" | "cql" | "dockerfile" | "erl" | "f" | "for" | "f77" | "f90" | "f95" | "f03" | "f08" | "f18" | "f#" | "gjs" | "gts" | "gql" | "hbs" | "hs" | "properties" | "js" | "fsl" | "kt" | "kts" | "kql" | "makefile" | "nar" | "nf" | "nu" | "objc" | "ps" | "ps1" | "jade" | "py" | "perl6" | "rb" | "rs" | "shader" | "bash" | "sh" | "zsh" | "console" | "spl" | "styl" | "tf" | "tfvars" | "ts" | "typ" | "cmd" | "vim" | "vimscript" | "vy" | "文言" | "wl" | "yml";
            };
        }, {
            transformers?: {
                regexHighlight?: boolean | undefined;
                lineHighlight?: boolean | undefined;
                lineFocus?: boolean | undefined;
                lineErrorLevel?: boolean | undefined;
                lineDiff?: boolean | undefined;
            } | undefined;
            defaultLanguage?: "coffee" | "diff" | "fish" | "move" | "shell" | "turtle" | "swift" | "python" | "markdown" | "kotlin" | "css" | "latex" | "fs" | "json" | "rel" | "mdx" | "md" | "csv" | "html" | "abap" | "actionscript-3" | "ada" | "angular-html" | "angular-ts" | "apache" | "apex" | "apl" | "applescript" | "ara" | "asm" | "astro" | "awk" | "ballerina" | "bat" | "beancount" | "berry" | "bibtex" | "bicep" | "blade" | "c" | "cadence" | "clarity" | "clojure" | "cmake" | "cobol" | "codeql" | "cpp" | "crystal" | "csharp" | "cue" | "cypher" | "d" | "dart" | "dax" | "docker" | "dream-maker" | "elixir" | "elm" | "erb" | "erlang" | "fortran-fixed-form" | "fortran-free-form" | "fsharp" | "gdresource" | "gdscript" | "gdshader" | "gherkin" | "git-commit" | "git-rebase" | "glimmer-js" | "glimmer-ts" | "glsl" | "gnuplot" | "go" | "graphql" | "groovy" | "hack" | "haml" | "handlebars" | "haskell" | "hcl" | "hjson" | "hlsl" | "html-derivative" | "http" | "imba" | "ini" | "java" | "javascript" | "jinja" | "jison" | "json5" | "jsonc" | "jsonl" | "jsonnet" | "jssm" | "jsx" | "julia" | "kusto" | "less" | "liquid" | "lisp" | "logo" | "lua" | "make" | "marko" | "matlab" | "mdc" | "mermaid" | "mojo" | "narrat" | "nextflow" | "nginx" | "nim" | "nix" | "nushell" | "objective-c" | "objective-cpp" | "ocaml" | "pascal" | "perl" | "php" | "plsql" | "postcss" | "powerquery" | "powershell" | "prisma" | "prolog" | "proto" | "pug" | "puppet" | "purescript" | "r" | "raku" | "razor" | "reg" | "riscv" | "rst" | "ruby" | "rust" | "sas" | "sass" | "scala" | "scheme" | "scss" | "shaderlab" | "shellscript" | "shellsession" | "smalltalk" | "solidity" | "sparql" | "splunk" | "sql" | "ssh-config" | "stata" | "stylus" | "svelte" | "system-verilog" | "tasl" | "tcl" | "terraform" | "tex" | "toml" | "tsx" | "twig" | "typescript" | "typst" | "v" | "vb" | "verilog" | "vhdl" | "viml" | "vue" | "vue-html" | "vyper" | "wasm" | "wenyan" | "wgsl" | "wolfram" | "xml" | "xsl" | "yaml" | "zenscript" | "zig" | "batch" | "be" | "cdc" | "clj" | "ql" | "coffeescript" | "c++" | "c#" | "cs" | "cql" | "dockerfile" | "erl" | "f" | "for" | "f77" | "f90" | "f95" | "f03" | "f08" | "f18" | "f#" | "gjs" | "gts" | "gql" | "hbs" | "hs" | "properties" | "js" | "fsl" | "kt" | "kts" | "kql" | "makefile" | "nar" | "nf" | "nu" | "objc" | "ps" | "ps1" | "jade" | "py" | "perl6" | "rb" | "rs" | "shader" | "bash" | "sh" | "zsh" | "console" | "spl" | "styl" | "tf" | "tfvars" | "ts" | "typ" | "cmd" | "vim" | "vimscript" | "vy" | "文言" | "wl" | "yml" | {
                inline: "coffee" | "diff" | "fish" | "move" | "shell" | "turtle" | "swift" | "python" | "markdown" | "kotlin" | "css" | "latex" | "fs" | "json" | "rel" | "mdx" | "md" | "csv" | "html" | "abap" | "actionscript-3" | "ada" | "angular-html" | "angular-ts" | "apache" | "apex" | "apl" | "applescript" | "ara" | "asm" | "astro" | "awk" | "ballerina" | "bat" | "beancount" | "berry" | "bibtex" | "bicep" | "blade" | "c" | "cadence" | "clarity" | "clojure" | "cmake" | "cobol" | "codeql" | "cpp" | "crystal" | "csharp" | "cue" | "cypher" | "d" | "dart" | "dax" | "docker" | "dream-maker" | "elixir" | "elm" | "erb" | "erlang" | "fortran-fixed-form" | "fortran-free-form" | "fsharp" | "gdresource" | "gdscript" | "gdshader" | "gherkin" | "git-commit" | "git-rebase" | "glimmer-js" | "glimmer-ts" | "glsl" | "gnuplot" | "go" | "graphql" | "groovy" | "hack" | "haml" | "handlebars" | "haskell" | "hcl" | "hjson" | "hlsl" | "html-derivative" | "http" | "imba" | "ini" | "java" | "javascript" | "jinja" | "jison" | "json5" | "jsonc" | "jsonl" | "jsonnet" | "jssm" | "jsx" | "julia" | "kusto" | "less" | "liquid" | "lisp" | "logo" | "lua" | "make" | "marko" | "matlab" | "mdc" | "mermaid" | "mojo" | "narrat" | "nextflow" | "nginx" | "nim" | "nix" | "nushell" | "objective-c" | "objective-cpp" | "ocaml" | "pascal" | "perl" | "php" | "plsql" | "postcss" | "powerquery" | "powershell" | "prisma" | "prolog" | "proto" | "pug" | "puppet" | "purescript" | "r" | "raku" | "razor" | "reg" | "riscv" | "rst" | "ruby" | "rust" | "sas" | "sass" | "scala" | "scheme" | "scss" | "shaderlab" | "shellscript" | "shellsession" | "smalltalk" | "solidity" | "sparql" | "splunk" | "sql" | "ssh-config" | "stata" | "stylus" | "svelte" | "system-verilog" | "tasl" | "tcl" | "terraform" | "tex" | "toml" | "tsx" | "twig" | "typescript" | "typst" | "v" | "vb" | "verilog" | "vhdl" | "viml" | "vue" | "vue-html" | "vyper" | "wasm" | "wenyan" | "wgsl" | "wolfram" | "xml" | "xsl" | "yaml" | "zenscript" | "zig" | "batch" | "be" | "cdc" | "clj" | "ql" | "coffeescript" | "c++" | "c#" | "cs" | "cql" | "dockerfile" | "erl" | "f" | "for" | "f77" | "f90" | "f95" | "f03" | "f08" | "f18" | "f#" | "gjs" | "gts" | "gql" | "hbs" | "hs" | "properties" | "js" | "fsl" | "kt" | "kts" | "kql" | "makefile" | "nar" | "nf" | "nu" | "objc" | "ps" | "ps1" | "jade" | "py" | "perl6" | "rb" | "rs" | "shader" | "bash" | "sh" | "zsh" | "console" | "spl" | "styl" | "tf" | "tfvars" | "ts" | "typ" | "cmd" | "vim" | "vimscript" | "vy" | "文言" | "wl" | "yml";
                block: "coffee" | "diff" | "fish" | "move" | "shell" | "turtle" | "swift" | "python" | "markdown" | "kotlin" | "css" | "latex" | "fs" | "json" | "rel" | "mdx" | "md" | "csv" | "html" | "abap" | "actionscript-3" | "ada" | "angular-html" | "angular-ts" | "apache" | "apex" | "apl" | "applescript" | "ara" | "asm" | "astro" | "awk" | "ballerina" | "bat" | "beancount" | "berry" | "bibtex" | "bicep" | "blade" | "c" | "cadence" | "clarity" | "clojure" | "cmake" | "cobol" | "codeql" | "cpp" | "crystal" | "csharp" | "cue" | "cypher" | "d" | "dart" | "dax" | "docker" | "dream-maker" | "elixir" | "elm" | "erb" | "erlang" | "fortran-fixed-form" | "fortran-free-form" | "fsharp" | "gdresource" | "gdscript" | "gdshader" | "gherkin" | "git-commit" | "git-rebase" | "glimmer-js" | "glimmer-ts" | "glsl" | "gnuplot" | "go" | "graphql" | "groovy" | "hack" | "haml" | "handlebars" | "haskell" | "hcl" | "hjson" | "hlsl" | "html-derivative" | "http" | "imba" | "ini" | "java" | "javascript" | "jinja" | "jison" | "json5" | "jsonc" | "jsonl" | "jsonnet" | "jssm" | "jsx" | "julia" | "kusto" | "less" | "liquid" | "lisp" | "logo" | "lua" | "make" | "marko" | "matlab" | "mdc" | "mermaid" | "mojo" | "narrat" | "nextflow" | "nginx" | "nim" | "nix" | "nushell" | "objective-c" | "objective-cpp" | "ocaml" | "pascal" | "perl" | "php" | "plsql" | "postcss" | "powerquery" | "powershell" | "prisma" | "prolog" | "proto" | "pug" | "puppet" | "purescript" | "r" | "raku" | "razor" | "reg" | "riscv" | "rst" | "ruby" | "rust" | "sas" | "sass" | "scala" | "scheme" | "scss" | "shaderlab" | "shellscript" | "shellsession" | "smalltalk" | "solidity" | "sparql" | "splunk" | "sql" | "ssh-config" | "stata" | "stylus" | "svelte" | "system-verilog" | "tasl" | "tcl" | "terraform" | "tex" | "toml" | "tsx" | "twig" | "typescript" | "typst" | "v" | "vb" | "verilog" | "vhdl" | "viml" | "vue" | "vue-html" | "vyper" | "wasm" | "wenyan" | "wgsl" | "wolfram" | "xml" | "xsl" | "yaml" | "zenscript" | "zig" | "batch" | "be" | "cdc" | "clj" | "ql" | "coffeescript" | "c++" | "c#" | "cs" | "cql" | "dockerfile" | "erl" | "f" | "for" | "f77" | "f90" | "f95" | "f03" | "f08" | "f18" | "f#" | "gjs" | "gts" | "gql" | "hbs" | "hs" | "properties" | "js" | "fsl" | "kt" | "kts" | "kql" | "makefile" | "nar" | "nf" | "nu" | "objc" | "ps" | "ps1" | "jade" | "py" | "perl6" | "rb" | "rs" | "shader" | "bash" | "sh" | "zsh" | "console" | "spl" | "styl" | "tf" | "tfvars" | "ts" | "typ" | "cmd" | "vim" | "vimscript" | "vy" | "文言" | "wl" | "yml";
            } | undefined;
        }>>;
    }, "strip", z.ZodTypeAny, {
        editor: {
            defaultLangauge: string;
            useVimMode: boolean;
        };
        theme: {
            dark: "andromeeda" | "aurora-x" | "ayu-dark" | "catppuccin-frappe" | "catppuccin-latte" | "catppuccin-macchiato" | "catppuccin-mocha" | "dark-plus" | "dracula" | "dracula-soft" | "github-dark" | "github-dark-dimmed" | "github-light" | "light-plus" | "material-theme" | "material-theme-darker" | "material-theme-lighter" | "material-theme-ocean" | "material-theme-palenight" | "min-dark" | "min-light" | "monokai" | "night-owl" | "nord" | "one-dark-pro" | "poimandres" | "red" | "rose-pine" | "rose-pine-dawn" | "rose-pine-moon" | "slack-dark" | "slack-ochin" | "solarized-dark" | "solarized-light" | "synthwave-84" | "tokyo-night" | "vesper" | "vitesse-black" | "vitesse-dark" | "vitesse-light";
            light: "andromeeda" | "aurora-x" | "ayu-dark" | "catppuccin-frappe" | "catppuccin-latte" | "catppuccin-macchiato" | "catppuccin-mocha" | "dark-plus" | "dracula" | "dracula-soft" | "github-dark" | "github-dark-dimmed" | "github-light" | "light-plus" | "material-theme" | "material-theme-darker" | "material-theme-lighter" | "material-theme-ocean" | "material-theme-palenight" | "min-dark" | "min-light" | "monokai" | "night-owl" | "nord" | "one-dark-pro" | "poimandres" | "red" | "rose-pine" | "rose-pine-dawn" | "rose-pine-moon" | "slack-dark" | "slack-ochin" | "solarized-dark" | "solarized-light" | "synthwave-84" | "tokyo-night" | "vesper" | "vitesse-black" | "vitesse-dark" | "vitesse-light";
        };
        syntaxHighlighting: {
            transformers: {
                regexHighlight: boolean;
                lineHighlight: boolean;
                lineFocus: boolean;
                lineErrorLevel: boolean;
                lineDiff: boolean;
            };
            defaultLanguage: {
                inline: "coffee" | "diff" | "fish" | "move" | "shell" | "turtle" | "swift" | "python" | "markdown" | "kotlin" | "css" | "latex" | "fs" | "json" | "rel" | "mdx" | "md" | "csv" | "html" | "abap" | "actionscript-3" | "ada" | "angular-html" | "angular-ts" | "apache" | "apex" | "apl" | "applescript" | "ara" | "asm" | "astro" | "awk" | "ballerina" | "bat" | "beancount" | "berry" | "bibtex" | "bicep" | "blade" | "c" | "cadence" | "clarity" | "clojure" | "cmake" | "cobol" | "codeql" | "cpp" | "crystal" | "csharp" | "cue" | "cypher" | "d" | "dart" | "dax" | "docker" | "dream-maker" | "elixir" | "elm" | "erb" | "erlang" | "fortran-fixed-form" | "fortran-free-form" | "fsharp" | "gdresource" | "gdscript" | "gdshader" | "gherkin" | "git-commit" | "git-rebase" | "glimmer-js" | "glimmer-ts" | "glsl" | "gnuplot" | "go" | "graphql" | "groovy" | "hack" | "haml" | "handlebars" | "haskell" | "hcl" | "hjson" | "hlsl" | "html-derivative" | "http" | "imba" | "ini" | "java" | "javascript" | "jinja" | "jison" | "json5" | "jsonc" | "jsonl" | "jsonnet" | "jssm" | "jsx" | "julia" | "kusto" | "less" | "liquid" | "lisp" | "logo" | "lua" | "make" | "marko" | "matlab" | "mdc" | "mermaid" | "mojo" | "narrat" | "nextflow" | "nginx" | "nim" | "nix" | "nushell" | "objective-c" | "objective-cpp" | "ocaml" | "pascal" | "perl" | "php" | "plsql" | "postcss" | "powerquery" | "powershell" | "prisma" | "prolog" | "proto" | "pug" | "puppet" | "purescript" | "r" | "raku" | "razor" | "reg" | "riscv" | "rst" | "ruby" | "rust" | "sas" | "sass" | "scala" | "scheme" | "scss" | "shaderlab" | "shellscript" | "shellsession" | "smalltalk" | "solidity" | "sparql" | "splunk" | "sql" | "ssh-config" | "stata" | "stylus" | "svelte" | "system-verilog" | "tasl" | "tcl" | "terraform" | "tex" | "toml" | "tsx" | "twig" | "typescript" | "typst" | "v" | "vb" | "verilog" | "vhdl" | "viml" | "vue" | "vue-html" | "vyper" | "wasm" | "wenyan" | "wgsl" | "wolfram" | "xml" | "xsl" | "yaml" | "zenscript" | "zig" | "batch" | "be" | "cdc" | "clj" | "ql" | "coffeescript" | "c++" | "c#" | "cs" | "cql" | "dockerfile" | "erl" | "f" | "for" | "f77" | "f90" | "f95" | "f03" | "f08" | "f18" | "f#" | "gjs" | "gts" | "gql" | "hbs" | "hs" | "properties" | "js" | "fsl" | "kt" | "kts" | "kql" | "makefile" | "nar" | "nf" | "nu" | "objc" | "ps" | "ps1" | "jade" | "py" | "perl6" | "rb" | "rs" | "shader" | "bash" | "sh" | "zsh" | "console" | "spl" | "styl" | "tf" | "tfvars" | "ts" | "typ" | "cmd" | "vim" | "vimscript" | "vy" | "文言" | "wl" | "yml";
                block: "coffee" | "diff" | "fish" | "move" | "shell" | "turtle" | "swift" | "python" | "markdown" | "kotlin" | "css" | "latex" | "fs" | "json" | "rel" | "mdx" | "md" | "csv" | "html" | "abap" | "actionscript-3" | "ada" | "angular-html" | "angular-ts" | "apache" | "apex" | "apl" | "applescript" | "ara" | "asm" | "astro" | "awk" | "ballerina" | "bat" | "beancount" | "berry" | "bibtex" | "bicep" | "blade" | "c" | "cadence" | "clarity" | "clojure" | "cmake" | "cobol" | "codeql" | "cpp" | "crystal" | "csharp" | "cue" | "cypher" | "d" | "dart" | "dax" | "docker" | "dream-maker" | "elixir" | "elm" | "erb" | "erlang" | "fortran-fixed-form" | "fortran-free-form" | "fsharp" | "gdresource" | "gdscript" | "gdshader" | "gherkin" | "git-commit" | "git-rebase" | "glimmer-js" | "glimmer-ts" | "glsl" | "gnuplot" | "go" | "graphql" | "groovy" | "hack" | "haml" | "handlebars" | "haskell" | "hcl" | "hjson" | "hlsl" | "html-derivative" | "http" | "imba" | "ini" | "java" | "javascript" | "jinja" | "jison" | "json5" | "jsonc" | "jsonl" | "jsonnet" | "jssm" | "jsx" | "julia" | "kusto" | "less" | "liquid" | "lisp" | "logo" | "lua" | "make" | "marko" | "matlab" | "mdc" | "mermaid" | "mojo" | "narrat" | "nextflow" | "nginx" | "nim" | "nix" | "nushell" | "objective-c" | "objective-cpp" | "ocaml" | "pascal" | "perl" | "php" | "plsql" | "postcss" | "powerquery" | "powershell" | "prisma" | "prolog" | "proto" | "pug" | "puppet" | "purescript" | "r" | "raku" | "razor" | "reg" | "riscv" | "rst" | "ruby" | "rust" | "sas" | "sass" | "scala" | "scheme" | "scss" | "shaderlab" | "shellscript" | "shellsession" | "smalltalk" | "solidity" | "sparql" | "splunk" | "sql" | "ssh-config" | "stata" | "stylus" | "svelte" | "system-verilog" | "tasl" | "tcl" | "terraform" | "tex" | "toml" | "tsx" | "twig" | "typescript" | "typst" | "v" | "vb" | "verilog" | "vhdl" | "viml" | "vue" | "vue-html" | "vyper" | "wasm" | "wenyan" | "wgsl" | "wolfram" | "xml" | "xsl" | "yaml" | "zenscript" | "zig" | "batch" | "be" | "cdc" | "clj" | "ql" | "coffeescript" | "c++" | "c#" | "cs" | "cql" | "dockerfile" | "erl" | "f" | "for" | "f77" | "f90" | "f95" | "f03" | "f08" | "f18" | "f#" | "gjs" | "gts" | "gql" | "hbs" | "hs" | "properties" | "js" | "fsl" | "kt" | "kts" | "kql" | "makefile" | "nar" | "nf" | "nu" | "objc" | "ps" | "ps1" | "jade" | "py" | "perl6" | "rb" | "rs" | "shader" | "bash" | "sh" | "zsh" | "console" | "spl" | "styl" | "tf" | "tfvars" | "ts" | "typ" | "cmd" | "vim" | "vimscript" | "vy" | "文言" | "wl" | "yml";
            };
        };
    }, {
        editor?: {
            defaultLangauge?: string | undefined;
            useVimMode?: boolean | undefined;
        } | undefined;
        theme?: {
            dark?: "andromeeda" | "aurora-x" | "ayu-dark" | "catppuccin-frappe" | "catppuccin-latte" | "catppuccin-macchiato" | "catppuccin-mocha" | "dark-plus" | "dracula" | "dracula-soft" | "github-dark" | "github-dark-dimmed" | "github-light" | "light-plus" | "material-theme" | "material-theme-darker" | "material-theme-lighter" | "material-theme-ocean" | "material-theme-palenight" | "min-dark" | "min-light" | "monokai" | "night-owl" | "nord" | "one-dark-pro" | "poimandres" | "red" | "rose-pine" | "rose-pine-dawn" | "rose-pine-moon" | "slack-dark" | "slack-ochin" | "solarized-dark" | "solarized-light" | "synthwave-84" | "tokyo-night" | "vesper" | "vitesse-black" | "vitesse-dark" | "vitesse-light" | undefined;
            light?: "andromeeda" | "aurora-x" | "ayu-dark" | "catppuccin-frappe" | "catppuccin-latte" | "catppuccin-macchiato" | "catppuccin-mocha" | "dark-plus" | "dracula" | "dracula-soft" | "github-dark" | "github-dark-dimmed" | "github-light" | "light-plus" | "material-theme" | "material-theme-darker" | "material-theme-lighter" | "material-theme-ocean" | "material-theme-palenight" | "min-dark" | "min-light" | "monokai" | "night-owl" | "nord" | "one-dark-pro" | "poimandres" | "red" | "rose-pine" | "rose-pine-dawn" | "rose-pine-moon" | "slack-dark" | "slack-ochin" | "solarized-dark" | "solarized-light" | "synthwave-84" | "tokyo-night" | "vesper" | "vitesse-black" | "vitesse-dark" | "vitesse-light" | undefined;
        } | undefined;
        syntaxHighlighting?: {
            transformers?: {
                regexHighlight?: boolean | undefined;
                lineHighlight?: boolean | undefined;
                lineFocus?: boolean | undefined;
                lineErrorLevel?: boolean | undefined;
                lineDiff?: boolean | undefined;
            } | undefined;
            defaultLanguage?: "coffee" | "diff" | "fish" | "move" | "shell" | "turtle" | "swift" | "python" | "markdown" | "kotlin" | "css" | "latex" | "fs" | "json" | "rel" | "mdx" | "md" | "csv" | "html" | "abap" | "actionscript-3" | "ada" | "angular-html" | "angular-ts" | "apache" | "apex" | "apl" | "applescript" | "ara" | "asm" | "astro" | "awk" | "ballerina" | "bat" | "beancount" | "berry" | "bibtex" | "bicep" | "blade" | "c" | "cadence" | "clarity" | "clojure" | "cmake" | "cobol" | "codeql" | "cpp" | "crystal" | "csharp" | "cue" | "cypher" | "d" | "dart" | "dax" | "docker" | "dream-maker" | "elixir" | "elm" | "erb" | "erlang" | "fortran-fixed-form" | "fortran-free-form" | "fsharp" | "gdresource" | "gdscript" | "gdshader" | "gherkin" | "git-commit" | "git-rebase" | "glimmer-js" | "glimmer-ts" | "glsl" | "gnuplot" | "go" | "graphql" | "groovy" | "hack" | "haml" | "handlebars" | "haskell" | "hcl" | "hjson" | "hlsl" | "html-derivative" | "http" | "imba" | "ini" | "java" | "javascript" | "jinja" | "jison" | "json5" | "jsonc" | "jsonl" | "jsonnet" | "jssm" | "jsx" | "julia" | "kusto" | "less" | "liquid" | "lisp" | "logo" | "lua" | "make" | "marko" | "matlab" | "mdc" | "mermaid" | "mojo" | "narrat" | "nextflow" | "nginx" | "nim" | "nix" | "nushell" | "objective-c" | "objective-cpp" | "ocaml" | "pascal" | "perl" | "php" | "plsql" | "postcss" | "powerquery" | "powershell" | "prisma" | "prolog" | "proto" | "pug" | "puppet" | "purescript" | "r" | "raku" | "razor" | "reg" | "riscv" | "rst" | "ruby" | "rust" | "sas" | "sass" | "scala" | "scheme" | "scss" | "shaderlab" | "shellscript" | "shellsession" | "smalltalk" | "solidity" | "sparql" | "splunk" | "sql" | "ssh-config" | "stata" | "stylus" | "svelte" | "system-verilog" | "tasl" | "tcl" | "terraform" | "tex" | "toml" | "tsx" | "twig" | "typescript" | "typst" | "v" | "vb" | "verilog" | "vhdl" | "viml" | "vue" | "vue-html" | "vyper" | "wasm" | "wenyan" | "wgsl" | "wolfram" | "xml" | "xsl" | "yaml" | "zenscript" | "zig" | "batch" | "be" | "cdc" | "clj" | "ql" | "coffeescript" | "c++" | "c#" | "cs" | "cql" | "dockerfile" | "erl" | "f" | "for" | "f77" | "f90" | "f95" | "f03" | "f08" | "f18" | "f#" | "gjs" | "gts" | "gql" | "hbs" | "hs" | "properties" | "js" | "fsl" | "kt" | "kts" | "kql" | "makefile" | "nar" | "nf" | "nu" | "objc" | "ps" | "ps1" | "jade" | "py" | "perl6" | "rb" | "rs" | "shader" | "bash" | "sh" | "zsh" | "console" | "spl" | "styl" | "tf" | "tfvars" | "ts" | "typ" | "cmd" | "vim" | "vimscript" | "vy" | "文言" | "wl" | "yml" | {
                inline: "coffee" | "diff" | "fish" | "move" | "shell" | "turtle" | "swift" | "python" | "markdown" | "kotlin" | "css" | "latex" | "fs" | "json" | "rel" | "mdx" | "md" | "csv" | "html" | "abap" | "actionscript-3" | "ada" | "angular-html" | "angular-ts" | "apache" | "apex" | "apl" | "applescript" | "ara" | "asm" | "astro" | "awk" | "ballerina" | "bat" | "beancount" | "berry" | "bibtex" | "bicep" | "blade" | "c" | "cadence" | "clarity" | "clojure" | "cmake" | "cobol" | "codeql" | "cpp" | "crystal" | "csharp" | "cue" | "cypher" | "d" | "dart" | "dax" | "docker" | "dream-maker" | "elixir" | "elm" | "erb" | "erlang" | "fortran-fixed-form" | "fortran-free-form" | "fsharp" | "gdresource" | "gdscript" | "gdshader" | "gherkin" | "git-commit" | "git-rebase" | "glimmer-js" | "glimmer-ts" | "glsl" | "gnuplot" | "go" | "graphql" | "groovy" | "hack" | "haml" | "handlebars" | "haskell" | "hcl" | "hjson" | "hlsl" | "html-derivative" | "http" | "imba" | "ini" | "java" | "javascript" | "jinja" | "jison" | "json5" | "jsonc" | "jsonl" | "jsonnet" | "jssm" | "jsx" | "julia" | "kusto" | "less" | "liquid" | "lisp" | "logo" | "lua" | "make" | "marko" | "matlab" | "mdc" | "mermaid" | "mojo" | "narrat" | "nextflow" | "nginx" | "nim" | "nix" | "nushell" | "objective-c" | "objective-cpp" | "ocaml" | "pascal" | "perl" | "php" | "plsql" | "postcss" | "powerquery" | "powershell" | "prisma" | "prolog" | "proto" | "pug" | "puppet" | "purescript" | "r" | "raku" | "razor" | "reg" | "riscv" | "rst" | "ruby" | "rust" | "sas" | "sass" | "scala" | "scheme" | "scss" | "shaderlab" | "shellscript" | "shellsession" | "smalltalk" | "solidity" | "sparql" | "splunk" | "sql" | "ssh-config" | "stata" | "stylus" | "svelte" | "system-verilog" | "tasl" | "tcl" | "terraform" | "tex" | "toml" | "tsx" | "twig" | "typescript" | "typst" | "v" | "vb" | "verilog" | "vhdl" | "viml" | "vue" | "vue-html" | "vyper" | "wasm" | "wenyan" | "wgsl" | "wolfram" | "xml" | "xsl" | "yaml" | "zenscript" | "zig" | "batch" | "be" | "cdc" | "clj" | "ql" | "coffeescript" | "c++" | "c#" | "cs" | "cql" | "dockerfile" | "erl" | "f" | "for" | "f77" | "f90" | "f95" | "f03" | "f08" | "f18" | "f#" | "gjs" | "gts" | "gql" | "hbs" | "hs" | "properties" | "js" | "fsl" | "kt" | "kts" | "kql" | "makefile" | "nar" | "nf" | "nu" | "objc" | "ps" | "ps1" | "jade" | "py" | "perl6" | "rb" | "rs" | "shader" | "bash" | "sh" | "zsh" | "console" | "spl" | "styl" | "tf" | "tfvars" | "ts" | "typ" | "cmd" | "vim" | "vimscript" | "vy" | "文言" | "wl" | "yml";
                block: "coffee" | "diff" | "fish" | "move" | "shell" | "turtle" | "swift" | "python" | "markdown" | "kotlin" | "css" | "latex" | "fs" | "json" | "rel" | "mdx" | "md" | "csv" | "html" | "abap" | "actionscript-3" | "ada" | "angular-html" | "angular-ts" | "apache" | "apex" | "apl" | "applescript" | "ara" | "asm" | "astro" | "awk" | "ballerina" | "bat" | "beancount" | "berry" | "bibtex" | "bicep" | "blade" | "c" | "cadence" | "clarity" | "clojure" | "cmake" | "cobol" | "codeql" | "cpp" | "crystal" | "csharp" | "cue" | "cypher" | "d" | "dart" | "dax" | "docker" | "dream-maker" | "elixir" | "elm" | "erb" | "erlang" | "fortran-fixed-form" | "fortran-free-form" | "fsharp" | "gdresource" | "gdscript" | "gdshader" | "gherkin" | "git-commit" | "git-rebase" | "glimmer-js" | "glimmer-ts" | "glsl" | "gnuplot" | "go" | "graphql" | "groovy" | "hack" | "haml" | "handlebars" | "haskell" | "hcl" | "hjson" | "hlsl" | "html-derivative" | "http" | "imba" | "ini" | "java" | "javascript" | "jinja" | "jison" | "json5" | "jsonc" | "jsonl" | "jsonnet" | "jssm" | "jsx" | "julia" | "kusto" | "less" | "liquid" | "lisp" | "logo" | "lua" | "make" | "marko" | "matlab" | "mdc" | "mermaid" | "mojo" | "narrat" | "nextflow" | "nginx" | "nim" | "nix" | "nushell" | "objective-c" | "objective-cpp" | "ocaml" | "pascal" | "perl" | "php" | "plsql" | "postcss" | "powerquery" | "powershell" | "prisma" | "prolog" | "proto" | "pug" | "puppet" | "purescript" | "r" | "raku" | "razor" | "reg" | "riscv" | "rst" | "ruby" | "rust" | "sas" | "sass" | "scala" | "scheme" | "scss" | "shaderlab" | "shellscript" | "shellsession" | "smalltalk" | "solidity" | "sparql" | "splunk" | "sql" | "ssh-config" | "stata" | "stylus" | "svelte" | "system-verilog" | "tasl" | "tcl" | "terraform" | "tex" | "toml" | "tsx" | "twig" | "typescript" | "typst" | "v" | "vb" | "verilog" | "vhdl" | "viml" | "vue" | "vue-html" | "vyper" | "wasm" | "wenyan" | "wgsl" | "wolfram" | "xml" | "xsl" | "yaml" | "zenscript" | "zig" | "batch" | "be" | "cdc" | "clj" | "ql" | "coffeescript" | "c++" | "c#" | "cs" | "cql" | "dockerfile" | "erl" | "f" | "for" | "f77" | "f90" | "f95" | "f03" | "f08" | "f18" | "f#" | "gjs" | "gts" | "gql" | "hbs" | "hs" | "properties" | "js" | "fsl" | "kt" | "kts" | "kql" | "makefile" | "nar" | "nf" | "nu" | "objc" | "ps" | "ps1" | "jade" | "py" | "perl6" | "rb" | "rs" | "shader" | "bash" | "sh" | "zsh" | "console" | "spl" | "styl" | "tf" | "tfvars" | "ts" | "typ" | "cmd" | "vim" | "vimscript" | "vy" | "文言" | "wl" | "yml";
            } | undefined;
        } | undefined;
    }>>>;
    database: z.ZodOptional<z.ZodDefault<z.ZodObject<{
        storeFormatted: z.ZodDefault<z.ZodBoolean>;
        removeIfNotPresentInFs: z.ZodDefault<z.ZodBoolean>;
    }, "strip", z.ZodTypeAny, {
        storeFormatted: boolean;
        removeIfNotPresentInFs: boolean;
    }, {
        storeFormatted?: boolean | undefined;
        removeIfNotPresentInFs?: boolean | undefined;
    }>>>;
    navigation: z.ZodOptional<z.ZodDefault<z.ZodObject<{
        navbarBreakpoint: z.ZodDefault<z.ZodObject<{
            full: z.ZodDefault<z.ZodNumber>;
            minimal: z.ZodDefault<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            full: number;
            minimal: number;
        }, {
            full?: number | undefined;
            minimal?: number | undefined;
        }>>;
        maxResultLength: z.ZodDefault<z.ZodObject<{
            categories: z.ZodDefault<z.ZodNumber>;
            equations: z.ZodDefault<z.ZodNumber>;
            snippets: z.ZodDefault<z.ZodNumber>;
            searchAll: z.ZodDefault<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            snippets: number;
            searchAll: number;
            equations: number;
            categories: number;
        }, {
            snippets?: number | undefined;
            searchAll?: number | undefined;
            equations?: number | undefined;
            categories?: number | undefined;
        }>>;
        bookmarkLink: z.ZodDefault<z.ZodOptional<z.ZodUnion<[z.ZodLiteral<"sidebar">, z.ZodLiteral<"navbar">, z.ZodLiteral<"both">, z.ZodLiteral<"none">]>>>;
        syncLink: z.ZodDefault<z.ZodOptional<z.ZodUnion<[z.ZodLiteral<"sidebar">, z.ZodLiteral<"navbar">, z.ZodLiteral<"both">, z.ZodLiteral<"none">]>>>;
        fileSystemToggle: z.ZodOptional<z.ZodUnion<[z.ZodLiteral<"sidebar">, z.ZodLiteral<"navbar">, z.ZodLiteral<"both">, z.ZodLiteral<"none">]>>;
        darkmodeToggle: z.ZodDefault<z.ZodOptional<z.ZodUnion<[z.ZodLiteral<"sidebar">, z.ZodLiteral<"navbar">, z.ZodLiteral<"both">, z.ZodLiteral<"none">]>>>;
        settings: z.ZodOptional<z.ZodUnion<[z.ZodLiteral<"sidebar">, z.ZodLiteral<"navbar">, z.ZodLiteral<"both">, z.ZodLiteral<"none">]>>;
        equationsLink: z.ZodOptional<z.ZodUnion<[z.ZodLiteral<"sidebar">, z.ZodLiteral<"navbar">, z.ZodLiteral<"both">, z.ZodLiteral<"none">]>>;
        snippetsLink: z.ZodDefault<z.ZodOptional<z.ZodUnion<[z.ZodLiteral<"sidebar">, z.ZodLiteral<"navbar">, z.ZodLiteral<"both">, z.ZodLiteral<"none">]>>>;
        backupData: z.ZodOptional<z.ZodUnion<[z.ZodLiteral<"sidebar">, z.ZodLiteral<"navbar">, z.ZodLiteral<"both">, z.ZodLiteral<"none">]>>;
        navbarLinks: z.ZodDefault<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodObject<{
            label: z.ZodString;
            icon: z.ZodOptional<z.ZodEffects<z.ZodString, string, string>>;
            href: z.ZodOptional<z.ZodString>;
            onClick: z.ZodOptional<z.ZodFunction<z.ZodTuple<[], z.ZodUnknown>, z.ZodUnknown>>;
        }, "strip", z.ZodTypeAny, {
            label: string;
            href?: string | undefined;
            icon?: string | undefined;
            onClick?: ((...args: unknown[]) => unknown) | undefined;
        }, {
            label: string;
            href?: string | undefined;
            icon?: string | undefined;
            onClick?: ((...args: unknown[]) => unknown) | undefined;
        }>]>, "many">>;
        sidebarLinks: z.ZodDefault<z.ZodArray<z.ZodUnion<[z.ZodObject<{
            icon: z.ZodEffects<z.ZodString, string, string>;
            href: z.ZodOptional<z.ZodString>;
            label: z.ZodOptional<z.ZodString>;
            Icon: z.ZodOptional<z.ZodFunction<z.ZodTuple<[], z.ZodUnknown>, z.ZodUnknown>>;
            onClick: z.ZodOptional<z.ZodFunction<z.ZodTuple<[], z.ZodUnknown>, z.ZodUnknown>>;
        }, "strip", z.ZodTypeAny, {
            icon: string;
            label?: string | undefined;
            href?: string | undefined;
            onClick?: ((...args: unknown[]) => unknown) | undefined;
            Icon?: ((...args: unknown[]) => unknown) | undefined;
        }, {
            icon: string;
            label?: string | undefined;
            href?: string | undefined;
            onClick?: ((...args: unknown[]) => unknown) | undefined;
            Icon?: ((...args: unknown[]) => unknown) | undefined;
        }>, z.ZodString]>, "many">>;
    }, "strip", z.ZodTypeAny, {
        navbarBreakpoint: {
            full: number;
            minimal: number;
        };
        maxResultLength: {
            snippets: number;
            searchAll: number;
            equations: number;
            categories: number;
        };
        bookmarkLink: "none" | "sidebar" | "navbar" | "both";
        syncLink: "none" | "sidebar" | "navbar" | "both";
        darkmodeToggle: "none" | "sidebar" | "navbar" | "both";
        snippetsLink: "none" | "sidebar" | "navbar" | "both";
        navbarLinks: (string | {
            label: string;
            href?: string | undefined;
            icon?: string | undefined;
            onClick?: ((...args: unknown[]) => unknown) | undefined;
        })[];
        sidebarLinks: (string | {
            icon: string;
            label?: string | undefined;
            href?: string | undefined;
            onClick?: ((...args: unknown[]) => unknown) | undefined;
            Icon?: ((...args: unknown[]) => unknown) | undefined;
        })[];
        settings?: "none" | "sidebar" | "navbar" | "both" | undefined;
        fileSystemToggle?: "none" | "sidebar" | "navbar" | "both" | undefined;
        equationsLink?: "none" | "sidebar" | "navbar" | "both" | undefined;
        backupData?: "none" | "sidebar" | "navbar" | "both" | undefined;
    }, {
        settings?: "none" | "sidebar" | "navbar" | "both" | undefined;
        navbarBreakpoint?: {
            full?: number | undefined;
            minimal?: number | undefined;
        } | undefined;
        maxResultLength?: {
            snippets?: number | undefined;
            searchAll?: number | undefined;
            equations?: number | undefined;
            categories?: number | undefined;
        } | undefined;
        bookmarkLink?: "none" | "sidebar" | "navbar" | "both" | undefined;
        syncLink?: "none" | "sidebar" | "navbar" | "both" | undefined;
        fileSystemToggle?: "none" | "sidebar" | "navbar" | "both" | undefined;
        darkmodeToggle?: "none" | "sidebar" | "navbar" | "both" | undefined;
        equationsLink?: "none" | "sidebar" | "navbar" | "both" | undefined;
        snippetsLink?: "none" | "sidebar" | "navbar" | "both" | undefined;
        backupData?: "none" | "sidebar" | "navbar" | "both" | undefined;
        navbarLinks?: (string | {
            label: string;
            href?: string | undefined;
            icon?: string | undefined;
            onClick?: ((...args: unknown[]) => unknown) | undefined;
        })[] | undefined;
        sidebarLinks?: (string | {
            icon: string;
            label?: string | undefined;
            href?: string | undefined;
            onClick?: ((...args: unknown[]) => unknown) | undefined;
            Icon?: ((...args: unknown[]) => unknown) | undefined;
        })[] | undefined;
    }>>>;
    terminal: z.ZodOptional<z.ZodDefault<z.ZodObject<{
        logLevel: z.ZodDefault<z.ZodUnion<[z.ZodLiteral<"debug">, z.ZodLiteral<"verbose">, z.ZodLiteral<"info">, z.ZodLiteral<"none">]>>;
    }, "strip", z.ZodTypeAny, {
        logLevel: "info" | "none" | "debug" | "verbose";
    }, {
        logLevel?: "info" | "none" | "debug" | "verbose" | undefined;
    }>>>;
    jupyter: z.ZodOptional<z.ZodDefault<z.ZodObject<{
        execute: z.ZodDefault<z.ZodBoolean>;
        environment: z.ZodDefault<z.ZodString>;
        syntaxHighlightTheme: z.ZodDefault<z.ZodString>;
        jupyterToken: z.ZodOptional<z.ZodString>;
        jupyterPort: z.ZodDefault<z.ZodNumber>;
        initiallyFoldCells: z.ZodDefault<z.ZodBoolean>;
        kernel: z.ZodDefault<z.ZodString>;
        jupyterReactProps: z.ZodDefault<z.ZodObject<{
            collaborative: z.ZodDefault<z.ZodBoolean>;
            lite: z.ZodDefault<z.ZodBoolean>;
            serverUrls: z.ZodOptional<z.ZodObject<{
                baseUrl: z.ZodOptional<z.ZodString>;
                wsUrl: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                baseUrl?: string | undefined;
                wsUrl?: string | undefined;
            }, {
                baseUrl?: string | undefined;
                wsUrl?: string | undefined;
            }>>;
        }, "strip", z.ZodTypeAny, {
            collaborative: boolean;
            lite: boolean;
            serverUrls?: {
                baseUrl?: string | undefined;
                wsUrl?: string | undefined;
            } | undefined;
        }, {
            collaborative?: boolean | undefined;
            lite?: boolean | undefined;
            serverUrls?: {
                baseUrl?: string | undefined;
                wsUrl?: string | undefined;
            } | undefined;
        }>>;
        nbConvert: z.ZodDefault<z.ZodObject<{
            nbconvertPath: z.ZodOptional<z.ZodString>;
            conversionTimeout: z.ZodDefault<z.ZodNumber>;
            customConversionFunction: z.ZodOptional<z.ZodObject<{
                pdf: z.ZodOptional<z.ZodFunction<z.ZodTuple<[z.ZodString, z.ZodString], z.ZodUnknown>, z.ZodString>>;
            }, "strip", z.ZodTypeAny, {
                pdf?: ((args_0: string, args_1: string, ...args: unknown[]) => string) | undefined;
            }, {
                pdf?: ((args_0: string, args_1: string, ...args: unknown[]) => string) | undefined;
            }>>;
            execute: z.ZodDefault<z.ZodBoolean>;
            nbConvertTemplate: z.ZodDefault<z.ZodUnion<[z.ZodLiteral<"lab">, z.ZodLiteral<"classic">, z.ZodLiteral<"reveal">, z.ZodString]>>;
            notebookOutputDir: z.ZodDefault<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            conversionTimeout: number;
            execute: boolean;
            nbConvertTemplate: string;
            notebookOutputDir: string;
            nbconvertPath?: string | undefined;
            customConversionFunction?: {
                pdf?: ((args_0: string, args_1: string, ...args: unknown[]) => string) | undefined;
            } | undefined;
        }, {
            nbconvertPath?: string | undefined;
            conversionTimeout?: number | undefined;
            customConversionFunction?: {
                pdf?: ((args_0: string, args_1: string, ...args: unknown[]) => string) | undefined;
            } | undefined;
            execute?: boolean | undefined;
            nbConvertTemplate?: string | undefined;
            notebookOutputDir?: string | undefined;
        }>>;
        jupyterNotebookProps: z.ZodDefault<z.ZodObject<{
            cellMetadataPanel: z.ZodDefault<z.ZodBoolean>;
            cellSidebarMargin: z.ZodDefault<z.ZodNumber>;
            height: z.ZodOptional<z.ZodString>;
            maxHeight: z.ZodOptional<z.ZodString>;
            bundledIPyWidgets: z.ZodDefault<z.ZodArray<z.ZodObject<{
                module: z.ZodUnion<[z.ZodString, z.ZodRecord<z.ZodString, z.ZodString>]>;
                name: z.ZodString;
                version: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                name: string;
                module: string | Record<string, string>;
                version: string;
            }, {
                name: string;
                module: string | Record<string, string>;
                version: string;
            }>, "many">>;
            externalIPyWidgets: z.ZodDefault<z.ZodArray<z.ZodObject<Omit<{
                module: z.ZodUnion<[z.ZodString, z.ZodRecord<z.ZodString, z.ZodString>]>;
                name: z.ZodString;
                version: z.ZodString;
            }, "module">, "strip", z.ZodTypeAny, {
                name: string;
                version: string;
            }, {
                name: string;
                version: string;
            }>, "many">>;
            nbgrader: z.ZodDefault<z.ZodBoolean>;
            readOnly: z.ZodDefault<z.ZodBoolean>;
        }, "strip", z.ZodTypeAny, {
            readOnly: boolean;
            cellMetadataPanel: boolean;
            cellSidebarMargin: number;
            bundledIPyWidgets: {
                name: string;
                module: string | Record<string, string>;
                version: string;
            }[];
            externalIPyWidgets: {
                name: string;
                version: string;
            }[];
            nbgrader: boolean;
            height?: string | undefined;
            maxHeight?: string | undefined;
        }, {
            height?: string | undefined;
            readOnly?: boolean | undefined;
            maxHeight?: string | undefined;
            cellMetadataPanel?: boolean | undefined;
            cellSidebarMargin?: number | undefined;
            bundledIPyWidgets?: {
                name: string;
                module: string | Record<string, string>;
                version: string;
            }[] | undefined;
            externalIPyWidgets?: {
                name: string;
                version: string;
            }[] | undefined;
            nbgrader?: boolean | undefined;
        }>>;
        cellInputWrappers: z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodObject<{
            prefix: z.ZodString;
            suffix: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            prefix: string;
            suffix: string;
        }, {
            prefix: string;
            suffix: string;
        }>]>, {
            prefix: string;
            suffix: string;
        }, string | {
            prefix: string;
            suffix: string;
        }>>>;
    }, "strip", z.ZodTypeAny, {
        execute: boolean;
        environment: string;
        syntaxHighlightTheme: string;
        jupyterPort: number;
        initiallyFoldCells: boolean;
        kernel: string;
        jupyterReactProps: {
            collaborative: boolean;
            lite: boolean;
            serverUrls?: {
                baseUrl?: string | undefined;
                wsUrl?: string | undefined;
            } | undefined;
        };
        nbConvert: {
            conversionTimeout: number;
            execute: boolean;
            nbConvertTemplate: string;
            notebookOutputDir: string;
            nbconvertPath?: string | undefined;
            customConversionFunction?: {
                pdf?: ((args_0: string, args_1: string, ...args: unknown[]) => string) | undefined;
            } | undefined;
        };
        jupyterNotebookProps: {
            readOnly: boolean;
            cellMetadataPanel: boolean;
            cellSidebarMargin: number;
            bundledIPyWidgets: {
                name: string;
                module: string | Record<string, string>;
                version: string;
            }[];
            externalIPyWidgets: {
                name: string;
                version: string;
            }[];
            nbgrader: boolean;
            height?: string | undefined;
            maxHeight?: string | undefined;
        };
        cellInputWrappers: Record<string, {
            prefix: string;
            suffix: string;
        }>;
        jupyterToken?: string | undefined;
    }, {
        execute?: boolean | undefined;
        environment?: string | undefined;
        syntaxHighlightTheme?: string | undefined;
        jupyterToken?: string | undefined;
        jupyterPort?: number | undefined;
        initiallyFoldCells?: boolean | undefined;
        kernel?: string | undefined;
        jupyterReactProps?: {
            collaborative?: boolean | undefined;
            lite?: boolean | undefined;
            serverUrls?: {
                baseUrl?: string | undefined;
                wsUrl?: string | undefined;
            } | undefined;
        } | undefined;
        nbConvert?: {
            nbconvertPath?: string | undefined;
            conversionTimeout?: number | undefined;
            customConversionFunction?: {
                pdf?: ((args_0: string, args_1: string, ...args: unknown[]) => string) | undefined;
            } | undefined;
            execute?: boolean | undefined;
            nbConvertTemplate?: string | undefined;
            notebookOutputDir?: string | undefined;
        } | undefined;
        jupyterNotebookProps?: {
            height?: string | undefined;
            readOnly?: boolean | undefined;
            maxHeight?: string | undefined;
            cellMetadataPanel?: boolean | undefined;
            cellSidebarMargin?: number | undefined;
            bundledIPyWidgets?: {
                name: string;
                module: string | Record<string, string>;
                version: string;
            }[] | undefined;
            externalIPyWidgets?: {
                name: string;
                version: string;
            }[] | undefined;
            nbgrader?: boolean | undefined;
        } | undefined;
        cellInputWrappers?: Record<string, string | {
            prefix: string;
            suffix: string;
        }> | undefined;
    }>>>;
    math: z.ZodOptional<z.ZodDefault<z.ZodObject<{
        latexPackages: z.ZodDefault<z.ZodUnion<[z.ZodArray<z.ZodString, "many">, z.ZodLiteral<"all">]>>;
        latexFontUrl: z.ZodEffects<z.ZodString, string, string> | z.ZodEffects<z.ZodOptional<z.ZodString>, string | undefined, string | undefined>;
        constants: z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodNumber>>;
    }, "strip", z.ZodTypeAny, {
        latexPackages: string[] | "all";
        constants: Record<string, number>;
        latexFontUrl?: string | undefined;
    }, {
        latexPackages?: string[] | "all" | undefined;
        latexFontUrl?: string | undefined;
        constants?: Record<string, number> | undefined;
    }>>>;
    UI: z.ZodOptional<z.ZodDefault<z.ZodObject<{
        table: z.ZodDefault<z.ZodObject<{
            maxHeight: z.ZodEffects<z.ZodDefault<z.ZodUnion<[z.ZodString, z.ZodNumber]>>, string, string | number | undefined>;
        }, "strip", z.ZodTypeAny, {
            maxHeight: string;
        }, {
            maxHeight?: string | number | undefined;
        }>>;
        text: z.ZodDefault<z.ZodObject<{
            blockQuoteItalic: z.ZodDefault<z.ZodBoolean>;
            fontPaths: z.ZodDefault<z.ZodUnion<[z.ZodArray<z.ZodObject<{
                path: z.ZodString;
                weight: z.ZodUnion<[z.ZodLiteral<"100">, z.ZodLiteral<"200">, z.ZodLiteral<"300">, z.ZodLiteral<"400">, z.ZodLiteral<"500">, z.ZodLiteral<"600">, z.ZodLiteral<"700">, z.ZodLiteral<"800">, z.ZodLiteral<"900">]>;
                style: z.ZodUnion<[z.ZodLiteral<"italic">, z.ZodLiteral<"bold">, z.ZodLiteral<"normal">]>;
            }, "strip", z.ZodTypeAny, {
                weight: "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900";
                path: string;
                style: "bold" | "italic" | "normal";
            }, {
                weight: "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900";
                path: string;
                style: "bold" | "italic" | "normal";
            }>, "many">, z.ZodLiteral<"default">]>>;
        }, "strip", z.ZodTypeAny, {
            blockQuoteItalic: boolean;
            fontPaths: "default" | {
                weight: "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900";
                path: string;
                style: "bold" | "italic" | "normal";
            }[];
        }, {
            blockQuoteItalic?: boolean | undefined;
            fontPaths?: "default" | {
                weight: "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900";
                path: string;
                style: "bold" | "italic" | "normal";
            }[] | undefined;
        }>>;
        media: z.ZodDefault<z.ZodObject<{
            imageMap: z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodEffects<z.ZodString, string, string> | z.ZodEffects<z.ZodOptional<z.ZodString>, string | undefined, string | undefined>>>;
            includeDefaultImageMap: z.ZodDefault<z.ZodBoolean>;
            imageRemoteTest: z.ZodDefault<z.ZodArray<z.ZodType<RegExp, z.ZodTypeDef, RegExp>, "many">>;
        }, "strip", z.ZodTypeAny, {
            imageMap: Record<string, string | undefined>;
            includeDefaultImageMap: boolean;
            imageRemoteTest: RegExp[];
        }, {
            imageMap?: Record<string, string | undefined> | undefined;
            includeDefaultImageMap?: boolean | undefined;
            imageRemoteTest?: RegExp[] | undefined;
        }>>;
        colors: z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodUnion<[z.ZodObject<{
            dark: z.ZodEffects<z.ZodOptional<z.ZodString>, string | undefined, string | undefined>;
            light: z.ZodEffects<z.ZodOptional<z.ZodString>, string | undefined, string | undefined>;
        }, "strip", z.ZodTypeAny, {
            dark?: string | undefined;
            light?: string | undefined;
        }, {
            dark?: string | undefined;
            light?: string | undefined;
        }>, z.ZodEffects<z.ZodString, string | undefined, string>]>>>, {
            dark?: string | undefined;
            light?: string | undefined;
        } | undefined, string | {
            dark?: string | undefined;
            light?: string | undefined;
        } | null | undefined>>>;
        theme: z.ZodDefault<z.ZodUnion<[z.ZodLiteral<"blue">, z.ZodLiteral<"gray">, z.ZodLiteral<"green">, z.ZodLiteral<"neutral">, z.ZodLiteral<"orange">, z.ZodLiteral<"red">, z.ZodLiteral<"rose">, z.ZodLiteral<"slate">, z.ZodLiteral<"stone">, z.ZodLiteral<"violet">, z.ZodLiteral<"yellow">, z.ZodLiteral<"zinc">, z.ZodLiteral<"ulld">]>>;
        autoApplyMdxTitles: z.ZodDefault<z.ZodBoolean>;
    }, "strip", z.ZodTypeAny, {
        table: {
            maxHeight: string;
        };
        text: {
            blockQuoteItalic: boolean;
            fontPaths: "default" | {
                weight: "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900";
                path: string;
                style: "bold" | "italic" | "normal";
            }[];
        };
        media: {
            imageMap: Record<string, string | undefined>;
            includeDefaultImageMap: boolean;
            imageRemoteTest: RegExp[];
        };
        theme: "ulld" | "red" | "orange" | "yellow" | "green" | "blue" | "rose" | "slate" | "gray" | "stone" | "zinc" | "neutral" | "violet";
        colors: Record<string, {
            dark?: string | undefined;
            light?: string | undefined;
        } | undefined>;
        autoApplyMdxTitles: boolean;
    }, {
        table?: {
            maxHeight?: string | number | undefined;
        } | undefined;
        text?: {
            blockQuoteItalic?: boolean | undefined;
            fontPaths?: "default" | {
                weight: "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900";
                path: string;
                style: "bold" | "italic" | "normal";
            }[] | undefined;
        } | undefined;
        media?: {
            imageMap?: Record<string, string | undefined> | undefined;
            includeDefaultImageMap?: boolean | undefined;
            imageRemoteTest?: RegExp[] | undefined;
        } | undefined;
        theme?: "ulld" | "red" | "orange" | "yellow" | "green" | "blue" | "rose" | "slate" | "gray" | "stone" | "zinc" | "neutral" | "violet" | undefined;
        colors?: Record<string, string | {
            dark?: string | undefined;
            light?: string | undefined;
        } | null | undefined> | undefined;
        autoApplyMdxTitles?: boolean | undefined;
    }>>>;
    slots: z.ZodOptional<z.ZodDefault<z.ZodObject<Record<keyof import("../../developer/slotMapRootType.js").SlotMap, z.ZodTypeAny>, "strip", z.ZodTypeAny, {
        navigation?: any;
        bibliography?: any;
        math?: any;
        snippets?: any;
        dashboard?: any;
        taskManager?: any;
        UI?: any;
        pdf?: any;
        editor?: any;
        form?: any;
        commandPalette?: any;
    }, {
        navigation?: any;
        bibliography?: any;
        math?: any;
        snippets?: any;
        dashboard?: any;
        taskManager?: any;
        UI?: any;
        pdf?: any;
        editor?: any;
        form?: any;
        commandPalette?: any;
    }>>>;
    fsRoot: z.ZodEffects<z.ZodString, string, string>;
    build: z.ZodOptional<z.ZodDefault<z.ZodObject<{
        database: z.ZodDefault<z.ZodEffects<z.ZodDefault<z.ZodObject<{
            type: z.ZodDefault<z.ZodEnum<["postgres", "sqlite"]>>;
            postgres: z.ZodEffects<z.ZodEffects<z.ZodDefault<z.ZodObject<{
                port: z.ZodDefault<z.ZodNumber>;
                dbName: z.ZodDefault<z.ZodString>;
                connectionURI: z.ZodDefault<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                port: number;
                dbName: string;
                connectionURI: string;
            }, {
                port?: number | undefined;
                dbName?: string | undefined;
                connectionURI?: string | undefined;
            }>>, {
                port: number;
                dbName: string;
                connectionURI: string;
            }, {
                port?: number | undefined;
                dbName?: string | undefined;
                connectionURI?: string | undefined;
            } | undefined>, {
                connectionURI: string;
                port?: undefined;
                dbName?: undefined;
            } | {
                port: number;
                dbName: string;
                connectionURI?: undefined;
            }, {
                port?: number | undefined;
                dbName?: string | undefined;
                connectionURI?: string | undefined;
            } | undefined>;
            prioritize: z.ZodDefault<z.ZodUnion<[z.ZodLiteral<"speed">, z.ZodLiteral<"size">]>>;
        }, "strip", z.ZodTypeAny, {
            type: "postgres" | "sqlite";
            postgres: {
                connectionURI: string;
                port?: undefined;
                dbName?: undefined;
            } | {
                port: number;
                dbName: string;
                connectionURI?: undefined;
            };
            prioritize: "size" | "speed";
        }, {
            type?: "postgres" | "sqlite" | undefined;
            postgres?: {
                port?: number | undefined;
                dbName?: string | undefined;
                connectionURI?: string | undefined;
            } | undefined;
            prioritize?: "size" | "speed" | undefined;
        }>>, {
            type: "postgres" | "sqlite";
            postgres: {
                connectionURI: string;
                port?: undefined;
                dbName?: undefined;
            } | {
                port: number;
                dbName: string;
                connectionURI?: undefined;
            };
            prioritize: "size" | "speed";
        }, {
            type?: "postgres" | "sqlite" | undefined;
            postgres?: {
                port?: number | undefined;
                dbName?: string | undefined;
                connectionURI?: string | undefined;
            } | undefined;
            prioritize?: "size" | "speed" | undefined;
        } | undefined>>;
        additionalUserContent: z.ZodDefault<z.ZodObject<{
            css: z.ZodOptional<z.ZodString>;
            favicon: z.ZodOptional<z.ZodEffects<z.ZodString, string, string>>;
            logo: z.ZodOptional<z.ZodEffects<z.ZodString, string, string>>;
        }, "strip", z.ZodTypeAny, {
            css?: string | undefined;
            logo?: string | undefined;
            favicon?: string | undefined;
        }, {
            css?: string | undefined;
            logo?: string | undefined;
            favicon?: string | undefined;
        }>>;
    }, "strip", z.ZodTypeAny, {
        database: {
            type: "postgres" | "sqlite";
            postgres: {
                connectionURI: string;
                port?: undefined;
                dbName?: undefined;
            } | {
                port: number;
                dbName: string;
                connectionURI?: undefined;
            };
            prioritize: "size" | "speed";
        };
        additionalUserContent: {
            css?: string | undefined;
            logo?: string | undefined;
            favicon?: string | undefined;
        };
    }, {
        database?: {
            type?: "postgres" | "sqlite" | undefined;
            postgres?: {
                port?: number | undefined;
                dbName?: string | undefined;
                connectionURI?: string | undefined;
            } | undefined;
            prioritize?: "size" | "speed" | undefined;
        } | undefined;
        additionalUserContent?: {
            css?: string | undefined;
            logo?: string | undefined;
            favicon?: string | undefined;
        } | undefined;
    }>>>;
    autoTag: z.ZodOptional<z.ZodDefault<z.ZodArray<z.ZodObject<{
        path: z.ZodString;
        tag: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        tag: string;
        path: string;
    }, {
        tag: string;
        path: string;
    }>, "many">>>;
    autoTopic: z.ZodOptional<z.ZodDefault<z.ZodArray<z.ZodObject<{
        path: z.ZodString;
        topic: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        path: string;
        topic: string;
    }, {
        path: string;
        topic: string;
    }>, "many">>>;
    autoSubject: z.ZodOptional<z.ZodDefault<z.ZodArray<z.ZodObject<{
        path: z.ZodString;
        subject: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        path: string;
        subject: string;
    }, {
        path: string;
        subject: string;
    }>, "many">>>;
    alwaysPreferFs: z.ZodOptional<z.ZodDefault<z.ZodBoolean>>;
    ignoreFilepaths: z.ZodOptional<z.ZodEffects<z.ZodDefault<z.ZodArray<z.ZodUnion<[z.ZodType<RegExp, z.ZodTypeDef, RegExp>, z.ZodString, z.ZodObject<{
        original: z.ZodString;
        regex: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodType<RegExp, z.ZodTypeDef, RegExp>]>, RegExp, string | RegExp>;
    }, "strip", z.ZodTypeAny, {
        regex: RegExp;
        original: string;
    }, {
        regex: string | RegExp;
        original: string;
    }>]>, "many">>, string[], (string | RegExp | {
        regex: string | RegExp;
        original: string;
    })[] | undefined>>;
    tempDir: z.ZodOptional<z.ZodEffects<z.ZodDefault<z.ZodString>, string, string | undefined>>;
    generatedDir: z.ZodOptional<z.ZodEffects<z.ZodDefault<z.ZodString>, string, string | undefined>>;
    ignorePreferFsExtensions: z.ZodOptional<z.ZodDefault<z.ZodArray<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodType<RegExp, z.ZodTypeDef, RegExp>, z.ZodObject<{
        original: z.ZodString;
        regex: z.ZodType<RegExp, z.ZodTypeDef, RegExp>;
    }, "strip", z.ZodTypeAny, {
        regex: RegExp;
        original: string;
    }, {
        regex: RegExp;
        original: string;
    }>]>, import("../configUtilitySchemas.js").ParsedRegExpField, string | RegExp | {
        regex: RegExp;
        original: string;
    }>, "many">>>;
    fileTypePriority: z.ZodOptional<z.ZodDefault<z.ZodArray<z.ZodUnion<[z.ZodUnion<[z.ZodLiteral<".mdx">, z.ZodLiteral<".md">, z.ZodLiteral<".ipynb">]>, z.ZodUnion<[z.ZodLiteral<".csv">, z.ZodLiteral<".tsv">, z.ZodLiteral<".excel">, z.ZodLiteral<".numpy">, z.ZodLiteral<".html">, z.ZodLiteral<".pickle">, z.ZodLiteral<".db">, z.ZodLiteral<".sql">, z.ZodLiteral<".pdf">, z.ZodLiteral<".json">, z.ZodLiteral<".tex">, z.ZodLiteral<".hdf5">]>]>, "many">>>;
    noteTypes: z.ZodEffects<z.ZodDefault<z.ZodArray<z.ZodEffects<z.ZodObject<{
        label: z.ZodString;
        icon: z.ZodDefault<z.ZodEffects<z.ZodString, string, string>>;
        UI: z.ZodDefault<z.ZodDefault<z.ZodObject<{
            styles: z.ZodDefault<z.ZodObject<{
                dark: z.ZodDefault<z.ZodObject<{
                    bg: z.ZodOptional<z.ZodString>;
                    fg: z.ZodOptional<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    bg?: string | undefined;
                    fg?: string | undefined;
                }, {
                    bg?: string | undefined;
                    fg?: string | undefined;
                }>>;
                light: z.ZodDefault<z.ZodObject<{
                    bg: z.ZodOptional<z.ZodString>;
                    fg: z.ZodOptional<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    bg?: string | undefined;
                    fg?: string | undefined;
                }, {
                    bg?: string | undefined;
                    fg?: string | undefined;
                }>>;
            }, "strip", z.ZodTypeAny, {
                dark: {
                    bg?: string | undefined;
                    fg?: string | undefined;
                };
                light: {
                    bg?: string | undefined;
                    fg?: string | undefined;
                };
            }, {
                dark?: {
                    bg?: string | undefined;
                    fg?: string | undefined;
                } | undefined;
                light?: {
                    bg?: string | undefined;
                    fg?: string | undefined;
                } | undefined;
            }>>;
        }, "strip", z.ZodTypeAny, {
            styles: {
                dark: {
                    bg?: string | undefined;
                    fg?: string | undefined;
                };
                light: {
                    bg?: string | undefined;
                    fg?: string | undefined;
                };
            };
        }, {
            styles?: {
                dark?: {
                    bg?: string | undefined;
                    fg?: string | undefined;
                } | undefined;
                light?: {
                    bg?: string | undefined;
                    fg?: string | undefined;
                } | undefined;
            } | undefined;
        }>>>;
        fs: z.ZodEffects<z.ZodString, string, string>;
        id: z.ZodOptional<z.ZodString>;
        docType: z.ZodOptional<z.ZodEffects<z.ZodString, string, string>>;
        filePathPattern: z.ZodOptional<z.ZodString>;
        matchWeight: z.ZodDefault<z.ZodNumber>;
        url: z.ZodOptional<z.ZodEffects<z.ZodString, string, string>>;
        urlQuery: z.ZodDefault<z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnion<[z.ZodString, z.ZodArray<z.ZodString, "many">, z.ZodNumber, z.ZodArray<z.ZodNumber, "many">]>>>>;
        keywords: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
        topicLabel: z.ZodOptional<z.ZodString>;
        subjectLabel: z.ZodOptional<z.ZodString>;
        autoTag: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
        autoTopic: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
        autoSubject: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
        inSidebar: z.ZodDefault<z.ZodBoolean>;
        inNavbar: z.ZodDefault<z.ZodBoolean>;
    }, "strip", z.ZodTypeAny, {
        label: string;
        icon: string;
        UI: {
            styles: {
                dark: {
                    bg?: string | undefined;
                    fg?: string | undefined;
                };
                light: {
                    bg?: string | undefined;
                    fg?: string | undefined;
                };
            };
        };
        fs: string;
        matchWeight: number;
        urlQuery: Record<string, string | number | string[] | number[]>;
        keywords: string[];
        autoTag: string[];
        autoTopic: string[];
        autoSubject: string[];
        inSidebar: boolean;
        inNavbar: boolean;
        id?: string | undefined;
        docType?: string | undefined;
        filePathPattern?: string | undefined;
        url?: string | undefined;
        topicLabel?: string | undefined;
        subjectLabel?: string | undefined;
    }, {
        label: string;
        fs: string;
        icon?: string | undefined;
        UI?: {
            styles?: {
                dark?: {
                    bg?: string | undefined;
                    fg?: string | undefined;
                } | undefined;
                light?: {
                    bg?: string | undefined;
                    fg?: string | undefined;
                } | undefined;
            } | undefined;
        } | undefined;
        id?: string | undefined;
        docType?: string | undefined;
        filePathPattern?: string | undefined;
        matchWeight?: number | undefined;
        url?: string | undefined;
        urlQuery?: Record<string, string | number | string[] | number[]> | undefined;
        keywords?: string[] | undefined;
        topicLabel?: string | undefined;
        subjectLabel?: string | undefined;
        autoTag?: string[] | undefined;
        autoTopic?: string[] | undefined;
        autoSubject?: string[] | undefined;
        inSidebar?: boolean | undefined;
        inNavbar?: boolean | undefined;
    }>, {
        docType: string;
        id: string;
        url: string;
        label: string;
        icon: string;
        UI: {
            styles: {
                dark: {
                    bg?: string | undefined;
                    fg?: string | undefined;
                };
                light: {
                    bg?: string | undefined;
                    fg?: string | undefined;
                };
            };
        };
        fs: string;
        matchWeight: number;
        urlQuery: Record<string, string | number | string[] | number[]>;
        keywords: string[];
        autoTag: string[];
        autoTopic: string[];
        autoSubject: string[];
        inSidebar: boolean;
        inNavbar: boolean;
        filePathPattern?: string | undefined;
        topicLabel?: string | undefined;
        subjectLabel?: string | undefined;
    }, {
        label: string;
        fs: string;
        icon?: string | undefined;
        UI?: {
            styles?: {
                dark?: {
                    bg?: string | undefined;
                    fg?: string | undefined;
                } | undefined;
                light?: {
                    bg?: string | undefined;
                    fg?: string | undefined;
                } | undefined;
            } | undefined;
        } | undefined;
        id?: string | undefined;
        docType?: string | undefined;
        filePathPattern?: string | undefined;
        matchWeight?: number | undefined;
        url?: string | undefined;
        urlQuery?: Record<string, string | number | string[] | number[]> | undefined;
        keywords?: string[] | undefined;
        topicLabel?: string | undefined;
        subjectLabel?: string | undefined;
        autoTag?: string[] | undefined;
        autoTopic?: string[] | undefined;
        autoSubject?: string[] | undefined;
        inSidebar?: boolean | undefined;
        inNavbar?: boolean | undefined;
    }>, "many">>, {
        docType: string;
        id: string;
        url: string;
        label: string;
        icon: string;
        UI: {
            styles: {
                dark: {
                    bg?: string | undefined;
                    fg?: string | undefined;
                };
                light: {
                    bg?: string | undefined;
                    fg?: string | undefined;
                };
            };
        };
        fs: string;
        matchWeight: number;
        urlQuery: Record<string, string | number | string[] | number[]>;
        keywords: string[];
        autoTag: string[];
        autoTopic: string[];
        autoSubject: string[];
        inSidebar: boolean;
        inNavbar: boolean;
        filePathPattern?: string | undefined;
        topicLabel?: string | undefined;
        subjectLabel?: string | undefined;
    }[], {
        label: string;
        fs: string;
        icon?: string | undefined;
        UI?: {
            styles?: {
                dark?: {
                    bg?: string | undefined;
                    fg?: string | undefined;
                } | undefined;
                light?: {
                    bg?: string | undefined;
                    fg?: string | undefined;
                } | undefined;
            } | undefined;
        } | undefined;
        id?: string | undefined;
        docType?: string | undefined;
        filePathPattern?: string | undefined;
        matchWeight?: number | undefined;
        url?: string | undefined;
        urlQuery?: Record<string, string | number | string[] | number[]> | undefined;
        keywords?: string[] | undefined;
        topicLabel?: string | undefined;
        subjectLabel?: string | undefined;
        autoTag?: string[] | undefined;
        autoTopic?: string[] | undefined;
        autoSubject?: string[] | undefined;
        inSidebar?: boolean | undefined;
        inNavbar?: boolean | undefined;
    }[] | undefined>;
    bibPath: z.ZodOptional<z.ZodEffects<z.ZodDefault<z.ZodString>, string, string | undefined>>;
    cslPath: z.ZodOptional<z.ZodEffects<z.ZodOptional<z.ZodString>, string | undefined, string | undefined>>;
    dateHandling: z.ZodOptional<z.ZodDefault<z.ZodObject<{
        enableAdvancedFormat: z.ZodDefault<z.ZodBoolean>;
        format: z.ZodDefault<z.ZodUnion<[z.ZodString, z.ZodObject<{
            short: z.ZodDefault<z.ZodString>;
            long: z.ZodDefault<z.ZodString>;
            withTime: z.ZodDefault<z.ZodString>;
            timeOnly: z.ZodDefault<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            short: string;
            long: string;
            withTime: string;
            timeOnly: string;
        }, {
            short?: string | undefined;
            long?: string | undefined;
            withTime?: string | undefined;
            timeOnly?: string | undefined;
        }>]>>;
        defaultTimeDisplayType: z.ZodDefault<z.ZodUnion<[z.ZodLiteral<"analog">, z.ZodLiteral<"summarized">, z.ZodLiteral<"descriptive">]>>;
        defaultTimeZone: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        enableAdvancedFormat: boolean;
        format: string | {
            short: string;
            long: string;
            withTime: string;
            timeOnly: string;
        };
        defaultTimeDisplayType: "summarized" | "analog" | "descriptive";
        defaultTimeZone?: string | undefined;
    }, {
        enableAdvancedFormat?: boolean | undefined;
        format?: string | {
            short?: string | undefined;
            long?: string | undefined;
            withTime?: string | undefined;
            timeOnly?: string | undefined;
        } | undefined;
        defaultTimeDisplayType?: "summarized" | "analog" | "descriptive" | undefined;
        defaultTimeZone?: string | undefined;
    }>>>;
    linkAliases: z.ZodOptional<z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodString>>>;
    features: z.ZodOptional<z.ZodOptional<z.ZodObject<{
        enabled: z.ZodOptional<z.ZodDefault<z.ZodObject<{
            commandPalette: z.ZodDefault<z.ZodBoolean>;
            tikz: z.ZodDefault<z.ZodBoolean>;
        }, "strip", z.ZodTypeAny, {
            commandPalette: boolean;
            tikz: boolean;
        }, {
            commandPalette?: boolean | undefined;
            tikz?: boolean | undefined;
        }>>>;
        pages: z.ZodOptional<z.ZodObject<{
            equations: z.ZodOptional<z.ZodDefault<z.ZodBoolean>>;
            snippets: z.ZodOptional<z.ZodDefault<z.ZodBoolean>>;
            calendar: z.ZodOptional<z.ZodDefault<z.ZodBoolean>>;
            bibliography: z.ZodOptional<z.ZodDefault<z.ZodBoolean>>;
            taskManager: z.ZodOptional<z.ZodDefault<z.ZodBoolean>>;
        }, "strip", z.ZodTypeAny, {
            calendar?: boolean | undefined;
            bibliography?: boolean | undefined;
            snippets?: boolean | undefined;
            taskManager?: boolean | undefined;
            equations?: boolean | undefined;
        }, {
            calendar?: boolean | undefined;
            bibliography?: boolean | undefined;
            snippets?: boolean | undefined;
            taskManager?: boolean | undefined;
            equations?: boolean | undefined;
        }>>;
    }, "strip", z.ZodTypeAny, {
        pages?: {
            calendar?: boolean | undefined;
            bibliography?: boolean | undefined;
            snippets?: boolean | undefined;
            taskManager?: boolean | undefined;
            equations?: boolean | undefined;
        } | undefined;
        enabled?: {
            commandPalette: boolean;
            tikz: boolean;
        } | undefined;
    }, {
        pages?: {
            calendar?: boolean | undefined;
            bibliography?: boolean | undefined;
            snippets?: boolean | undefined;
            taskManager?: boolean | undefined;
            equations?: boolean | undefined;
        } | undefined;
        enabled?: {
            commandPalette?: boolean | undefined;
            tikz?: boolean | undefined;
        } | undefined;
    }>>>;
    plotting: z.ZodOptional<z.ZodDefault<z.ZodObject<{
        plotColorList: z.ZodDefault<z.ZodUnion<[z.ZodArray<z.ZodString, "many">, z.ZodObject<{
            dark: z.ZodArray<z.ZodString, "many">;
            light: z.ZodArray<z.ZodString, "many">;
        }, "strip", z.ZodTypeAny, {
            dark: string[];
            light: string[];
        }, {
            dark: string[];
            light: string[];
        }>]>>;
        plotColorCycleMethod: z.ZodDefault<z.ZodUnion<[z.ZodLiteral<"inOrder">, z.ZodLiteral<"random">]>>;
    }, "strip", z.ZodTypeAny, {
        plotColorList: string[] | {
            dark: string[];
            light: string[];
        };
        plotColorCycleMethod: "inOrder" | "random";
    }, {
        plotColorList?: string[] | {
            dark: string[];
            light: string[];
        } | undefined;
        plotColorCycleMethod?: "inOrder" | "random" | undefined;
    }>>>;
    credentials: z.ZodOptional<z.ZodDefault<z.ZodObject<{
        googleServiceAccountJsonPath: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        googleServiceAccountJsonPath?: string | undefined;
    }, {
        googleServiceAccountJsonPath?: string | undefined;
    }>>>;
    performance: z.ZodOptional<z.ZodDefault<z.ZodObject<{
        latexParsingDebounceTimeout: z.ZodDefault<z.ZodNumber>;
        mdxParsingDebounceTimeout: z.ZodDefault<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        latexParsingDebounceTimeout: number;
        mdxParsingDebounceTimeout: number;
    }, {
        latexParsingDebounceTimeout?: number | undefined;
        mdxParsingDebounceTimeout?: number | undefined;
    }>>>;
    meta: z.ZodOptional<z.ZodDefault<z.ZodObject<{
        title: z.ZodDefault<z.ZodString>;
        desc: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        title: string;
        desc?: string | undefined;
    }, {
        title?: string | undefined;
        desc?: string | undefined;
    }>>>;
    plugins: z.ZodOptional<z.ZodEffects<z.ZodDefault<z.ZodUnion<[z.ZodObject<{
        name: z.ZodString;
        version: z.ZodDefault<z.ZodString>;
        parserIndex: z.ZodDefault<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        name: string;
        version: string;
        parserIndex: number;
    }, {
        name: string;
        version?: string | undefined;
        parserIndex?: number | undefined;
    }>, z.ZodArray<z.ZodObject<{
        name: z.ZodString;
        version: z.ZodDefault<z.ZodString>;
        parserIndex: z.ZodDefault<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        name: string;
        version: string;
        parserIndex: number;
    }, {
        name: string;
        version?: string | undefined;
        parserIndex?: number | undefined;
    }>, "many">, z.ZodString, z.ZodArray<z.ZodString, "many">]>>, ({
        name: string;
        version: string;
        parserIndex: number;
    } | {
        name: string;
        version: string;
    })[], string | string[] | {
        name: string;
        version?: string | undefined;
        parserIndex?: number | undefined;
    } | {
        name: string;
        version?: string | undefined;
        parserIndex?: number | undefined;
    }[] | undefined>>;
}, "strip", z.ZodTypeAny, {
    fsRoot: string;
    noteTypes: {
        docType: string;
        id: string;
        url: string;
        label: string;
        icon: string;
        UI: {
            styles: {
                dark: {
                    bg?: string | undefined;
                    fg?: string | undefined;
                };
                light: {
                    bg?: string | undefined;
                    fg?: string | undefined;
                };
            };
        };
        fs: string;
        matchWeight: number;
        urlQuery: Record<string, string | number | string[] | number[]>;
        keywords: string[];
        autoTag: string[];
        autoTopic: string[];
        autoSubject: string[];
        inSidebar: boolean;
        inNavbar: boolean;
        filePathPattern?: string | undefined;
        topicLabel?: string | undefined;
        subjectLabel?: string | undefined;
    }[];
    code?: {
        editor: {
            defaultLangauge: string;
            useVimMode: boolean;
        };
        theme: {
            dark: "andromeeda" | "aurora-x" | "ayu-dark" | "catppuccin-frappe" | "catppuccin-latte" | "catppuccin-macchiato" | "catppuccin-mocha" | "dark-plus" | "dracula" | "dracula-soft" | "github-dark" | "github-dark-dimmed" | "github-light" | "light-plus" | "material-theme" | "material-theme-darker" | "material-theme-lighter" | "material-theme-ocean" | "material-theme-palenight" | "min-dark" | "min-light" | "monokai" | "night-owl" | "nord" | "one-dark-pro" | "poimandres" | "red" | "rose-pine" | "rose-pine-dawn" | "rose-pine-moon" | "slack-dark" | "slack-ochin" | "solarized-dark" | "solarized-light" | "synthwave-84" | "tokyo-night" | "vesper" | "vitesse-black" | "vitesse-dark" | "vitesse-light";
            light: "andromeeda" | "aurora-x" | "ayu-dark" | "catppuccin-frappe" | "catppuccin-latte" | "catppuccin-macchiato" | "catppuccin-mocha" | "dark-plus" | "dracula" | "dracula-soft" | "github-dark" | "github-dark-dimmed" | "github-light" | "light-plus" | "material-theme" | "material-theme-darker" | "material-theme-lighter" | "material-theme-ocean" | "material-theme-palenight" | "min-dark" | "min-light" | "monokai" | "night-owl" | "nord" | "one-dark-pro" | "poimandres" | "red" | "rose-pine" | "rose-pine-dawn" | "rose-pine-moon" | "slack-dark" | "slack-ochin" | "solarized-dark" | "solarized-light" | "synthwave-84" | "tokyo-night" | "vesper" | "vitesse-black" | "vitesse-dark" | "vitesse-light";
        };
        syntaxHighlighting: {
            transformers: {
                regexHighlight: boolean;
                lineHighlight: boolean;
                lineFocus: boolean;
                lineErrorLevel: boolean;
                lineDiff: boolean;
            };
            defaultLanguage: {
                inline: "coffee" | "diff" | "fish" | "move" | "shell" | "turtle" | "swift" | "python" | "markdown" | "kotlin" | "css" | "latex" | "fs" | "json" | "rel" | "mdx" | "md" | "csv" | "html" | "abap" | "actionscript-3" | "ada" | "angular-html" | "angular-ts" | "apache" | "apex" | "apl" | "applescript" | "ara" | "asm" | "astro" | "awk" | "ballerina" | "bat" | "beancount" | "berry" | "bibtex" | "bicep" | "blade" | "c" | "cadence" | "clarity" | "clojure" | "cmake" | "cobol" | "codeql" | "cpp" | "crystal" | "csharp" | "cue" | "cypher" | "d" | "dart" | "dax" | "docker" | "dream-maker" | "elixir" | "elm" | "erb" | "erlang" | "fortran-fixed-form" | "fortran-free-form" | "fsharp" | "gdresource" | "gdscript" | "gdshader" | "gherkin" | "git-commit" | "git-rebase" | "glimmer-js" | "glimmer-ts" | "glsl" | "gnuplot" | "go" | "graphql" | "groovy" | "hack" | "haml" | "handlebars" | "haskell" | "hcl" | "hjson" | "hlsl" | "html-derivative" | "http" | "imba" | "ini" | "java" | "javascript" | "jinja" | "jison" | "json5" | "jsonc" | "jsonl" | "jsonnet" | "jssm" | "jsx" | "julia" | "kusto" | "less" | "liquid" | "lisp" | "logo" | "lua" | "make" | "marko" | "matlab" | "mdc" | "mermaid" | "mojo" | "narrat" | "nextflow" | "nginx" | "nim" | "nix" | "nushell" | "objective-c" | "objective-cpp" | "ocaml" | "pascal" | "perl" | "php" | "plsql" | "postcss" | "powerquery" | "powershell" | "prisma" | "prolog" | "proto" | "pug" | "puppet" | "purescript" | "r" | "raku" | "razor" | "reg" | "riscv" | "rst" | "ruby" | "rust" | "sas" | "sass" | "scala" | "scheme" | "scss" | "shaderlab" | "shellscript" | "shellsession" | "smalltalk" | "solidity" | "sparql" | "splunk" | "sql" | "ssh-config" | "stata" | "stylus" | "svelte" | "system-verilog" | "tasl" | "tcl" | "terraform" | "tex" | "toml" | "tsx" | "twig" | "typescript" | "typst" | "v" | "vb" | "verilog" | "vhdl" | "viml" | "vue" | "vue-html" | "vyper" | "wasm" | "wenyan" | "wgsl" | "wolfram" | "xml" | "xsl" | "yaml" | "zenscript" | "zig" | "batch" | "be" | "cdc" | "clj" | "ql" | "coffeescript" | "c++" | "c#" | "cs" | "cql" | "dockerfile" | "erl" | "f" | "for" | "f77" | "f90" | "f95" | "f03" | "f08" | "f18" | "f#" | "gjs" | "gts" | "gql" | "hbs" | "hs" | "properties" | "js" | "fsl" | "kt" | "kts" | "kql" | "makefile" | "nar" | "nf" | "nu" | "objc" | "ps" | "ps1" | "jade" | "py" | "perl6" | "rb" | "rs" | "shader" | "bash" | "sh" | "zsh" | "console" | "spl" | "styl" | "tf" | "tfvars" | "ts" | "typ" | "cmd" | "vim" | "vimscript" | "vy" | "文言" | "wl" | "yml";
                block: "coffee" | "diff" | "fish" | "move" | "shell" | "turtle" | "swift" | "python" | "markdown" | "kotlin" | "css" | "latex" | "fs" | "json" | "rel" | "mdx" | "md" | "csv" | "html" | "abap" | "actionscript-3" | "ada" | "angular-html" | "angular-ts" | "apache" | "apex" | "apl" | "applescript" | "ara" | "asm" | "astro" | "awk" | "ballerina" | "bat" | "beancount" | "berry" | "bibtex" | "bicep" | "blade" | "c" | "cadence" | "clarity" | "clojure" | "cmake" | "cobol" | "codeql" | "cpp" | "crystal" | "csharp" | "cue" | "cypher" | "d" | "dart" | "dax" | "docker" | "dream-maker" | "elixir" | "elm" | "erb" | "erlang" | "fortran-fixed-form" | "fortran-free-form" | "fsharp" | "gdresource" | "gdscript" | "gdshader" | "gherkin" | "git-commit" | "git-rebase" | "glimmer-js" | "glimmer-ts" | "glsl" | "gnuplot" | "go" | "graphql" | "groovy" | "hack" | "haml" | "handlebars" | "haskell" | "hcl" | "hjson" | "hlsl" | "html-derivative" | "http" | "imba" | "ini" | "java" | "javascript" | "jinja" | "jison" | "json5" | "jsonc" | "jsonl" | "jsonnet" | "jssm" | "jsx" | "julia" | "kusto" | "less" | "liquid" | "lisp" | "logo" | "lua" | "make" | "marko" | "matlab" | "mdc" | "mermaid" | "mojo" | "narrat" | "nextflow" | "nginx" | "nim" | "nix" | "nushell" | "objective-c" | "objective-cpp" | "ocaml" | "pascal" | "perl" | "php" | "plsql" | "postcss" | "powerquery" | "powershell" | "prisma" | "prolog" | "proto" | "pug" | "puppet" | "purescript" | "r" | "raku" | "razor" | "reg" | "riscv" | "rst" | "ruby" | "rust" | "sas" | "sass" | "scala" | "scheme" | "scss" | "shaderlab" | "shellscript" | "shellsession" | "smalltalk" | "solidity" | "sparql" | "splunk" | "sql" | "ssh-config" | "stata" | "stylus" | "svelte" | "system-verilog" | "tasl" | "tcl" | "terraform" | "tex" | "toml" | "tsx" | "twig" | "typescript" | "typst" | "v" | "vb" | "verilog" | "vhdl" | "viml" | "vue" | "vue-html" | "vyper" | "wasm" | "wenyan" | "wgsl" | "wolfram" | "xml" | "xsl" | "yaml" | "zenscript" | "zig" | "batch" | "be" | "cdc" | "clj" | "ql" | "coffeescript" | "c++" | "c#" | "cs" | "cql" | "dockerfile" | "erl" | "f" | "for" | "f77" | "f90" | "f95" | "f03" | "f08" | "f18" | "f#" | "gjs" | "gts" | "gql" | "hbs" | "hs" | "properties" | "js" | "fsl" | "kt" | "kts" | "kql" | "makefile" | "nar" | "nf" | "nu" | "objc" | "ps" | "ps1" | "jade" | "py" | "perl6" | "rb" | "rs" | "shader" | "bash" | "sh" | "zsh" | "console" | "spl" | "styl" | "tf" | "tfvars" | "ts" | "typ" | "cmd" | "vim" | "vimscript" | "vy" | "文言" | "wl" | "yml";
            };
        };
    } | undefined;
    database?: {
        storeFormatted: boolean;
        removeIfNotPresentInFs: boolean;
    } | undefined;
    navigation?: {
        navbarBreakpoint: {
            full: number;
            minimal: number;
        };
        maxResultLength: {
            snippets: number;
            searchAll: number;
            equations: number;
            categories: number;
        };
        bookmarkLink: "none" | "sidebar" | "navbar" | "both";
        syncLink: "none" | "sidebar" | "navbar" | "both";
        darkmodeToggle: "none" | "sidebar" | "navbar" | "both";
        snippetsLink: "none" | "sidebar" | "navbar" | "both";
        navbarLinks: (string | {
            label: string;
            href?: string | undefined;
            icon?: string | undefined;
            onClick?: ((...args: unknown[]) => unknown) | undefined;
        })[];
        sidebarLinks: (string | {
            icon: string;
            label?: string | undefined;
            href?: string | undefined;
            onClick?: ((...args: unknown[]) => unknown) | undefined;
            Icon?: ((...args: unknown[]) => unknown) | undefined;
        })[];
        settings?: "none" | "sidebar" | "navbar" | "both" | undefined;
        fileSystemToggle?: "none" | "sidebar" | "navbar" | "both" | undefined;
        equationsLink?: "none" | "sidebar" | "navbar" | "both" | undefined;
        backupData?: "none" | "sidebar" | "navbar" | "both" | undefined;
    } | undefined;
    terminal?: {
        logLevel: "info" | "none" | "debug" | "verbose";
    } | undefined;
    jupyter?: {
        execute: boolean;
        environment: string;
        syntaxHighlightTheme: string;
        jupyterPort: number;
        initiallyFoldCells: boolean;
        kernel: string;
        jupyterReactProps: {
            collaborative: boolean;
            lite: boolean;
            serverUrls?: {
                baseUrl?: string | undefined;
                wsUrl?: string | undefined;
            } | undefined;
        };
        nbConvert: {
            conversionTimeout: number;
            execute: boolean;
            nbConvertTemplate: string;
            notebookOutputDir: string;
            nbconvertPath?: string | undefined;
            customConversionFunction?: {
                pdf?: ((args_0: string, args_1: string, ...args: unknown[]) => string) | undefined;
            } | undefined;
        };
        jupyterNotebookProps: {
            readOnly: boolean;
            cellMetadataPanel: boolean;
            cellSidebarMargin: number;
            bundledIPyWidgets: {
                name: string;
                module: string | Record<string, string>;
                version: string;
            }[];
            externalIPyWidgets: {
                name: string;
                version: string;
            }[];
            nbgrader: boolean;
            height?: string | undefined;
            maxHeight?: string | undefined;
        };
        cellInputWrappers: Record<string, {
            prefix: string;
            suffix: string;
        }>;
        jupyterToken?: string | undefined;
    } | undefined;
    math?: {
        latexPackages: string[] | "all";
        constants: Record<string, number>;
        latexFontUrl?: string | undefined;
    } | undefined;
    UI?: {
        table: {
            maxHeight: string;
        };
        text: {
            blockQuoteItalic: boolean;
            fontPaths: "default" | {
                weight: "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900";
                path: string;
                style: "bold" | "italic" | "normal";
            }[];
        };
        media: {
            imageMap: Record<string, string | undefined>;
            includeDefaultImageMap: boolean;
            imageRemoteTest: RegExp[];
        };
        theme: "ulld" | "red" | "orange" | "yellow" | "green" | "blue" | "rose" | "slate" | "gray" | "stone" | "zinc" | "neutral" | "violet";
        colors: Record<string, {
            dark?: string | undefined;
            light?: string | undefined;
        } | undefined>;
        autoApplyMdxTitles: boolean;
    } | undefined;
    slots?: {
        navigation?: any;
        bibliography?: any;
        math?: any;
        snippets?: any;
        dashboard?: any;
        taskManager?: any;
        UI?: any;
        pdf?: any;
        editor?: any;
        form?: any;
        commandPalette?: any;
    } | undefined;
    build?: {
        database: {
            type: "postgres" | "sqlite";
            postgres: {
                connectionURI: string;
                port?: undefined;
                dbName?: undefined;
            } | {
                port: number;
                dbName: string;
                connectionURI?: undefined;
            };
            prioritize: "size" | "speed";
        };
        additionalUserContent: {
            css?: string | undefined;
            logo?: string | undefined;
            favicon?: string | undefined;
        };
    } | undefined;
    autoTag?: {
        tag: string;
        path: string;
    }[] | undefined;
    autoTopic?: {
        path: string;
        topic: string;
    }[] | undefined;
    autoSubject?: {
        path: string;
        subject: string;
    }[] | undefined;
    alwaysPreferFs?: boolean | undefined;
    ignoreFilepaths?: string[] | undefined;
    tempDir?: string | undefined;
    generatedDir?: string | undefined;
    ignorePreferFsExtensions?: import("../configUtilitySchemas.js").ParsedRegExpField[] | undefined;
    fileTypePriority?: (".mdx" | ".ipynb" | ".csv" | ".tsv" | ".excel" | ".numpy" | ".html" | ".pickle" | ".db" | ".sql" | ".pdf" | ".json" | ".tex" | ".hdf5" | ".md")[] | undefined;
    bibPath?: string | undefined;
    cslPath?: string | undefined;
    dateHandling?: {
        enableAdvancedFormat: boolean;
        format: string | {
            short: string;
            long: string;
            withTime: string;
            timeOnly: string;
        };
        defaultTimeDisplayType: "summarized" | "analog" | "descriptive";
        defaultTimeZone?: string | undefined;
    } | undefined;
    linkAliases?: Record<string, string> | undefined;
    features?: {
        pages?: {
            calendar?: boolean | undefined;
            bibliography?: boolean | undefined;
            snippets?: boolean | undefined;
            taskManager?: boolean | undefined;
            equations?: boolean | undefined;
        } | undefined;
        enabled?: {
            commandPalette: boolean;
            tikz: boolean;
        } | undefined;
    } | undefined;
    plotting?: {
        plotColorList: string[] | {
            dark: string[];
            light: string[];
        };
        plotColorCycleMethod: "inOrder" | "random";
    } | undefined;
    credentials?: {
        googleServiceAccountJsonPath?: string | undefined;
    } | undefined;
    performance?: {
        latexParsingDebounceTimeout: number;
        mdxParsingDebounceTimeout: number;
    } | undefined;
    meta?: {
        title: string;
        desc?: string | undefined;
    } | undefined;
    plugins?: ({
        name: string;
        version: string;
        parserIndex: number;
    } | {
        name: string;
        version: string;
    })[] | undefined;
}, {
    fsRoot: string;
    code?: {
        editor?: {
            defaultLangauge?: string | undefined;
            useVimMode?: boolean | undefined;
        } | undefined;
        theme?: {
            dark?: "andromeeda" | "aurora-x" | "ayu-dark" | "catppuccin-frappe" | "catppuccin-latte" | "catppuccin-macchiato" | "catppuccin-mocha" | "dark-plus" | "dracula" | "dracula-soft" | "github-dark" | "github-dark-dimmed" | "github-light" | "light-plus" | "material-theme" | "material-theme-darker" | "material-theme-lighter" | "material-theme-ocean" | "material-theme-palenight" | "min-dark" | "min-light" | "monokai" | "night-owl" | "nord" | "one-dark-pro" | "poimandres" | "red" | "rose-pine" | "rose-pine-dawn" | "rose-pine-moon" | "slack-dark" | "slack-ochin" | "solarized-dark" | "solarized-light" | "synthwave-84" | "tokyo-night" | "vesper" | "vitesse-black" | "vitesse-dark" | "vitesse-light" | undefined;
            light?: "andromeeda" | "aurora-x" | "ayu-dark" | "catppuccin-frappe" | "catppuccin-latte" | "catppuccin-macchiato" | "catppuccin-mocha" | "dark-plus" | "dracula" | "dracula-soft" | "github-dark" | "github-dark-dimmed" | "github-light" | "light-plus" | "material-theme" | "material-theme-darker" | "material-theme-lighter" | "material-theme-ocean" | "material-theme-palenight" | "min-dark" | "min-light" | "monokai" | "night-owl" | "nord" | "one-dark-pro" | "poimandres" | "red" | "rose-pine" | "rose-pine-dawn" | "rose-pine-moon" | "slack-dark" | "slack-ochin" | "solarized-dark" | "solarized-light" | "synthwave-84" | "tokyo-night" | "vesper" | "vitesse-black" | "vitesse-dark" | "vitesse-light" | undefined;
        } | undefined;
        syntaxHighlighting?: {
            transformers?: {
                regexHighlight?: boolean | undefined;
                lineHighlight?: boolean | undefined;
                lineFocus?: boolean | undefined;
                lineErrorLevel?: boolean | undefined;
                lineDiff?: boolean | undefined;
            } | undefined;
            defaultLanguage?: "coffee" | "diff" | "fish" | "move" | "shell" | "turtle" | "swift" | "python" | "markdown" | "kotlin" | "css" | "latex" | "fs" | "json" | "rel" | "mdx" | "md" | "csv" | "html" | "abap" | "actionscript-3" | "ada" | "angular-html" | "angular-ts" | "apache" | "apex" | "apl" | "applescript" | "ara" | "asm" | "astro" | "awk" | "ballerina" | "bat" | "beancount" | "berry" | "bibtex" | "bicep" | "blade" | "c" | "cadence" | "clarity" | "clojure" | "cmake" | "cobol" | "codeql" | "cpp" | "crystal" | "csharp" | "cue" | "cypher" | "d" | "dart" | "dax" | "docker" | "dream-maker" | "elixir" | "elm" | "erb" | "erlang" | "fortran-fixed-form" | "fortran-free-form" | "fsharp" | "gdresource" | "gdscript" | "gdshader" | "gherkin" | "git-commit" | "git-rebase" | "glimmer-js" | "glimmer-ts" | "glsl" | "gnuplot" | "go" | "graphql" | "groovy" | "hack" | "haml" | "handlebars" | "haskell" | "hcl" | "hjson" | "hlsl" | "html-derivative" | "http" | "imba" | "ini" | "java" | "javascript" | "jinja" | "jison" | "json5" | "jsonc" | "jsonl" | "jsonnet" | "jssm" | "jsx" | "julia" | "kusto" | "less" | "liquid" | "lisp" | "logo" | "lua" | "make" | "marko" | "matlab" | "mdc" | "mermaid" | "mojo" | "narrat" | "nextflow" | "nginx" | "nim" | "nix" | "nushell" | "objective-c" | "objective-cpp" | "ocaml" | "pascal" | "perl" | "php" | "plsql" | "postcss" | "powerquery" | "powershell" | "prisma" | "prolog" | "proto" | "pug" | "puppet" | "purescript" | "r" | "raku" | "razor" | "reg" | "riscv" | "rst" | "ruby" | "rust" | "sas" | "sass" | "scala" | "scheme" | "scss" | "shaderlab" | "shellscript" | "shellsession" | "smalltalk" | "solidity" | "sparql" | "splunk" | "sql" | "ssh-config" | "stata" | "stylus" | "svelte" | "system-verilog" | "tasl" | "tcl" | "terraform" | "tex" | "toml" | "tsx" | "twig" | "typescript" | "typst" | "v" | "vb" | "verilog" | "vhdl" | "viml" | "vue" | "vue-html" | "vyper" | "wasm" | "wenyan" | "wgsl" | "wolfram" | "xml" | "xsl" | "yaml" | "zenscript" | "zig" | "batch" | "be" | "cdc" | "clj" | "ql" | "coffeescript" | "c++" | "c#" | "cs" | "cql" | "dockerfile" | "erl" | "f" | "for" | "f77" | "f90" | "f95" | "f03" | "f08" | "f18" | "f#" | "gjs" | "gts" | "gql" | "hbs" | "hs" | "properties" | "js" | "fsl" | "kt" | "kts" | "kql" | "makefile" | "nar" | "nf" | "nu" | "objc" | "ps" | "ps1" | "jade" | "py" | "perl6" | "rb" | "rs" | "shader" | "bash" | "sh" | "zsh" | "console" | "spl" | "styl" | "tf" | "tfvars" | "ts" | "typ" | "cmd" | "vim" | "vimscript" | "vy" | "文言" | "wl" | "yml" | {
                inline: "coffee" | "diff" | "fish" | "move" | "shell" | "turtle" | "swift" | "python" | "markdown" | "kotlin" | "css" | "latex" | "fs" | "json" | "rel" | "mdx" | "md" | "csv" | "html" | "abap" | "actionscript-3" | "ada" | "angular-html" | "angular-ts" | "apache" | "apex" | "apl" | "applescript" | "ara" | "asm" | "astro" | "awk" | "ballerina" | "bat" | "beancount" | "berry" | "bibtex" | "bicep" | "blade" | "c" | "cadence" | "clarity" | "clojure" | "cmake" | "cobol" | "codeql" | "cpp" | "crystal" | "csharp" | "cue" | "cypher" | "d" | "dart" | "dax" | "docker" | "dream-maker" | "elixir" | "elm" | "erb" | "erlang" | "fortran-fixed-form" | "fortran-free-form" | "fsharp" | "gdresource" | "gdscript" | "gdshader" | "gherkin" | "git-commit" | "git-rebase" | "glimmer-js" | "glimmer-ts" | "glsl" | "gnuplot" | "go" | "graphql" | "groovy" | "hack" | "haml" | "handlebars" | "haskell" | "hcl" | "hjson" | "hlsl" | "html-derivative" | "http" | "imba" | "ini" | "java" | "javascript" | "jinja" | "jison" | "json5" | "jsonc" | "jsonl" | "jsonnet" | "jssm" | "jsx" | "julia" | "kusto" | "less" | "liquid" | "lisp" | "logo" | "lua" | "make" | "marko" | "matlab" | "mdc" | "mermaid" | "mojo" | "narrat" | "nextflow" | "nginx" | "nim" | "nix" | "nushell" | "objective-c" | "objective-cpp" | "ocaml" | "pascal" | "perl" | "php" | "plsql" | "postcss" | "powerquery" | "powershell" | "prisma" | "prolog" | "proto" | "pug" | "puppet" | "purescript" | "r" | "raku" | "razor" | "reg" | "riscv" | "rst" | "ruby" | "rust" | "sas" | "sass" | "scala" | "scheme" | "scss" | "shaderlab" | "shellscript" | "shellsession" | "smalltalk" | "solidity" | "sparql" | "splunk" | "sql" | "ssh-config" | "stata" | "stylus" | "svelte" | "system-verilog" | "tasl" | "tcl" | "terraform" | "tex" | "toml" | "tsx" | "twig" | "typescript" | "typst" | "v" | "vb" | "verilog" | "vhdl" | "viml" | "vue" | "vue-html" | "vyper" | "wasm" | "wenyan" | "wgsl" | "wolfram" | "xml" | "xsl" | "yaml" | "zenscript" | "zig" | "batch" | "be" | "cdc" | "clj" | "ql" | "coffeescript" | "c++" | "c#" | "cs" | "cql" | "dockerfile" | "erl" | "f" | "for" | "f77" | "f90" | "f95" | "f03" | "f08" | "f18" | "f#" | "gjs" | "gts" | "gql" | "hbs" | "hs" | "properties" | "js" | "fsl" | "kt" | "kts" | "kql" | "makefile" | "nar" | "nf" | "nu" | "objc" | "ps" | "ps1" | "jade" | "py" | "perl6" | "rb" | "rs" | "shader" | "bash" | "sh" | "zsh" | "console" | "spl" | "styl" | "tf" | "tfvars" | "ts" | "typ" | "cmd" | "vim" | "vimscript" | "vy" | "文言" | "wl" | "yml";
                block: "coffee" | "diff" | "fish" | "move" | "shell" | "turtle" | "swift" | "python" | "markdown" | "kotlin" | "css" | "latex" | "fs" | "json" | "rel" | "mdx" | "md" | "csv" | "html" | "abap" | "actionscript-3" | "ada" | "angular-html" | "angular-ts" | "apache" | "apex" | "apl" | "applescript" | "ara" | "asm" | "astro" | "awk" | "ballerina" | "bat" | "beancount" | "berry" | "bibtex" | "bicep" | "blade" | "c" | "cadence" | "clarity" | "clojure" | "cmake" | "cobol" | "codeql" | "cpp" | "crystal" | "csharp" | "cue" | "cypher" | "d" | "dart" | "dax" | "docker" | "dream-maker" | "elixir" | "elm" | "erb" | "erlang" | "fortran-fixed-form" | "fortran-free-form" | "fsharp" | "gdresource" | "gdscript" | "gdshader" | "gherkin" | "git-commit" | "git-rebase" | "glimmer-js" | "glimmer-ts" | "glsl" | "gnuplot" | "go" | "graphql" | "groovy" | "hack" | "haml" | "handlebars" | "haskell" | "hcl" | "hjson" | "hlsl" | "html-derivative" | "http" | "imba" | "ini" | "java" | "javascript" | "jinja" | "jison" | "json5" | "jsonc" | "jsonl" | "jsonnet" | "jssm" | "jsx" | "julia" | "kusto" | "less" | "liquid" | "lisp" | "logo" | "lua" | "make" | "marko" | "matlab" | "mdc" | "mermaid" | "mojo" | "narrat" | "nextflow" | "nginx" | "nim" | "nix" | "nushell" | "objective-c" | "objective-cpp" | "ocaml" | "pascal" | "perl" | "php" | "plsql" | "postcss" | "powerquery" | "powershell" | "prisma" | "prolog" | "proto" | "pug" | "puppet" | "purescript" | "r" | "raku" | "razor" | "reg" | "riscv" | "rst" | "ruby" | "rust" | "sas" | "sass" | "scala" | "scheme" | "scss" | "shaderlab" | "shellscript" | "shellsession" | "smalltalk" | "solidity" | "sparql" | "splunk" | "sql" | "ssh-config" | "stata" | "stylus" | "svelte" | "system-verilog" | "tasl" | "tcl" | "terraform" | "tex" | "toml" | "tsx" | "twig" | "typescript" | "typst" | "v" | "vb" | "verilog" | "vhdl" | "viml" | "vue" | "vue-html" | "vyper" | "wasm" | "wenyan" | "wgsl" | "wolfram" | "xml" | "xsl" | "yaml" | "zenscript" | "zig" | "batch" | "be" | "cdc" | "clj" | "ql" | "coffeescript" | "c++" | "c#" | "cs" | "cql" | "dockerfile" | "erl" | "f" | "for" | "f77" | "f90" | "f95" | "f03" | "f08" | "f18" | "f#" | "gjs" | "gts" | "gql" | "hbs" | "hs" | "properties" | "js" | "fsl" | "kt" | "kts" | "kql" | "makefile" | "nar" | "nf" | "nu" | "objc" | "ps" | "ps1" | "jade" | "py" | "perl6" | "rb" | "rs" | "shader" | "bash" | "sh" | "zsh" | "console" | "spl" | "styl" | "tf" | "tfvars" | "ts" | "typ" | "cmd" | "vim" | "vimscript" | "vy" | "文言" | "wl" | "yml";
            } | undefined;
        } | undefined;
    } | undefined;
    database?: {
        storeFormatted?: boolean | undefined;
        removeIfNotPresentInFs?: boolean | undefined;
    } | undefined;
    navigation?: {
        settings?: "none" | "sidebar" | "navbar" | "both" | undefined;
        navbarBreakpoint?: {
            full?: number | undefined;
            minimal?: number | undefined;
        } | undefined;
        maxResultLength?: {
            snippets?: number | undefined;
            searchAll?: number | undefined;
            equations?: number | undefined;
            categories?: number | undefined;
        } | undefined;
        bookmarkLink?: "none" | "sidebar" | "navbar" | "both" | undefined;
        syncLink?: "none" | "sidebar" | "navbar" | "both" | undefined;
        fileSystemToggle?: "none" | "sidebar" | "navbar" | "both" | undefined;
        darkmodeToggle?: "none" | "sidebar" | "navbar" | "both" | undefined;
        equationsLink?: "none" | "sidebar" | "navbar" | "both" | undefined;
        snippetsLink?: "none" | "sidebar" | "navbar" | "both" | undefined;
        backupData?: "none" | "sidebar" | "navbar" | "both" | undefined;
        navbarLinks?: (string | {
            label: string;
            href?: string | undefined;
            icon?: string | undefined;
            onClick?: ((...args: unknown[]) => unknown) | undefined;
        })[] | undefined;
        sidebarLinks?: (string | {
            icon: string;
            label?: string | undefined;
            href?: string | undefined;
            onClick?: ((...args: unknown[]) => unknown) | undefined;
            Icon?: ((...args: unknown[]) => unknown) | undefined;
        })[] | undefined;
    } | undefined;
    terminal?: {
        logLevel?: "info" | "none" | "debug" | "verbose" | undefined;
    } | undefined;
    jupyter?: {
        execute?: boolean | undefined;
        environment?: string | undefined;
        syntaxHighlightTheme?: string | undefined;
        jupyterToken?: string | undefined;
        jupyterPort?: number | undefined;
        initiallyFoldCells?: boolean | undefined;
        kernel?: string | undefined;
        jupyterReactProps?: {
            collaborative?: boolean | undefined;
            lite?: boolean | undefined;
            serverUrls?: {
                baseUrl?: string | undefined;
                wsUrl?: string | undefined;
            } | undefined;
        } | undefined;
        nbConvert?: {
            nbconvertPath?: string | undefined;
            conversionTimeout?: number | undefined;
            customConversionFunction?: {
                pdf?: ((args_0: string, args_1: string, ...args: unknown[]) => string) | undefined;
            } | undefined;
            execute?: boolean | undefined;
            nbConvertTemplate?: string | undefined;
            notebookOutputDir?: string | undefined;
        } | undefined;
        jupyterNotebookProps?: {
            height?: string | undefined;
            readOnly?: boolean | undefined;
            maxHeight?: string | undefined;
            cellMetadataPanel?: boolean | undefined;
            cellSidebarMargin?: number | undefined;
            bundledIPyWidgets?: {
                name: string;
                module: string | Record<string, string>;
                version: string;
            }[] | undefined;
            externalIPyWidgets?: {
                name: string;
                version: string;
            }[] | undefined;
            nbgrader?: boolean | undefined;
        } | undefined;
        cellInputWrappers?: Record<string, string | {
            prefix: string;
            suffix: string;
        }> | undefined;
    } | undefined;
    math?: {
        latexPackages?: string[] | "all" | undefined;
        latexFontUrl?: string | undefined;
        constants?: Record<string, number> | undefined;
    } | undefined;
    UI?: {
        table?: {
            maxHeight?: string | number | undefined;
        } | undefined;
        text?: {
            blockQuoteItalic?: boolean | undefined;
            fontPaths?: "default" | {
                weight: "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900";
                path: string;
                style: "bold" | "italic" | "normal";
            }[] | undefined;
        } | undefined;
        media?: {
            imageMap?: Record<string, string | undefined> | undefined;
            includeDefaultImageMap?: boolean | undefined;
            imageRemoteTest?: RegExp[] | undefined;
        } | undefined;
        theme?: "ulld" | "red" | "orange" | "yellow" | "green" | "blue" | "rose" | "slate" | "gray" | "stone" | "zinc" | "neutral" | "violet" | undefined;
        colors?: Record<string, string | {
            dark?: string | undefined;
            light?: string | undefined;
        } | null | undefined> | undefined;
        autoApplyMdxTitles?: boolean | undefined;
    } | undefined;
    slots?: {
        navigation?: any;
        bibliography?: any;
        math?: any;
        snippets?: any;
        dashboard?: any;
        taskManager?: any;
        UI?: any;
        pdf?: any;
        editor?: any;
        form?: any;
        commandPalette?: any;
    } | undefined;
    build?: {
        database?: {
            type?: "postgres" | "sqlite" | undefined;
            postgres?: {
                port?: number | undefined;
                dbName?: string | undefined;
                connectionURI?: string | undefined;
            } | undefined;
            prioritize?: "size" | "speed" | undefined;
        } | undefined;
        additionalUserContent?: {
            css?: string | undefined;
            logo?: string | undefined;
            favicon?: string | undefined;
        } | undefined;
    } | undefined;
    autoTag?: {
        tag: string;
        path: string;
    }[] | undefined;
    autoTopic?: {
        path: string;
        topic: string;
    }[] | undefined;
    autoSubject?: {
        path: string;
        subject: string;
    }[] | undefined;
    alwaysPreferFs?: boolean | undefined;
    ignoreFilepaths?: (string | RegExp | {
        regex: string | RegExp;
        original: string;
    })[] | undefined;
    tempDir?: string | undefined;
    generatedDir?: string | undefined;
    ignorePreferFsExtensions?: (string | RegExp | {
        regex: RegExp;
        original: string;
    })[] | undefined;
    fileTypePriority?: (".mdx" | ".ipynb" | ".csv" | ".tsv" | ".excel" | ".numpy" | ".html" | ".pickle" | ".db" | ".sql" | ".pdf" | ".json" | ".tex" | ".hdf5" | ".md")[] | undefined;
    noteTypes?: {
        label: string;
        fs: string;
        icon?: string | undefined;
        UI?: {
            styles?: {
                dark?: {
                    bg?: string | undefined;
                    fg?: string | undefined;
                } | undefined;
                light?: {
                    bg?: string | undefined;
                    fg?: string | undefined;
                } | undefined;
            } | undefined;
        } | undefined;
        id?: string | undefined;
        docType?: string | undefined;
        filePathPattern?: string | undefined;
        matchWeight?: number | undefined;
        url?: string | undefined;
        urlQuery?: Record<string, string | number | string[] | number[]> | undefined;
        keywords?: string[] | undefined;
        topicLabel?: string | undefined;
        subjectLabel?: string | undefined;
        autoTag?: string[] | undefined;
        autoTopic?: string[] | undefined;
        autoSubject?: string[] | undefined;
        inSidebar?: boolean | undefined;
        inNavbar?: boolean | undefined;
    }[] | undefined;
    bibPath?: string | undefined;
    cslPath?: string | undefined;
    dateHandling?: {
        enableAdvancedFormat?: boolean | undefined;
        format?: string | {
            short?: string | undefined;
            long?: string | undefined;
            withTime?: string | undefined;
            timeOnly?: string | undefined;
        } | undefined;
        defaultTimeDisplayType?: "summarized" | "analog" | "descriptive" | undefined;
        defaultTimeZone?: string | undefined;
    } | undefined;
    linkAliases?: Record<string, string> | undefined;
    features?: {
        pages?: {
            calendar?: boolean | undefined;
            bibliography?: boolean | undefined;
            snippets?: boolean | undefined;
            taskManager?: boolean | undefined;
            equations?: boolean | undefined;
        } | undefined;
        enabled?: {
            commandPalette?: boolean | undefined;
            tikz?: boolean | undefined;
        } | undefined;
    } | undefined;
    plotting?: {
        plotColorList?: string[] | {
            dark: string[];
            light: string[];
        } | undefined;
        plotColorCycleMethod?: "inOrder" | "random" | undefined;
    } | undefined;
    credentials?: {
        googleServiceAccountJsonPath?: string | undefined;
    } | undefined;
    performance?: {
        latexParsingDebounceTimeout?: number | undefined;
        mdxParsingDebounceTimeout?: number | undefined;
    } | undefined;
    meta?: {
        title?: string | undefined;
        desc?: string | undefined;
    } | undefined;
    plugins?: string | string[] | {
        name: string;
        version?: string | undefined;
        parserIndex?: number | undefined;
    } | {
        name: string;
        version?: string | undefined;
        parserIndex?: number | undefined;
    }[] | undefined;
}>;
export type MinimalParsableAppConfig = z.input<typeof minimalParsableAppConfig>;
export type MinimalParsableAppConfigOutput = z.output<typeof minimalParsableAppConfig>;
export declare const appConfigDeepPartialWithNotetypes: z.ZodObject<{
    code: z.ZodOptional<z.ZodDefault<z.ZodObject<{
        theme: z.ZodDefault<z.ZodObject<{
            dark: z.ZodDefault<z.ZodUnion<[z.ZodLiteral<"andromeeda">, z.ZodLiteral<"aurora-x">, z.ZodLiteral<"ayu-dark">, z.ZodLiteral<"catppuccin-frappe">, z.ZodLiteral<"catppuccin-latte">, z.ZodLiteral<"catppuccin-macchiato">, z.ZodLiteral<"catppuccin-mocha">, z.ZodLiteral<"dark-plus">, z.ZodLiteral<"dracula">, z.ZodLiteral<"dracula-soft">, z.ZodLiteral<"github-dark">, z.ZodLiteral<"github-dark-dimmed">, z.ZodLiteral<"github-light">, z.ZodLiteral<"light-plus">, z.ZodLiteral<"material-theme">, z.ZodLiteral<"material-theme-darker">, z.ZodLiteral<"material-theme-lighter">, z.ZodLiteral<"material-theme-ocean">, z.ZodLiteral<"material-theme-palenight">, z.ZodLiteral<"min-dark">, z.ZodLiteral<"min-light">, z.ZodLiteral<"monokai">, z.ZodLiteral<"night-owl">, z.ZodLiteral<"nord">, z.ZodLiteral<"one-dark-pro">, z.ZodLiteral<"poimandres">, z.ZodLiteral<"red">, z.ZodLiteral<"rose-pine">, z.ZodLiteral<"rose-pine-dawn">, z.ZodLiteral<"rose-pine-moon">, z.ZodLiteral<"slack-dark">, z.ZodLiteral<"slack-ochin">, z.ZodLiteral<"solarized-dark">, z.ZodLiteral<"solarized-light">, z.ZodLiteral<"synthwave-84">, z.ZodLiteral<"tokyo-night">, z.ZodLiteral<"vesper">, z.ZodLiteral<"vitesse-black">, z.ZodLiteral<"vitesse-dark">, z.ZodLiteral<"vitesse-light">]>>;
            light: z.ZodDefault<z.ZodUnion<[z.ZodLiteral<"andromeeda">, z.ZodLiteral<"aurora-x">, z.ZodLiteral<"ayu-dark">, z.ZodLiteral<"catppuccin-frappe">, z.ZodLiteral<"catppuccin-latte">, z.ZodLiteral<"catppuccin-macchiato">, z.ZodLiteral<"catppuccin-mocha">, z.ZodLiteral<"dark-plus">, z.ZodLiteral<"dracula">, z.ZodLiteral<"dracula-soft">, z.ZodLiteral<"github-dark">, z.ZodLiteral<"github-dark-dimmed">, z.ZodLiteral<"github-light">, z.ZodLiteral<"light-plus">, z.ZodLiteral<"material-theme">, z.ZodLiteral<"material-theme-darker">, z.ZodLiteral<"material-theme-lighter">, z.ZodLiteral<"material-theme-ocean">, z.ZodLiteral<"material-theme-palenight">, z.ZodLiteral<"min-dark">, z.ZodLiteral<"min-light">, z.ZodLiteral<"monokai">, z.ZodLiteral<"night-owl">, z.ZodLiteral<"nord">, z.ZodLiteral<"one-dark-pro">, z.ZodLiteral<"poimandres">, z.ZodLiteral<"red">, z.ZodLiteral<"rose-pine">, z.ZodLiteral<"rose-pine-dawn">, z.ZodLiteral<"rose-pine-moon">, z.ZodLiteral<"slack-dark">, z.ZodLiteral<"slack-ochin">, z.ZodLiteral<"solarized-dark">, z.ZodLiteral<"solarized-light">, z.ZodLiteral<"synthwave-84">, z.ZodLiteral<"tokyo-night">, z.ZodLiteral<"vesper">, z.ZodLiteral<"vitesse-black">, z.ZodLiteral<"vitesse-dark">, z.ZodLiteral<"vitesse-light">]>>;
        }, "strip", z.ZodTypeAny, {
            dark: "andromeeda" | "aurora-x" | "ayu-dark" | "catppuccin-frappe" | "catppuccin-latte" | "catppuccin-macchiato" | "catppuccin-mocha" | "dark-plus" | "dracula" | "dracula-soft" | "github-dark" | "github-dark-dimmed" | "github-light" | "light-plus" | "material-theme" | "material-theme-darker" | "material-theme-lighter" | "material-theme-ocean" | "material-theme-palenight" | "min-dark" | "min-light" | "monokai" | "night-owl" | "nord" | "one-dark-pro" | "poimandres" | "red" | "rose-pine" | "rose-pine-dawn" | "rose-pine-moon" | "slack-dark" | "slack-ochin" | "solarized-dark" | "solarized-light" | "synthwave-84" | "tokyo-night" | "vesper" | "vitesse-black" | "vitesse-dark" | "vitesse-light";
            light: "andromeeda" | "aurora-x" | "ayu-dark" | "catppuccin-frappe" | "catppuccin-latte" | "catppuccin-macchiato" | "catppuccin-mocha" | "dark-plus" | "dracula" | "dracula-soft" | "github-dark" | "github-dark-dimmed" | "github-light" | "light-plus" | "material-theme" | "material-theme-darker" | "material-theme-lighter" | "material-theme-ocean" | "material-theme-palenight" | "min-dark" | "min-light" | "monokai" | "night-owl" | "nord" | "one-dark-pro" | "poimandres" | "red" | "rose-pine" | "rose-pine-dawn" | "rose-pine-moon" | "slack-dark" | "slack-ochin" | "solarized-dark" | "solarized-light" | "synthwave-84" | "tokyo-night" | "vesper" | "vitesse-black" | "vitesse-dark" | "vitesse-light";
        }, {
            dark?: "andromeeda" | "aurora-x" | "ayu-dark" | "catppuccin-frappe" | "catppuccin-latte" | "catppuccin-macchiato" | "catppuccin-mocha" | "dark-plus" | "dracula" | "dracula-soft" | "github-dark" | "github-dark-dimmed" | "github-light" | "light-plus" | "material-theme" | "material-theme-darker" | "material-theme-lighter" | "material-theme-ocean" | "material-theme-palenight" | "min-dark" | "min-light" | "monokai" | "night-owl" | "nord" | "one-dark-pro" | "poimandres" | "red" | "rose-pine" | "rose-pine-dawn" | "rose-pine-moon" | "slack-dark" | "slack-ochin" | "solarized-dark" | "solarized-light" | "synthwave-84" | "tokyo-night" | "vesper" | "vitesse-black" | "vitesse-dark" | "vitesse-light" | undefined;
            light?: "andromeeda" | "aurora-x" | "ayu-dark" | "catppuccin-frappe" | "catppuccin-latte" | "catppuccin-macchiato" | "catppuccin-mocha" | "dark-plus" | "dracula" | "dracula-soft" | "github-dark" | "github-dark-dimmed" | "github-light" | "light-plus" | "material-theme" | "material-theme-darker" | "material-theme-lighter" | "material-theme-ocean" | "material-theme-palenight" | "min-dark" | "min-light" | "monokai" | "night-owl" | "nord" | "one-dark-pro" | "poimandres" | "red" | "rose-pine" | "rose-pine-dawn" | "rose-pine-moon" | "slack-dark" | "slack-ochin" | "solarized-dark" | "solarized-light" | "synthwave-84" | "tokyo-night" | "vesper" | "vitesse-black" | "vitesse-dark" | "vitesse-light" | undefined;
        }>>;
        editor: z.ZodDefault<z.ZodObject<{
            defaultLangauge: z.ZodDefault<z.ZodString>;
            useVimMode: z.ZodDefault<z.ZodBoolean>;
        }, "strip", z.ZodTypeAny, {
            defaultLangauge: string;
            useVimMode: boolean;
        }, {
            defaultLangauge?: string | undefined;
            useVimMode?: boolean | undefined;
        }>>;
        syntaxHighlighting: z.ZodDefault<z.ZodObject<{
            transformers: z.ZodDefault<z.ZodObject<{
                regexHighlight: z.ZodDefault<z.ZodBoolean>;
                lineHighlight: z.ZodDefault<z.ZodBoolean>;
                lineFocus: z.ZodDefault<z.ZodBoolean>;
                lineErrorLevel: z.ZodDefault<z.ZodBoolean>;
                lineDiff: z.ZodDefault<z.ZodBoolean>;
            }, "strip", z.ZodTypeAny, {
                regexHighlight: boolean;
                lineHighlight: boolean;
                lineFocus: boolean;
                lineErrorLevel: boolean;
                lineDiff: boolean;
            }, {
                regexHighlight?: boolean | undefined;
                lineHighlight?: boolean | undefined;
                lineFocus?: boolean | undefined;
                lineErrorLevel?: boolean | undefined;
                lineDiff?: boolean | undefined;
            }>>;
            defaultLanguage: z.ZodEffects<z.ZodDefault<z.ZodUnion<[z.ZodEnum<["abap", "actionscript-3", "ada", "angular-html", "angular-ts", "apache", "apex", "apl", "applescript", "ara", "asm", "astro", "awk", "ballerina", "bat", "beancount", "berry", "bibtex", "bicep", "blade", "c", "cadence", "clarity", "clojure", "cmake", "cobol", "codeql", "coffee", "cpp", "crystal", "csharp", "css", "csv", "cue", "cypher", "d", "dart", "dax", "diff", "docker", "dream-maker", "elixir", "elm", "erb", "erlang", "fish", "fortran-fixed-form", "fortran-free-form", "fsharp", "gdresource", "gdscript", "gdshader", "gherkin", "git-commit", "git-rebase", "glimmer-js", "glimmer-ts", "glsl", "gnuplot", "go", "graphql", "groovy", "hack", "haml", "handlebars", "haskell", "hcl", "hjson", "hlsl", "html", "html-derivative", "http", "imba", "ini", "java", "javascript", "jinja", "jison", "json", "json5", "jsonc", "jsonl", "jsonnet", "jssm", "jsx", "julia", "kotlin", "kusto", "latex", "less", "liquid", "lisp", "logo", "lua", "make", "markdown", "marko", "matlab", "mdc", "mdx", "mermaid", "mojo", "move", "narrat", "nextflow", "nginx", "nim", "nix", "nushell", "objective-c", "objective-cpp", "ocaml", "pascal", "perl", "php", "plsql", "postcss", "powerquery", "powershell", "prisma", "prolog", "proto", "pug", "puppet", "purescript", "python", "r", "raku", "razor", "reg", "rel", "riscv", "rst", "ruby", "rust", "sas", "sass", "scala", "scheme", "scss", "shaderlab", "shellscript", "shellsession", "smalltalk", "solidity", "sparql", "splunk", "sql", "ssh-config", "stata", "stylus", "svelte", "swift", "system-verilog", "tasl", "tcl", "terraform", "tex", "toml", "tsx", "turtle", "twig", "typescript", "typst", "v", "vb", "verilog", "vhdl", "viml", "vue", "vue-html", "vyper", "wasm", "wenyan", "wgsl", "wolfram", "xml", "xsl", "yaml", "zenscript", "zig", "batch", "be", "cdc", "clj", "ql", "coffeescript", "c++", "c#", "cs", "cql", "dockerfile", "erl", "f", "for", "f77", "f90", "f95", "f03", "f08", "f18", "f#", "fs", "gjs", "gts", "gql", "hbs", "hs", "properties", "js", "fsl", "kt", "kts", "kql", "makefile", "md", "nar", "nf", "nu", "objc", "ps", "ps1", "jade", "py", "perl6", "rb", "rs", "shader", "bash", "sh", "shell", "zsh", "console", "spl", "styl", "tf", "tfvars", "ts", "typ", "cmd", "vim", "vimscript", "vy", "文言", "wl", "yml"]>, z.ZodObject<{
                inline: z.ZodEnum<["abap", "actionscript-3", "ada", "angular-html", "angular-ts", "apache", "apex", "apl", "applescript", "ara", "asm", "astro", "awk", "ballerina", "bat", "beancount", "berry", "bibtex", "bicep", "blade", "c", "cadence", "clarity", "clojure", "cmake", "cobol", "codeql", "coffee", "cpp", "crystal", "csharp", "css", "csv", "cue", "cypher", "d", "dart", "dax", "diff", "docker", "dream-maker", "elixir", "elm", "erb", "erlang", "fish", "fortran-fixed-form", "fortran-free-form", "fsharp", "gdresource", "gdscript", "gdshader", "gherkin", "git-commit", "git-rebase", "glimmer-js", "glimmer-ts", "glsl", "gnuplot", "go", "graphql", "groovy", "hack", "haml", "handlebars", "haskell", "hcl", "hjson", "hlsl", "html", "html-derivative", "http", "imba", "ini", "java", "javascript", "jinja", "jison", "json", "json5", "jsonc", "jsonl", "jsonnet", "jssm", "jsx", "julia", "kotlin", "kusto", "latex", "less", "liquid", "lisp", "logo", "lua", "make", "markdown", "marko", "matlab", "mdc", "mdx", "mermaid", "mojo", "move", "narrat", "nextflow", "nginx", "nim", "nix", "nushell", "objective-c", "objective-cpp", "ocaml", "pascal", "perl", "php", "plsql", "postcss", "powerquery", "powershell", "prisma", "prolog", "proto", "pug", "puppet", "purescript", "python", "r", "raku", "razor", "reg", "rel", "riscv", "rst", "ruby", "rust", "sas", "sass", "scala", "scheme", "scss", "shaderlab", "shellscript", "shellsession", "smalltalk", "solidity", "sparql", "splunk", "sql", "ssh-config", "stata", "stylus", "svelte", "swift", "system-verilog", "tasl", "tcl", "terraform", "tex", "toml", "tsx", "turtle", "twig", "typescript", "typst", "v", "vb", "verilog", "vhdl", "viml", "vue", "vue-html", "vyper", "wasm", "wenyan", "wgsl", "wolfram", "xml", "xsl", "yaml", "zenscript", "zig", "batch", "be", "cdc", "clj", "ql", "coffeescript", "c++", "c#", "cs", "cql", "dockerfile", "erl", "f", "for", "f77", "f90", "f95", "f03", "f08", "f18", "f#", "fs", "gjs", "gts", "gql", "hbs", "hs", "properties", "js", "fsl", "kt", "kts", "kql", "makefile", "md", "nar", "nf", "nu", "objc", "ps", "ps1", "jade", "py", "perl6", "rb", "rs", "shader", "bash", "sh", "shell", "zsh", "console", "spl", "styl", "tf", "tfvars", "ts", "typ", "cmd", "vim", "vimscript", "vy", "文言", "wl", "yml"]>;
                block: z.ZodEnum<["abap", "actionscript-3", "ada", "angular-html", "angular-ts", "apache", "apex", "apl", "applescript", "ara", "asm", "astro", "awk", "ballerina", "bat", "beancount", "berry", "bibtex", "bicep", "blade", "c", "cadence", "clarity", "clojure", "cmake", "cobol", "codeql", "coffee", "cpp", "crystal", "csharp", "css", "csv", "cue", "cypher", "d", "dart", "dax", "diff", "docker", "dream-maker", "elixir", "elm", "erb", "erlang", "fish", "fortran-fixed-form", "fortran-free-form", "fsharp", "gdresource", "gdscript", "gdshader", "gherkin", "git-commit", "git-rebase", "glimmer-js", "glimmer-ts", "glsl", "gnuplot", "go", "graphql", "groovy", "hack", "haml", "handlebars", "haskell", "hcl", "hjson", "hlsl", "html", "html-derivative", "http", "imba", "ini", "java", "javascript", "jinja", "jison", "json", "json5", "jsonc", "jsonl", "jsonnet", "jssm", "jsx", "julia", "kotlin", "kusto", "latex", "less", "liquid", "lisp", "logo", "lua", "make", "markdown", "marko", "matlab", "mdc", "mdx", "mermaid", "mojo", "move", "narrat", "nextflow", "nginx", "nim", "nix", "nushell", "objective-c", "objective-cpp", "ocaml", "pascal", "perl", "php", "plsql", "postcss", "powerquery", "powershell", "prisma", "prolog", "proto", "pug", "puppet", "purescript", "python", "r", "raku", "razor", "reg", "rel", "riscv", "rst", "ruby", "rust", "sas", "sass", "scala", "scheme", "scss", "shaderlab", "shellscript", "shellsession", "smalltalk", "solidity", "sparql", "splunk", "sql", "ssh-config", "stata", "stylus", "svelte", "swift", "system-verilog", "tasl", "tcl", "terraform", "tex", "toml", "tsx", "turtle", "twig", "typescript", "typst", "v", "vb", "verilog", "vhdl", "viml", "vue", "vue-html", "vyper", "wasm", "wenyan", "wgsl", "wolfram", "xml", "xsl", "yaml", "zenscript", "zig", "batch", "be", "cdc", "clj", "ql", "coffeescript", "c++", "c#", "cs", "cql", "dockerfile", "erl", "f", "for", "f77", "f90", "f95", "f03", "f08", "f18", "f#", "fs", "gjs", "gts", "gql", "hbs", "hs", "properties", "js", "fsl", "kt", "kts", "kql", "makefile", "md", "nar", "nf", "nu", "objc", "ps", "ps1", "jade", "py", "perl6", "rb", "rs", "shader", "bash", "sh", "shell", "zsh", "console", "spl", "styl", "tf", "tfvars", "ts", "typ", "cmd", "vim", "vimscript", "vy", "文言", "wl", "yml"]>;
            }, "strip", z.ZodTypeAny, {
                inline: "coffee" | "diff" | "fish" | "move" | "shell" | "turtle" | "swift" | "python" | "markdown" | "kotlin" | "css" | "latex" | "fs" | "json" | "rel" | "mdx" | "md" | "csv" | "html" | "abap" | "actionscript-3" | "ada" | "angular-html" | "angular-ts" | "apache" | "apex" | "apl" | "applescript" | "ara" | "asm" | "astro" | "awk" | "ballerina" | "bat" | "beancount" | "berry" | "bibtex" | "bicep" | "blade" | "c" | "cadence" | "clarity" | "clojure" | "cmake" | "cobol" | "codeql" | "cpp" | "crystal" | "csharp" | "cue" | "cypher" | "d" | "dart" | "dax" | "docker" | "dream-maker" | "elixir" | "elm" | "erb" | "erlang" | "fortran-fixed-form" | "fortran-free-form" | "fsharp" | "gdresource" | "gdscript" | "gdshader" | "gherkin" | "git-commit" | "git-rebase" | "glimmer-js" | "glimmer-ts" | "glsl" | "gnuplot" | "go" | "graphql" | "groovy" | "hack" | "haml" | "handlebars" | "haskell" | "hcl" | "hjson" | "hlsl" | "html-derivative" | "http" | "imba" | "ini" | "java" | "javascript" | "jinja" | "jison" | "json5" | "jsonc" | "jsonl" | "jsonnet" | "jssm" | "jsx" | "julia" | "kusto" | "less" | "liquid" | "lisp" | "logo" | "lua" | "make" | "marko" | "matlab" | "mdc" | "mermaid" | "mojo" | "narrat" | "nextflow" | "nginx" | "nim" | "nix" | "nushell" | "objective-c" | "objective-cpp" | "ocaml" | "pascal" | "perl" | "php" | "plsql" | "postcss" | "powerquery" | "powershell" | "prisma" | "prolog" | "proto" | "pug" | "puppet" | "purescript" | "r" | "raku" | "razor" | "reg" | "riscv" | "rst" | "ruby" | "rust" | "sas" | "sass" | "scala" | "scheme" | "scss" | "shaderlab" | "shellscript" | "shellsession" | "smalltalk" | "solidity" | "sparql" | "splunk" | "sql" | "ssh-config" | "stata" | "stylus" | "svelte" | "system-verilog" | "tasl" | "tcl" | "terraform" | "tex" | "toml" | "tsx" | "twig" | "typescript" | "typst" | "v" | "vb" | "verilog" | "vhdl" | "viml" | "vue" | "vue-html" | "vyper" | "wasm" | "wenyan" | "wgsl" | "wolfram" | "xml" | "xsl" | "yaml" | "zenscript" | "zig" | "batch" | "be" | "cdc" | "clj" | "ql" | "coffeescript" | "c++" | "c#" | "cs" | "cql" | "dockerfile" | "erl" | "f" | "for" | "f77" | "f90" | "f95" | "f03" | "f08" | "f18" | "f#" | "gjs" | "gts" | "gql" | "hbs" | "hs" | "properties" | "js" | "fsl" | "kt" | "kts" | "kql" | "makefile" | "nar" | "nf" | "nu" | "objc" | "ps" | "ps1" | "jade" | "py" | "perl6" | "rb" | "rs" | "shader" | "bash" | "sh" | "zsh" | "console" | "spl" | "styl" | "tf" | "tfvars" | "ts" | "typ" | "cmd" | "vim" | "vimscript" | "vy" | "文言" | "wl" | "yml";
                block: "coffee" | "diff" | "fish" | "move" | "shell" | "turtle" | "swift" | "python" | "markdown" | "kotlin" | "css" | "latex" | "fs" | "json" | "rel" | "mdx" | "md" | "csv" | "html" | "abap" | "actionscript-3" | "ada" | "angular-html" | "angular-ts" | "apache" | "apex" | "apl" | "applescript" | "ara" | "asm" | "astro" | "awk" | "ballerina" | "bat" | "beancount" | "berry" | "bibtex" | "bicep" | "blade" | "c" | "cadence" | "clarity" | "clojure" | "cmake" | "cobol" | "codeql" | "cpp" | "crystal" | "csharp" | "cue" | "cypher" | "d" | "dart" | "dax" | "docker" | "dream-maker" | "elixir" | "elm" | "erb" | "erlang" | "fortran-fixed-form" | "fortran-free-form" | "fsharp" | "gdresource" | "gdscript" | "gdshader" | "gherkin" | "git-commit" | "git-rebase" | "glimmer-js" | "glimmer-ts" | "glsl" | "gnuplot" | "go" | "graphql" | "groovy" | "hack" | "haml" | "handlebars" | "haskell" | "hcl" | "hjson" | "hlsl" | "html-derivative" | "http" | "imba" | "ini" | "java" | "javascript" | "jinja" | "jison" | "json5" | "jsonc" | "jsonl" | "jsonnet" | "jssm" | "jsx" | "julia" | "kusto" | "less" | "liquid" | "lisp" | "logo" | "lua" | "make" | "marko" | "matlab" | "mdc" | "mermaid" | "mojo" | "narrat" | "nextflow" | "nginx" | "nim" | "nix" | "nushell" | "objective-c" | "objective-cpp" | "ocaml" | "pascal" | "perl" | "php" | "plsql" | "postcss" | "powerquery" | "powershell" | "prisma" | "prolog" | "proto" | "pug" | "puppet" | "purescript" | "r" | "raku" | "razor" | "reg" | "riscv" | "rst" | "ruby" | "rust" | "sas" | "sass" | "scala" | "scheme" | "scss" | "shaderlab" | "shellscript" | "shellsession" | "smalltalk" | "solidity" | "sparql" | "splunk" | "sql" | "ssh-config" | "stata" | "stylus" | "svelte" | "system-verilog" | "tasl" | "tcl" | "terraform" | "tex" | "toml" | "tsx" | "twig" | "typescript" | "typst" | "v" | "vb" | "verilog" | "vhdl" | "viml" | "vue" | "vue-html" | "vyper" | "wasm" | "wenyan" | "wgsl" | "wolfram" | "xml" | "xsl" | "yaml" | "zenscript" | "zig" | "batch" | "be" | "cdc" | "clj" | "ql" | "coffeescript" | "c++" | "c#" | "cs" | "cql" | "dockerfile" | "erl" | "f" | "for" | "f77" | "f90" | "f95" | "f03" | "f08" | "f18" | "f#" | "gjs" | "gts" | "gql" | "hbs" | "hs" | "properties" | "js" | "fsl" | "kt" | "kts" | "kql" | "makefile" | "nar" | "nf" | "nu" | "objc" | "ps" | "ps1" | "jade" | "py" | "perl6" | "rb" | "rs" | "shader" | "bash" | "sh" | "zsh" | "console" | "spl" | "styl" | "tf" | "tfvars" | "ts" | "typ" | "cmd" | "vim" | "vimscript" | "vy" | "文言" | "wl" | "yml";
            }, {
                inline: "coffee" | "diff" | "fish" | "move" | "shell" | "turtle" | "swift" | "python" | "markdown" | "kotlin" | "css" | "latex" | "fs" | "json" | "rel" | "mdx" | "md" | "csv" | "html" | "abap" | "actionscript-3" | "ada" | "angular-html" | "angular-ts" | "apache" | "apex" | "apl" | "applescript" | "ara" | "asm" | "astro" | "awk" | "ballerina" | "bat" | "beancount" | "berry" | "bibtex" | "bicep" | "blade" | "c" | "cadence" | "clarity" | "clojure" | "cmake" | "cobol" | "codeql" | "cpp" | "crystal" | "csharp" | "cue" | "cypher" | "d" | "dart" | "dax" | "docker" | "dream-maker" | "elixir" | "elm" | "erb" | "erlang" | "fortran-fixed-form" | "fortran-free-form" | "fsharp" | "gdresource" | "gdscript" | "gdshader" | "gherkin" | "git-commit" | "git-rebase" | "glimmer-js" | "glimmer-ts" | "glsl" | "gnuplot" | "go" | "graphql" | "groovy" | "hack" | "haml" | "handlebars" | "haskell" | "hcl" | "hjson" | "hlsl" | "html-derivative" | "http" | "imba" | "ini" | "java" | "javascript" | "jinja" | "jison" | "json5" | "jsonc" | "jsonl" | "jsonnet" | "jssm" | "jsx" | "julia" | "kusto" | "less" | "liquid" | "lisp" | "logo" | "lua" | "make" | "marko" | "matlab" | "mdc" | "mermaid" | "mojo" | "narrat" | "nextflow" | "nginx" | "nim" | "nix" | "nushell" | "objective-c" | "objective-cpp" | "ocaml" | "pascal" | "perl" | "php" | "plsql" | "postcss" | "powerquery" | "powershell" | "prisma" | "prolog" | "proto" | "pug" | "puppet" | "purescript" | "r" | "raku" | "razor" | "reg" | "riscv" | "rst" | "ruby" | "rust" | "sas" | "sass" | "scala" | "scheme" | "scss" | "shaderlab" | "shellscript" | "shellsession" | "smalltalk" | "solidity" | "sparql" | "splunk" | "sql" | "ssh-config" | "stata" | "stylus" | "svelte" | "system-verilog" | "tasl" | "tcl" | "terraform" | "tex" | "toml" | "tsx" | "twig" | "typescript" | "typst" | "v" | "vb" | "verilog" | "vhdl" | "viml" | "vue" | "vue-html" | "vyper" | "wasm" | "wenyan" | "wgsl" | "wolfram" | "xml" | "xsl" | "yaml" | "zenscript" | "zig" | "batch" | "be" | "cdc" | "clj" | "ql" | "coffeescript" | "c++" | "c#" | "cs" | "cql" | "dockerfile" | "erl" | "f" | "for" | "f77" | "f90" | "f95" | "f03" | "f08" | "f18" | "f#" | "gjs" | "gts" | "gql" | "hbs" | "hs" | "properties" | "js" | "fsl" | "kt" | "kts" | "kql" | "makefile" | "nar" | "nf" | "nu" | "objc" | "ps" | "ps1" | "jade" | "py" | "perl6" | "rb" | "rs" | "shader" | "bash" | "sh" | "zsh" | "console" | "spl" | "styl" | "tf" | "tfvars" | "ts" | "typ" | "cmd" | "vim" | "vimscript" | "vy" | "文言" | "wl" | "yml";
                block: "coffee" | "diff" | "fish" | "move" | "shell" | "turtle" | "swift" | "python" | "markdown" | "kotlin" | "css" | "latex" | "fs" | "json" | "rel" | "mdx" | "md" | "csv" | "html" | "abap" | "actionscript-3" | "ada" | "angular-html" | "angular-ts" | "apache" | "apex" | "apl" | "applescript" | "ara" | "asm" | "astro" | "awk" | "ballerina" | "bat" | "beancount" | "berry" | "bibtex" | "bicep" | "blade" | "c" | "cadence" | "clarity" | "clojure" | "cmake" | "cobol" | "codeql" | "cpp" | "crystal" | "csharp" | "cue" | "cypher" | "d" | "dart" | "dax" | "docker" | "dream-maker" | "elixir" | "elm" | "erb" | "erlang" | "fortran-fixed-form" | "fortran-free-form" | "fsharp" | "gdresource" | "gdscript" | "gdshader" | "gherkin" | "git-commit" | "git-rebase" | "glimmer-js" | "glimmer-ts" | "glsl" | "gnuplot" | "go" | "graphql" | "groovy" | "hack" | "haml" | "handlebars" | "haskell" | "hcl" | "hjson" | "hlsl" | "html-derivative" | "http" | "imba" | "ini" | "java" | "javascript" | "jinja" | "jison" | "json5" | "jsonc" | "jsonl" | "jsonnet" | "jssm" | "jsx" | "julia" | "kusto" | "less" | "liquid" | "lisp" | "logo" | "lua" | "make" | "marko" | "matlab" | "mdc" | "mermaid" | "mojo" | "narrat" | "nextflow" | "nginx" | "nim" | "nix" | "nushell" | "objective-c" | "objective-cpp" | "ocaml" | "pascal" | "perl" | "php" | "plsql" | "postcss" | "powerquery" | "powershell" | "prisma" | "prolog" | "proto" | "pug" | "puppet" | "purescript" | "r" | "raku" | "razor" | "reg" | "riscv" | "rst" | "ruby" | "rust" | "sas" | "sass" | "scala" | "scheme" | "scss" | "shaderlab" | "shellscript" | "shellsession" | "smalltalk" | "solidity" | "sparql" | "splunk" | "sql" | "ssh-config" | "stata" | "stylus" | "svelte" | "system-verilog" | "tasl" | "tcl" | "terraform" | "tex" | "toml" | "tsx" | "twig" | "typescript" | "typst" | "v" | "vb" | "verilog" | "vhdl" | "viml" | "vue" | "vue-html" | "vyper" | "wasm" | "wenyan" | "wgsl" | "wolfram" | "xml" | "xsl" | "yaml" | "zenscript" | "zig" | "batch" | "be" | "cdc" | "clj" | "ql" | "coffeescript" | "c++" | "c#" | "cs" | "cql" | "dockerfile" | "erl" | "f" | "for" | "f77" | "f90" | "f95" | "f03" | "f08" | "f18" | "f#" | "gjs" | "gts" | "gql" | "hbs" | "hs" | "properties" | "js" | "fsl" | "kt" | "kts" | "kql" | "makefile" | "nar" | "nf" | "nu" | "objc" | "ps" | "ps1" | "jade" | "py" | "perl6" | "rb" | "rs" | "shader" | "bash" | "sh" | "zsh" | "console" | "spl" | "styl" | "tf" | "tfvars" | "ts" | "typ" | "cmd" | "vim" | "vimscript" | "vy" | "文言" | "wl" | "yml";
            }>]>>, {
                inline: "coffee" | "diff" | "fish" | "move" | "shell" | "turtle" | "swift" | "python" | "markdown" | "kotlin" | "css" | "latex" | "fs" | "json" | "rel" | "mdx" | "md" | "csv" | "html" | "abap" | "actionscript-3" | "ada" | "angular-html" | "angular-ts" | "apache" | "apex" | "apl" | "applescript" | "ara" | "asm" | "astro" | "awk" | "ballerina" | "bat" | "beancount" | "berry" | "bibtex" | "bicep" | "blade" | "c" | "cadence" | "clarity" | "clojure" | "cmake" | "cobol" | "codeql" | "cpp" | "crystal" | "csharp" | "cue" | "cypher" | "d" | "dart" | "dax" | "docker" | "dream-maker" | "elixir" | "elm" | "erb" | "erlang" | "fortran-fixed-form" | "fortran-free-form" | "fsharp" | "gdresource" | "gdscript" | "gdshader" | "gherkin" | "git-commit" | "git-rebase" | "glimmer-js" | "glimmer-ts" | "glsl" | "gnuplot" | "go" | "graphql" | "groovy" | "hack" | "haml" | "handlebars" | "haskell" | "hcl" | "hjson" | "hlsl" | "html-derivative" | "http" | "imba" | "ini" | "java" | "javascript" | "jinja" | "jison" | "json5" | "jsonc" | "jsonl" | "jsonnet" | "jssm" | "jsx" | "julia" | "kusto" | "less" | "liquid" | "lisp" | "logo" | "lua" | "make" | "marko" | "matlab" | "mdc" | "mermaid" | "mojo" | "narrat" | "nextflow" | "nginx" | "nim" | "nix" | "nushell" | "objective-c" | "objective-cpp" | "ocaml" | "pascal" | "perl" | "php" | "plsql" | "postcss" | "powerquery" | "powershell" | "prisma" | "prolog" | "proto" | "pug" | "puppet" | "purescript" | "r" | "raku" | "razor" | "reg" | "riscv" | "rst" | "ruby" | "rust" | "sas" | "sass" | "scala" | "scheme" | "scss" | "shaderlab" | "shellscript" | "shellsession" | "smalltalk" | "solidity" | "sparql" | "splunk" | "sql" | "ssh-config" | "stata" | "stylus" | "svelte" | "system-verilog" | "tasl" | "tcl" | "terraform" | "tex" | "toml" | "tsx" | "twig" | "typescript" | "typst" | "v" | "vb" | "verilog" | "vhdl" | "viml" | "vue" | "vue-html" | "vyper" | "wasm" | "wenyan" | "wgsl" | "wolfram" | "xml" | "xsl" | "yaml" | "zenscript" | "zig" | "batch" | "be" | "cdc" | "clj" | "ql" | "coffeescript" | "c++" | "c#" | "cs" | "cql" | "dockerfile" | "erl" | "f" | "for" | "f77" | "f90" | "f95" | "f03" | "f08" | "f18" | "f#" | "gjs" | "gts" | "gql" | "hbs" | "hs" | "properties" | "js" | "fsl" | "kt" | "kts" | "kql" | "makefile" | "nar" | "nf" | "nu" | "objc" | "ps" | "ps1" | "jade" | "py" | "perl6" | "rb" | "rs" | "shader" | "bash" | "sh" | "zsh" | "console" | "spl" | "styl" | "tf" | "tfvars" | "ts" | "typ" | "cmd" | "vim" | "vimscript" | "vy" | "文言" | "wl" | "yml";
                block: "coffee" | "diff" | "fish" | "move" | "shell" | "turtle" | "swift" | "python" | "markdown" | "kotlin" | "css" | "latex" | "fs" | "json" | "rel" | "mdx" | "md" | "csv" | "html" | "abap" | "actionscript-3" | "ada" | "angular-html" | "angular-ts" | "apache" | "apex" | "apl" | "applescript" | "ara" | "asm" | "astro" | "awk" | "ballerina" | "bat" | "beancount" | "berry" | "bibtex" | "bicep" | "blade" | "c" | "cadence" | "clarity" | "clojure" | "cmake" | "cobol" | "codeql" | "cpp" | "crystal" | "csharp" | "cue" | "cypher" | "d" | "dart" | "dax" | "docker" | "dream-maker" | "elixir" | "elm" | "erb" | "erlang" | "fortran-fixed-form" | "fortran-free-form" | "fsharp" | "gdresource" | "gdscript" | "gdshader" | "gherkin" | "git-commit" | "git-rebase" | "glimmer-js" | "glimmer-ts" | "glsl" | "gnuplot" | "go" | "graphql" | "groovy" | "hack" | "haml" | "handlebars" | "haskell" | "hcl" | "hjson" | "hlsl" | "html-derivative" | "http" | "imba" | "ini" | "java" | "javascript" | "jinja" | "jison" | "json5" | "jsonc" | "jsonl" | "jsonnet" | "jssm" | "jsx" | "julia" | "kusto" | "less" | "liquid" | "lisp" | "logo" | "lua" | "make" | "marko" | "matlab" | "mdc" | "mermaid" | "mojo" | "narrat" | "nextflow" | "nginx" | "nim" | "nix" | "nushell" | "objective-c" | "objective-cpp" | "ocaml" | "pascal" | "perl" | "php" | "plsql" | "postcss" | "powerquery" | "powershell" | "prisma" | "prolog" | "proto" | "pug" | "puppet" | "purescript" | "r" | "raku" | "razor" | "reg" | "riscv" | "rst" | "ruby" | "rust" | "sas" | "sass" | "scala" | "scheme" | "scss" | "shaderlab" | "shellscript" | "shellsession" | "smalltalk" | "solidity" | "sparql" | "splunk" | "sql" | "ssh-config" | "stata" | "stylus" | "svelte" | "system-verilog" | "tasl" | "tcl" | "terraform" | "tex" | "toml" | "tsx" | "twig" | "typescript" | "typst" | "v" | "vb" | "verilog" | "vhdl" | "viml" | "vue" | "vue-html" | "vyper" | "wasm" | "wenyan" | "wgsl" | "wolfram" | "xml" | "xsl" | "yaml" | "zenscript" | "zig" | "batch" | "be" | "cdc" | "clj" | "ql" | "coffeescript" | "c++" | "c#" | "cs" | "cql" | "dockerfile" | "erl" | "f" | "for" | "f77" | "f90" | "f95" | "f03" | "f08" | "f18" | "f#" | "gjs" | "gts" | "gql" | "hbs" | "hs" | "properties" | "js" | "fsl" | "kt" | "kts" | "kql" | "makefile" | "nar" | "nf" | "nu" | "objc" | "ps" | "ps1" | "jade" | "py" | "perl6" | "rb" | "rs" | "shader" | "bash" | "sh" | "zsh" | "console" | "spl" | "styl" | "tf" | "tfvars" | "ts" | "typ" | "cmd" | "vim" | "vimscript" | "vy" | "文言" | "wl" | "yml";
            }, "coffee" | "diff" | "fish" | "move" | "shell" | "turtle" | "swift" | "python" | "markdown" | "kotlin" | "css" | "latex" | "fs" | "json" | "rel" | "mdx" | "md" | "csv" | "html" | "abap" | "actionscript-3" | "ada" | "angular-html" | "angular-ts" | "apache" | "apex" | "apl" | "applescript" | "ara" | "asm" | "astro" | "awk" | "ballerina" | "bat" | "beancount" | "berry" | "bibtex" | "bicep" | "blade" | "c" | "cadence" | "clarity" | "clojure" | "cmake" | "cobol" | "codeql" | "cpp" | "crystal" | "csharp" | "cue" | "cypher" | "d" | "dart" | "dax" | "docker" | "dream-maker" | "elixir" | "elm" | "erb" | "erlang" | "fortran-fixed-form" | "fortran-free-form" | "fsharp" | "gdresource" | "gdscript" | "gdshader" | "gherkin" | "git-commit" | "git-rebase" | "glimmer-js" | "glimmer-ts" | "glsl" | "gnuplot" | "go" | "graphql" | "groovy" | "hack" | "haml" | "handlebars" | "haskell" | "hcl" | "hjson" | "hlsl" | "html-derivative" | "http" | "imba" | "ini" | "java" | "javascript" | "jinja" | "jison" | "json5" | "jsonc" | "jsonl" | "jsonnet" | "jssm" | "jsx" | "julia" | "kusto" | "less" | "liquid" | "lisp" | "logo" | "lua" | "make" | "marko" | "matlab" | "mdc" | "mermaid" | "mojo" | "narrat" | "nextflow" | "nginx" | "nim" | "nix" | "nushell" | "objective-c" | "objective-cpp" | "ocaml" | "pascal" | "perl" | "php" | "plsql" | "postcss" | "powerquery" | "powershell" | "prisma" | "prolog" | "proto" | "pug" | "puppet" | "purescript" | "r" | "raku" | "razor" | "reg" | "riscv" | "rst" | "ruby" | "rust" | "sas" | "sass" | "scala" | "scheme" | "scss" | "shaderlab" | "shellscript" | "shellsession" | "smalltalk" | "solidity" | "sparql" | "splunk" | "sql" | "ssh-config" | "stata" | "stylus" | "svelte" | "system-verilog" | "tasl" | "tcl" | "terraform" | "tex" | "toml" | "tsx" | "twig" | "typescript" | "typst" | "v" | "vb" | "verilog" | "vhdl" | "viml" | "vue" | "vue-html" | "vyper" | "wasm" | "wenyan" | "wgsl" | "wolfram" | "xml" | "xsl" | "yaml" | "zenscript" | "zig" | "batch" | "be" | "cdc" | "clj" | "ql" | "coffeescript" | "c++" | "c#" | "cs" | "cql" | "dockerfile" | "erl" | "f" | "for" | "f77" | "f90" | "f95" | "f03" | "f08" | "f18" | "f#" | "gjs" | "gts" | "gql" | "hbs" | "hs" | "properties" | "js" | "fsl" | "kt" | "kts" | "kql" | "makefile" | "nar" | "nf" | "nu" | "objc" | "ps" | "ps1" | "jade" | "py" | "perl6" | "rb" | "rs" | "shader" | "bash" | "sh" | "zsh" | "console" | "spl" | "styl" | "tf" | "tfvars" | "ts" | "typ" | "cmd" | "vim" | "vimscript" | "vy" | "文言" | "wl" | "yml" | {
                inline: "coffee" | "diff" | "fish" | "move" | "shell" | "turtle" | "swift" | "python" | "markdown" | "kotlin" | "css" | "latex" | "fs" | "json" | "rel" | "mdx" | "md" | "csv" | "html" | "abap" | "actionscript-3" | "ada" | "angular-html" | "angular-ts" | "apache" | "apex" | "apl" | "applescript" | "ara" | "asm" | "astro" | "awk" | "ballerina" | "bat" | "beancount" | "berry" | "bibtex" | "bicep" | "blade" | "c" | "cadence" | "clarity" | "clojure" | "cmake" | "cobol" | "codeql" | "cpp" | "crystal" | "csharp" | "cue" | "cypher" | "d" | "dart" | "dax" | "docker" | "dream-maker" | "elixir" | "elm" | "erb" | "erlang" | "fortran-fixed-form" | "fortran-free-form" | "fsharp" | "gdresource" | "gdscript" | "gdshader" | "gherkin" | "git-commit" | "git-rebase" | "glimmer-js" | "glimmer-ts" | "glsl" | "gnuplot" | "go" | "graphql" | "groovy" | "hack" | "haml" | "handlebars" | "haskell" | "hcl" | "hjson" | "hlsl" | "html-derivative" | "http" | "imba" | "ini" | "java" | "javascript" | "jinja" | "jison" | "json5" | "jsonc" | "jsonl" | "jsonnet" | "jssm" | "jsx" | "julia" | "kusto" | "less" | "liquid" | "lisp" | "logo" | "lua" | "make" | "marko" | "matlab" | "mdc" | "mermaid" | "mojo" | "narrat" | "nextflow" | "nginx" | "nim" | "nix" | "nushell" | "objective-c" | "objective-cpp" | "ocaml" | "pascal" | "perl" | "php" | "plsql" | "postcss" | "powerquery" | "powershell" | "prisma" | "prolog" | "proto" | "pug" | "puppet" | "purescript" | "r" | "raku" | "razor" | "reg" | "riscv" | "rst" | "ruby" | "rust" | "sas" | "sass" | "scala" | "scheme" | "scss" | "shaderlab" | "shellscript" | "shellsession" | "smalltalk" | "solidity" | "sparql" | "splunk" | "sql" | "ssh-config" | "stata" | "stylus" | "svelte" | "system-verilog" | "tasl" | "tcl" | "terraform" | "tex" | "toml" | "tsx" | "twig" | "typescript" | "typst" | "v" | "vb" | "verilog" | "vhdl" | "viml" | "vue" | "vue-html" | "vyper" | "wasm" | "wenyan" | "wgsl" | "wolfram" | "xml" | "xsl" | "yaml" | "zenscript" | "zig" | "batch" | "be" | "cdc" | "clj" | "ql" | "coffeescript" | "c++" | "c#" | "cs" | "cql" | "dockerfile" | "erl" | "f" | "for" | "f77" | "f90" | "f95" | "f03" | "f08" | "f18" | "f#" | "gjs" | "gts" | "gql" | "hbs" | "hs" | "properties" | "js" | "fsl" | "kt" | "kts" | "kql" | "makefile" | "nar" | "nf" | "nu" | "objc" | "ps" | "ps1" | "jade" | "py" | "perl6" | "rb" | "rs" | "shader" | "bash" | "sh" | "zsh" | "console" | "spl" | "styl" | "tf" | "tfvars" | "ts" | "typ" | "cmd" | "vim" | "vimscript" | "vy" | "文言" | "wl" | "yml";
                block: "coffee" | "diff" | "fish" | "move" | "shell" | "turtle" | "swift" | "python" | "markdown" | "kotlin" | "css" | "latex" | "fs" | "json" | "rel" | "mdx" | "md" | "csv" | "html" | "abap" | "actionscript-3" | "ada" | "angular-html" | "angular-ts" | "apache" | "apex" | "apl" | "applescript" | "ara" | "asm" | "astro" | "awk" | "ballerina" | "bat" | "beancount" | "berry" | "bibtex" | "bicep" | "blade" | "c" | "cadence" | "clarity" | "clojure" | "cmake" | "cobol" | "codeql" | "cpp" | "crystal" | "csharp" | "cue" | "cypher" | "d" | "dart" | "dax" | "docker" | "dream-maker" | "elixir" | "elm" | "erb" | "erlang" | "fortran-fixed-form" | "fortran-free-form" | "fsharp" | "gdresource" | "gdscript" | "gdshader" | "gherkin" | "git-commit" | "git-rebase" | "glimmer-js" | "glimmer-ts" | "glsl" | "gnuplot" | "go" | "graphql" | "groovy" | "hack" | "haml" | "handlebars" | "haskell" | "hcl" | "hjson" | "hlsl" | "html-derivative" | "http" | "imba" | "ini" | "java" | "javascript" | "jinja" | "jison" | "json5" | "jsonc" | "jsonl" | "jsonnet" | "jssm" | "jsx" | "julia" | "kusto" | "less" | "liquid" | "lisp" | "logo" | "lua" | "make" | "marko" | "matlab" | "mdc" | "mermaid" | "mojo" | "narrat" | "nextflow" | "nginx" | "nim" | "nix" | "nushell" | "objective-c" | "objective-cpp" | "ocaml" | "pascal" | "perl" | "php" | "plsql" | "postcss" | "powerquery" | "powershell" | "prisma" | "prolog" | "proto" | "pug" | "puppet" | "purescript" | "r" | "raku" | "razor" | "reg" | "riscv" | "rst" | "ruby" | "rust" | "sas" | "sass" | "scala" | "scheme" | "scss" | "shaderlab" | "shellscript" | "shellsession" | "smalltalk" | "solidity" | "sparql" | "splunk" | "sql" | "ssh-config" | "stata" | "stylus" | "svelte" | "system-verilog" | "tasl" | "tcl" | "terraform" | "tex" | "toml" | "tsx" | "twig" | "typescript" | "typst" | "v" | "vb" | "verilog" | "vhdl" | "viml" | "vue" | "vue-html" | "vyper" | "wasm" | "wenyan" | "wgsl" | "wolfram" | "xml" | "xsl" | "yaml" | "zenscript" | "zig" | "batch" | "be" | "cdc" | "clj" | "ql" | "coffeescript" | "c++" | "c#" | "cs" | "cql" | "dockerfile" | "erl" | "f" | "for" | "f77" | "f90" | "f95" | "f03" | "f08" | "f18" | "f#" | "gjs" | "gts" | "gql" | "hbs" | "hs" | "properties" | "js" | "fsl" | "kt" | "kts" | "kql" | "makefile" | "nar" | "nf" | "nu" | "objc" | "ps" | "ps1" | "jade" | "py" | "perl6" | "rb" | "rs" | "shader" | "bash" | "sh" | "zsh" | "console" | "spl" | "styl" | "tf" | "tfvars" | "ts" | "typ" | "cmd" | "vim" | "vimscript" | "vy" | "文言" | "wl" | "yml";
            } | undefined>;
        }, "strip", z.ZodTypeAny, {
            transformers: {
                regexHighlight: boolean;
                lineHighlight: boolean;
                lineFocus: boolean;
                lineErrorLevel: boolean;
                lineDiff: boolean;
            };
            defaultLanguage: {
                inline: "coffee" | "diff" | "fish" | "move" | "shell" | "turtle" | "swift" | "python" | "markdown" | "kotlin" | "css" | "latex" | "fs" | "json" | "rel" | "mdx" | "md" | "csv" | "html" | "abap" | "actionscript-3" | "ada" | "angular-html" | "angular-ts" | "apache" | "apex" | "apl" | "applescript" | "ara" | "asm" | "astro" | "awk" | "ballerina" | "bat" | "beancount" | "berry" | "bibtex" | "bicep" | "blade" | "c" | "cadence" | "clarity" | "clojure" | "cmake" | "cobol" | "codeql" | "cpp" | "crystal" | "csharp" | "cue" | "cypher" | "d" | "dart" | "dax" | "docker" | "dream-maker" | "elixir" | "elm" | "erb" | "erlang" | "fortran-fixed-form" | "fortran-free-form" | "fsharp" | "gdresource" | "gdscript" | "gdshader" | "gherkin" | "git-commit" | "git-rebase" | "glimmer-js" | "glimmer-ts" | "glsl" | "gnuplot" | "go" | "graphql" | "groovy" | "hack" | "haml" | "handlebars" | "haskell" | "hcl" | "hjson" | "hlsl" | "html-derivative" | "http" | "imba" | "ini" | "java" | "javascript" | "jinja" | "jison" | "json5" | "jsonc" | "jsonl" | "jsonnet" | "jssm" | "jsx" | "julia" | "kusto" | "less" | "liquid" | "lisp" | "logo" | "lua" | "make" | "marko" | "matlab" | "mdc" | "mermaid" | "mojo" | "narrat" | "nextflow" | "nginx" | "nim" | "nix" | "nushell" | "objective-c" | "objective-cpp" | "ocaml" | "pascal" | "perl" | "php" | "plsql" | "postcss" | "powerquery" | "powershell" | "prisma" | "prolog" | "proto" | "pug" | "puppet" | "purescript" | "r" | "raku" | "razor" | "reg" | "riscv" | "rst" | "ruby" | "rust" | "sas" | "sass" | "scala" | "scheme" | "scss" | "shaderlab" | "shellscript" | "shellsession" | "smalltalk" | "solidity" | "sparql" | "splunk" | "sql" | "ssh-config" | "stata" | "stylus" | "svelte" | "system-verilog" | "tasl" | "tcl" | "terraform" | "tex" | "toml" | "tsx" | "twig" | "typescript" | "typst" | "v" | "vb" | "verilog" | "vhdl" | "viml" | "vue" | "vue-html" | "vyper" | "wasm" | "wenyan" | "wgsl" | "wolfram" | "xml" | "xsl" | "yaml" | "zenscript" | "zig" | "batch" | "be" | "cdc" | "clj" | "ql" | "coffeescript" | "c++" | "c#" | "cs" | "cql" | "dockerfile" | "erl" | "f" | "for" | "f77" | "f90" | "f95" | "f03" | "f08" | "f18" | "f#" | "gjs" | "gts" | "gql" | "hbs" | "hs" | "properties" | "js" | "fsl" | "kt" | "kts" | "kql" | "makefile" | "nar" | "nf" | "nu" | "objc" | "ps" | "ps1" | "jade" | "py" | "perl6" | "rb" | "rs" | "shader" | "bash" | "sh" | "zsh" | "console" | "spl" | "styl" | "tf" | "tfvars" | "ts" | "typ" | "cmd" | "vim" | "vimscript" | "vy" | "文言" | "wl" | "yml";
                block: "coffee" | "diff" | "fish" | "move" | "shell" | "turtle" | "swift" | "python" | "markdown" | "kotlin" | "css" | "latex" | "fs" | "json" | "rel" | "mdx" | "md" | "csv" | "html" | "abap" | "actionscript-3" | "ada" | "angular-html" | "angular-ts" | "apache" | "apex" | "apl" | "applescript" | "ara" | "asm" | "astro" | "awk" | "ballerina" | "bat" | "beancount" | "berry" | "bibtex" | "bicep" | "blade" | "c" | "cadence" | "clarity" | "clojure" | "cmake" | "cobol" | "codeql" | "cpp" | "crystal" | "csharp" | "cue" | "cypher" | "d" | "dart" | "dax" | "docker" | "dream-maker" | "elixir" | "elm" | "erb" | "erlang" | "fortran-fixed-form" | "fortran-free-form" | "fsharp" | "gdresource" | "gdscript" | "gdshader" | "gherkin" | "git-commit" | "git-rebase" | "glimmer-js" | "glimmer-ts" | "glsl" | "gnuplot" | "go" | "graphql" | "groovy" | "hack" | "haml" | "handlebars" | "haskell" | "hcl" | "hjson" | "hlsl" | "html-derivative" | "http" | "imba" | "ini" | "java" | "javascript" | "jinja" | "jison" | "json5" | "jsonc" | "jsonl" | "jsonnet" | "jssm" | "jsx" | "julia" | "kusto" | "less" | "liquid" | "lisp" | "logo" | "lua" | "make" | "marko" | "matlab" | "mdc" | "mermaid" | "mojo" | "narrat" | "nextflow" | "nginx" | "nim" | "nix" | "nushell" | "objective-c" | "objective-cpp" | "ocaml" | "pascal" | "perl" | "php" | "plsql" | "postcss" | "powerquery" | "powershell" | "prisma" | "prolog" | "proto" | "pug" | "puppet" | "purescript" | "r" | "raku" | "razor" | "reg" | "riscv" | "rst" | "ruby" | "rust" | "sas" | "sass" | "scala" | "scheme" | "scss" | "shaderlab" | "shellscript" | "shellsession" | "smalltalk" | "solidity" | "sparql" | "splunk" | "sql" | "ssh-config" | "stata" | "stylus" | "svelte" | "system-verilog" | "tasl" | "tcl" | "terraform" | "tex" | "toml" | "tsx" | "twig" | "typescript" | "typst" | "v" | "vb" | "verilog" | "vhdl" | "viml" | "vue" | "vue-html" | "vyper" | "wasm" | "wenyan" | "wgsl" | "wolfram" | "xml" | "xsl" | "yaml" | "zenscript" | "zig" | "batch" | "be" | "cdc" | "clj" | "ql" | "coffeescript" | "c++" | "c#" | "cs" | "cql" | "dockerfile" | "erl" | "f" | "for" | "f77" | "f90" | "f95" | "f03" | "f08" | "f18" | "f#" | "gjs" | "gts" | "gql" | "hbs" | "hs" | "properties" | "js" | "fsl" | "kt" | "kts" | "kql" | "makefile" | "nar" | "nf" | "nu" | "objc" | "ps" | "ps1" | "jade" | "py" | "perl6" | "rb" | "rs" | "shader" | "bash" | "sh" | "zsh" | "console" | "spl" | "styl" | "tf" | "tfvars" | "ts" | "typ" | "cmd" | "vim" | "vimscript" | "vy" | "文言" | "wl" | "yml";
            };
        }, {
            transformers?: {
                regexHighlight?: boolean | undefined;
                lineHighlight?: boolean | undefined;
                lineFocus?: boolean | undefined;
                lineErrorLevel?: boolean | undefined;
                lineDiff?: boolean | undefined;
            } | undefined;
            defaultLanguage?: "coffee" | "diff" | "fish" | "move" | "shell" | "turtle" | "swift" | "python" | "markdown" | "kotlin" | "css" | "latex" | "fs" | "json" | "rel" | "mdx" | "md" | "csv" | "html" | "abap" | "actionscript-3" | "ada" | "angular-html" | "angular-ts" | "apache" | "apex" | "apl" | "applescript" | "ara" | "asm" | "astro" | "awk" | "ballerina" | "bat" | "beancount" | "berry" | "bibtex" | "bicep" | "blade" | "c" | "cadence" | "clarity" | "clojure" | "cmake" | "cobol" | "codeql" | "cpp" | "crystal" | "csharp" | "cue" | "cypher" | "d" | "dart" | "dax" | "docker" | "dream-maker" | "elixir" | "elm" | "erb" | "erlang" | "fortran-fixed-form" | "fortran-free-form" | "fsharp" | "gdresource" | "gdscript" | "gdshader" | "gherkin" | "git-commit" | "git-rebase" | "glimmer-js" | "glimmer-ts" | "glsl" | "gnuplot" | "go" | "graphql" | "groovy" | "hack" | "haml" | "handlebars" | "haskell" | "hcl" | "hjson" | "hlsl" | "html-derivative" | "http" | "imba" | "ini" | "java" | "javascript" | "jinja" | "jison" | "json5" | "jsonc" | "jsonl" | "jsonnet" | "jssm" | "jsx" | "julia" | "kusto" | "less" | "liquid" | "lisp" | "logo" | "lua" | "make" | "marko" | "matlab" | "mdc" | "mermaid" | "mojo" | "narrat" | "nextflow" | "nginx" | "nim" | "nix" | "nushell" | "objective-c" | "objective-cpp" | "ocaml" | "pascal" | "perl" | "php" | "plsql" | "postcss" | "powerquery" | "powershell" | "prisma" | "prolog" | "proto" | "pug" | "puppet" | "purescript" | "r" | "raku" | "razor" | "reg" | "riscv" | "rst" | "ruby" | "rust" | "sas" | "sass" | "scala" | "scheme" | "scss" | "shaderlab" | "shellscript" | "shellsession" | "smalltalk" | "solidity" | "sparql" | "splunk" | "sql" | "ssh-config" | "stata" | "stylus" | "svelte" | "system-verilog" | "tasl" | "tcl" | "terraform" | "tex" | "toml" | "tsx" | "twig" | "typescript" | "typst" | "v" | "vb" | "verilog" | "vhdl" | "viml" | "vue" | "vue-html" | "vyper" | "wasm" | "wenyan" | "wgsl" | "wolfram" | "xml" | "xsl" | "yaml" | "zenscript" | "zig" | "batch" | "be" | "cdc" | "clj" | "ql" | "coffeescript" | "c++" | "c#" | "cs" | "cql" | "dockerfile" | "erl" | "f" | "for" | "f77" | "f90" | "f95" | "f03" | "f08" | "f18" | "f#" | "gjs" | "gts" | "gql" | "hbs" | "hs" | "properties" | "js" | "fsl" | "kt" | "kts" | "kql" | "makefile" | "nar" | "nf" | "nu" | "objc" | "ps" | "ps1" | "jade" | "py" | "perl6" | "rb" | "rs" | "shader" | "bash" | "sh" | "zsh" | "console" | "spl" | "styl" | "tf" | "tfvars" | "ts" | "typ" | "cmd" | "vim" | "vimscript" | "vy" | "文言" | "wl" | "yml" | {
                inline: "coffee" | "diff" | "fish" | "move" | "shell" | "turtle" | "swift" | "python" | "markdown" | "kotlin" | "css" | "latex" | "fs" | "json" | "rel" | "mdx" | "md" | "csv" | "html" | "abap" | "actionscript-3" | "ada" | "angular-html" | "angular-ts" | "apache" | "apex" | "apl" | "applescript" | "ara" | "asm" | "astro" | "awk" | "ballerina" | "bat" | "beancount" | "berry" | "bibtex" | "bicep" | "blade" | "c" | "cadence" | "clarity" | "clojure" | "cmake" | "cobol" | "codeql" | "cpp" | "crystal" | "csharp" | "cue" | "cypher" | "d" | "dart" | "dax" | "docker" | "dream-maker" | "elixir" | "elm" | "erb" | "erlang" | "fortran-fixed-form" | "fortran-free-form" | "fsharp" | "gdresource" | "gdscript" | "gdshader" | "gherkin" | "git-commit" | "git-rebase" | "glimmer-js" | "glimmer-ts" | "glsl" | "gnuplot" | "go" | "graphql" | "groovy" | "hack" | "haml" | "handlebars" | "haskell" | "hcl" | "hjson" | "hlsl" | "html-derivative" | "http" | "imba" | "ini" | "java" | "javascript" | "jinja" | "jison" | "json5" | "jsonc" | "jsonl" | "jsonnet" | "jssm" | "jsx" | "julia" | "kusto" | "less" | "liquid" | "lisp" | "logo" | "lua" | "make" | "marko" | "matlab" | "mdc" | "mermaid" | "mojo" | "narrat" | "nextflow" | "nginx" | "nim" | "nix" | "nushell" | "objective-c" | "objective-cpp" | "ocaml" | "pascal" | "perl" | "php" | "plsql" | "postcss" | "powerquery" | "powershell" | "prisma" | "prolog" | "proto" | "pug" | "puppet" | "purescript" | "r" | "raku" | "razor" | "reg" | "riscv" | "rst" | "ruby" | "rust" | "sas" | "sass" | "scala" | "scheme" | "scss" | "shaderlab" | "shellscript" | "shellsession" | "smalltalk" | "solidity" | "sparql" | "splunk" | "sql" | "ssh-config" | "stata" | "stylus" | "svelte" | "system-verilog" | "tasl" | "tcl" | "terraform" | "tex" | "toml" | "tsx" | "twig" | "typescript" | "typst" | "v" | "vb" | "verilog" | "vhdl" | "viml" | "vue" | "vue-html" | "vyper" | "wasm" | "wenyan" | "wgsl" | "wolfram" | "xml" | "xsl" | "yaml" | "zenscript" | "zig" | "batch" | "be" | "cdc" | "clj" | "ql" | "coffeescript" | "c++" | "c#" | "cs" | "cql" | "dockerfile" | "erl" | "f" | "for" | "f77" | "f90" | "f95" | "f03" | "f08" | "f18" | "f#" | "gjs" | "gts" | "gql" | "hbs" | "hs" | "properties" | "js" | "fsl" | "kt" | "kts" | "kql" | "makefile" | "nar" | "nf" | "nu" | "objc" | "ps" | "ps1" | "jade" | "py" | "perl6" | "rb" | "rs" | "shader" | "bash" | "sh" | "zsh" | "console" | "spl" | "styl" | "tf" | "tfvars" | "ts" | "typ" | "cmd" | "vim" | "vimscript" | "vy" | "文言" | "wl" | "yml";
                block: "coffee" | "diff" | "fish" | "move" | "shell" | "turtle" | "swift" | "python" | "markdown" | "kotlin" | "css" | "latex" | "fs" | "json" | "rel" | "mdx" | "md" | "csv" | "html" | "abap" | "actionscript-3" | "ada" | "angular-html" | "angular-ts" | "apache" | "apex" | "apl" | "applescript" | "ara" | "asm" | "astro" | "awk" | "ballerina" | "bat" | "beancount" | "berry" | "bibtex" | "bicep" | "blade" | "c" | "cadence" | "clarity" | "clojure" | "cmake" | "cobol" | "codeql" | "cpp" | "crystal" | "csharp" | "cue" | "cypher" | "d" | "dart" | "dax" | "docker" | "dream-maker" | "elixir" | "elm" | "erb" | "erlang" | "fortran-fixed-form" | "fortran-free-form" | "fsharp" | "gdresource" | "gdscript" | "gdshader" | "gherkin" | "git-commit" | "git-rebase" | "glimmer-js" | "glimmer-ts" | "glsl" | "gnuplot" | "go" | "graphql" | "groovy" | "hack" | "haml" | "handlebars" | "haskell" | "hcl" | "hjson" | "hlsl" | "html-derivative" | "http" | "imba" | "ini" | "java" | "javascript" | "jinja" | "jison" | "json5" | "jsonc" | "jsonl" | "jsonnet" | "jssm" | "jsx" | "julia" | "kusto" | "less" | "liquid" | "lisp" | "logo" | "lua" | "make" | "marko" | "matlab" | "mdc" | "mermaid" | "mojo" | "narrat" | "nextflow" | "nginx" | "nim" | "nix" | "nushell" | "objective-c" | "objective-cpp" | "ocaml" | "pascal" | "perl" | "php" | "plsql" | "postcss" | "powerquery" | "powershell" | "prisma" | "prolog" | "proto" | "pug" | "puppet" | "purescript" | "r" | "raku" | "razor" | "reg" | "riscv" | "rst" | "ruby" | "rust" | "sas" | "sass" | "scala" | "scheme" | "scss" | "shaderlab" | "shellscript" | "shellsession" | "smalltalk" | "solidity" | "sparql" | "splunk" | "sql" | "ssh-config" | "stata" | "stylus" | "svelte" | "system-verilog" | "tasl" | "tcl" | "terraform" | "tex" | "toml" | "tsx" | "twig" | "typescript" | "typst" | "v" | "vb" | "verilog" | "vhdl" | "viml" | "vue" | "vue-html" | "vyper" | "wasm" | "wenyan" | "wgsl" | "wolfram" | "xml" | "xsl" | "yaml" | "zenscript" | "zig" | "batch" | "be" | "cdc" | "clj" | "ql" | "coffeescript" | "c++" | "c#" | "cs" | "cql" | "dockerfile" | "erl" | "f" | "for" | "f77" | "f90" | "f95" | "f03" | "f08" | "f18" | "f#" | "gjs" | "gts" | "gql" | "hbs" | "hs" | "properties" | "js" | "fsl" | "kt" | "kts" | "kql" | "makefile" | "nar" | "nf" | "nu" | "objc" | "ps" | "ps1" | "jade" | "py" | "perl6" | "rb" | "rs" | "shader" | "bash" | "sh" | "zsh" | "console" | "spl" | "styl" | "tf" | "tfvars" | "ts" | "typ" | "cmd" | "vim" | "vimscript" | "vy" | "文言" | "wl" | "yml";
            } | undefined;
        }>>;
    }, "strip", z.ZodTypeAny, {
        editor: {
            defaultLangauge: string;
            useVimMode: boolean;
        };
        theme: {
            dark: "andromeeda" | "aurora-x" | "ayu-dark" | "catppuccin-frappe" | "catppuccin-latte" | "catppuccin-macchiato" | "catppuccin-mocha" | "dark-plus" | "dracula" | "dracula-soft" | "github-dark" | "github-dark-dimmed" | "github-light" | "light-plus" | "material-theme" | "material-theme-darker" | "material-theme-lighter" | "material-theme-ocean" | "material-theme-palenight" | "min-dark" | "min-light" | "monokai" | "night-owl" | "nord" | "one-dark-pro" | "poimandres" | "red" | "rose-pine" | "rose-pine-dawn" | "rose-pine-moon" | "slack-dark" | "slack-ochin" | "solarized-dark" | "solarized-light" | "synthwave-84" | "tokyo-night" | "vesper" | "vitesse-black" | "vitesse-dark" | "vitesse-light";
            light: "andromeeda" | "aurora-x" | "ayu-dark" | "catppuccin-frappe" | "catppuccin-latte" | "catppuccin-macchiato" | "catppuccin-mocha" | "dark-plus" | "dracula" | "dracula-soft" | "github-dark" | "github-dark-dimmed" | "github-light" | "light-plus" | "material-theme" | "material-theme-darker" | "material-theme-lighter" | "material-theme-ocean" | "material-theme-palenight" | "min-dark" | "min-light" | "monokai" | "night-owl" | "nord" | "one-dark-pro" | "poimandres" | "red" | "rose-pine" | "rose-pine-dawn" | "rose-pine-moon" | "slack-dark" | "slack-ochin" | "solarized-dark" | "solarized-light" | "synthwave-84" | "tokyo-night" | "vesper" | "vitesse-black" | "vitesse-dark" | "vitesse-light";
        };
        syntaxHighlighting: {
            transformers: {
                regexHighlight: boolean;
                lineHighlight: boolean;
                lineFocus: boolean;
                lineErrorLevel: boolean;
                lineDiff: boolean;
            };
            defaultLanguage: {
                inline: "coffee" | "diff" | "fish" | "move" | "shell" | "turtle" | "swift" | "python" | "markdown" | "kotlin" | "css" | "latex" | "fs" | "json" | "rel" | "mdx" | "md" | "csv" | "html" | "abap" | "actionscript-3" | "ada" | "angular-html" | "angular-ts" | "apache" | "apex" | "apl" | "applescript" | "ara" | "asm" | "astro" | "awk" | "ballerina" | "bat" | "beancount" | "berry" | "bibtex" | "bicep" | "blade" | "c" | "cadence" | "clarity" | "clojure" | "cmake" | "cobol" | "codeql" | "cpp" | "crystal" | "csharp" | "cue" | "cypher" | "d" | "dart" | "dax" | "docker" | "dream-maker" | "elixir" | "elm" | "erb" | "erlang" | "fortran-fixed-form" | "fortran-free-form" | "fsharp" | "gdresource" | "gdscript" | "gdshader" | "gherkin" | "git-commit" | "git-rebase" | "glimmer-js" | "glimmer-ts" | "glsl" | "gnuplot" | "go" | "graphql" | "groovy" | "hack" | "haml" | "handlebars" | "haskell" | "hcl" | "hjson" | "hlsl" | "html-derivative" | "http" | "imba" | "ini" | "java" | "javascript" | "jinja" | "jison" | "json5" | "jsonc" | "jsonl" | "jsonnet" | "jssm" | "jsx" | "julia" | "kusto" | "less" | "liquid" | "lisp" | "logo" | "lua" | "make" | "marko" | "matlab" | "mdc" | "mermaid" | "mojo" | "narrat" | "nextflow" | "nginx" | "nim" | "nix" | "nushell" | "objective-c" | "objective-cpp" | "ocaml" | "pascal" | "perl" | "php" | "plsql" | "postcss" | "powerquery" | "powershell" | "prisma" | "prolog" | "proto" | "pug" | "puppet" | "purescript" | "r" | "raku" | "razor" | "reg" | "riscv" | "rst" | "ruby" | "rust" | "sas" | "sass" | "scala" | "scheme" | "scss" | "shaderlab" | "shellscript" | "shellsession" | "smalltalk" | "solidity" | "sparql" | "splunk" | "sql" | "ssh-config" | "stata" | "stylus" | "svelte" | "system-verilog" | "tasl" | "tcl" | "terraform" | "tex" | "toml" | "tsx" | "twig" | "typescript" | "typst" | "v" | "vb" | "verilog" | "vhdl" | "viml" | "vue" | "vue-html" | "vyper" | "wasm" | "wenyan" | "wgsl" | "wolfram" | "xml" | "xsl" | "yaml" | "zenscript" | "zig" | "batch" | "be" | "cdc" | "clj" | "ql" | "coffeescript" | "c++" | "c#" | "cs" | "cql" | "dockerfile" | "erl" | "f" | "for" | "f77" | "f90" | "f95" | "f03" | "f08" | "f18" | "f#" | "gjs" | "gts" | "gql" | "hbs" | "hs" | "properties" | "js" | "fsl" | "kt" | "kts" | "kql" | "makefile" | "nar" | "nf" | "nu" | "objc" | "ps" | "ps1" | "jade" | "py" | "perl6" | "rb" | "rs" | "shader" | "bash" | "sh" | "zsh" | "console" | "spl" | "styl" | "tf" | "tfvars" | "ts" | "typ" | "cmd" | "vim" | "vimscript" | "vy" | "文言" | "wl" | "yml";
                block: "coffee" | "diff" | "fish" | "move" | "shell" | "turtle" | "swift" | "python" | "markdown" | "kotlin" | "css" | "latex" | "fs" | "json" | "rel" | "mdx" | "md" | "csv" | "html" | "abap" | "actionscript-3" | "ada" | "angular-html" | "angular-ts" | "apache" | "apex" | "apl" | "applescript" | "ara" | "asm" | "astro" | "awk" | "ballerina" | "bat" | "beancount" | "berry" | "bibtex" | "bicep" | "blade" | "c" | "cadence" | "clarity" | "clojure" | "cmake" | "cobol" | "codeql" | "cpp" | "crystal" | "csharp" | "cue" | "cypher" | "d" | "dart" | "dax" | "docker" | "dream-maker" | "elixir" | "elm" | "erb" | "erlang" | "fortran-fixed-form" | "fortran-free-form" | "fsharp" | "gdresource" | "gdscript" | "gdshader" | "gherkin" | "git-commit" | "git-rebase" | "glimmer-js" | "glimmer-ts" | "glsl" | "gnuplot" | "go" | "graphql" | "groovy" | "hack" | "haml" | "handlebars" | "haskell" | "hcl" | "hjson" | "hlsl" | "html-derivative" | "http" | "imba" | "ini" | "java" | "javascript" | "jinja" | "jison" | "json5" | "jsonc" | "jsonl" | "jsonnet" | "jssm" | "jsx" | "julia" | "kusto" | "less" | "liquid" | "lisp" | "logo" | "lua" | "make" | "marko" | "matlab" | "mdc" | "mermaid" | "mojo" | "narrat" | "nextflow" | "nginx" | "nim" | "nix" | "nushell" | "objective-c" | "objective-cpp" | "ocaml" | "pascal" | "perl" | "php" | "plsql" | "postcss" | "powerquery" | "powershell" | "prisma" | "prolog" | "proto" | "pug" | "puppet" | "purescript" | "r" | "raku" | "razor" | "reg" | "riscv" | "rst" | "ruby" | "rust" | "sas" | "sass" | "scala" | "scheme" | "scss" | "shaderlab" | "shellscript" | "shellsession" | "smalltalk" | "solidity" | "sparql" | "splunk" | "sql" | "ssh-config" | "stata" | "stylus" | "svelte" | "system-verilog" | "tasl" | "tcl" | "terraform" | "tex" | "toml" | "tsx" | "twig" | "typescript" | "typst" | "v" | "vb" | "verilog" | "vhdl" | "viml" | "vue" | "vue-html" | "vyper" | "wasm" | "wenyan" | "wgsl" | "wolfram" | "xml" | "xsl" | "yaml" | "zenscript" | "zig" | "batch" | "be" | "cdc" | "clj" | "ql" | "coffeescript" | "c++" | "c#" | "cs" | "cql" | "dockerfile" | "erl" | "f" | "for" | "f77" | "f90" | "f95" | "f03" | "f08" | "f18" | "f#" | "gjs" | "gts" | "gql" | "hbs" | "hs" | "properties" | "js" | "fsl" | "kt" | "kts" | "kql" | "makefile" | "nar" | "nf" | "nu" | "objc" | "ps" | "ps1" | "jade" | "py" | "perl6" | "rb" | "rs" | "shader" | "bash" | "sh" | "zsh" | "console" | "spl" | "styl" | "tf" | "tfvars" | "ts" | "typ" | "cmd" | "vim" | "vimscript" | "vy" | "文言" | "wl" | "yml";
            };
        };
    }, {
        editor?: {
            defaultLangauge?: string | undefined;
            useVimMode?: boolean | undefined;
        } | undefined;
        theme?: {
            dark?: "andromeeda" | "aurora-x" | "ayu-dark" | "catppuccin-frappe" | "catppuccin-latte" | "catppuccin-macchiato" | "catppuccin-mocha" | "dark-plus" | "dracula" | "dracula-soft" | "github-dark" | "github-dark-dimmed" | "github-light" | "light-plus" | "material-theme" | "material-theme-darker" | "material-theme-lighter" | "material-theme-ocean" | "material-theme-palenight" | "min-dark" | "min-light" | "monokai" | "night-owl" | "nord" | "one-dark-pro" | "poimandres" | "red" | "rose-pine" | "rose-pine-dawn" | "rose-pine-moon" | "slack-dark" | "slack-ochin" | "solarized-dark" | "solarized-light" | "synthwave-84" | "tokyo-night" | "vesper" | "vitesse-black" | "vitesse-dark" | "vitesse-light" | undefined;
            light?: "andromeeda" | "aurora-x" | "ayu-dark" | "catppuccin-frappe" | "catppuccin-latte" | "catppuccin-macchiato" | "catppuccin-mocha" | "dark-plus" | "dracula" | "dracula-soft" | "github-dark" | "github-dark-dimmed" | "github-light" | "light-plus" | "material-theme" | "material-theme-darker" | "material-theme-lighter" | "material-theme-ocean" | "material-theme-palenight" | "min-dark" | "min-light" | "monokai" | "night-owl" | "nord" | "one-dark-pro" | "poimandres" | "red" | "rose-pine" | "rose-pine-dawn" | "rose-pine-moon" | "slack-dark" | "slack-ochin" | "solarized-dark" | "solarized-light" | "synthwave-84" | "tokyo-night" | "vesper" | "vitesse-black" | "vitesse-dark" | "vitesse-light" | undefined;
        } | undefined;
        syntaxHighlighting?: {
            transformers?: {
                regexHighlight?: boolean | undefined;
                lineHighlight?: boolean | undefined;
                lineFocus?: boolean | undefined;
                lineErrorLevel?: boolean | undefined;
                lineDiff?: boolean | undefined;
            } | undefined;
            defaultLanguage?: "coffee" | "diff" | "fish" | "move" | "shell" | "turtle" | "swift" | "python" | "markdown" | "kotlin" | "css" | "latex" | "fs" | "json" | "rel" | "mdx" | "md" | "csv" | "html" | "abap" | "actionscript-3" | "ada" | "angular-html" | "angular-ts" | "apache" | "apex" | "apl" | "applescript" | "ara" | "asm" | "astro" | "awk" | "ballerina" | "bat" | "beancount" | "berry" | "bibtex" | "bicep" | "blade" | "c" | "cadence" | "clarity" | "clojure" | "cmake" | "cobol" | "codeql" | "cpp" | "crystal" | "csharp" | "cue" | "cypher" | "d" | "dart" | "dax" | "docker" | "dream-maker" | "elixir" | "elm" | "erb" | "erlang" | "fortran-fixed-form" | "fortran-free-form" | "fsharp" | "gdresource" | "gdscript" | "gdshader" | "gherkin" | "git-commit" | "git-rebase" | "glimmer-js" | "glimmer-ts" | "glsl" | "gnuplot" | "go" | "graphql" | "groovy" | "hack" | "haml" | "handlebars" | "haskell" | "hcl" | "hjson" | "hlsl" | "html-derivative" | "http" | "imba" | "ini" | "java" | "javascript" | "jinja" | "jison" | "json5" | "jsonc" | "jsonl" | "jsonnet" | "jssm" | "jsx" | "julia" | "kusto" | "less" | "liquid" | "lisp" | "logo" | "lua" | "make" | "marko" | "matlab" | "mdc" | "mermaid" | "mojo" | "narrat" | "nextflow" | "nginx" | "nim" | "nix" | "nushell" | "objective-c" | "objective-cpp" | "ocaml" | "pascal" | "perl" | "php" | "plsql" | "postcss" | "powerquery" | "powershell" | "prisma" | "prolog" | "proto" | "pug" | "puppet" | "purescript" | "r" | "raku" | "razor" | "reg" | "riscv" | "rst" | "ruby" | "rust" | "sas" | "sass" | "scala" | "scheme" | "scss" | "shaderlab" | "shellscript" | "shellsession" | "smalltalk" | "solidity" | "sparql" | "splunk" | "sql" | "ssh-config" | "stata" | "stylus" | "svelte" | "system-verilog" | "tasl" | "tcl" | "terraform" | "tex" | "toml" | "tsx" | "twig" | "typescript" | "typst" | "v" | "vb" | "verilog" | "vhdl" | "viml" | "vue" | "vue-html" | "vyper" | "wasm" | "wenyan" | "wgsl" | "wolfram" | "xml" | "xsl" | "yaml" | "zenscript" | "zig" | "batch" | "be" | "cdc" | "clj" | "ql" | "coffeescript" | "c++" | "c#" | "cs" | "cql" | "dockerfile" | "erl" | "f" | "for" | "f77" | "f90" | "f95" | "f03" | "f08" | "f18" | "f#" | "gjs" | "gts" | "gql" | "hbs" | "hs" | "properties" | "js" | "fsl" | "kt" | "kts" | "kql" | "makefile" | "nar" | "nf" | "nu" | "objc" | "ps" | "ps1" | "jade" | "py" | "perl6" | "rb" | "rs" | "shader" | "bash" | "sh" | "zsh" | "console" | "spl" | "styl" | "tf" | "tfvars" | "ts" | "typ" | "cmd" | "vim" | "vimscript" | "vy" | "文言" | "wl" | "yml" | {
                inline: "coffee" | "diff" | "fish" | "move" | "shell" | "turtle" | "swift" | "python" | "markdown" | "kotlin" | "css" | "latex" | "fs" | "json" | "rel" | "mdx" | "md" | "csv" | "html" | "abap" | "actionscript-3" | "ada" | "angular-html" | "angular-ts" | "apache" | "apex" | "apl" | "applescript" | "ara" | "asm" | "astro" | "awk" | "ballerina" | "bat" | "beancount" | "berry" | "bibtex" | "bicep" | "blade" | "c" | "cadence" | "clarity" | "clojure" | "cmake" | "cobol" | "codeql" | "cpp" | "crystal" | "csharp" | "cue" | "cypher" | "d" | "dart" | "dax" | "docker" | "dream-maker" | "elixir" | "elm" | "erb" | "erlang" | "fortran-fixed-form" | "fortran-free-form" | "fsharp" | "gdresource" | "gdscript" | "gdshader" | "gherkin" | "git-commit" | "git-rebase" | "glimmer-js" | "glimmer-ts" | "glsl" | "gnuplot" | "go" | "graphql" | "groovy" | "hack" | "haml" | "handlebars" | "haskell" | "hcl" | "hjson" | "hlsl" | "html-derivative" | "http" | "imba" | "ini" | "java" | "javascript" | "jinja" | "jison" | "json5" | "jsonc" | "jsonl" | "jsonnet" | "jssm" | "jsx" | "julia" | "kusto" | "less" | "liquid" | "lisp" | "logo" | "lua" | "make" | "marko" | "matlab" | "mdc" | "mermaid" | "mojo" | "narrat" | "nextflow" | "nginx" | "nim" | "nix" | "nushell" | "objective-c" | "objective-cpp" | "ocaml" | "pascal" | "perl" | "php" | "plsql" | "postcss" | "powerquery" | "powershell" | "prisma" | "prolog" | "proto" | "pug" | "puppet" | "purescript" | "r" | "raku" | "razor" | "reg" | "riscv" | "rst" | "ruby" | "rust" | "sas" | "sass" | "scala" | "scheme" | "scss" | "shaderlab" | "shellscript" | "shellsession" | "smalltalk" | "solidity" | "sparql" | "splunk" | "sql" | "ssh-config" | "stata" | "stylus" | "svelte" | "system-verilog" | "tasl" | "tcl" | "terraform" | "tex" | "toml" | "tsx" | "twig" | "typescript" | "typst" | "v" | "vb" | "verilog" | "vhdl" | "viml" | "vue" | "vue-html" | "vyper" | "wasm" | "wenyan" | "wgsl" | "wolfram" | "xml" | "xsl" | "yaml" | "zenscript" | "zig" | "batch" | "be" | "cdc" | "clj" | "ql" | "coffeescript" | "c++" | "c#" | "cs" | "cql" | "dockerfile" | "erl" | "f" | "for" | "f77" | "f90" | "f95" | "f03" | "f08" | "f18" | "f#" | "gjs" | "gts" | "gql" | "hbs" | "hs" | "properties" | "js" | "fsl" | "kt" | "kts" | "kql" | "makefile" | "nar" | "nf" | "nu" | "objc" | "ps" | "ps1" | "jade" | "py" | "perl6" | "rb" | "rs" | "shader" | "bash" | "sh" | "zsh" | "console" | "spl" | "styl" | "tf" | "tfvars" | "ts" | "typ" | "cmd" | "vim" | "vimscript" | "vy" | "文言" | "wl" | "yml";
                block: "coffee" | "diff" | "fish" | "move" | "shell" | "turtle" | "swift" | "python" | "markdown" | "kotlin" | "css" | "latex" | "fs" | "json" | "rel" | "mdx" | "md" | "csv" | "html" | "abap" | "actionscript-3" | "ada" | "angular-html" | "angular-ts" | "apache" | "apex" | "apl" | "applescript" | "ara" | "asm" | "astro" | "awk" | "ballerina" | "bat" | "beancount" | "berry" | "bibtex" | "bicep" | "blade" | "c" | "cadence" | "clarity" | "clojure" | "cmake" | "cobol" | "codeql" | "cpp" | "crystal" | "csharp" | "cue" | "cypher" | "d" | "dart" | "dax" | "docker" | "dream-maker" | "elixir" | "elm" | "erb" | "erlang" | "fortran-fixed-form" | "fortran-free-form" | "fsharp" | "gdresource" | "gdscript" | "gdshader" | "gherkin" | "git-commit" | "git-rebase" | "glimmer-js" | "glimmer-ts" | "glsl" | "gnuplot" | "go" | "graphql" | "groovy" | "hack" | "haml" | "handlebars" | "haskell" | "hcl" | "hjson" | "hlsl" | "html-derivative" | "http" | "imba" | "ini" | "java" | "javascript" | "jinja" | "jison" | "json5" | "jsonc" | "jsonl" | "jsonnet" | "jssm" | "jsx" | "julia" | "kusto" | "less" | "liquid" | "lisp" | "logo" | "lua" | "make" | "marko" | "matlab" | "mdc" | "mermaid" | "mojo" | "narrat" | "nextflow" | "nginx" | "nim" | "nix" | "nushell" | "objective-c" | "objective-cpp" | "ocaml" | "pascal" | "perl" | "php" | "plsql" | "postcss" | "powerquery" | "powershell" | "prisma" | "prolog" | "proto" | "pug" | "puppet" | "purescript" | "r" | "raku" | "razor" | "reg" | "riscv" | "rst" | "ruby" | "rust" | "sas" | "sass" | "scala" | "scheme" | "scss" | "shaderlab" | "shellscript" | "shellsession" | "smalltalk" | "solidity" | "sparql" | "splunk" | "sql" | "ssh-config" | "stata" | "stylus" | "svelte" | "system-verilog" | "tasl" | "tcl" | "terraform" | "tex" | "toml" | "tsx" | "twig" | "typescript" | "typst" | "v" | "vb" | "verilog" | "vhdl" | "viml" | "vue" | "vue-html" | "vyper" | "wasm" | "wenyan" | "wgsl" | "wolfram" | "xml" | "xsl" | "yaml" | "zenscript" | "zig" | "batch" | "be" | "cdc" | "clj" | "ql" | "coffeescript" | "c++" | "c#" | "cs" | "cql" | "dockerfile" | "erl" | "f" | "for" | "f77" | "f90" | "f95" | "f03" | "f08" | "f18" | "f#" | "gjs" | "gts" | "gql" | "hbs" | "hs" | "properties" | "js" | "fsl" | "kt" | "kts" | "kql" | "makefile" | "nar" | "nf" | "nu" | "objc" | "ps" | "ps1" | "jade" | "py" | "perl6" | "rb" | "rs" | "shader" | "bash" | "sh" | "zsh" | "console" | "spl" | "styl" | "tf" | "tfvars" | "ts" | "typ" | "cmd" | "vim" | "vimscript" | "vy" | "文言" | "wl" | "yml";
            } | undefined;
        } | undefined;
    }>>>;
    database: z.ZodOptional<z.ZodDefault<z.ZodObject<{
        storeFormatted: z.ZodDefault<z.ZodBoolean>;
        removeIfNotPresentInFs: z.ZodDefault<z.ZodBoolean>;
    }, "strip", z.ZodTypeAny, {
        storeFormatted: boolean;
        removeIfNotPresentInFs: boolean;
    }, {
        storeFormatted?: boolean | undefined;
        removeIfNotPresentInFs?: boolean | undefined;
    }>>>;
    navigation: z.ZodOptional<z.ZodDefault<z.ZodObject<{
        navbarBreakpoint: z.ZodDefault<z.ZodObject<{
            full: z.ZodDefault<z.ZodNumber>;
            minimal: z.ZodDefault<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            full: number;
            minimal: number;
        }, {
            full?: number | undefined;
            minimal?: number | undefined;
        }>>;
        maxResultLength: z.ZodDefault<z.ZodObject<{
            categories: z.ZodDefault<z.ZodNumber>;
            equations: z.ZodDefault<z.ZodNumber>;
            snippets: z.ZodDefault<z.ZodNumber>;
            searchAll: z.ZodDefault<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            snippets: number;
            searchAll: number;
            equations: number;
            categories: number;
        }, {
            snippets?: number | undefined;
            searchAll?: number | undefined;
            equations?: number | undefined;
            categories?: number | undefined;
        }>>;
        bookmarkLink: z.ZodDefault<z.ZodOptional<z.ZodUnion<[z.ZodLiteral<"sidebar">, z.ZodLiteral<"navbar">, z.ZodLiteral<"both">, z.ZodLiteral<"none">]>>>;
        syncLink: z.ZodDefault<z.ZodOptional<z.ZodUnion<[z.ZodLiteral<"sidebar">, z.ZodLiteral<"navbar">, z.ZodLiteral<"both">, z.ZodLiteral<"none">]>>>;
        fileSystemToggle: z.ZodOptional<z.ZodUnion<[z.ZodLiteral<"sidebar">, z.ZodLiteral<"navbar">, z.ZodLiteral<"both">, z.ZodLiteral<"none">]>>;
        darkmodeToggle: z.ZodDefault<z.ZodOptional<z.ZodUnion<[z.ZodLiteral<"sidebar">, z.ZodLiteral<"navbar">, z.ZodLiteral<"both">, z.ZodLiteral<"none">]>>>;
        settings: z.ZodOptional<z.ZodUnion<[z.ZodLiteral<"sidebar">, z.ZodLiteral<"navbar">, z.ZodLiteral<"both">, z.ZodLiteral<"none">]>>;
        equationsLink: z.ZodOptional<z.ZodUnion<[z.ZodLiteral<"sidebar">, z.ZodLiteral<"navbar">, z.ZodLiteral<"both">, z.ZodLiteral<"none">]>>;
        snippetsLink: z.ZodDefault<z.ZodOptional<z.ZodUnion<[z.ZodLiteral<"sidebar">, z.ZodLiteral<"navbar">, z.ZodLiteral<"both">, z.ZodLiteral<"none">]>>>;
        backupData: z.ZodOptional<z.ZodUnion<[z.ZodLiteral<"sidebar">, z.ZodLiteral<"navbar">, z.ZodLiteral<"both">, z.ZodLiteral<"none">]>>;
        navbarLinks: z.ZodDefault<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodObject<{
            label: z.ZodString;
            icon: z.ZodOptional<z.ZodEffects<z.ZodString, string, string>>;
            href: z.ZodOptional<z.ZodString>;
            onClick: z.ZodOptional<z.ZodFunction<z.ZodTuple<[], z.ZodUnknown>, z.ZodUnknown>>;
        }, "strip", z.ZodTypeAny, {
            label: string;
            href?: string | undefined;
            icon?: string | undefined;
            onClick?: ((...args: unknown[]) => unknown) | undefined;
        }, {
            label: string;
            href?: string | undefined;
            icon?: string | undefined;
            onClick?: ((...args: unknown[]) => unknown) | undefined;
        }>]>, "many">>;
        sidebarLinks: z.ZodDefault<z.ZodArray<z.ZodUnion<[z.ZodObject<{
            icon: z.ZodEffects<z.ZodString, string, string>;
            href: z.ZodOptional<z.ZodString>;
            label: z.ZodOptional<z.ZodString>;
            Icon: z.ZodOptional<z.ZodFunction<z.ZodTuple<[], z.ZodUnknown>, z.ZodUnknown>>;
            onClick: z.ZodOptional<z.ZodFunction<z.ZodTuple<[], z.ZodUnknown>, z.ZodUnknown>>;
        }, "strip", z.ZodTypeAny, {
            icon: string;
            label?: string | undefined;
            href?: string | undefined;
            onClick?: ((...args: unknown[]) => unknown) | undefined;
            Icon?: ((...args: unknown[]) => unknown) | undefined;
        }, {
            icon: string;
            label?: string | undefined;
            href?: string | undefined;
            onClick?: ((...args: unknown[]) => unknown) | undefined;
            Icon?: ((...args: unknown[]) => unknown) | undefined;
        }>, z.ZodString]>, "many">>;
    }, "strip", z.ZodTypeAny, {
        navbarBreakpoint: {
            full: number;
            minimal: number;
        };
        maxResultLength: {
            snippets: number;
            searchAll: number;
            equations: number;
            categories: number;
        };
        bookmarkLink: "none" | "sidebar" | "navbar" | "both";
        syncLink: "none" | "sidebar" | "navbar" | "both";
        darkmodeToggle: "none" | "sidebar" | "navbar" | "both";
        snippetsLink: "none" | "sidebar" | "navbar" | "both";
        navbarLinks: (string | {
            label: string;
            href?: string | undefined;
            icon?: string | undefined;
            onClick?: ((...args: unknown[]) => unknown) | undefined;
        })[];
        sidebarLinks: (string | {
            icon: string;
            label?: string | undefined;
            href?: string | undefined;
            onClick?: ((...args: unknown[]) => unknown) | undefined;
            Icon?: ((...args: unknown[]) => unknown) | undefined;
        })[];
        settings?: "none" | "sidebar" | "navbar" | "both" | undefined;
        fileSystemToggle?: "none" | "sidebar" | "navbar" | "both" | undefined;
        equationsLink?: "none" | "sidebar" | "navbar" | "both" | undefined;
        backupData?: "none" | "sidebar" | "navbar" | "both" | undefined;
    }, {
        settings?: "none" | "sidebar" | "navbar" | "both" | undefined;
        navbarBreakpoint?: {
            full?: number | undefined;
            minimal?: number | undefined;
        } | undefined;
        maxResultLength?: {
            snippets?: number | undefined;
            searchAll?: number | undefined;
            equations?: number | undefined;
            categories?: number | undefined;
        } | undefined;
        bookmarkLink?: "none" | "sidebar" | "navbar" | "both" | undefined;
        syncLink?: "none" | "sidebar" | "navbar" | "both" | undefined;
        fileSystemToggle?: "none" | "sidebar" | "navbar" | "both" | undefined;
        darkmodeToggle?: "none" | "sidebar" | "navbar" | "both" | undefined;
        equationsLink?: "none" | "sidebar" | "navbar" | "both" | undefined;
        snippetsLink?: "none" | "sidebar" | "navbar" | "both" | undefined;
        backupData?: "none" | "sidebar" | "navbar" | "both" | undefined;
        navbarLinks?: (string | {
            label: string;
            href?: string | undefined;
            icon?: string | undefined;
            onClick?: ((...args: unknown[]) => unknown) | undefined;
        })[] | undefined;
        sidebarLinks?: (string | {
            icon: string;
            label?: string | undefined;
            href?: string | undefined;
            onClick?: ((...args: unknown[]) => unknown) | undefined;
            Icon?: ((...args: unknown[]) => unknown) | undefined;
        })[] | undefined;
    }>>>;
    terminal: z.ZodOptional<z.ZodDefault<z.ZodObject<{
        logLevel: z.ZodDefault<z.ZodUnion<[z.ZodLiteral<"debug">, z.ZodLiteral<"verbose">, z.ZodLiteral<"info">, z.ZodLiteral<"none">]>>;
    }, "strip", z.ZodTypeAny, {
        logLevel: "info" | "none" | "debug" | "verbose";
    }, {
        logLevel?: "info" | "none" | "debug" | "verbose" | undefined;
    }>>>;
    jupyter: z.ZodOptional<z.ZodDefault<z.ZodObject<{
        execute: z.ZodDefault<z.ZodBoolean>;
        environment: z.ZodDefault<z.ZodString>;
        syntaxHighlightTheme: z.ZodDefault<z.ZodString>;
        jupyterToken: z.ZodOptional<z.ZodString>;
        jupyterPort: z.ZodDefault<z.ZodNumber>;
        initiallyFoldCells: z.ZodDefault<z.ZodBoolean>;
        kernel: z.ZodDefault<z.ZodString>;
        jupyterReactProps: z.ZodDefault<z.ZodObject<{
            collaborative: z.ZodDefault<z.ZodBoolean>;
            lite: z.ZodDefault<z.ZodBoolean>;
            serverUrls: z.ZodOptional<z.ZodObject<{
                baseUrl: z.ZodOptional<z.ZodString>;
                wsUrl: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                baseUrl?: string | undefined;
                wsUrl?: string | undefined;
            }, {
                baseUrl?: string | undefined;
                wsUrl?: string | undefined;
            }>>;
        }, "strip", z.ZodTypeAny, {
            collaborative: boolean;
            lite: boolean;
            serverUrls?: {
                baseUrl?: string | undefined;
                wsUrl?: string | undefined;
            } | undefined;
        }, {
            collaborative?: boolean | undefined;
            lite?: boolean | undefined;
            serverUrls?: {
                baseUrl?: string | undefined;
                wsUrl?: string | undefined;
            } | undefined;
        }>>;
        nbConvert: z.ZodDefault<z.ZodObject<{
            nbconvertPath: z.ZodOptional<z.ZodString>;
            conversionTimeout: z.ZodDefault<z.ZodNumber>;
            customConversionFunction: z.ZodOptional<z.ZodObject<{
                pdf: z.ZodOptional<z.ZodFunction<z.ZodTuple<[z.ZodString, z.ZodString], z.ZodUnknown>, z.ZodString>>;
            }, "strip", z.ZodTypeAny, {
                pdf?: ((args_0: string, args_1: string, ...args: unknown[]) => string) | undefined;
            }, {
                pdf?: ((args_0: string, args_1: string, ...args: unknown[]) => string) | undefined;
            }>>;
            execute: z.ZodDefault<z.ZodBoolean>;
            nbConvertTemplate: z.ZodDefault<z.ZodUnion<[z.ZodLiteral<"lab">, z.ZodLiteral<"classic">, z.ZodLiteral<"reveal">, z.ZodString]>>;
            notebookOutputDir: z.ZodDefault<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            conversionTimeout: number;
            execute: boolean;
            nbConvertTemplate: string;
            notebookOutputDir: string;
            nbconvertPath?: string | undefined;
            customConversionFunction?: {
                pdf?: ((args_0: string, args_1: string, ...args: unknown[]) => string) | undefined;
            } | undefined;
        }, {
            nbconvertPath?: string | undefined;
            conversionTimeout?: number | undefined;
            customConversionFunction?: {
                pdf?: ((args_0: string, args_1: string, ...args: unknown[]) => string) | undefined;
            } | undefined;
            execute?: boolean | undefined;
            nbConvertTemplate?: string | undefined;
            notebookOutputDir?: string | undefined;
        }>>;
        jupyterNotebookProps: z.ZodDefault<z.ZodObject<{
            cellMetadataPanel: z.ZodDefault<z.ZodBoolean>;
            cellSidebarMargin: z.ZodDefault<z.ZodNumber>;
            height: z.ZodOptional<z.ZodString>;
            maxHeight: z.ZodOptional<z.ZodString>;
            bundledIPyWidgets: z.ZodDefault<z.ZodArray<z.ZodObject<{
                module: z.ZodUnion<[z.ZodString, z.ZodRecord<z.ZodString, z.ZodString>]>;
                name: z.ZodString;
                version: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                name: string;
                module: string | Record<string, string>;
                version: string;
            }, {
                name: string;
                module: string | Record<string, string>;
                version: string;
            }>, "many">>;
            externalIPyWidgets: z.ZodDefault<z.ZodArray<z.ZodObject<Omit<{
                module: z.ZodUnion<[z.ZodString, z.ZodRecord<z.ZodString, z.ZodString>]>;
                name: z.ZodString;
                version: z.ZodString;
            }, "module">, "strip", z.ZodTypeAny, {
                name: string;
                version: string;
            }, {
                name: string;
                version: string;
            }>, "many">>;
            nbgrader: z.ZodDefault<z.ZodBoolean>;
            readOnly: z.ZodDefault<z.ZodBoolean>;
        }, "strip", z.ZodTypeAny, {
            readOnly: boolean;
            cellMetadataPanel: boolean;
            cellSidebarMargin: number;
            bundledIPyWidgets: {
                name: string;
                module: string | Record<string, string>;
                version: string;
            }[];
            externalIPyWidgets: {
                name: string;
                version: string;
            }[];
            nbgrader: boolean;
            height?: string | undefined;
            maxHeight?: string | undefined;
        }, {
            height?: string | undefined;
            readOnly?: boolean | undefined;
            maxHeight?: string | undefined;
            cellMetadataPanel?: boolean | undefined;
            cellSidebarMargin?: number | undefined;
            bundledIPyWidgets?: {
                name: string;
                module: string | Record<string, string>;
                version: string;
            }[] | undefined;
            externalIPyWidgets?: {
                name: string;
                version: string;
            }[] | undefined;
            nbgrader?: boolean | undefined;
        }>>;
        cellInputWrappers: z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodObject<{
            prefix: z.ZodString;
            suffix: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            prefix: string;
            suffix: string;
        }, {
            prefix: string;
            suffix: string;
        }>]>, {
            prefix: string;
            suffix: string;
        }, string | {
            prefix: string;
            suffix: string;
        }>>>;
    }, "strip", z.ZodTypeAny, {
        execute: boolean;
        environment: string;
        syntaxHighlightTheme: string;
        jupyterPort: number;
        initiallyFoldCells: boolean;
        kernel: string;
        jupyterReactProps: {
            collaborative: boolean;
            lite: boolean;
            serverUrls?: {
                baseUrl?: string | undefined;
                wsUrl?: string | undefined;
            } | undefined;
        };
        nbConvert: {
            conversionTimeout: number;
            execute: boolean;
            nbConvertTemplate: string;
            notebookOutputDir: string;
            nbconvertPath?: string | undefined;
            customConversionFunction?: {
                pdf?: ((args_0: string, args_1: string, ...args: unknown[]) => string) | undefined;
            } | undefined;
        };
        jupyterNotebookProps: {
            readOnly: boolean;
            cellMetadataPanel: boolean;
            cellSidebarMargin: number;
            bundledIPyWidgets: {
                name: string;
                module: string | Record<string, string>;
                version: string;
            }[];
            externalIPyWidgets: {
                name: string;
                version: string;
            }[];
            nbgrader: boolean;
            height?: string | undefined;
            maxHeight?: string | undefined;
        };
        cellInputWrappers: Record<string, {
            prefix: string;
            suffix: string;
        }>;
        jupyterToken?: string | undefined;
    }, {
        execute?: boolean | undefined;
        environment?: string | undefined;
        syntaxHighlightTheme?: string | undefined;
        jupyterToken?: string | undefined;
        jupyterPort?: number | undefined;
        initiallyFoldCells?: boolean | undefined;
        kernel?: string | undefined;
        jupyterReactProps?: {
            collaborative?: boolean | undefined;
            lite?: boolean | undefined;
            serverUrls?: {
                baseUrl?: string | undefined;
                wsUrl?: string | undefined;
            } | undefined;
        } | undefined;
        nbConvert?: {
            nbconvertPath?: string | undefined;
            conversionTimeout?: number | undefined;
            customConversionFunction?: {
                pdf?: ((args_0: string, args_1: string, ...args: unknown[]) => string) | undefined;
            } | undefined;
            execute?: boolean | undefined;
            nbConvertTemplate?: string | undefined;
            notebookOutputDir?: string | undefined;
        } | undefined;
        jupyterNotebookProps?: {
            height?: string | undefined;
            readOnly?: boolean | undefined;
            maxHeight?: string | undefined;
            cellMetadataPanel?: boolean | undefined;
            cellSidebarMargin?: number | undefined;
            bundledIPyWidgets?: {
                name: string;
                module: string | Record<string, string>;
                version: string;
            }[] | undefined;
            externalIPyWidgets?: {
                name: string;
                version: string;
            }[] | undefined;
            nbgrader?: boolean | undefined;
        } | undefined;
        cellInputWrappers?: Record<string, string | {
            prefix: string;
            suffix: string;
        }> | undefined;
    }>>>;
    math: z.ZodOptional<z.ZodDefault<z.ZodObject<{
        latexPackages: z.ZodDefault<z.ZodUnion<[z.ZodArray<z.ZodString, "many">, z.ZodLiteral<"all">]>>;
        latexFontUrl: z.ZodEffects<z.ZodString, string, string> | z.ZodEffects<z.ZodOptional<z.ZodString>, string | undefined, string | undefined>;
        constants: z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodNumber>>;
    }, "strip", z.ZodTypeAny, {
        latexPackages: string[] | "all";
        constants: Record<string, number>;
        latexFontUrl?: string | undefined;
    }, {
        latexPackages?: string[] | "all" | undefined;
        latexFontUrl?: string | undefined;
        constants?: Record<string, number> | undefined;
    }>>>;
    UI: z.ZodOptional<z.ZodDefault<z.ZodObject<{
        table: z.ZodDefault<z.ZodObject<{
            maxHeight: z.ZodEffects<z.ZodDefault<z.ZodUnion<[z.ZodString, z.ZodNumber]>>, string, string | number | undefined>;
        }, "strip", z.ZodTypeAny, {
            maxHeight: string;
        }, {
            maxHeight?: string | number | undefined;
        }>>;
        text: z.ZodDefault<z.ZodObject<{
            blockQuoteItalic: z.ZodDefault<z.ZodBoolean>;
            fontPaths: z.ZodDefault<z.ZodUnion<[z.ZodArray<z.ZodObject<{
                path: z.ZodString;
                weight: z.ZodUnion<[z.ZodLiteral<"100">, z.ZodLiteral<"200">, z.ZodLiteral<"300">, z.ZodLiteral<"400">, z.ZodLiteral<"500">, z.ZodLiteral<"600">, z.ZodLiteral<"700">, z.ZodLiteral<"800">, z.ZodLiteral<"900">]>;
                style: z.ZodUnion<[z.ZodLiteral<"italic">, z.ZodLiteral<"bold">, z.ZodLiteral<"normal">]>;
            }, "strip", z.ZodTypeAny, {
                weight: "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900";
                path: string;
                style: "bold" | "italic" | "normal";
            }, {
                weight: "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900";
                path: string;
                style: "bold" | "italic" | "normal";
            }>, "many">, z.ZodLiteral<"default">]>>;
        }, "strip", z.ZodTypeAny, {
            blockQuoteItalic: boolean;
            fontPaths: "default" | {
                weight: "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900";
                path: string;
                style: "bold" | "italic" | "normal";
            }[];
        }, {
            blockQuoteItalic?: boolean | undefined;
            fontPaths?: "default" | {
                weight: "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900";
                path: string;
                style: "bold" | "italic" | "normal";
            }[] | undefined;
        }>>;
        media: z.ZodDefault<z.ZodObject<{
            imageMap: z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodEffects<z.ZodString, string, string> | z.ZodEffects<z.ZodOptional<z.ZodString>, string | undefined, string | undefined>>>;
            includeDefaultImageMap: z.ZodDefault<z.ZodBoolean>;
            imageRemoteTest: z.ZodDefault<z.ZodArray<z.ZodType<RegExp, z.ZodTypeDef, RegExp>, "many">>;
        }, "strip", z.ZodTypeAny, {
            imageMap: Record<string, string | undefined>;
            includeDefaultImageMap: boolean;
            imageRemoteTest: RegExp[];
        }, {
            imageMap?: Record<string, string | undefined> | undefined;
            includeDefaultImageMap?: boolean | undefined;
            imageRemoteTest?: RegExp[] | undefined;
        }>>;
        colors: z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodUnion<[z.ZodObject<{
            dark: z.ZodEffects<z.ZodOptional<z.ZodString>, string | undefined, string | undefined>;
            light: z.ZodEffects<z.ZodOptional<z.ZodString>, string | undefined, string | undefined>;
        }, "strip", z.ZodTypeAny, {
            dark?: string | undefined;
            light?: string | undefined;
        }, {
            dark?: string | undefined;
            light?: string | undefined;
        }>, z.ZodEffects<z.ZodString, string | undefined, string>]>>>, {
            dark?: string | undefined;
            light?: string | undefined;
        } | undefined, string | {
            dark?: string | undefined;
            light?: string | undefined;
        } | null | undefined>>>;
        theme: z.ZodDefault<z.ZodUnion<[z.ZodLiteral<"blue">, z.ZodLiteral<"gray">, z.ZodLiteral<"green">, z.ZodLiteral<"neutral">, z.ZodLiteral<"orange">, z.ZodLiteral<"red">, z.ZodLiteral<"rose">, z.ZodLiteral<"slate">, z.ZodLiteral<"stone">, z.ZodLiteral<"violet">, z.ZodLiteral<"yellow">, z.ZodLiteral<"zinc">, z.ZodLiteral<"ulld">]>>;
        autoApplyMdxTitles: z.ZodDefault<z.ZodBoolean>;
    }, "strip", z.ZodTypeAny, {
        table: {
            maxHeight: string;
        };
        text: {
            blockQuoteItalic: boolean;
            fontPaths: "default" | {
                weight: "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900";
                path: string;
                style: "bold" | "italic" | "normal";
            }[];
        };
        media: {
            imageMap: Record<string, string | undefined>;
            includeDefaultImageMap: boolean;
            imageRemoteTest: RegExp[];
        };
        theme: "ulld" | "red" | "orange" | "yellow" | "green" | "blue" | "rose" | "slate" | "gray" | "stone" | "zinc" | "neutral" | "violet";
        colors: Record<string, {
            dark?: string | undefined;
            light?: string | undefined;
        } | undefined>;
        autoApplyMdxTitles: boolean;
    }, {
        table?: {
            maxHeight?: string | number | undefined;
        } | undefined;
        text?: {
            blockQuoteItalic?: boolean | undefined;
            fontPaths?: "default" | {
                weight: "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900";
                path: string;
                style: "bold" | "italic" | "normal";
            }[] | undefined;
        } | undefined;
        media?: {
            imageMap?: Record<string, string | undefined> | undefined;
            includeDefaultImageMap?: boolean | undefined;
            imageRemoteTest?: RegExp[] | undefined;
        } | undefined;
        theme?: "ulld" | "red" | "orange" | "yellow" | "green" | "blue" | "rose" | "slate" | "gray" | "stone" | "zinc" | "neutral" | "violet" | undefined;
        colors?: Record<string, string | {
            dark?: string | undefined;
            light?: string | undefined;
        } | null | undefined> | undefined;
        autoApplyMdxTitles?: boolean | undefined;
    }>>>;
    slots: z.ZodOptional<z.ZodDefault<z.ZodObject<Record<keyof import("../../developer/slotMapRootType.js").SlotMap, z.ZodTypeAny>, "strip", z.ZodTypeAny, {
        navigation?: any;
        bibliography?: any;
        math?: any;
        snippets?: any;
        dashboard?: any;
        taskManager?: any;
        UI?: any;
        pdf?: any;
        editor?: any;
        form?: any;
        commandPalette?: any;
    }, {
        navigation?: any;
        bibliography?: any;
        math?: any;
        snippets?: any;
        dashboard?: any;
        taskManager?: any;
        UI?: any;
        pdf?: any;
        editor?: any;
        form?: any;
        commandPalette?: any;
    }>>>;
    fsRoot: z.ZodOptional<z.ZodEffects<z.ZodString, string, string>>;
    build: z.ZodOptional<z.ZodDefault<z.ZodObject<{
        database: z.ZodDefault<z.ZodEffects<z.ZodDefault<z.ZodObject<{
            type: z.ZodDefault<z.ZodEnum<["postgres", "sqlite"]>>;
            postgres: z.ZodEffects<z.ZodEffects<z.ZodDefault<z.ZodObject<{
                port: z.ZodDefault<z.ZodNumber>;
                dbName: z.ZodDefault<z.ZodString>;
                connectionURI: z.ZodDefault<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                port: number;
                dbName: string;
                connectionURI: string;
            }, {
                port?: number | undefined;
                dbName?: string | undefined;
                connectionURI?: string | undefined;
            }>>, {
                port: number;
                dbName: string;
                connectionURI: string;
            }, {
                port?: number | undefined;
                dbName?: string | undefined;
                connectionURI?: string | undefined;
            } | undefined>, {
                connectionURI: string;
                port?: undefined;
                dbName?: undefined;
            } | {
                port: number;
                dbName: string;
                connectionURI?: undefined;
            }, {
                port?: number | undefined;
                dbName?: string | undefined;
                connectionURI?: string | undefined;
            } | undefined>;
            prioritize: z.ZodDefault<z.ZodUnion<[z.ZodLiteral<"speed">, z.ZodLiteral<"size">]>>;
        }, "strip", z.ZodTypeAny, {
            type: "postgres" | "sqlite";
            postgres: {
                connectionURI: string;
                port?: undefined;
                dbName?: undefined;
            } | {
                port: number;
                dbName: string;
                connectionURI?: undefined;
            };
            prioritize: "size" | "speed";
        }, {
            type?: "postgres" | "sqlite" | undefined;
            postgres?: {
                port?: number | undefined;
                dbName?: string | undefined;
                connectionURI?: string | undefined;
            } | undefined;
            prioritize?: "size" | "speed" | undefined;
        }>>, {
            type: "postgres" | "sqlite";
            postgres: {
                connectionURI: string;
                port?: undefined;
                dbName?: undefined;
            } | {
                port: number;
                dbName: string;
                connectionURI?: undefined;
            };
            prioritize: "size" | "speed";
        }, {
            type?: "postgres" | "sqlite" | undefined;
            postgres?: {
                port?: number | undefined;
                dbName?: string | undefined;
                connectionURI?: string | undefined;
            } | undefined;
            prioritize?: "size" | "speed" | undefined;
        } | undefined>>;
        additionalUserContent: z.ZodDefault<z.ZodObject<{
            css: z.ZodOptional<z.ZodString>;
            favicon: z.ZodOptional<z.ZodEffects<z.ZodString, string, string>>;
            logo: z.ZodOptional<z.ZodEffects<z.ZodString, string, string>>;
        }, "strip", z.ZodTypeAny, {
            css?: string | undefined;
            logo?: string | undefined;
            favicon?: string | undefined;
        }, {
            css?: string | undefined;
            logo?: string | undefined;
            favicon?: string | undefined;
        }>>;
    }, "strip", z.ZodTypeAny, {
        database: {
            type: "postgres" | "sqlite";
            postgres: {
                connectionURI: string;
                port?: undefined;
                dbName?: undefined;
            } | {
                port: number;
                dbName: string;
                connectionURI?: undefined;
            };
            prioritize: "size" | "speed";
        };
        additionalUserContent: {
            css?: string | undefined;
            logo?: string | undefined;
            favicon?: string | undefined;
        };
    }, {
        database?: {
            type?: "postgres" | "sqlite" | undefined;
            postgres?: {
                port?: number | undefined;
                dbName?: string | undefined;
                connectionURI?: string | undefined;
            } | undefined;
            prioritize?: "size" | "speed" | undefined;
        } | undefined;
        additionalUserContent?: {
            css?: string | undefined;
            logo?: string | undefined;
            favicon?: string | undefined;
        } | undefined;
    }>>>;
    autoTag: z.ZodOptional<z.ZodDefault<z.ZodArray<z.ZodObject<{
        path: z.ZodString;
        tag: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        tag: string;
        path: string;
    }, {
        tag: string;
        path: string;
    }>, "many">>>;
    autoTopic: z.ZodOptional<z.ZodDefault<z.ZodArray<z.ZodObject<{
        path: z.ZodString;
        topic: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        path: string;
        topic: string;
    }, {
        path: string;
        topic: string;
    }>, "many">>>;
    autoSubject: z.ZodOptional<z.ZodDefault<z.ZodArray<z.ZodObject<{
        path: z.ZodString;
        subject: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        path: string;
        subject: string;
    }, {
        path: string;
        subject: string;
    }>, "many">>>;
    alwaysPreferFs: z.ZodOptional<z.ZodDefault<z.ZodBoolean>>;
    ignoreFilepaths: z.ZodOptional<z.ZodEffects<z.ZodDefault<z.ZodArray<z.ZodUnion<[z.ZodType<RegExp, z.ZodTypeDef, RegExp>, z.ZodString, z.ZodObject<{
        original: z.ZodString;
        regex: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodType<RegExp, z.ZodTypeDef, RegExp>]>, RegExp, string | RegExp>;
    }, "strip", z.ZodTypeAny, {
        regex: RegExp;
        original: string;
    }, {
        regex: string | RegExp;
        original: string;
    }>]>, "many">>, string[], (string | RegExp | {
        regex: string | RegExp;
        original: string;
    })[] | undefined>>;
    tempDir: z.ZodOptional<z.ZodEffects<z.ZodDefault<z.ZodString>, string, string | undefined>>;
    generatedDir: z.ZodOptional<z.ZodEffects<z.ZodDefault<z.ZodString>, string, string | undefined>>;
    ignorePreferFsExtensions: z.ZodOptional<z.ZodDefault<z.ZodArray<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodType<RegExp, z.ZodTypeDef, RegExp>, z.ZodObject<{
        original: z.ZodString;
        regex: z.ZodType<RegExp, z.ZodTypeDef, RegExp>;
    }, "strip", z.ZodTypeAny, {
        regex: RegExp;
        original: string;
    }, {
        regex: RegExp;
        original: string;
    }>]>, import("../configUtilitySchemas.js").ParsedRegExpField, string | RegExp | {
        regex: RegExp;
        original: string;
    }>, "many">>>;
    fileTypePriority: z.ZodOptional<z.ZodDefault<z.ZodArray<z.ZodUnion<[z.ZodUnion<[z.ZodLiteral<".mdx">, z.ZodLiteral<".md">, z.ZodLiteral<".ipynb">]>, z.ZodUnion<[z.ZodLiteral<".csv">, z.ZodLiteral<".tsv">, z.ZodLiteral<".excel">, z.ZodLiteral<".numpy">, z.ZodLiteral<".html">, z.ZodLiteral<".pickle">, z.ZodLiteral<".db">, z.ZodLiteral<".sql">, z.ZodLiteral<".pdf">, z.ZodLiteral<".json">, z.ZodLiteral<".tex">, z.ZodLiteral<".hdf5">]>]>, "many">>>;
    noteTypes: z.ZodEffects<z.ZodDefault<z.ZodArray<z.ZodEffects<z.ZodObject<{
        label: z.ZodString;
        icon: z.ZodDefault<z.ZodEffects<z.ZodString, string, string>>;
        UI: z.ZodDefault<z.ZodDefault<z.ZodObject<{
            styles: z.ZodDefault<z.ZodObject<{
                dark: z.ZodDefault<z.ZodObject<{
                    bg: z.ZodOptional<z.ZodString>;
                    fg: z.ZodOptional<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    bg?: string | undefined;
                    fg?: string | undefined;
                }, {
                    bg?: string | undefined;
                    fg?: string | undefined;
                }>>;
                light: z.ZodDefault<z.ZodObject<{
                    bg: z.ZodOptional<z.ZodString>;
                    fg: z.ZodOptional<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    bg?: string | undefined;
                    fg?: string | undefined;
                }, {
                    bg?: string | undefined;
                    fg?: string | undefined;
                }>>;
            }, "strip", z.ZodTypeAny, {
                dark: {
                    bg?: string | undefined;
                    fg?: string | undefined;
                };
                light: {
                    bg?: string | undefined;
                    fg?: string | undefined;
                };
            }, {
                dark?: {
                    bg?: string | undefined;
                    fg?: string | undefined;
                } | undefined;
                light?: {
                    bg?: string | undefined;
                    fg?: string | undefined;
                } | undefined;
            }>>;
        }, "strip", z.ZodTypeAny, {
            styles: {
                dark: {
                    bg?: string | undefined;
                    fg?: string | undefined;
                };
                light: {
                    bg?: string | undefined;
                    fg?: string | undefined;
                };
            };
        }, {
            styles?: {
                dark?: {
                    bg?: string | undefined;
                    fg?: string | undefined;
                } | undefined;
                light?: {
                    bg?: string | undefined;
                    fg?: string | undefined;
                } | undefined;
            } | undefined;
        }>>>;
        fs: z.ZodEffects<z.ZodString, string, string>;
        id: z.ZodOptional<z.ZodString>;
        docType: z.ZodOptional<z.ZodEffects<z.ZodString, string, string>>;
        filePathPattern: z.ZodOptional<z.ZodString>;
        matchWeight: z.ZodDefault<z.ZodNumber>;
        url: z.ZodOptional<z.ZodEffects<z.ZodString, string, string>>;
        urlQuery: z.ZodDefault<z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnion<[z.ZodString, z.ZodArray<z.ZodString, "many">, z.ZodNumber, z.ZodArray<z.ZodNumber, "many">]>>>>;
        keywords: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
        topicLabel: z.ZodOptional<z.ZodString>;
        subjectLabel: z.ZodOptional<z.ZodString>;
        autoTag: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
        autoTopic: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
        autoSubject: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
        inSidebar: z.ZodDefault<z.ZodBoolean>;
        inNavbar: z.ZodDefault<z.ZodBoolean>;
    }, "strip", z.ZodTypeAny, {
        label: string;
        icon: string;
        UI: {
            styles: {
                dark: {
                    bg?: string | undefined;
                    fg?: string | undefined;
                };
                light: {
                    bg?: string | undefined;
                    fg?: string | undefined;
                };
            };
        };
        fs: string;
        matchWeight: number;
        urlQuery: Record<string, string | number | string[] | number[]>;
        keywords: string[];
        autoTag: string[];
        autoTopic: string[];
        autoSubject: string[];
        inSidebar: boolean;
        inNavbar: boolean;
        id?: string | undefined;
        docType?: string | undefined;
        filePathPattern?: string | undefined;
        url?: string | undefined;
        topicLabel?: string | undefined;
        subjectLabel?: string | undefined;
    }, {
        label: string;
        fs: string;
        icon?: string | undefined;
        UI?: {
            styles?: {
                dark?: {
                    bg?: string | undefined;
                    fg?: string | undefined;
                } | undefined;
                light?: {
                    bg?: string | undefined;
                    fg?: string | undefined;
                } | undefined;
            } | undefined;
        } | undefined;
        id?: string | undefined;
        docType?: string | undefined;
        filePathPattern?: string | undefined;
        matchWeight?: number | undefined;
        url?: string | undefined;
        urlQuery?: Record<string, string | number | string[] | number[]> | undefined;
        keywords?: string[] | undefined;
        topicLabel?: string | undefined;
        subjectLabel?: string | undefined;
        autoTag?: string[] | undefined;
        autoTopic?: string[] | undefined;
        autoSubject?: string[] | undefined;
        inSidebar?: boolean | undefined;
        inNavbar?: boolean | undefined;
    }>, {
        docType: string;
        id: string;
        url: string;
        label: string;
        icon: string;
        UI: {
            styles: {
                dark: {
                    bg?: string | undefined;
                    fg?: string | undefined;
                };
                light: {
                    bg?: string | undefined;
                    fg?: string | undefined;
                };
            };
        };
        fs: string;
        matchWeight: number;
        urlQuery: Record<string, string | number | string[] | number[]>;
        keywords: string[];
        autoTag: string[];
        autoTopic: string[];
        autoSubject: string[];
        inSidebar: boolean;
        inNavbar: boolean;
        filePathPattern?: string | undefined;
        topicLabel?: string | undefined;
        subjectLabel?: string | undefined;
    }, {
        label: string;
        fs: string;
        icon?: string | undefined;
        UI?: {
            styles?: {
                dark?: {
                    bg?: string | undefined;
                    fg?: string | undefined;
                } | undefined;
                light?: {
                    bg?: string | undefined;
                    fg?: string | undefined;
                } | undefined;
            } | undefined;
        } | undefined;
        id?: string | undefined;
        docType?: string | undefined;
        filePathPattern?: string | undefined;
        matchWeight?: number | undefined;
        url?: string | undefined;
        urlQuery?: Record<string, string | number | string[] | number[]> | undefined;
        keywords?: string[] | undefined;
        topicLabel?: string | undefined;
        subjectLabel?: string | undefined;
        autoTag?: string[] | undefined;
        autoTopic?: string[] | undefined;
        autoSubject?: string[] | undefined;
        inSidebar?: boolean | undefined;
        inNavbar?: boolean | undefined;
    }>, "many">>, {
        docType: string;
        id: string;
        url: string;
        label: string;
        icon: string;
        UI: {
            styles: {
                dark: {
                    bg?: string | undefined;
                    fg?: string | undefined;
                };
                light: {
                    bg?: string | undefined;
                    fg?: string | undefined;
                };
            };
        };
        fs: string;
        matchWeight: number;
        urlQuery: Record<string, string | number | string[] | number[]>;
        keywords: string[];
        autoTag: string[];
        autoTopic: string[];
        autoSubject: string[];
        inSidebar: boolean;
        inNavbar: boolean;
        filePathPattern?: string | undefined;
        topicLabel?: string | undefined;
        subjectLabel?: string | undefined;
    }[], {
        label: string;
        fs: string;
        icon?: string | undefined;
        UI?: {
            styles?: {
                dark?: {
                    bg?: string | undefined;
                    fg?: string | undefined;
                } | undefined;
                light?: {
                    bg?: string | undefined;
                    fg?: string | undefined;
                } | undefined;
            } | undefined;
        } | undefined;
        id?: string | undefined;
        docType?: string | undefined;
        filePathPattern?: string | undefined;
        matchWeight?: number | undefined;
        url?: string | undefined;
        urlQuery?: Record<string, string | number | string[] | number[]> | undefined;
        keywords?: string[] | undefined;
        topicLabel?: string | undefined;
        subjectLabel?: string | undefined;
        autoTag?: string[] | undefined;
        autoTopic?: string[] | undefined;
        autoSubject?: string[] | undefined;
        inSidebar?: boolean | undefined;
        inNavbar?: boolean | undefined;
    }[] | undefined>;
    bibPath: z.ZodOptional<z.ZodEffects<z.ZodDefault<z.ZodString>, string, string | undefined>>;
    cslPath: z.ZodOptional<z.ZodEffects<z.ZodOptional<z.ZodString>, string | undefined, string | undefined>>;
    dateHandling: z.ZodOptional<z.ZodDefault<z.ZodObject<{
        enableAdvancedFormat: z.ZodDefault<z.ZodBoolean>;
        format: z.ZodDefault<z.ZodUnion<[z.ZodString, z.ZodObject<{
            short: z.ZodDefault<z.ZodString>;
            long: z.ZodDefault<z.ZodString>;
            withTime: z.ZodDefault<z.ZodString>;
            timeOnly: z.ZodDefault<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            short: string;
            long: string;
            withTime: string;
            timeOnly: string;
        }, {
            short?: string | undefined;
            long?: string | undefined;
            withTime?: string | undefined;
            timeOnly?: string | undefined;
        }>]>>;
        defaultTimeDisplayType: z.ZodDefault<z.ZodUnion<[z.ZodLiteral<"analog">, z.ZodLiteral<"summarized">, z.ZodLiteral<"descriptive">]>>;
        defaultTimeZone: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        enableAdvancedFormat: boolean;
        format: string | {
            short: string;
            long: string;
            withTime: string;
            timeOnly: string;
        };
        defaultTimeDisplayType: "summarized" | "analog" | "descriptive";
        defaultTimeZone?: string | undefined;
    }, {
        enableAdvancedFormat?: boolean | undefined;
        format?: string | {
            short?: string | undefined;
            long?: string | undefined;
            withTime?: string | undefined;
            timeOnly?: string | undefined;
        } | undefined;
        defaultTimeDisplayType?: "summarized" | "analog" | "descriptive" | undefined;
        defaultTimeZone?: string | undefined;
    }>>>;
    linkAliases: z.ZodOptional<z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodString>>>;
    features: z.ZodOptional<z.ZodOptional<z.ZodObject<{
        enabled: z.ZodOptional<z.ZodDefault<z.ZodObject<{
            commandPalette: z.ZodDefault<z.ZodBoolean>;
            tikz: z.ZodDefault<z.ZodBoolean>;
        }, "strip", z.ZodTypeAny, {
            commandPalette: boolean;
            tikz: boolean;
        }, {
            commandPalette?: boolean | undefined;
            tikz?: boolean | undefined;
        }>>>;
        pages: z.ZodOptional<z.ZodObject<{
            equations: z.ZodOptional<z.ZodDefault<z.ZodBoolean>>;
            snippets: z.ZodOptional<z.ZodDefault<z.ZodBoolean>>;
            calendar: z.ZodOptional<z.ZodDefault<z.ZodBoolean>>;
            bibliography: z.ZodOptional<z.ZodDefault<z.ZodBoolean>>;
            taskManager: z.ZodOptional<z.ZodDefault<z.ZodBoolean>>;
        }, "strip", z.ZodTypeAny, {
            calendar?: boolean | undefined;
            bibliography?: boolean | undefined;
            snippets?: boolean | undefined;
            taskManager?: boolean | undefined;
            equations?: boolean | undefined;
        }, {
            calendar?: boolean | undefined;
            bibliography?: boolean | undefined;
            snippets?: boolean | undefined;
            taskManager?: boolean | undefined;
            equations?: boolean | undefined;
        }>>;
    }, "strip", z.ZodTypeAny, {
        pages?: {
            calendar?: boolean | undefined;
            bibliography?: boolean | undefined;
            snippets?: boolean | undefined;
            taskManager?: boolean | undefined;
            equations?: boolean | undefined;
        } | undefined;
        enabled?: {
            commandPalette: boolean;
            tikz: boolean;
        } | undefined;
    }, {
        pages?: {
            calendar?: boolean | undefined;
            bibliography?: boolean | undefined;
            snippets?: boolean | undefined;
            taskManager?: boolean | undefined;
            equations?: boolean | undefined;
        } | undefined;
        enabled?: {
            commandPalette?: boolean | undefined;
            tikz?: boolean | undefined;
        } | undefined;
    }>>>;
    plotting: z.ZodOptional<z.ZodDefault<z.ZodObject<{
        plotColorList: z.ZodDefault<z.ZodUnion<[z.ZodArray<z.ZodString, "many">, z.ZodObject<{
            dark: z.ZodArray<z.ZodString, "many">;
            light: z.ZodArray<z.ZodString, "many">;
        }, "strip", z.ZodTypeAny, {
            dark: string[];
            light: string[];
        }, {
            dark: string[];
            light: string[];
        }>]>>;
        plotColorCycleMethod: z.ZodDefault<z.ZodUnion<[z.ZodLiteral<"inOrder">, z.ZodLiteral<"random">]>>;
    }, "strip", z.ZodTypeAny, {
        plotColorList: string[] | {
            dark: string[];
            light: string[];
        };
        plotColorCycleMethod: "inOrder" | "random";
    }, {
        plotColorList?: string[] | {
            dark: string[];
            light: string[];
        } | undefined;
        plotColorCycleMethod?: "inOrder" | "random" | undefined;
    }>>>;
    credentials: z.ZodOptional<z.ZodDefault<z.ZodObject<{
        googleServiceAccountJsonPath: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        googleServiceAccountJsonPath?: string | undefined;
    }, {
        googleServiceAccountJsonPath?: string | undefined;
    }>>>;
    performance: z.ZodOptional<z.ZodDefault<z.ZodObject<{
        latexParsingDebounceTimeout: z.ZodDefault<z.ZodNumber>;
        mdxParsingDebounceTimeout: z.ZodDefault<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        latexParsingDebounceTimeout: number;
        mdxParsingDebounceTimeout: number;
    }, {
        latexParsingDebounceTimeout?: number | undefined;
        mdxParsingDebounceTimeout?: number | undefined;
    }>>>;
    meta: z.ZodOptional<z.ZodDefault<z.ZodObject<{
        title: z.ZodDefault<z.ZodString>;
        desc: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        title: string;
        desc?: string | undefined;
    }, {
        title?: string | undefined;
        desc?: string | undefined;
    }>>>;
    plugins: z.ZodOptional<z.ZodEffects<z.ZodDefault<z.ZodUnion<[z.ZodObject<{
        name: z.ZodString;
        version: z.ZodDefault<z.ZodString>;
        parserIndex: z.ZodDefault<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        name: string;
        version: string;
        parserIndex: number;
    }, {
        name: string;
        version?: string | undefined;
        parserIndex?: number | undefined;
    }>, z.ZodArray<z.ZodObject<{
        name: z.ZodString;
        version: z.ZodDefault<z.ZodString>;
        parserIndex: z.ZodDefault<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        name: string;
        version: string;
        parserIndex: number;
    }, {
        name: string;
        version?: string | undefined;
        parserIndex?: number | undefined;
    }>, "many">, z.ZodString, z.ZodArray<z.ZodString, "many">]>>, ({
        name: string;
        version: string;
        parserIndex: number;
    } | {
        name: string;
        version: string;
    })[], string | string[] | {
        name: string;
        version?: string | undefined;
        parserIndex?: number | undefined;
    } | {
        name: string;
        version?: string | undefined;
        parserIndex?: number | undefined;
    }[] | undefined>>;
}, "strip", z.ZodTypeAny, {
    noteTypes: {
        docType: string;
        id: string;
        url: string;
        label: string;
        icon: string;
        UI: {
            styles: {
                dark: {
                    bg?: string | undefined;
                    fg?: string | undefined;
                };
                light: {
                    bg?: string | undefined;
                    fg?: string | undefined;
                };
            };
        };
        fs: string;
        matchWeight: number;
        urlQuery: Record<string, string | number | string[] | number[]>;
        keywords: string[];
        autoTag: string[];
        autoTopic: string[];
        autoSubject: string[];
        inSidebar: boolean;
        inNavbar: boolean;
        filePathPattern?: string | undefined;
        topicLabel?: string | undefined;
        subjectLabel?: string | undefined;
    }[];
    code?: {
        editor: {
            defaultLangauge: string;
            useVimMode: boolean;
        };
        theme: {
            dark: "andromeeda" | "aurora-x" | "ayu-dark" | "catppuccin-frappe" | "catppuccin-latte" | "catppuccin-macchiato" | "catppuccin-mocha" | "dark-plus" | "dracula" | "dracula-soft" | "github-dark" | "github-dark-dimmed" | "github-light" | "light-plus" | "material-theme" | "material-theme-darker" | "material-theme-lighter" | "material-theme-ocean" | "material-theme-palenight" | "min-dark" | "min-light" | "monokai" | "night-owl" | "nord" | "one-dark-pro" | "poimandres" | "red" | "rose-pine" | "rose-pine-dawn" | "rose-pine-moon" | "slack-dark" | "slack-ochin" | "solarized-dark" | "solarized-light" | "synthwave-84" | "tokyo-night" | "vesper" | "vitesse-black" | "vitesse-dark" | "vitesse-light";
            light: "andromeeda" | "aurora-x" | "ayu-dark" | "catppuccin-frappe" | "catppuccin-latte" | "catppuccin-macchiato" | "catppuccin-mocha" | "dark-plus" | "dracula" | "dracula-soft" | "github-dark" | "github-dark-dimmed" | "github-light" | "light-plus" | "material-theme" | "material-theme-darker" | "material-theme-lighter" | "material-theme-ocean" | "material-theme-palenight" | "min-dark" | "min-light" | "monokai" | "night-owl" | "nord" | "one-dark-pro" | "poimandres" | "red" | "rose-pine" | "rose-pine-dawn" | "rose-pine-moon" | "slack-dark" | "slack-ochin" | "solarized-dark" | "solarized-light" | "synthwave-84" | "tokyo-night" | "vesper" | "vitesse-black" | "vitesse-dark" | "vitesse-light";
        };
        syntaxHighlighting: {
            transformers: {
                regexHighlight: boolean;
                lineHighlight: boolean;
                lineFocus: boolean;
                lineErrorLevel: boolean;
                lineDiff: boolean;
            };
            defaultLanguage: {
                inline: "coffee" | "diff" | "fish" | "move" | "shell" | "turtle" | "swift" | "python" | "markdown" | "kotlin" | "css" | "latex" | "fs" | "json" | "rel" | "mdx" | "md" | "csv" | "html" | "abap" | "actionscript-3" | "ada" | "angular-html" | "angular-ts" | "apache" | "apex" | "apl" | "applescript" | "ara" | "asm" | "astro" | "awk" | "ballerina" | "bat" | "beancount" | "berry" | "bibtex" | "bicep" | "blade" | "c" | "cadence" | "clarity" | "clojure" | "cmake" | "cobol" | "codeql" | "cpp" | "crystal" | "csharp" | "cue" | "cypher" | "d" | "dart" | "dax" | "docker" | "dream-maker" | "elixir" | "elm" | "erb" | "erlang" | "fortran-fixed-form" | "fortran-free-form" | "fsharp" | "gdresource" | "gdscript" | "gdshader" | "gherkin" | "git-commit" | "git-rebase" | "glimmer-js" | "glimmer-ts" | "glsl" | "gnuplot" | "go" | "graphql" | "groovy" | "hack" | "haml" | "handlebars" | "haskell" | "hcl" | "hjson" | "hlsl" | "html-derivative" | "http" | "imba" | "ini" | "java" | "javascript" | "jinja" | "jison" | "json5" | "jsonc" | "jsonl" | "jsonnet" | "jssm" | "jsx" | "julia" | "kusto" | "less" | "liquid" | "lisp" | "logo" | "lua" | "make" | "marko" | "matlab" | "mdc" | "mermaid" | "mojo" | "narrat" | "nextflow" | "nginx" | "nim" | "nix" | "nushell" | "objective-c" | "objective-cpp" | "ocaml" | "pascal" | "perl" | "php" | "plsql" | "postcss" | "powerquery" | "powershell" | "prisma" | "prolog" | "proto" | "pug" | "puppet" | "purescript" | "r" | "raku" | "razor" | "reg" | "riscv" | "rst" | "ruby" | "rust" | "sas" | "sass" | "scala" | "scheme" | "scss" | "shaderlab" | "shellscript" | "shellsession" | "smalltalk" | "solidity" | "sparql" | "splunk" | "sql" | "ssh-config" | "stata" | "stylus" | "svelte" | "system-verilog" | "tasl" | "tcl" | "terraform" | "tex" | "toml" | "tsx" | "twig" | "typescript" | "typst" | "v" | "vb" | "verilog" | "vhdl" | "viml" | "vue" | "vue-html" | "vyper" | "wasm" | "wenyan" | "wgsl" | "wolfram" | "xml" | "xsl" | "yaml" | "zenscript" | "zig" | "batch" | "be" | "cdc" | "clj" | "ql" | "coffeescript" | "c++" | "c#" | "cs" | "cql" | "dockerfile" | "erl" | "f" | "for" | "f77" | "f90" | "f95" | "f03" | "f08" | "f18" | "f#" | "gjs" | "gts" | "gql" | "hbs" | "hs" | "properties" | "js" | "fsl" | "kt" | "kts" | "kql" | "makefile" | "nar" | "nf" | "nu" | "objc" | "ps" | "ps1" | "jade" | "py" | "perl6" | "rb" | "rs" | "shader" | "bash" | "sh" | "zsh" | "console" | "spl" | "styl" | "tf" | "tfvars" | "ts" | "typ" | "cmd" | "vim" | "vimscript" | "vy" | "文言" | "wl" | "yml";
                block: "coffee" | "diff" | "fish" | "move" | "shell" | "turtle" | "swift" | "python" | "markdown" | "kotlin" | "css" | "latex" | "fs" | "json" | "rel" | "mdx" | "md" | "csv" | "html" | "abap" | "actionscript-3" | "ada" | "angular-html" | "angular-ts" | "apache" | "apex" | "apl" | "applescript" | "ara" | "asm" | "astro" | "awk" | "ballerina" | "bat" | "beancount" | "berry" | "bibtex" | "bicep" | "blade" | "c" | "cadence" | "clarity" | "clojure" | "cmake" | "cobol" | "codeql" | "cpp" | "crystal" | "csharp" | "cue" | "cypher" | "d" | "dart" | "dax" | "docker" | "dream-maker" | "elixir" | "elm" | "erb" | "erlang" | "fortran-fixed-form" | "fortran-free-form" | "fsharp" | "gdresource" | "gdscript" | "gdshader" | "gherkin" | "git-commit" | "git-rebase" | "glimmer-js" | "glimmer-ts" | "glsl" | "gnuplot" | "go" | "graphql" | "groovy" | "hack" | "haml" | "handlebars" | "haskell" | "hcl" | "hjson" | "hlsl" | "html-derivative" | "http" | "imba" | "ini" | "java" | "javascript" | "jinja" | "jison" | "json5" | "jsonc" | "jsonl" | "jsonnet" | "jssm" | "jsx" | "julia" | "kusto" | "less" | "liquid" | "lisp" | "logo" | "lua" | "make" | "marko" | "matlab" | "mdc" | "mermaid" | "mojo" | "narrat" | "nextflow" | "nginx" | "nim" | "nix" | "nushell" | "objective-c" | "objective-cpp" | "ocaml" | "pascal" | "perl" | "php" | "plsql" | "postcss" | "powerquery" | "powershell" | "prisma" | "prolog" | "proto" | "pug" | "puppet" | "purescript" | "r" | "raku" | "razor" | "reg" | "riscv" | "rst" | "ruby" | "rust" | "sas" | "sass" | "scala" | "scheme" | "scss" | "shaderlab" | "shellscript" | "shellsession" | "smalltalk" | "solidity" | "sparql" | "splunk" | "sql" | "ssh-config" | "stata" | "stylus" | "svelte" | "system-verilog" | "tasl" | "tcl" | "terraform" | "tex" | "toml" | "tsx" | "twig" | "typescript" | "typst" | "v" | "vb" | "verilog" | "vhdl" | "viml" | "vue" | "vue-html" | "vyper" | "wasm" | "wenyan" | "wgsl" | "wolfram" | "xml" | "xsl" | "yaml" | "zenscript" | "zig" | "batch" | "be" | "cdc" | "clj" | "ql" | "coffeescript" | "c++" | "c#" | "cs" | "cql" | "dockerfile" | "erl" | "f" | "for" | "f77" | "f90" | "f95" | "f03" | "f08" | "f18" | "f#" | "gjs" | "gts" | "gql" | "hbs" | "hs" | "properties" | "js" | "fsl" | "kt" | "kts" | "kql" | "makefile" | "nar" | "nf" | "nu" | "objc" | "ps" | "ps1" | "jade" | "py" | "perl6" | "rb" | "rs" | "shader" | "bash" | "sh" | "zsh" | "console" | "spl" | "styl" | "tf" | "tfvars" | "ts" | "typ" | "cmd" | "vim" | "vimscript" | "vy" | "文言" | "wl" | "yml";
            };
        };
    } | undefined;
    database?: {
        storeFormatted: boolean;
        removeIfNotPresentInFs: boolean;
    } | undefined;
    navigation?: {
        navbarBreakpoint: {
            full: number;
            minimal: number;
        };
        maxResultLength: {
            snippets: number;
            searchAll: number;
            equations: number;
            categories: number;
        };
        bookmarkLink: "none" | "sidebar" | "navbar" | "both";
        syncLink: "none" | "sidebar" | "navbar" | "both";
        darkmodeToggle: "none" | "sidebar" | "navbar" | "both";
        snippetsLink: "none" | "sidebar" | "navbar" | "both";
        navbarLinks: (string | {
            label: string;
            href?: string | undefined;
            icon?: string | undefined;
            onClick?: ((...args: unknown[]) => unknown) | undefined;
        })[];
        sidebarLinks: (string | {
            icon: string;
            label?: string | undefined;
            href?: string | undefined;
            onClick?: ((...args: unknown[]) => unknown) | undefined;
            Icon?: ((...args: unknown[]) => unknown) | undefined;
        })[];
        settings?: "none" | "sidebar" | "navbar" | "both" | undefined;
        fileSystemToggle?: "none" | "sidebar" | "navbar" | "both" | undefined;
        equationsLink?: "none" | "sidebar" | "navbar" | "both" | undefined;
        backupData?: "none" | "sidebar" | "navbar" | "both" | undefined;
    } | undefined;
    terminal?: {
        logLevel: "info" | "none" | "debug" | "verbose";
    } | undefined;
    jupyter?: {
        execute: boolean;
        environment: string;
        syntaxHighlightTheme: string;
        jupyterPort: number;
        initiallyFoldCells: boolean;
        kernel: string;
        jupyterReactProps: {
            collaborative: boolean;
            lite: boolean;
            serverUrls?: {
                baseUrl?: string | undefined;
                wsUrl?: string | undefined;
            } | undefined;
        };
        nbConvert: {
            conversionTimeout: number;
            execute: boolean;
            nbConvertTemplate: string;
            notebookOutputDir: string;
            nbconvertPath?: string | undefined;
            customConversionFunction?: {
                pdf?: ((args_0: string, args_1: string, ...args: unknown[]) => string) | undefined;
            } | undefined;
        };
        jupyterNotebookProps: {
            readOnly: boolean;
            cellMetadataPanel: boolean;
            cellSidebarMargin: number;
            bundledIPyWidgets: {
                name: string;
                module: string | Record<string, string>;
                version: string;
            }[];
            externalIPyWidgets: {
                name: string;
                version: string;
            }[];
            nbgrader: boolean;
            height?: string | undefined;
            maxHeight?: string | undefined;
        };
        cellInputWrappers: Record<string, {
            prefix: string;
            suffix: string;
        }>;
        jupyterToken?: string | undefined;
    } | undefined;
    math?: {
        latexPackages: string[] | "all";
        constants: Record<string, number>;
        latexFontUrl?: string | undefined;
    } | undefined;
    UI?: {
        table: {
            maxHeight: string;
        };
        text: {
            blockQuoteItalic: boolean;
            fontPaths: "default" | {
                weight: "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900";
                path: string;
                style: "bold" | "italic" | "normal";
            }[];
        };
        media: {
            imageMap: Record<string, string | undefined>;
            includeDefaultImageMap: boolean;
            imageRemoteTest: RegExp[];
        };
        theme: "ulld" | "red" | "orange" | "yellow" | "green" | "blue" | "rose" | "slate" | "gray" | "stone" | "zinc" | "neutral" | "violet";
        colors: Record<string, {
            dark?: string | undefined;
            light?: string | undefined;
        } | undefined>;
        autoApplyMdxTitles: boolean;
    } | undefined;
    slots?: {
        navigation?: any;
        bibliography?: any;
        math?: any;
        snippets?: any;
        dashboard?: any;
        taskManager?: any;
        UI?: any;
        pdf?: any;
        editor?: any;
        form?: any;
        commandPalette?: any;
    } | undefined;
    fsRoot?: string | undefined;
    build?: {
        database: {
            type: "postgres" | "sqlite";
            postgres: {
                connectionURI: string;
                port?: undefined;
                dbName?: undefined;
            } | {
                port: number;
                dbName: string;
                connectionURI?: undefined;
            };
            prioritize: "size" | "speed";
        };
        additionalUserContent: {
            css?: string | undefined;
            logo?: string | undefined;
            favicon?: string | undefined;
        };
    } | undefined;
    autoTag?: {
        tag: string;
        path: string;
    }[] | undefined;
    autoTopic?: {
        path: string;
        topic: string;
    }[] | undefined;
    autoSubject?: {
        path: string;
        subject: string;
    }[] | undefined;
    alwaysPreferFs?: boolean | undefined;
    ignoreFilepaths?: string[] | undefined;
    tempDir?: string | undefined;
    generatedDir?: string | undefined;
    ignorePreferFsExtensions?: import("../configUtilitySchemas.js").ParsedRegExpField[] | undefined;
    fileTypePriority?: (".mdx" | ".ipynb" | ".csv" | ".tsv" | ".excel" | ".numpy" | ".html" | ".pickle" | ".db" | ".sql" | ".pdf" | ".json" | ".tex" | ".hdf5" | ".md")[] | undefined;
    bibPath?: string | undefined;
    cslPath?: string | undefined;
    dateHandling?: {
        enableAdvancedFormat: boolean;
        format: string | {
            short: string;
            long: string;
            withTime: string;
            timeOnly: string;
        };
        defaultTimeDisplayType: "summarized" | "analog" | "descriptive";
        defaultTimeZone?: string | undefined;
    } | undefined;
    linkAliases?: Record<string, string> | undefined;
    features?: {
        pages?: {
            calendar?: boolean | undefined;
            bibliography?: boolean | undefined;
            snippets?: boolean | undefined;
            taskManager?: boolean | undefined;
            equations?: boolean | undefined;
        } | undefined;
        enabled?: {
            commandPalette: boolean;
            tikz: boolean;
        } | undefined;
    } | undefined;
    plotting?: {
        plotColorList: string[] | {
            dark: string[];
            light: string[];
        };
        plotColorCycleMethod: "inOrder" | "random";
    } | undefined;
    credentials?: {
        googleServiceAccountJsonPath?: string | undefined;
    } | undefined;
    performance?: {
        latexParsingDebounceTimeout: number;
        mdxParsingDebounceTimeout: number;
    } | undefined;
    meta?: {
        title: string;
        desc?: string | undefined;
    } | undefined;
    plugins?: ({
        name: string;
        version: string;
        parserIndex: number;
    } | {
        name: string;
        version: string;
    })[] | undefined;
}, {
    code?: {
        editor?: {
            defaultLangauge?: string | undefined;
            useVimMode?: boolean | undefined;
        } | undefined;
        theme?: {
            dark?: "andromeeda" | "aurora-x" | "ayu-dark" | "catppuccin-frappe" | "catppuccin-latte" | "catppuccin-macchiato" | "catppuccin-mocha" | "dark-plus" | "dracula" | "dracula-soft" | "github-dark" | "github-dark-dimmed" | "github-light" | "light-plus" | "material-theme" | "material-theme-darker" | "material-theme-lighter" | "material-theme-ocean" | "material-theme-palenight" | "min-dark" | "min-light" | "monokai" | "night-owl" | "nord" | "one-dark-pro" | "poimandres" | "red" | "rose-pine" | "rose-pine-dawn" | "rose-pine-moon" | "slack-dark" | "slack-ochin" | "solarized-dark" | "solarized-light" | "synthwave-84" | "tokyo-night" | "vesper" | "vitesse-black" | "vitesse-dark" | "vitesse-light" | undefined;
            light?: "andromeeda" | "aurora-x" | "ayu-dark" | "catppuccin-frappe" | "catppuccin-latte" | "catppuccin-macchiato" | "catppuccin-mocha" | "dark-plus" | "dracula" | "dracula-soft" | "github-dark" | "github-dark-dimmed" | "github-light" | "light-plus" | "material-theme" | "material-theme-darker" | "material-theme-lighter" | "material-theme-ocean" | "material-theme-palenight" | "min-dark" | "min-light" | "monokai" | "night-owl" | "nord" | "one-dark-pro" | "poimandres" | "red" | "rose-pine" | "rose-pine-dawn" | "rose-pine-moon" | "slack-dark" | "slack-ochin" | "solarized-dark" | "solarized-light" | "synthwave-84" | "tokyo-night" | "vesper" | "vitesse-black" | "vitesse-dark" | "vitesse-light" | undefined;
        } | undefined;
        syntaxHighlighting?: {
            transformers?: {
                regexHighlight?: boolean | undefined;
                lineHighlight?: boolean | undefined;
                lineFocus?: boolean | undefined;
                lineErrorLevel?: boolean | undefined;
                lineDiff?: boolean | undefined;
            } | undefined;
            defaultLanguage?: "coffee" | "diff" | "fish" | "move" | "shell" | "turtle" | "swift" | "python" | "markdown" | "kotlin" | "css" | "latex" | "fs" | "json" | "rel" | "mdx" | "md" | "csv" | "html" | "abap" | "actionscript-3" | "ada" | "angular-html" | "angular-ts" | "apache" | "apex" | "apl" | "applescript" | "ara" | "asm" | "astro" | "awk" | "ballerina" | "bat" | "beancount" | "berry" | "bibtex" | "bicep" | "blade" | "c" | "cadence" | "clarity" | "clojure" | "cmake" | "cobol" | "codeql" | "cpp" | "crystal" | "csharp" | "cue" | "cypher" | "d" | "dart" | "dax" | "docker" | "dream-maker" | "elixir" | "elm" | "erb" | "erlang" | "fortran-fixed-form" | "fortran-free-form" | "fsharp" | "gdresource" | "gdscript" | "gdshader" | "gherkin" | "git-commit" | "git-rebase" | "glimmer-js" | "glimmer-ts" | "glsl" | "gnuplot" | "go" | "graphql" | "groovy" | "hack" | "haml" | "handlebars" | "haskell" | "hcl" | "hjson" | "hlsl" | "html-derivative" | "http" | "imba" | "ini" | "java" | "javascript" | "jinja" | "jison" | "json5" | "jsonc" | "jsonl" | "jsonnet" | "jssm" | "jsx" | "julia" | "kusto" | "less" | "liquid" | "lisp" | "logo" | "lua" | "make" | "marko" | "matlab" | "mdc" | "mermaid" | "mojo" | "narrat" | "nextflow" | "nginx" | "nim" | "nix" | "nushell" | "objective-c" | "objective-cpp" | "ocaml" | "pascal" | "perl" | "php" | "plsql" | "postcss" | "powerquery" | "powershell" | "prisma" | "prolog" | "proto" | "pug" | "puppet" | "purescript" | "r" | "raku" | "razor" | "reg" | "riscv" | "rst" | "ruby" | "rust" | "sas" | "sass" | "scala" | "scheme" | "scss" | "shaderlab" | "shellscript" | "shellsession" | "smalltalk" | "solidity" | "sparql" | "splunk" | "sql" | "ssh-config" | "stata" | "stylus" | "svelte" | "system-verilog" | "tasl" | "tcl" | "terraform" | "tex" | "toml" | "tsx" | "twig" | "typescript" | "typst" | "v" | "vb" | "verilog" | "vhdl" | "viml" | "vue" | "vue-html" | "vyper" | "wasm" | "wenyan" | "wgsl" | "wolfram" | "xml" | "xsl" | "yaml" | "zenscript" | "zig" | "batch" | "be" | "cdc" | "clj" | "ql" | "coffeescript" | "c++" | "c#" | "cs" | "cql" | "dockerfile" | "erl" | "f" | "for" | "f77" | "f90" | "f95" | "f03" | "f08" | "f18" | "f#" | "gjs" | "gts" | "gql" | "hbs" | "hs" | "properties" | "js" | "fsl" | "kt" | "kts" | "kql" | "makefile" | "nar" | "nf" | "nu" | "objc" | "ps" | "ps1" | "jade" | "py" | "perl6" | "rb" | "rs" | "shader" | "bash" | "sh" | "zsh" | "console" | "spl" | "styl" | "tf" | "tfvars" | "ts" | "typ" | "cmd" | "vim" | "vimscript" | "vy" | "文言" | "wl" | "yml" | {
                inline: "coffee" | "diff" | "fish" | "move" | "shell" | "turtle" | "swift" | "python" | "markdown" | "kotlin" | "css" | "latex" | "fs" | "json" | "rel" | "mdx" | "md" | "csv" | "html" | "abap" | "actionscript-3" | "ada" | "angular-html" | "angular-ts" | "apache" | "apex" | "apl" | "applescript" | "ara" | "asm" | "astro" | "awk" | "ballerina" | "bat" | "beancount" | "berry" | "bibtex" | "bicep" | "blade" | "c" | "cadence" | "clarity" | "clojure" | "cmake" | "cobol" | "codeql" | "cpp" | "crystal" | "csharp" | "cue" | "cypher" | "d" | "dart" | "dax" | "docker" | "dream-maker" | "elixir" | "elm" | "erb" | "erlang" | "fortran-fixed-form" | "fortran-free-form" | "fsharp" | "gdresource" | "gdscript" | "gdshader" | "gherkin" | "git-commit" | "git-rebase" | "glimmer-js" | "glimmer-ts" | "glsl" | "gnuplot" | "go" | "graphql" | "groovy" | "hack" | "haml" | "handlebars" | "haskell" | "hcl" | "hjson" | "hlsl" | "html-derivative" | "http" | "imba" | "ini" | "java" | "javascript" | "jinja" | "jison" | "json5" | "jsonc" | "jsonl" | "jsonnet" | "jssm" | "jsx" | "julia" | "kusto" | "less" | "liquid" | "lisp" | "logo" | "lua" | "make" | "marko" | "matlab" | "mdc" | "mermaid" | "mojo" | "narrat" | "nextflow" | "nginx" | "nim" | "nix" | "nushell" | "objective-c" | "objective-cpp" | "ocaml" | "pascal" | "perl" | "php" | "plsql" | "postcss" | "powerquery" | "powershell" | "prisma" | "prolog" | "proto" | "pug" | "puppet" | "purescript" | "r" | "raku" | "razor" | "reg" | "riscv" | "rst" | "ruby" | "rust" | "sas" | "sass" | "scala" | "scheme" | "scss" | "shaderlab" | "shellscript" | "shellsession" | "smalltalk" | "solidity" | "sparql" | "splunk" | "sql" | "ssh-config" | "stata" | "stylus" | "svelte" | "system-verilog" | "tasl" | "tcl" | "terraform" | "tex" | "toml" | "tsx" | "twig" | "typescript" | "typst" | "v" | "vb" | "verilog" | "vhdl" | "viml" | "vue" | "vue-html" | "vyper" | "wasm" | "wenyan" | "wgsl" | "wolfram" | "xml" | "xsl" | "yaml" | "zenscript" | "zig" | "batch" | "be" | "cdc" | "clj" | "ql" | "coffeescript" | "c++" | "c#" | "cs" | "cql" | "dockerfile" | "erl" | "f" | "for" | "f77" | "f90" | "f95" | "f03" | "f08" | "f18" | "f#" | "gjs" | "gts" | "gql" | "hbs" | "hs" | "properties" | "js" | "fsl" | "kt" | "kts" | "kql" | "makefile" | "nar" | "nf" | "nu" | "objc" | "ps" | "ps1" | "jade" | "py" | "perl6" | "rb" | "rs" | "shader" | "bash" | "sh" | "zsh" | "console" | "spl" | "styl" | "tf" | "tfvars" | "ts" | "typ" | "cmd" | "vim" | "vimscript" | "vy" | "文言" | "wl" | "yml";
                block: "coffee" | "diff" | "fish" | "move" | "shell" | "turtle" | "swift" | "python" | "markdown" | "kotlin" | "css" | "latex" | "fs" | "json" | "rel" | "mdx" | "md" | "csv" | "html" | "abap" | "actionscript-3" | "ada" | "angular-html" | "angular-ts" | "apache" | "apex" | "apl" | "applescript" | "ara" | "asm" | "astro" | "awk" | "ballerina" | "bat" | "beancount" | "berry" | "bibtex" | "bicep" | "blade" | "c" | "cadence" | "clarity" | "clojure" | "cmake" | "cobol" | "codeql" | "cpp" | "crystal" | "csharp" | "cue" | "cypher" | "d" | "dart" | "dax" | "docker" | "dream-maker" | "elixir" | "elm" | "erb" | "erlang" | "fortran-fixed-form" | "fortran-free-form" | "fsharp" | "gdresource" | "gdscript" | "gdshader" | "gherkin" | "git-commit" | "git-rebase" | "glimmer-js" | "glimmer-ts" | "glsl" | "gnuplot" | "go" | "graphql" | "groovy" | "hack" | "haml" | "handlebars" | "haskell" | "hcl" | "hjson" | "hlsl" | "html-derivative" | "http" | "imba" | "ini" | "java" | "javascript" | "jinja" | "jison" | "json5" | "jsonc" | "jsonl" | "jsonnet" | "jssm" | "jsx" | "julia" | "kusto" | "less" | "liquid" | "lisp" | "logo" | "lua" | "make" | "marko" | "matlab" | "mdc" | "mermaid" | "mojo" | "narrat" | "nextflow" | "nginx" | "nim" | "nix" | "nushell" | "objective-c" | "objective-cpp" | "ocaml" | "pascal" | "perl" | "php" | "plsql" | "postcss" | "powerquery" | "powershell" | "prisma" | "prolog" | "proto" | "pug" | "puppet" | "purescript" | "r" | "raku" | "razor" | "reg" | "riscv" | "rst" | "ruby" | "rust" | "sas" | "sass" | "scala" | "scheme" | "scss" | "shaderlab" | "shellscript" | "shellsession" | "smalltalk" | "solidity" | "sparql" | "splunk" | "sql" | "ssh-config" | "stata" | "stylus" | "svelte" | "system-verilog" | "tasl" | "tcl" | "terraform" | "tex" | "toml" | "tsx" | "twig" | "typescript" | "typst" | "v" | "vb" | "verilog" | "vhdl" | "viml" | "vue" | "vue-html" | "vyper" | "wasm" | "wenyan" | "wgsl" | "wolfram" | "xml" | "xsl" | "yaml" | "zenscript" | "zig" | "batch" | "be" | "cdc" | "clj" | "ql" | "coffeescript" | "c++" | "c#" | "cs" | "cql" | "dockerfile" | "erl" | "f" | "for" | "f77" | "f90" | "f95" | "f03" | "f08" | "f18" | "f#" | "gjs" | "gts" | "gql" | "hbs" | "hs" | "properties" | "js" | "fsl" | "kt" | "kts" | "kql" | "makefile" | "nar" | "nf" | "nu" | "objc" | "ps" | "ps1" | "jade" | "py" | "perl6" | "rb" | "rs" | "shader" | "bash" | "sh" | "zsh" | "console" | "spl" | "styl" | "tf" | "tfvars" | "ts" | "typ" | "cmd" | "vim" | "vimscript" | "vy" | "文言" | "wl" | "yml";
            } | undefined;
        } | undefined;
    } | undefined;
    database?: {
        storeFormatted?: boolean | undefined;
        removeIfNotPresentInFs?: boolean | undefined;
    } | undefined;
    navigation?: {
        settings?: "none" | "sidebar" | "navbar" | "both" | undefined;
        navbarBreakpoint?: {
            full?: number | undefined;
            minimal?: number | undefined;
        } | undefined;
        maxResultLength?: {
            snippets?: number | undefined;
            searchAll?: number | undefined;
            equations?: number | undefined;
            categories?: number | undefined;
        } | undefined;
        bookmarkLink?: "none" | "sidebar" | "navbar" | "both" | undefined;
        syncLink?: "none" | "sidebar" | "navbar" | "both" | undefined;
        fileSystemToggle?: "none" | "sidebar" | "navbar" | "both" | undefined;
        darkmodeToggle?: "none" | "sidebar" | "navbar" | "both" | undefined;
        equationsLink?: "none" | "sidebar" | "navbar" | "both" | undefined;
        snippetsLink?: "none" | "sidebar" | "navbar" | "both" | undefined;
        backupData?: "none" | "sidebar" | "navbar" | "both" | undefined;
        navbarLinks?: (string | {
            label: string;
            href?: string | undefined;
            icon?: string | undefined;
            onClick?: ((...args: unknown[]) => unknown) | undefined;
        })[] | undefined;
        sidebarLinks?: (string | {
            icon: string;
            label?: string | undefined;
            href?: string | undefined;
            onClick?: ((...args: unknown[]) => unknown) | undefined;
            Icon?: ((...args: unknown[]) => unknown) | undefined;
        })[] | undefined;
    } | undefined;
    terminal?: {
        logLevel?: "info" | "none" | "debug" | "verbose" | undefined;
    } | undefined;
    jupyter?: {
        execute?: boolean | undefined;
        environment?: string | undefined;
        syntaxHighlightTheme?: string | undefined;
        jupyterToken?: string | undefined;
        jupyterPort?: number | undefined;
        initiallyFoldCells?: boolean | undefined;
        kernel?: string | undefined;
        jupyterReactProps?: {
            collaborative?: boolean | undefined;
            lite?: boolean | undefined;
            serverUrls?: {
                baseUrl?: string | undefined;
                wsUrl?: string | undefined;
            } | undefined;
        } | undefined;
        nbConvert?: {
            nbconvertPath?: string | undefined;
            conversionTimeout?: number | undefined;
            customConversionFunction?: {
                pdf?: ((args_0: string, args_1: string, ...args: unknown[]) => string) | undefined;
            } | undefined;
            execute?: boolean | undefined;
            nbConvertTemplate?: string | undefined;
            notebookOutputDir?: string | undefined;
        } | undefined;
        jupyterNotebookProps?: {
            height?: string | undefined;
            readOnly?: boolean | undefined;
            maxHeight?: string | undefined;
            cellMetadataPanel?: boolean | undefined;
            cellSidebarMargin?: number | undefined;
            bundledIPyWidgets?: {
                name: string;
                module: string | Record<string, string>;
                version: string;
            }[] | undefined;
            externalIPyWidgets?: {
                name: string;
                version: string;
            }[] | undefined;
            nbgrader?: boolean | undefined;
        } | undefined;
        cellInputWrappers?: Record<string, string | {
            prefix: string;
            suffix: string;
        }> | undefined;
    } | undefined;
    math?: {
        latexPackages?: string[] | "all" | undefined;
        latexFontUrl?: string | undefined;
        constants?: Record<string, number> | undefined;
    } | undefined;
    UI?: {
        table?: {
            maxHeight?: string | number | undefined;
        } | undefined;
        text?: {
            blockQuoteItalic?: boolean | undefined;
            fontPaths?: "default" | {
                weight: "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900";
                path: string;
                style: "bold" | "italic" | "normal";
            }[] | undefined;
        } | undefined;
        media?: {
            imageMap?: Record<string, string | undefined> | undefined;
            includeDefaultImageMap?: boolean | undefined;
            imageRemoteTest?: RegExp[] | undefined;
        } | undefined;
        theme?: "ulld" | "red" | "orange" | "yellow" | "green" | "blue" | "rose" | "slate" | "gray" | "stone" | "zinc" | "neutral" | "violet" | undefined;
        colors?: Record<string, string | {
            dark?: string | undefined;
            light?: string | undefined;
        } | null | undefined> | undefined;
        autoApplyMdxTitles?: boolean | undefined;
    } | undefined;
    slots?: {
        navigation?: any;
        bibliography?: any;
        math?: any;
        snippets?: any;
        dashboard?: any;
        taskManager?: any;
        UI?: any;
        pdf?: any;
        editor?: any;
        form?: any;
        commandPalette?: any;
    } | undefined;
    fsRoot?: string | undefined;
    build?: {
        database?: {
            type?: "postgres" | "sqlite" | undefined;
            postgres?: {
                port?: number | undefined;
                dbName?: string | undefined;
                connectionURI?: string | undefined;
            } | undefined;
            prioritize?: "size" | "speed" | undefined;
        } | undefined;
        additionalUserContent?: {
            css?: string | undefined;
            logo?: string | undefined;
            favicon?: string | undefined;
        } | undefined;
    } | undefined;
    autoTag?: {
        tag: string;
        path: string;
    }[] | undefined;
    autoTopic?: {
        path: string;
        topic: string;
    }[] | undefined;
    autoSubject?: {
        path: string;
        subject: string;
    }[] | undefined;
    alwaysPreferFs?: boolean | undefined;
    ignoreFilepaths?: (string | RegExp | {
        regex: string | RegExp;
        original: string;
    })[] | undefined;
    tempDir?: string | undefined;
    generatedDir?: string | undefined;
    ignorePreferFsExtensions?: (string | RegExp | {
        regex: RegExp;
        original: string;
    })[] | undefined;
    fileTypePriority?: (".mdx" | ".ipynb" | ".csv" | ".tsv" | ".excel" | ".numpy" | ".html" | ".pickle" | ".db" | ".sql" | ".pdf" | ".json" | ".tex" | ".hdf5" | ".md")[] | undefined;
    noteTypes?: {
        label: string;
        fs: string;
        icon?: string | undefined;
        UI?: {
            styles?: {
                dark?: {
                    bg?: string | undefined;
                    fg?: string | undefined;
                } | undefined;
                light?: {
                    bg?: string | undefined;
                    fg?: string | undefined;
                } | undefined;
            } | undefined;
        } | undefined;
        id?: string | undefined;
        docType?: string | undefined;
        filePathPattern?: string | undefined;
        matchWeight?: number | undefined;
        url?: string | undefined;
        urlQuery?: Record<string, string | number | string[] | number[]> | undefined;
        keywords?: string[] | undefined;
        topicLabel?: string | undefined;
        subjectLabel?: string | undefined;
        autoTag?: string[] | undefined;
        autoTopic?: string[] | undefined;
        autoSubject?: string[] | undefined;
        inSidebar?: boolean | undefined;
        inNavbar?: boolean | undefined;
    }[] | undefined;
    bibPath?: string | undefined;
    cslPath?: string | undefined;
    dateHandling?: {
        enableAdvancedFormat?: boolean | undefined;
        format?: string | {
            short?: string | undefined;
            long?: string | undefined;
            withTime?: string | undefined;
            timeOnly?: string | undefined;
        } | undefined;
        defaultTimeDisplayType?: "summarized" | "analog" | "descriptive" | undefined;
        defaultTimeZone?: string | undefined;
    } | undefined;
    linkAliases?: Record<string, string> | undefined;
    features?: {
        pages?: {
            calendar?: boolean | undefined;
            bibliography?: boolean | undefined;
            snippets?: boolean | undefined;
            taskManager?: boolean | undefined;
            equations?: boolean | undefined;
        } | undefined;
        enabled?: {
            commandPalette?: boolean | undefined;
            tikz?: boolean | undefined;
        } | undefined;
    } | undefined;
    plotting?: {
        plotColorList?: string[] | {
            dark: string[];
            light: string[];
        } | undefined;
        plotColorCycleMethod?: "inOrder" | "random" | undefined;
    } | undefined;
    credentials?: {
        googleServiceAccountJsonPath?: string | undefined;
    } | undefined;
    performance?: {
        latexParsingDebounceTimeout?: number | undefined;
        mdxParsingDebounceTimeout?: number | undefined;
    } | undefined;
    meta?: {
        title?: string | undefined;
        desc?: string | undefined;
    } | undefined;
    plugins?: string | string[] | {
        name: string;
        version?: string | undefined;
        parserIndex?: number | undefined;
    } | {
        name: string;
        version?: string | undefined;
        parserIndex?: number | undefined;
    }[] | undefined;
}>;
export type AppConfigSchemaDeepPartialOutputWithNoteTypes = z.output<typeof appConfigDeepPartialWithNotetypes>;
export declare const appConfigDeepPartialWithFsRoot: z.ZodObject<{
    code: z.ZodOptional<z.ZodDefault<z.ZodObject<{
        theme: z.ZodDefault<z.ZodObject<{
            dark: z.ZodDefault<z.ZodUnion<[z.ZodLiteral<"andromeeda">, z.ZodLiteral<"aurora-x">, z.ZodLiteral<"ayu-dark">, z.ZodLiteral<"catppuccin-frappe">, z.ZodLiteral<"catppuccin-latte">, z.ZodLiteral<"catppuccin-macchiato">, z.ZodLiteral<"catppuccin-mocha">, z.ZodLiteral<"dark-plus">, z.ZodLiteral<"dracula">, z.ZodLiteral<"dracula-soft">, z.ZodLiteral<"github-dark">, z.ZodLiteral<"github-dark-dimmed">, z.ZodLiteral<"github-light">, z.ZodLiteral<"light-plus">, z.ZodLiteral<"material-theme">, z.ZodLiteral<"material-theme-darker">, z.ZodLiteral<"material-theme-lighter">, z.ZodLiteral<"material-theme-ocean">, z.ZodLiteral<"material-theme-palenight">, z.ZodLiteral<"min-dark">, z.ZodLiteral<"min-light">, z.ZodLiteral<"monokai">, z.ZodLiteral<"night-owl">, z.ZodLiteral<"nord">, z.ZodLiteral<"one-dark-pro">, z.ZodLiteral<"poimandres">, z.ZodLiteral<"red">, z.ZodLiteral<"rose-pine">, z.ZodLiteral<"rose-pine-dawn">, z.ZodLiteral<"rose-pine-moon">, z.ZodLiteral<"slack-dark">, z.ZodLiteral<"slack-ochin">, z.ZodLiteral<"solarized-dark">, z.ZodLiteral<"solarized-light">, z.ZodLiteral<"synthwave-84">, z.ZodLiteral<"tokyo-night">, z.ZodLiteral<"vesper">, z.ZodLiteral<"vitesse-black">, z.ZodLiteral<"vitesse-dark">, z.ZodLiteral<"vitesse-light">]>>;
            light: z.ZodDefault<z.ZodUnion<[z.ZodLiteral<"andromeeda">, z.ZodLiteral<"aurora-x">, z.ZodLiteral<"ayu-dark">, z.ZodLiteral<"catppuccin-frappe">, z.ZodLiteral<"catppuccin-latte">, z.ZodLiteral<"catppuccin-macchiato">, z.ZodLiteral<"catppuccin-mocha">, z.ZodLiteral<"dark-plus">, z.ZodLiteral<"dracula">, z.ZodLiteral<"dracula-soft">, z.ZodLiteral<"github-dark">, z.ZodLiteral<"github-dark-dimmed">, z.ZodLiteral<"github-light">, z.ZodLiteral<"light-plus">, z.ZodLiteral<"material-theme">, z.ZodLiteral<"material-theme-darker">, z.ZodLiteral<"material-theme-lighter">, z.ZodLiteral<"material-theme-ocean">, z.ZodLiteral<"material-theme-palenight">, z.ZodLiteral<"min-dark">, z.ZodLiteral<"min-light">, z.ZodLiteral<"monokai">, z.ZodLiteral<"night-owl">, z.ZodLiteral<"nord">, z.ZodLiteral<"one-dark-pro">, z.ZodLiteral<"poimandres">, z.ZodLiteral<"red">, z.ZodLiteral<"rose-pine">, z.ZodLiteral<"rose-pine-dawn">, z.ZodLiteral<"rose-pine-moon">, z.ZodLiteral<"slack-dark">, z.ZodLiteral<"slack-ochin">, z.ZodLiteral<"solarized-dark">, z.ZodLiteral<"solarized-light">, z.ZodLiteral<"synthwave-84">, z.ZodLiteral<"tokyo-night">, z.ZodLiteral<"vesper">, z.ZodLiteral<"vitesse-black">, z.ZodLiteral<"vitesse-dark">, z.ZodLiteral<"vitesse-light">]>>;
        }, "strip", z.ZodTypeAny, {
            dark: "andromeeda" | "aurora-x" | "ayu-dark" | "catppuccin-frappe" | "catppuccin-latte" | "catppuccin-macchiato" | "catppuccin-mocha" | "dark-plus" | "dracula" | "dracula-soft" | "github-dark" | "github-dark-dimmed" | "github-light" | "light-plus" | "material-theme" | "material-theme-darker" | "material-theme-lighter" | "material-theme-ocean" | "material-theme-palenight" | "min-dark" | "min-light" | "monokai" | "night-owl" | "nord" | "one-dark-pro" | "poimandres" | "red" | "rose-pine" | "rose-pine-dawn" | "rose-pine-moon" | "slack-dark" | "slack-ochin" | "solarized-dark" | "solarized-light" | "synthwave-84" | "tokyo-night" | "vesper" | "vitesse-black" | "vitesse-dark" | "vitesse-light";
            light: "andromeeda" | "aurora-x" | "ayu-dark" | "catppuccin-frappe" | "catppuccin-latte" | "catppuccin-macchiato" | "catppuccin-mocha" | "dark-plus" | "dracula" | "dracula-soft" | "github-dark" | "github-dark-dimmed" | "github-light" | "light-plus" | "material-theme" | "material-theme-darker" | "material-theme-lighter" | "material-theme-ocean" | "material-theme-palenight" | "min-dark" | "min-light" | "monokai" | "night-owl" | "nord" | "one-dark-pro" | "poimandres" | "red" | "rose-pine" | "rose-pine-dawn" | "rose-pine-moon" | "slack-dark" | "slack-ochin" | "solarized-dark" | "solarized-light" | "synthwave-84" | "tokyo-night" | "vesper" | "vitesse-black" | "vitesse-dark" | "vitesse-light";
        }, {
            dark?: "andromeeda" | "aurora-x" | "ayu-dark" | "catppuccin-frappe" | "catppuccin-latte" | "catppuccin-macchiato" | "catppuccin-mocha" | "dark-plus" | "dracula" | "dracula-soft" | "github-dark" | "github-dark-dimmed" | "github-light" | "light-plus" | "material-theme" | "material-theme-darker" | "material-theme-lighter" | "material-theme-ocean" | "material-theme-palenight" | "min-dark" | "min-light" | "monokai" | "night-owl" | "nord" | "one-dark-pro" | "poimandres" | "red" | "rose-pine" | "rose-pine-dawn" | "rose-pine-moon" | "slack-dark" | "slack-ochin" | "solarized-dark" | "solarized-light" | "synthwave-84" | "tokyo-night" | "vesper" | "vitesse-black" | "vitesse-dark" | "vitesse-light" | undefined;
            light?: "andromeeda" | "aurora-x" | "ayu-dark" | "catppuccin-frappe" | "catppuccin-latte" | "catppuccin-macchiato" | "catppuccin-mocha" | "dark-plus" | "dracula" | "dracula-soft" | "github-dark" | "github-dark-dimmed" | "github-light" | "light-plus" | "material-theme" | "material-theme-darker" | "material-theme-lighter" | "material-theme-ocean" | "material-theme-palenight" | "min-dark" | "min-light" | "monokai" | "night-owl" | "nord" | "one-dark-pro" | "poimandres" | "red" | "rose-pine" | "rose-pine-dawn" | "rose-pine-moon" | "slack-dark" | "slack-ochin" | "solarized-dark" | "solarized-light" | "synthwave-84" | "tokyo-night" | "vesper" | "vitesse-black" | "vitesse-dark" | "vitesse-light" | undefined;
        }>>;
        editor: z.ZodDefault<z.ZodObject<{
            defaultLangauge: z.ZodDefault<z.ZodString>;
            useVimMode: z.ZodDefault<z.ZodBoolean>;
        }, "strip", z.ZodTypeAny, {
            defaultLangauge: string;
            useVimMode: boolean;
        }, {
            defaultLangauge?: string | undefined;
            useVimMode?: boolean | undefined;
        }>>;
        syntaxHighlighting: z.ZodDefault<z.ZodObject<{
            transformers: z.ZodDefault<z.ZodObject<{
                regexHighlight: z.ZodDefault<z.ZodBoolean>;
                lineHighlight: z.ZodDefault<z.ZodBoolean>;
                lineFocus: z.ZodDefault<z.ZodBoolean>;
                lineErrorLevel: z.ZodDefault<z.ZodBoolean>;
                lineDiff: z.ZodDefault<z.ZodBoolean>;
            }, "strip", z.ZodTypeAny, {
                regexHighlight: boolean;
                lineHighlight: boolean;
                lineFocus: boolean;
                lineErrorLevel: boolean;
                lineDiff: boolean;
            }, {
                regexHighlight?: boolean | undefined;
                lineHighlight?: boolean | undefined;
                lineFocus?: boolean | undefined;
                lineErrorLevel?: boolean | undefined;
                lineDiff?: boolean | undefined;
            }>>;
            defaultLanguage: z.ZodEffects<z.ZodDefault<z.ZodUnion<[z.ZodEnum<["abap", "actionscript-3", "ada", "angular-html", "angular-ts", "apache", "apex", "apl", "applescript", "ara", "asm", "astro", "awk", "ballerina", "bat", "beancount", "berry", "bibtex", "bicep", "blade", "c", "cadence", "clarity", "clojure", "cmake", "cobol", "codeql", "coffee", "cpp", "crystal", "csharp", "css", "csv", "cue", "cypher", "d", "dart", "dax", "diff", "docker", "dream-maker", "elixir", "elm", "erb", "erlang", "fish", "fortran-fixed-form", "fortran-free-form", "fsharp", "gdresource", "gdscript", "gdshader", "gherkin", "git-commit", "git-rebase", "glimmer-js", "glimmer-ts", "glsl", "gnuplot", "go", "graphql", "groovy", "hack", "haml", "handlebars", "haskell", "hcl", "hjson", "hlsl", "html", "html-derivative", "http", "imba", "ini", "java", "javascript", "jinja", "jison", "json", "json5", "jsonc", "jsonl", "jsonnet", "jssm", "jsx", "julia", "kotlin", "kusto", "latex", "less", "liquid", "lisp", "logo", "lua", "make", "markdown", "marko", "matlab", "mdc", "mdx", "mermaid", "mojo", "move", "narrat", "nextflow", "nginx", "nim", "nix", "nushell", "objective-c", "objective-cpp", "ocaml", "pascal", "perl", "php", "plsql", "postcss", "powerquery", "powershell", "prisma", "prolog", "proto", "pug", "puppet", "purescript", "python", "r", "raku", "razor", "reg", "rel", "riscv", "rst", "ruby", "rust", "sas", "sass", "scala", "scheme", "scss", "shaderlab", "shellscript", "shellsession", "smalltalk", "solidity", "sparql", "splunk", "sql", "ssh-config", "stata", "stylus", "svelte", "swift", "system-verilog", "tasl", "tcl", "terraform", "tex", "toml", "tsx", "turtle", "twig", "typescript", "typst", "v", "vb", "verilog", "vhdl", "viml", "vue", "vue-html", "vyper", "wasm", "wenyan", "wgsl", "wolfram", "xml", "xsl", "yaml", "zenscript", "zig", "batch", "be", "cdc", "clj", "ql", "coffeescript", "c++", "c#", "cs", "cql", "dockerfile", "erl", "f", "for", "f77", "f90", "f95", "f03", "f08", "f18", "f#", "fs", "gjs", "gts", "gql", "hbs", "hs", "properties", "js", "fsl", "kt", "kts", "kql", "makefile", "md", "nar", "nf", "nu", "objc", "ps", "ps1", "jade", "py", "perl6", "rb", "rs", "shader", "bash", "sh", "shell", "zsh", "console", "spl", "styl", "tf", "tfvars", "ts", "typ", "cmd", "vim", "vimscript", "vy", "文言", "wl", "yml"]>, z.ZodObject<{
                inline: z.ZodEnum<["abap", "actionscript-3", "ada", "angular-html", "angular-ts", "apache", "apex", "apl", "applescript", "ara", "asm", "astro", "awk", "ballerina", "bat", "beancount", "berry", "bibtex", "bicep", "blade", "c", "cadence", "clarity", "clojure", "cmake", "cobol", "codeql", "coffee", "cpp", "crystal", "csharp", "css", "csv", "cue", "cypher", "d", "dart", "dax", "diff", "docker", "dream-maker", "elixir", "elm", "erb", "erlang", "fish", "fortran-fixed-form", "fortran-free-form", "fsharp", "gdresource", "gdscript", "gdshader", "gherkin", "git-commit", "git-rebase", "glimmer-js", "glimmer-ts", "glsl", "gnuplot", "go", "graphql", "groovy", "hack", "haml", "handlebars", "haskell", "hcl", "hjson", "hlsl", "html", "html-derivative", "http", "imba", "ini", "java", "javascript", "jinja", "jison", "json", "json5", "jsonc", "jsonl", "jsonnet", "jssm", "jsx", "julia", "kotlin", "kusto", "latex", "less", "liquid", "lisp", "logo", "lua", "make", "markdown", "marko", "matlab", "mdc", "mdx", "mermaid", "mojo", "move", "narrat", "nextflow", "nginx", "nim", "nix", "nushell", "objective-c", "objective-cpp", "ocaml", "pascal", "perl", "php", "plsql", "postcss", "powerquery", "powershell", "prisma", "prolog", "proto", "pug", "puppet", "purescript", "python", "r", "raku", "razor", "reg", "rel", "riscv", "rst", "ruby", "rust", "sas", "sass", "scala", "scheme", "scss", "shaderlab", "shellscript", "shellsession", "smalltalk", "solidity", "sparql", "splunk", "sql", "ssh-config", "stata", "stylus", "svelte", "swift", "system-verilog", "tasl", "tcl", "terraform", "tex", "toml", "tsx", "turtle", "twig", "typescript", "typst", "v", "vb", "verilog", "vhdl", "viml", "vue", "vue-html", "vyper", "wasm", "wenyan", "wgsl", "wolfram", "xml", "xsl", "yaml", "zenscript", "zig", "batch", "be", "cdc", "clj", "ql", "coffeescript", "c++", "c#", "cs", "cql", "dockerfile", "erl", "f", "for", "f77", "f90", "f95", "f03", "f08", "f18", "f#", "fs", "gjs", "gts", "gql", "hbs", "hs", "properties", "js", "fsl", "kt", "kts", "kql", "makefile", "md", "nar", "nf", "nu", "objc", "ps", "ps1", "jade", "py", "perl6", "rb", "rs", "shader", "bash", "sh", "shell", "zsh", "console", "spl", "styl", "tf", "tfvars", "ts", "typ", "cmd", "vim", "vimscript", "vy", "文言", "wl", "yml"]>;
                block: z.ZodEnum<["abap", "actionscript-3", "ada", "angular-html", "angular-ts", "apache", "apex", "apl", "applescript", "ara", "asm", "astro", "awk", "ballerina", "bat", "beancount", "berry", "bibtex", "bicep", "blade", "c", "cadence", "clarity", "clojure", "cmake", "cobol", "codeql", "coffee", "cpp", "crystal", "csharp", "css", "csv", "cue", "cypher", "d", "dart", "dax", "diff", "docker", "dream-maker", "elixir", "elm", "erb", "erlang", "fish", "fortran-fixed-form", "fortran-free-form", "fsharp", "gdresource", "gdscript", "gdshader", "gherkin", "git-commit", "git-rebase", "glimmer-js", "glimmer-ts", "glsl", "gnuplot", "go", "graphql", "groovy", "hack", "haml", "handlebars", "haskell", "hcl", "hjson", "hlsl", "html", "html-derivative", "http", "imba", "ini", "java", "javascript", "jinja", "jison", "json", "json5", "jsonc", "jsonl", "jsonnet", "jssm", "jsx", "julia", "kotlin", "kusto", "latex", "less", "liquid", "lisp", "logo", "lua", "make", "markdown", "marko", "matlab", "mdc", "mdx", "mermaid", "mojo", "move", "narrat", "nextflow", "nginx", "nim", "nix", "nushell", "objective-c", "objective-cpp", "ocaml", "pascal", "perl", "php", "plsql", "postcss", "powerquery", "powershell", "prisma", "prolog", "proto", "pug", "puppet", "purescript", "python", "r", "raku", "razor", "reg", "rel", "riscv", "rst", "ruby", "rust", "sas", "sass", "scala", "scheme", "scss", "shaderlab", "shellscript", "shellsession", "smalltalk", "solidity", "sparql", "splunk", "sql", "ssh-config", "stata", "stylus", "svelte", "swift", "system-verilog", "tasl", "tcl", "terraform", "tex", "toml", "tsx", "turtle", "twig", "typescript", "typst", "v", "vb", "verilog", "vhdl", "viml", "vue", "vue-html", "vyper", "wasm", "wenyan", "wgsl", "wolfram", "xml", "xsl", "yaml", "zenscript", "zig", "batch", "be", "cdc", "clj", "ql", "coffeescript", "c++", "c#", "cs", "cql", "dockerfile", "erl", "f", "for", "f77", "f90", "f95", "f03", "f08", "f18", "f#", "fs", "gjs", "gts", "gql", "hbs", "hs", "properties", "js", "fsl", "kt", "kts", "kql", "makefile", "md", "nar", "nf", "nu", "objc", "ps", "ps1", "jade", "py", "perl6", "rb", "rs", "shader", "bash", "sh", "shell", "zsh", "console", "spl", "styl", "tf", "tfvars", "ts", "typ", "cmd", "vim", "vimscript", "vy", "文言", "wl", "yml"]>;
            }, "strip", z.ZodTypeAny, {
                inline: "coffee" | "diff" | "fish" | "move" | "shell" | "turtle" | "swift" | "python" | "markdown" | "kotlin" | "css" | "latex" | "fs" | "json" | "rel" | "mdx" | "md" | "csv" | "html" | "abap" | "actionscript-3" | "ada" | "angular-html" | "angular-ts" | "apache" | "apex" | "apl" | "applescript" | "ara" | "asm" | "astro" | "awk" | "ballerina" | "bat" | "beancount" | "berry" | "bibtex" | "bicep" | "blade" | "c" | "cadence" | "clarity" | "clojure" | "cmake" | "cobol" | "codeql" | "cpp" | "crystal" | "csharp" | "cue" | "cypher" | "d" | "dart" | "dax" | "docker" | "dream-maker" | "elixir" | "elm" | "erb" | "erlang" | "fortran-fixed-form" | "fortran-free-form" | "fsharp" | "gdresource" | "gdscript" | "gdshader" | "gherkin" | "git-commit" | "git-rebase" | "glimmer-js" | "glimmer-ts" | "glsl" | "gnuplot" | "go" | "graphql" | "groovy" | "hack" | "haml" | "handlebars" | "haskell" | "hcl" | "hjson" | "hlsl" | "html-derivative" | "http" | "imba" | "ini" | "java" | "javascript" | "jinja" | "jison" | "json5" | "jsonc" | "jsonl" | "jsonnet" | "jssm" | "jsx" | "julia" | "kusto" | "less" | "liquid" | "lisp" | "logo" | "lua" | "make" | "marko" | "matlab" | "mdc" | "mermaid" | "mojo" | "narrat" | "nextflow" | "nginx" | "nim" | "nix" | "nushell" | "objective-c" | "objective-cpp" | "ocaml" | "pascal" | "perl" | "php" | "plsql" | "postcss" | "powerquery" | "powershell" | "prisma" | "prolog" | "proto" | "pug" | "puppet" | "purescript" | "r" | "raku" | "razor" | "reg" | "riscv" | "rst" | "ruby" | "rust" | "sas" | "sass" | "scala" | "scheme" | "scss" | "shaderlab" | "shellscript" | "shellsession" | "smalltalk" | "solidity" | "sparql" | "splunk" | "sql" | "ssh-config" | "stata" | "stylus" | "svelte" | "system-verilog" | "tasl" | "tcl" | "terraform" | "tex" | "toml" | "tsx" | "twig" | "typescript" | "typst" | "v" | "vb" | "verilog" | "vhdl" | "viml" | "vue" | "vue-html" | "vyper" | "wasm" | "wenyan" | "wgsl" | "wolfram" | "xml" | "xsl" | "yaml" | "zenscript" | "zig" | "batch" | "be" | "cdc" | "clj" | "ql" | "coffeescript" | "c++" | "c#" | "cs" | "cql" | "dockerfile" | "erl" | "f" | "for" | "f77" | "f90" | "f95" | "f03" | "f08" | "f18" | "f#" | "gjs" | "gts" | "gql" | "hbs" | "hs" | "properties" | "js" | "fsl" | "kt" | "kts" | "kql" | "makefile" | "nar" | "nf" | "nu" | "objc" | "ps" | "ps1" | "jade" | "py" | "perl6" | "rb" | "rs" | "shader" | "bash" | "sh" | "zsh" | "console" | "spl" | "styl" | "tf" | "tfvars" | "ts" | "typ" | "cmd" | "vim" | "vimscript" | "vy" | "文言" | "wl" | "yml";
                block: "coffee" | "diff" | "fish" | "move" | "shell" | "turtle" | "swift" | "python" | "markdown" | "kotlin" | "css" | "latex" | "fs" | "json" | "rel" | "mdx" | "md" | "csv" | "html" | "abap" | "actionscript-3" | "ada" | "angular-html" | "angular-ts" | "apache" | "apex" | "apl" | "applescript" | "ara" | "asm" | "astro" | "awk" | "ballerina" | "bat" | "beancount" | "berry" | "bibtex" | "bicep" | "blade" | "c" | "cadence" | "clarity" | "clojure" | "cmake" | "cobol" | "codeql" | "cpp" | "crystal" | "csharp" | "cue" | "cypher" | "d" | "dart" | "dax" | "docker" | "dream-maker" | "elixir" | "elm" | "erb" | "erlang" | "fortran-fixed-form" | "fortran-free-form" | "fsharp" | "gdresource" | "gdscript" | "gdshader" | "gherkin" | "git-commit" | "git-rebase" | "glimmer-js" | "glimmer-ts" | "glsl" | "gnuplot" | "go" | "graphql" | "groovy" | "hack" | "haml" | "handlebars" | "haskell" | "hcl" | "hjson" | "hlsl" | "html-derivative" | "http" | "imba" | "ini" | "java" | "javascript" | "jinja" | "jison" | "json5" | "jsonc" | "jsonl" | "jsonnet" | "jssm" | "jsx" | "julia" | "kusto" | "less" | "liquid" | "lisp" | "logo" | "lua" | "make" | "marko" | "matlab" | "mdc" | "mermaid" | "mojo" | "narrat" | "nextflow" | "nginx" | "nim" | "nix" | "nushell" | "objective-c" | "objective-cpp" | "ocaml" | "pascal" | "perl" | "php" | "plsql" | "postcss" | "powerquery" | "powershell" | "prisma" | "prolog" | "proto" | "pug" | "puppet" | "purescript" | "r" | "raku" | "razor" | "reg" | "riscv" | "rst" | "ruby" | "rust" | "sas" | "sass" | "scala" | "scheme" | "scss" | "shaderlab" | "shellscript" | "shellsession" | "smalltalk" | "solidity" | "sparql" | "splunk" | "sql" | "ssh-config" | "stata" | "stylus" | "svelte" | "system-verilog" | "tasl" | "tcl" | "terraform" | "tex" | "toml" | "tsx" | "twig" | "typescript" | "typst" | "v" | "vb" | "verilog" | "vhdl" | "viml" | "vue" | "vue-html" | "vyper" | "wasm" | "wenyan" | "wgsl" | "wolfram" | "xml" | "xsl" | "yaml" | "zenscript" | "zig" | "batch" | "be" | "cdc" | "clj" | "ql" | "coffeescript" | "c++" | "c#" | "cs" | "cql" | "dockerfile" | "erl" | "f" | "for" | "f77" | "f90" | "f95" | "f03" | "f08" | "f18" | "f#" | "gjs" | "gts" | "gql" | "hbs" | "hs" | "properties" | "js" | "fsl" | "kt" | "kts" | "kql" | "makefile" | "nar" | "nf" | "nu" | "objc" | "ps" | "ps1" | "jade" | "py" | "perl6" | "rb" | "rs" | "shader" | "bash" | "sh" | "zsh" | "console" | "spl" | "styl" | "tf" | "tfvars" | "ts" | "typ" | "cmd" | "vim" | "vimscript" | "vy" | "文言" | "wl" | "yml";
            }, {
                inline: "coffee" | "diff" | "fish" | "move" | "shell" | "turtle" | "swift" | "python" | "markdown" | "kotlin" | "css" | "latex" | "fs" | "json" | "rel" | "mdx" | "md" | "csv" | "html" | "abap" | "actionscript-3" | "ada" | "angular-html" | "angular-ts" | "apache" | "apex" | "apl" | "applescript" | "ara" | "asm" | "astro" | "awk" | "ballerina" | "bat" | "beancount" | "berry" | "bibtex" | "bicep" | "blade" | "c" | "cadence" | "clarity" | "clojure" | "cmake" | "cobol" | "codeql" | "cpp" | "crystal" | "csharp" | "cue" | "cypher" | "d" | "dart" | "dax" | "docker" | "dream-maker" | "elixir" | "elm" | "erb" | "erlang" | "fortran-fixed-form" | "fortran-free-form" | "fsharp" | "gdresource" | "gdscript" | "gdshader" | "gherkin" | "git-commit" | "git-rebase" | "glimmer-js" | "glimmer-ts" | "glsl" | "gnuplot" | "go" | "graphql" | "groovy" | "hack" | "haml" | "handlebars" | "haskell" | "hcl" | "hjson" | "hlsl" | "html-derivative" | "http" | "imba" | "ini" | "java" | "javascript" | "jinja" | "jison" | "json5" | "jsonc" | "jsonl" | "jsonnet" | "jssm" | "jsx" | "julia" | "kusto" | "less" | "liquid" | "lisp" | "logo" | "lua" | "make" | "marko" | "matlab" | "mdc" | "mermaid" | "mojo" | "narrat" | "nextflow" | "nginx" | "nim" | "nix" | "nushell" | "objective-c" | "objective-cpp" | "ocaml" | "pascal" | "perl" | "php" | "plsql" | "postcss" | "powerquery" | "powershell" | "prisma" | "prolog" | "proto" | "pug" | "puppet" | "purescript" | "r" | "raku" | "razor" | "reg" | "riscv" | "rst" | "ruby" | "rust" | "sas" | "sass" | "scala" | "scheme" | "scss" | "shaderlab" | "shellscript" | "shellsession" | "smalltalk" | "solidity" | "sparql" | "splunk" | "sql" | "ssh-config" | "stata" | "stylus" | "svelte" | "system-verilog" | "tasl" | "tcl" | "terraform" | "tex" | "toml" | "tsx" | "twig" | "typescript" | "typst" | "v" | "vb" | "verilog" | "vhdl" | "viml" | "vue" | "vue-html" | "vyper" | "wasm" | "wenyan" | "wgsl" | "wolfram" | "xml" | "xsl" | "yaml" | "zenscript" | "zig" | "batch" | "be" | "cdc" | "clj" | "ql" | "coffeescript" | "c++" | "c#" | "cs" | "cql" | "dockerfile" | "erl" | "f" | "for" | "f77" | "f90" | "f95" | "f03" | "f08" | "f18" | "f#" | "gjs" | "gts" | "gql" | "hbs" | "hs" | "properties" | "js" | "fsl" | "kt" | "kts" | "kql" | "makefile" | "nar" | "nf" | "nu" | "objc" | "ps" | "ps1" | "jade" | "py" | "perl6" | "rb" | "rs" | "shader" | "bash" | "sh" | "zsh" | "console" | "spl" | "styl" | "tf" | "tfvars" | "ts" | "typ" | "cmd" | "vim" | "vimscript" | "vy" | "文言" | "wl" | "yml";
                block: "coffee" | "diff" | "fish" | "move" | "shell" | "turtle" | "swift" | "python" | "markdown" | "kotlin" | "css" | "latex" | "fs" | "json" | "rel" | "mdx" | "md" | "csv" | "html" | "abap" | "actionscript-3" | "ada" | "angular-html" | "angular-ts" | "apache" | "apex" | "apl" | "applescript" | "ara" | "asm" | "astro" | "awk" | "ballerina" | "bat" | "beancount" | "berry" | "bibtex" | "bicep" | "blade" | "c" | "cadence" | "clarity" | "clojure" | "cmake" | "cobol" | "codeql" | "cpp" | "crystal" | "csharp" | "cue" | "cypher" | "d" | "dart" | "dax" | "docker" | "dream-maker" | "elixir" | "elm" | "erb" | "erlang" | "fortran-fixed-form" | "fortran-free-form" | "fsharp" | "gdresource" | "gdscript" | "gdshader" | "gherkin" | "git-commit" | "git-rebase" | "glimmer-js" | "glimmer-ts" | "glsl" | "gnuplot" | "go" | "graphql" | "groovy" | "hack" | "haml" | "handlebars" | "haskell" | "hcl" | "hjson" | "hlsl" | "html-derivative" | "http" | "imba" | "ini" | "java" | "javascript" | "jinja" | "jison" | "json5" | "jsonc" | "jsonl" | "jsonnet" | "jssm" | "jsx" | "julia" | "kusto" | "less" | "liquid" | "lisp" | "logo" | "lua" | "make" | "marko" | "matlab" | "mdc" | "mermaid" | "mojo" | "narrat" | "nextflow" | "nginx" | "nim" | "nix" | "nushell" | "objective-c" | "objective-cpp" | "ocaml" | "pascal" | "perl" | "php" | "plsql" | "postcss" | "powerquery" | "powershell" | "prisma" | "prolog" | "proto" | "pug" | "puppet" | "purescript" | "r" | "raku" | "razor" | "reg" | "riscv" | "rst" | "ruby" | "rust" | "sas" | "sass" | "scala" | "scheme" | "scss" | "shaderlab" | "shellscript" | "shellsession" | "smalltalk" | "solidity" | "sparql" | "splunk" | "sql" | "ssh-config" | "stata" | "stylus" | "svelte" | "system-verilog" | "tasl" | "tcl" | "terraform" | "tex" | "toml" | "tsx" | "twig" | "typescript" | "typst" | "v" | "vb" | "verilog" | "vhdl" | "viml" | "vue" | "vue-html" | "vyper" | "wasm" | "wenyan" | "wgsl" | "wolfram" | "xml" | "xsl" | "yaml" | "zenscript" | "zig" | "batch" | "be" | "cdc" | "clj" | "ql" | "coffeescript" | "c++" | "c#" | "cs" | "cql" | "dockerfile" | "erl" | "f" | "for" | "f77" | "f90" | "f95" | "f03" | "f08" | "f18" | "f#" | "gjs" | "gts" | "gql" | "hbs" | "hs" | "properties" | "js" | "fsl" | "kt" | "kts" | "kql" | "makefile" | "nar" | "nf" | "nu" | "objc" | "ps" | "ps1" | "jade" | "py" | "perl6" | "rb" | "rs" | "shader" | "bash" | "sh" | "zsh" | "console" | "spl" | "styl" | "tf" | "tfvars" | "ts" | "typ" | "cmd" | "vim" | "vimscript" | "vy" | "文言" | "wl" | "yml";
            }>]>>, {
                inline: "coffee" | "diff" | "fish" | "move" | "shell" | "turtle" | "swift" | "python" | "markdown" | "kotlin" | "css" | "latex" | "fs" | "json" | "rel" | "mdx" | "md" | "csv" | "html" | "abap" | "actionscript-3" | "ada" | "angular-html" | "angular-ts" | "apache" | "apex" | "apl" | "applescript" | "ara" | "asm" | "astro" | "awk" | "ballerina" | "bat" | "beancount" | "berry" | "bibtex" | "bicep" | "blade" | "c" | "cadence" | "clarity" | "clojure" | "cmake" | "cobol" | "codeql" | "cpp" | "crystal" | "csharp" | "cue" | "cypher" | "d" | "dart" | "dax" | "docker" | "dream-maker" | "elixir" | "elm" | "erb" | "erlang" | "fortran-fixed-form" | "fortran-free-form" | "fsharp" | "gdresource" | "gdscript" | "gdshader" | "gherkin" | "git-commit" | "git-rebase" | "glimmer-js" | "glimmer-ts" | "glsl" | "gnuplot" | "go" | "graphql" | "groovy" | "hack" | "haml" | "handlebars" | "haskell" | "hcl" | "hjson" | "hlsl" | "html-derivative" | "http" | "imba" | "ini" | "java" | "javascript" | "jinja" | "jison" | "json5" | "jsonc" | "jsonl" | "jsonnet" | "jssm" | "jsx" | "julia" | "kusto" | "less" | "liquid" | "lisp" | "logo" | "lua" | "make" | "marko" | "matlab" | "mdc" | "mermaid" | "mojo" | "narrat" | "nextflow" | "nginx" | "nim" | "nix" | "nushell" | "objective-c" | "objective-cpp" | "ocaml" | "pascal" | "perl" | "php" | "plsql" | "postcss" | "powerquery" | "powershell" | "prisma" | "prolog" | "proto" | "pug" | "puppet" | "purescript" | "r" | "raku" | "razor" | "reg" | "riscv" | "rst" | "ruby" | "rust" | "sas" | "sass" | "scala" | "scheme" | "scss" | "shaderlab" | "shellscript" | "shellsession" | "smalltalk" | "solidity" | "sparql" | "splunk" | "sql" | "ssh-config" | "stata" | "stylus" | "svelte" | "system-verilog" | "tasl" | "tcl" | "terraform" | "tex" | "toml" | "tsx" | "twig" | "typescript" | "typst" | "v" | "vb" | "verilog" | "vhdl" | "viml" | "vue" | "vue-html" | "vyper" | "wasm" | "wenyan" | "wgsl" | "wolfram" | "xml" | "xsl" | "yaml" | "zenscript" | "zig" | "batch" | "be" | "cdc" | "clj" | "ql" | "coffeescript" | "c++" | "c#" | "cs" | "cql" | "dockerfile" | "erl" | "f" | "for" | "f77" | "f90" | "f95" | "f03" | "f08" | "f18" | "f#" | "gjs" | "gts" | "gql" | "hbs" | "hs" | "properties" | "js" | "fsl" | "kt" | "kts" | "kql" | "makefile" | "nar" | "nf" | "nu" | "objc" | "ps" | "ps1" | "jade" | "py" | "perl6" | "rb" | "rs" | "shader" | "bash" | "sh" | "zsh" | "console" | "spl" | "styl" | "tf" | "tfvars" | "ts" | "typ" | "cmd" | "vim" | "vimscript" | "vy" | "文言" | "wl" | "yml";
                block: "coffee" | "diff" | "fish" | "move" | "shell" | "turtle" | "swift" | "python" | "markdown" | "kotlin" | "css" | "latex" | "fs" | "json" | "rel" | "mdx" | "md" | "csv" | "html" | "abap" | "actionscript-3" | "ada" | "angular-html" | "angular-ts" | "apache" | "apex" | "apl" | "applescript" | "ara" | "asm" | "astro" | "awk" | "ballerina" | "bat" | "beancount" | "berry" | "bibtex" | "bicep" | "blade" | "c" | "cadence" | "clarity" | "clojure" | "cmake" | "cobol" | "codeql" | "cpp" | "crystal" | "csharp" | "cue" | "cypher" | "d" | "dart" | "dax" | "docker" | "dream-maker" | "elixir" | "elm" | "erb" | "erlang" | "fortran-fixed-form" | "fortran-free-form" | "fsharp" | "gdresource" | "gdscript" | "gdshader" | "gherkin" | "git-commit" | "git-rebase" | "glimmer-js" | "glimmer-ts" | "glsl" | "gnuplot" | "go" | "graphql" | "groovy" | "hack" | "haml" | "handlebars" | "haskell" | "hcl" | "hjson" | "hlsl" | "html-derivative" | "http" | "imba" | "ini" | "java" | "javascript" | "jinja" | "jison" | "json5" | "jsonc" | "jsonl" | "jsonnet" | "jssm" | "jsx" | "julia" | "kusto" | "less" | "liquid" | "lisp" | "logo" | "lua" | "make" | "marko" | "matlab" | "mdc" | "mermaid" | "mojo" | "narrat" | "nextflow" | "nginx" | "nim" | "nix" | "nushell" | "objective-c" | "objective-cpp" | "ocaml" | "pascal" | "perl" | "php" | "plsql" | "postcss" | "powerquery" | "powershell" | "prisma" | "prolog" | "proto" | "pug" | "puppet" | "purescript" | "r" | "raku" | "razor" | "reg" | "riscv" | "rst" | "ruby" | "rust" | "sas" | "sass" | "scala" | "scheme" | "scss" | "shaderlab" | "shellscript" | "shellsession" | "smalltalk" | "solidity" | "sparql" | "splunk" | "sql" | "ssh-config" | "stata" | "stylus" | "svelte" | "system-verilog" | "tasl" | "tcl" | "terraform" | "tex" | "toml" | "tsx" | "twig" | "typescript" | "typst" | "v" | "vb" | "verilog" | "vhdl" | "viml" | "vue" | "vue-html" | "vyper" | "wasm" | "wenyan" | "wgsl" | "wolfram" | "xml" | "xsl" | "yaml" | "zenscript" | "zig" | "batch" | "be" | "cdc" | "clj" | "ql" | "coffeescript" | "c++" | "c#" | "cs" | "cql" | "dockerfile" | "erl" | "f" | "for" | "f77" | "f90" | "f95" | "f03" | "f08" | "f18" | "f#" | "gjs" | "gts" | "gql" | "hbs" | "hs" | "properties" | "js" | "fsl" | "kt" | "kts" | "kql" | "makefile" | "nar" | "nf" | "nu" | "objc" | "ps" | "ps1" | "jade" | "py" | "perl6" | "rb" | "rs" | "shader" | "bash" | "sh" | "zsh" | "console" | "spl" | "styl" | "tf" | "tfvars" | "ts" | "typ" | "cmd" | "vim" | "vimscript" | "vy" | "文言" | "wl" | "yml";
            }, "coffee" | "diff" | "fish" | "move" | "shell" | "turtle" | "swift" | "python" | "markdown" | "kotlin" | "css" | "latex" | "fs" | "json" | "rel" | "mdx" | "md" | "csv" | "html" | "abap" | "actionscript-3" | "ada" | "angular-html" | "angular-ts" | "apache" | "apex" | "apl" | "applescript" | "ara" | "asm" | "astro" | "awk" | "ballerina" | "bat" | "beancount" | "berry" | "bibtex" | "bicep" | "blade" | "c" | "cadence" | "clarity" | "clojure" | "cmake" | "cobol" | "codeql" | "cpp" | "crystal" | "csharp" | "cue" | "cypher" | "d" | "dart" | "dax" | "docker" | "dream-maker" | "elixir" | "elm" | "erb" | "erlang" | "fortran-fixed-form" | "fortran-free-form" | "fsharp" | "gdresource" | "gdscript" | "gdshader" | "gherkin" | "git-commit" | "git-rebase" | "glimmer-js" | "glimmer-ts" | "glsl" | "gnuplot" | "go" | "graphql" | "groovy" | "hack" | "haml" | "handlebars" | "haskell" | "hcl" | "hjson" | "hlsl" | "html-derivative" | "http" | "imba" | "ini" | "java" | "javascript" | "jinja" | "jison" | "json5" | "jsonc" | "jsonl" | "jsonnet" | "jssm" | "jsx" | "julia" | "kusto" | "less" | "liquid" | "lisp" | "logo" | "lua" | "make" | "marko" | "matlab" | "mdc" | "mermaid" | "mojo" | "narrat" | "nextflow" | "nginx" | "nim" | "nix" | "nushell" | "objective-c" | "objective-cpp" | "ocaml" | "pascal" | "perl" | "php" | "plsql" | "postcss" | "powerquery" | "powershell" | "prisma" | "prolog" | "proto" | "pug" | "puppet" | "purescript" | "r" | "raku" | "razor" | "reg" | "riscv" | "rst" | "ruby" | "rust" | "sas" | "sass" | "scala" | "scheme" | "scss" | "shaderlab" | "shellscript" | "shellsession" | "smalltalk" | "solidity" | "sparql" | "splunk" | "sql" | "ssh-config" | "stata" | "stylus" | "svelte" | "system-verilog" | "tasl" | "tcl" | "terraform" | "tex" | "toml" | "tsx" | "twig" | "typescript" | "typst" | "v" | "vb" | "verilog" | "vhdl" | "viml" | "vue" | "vue-html" | "vyper" | "wasm" | "wenyan" | "wgsl" | "wolfram" | "xml" | "xsl" | "yaml" | "zenscript" | "zig" | "batch" | "be" | "cdc" | "clj" | "ql" | "coffeescript" | "c++" | "c#" | "cs" | "cql" | "dockerfile" | "erl" | "f" | "for" | "f77" | "f90" | "f95" | "f03" | "f08" | "f18" | "f#" | "gjs" | "gts" | "gql" | "hbs" | "hs" | "properties" | "js" | "fsl" | "kt" | "kts" | "kql" | "makefile" | "nar" | "nf" | "nu" | "objc" | "ps" | "ps1" | "jade" | "py" | "perl6" | "rb" | "rs" | "shader" | "bash" | "sh" | "zsh" | "console" | "spl" | "styl" | "tf" | "tfvars" | "ts" | "typ" | "cmd" | "vim" | "vimscript" | "vy" | "文言" | "wl" | "yml" | {
                inline: "coffee" | "diff" | "fish" | "move" | "shell" | "turtle" | "swift" | "python" | "markdown" | "kotlin" | "css" | "latex" | "fs" | "json" | "rel" | "mdx" | "md" | "csv" | "html" | "abap" | "actionscript-3" | "ada" | "angular-html" | "angular-ts" | "apache" | "apex" | "apl" | "applescript" | "ara" | "asm" | "astro" | "awk" | "ballerina" | "bat" | "beancount" | "berry" | "bibtex" | "bicep" | "blade" | "c" | "cadence" | "clarity" | "clojure" | "cmake" | "cobol" | "codeql" | "cpp" | "crystal" | "csharp" | "cue" | "cypher" | "d" | "dart" | "dax" | "docker" | "dream-maker" | "elixir" | "elm" | "erb" | "erlang" | "fortran-fixed-form" | "fortran-free-form" | "fsharp" | "gdresource" | "gdscript" | "gdshader" | "gherkin" | "git-commit" | "git-rebase" | "glimmer-js" | "glimmer-ts" | "glsl" | "gnuplot" | "go" | "graphql" | "groovy" | "hack" | "haml" | "handlebars" | "haskell" | "hcl" | "hjson" | "hlsl" | "html-derivative" | "http" | "imba" | "ini" | "java" | "javascript" | "jinja" | "jison" | "json5" | "jsonc" | "jsonl" | "jsonnet" | "jssm" | "jsx" | "julia" | "kusto" | "less" | "liquid" | "lisp" | "logo" | "lua" | "make" | "marko" | "matlab" | "mdc" | "mermaid" | "mojo" | "narrat" | "nextflow" | "nginx" | "nim" | "nix" | "nushell" | "objective-c" | "objective-cpp" | "ocaml" | "pascal" | "perl" | "php" | "plsql" | "postcss" | "powerquery" | "powershell" | "prisma" | "prolog" | "proto" | "pug" | "puppet" | "purescript" | "r" | "raku" | "razor" | "reg" | "riscv" | "rst" | "ruby" | "rust" | "sas" | "sass" | "scala" | "scheme" | "scss" | "shaderlab" | "shellscript" | "shellsession" | "smalltalk" | "solidity" | "sparql" | "splunk" | "sql" | "ssh-config" | "stata" | "stylus" | "svelte" | "system-verilog" | "tasl" | "tcl" | "terraform" | "tex" | "toml" | "tsx" | "twig" | "typescript" | "typst" | "v" | "vb" | "verilog" | "vhdl" | "viml" | "vue" | "vue-html" | "vyper" | "wasm" | "wenyan" | "wgsl" | "wolfram" | "xml" | "xsl" | "yaml" | "zenscript" | "zig" | "batch" | "be" | "cdc" | "clj" | "ql" | "coffeescript" | "c++" | "c#" | "cs" | "cql" | "dockerfile" | "erl" | "f" | "for" | "f77" | "f90" | "f95" | "f03" | "f08" | "f18" | "f#" | "gjs" | "gts" | "gql" | "hbs" | "hs" | "properties" | "js" | "fsl" | "kt" | "kts" | "kql" | "makefile" | "nar" | "nf" | "nu" | "objc" | "ps" | "ps1" | "jade" | "py" | "perl6" | "rb" | "rs" | "shader" | "bash" | "sh" | "zsh" | "console" | "spl" | "styl" | "tf" | "tfvars" | "ts" | "typ" | "cmd" | "vim" | "vimscript" | "vy" | "文言" | "wl" | "yml";
                block: "coffee" | "diff" | "fish" | "move" | "shell" | "turtle" | "swift" | "python" | "markdown" | "kotlin" | "css" | "latex" | "fs" | "json" | "rel" | "mdx" | "md" | "csv" | "html" | "abap" | "actionscript-3" | "ada" | "angular-html" | "angular-ts" | "apache" | "apex" | "apl" | "applescript" | "ara" | "asm" | "astro" | "awk" | "ballerina" | "bat" | "beancount" | "berry" | "bibtex" | "bicep" | "blade" | "c" | "cadence" | "clarity" | "clojure" | "cmake" | "cobol" | "codeql" | "cpp" | "crystal" | "csharp" | "cue" | "cypher" | "d" | "dart" | "dax" | "docker" | "dream-maker" | "elixir" | "elm" | "erb" | "erlang" | "fortran-fixed-form" | "fortran-free-form" | "fsharp" | "gdresource" | "gdscript" | "gdshader" | "gherkin" | "git-commit" | "git-rebase" | "glimmer-js" | "glimmer-ts" | "glsl" | "gnuplot" | "go" | "graphql" | "groovy" | "hack" | "haml" | "handlebars" | "haskell" | "hcl" | "hjson" | "hlsl" | "html-derivative" | "http" | "imba" | "ini" | "java" | "javascript" | "jinja" | "jison" | "json5" | "jsonc" | "jsonl" | "jsonnet" | "jssm" | "jsx" | "julia" | "kusto" | "less" | "liquid" | "lisp" | "logo" | "lua" | "make" | "marko" | "matlab" | "mdc" | "mermaid" | "mojo" | "narrat" | "nextflow" | "nginx" | "nim" | "nix" | "nushell" | "objective-c" | "objective-cpp" | "ocaml" | "pascal" | "perl" | "php" | "plsql" | "postcss" | "powerquery" | "powershell" | "prisma" | "prolog" | "proto" | "pug" | "puppet" | "purescript" | "r" | "raku" | "razor" | "reg" | "riscv" | "rst" | "ruby" | "rust" | "sas" | "sass" | "scala" | "scheme" | "scss" | "shaderlab" | "shellscript" | "shellsession" | "smalltalk" | "solidity" | "sparql" | "splunk" | "sql" | "ssh-config" | "stata" | "stylus" | "svelte" | "system-verilog" | "tasl" | "tcl" | "terraform" | "tex" | "toml" | "tsx" | "twig" | "typescript" | "typst" | "v" | "vb" | "verilog" | "vhdl" | "viml" | "vue" | "vue-html" | "vyper" | "wasm" | "wenyan" | "wgsl" | "wolfram" | "xml" | "xsl" | "yaml" | "zenscript" | "zig" | "batch" | "be" | "cdc" | "clj" | "ql" | "coffeescript" | "c++" | "c#" | "cs" | "cql" | "dockerfile" | "erl" | "f" | "for" | "f77" | "f90" | "f95" | "f03" | "f08" | "f18" | "f#" | "gjs" | "gts" | "gql" | "hbs" | "hs" | "properties" | "js" | "fsl" | "kt" | "kts" | "kql" | "makefile" | "nar" | "nf" | "nu" | "objc" | "ps" | "ps1" | "jade" | "py" | "perl6" | "rb" | "rs" | "shader" | "bash" | "sh" | "zsh" | "console" | "spl" | "styl" | "tf" | "tfvars" | "ts" | "typ" | "cmd" | "vim" | "vimscript" | "vy" | "文言" | "wl" | "yml";
            } | undefined>;
        }, "strip", z.ZodTypeAny, {
            transformers: {
                regexHighlight: boolean;
                lineHighlight: boolean;
                lineFocus: boolean;
                lineErrorLevel: boolean;
                lineDiff: boolean;
            };
            defaultLanguage: {
                inline: "coffee" | "diff" | "fish" | "move" | "shell" | "turtle" | "swift" | "python" | "markdown" | "kotlin" | "css" | "latex" | "fs" | "json" | "rel" | "mdx" | "md" | "csv" | "html" | "abap" | "actionscript-3" | "ada" | "angular-html" | "angular-ts" | "apache" | "apex" | "apl" | "applescript" | "ara" | "asm" | "astro" | "awk" | "ballerina" | "bat" | "beancount" | "berry" | "bibtex" | "bicep" | "blade" | "c" | "cadence" | "clarity" | "clojure" | "cmake" | "cobol" | "codeql" | "cpp" | "crystal" | "csharp" | "cue" | "cypher" | "d" | "dart" | "dax" | "docker" | "dream-maker" | "elixir" | "elm" | "erb" | "erlang" | "fortran-fixed-form" | "fortran-free-form" | "fsharp" | "gdresource" | "gdscript" | "gdshader" | "gherkin" | "git-commit" | "git-rebase" | "glimmer-js" | "glimmer-ts" | "glsl" | "gnuplot" | "go" | "graphql" | "groovy" | "hack" | "haml" | "handlebars" | "haskell" | "hcl" | "hjson" | "hlsl" | "html-derivative" | "http" | "imba" | "ini" | "java" | "javascript" | "jinja" | "jison" | "json5" | "jsonc" | "jsonl" | "jsonnet" | "jssm" | "jsx" | "julia" | "kusto" | "less" | "liquid" | "lisp" | "logo" | "lua" | "make" | "marko" | "matlab" | "mdc" | "mermaid" | "mojo" | "narrat" | "nextflow" | "nginx" | "nim" | "nix" | "nushell" | "objective-c" | "objective-cpp" | "ocaml" | "pascal" | "perl" | "php" | "plsql" | "postcss" | "powerquery" | "powershell" | "prisma" | "prolog" | "proto" | "pug" | "puppet" | "purescript" | "r" | "raku" | "razor" | "reg" | "riscv" | "rst" | "ruby" | "rust" | "sas" | "sass" | "scala" | "scheme" | "scss" | "shaderlab" | "shellscript" | "shellsession" | "smalltalk" | "solidity" | "sparql" | "splunk" | "sql" | "ssh-config" | "stata" | "stylus" | "svelte" | "system-verilog" | "tasl" | "tcl" | "terraform" | "tex" | "toml" | "tsx" | "twig" | "typescript" | "typst" | "v" | "vb" | "verilog" | "vhdl" | "viml" | "vue" | "vue-html" | "vyper" | "wasm" | "wenyan" | "wgsl" | "wolfram" | "xml" | "xsl" | "yaml" | "zenscript" | "zig" | "batch" | "be" | "cdc" | "clj" | "ql" | "coffeescript" | "c++" | "c#" | "cs" | "cql" | "dockerfile" | "erl" | "f" | "for" | "f77" | "f90" | "f95" | "f03" | "f08" | "f18" | "f#" | "gjs" | "gts" | "gql" | "hbs" | "hs" | "properties" | "js" | "fsl" | "kt" | "kts" | "kql" | "makefile" | "nar" | "nf" | "nu" | "objc" | "ps" | "ps1" | "jade" | "py" | "perl6" | "rb" | "rs" | "shader" | "bash" | "sh" | "zsh" | "console" | "spl" | "styl" | "tf" | "tfvars" | "ts" | "typ" | "cmd" | "vim" | "vimscript" | "vy" | "文言" | "wl" | "yml";
                block: "coffee" | "diff" | "fish" | "move" | "shell" | "turtle" | "swift" | "python" | "markdown" | "kotlin" | "css" | "latex" | "fs" | "json" | "rel" | "mdx" | "md" | "csv" | "html" | "abap" | "actionscript-3" | "ada" | "angular-html" | "angular-ts" | "apache" | "apex" | "apl" | "applescript" | "ara" | "asm" | "astro" | "awk" | "ballerina" | "bat" | "beancount" | "berry" | "bibtex" | "bicep" | "blade" | "c" | "cadence" | "clarity" | "clojure" | "cmake" | "cobol" | "codeql" | "cpp" | "crystal" | "csharp" | "cue" | "cypher" | "d" | "dart" | "dax" | "docker" | "dream-maker" | "elixir" | "elm" | "erb" | "erlang" | "fortran-fixed-form" | "fortran-free-form" | "fsharp" | "gdresource" | "gdscript" | "gdshader" | "gherkin" | "git-commit" | "git-rebase" | "glimmer-js" | "glimmer-ts" | "glsl" | "gnuplot" | "go" | "graphql" | "groovy" | "hack" | "haml" | "handlebars" | "haskell" | "hcl" | "hjson" | "hlsl" | "html-derivative" | "http" | "imba" | "ini" | "java" | "javascript" | "jinja" | "jison" | "json5" | "jsonc" | "jsonl" | "jsonnet" | "jssm" | "jsx" | "julia" | "kusto" | "less" | "liquid" | "lisp" | "logo" | "lua" | "make" | "marko" | "matlab" | "mdc" | "mermaid" | "mojo" | "narrat" | "nextflow" | "nginx" | "nim" | "nix" | "nushell" | "objective-c" | "objective-cpp" | "ocaml" | "pascal" | "perl" | "php" | "plsql" | "postcss" | "powerquery" | "powershell" | "prisma" | "prolog" | "proto" | "pug" | "puppet" | "purescript" | "r" | "raku" | "razor" | "reg" | "riscv" | "rst" | "ruby" | "rust" | "sas" | "sass" | "scala" | "scheme" | "scss" | "shaderlab" | "shellscript" | "shellsession" | "smalltalk" | "solidity" | "sparql" | "splunk" | "sql" | "ssh-config" | "stata" | "stylus" | "svelte" | "system-verilog" | "tasl" | "tcl" | "terraform" | "tex" | "toml" | "tsx" | "twig" | "typescript" | "typst" | "v" | "vb" | "verilog" | "vhdl" | "viml" | "vue" | "vue-html" | "vyper" | "wasm" | "wenyan" | "wgsl" | "wolfram" | "xml" | "xsl" | "yaml" | "zenscript" | "zig" | "batch" | "be" | "cdc" | "clj" | "ql" | "coffeescript" | "c++" | "c#" | "cs" | "cql" | "dockerfile" | "erl" | "f" | "for" | "f77" | "f90" | "f95" | "f03" | "f08" | "f18" | "f#" | "gjs" | "gts" | "gql" | "hbs" | "hs" | "properties" | "js" | "fsl" | "kt" | "kts" | "kql" | "makefile" | "nar" | "nf" | "nu" | "objc" | "ps" | "ps1" | "jade" | "py" | "perl6" | "rb" | "rs" | "shader" | "bash" | "sh" | "zsh" | "console" | "spl" | "styl" | "tf" | "tfvars" | "ts" | "typ" | "cmd" | "vim" | "vimscript" | "vy" | "文言" | "wl" | "yml";
            };
        }, {
            transformers?: {
                regexHighlight?: boolean | undefined;
                lineHighlight?: boolean | undefined;
                lineFocus?: boolean | undefined;
                lineErrorLevel?: boolean | undefined;
                lineDiff?: boolean | undefined;
            } | undefined;
            defaultLanguage?: "coffee" | "diff" | "fish" | "move" | "shell" | "turtle" | "swift" | "python" | "markdown" | "kotlin" | "css" | "latex" | "fs" | "json" | "rel" | "mdx" | "md" | "csv" | "html" | "abap" | "actionscript-3" | "ada" | "angular-html" | "angular-ts" | "apache" | "apex" | "apl" | "applescript" | "ara" | "asm" | "astro" | "awk" | "ballerina" | "bat" | "beancount" | "berry" | "bibtex" | "bicep" | "blade" | "c" | "cadence" | "clarity" | "clojure" | "cmake" | "cobol" | "codeql" | "cpp" | "crystal" | "csharp" | "cue" | "cypher" | "d" | "dart" | "dax" | "docker" | "dream-maker" | "elixir" | "elm" | "erb" | "erlang" | "fortran-fixed-form" | "fortran-free-form" | "fsharp" | "gdresource" | "gdscript" | "gdshader" | "gherkin" | "git-commit" | "git-rebase" | "glimmer-js" | "glimmer-ts" | "glsl" | "gnuplot" | "go" | "graphql" | "groovy" | "hack" | "haml" | "handlebars" | "haskell" | "hcl" | "hjson" | "hlsl" | "html-derivative" | "http" | "imba" | "ini" | "java" | "javascript" | "jinja" | "jison" | "json5" | "jsonc" | "jsonl" | "jsonnet" | "jssm" | "jsx" | "julia" | "kusto" | "less" | "liquid" | "lisp" | "logo" | "lua" | "make" | "marko" | "matlab" | "mdc" | "mermaid" | "mojo" | "narrat" | "nextflow" | "nginx" | "nim" | "nix" | "nushell" | "objective-c" | "objective-cpp" | "ocaml" | "pascal" | "perl" | "php" | "plsql" | "postcss" | "powerquery" | "powershell" | "prisma" | "prolog" | "proto" | "pug" | "puppet" | "purescript" | "r" | "raku" | "razor" | "reg" | "riscv" | "rst" | "ruby" | "rust" | "sas" | "sass" | "scala" | "scheme" | "scss" | "shaderlab" | "shellscript" | "shellsession" | "smalltalk" | "solidity" | "sparql" | "splunk" | "sql" | "ssh-config" | "stata" | "stylus" | "svelte" | "system-verilog" | "tasl" | "tcl" | "terraform" | "tex" | "toml" | "tsx" | "twig" | "typescript" | "typst" | "v" | "vb" | "verilog" | "vhdl" | "viml" | "vue" | "vue-html" | "vyper" | "wasm" | "wenyan" | "wgsl" | "wolfram" | "xml" | "xsl" | "yaml" | "zenscript" | "zig" | "batch" | "be" | "cdc" | "clj" | "ql" | "coffeescript" | "c++" | "c#" | "cs" | "cql" | "dockerfile" | "erl" | "f" | "for" | "f77" | "f90" | "f95" | "f03" | "f08" | "f18" | "f#" | "gjs" | "gts" | "gql" | "hbs" | "hs" | "properties" | "js" | "fsl" | "kt" | "kts" | "kql" | "makefile" | "nar" | "nf" | "nu" | "objc" | "ps" | "ps1" | "jade" | "py" | "perl6" | "rb" | "rs" | "shader" | "bash" | "sh" | "zsh" | "console" | "spl" | "styl" | "tf" | "tfvars" | "ts" | "typ" | "cmd" | "vim" | "vimscript" | "vy" | "文言" | "wl" | "yml" | {
                inline: "coffee" | "diff" | "fish" | "move" | "shell" | "turtle" | "swift" | "python" | "markdown" | "kotlin" | "css" | "latex" | "fs" | "json" | "rel" | "mdx" | "md" | "csv" | "html" | "abap" | "actionscript-3" | "ada" | "angular-html" | "angular-ts" | "apache" | "apex" | "apl" | "applescript" | "ara" | "asm" | "astro" | "awk" | "ballerina" | "bat" | "beancount" | "berry" | "bibtex" | "bicep" | "blade" | "c" | "cadence" | "clarity" | "clojure" | "cmake" | "cobol" | "codeql" | "cpp" | "crystal" | "csharp" | "cue" | "cypher" | "d" | "dart" | "dax" | "docker" | "dream-maker" | "elixir" | "elm" | "erb" | "erlang" | "fortran-fixed-form" | "fortran-free-form" | "fsharp" | "gdresource" | "gdscript" | "gdshader" | "gherkin" | "git-commit" | "git-rebase" | "glimmer-js" | "glimmer-ts" | "glsl" | "gnuplot" | "go" | "graphql" | "groovy" | "hack" | "haml" | "handlebars" | "haskell" | "hcl" | "hjson" | "hlsl" | "html-derivative" | "http" | "imba" | "ini" | "java" | "javascript" | "jinja" | "jison" | "json5" | "jsonc" | "jsonl" | "jsonnet" | "jssm" | "jsx" | "julia" | "kusto" | "less" | "liquid" | "lisp" | "logo" | "lua" | "make" | "marko" | "matlab" | "mdc" | "mermaid" | "mojo" | "narrat" | "nextflow" | "nginx" | "nim" | "nix" | "nushell" | "objective-c" | "objective-cpp" | "ocaml" | "pascal" | "perl" | "php" | "plsql" | "postcss" | "powerquery" | "powershell" | "prisma" | "prolog" | "proto" | "pug" | "puppet" | "purescript" | "r" | "raku" | "razor" | "reg" | "riscv" | "rst" | "ruby" | "rust" | "sas" | "sass" | "scala" | "scheme" | "scss" | "shaderlab" | "shellscript" | "shellsession" | "smalltalk" | "solidity" | "sparql" | "splunk" | "sql" | "ssh-config" | "stata" | "stylus" | "svelte" | "system-verilog" | "tasl" | "tcl" | "terraform" | "tex" | "toml" | "tsx" | "twig" | "typescript" | "typst" | "v" | "vb" | "verilog" | "vhdl" | "viml" | "vue" | "vue-html" | "vyper" | "wasm" | "wenyan" | "wgsl" | "wolfram" | "xml" | "xsl" | "yaml" | "zenscript" | "zig" | "batch" | "be" | "cdc" | "clj" | "ql" | "coffeescript" | "c++" | "c#" | "cs" | "cql" | "dockerfile" | "erl" | "f" | "for" | "f77" | "f90" | "f95" | "f03" | "f08" | "f18" | "f#" | "gjs" | "gts" | "gql" | "hbs" | "hs" | "properties" | "js" | "fsl" | "kt" | "kts" | "kql" | "makefile" | "nar" | "nf" | "nu" | "objc" | "ps" | "ps1" | "jade" | "py" | "perl6" | "rb" | "rs" | "shader" | "bash" | "sh" | "zsh" | "console" | "spl" | "styl" | "tf" | "tfvars" | "ts" | "typ" | "cmd" | "vim" | "vimscript" | "vy" | "文言" | "wl" | "yml";
                block: "coffee" | "diff" | "fish" | "move" | "shell" | "turtle" | "swift" | "python" | "markdown" | "kotlin" | "css" | "latex" | "fs" | "json" | "rel" | "mdx" | "md" | "csv" | "html" | "abap" | "actionscript-3" | "ada" | "angular-html" | "angular-ts" | "apache" | "apex" | "apl" | "applescript" | "ara" | "asm" | "astro" | "awk" | "ballerina" | "bat" | "beancount" | "berry" | "bibtex" | "bicep" | "blade" | "c" | "cadence" | "clarity" | "clojure" | "cmake" | "cobol" | "codeql" | "cpp" | "crystal" | "csharp" | "cue" | "cypher" | "d" | "dart" | "dax" | "docker" | "dream-maker" | "elixir" | "elm" | "erb" | "erlang" | "fortran-fixed-form" | "fortran-free-form" | "fsharp" | "gdresource" | "gdscript" | "gdshader" | "gherkin" | "git-commit" | "git-rebase" | "glimmer-js" | "glimmer-ts" | "glsl" | "gnuplot" | "go" | "graphql" | "groovy" | "hack" | "haml" | "handlebars" | "haskell" | "hcl" | "hjson" | "hlsl" | "html-derivative" | "http" | "imba" | "ini" | "java" | "javascript" | "jinja" | "jison" | "json5" | "jsonc" | "jsonl" | "jsonnet" | "jssm" | "jsx" | "julia" | "kusto" | "less" | "liquid" | "lisp" | "logo" | "lua" | "make" | "marko" | "matlab" | "mdc" | "mermaid" | "mojo" | "narrat" | "nextflow" | "nginx" | "nim" | "nix" | "nushell" | "objective-c" | "objective-cpp" | "ocaml" | "pascal" | "perl" | "php" | "plsql" | "postcss" | "powerquery" | "powershell" | "prisma" | "prolog" | "proto" | "pug" | "puppet" | "purescript" | "r" | "raku" | "razor" | "reg" | "riscv" | "rst" | "ruby" | "rust" | "sas" | "sass" | "scala" | "scheme" | "scss" | "shaderlab" | "shellscript" | "shellsession" | "smalltalk" | "solidity" | "sparql" | "splunk" | "sql" | "ssh-config" | "stata" | "stylus" | "svelte" | "system-verilog" | "tasl" | "tcl" | "terraform" | "tex" | "toml" | "tsx" | "twig" | "typescript" | "typst" | "v" | "vb" | "verilog" | "vhdl" | "viml" | "vue" | "vue-html" | "vyper" | "wasm" | "wenyan" | "wgsl" | "wolfram" | "xml" | "xsl" | "yaml" | "zenscript" | "zig" | "batch" | "be" | "cdc" | "clj" | "ql" | "coffeescript" | "c++" | "c#" | "cs" | "cql" | "dockerfile" | "erl" | "f" | "for" | "f77" | "f90" | "f95" | "f03" | "f08" | "f18" | "f#" | "gjs" | "gts" | "gql" | "hbs" | "hs" | "properties" | "js" | "fsl" | "kt" | "kts" | "kql" | "makefile" | "nar" | "nf" | "nu" | "objc" | "ps" | "ps1" | "jade" | "py" | "perl6" | "rb" | "rs" | "shader" | "bash" | "sh" | "zsh" | "console" | "spl" | "styl" | "tf" | "tfvars" | "ts" | "typ" | "cmd" | "vim" | "vimscript" | "vy" | "文言" | "wl" | "yml";
            } | undefined;
        }>>;
    }, "strip", z.ZodTypeAny, {
        editor: {
            defaultLangauge: string;
            useVimMode: boolean;
        };
        theme: {
            dark: "andromeeda" | "aurora-x" | "ayu-dark" | "catppuccin-frappe" | "catppuccin-latte" | "catppuccin-macchiato" | "catppuccin-mocha" | "dark-plus" | "dracula" | "dracula-soft" | "github-dark" | "github-dark-dimmed" | "github-light" | "light-plus" | "material-theme" | "material-theme-darker" | "material-theme-lighter" | "material-theme-ocean" | "material-theme-palenight" | "min-dark" | "min-light" | "monokai" | "night-owl" | "nord" | "one-dark-pro" | "poimandres" | "red" | "rose-pine" | "rose-pine-dawn" | "rose-pine-moon" | "slack-dark" | "slack-ochin" | "solarized-dark" | "solarized-light" | "synthwave-84" | "tokyo-night" | "vesper" | "vitesse-black" | "vitesse-dark" | "vitesse-light";
            light: "andromeeda" | "aurora-x" | "ayu-dark" | "catppuccin-frappe" | "catppuccin-latte" | "catppuccin-macchiato" | "catppuccin-mocha" | "dark-plus" | "dracula" | "dracula-soft" | "github-dark" | "github-dark-dimmed" | "github-light" | "light-plus" | "material-theme" | "material-theme-darker" | "material-theme-lighter" | "material-theme-ocean" | "material-theme-palenight" | "min-dark" | "min-light" | "monokai" | "night-owl" | "nord" | "one-dark-pro" | "poimandres" | "red" | "rose-pine" | "rose-pine-dawn" | "rose-pine-moon" | "slack-dark" | "slack-ochin" | "solarized-dark" | "solarized-light" | "synthwave-84" | "tokyo-night" | "vesper" | "vitesse-black" | "vitesse-dark" | "vitesse-light";
        };
        syntaxHighlighting: {
            transformers: {
                regexHighlight: boolean;
                lineHighlight: boolean;
                lineFocus: boolean;
                lineErrorLevel: boolean;
                lineDiff: boolean;
            };
            defaultLanguage: {
                inline: "coffee" | "diff" | "fish" | "move" | "shell" | "turtle" | "swift" | "python" | "markdown" | "kotlin" | "css" | "latex" | "fs" | "json" | "rel" | "mdx" | "md" | "csv" | "html" | "abap" | "actionscript-3" | "ada" | "angular-html" | "angular-ts" | "apache" | "apex" | "apl" | "applescript" | "ara" | "asm" | "astro" | "awk" | "ballerina" | "bat" | "beancount" | "berry" | "bibtex" | "bicep" | "blade" | "c" | "cadence" | "clarity" | "clojure" | "cmake" | "cobol" | "codeql" | "cpp" | "crystal" | "csharp" | "cue" | "cypher" | "d" | "dart" | "dax" | "docker" | "dream-maker" | "elixir" | "elm" | "erb" | "erlang" | "fortran-fixed-form" | "fortran-free-form" | "fsharp" | "gdresource" | "gdscript" | "gdshader" | "gherkin" | "git-commit" | "git-rebase" | "glimmer-js" | "glimmer-ts" | "glsl" | "gnuplot" | "go" | "graphql" | "groovy" | "hack" | "haml" | "handlebars" | "haskell" | "hcl" | "hjson" | "hlsl" | "html-derivative" | "http" | "imba" | "ini" | "java" | "javascript" | "jinja" | "jison" | "json5" | "jsonc" | "jsonl" | "jsonnet" | "jssm" | "jsx" | "julia" | "kusto" | "less" | "liquid" | "lisp" | "logo" | "lua" | "make" | "marko" | "matlab" | "mdc" | "mermaid" | "mojo" | "narrat" | "nextflow" | "nginx" | "nim" | "nix" | "nushell" | "objective-c" | "objective-cpp" | "ocaml" | "pascal" | "perl" | "php" | "plsql" | "postcss" | "powerquery" | "powershell" | "prisma" | "prolog" | "proto" | "pug" | "puppet" | "purescript" | "r" | "raku" | "razor" | "reg" | "riscv" | "rst" | "ruby" | "rust" | "sas" | "sass" | "scala" | "scheme" | "scss" | "shaderlab" | "shellscript" | "shellsession" | "smalltalk" | "solidity" | "sparql" | "splunk" | "sql" | "ssh-config" | "stata" | "stylus" | "svelte" | "system-verilog" | "tasl" | "tcl" | "terraform" | "tex" | "toml" | "tsx" | "twig" | "typescript" | "typst" | "v" | "vb" | "verilog" | "vhdl" | "viml" | "vue" | "vue-html" | "vyper" | "wasm" | "wenyan" | "wgsl" | "wolfram" | "xml" | "xsl" | "yaml" | "zenscript" | "zig" | "batch" | "be" | "cdc" | "clj" | "ql" | "coffeescript" | "c++" | "c#" | "cs" | "cql" | "dockerfile" | "erl" | "f" | "for" | "f77" | "f90" | "f95" | "f03" | "f08" | "f18" | "f#" | "gjs" | "gts" | "gql" | "hbs" | "hs" | "properties" | "js" | "fsl" | "kt" | "kts" | "kql" | "makefile" | "nar" | "nf" | "nu" | "objc" | "ps" | "ps1" | "jade" | "py" | "perl6" | "rb" | "rs" | "shader" | "bash" | "sh" | "zsh" | "console" | "spl" | "styl" | "tf" | "tfvars" | "ts" | "typ" | "cmd" | "vim" | "vimscript" | "vy" | "文言" | "wl" | "yml";
                block: "coffee" | "diff" | "fish" | "move" | "shell" | "turtle" | "swift" | "python" | "markdown" | "kotlin" | "css" | "latex" | "fs" | "json" | "rel" | "mdx" | "md" | "csv" | "html" | "abap" | "actionscript-3" | "ada" | "angular-html" | "angular-ts" | "apache" | "apex" | "apl" | "applescript" | "ara" | "asm" | "astro" | "awk" | "ballerina" | "bat" | "beancount" | "berry" | "bibtex" | "bicep" | "blade" | "c" | "cadence" | "clarity" | "clojure" | "cmake" | "cobol" | "codeql" | "cpp" | "crystal" | "csharp" | "cue" | "cypher" | "d" | "dart" | "dax" | "docker" | "dream-maker" | "elixir" | "elm" | "erb" | "erlang" | "fortran-fixed-form" | "fortran-free-form" | "fsharp" | "gdresource" | "gdscript" | "gdshader" | "gherkin" | "git-commit" | "git-rebase" | "glimmer-js" | "glimmer-ts" | "glsl" | "gnuplot" | "go" | "graphql" | "groovy" | "hack" | "haml" | "handlebars" | "haskell" | "hcl" | "hjson" | "hlsl" | "html-derivative" | "http" | "imba" | "ini" | "java" | "javascript" | "jinja" | "jison" | "json5" | "jsonc" | "jsonl" | "jsonnet" | "jssm" | "jsx" | "julia" | "kusto" | "less" | "liquid" | "lisp" | "logo" | "lua" | "make" | "marko" | "matlab" | "mdc" | "mermaid" | "mojo" | "narrat" | "nextflow" | "nginx" | "nim" | "nix" | "nushell" | "objective-c" | "objective-cpp" | "ocaml" | "pascal" | "perl" | "php" | "plsql" | "postcss" | "powerquery" | "powershell" | "prisma" | "prolog" | "proto" | "pug" | "puppet" | "purescript" | "r" | "raku" | "razor" | "reg" | "riscv" | "rst" | "ruby" | "rust" | "sas" | "sass" | "scala" | "scheme" | "scss" | "shaderlab" | "shellscript" | "shellsession" | "smalltalk" | "solidity" | "sparql" | "splunk" | "sql" | "ssh-config" | "stata" | "stylus" | "svelte" | "system-verilog" | "tasl" | "tcl" | "terraform" | "tex" | "toml" | "tsx" | "twig" | "typescript" | "typst" | "v" | "vb" | "verilog" | "vhdl" | "viml" | "vue" | "vue-html" | "vyper" | "wasm" | "wenyan" | "wgsl" | "wolfram" | "xml" | "xsl" | "yaml" | "zenscript" | "zig" | "batch" | "be" | "cdc" | "clj" | "ql" | "coffeescript" | "c++" | "c#" | "cs" | "cql" | "dockerfile" | "erl" | "f" | "for" | "f77" | "f90" | "f95" | "f03" | "f08" | "f18" | "f#" | "gjs" | "gts" | "gql" | "hbs" | "hs" | "properties" | "js" | "fsl" | "kt" | "kts" | "kql" | "makefile" | "nar" | "nf" | "nu" | "objc" | "ps" | "ps1" | "jade" | "py" | "perl6" | "rb" | "rs" | "shader" | "bash" | "sh" | "zsh" | "console" | "spl" | "styl" | "tf" | "tfvars" | "ts" | "typ" | "cmd" | "vim" | "vimscript" | "vy" | "文言" | "wl" | "yml";
            };
        };
    }, {
        editor?: {
            defaultLangauge?: string | undefined;
            useVimMode?: boolean | undefined;
        } | undefined;
        theme?: {
            dark?: "andromeeda" | "aurora-x" | "ayu-dark" | "catppuccin-frappe" | "catppuccin-latte" | "catppuccin-macchiato" | "catppuccin-mocha" | "dark-plus" | "dracula" | "dracula-soft" | "github-dark" | "github-dark-dimmed" | "github-light" | "light-plus" | "material-theme" | "material-theme-darker" | "material-theme-lighter" | "material-theme-ocean" | "material-theme-palenight" | "min-dark" | "min-light" | "monokai" | "night-owl" | "nord" | "one-dark-pro" | "poimandres" | "red" | "rose-pine" | "rose-pine-dawn" | "rose-pine-moon" | "slack-dark" | "slack-ochin" | "solarized-dark" | "solarized-light" | "synthwave-84" | "tokyo-night" | "vesper" | "vitesse-black" | "vitesse-dark" | "vitesse-light" | undefined;
            light?: "andromeeda" | "aurora-x" | "ayu-dark" | "catppuccin-frappe" | "catppuccin-latte" | "catppuccin-macchiato" | "catppuccin-mocha" | "dark-plus" | "dracula" | "dracula-soft" | "github-dark" | "github-dark-dimmed" | "github-light" | "light-plus" | "material-theme" | "material-theme-darker" | "material-theme-lighter" | "material-theme-ocean" | "material-theme-palenight" | "min-dark" | "min-light" | "monokai" | "night-owl" | "nord" | "one-dark-pro" | "poimandres" | "red" | "rose-pine" | "rose-pine-dawn" | "rose-pine-moon" | "slack-dark" | "slack-ochin" | "solarized-dark" | "solarized-light" | "synthwave-84" | "tokyo-night" | "vesper" | "vitesse-black" | "vitesse-dark" | "vitesse-light" | undefined;
        } | undefined;
        syntaxHighlighting?: {
            transformers?: {
                regexHighlight?: boolean | undefined;
                lineHighlight?: boolean | undefined;
                lineFocus?: boolean | undefined;
                lineErrorLevel?: boolean | undefined;
                lineDiff?: boolean | undefined;
            } | undefined;
            defaultLanguage?: "coffee" | "diff" | "fish" | "move" | "shell" | "turtle" | "swift" | "python" | "markdown" | "kotlin" | "css" | "latex" | "fs" | "json" | "rel" | "mdx" | "md" | "csv" | "html" | "abap" | "actionscript-3" | "ada" | "angular-html" | "angular-ts" | "apache" | "apex" | "apl" | "applescript" | "ara" | "asm" | "astro" | "awk" | "ballerina" | "bat" | "beancount" | "berry" | "bibtex" | "bicep" | "blade" | "c" | "cadence" | "clarity" | "clojure" | "cmake" | "cobol" | "codeql" | "cpp" | "crystal" | "csharp" | "cue" | "cypher" | "d" | "dart" | "dax" | "docker" | "dream-maker" | "elixir" | "elm" | "erb" | "erlang" | "fortran-fixed-form" | "fortran-free-form" | "fsharp" | "gdresource" | "gdscript" | "gdshader" | "gherkin" | "git-commit" | "git-rebase" | "glimmer-js" | "glimmer-ts" | "glsl" | "gnuplot" | "go" | "graphql" | "groovy" | "hack" | "haml" | "handlebars" | "haskell" | "hcl" | "hjson" | "hlsl" | "html-derivative" | "http" | "imba" | "ini" | "java" | "javascript" | "jinja" | "jison" | "json5" | "jsonc" | "jsonl" | "jsonnet" | "jssm" | "jsx" | "julia" | "kusto" | "less" | "liquid" | "lisp" | "logo" | "lua" | "make" | "marko" | "matlab" | "mdc" | "mermaid" | "mojo" | "narrat" | "nextflow" | "nginx" | "nim" | "nix" | "nushell" | "objective-c" | "objective-cpp" | "ocaml" | "pascal" | "perl" | "php" | "plsql" | "postcss" | "powerquery" | "powershell" | "prisma" | "prolog" | "proto" | "pug" | "puppet" | "purescript" | "r" | "raku" | "razor" | "reg" | "riscv" | "rst" | "ruby" | "rust" | "sas" | "sass" | "scala" | "scheme" | "scss" | "shaderlab" | "shellscript" | "shellsession" | "smalltalk" | "solidity" | "sparql" | "splunk" | "sql" | "ssh-config" | "stata" | "stylus" | "svelte" | "system-verilog" | "tasl" | "tcl" | "terraform" | "tex" | "toml" | "tsx" | "twig" | "typescript" | "typst" | "v" | "vb" | "verilog" | "vhdl" | "viml" | "vue" | "vue-html" | "vyper" | "wasm" | "wenyan" | "wgsl" | "wolfram" | "xml" | "xsl" | "yaml" | "zenscript" | "zig" | "batch" | "be" | "cdc" | "clj" | "ql" | "coffeescript" | "c++" | "c#" | "cs" | "cql" | "dockerfile" | "erl" | "f" | "for" | "f77" | "f90" | "f95" | "f03" | "f08" | "f18" | "f#" | "gjs" | "gts" | "gql" | "hbs" | "hs" | "properties" | "js" | "fsl" | "kt" | "kts" | "kql" | "makefile" | "nar" | "nf" | "nu" | "objc" | "ps" | "ps1" | "jade" | "py" | "perl6" | "rb" | "rs" | "shader" | "bash" | "sh" | "zsh" | "console" | "spl" | "styl" | "tf" | "tfvars" | "ts" | "typ" | "cmd" | "vim" | "vimscript" | "vy" | "文言" | "wl" | "yml" | {
                inline: "coffee" | "diff" | "fish" | "move" | "shell" | "turtle" | "swift" | "python" | "markdown" | "kotlin" | "css" | "latex" | "fs" | "json" | "rel" | "mdx" | "md" | "csv" | "html" | "abap" | "actionscript-3" | "ada" | "angular-html" | "angular-ts" | "apache" | "apex" | "apl" | "applescript" | "ara" | "asm" | "astro" | "awk" | "ballerina" | "bat" | "beancount" | "berry" | "bibtex" | "bicep" | "blade" | "c" | "cadence" | "clarity" | "clojure" | "cmake" | "cobol" | "codeql" | "cpp" | "crystal" | "csharp" | "cue" | "cypher" | "d" | "dart" | "dax" | "docker" | "dream-maker" | "elixir" | "elm" | "erb" | "erlang" | "fortran-fixed-form" | "fortran-free-form" | "fsharp" | "gdresource" | "gdscript" | "gdshader" | "gherkin" | "git-commit" | "git-rebase" | "glimmer-js" | "glimmer-ts" | "glsl" | "gnuplot" | "go" | "graphql" | "groovy" | "hack" | "haml" | "handlebars" | "haskell" | "hcl" | "hjson" | "hlsl" | "html-derivative" | "http" | "imba" | "ini" | "java" | "javascript" | "jinja" | "jison" | "json5" | "jsonc" | "jsonl" | "jsonnet" | "jssm" | "jsx" | "julia" | "kusto" | "less" | "liquid" | "lisp" | "logo" | "lua" | "make" | "marko" | "matlab" | "mdc" | "mermaid" | "mojo" | "narrat" | "nextflow" | "nginx" | "nim" | "nix" | "nushell" | "objective-c" | "objective-cpp" | "ocaml" | "pascal" | "perl" | "php" | "plsql" | "postcss" | "powerquery" | "powershell" | "prisma" | "prolog" | "proto" | "pug" | "puppet" | "purescript" | "r" | "raku" | "razor" | "reg" | "riscv" | "rst" | "ruby" | "rust" | "sas" | "sass" | "scala" | "scheme" | "scss" | "shaderlab" | "shellscript" | "shellsession" | "smalltalk" | "solidity" | "sparql" | "splunk" | "sql" | "ssh-config" | "stata" | "stylus" | "svelte" | "system-verilog" | "tasl" | "tcl" | "terraform" | "tex" | "toml" | "tsx" | "twig" | "typescript" | "typst" | "v" | "vb" | "verilog" | "vhdl" | "viml" | "vue" | "vue-html" | "vyper" | "wasm" | "wenyan" | "wgsl" | "wolfram" | "xml" | "xsl" | "yaml" | "zenscript" | "zig" | "batch" | "be" | "cdc" | "clj" | "ql" | "coffeescript" | "c++" | "c#" | "cs" | "cql" | "dockerfile" | "erl" | "f" | "for" | "f77" | "f90" | "f95" | "f03" | "f08" | "f18" | "f#" | "gjs" | "gts" | "gql" | "hbs" | "hs" | "properties" | "js" | "fsl" | "kt" | "kts" | "kql" | "makefile" | "nar" | "nf" | "nu" | "objc" | "ps" | "ps1" | "jade" | "py" | "perl6" | "rb" | "rs" | "shader" | "bash" | "sh" | "zsh" | "console" | "spl" | "styl" | "tf" | "tfvars" | "ts" | "typ" | "cmd" | "vim" | "vimscript" | "vy" | "文言" | "wl" | "yml";
                block: "coffee" | "diff" | "fish" | "move" | "shell" | "turtle" | "swift" | "python" | "markdown" | "kotlin" | "css" | "latex" | "fs" | "json" | "rel" | "mdx" | "md" | "csv" | "html" | "abap" | "actionscript-3" | "ada" | "angular-html" | "angular-ts" | "apache" | "apex" | "apl" | "applescript" | "ara" | "asm" | "astro" | "awk" | "ballerina" | "bat" | "beancount" | "berry" | "bibtex" | "bicep" | "blade" | "c" | "cadence" | "clarity" | "clojure" | "cmake" | "cobol" | "codeql" | "cpp" | "crystal" | "csharp" | "cue" | "cypher" | "d" | "dart" | "dax" | "docker" | "dream-maker" | "elixir" | "elm" | "erb" | "erlang" | "fortran-fixed-form" | "fortran-free-form" | "fsharp" | "gdresource" | "gdscript" | "gdshader" | "gherkin" | "git-commit" | "git-rebase" | "glimmer-js" | "glimmer-ts" | "glsl" | "gnuplot" | "go" | "graphql" | "groovy" | "hack" | "haml" | "handlebars" | "haskell" | "hcl" | "hjson" | "hlsl" | "html-derivative" | "http" | "imba" | "ini" | "java" | "javascript" | "jinja" | "jison" | "json5" | "jsonc" | "jsonl" | "jsonnet" | "jssm" | "jsx" | "julia" | "kusto" | "less" | "liquid" | "lisp" | "logo" | "lua" | "make" | "marko" | "matlab" | "mdc" | "mermaid" | "mojo" | "narrat" | "nextflow" | "nginx" | "nim" | "nix" | "nushell" | "objective-c" | "objective-cpp" | "ocaml" | "pascal" | "perl" | "php" | "plsql" | "postcss" | "powerquery" | "powershell" | "prisma" | "prolog" | "proto" | "pug" | "puppet" | "purescript" | "r" | "raku" | "razor" | "reg" | "riscv" | "rst" | "ruby" | "rust" | "sas" | "sass" | "scala" | "scheme" | "scss" | "shaderlab" | "shellscript" | "shellsession" | "smalltalk" | "solidity" | "sparql" | "splunk" | "sql" | "ssh-config" | "stata" | "stylus" | "svelte" | "system-verilog" | "tasl" | "tcl" | "terraform" | "tex" | "toml" | "tsx" | "twig" | "typescript" | "typst" | "v" | "vb" | "verilog" | "vhdl" | "viml" | "vue" | "vue-html" | "vyper" | "wasm" | "wenyan" | "wgsl" | "wolfram" | "xml" | "xsl" | "yaml" | "zenscript" | "zig" | "batch" | "be" | "cdc" | "clj" | "ql" | "coffeescript" | "c++" | "c#" | "cs" | "cql" | "dockerfile" | "erl" | "f" | "for" | "f77" | "f90" | "f95" | "f03" | "f08" | "f18" | "f#" | "gjs" | "gts" | "gql" | "hbs" | "hs" | "properties" | "js" | "fsl" | "kt" | "kts" | "kql" | "makefile" | "nar" | "nf" | "nu" | "objc" | "ps" | "ps1" | "jade" | "py" | "perl6" | "rb" | "rs" | "shader" | "bash" | "sh" | "zsh" | "console" | "spl" | "styl" | "tf" | "tfvars" | "ts" | "typ" | "cmd" | "vim" | "vimscript" | "vy" | "文言" | "wl" | "yml";
            } | undefined;
        } | undefined;
    }>>>;
    database: z.ZodOptional<z.ZodDefault<z.ZodObject<{
        storeFormatted: z.ZodDefault<z.ZodBoolean>;
        removeIfNotPresentInFs: z.ZodDefault<z.ZodBoolean>;
    }, "strip", z.ZodTypeAny, {
        storeFormatted: boolean;
        removeIfNotPresentInFs: boolean;
    }, {
        storeFormatted?: boolean | undefined;
        removeIfNotPresentInFs?: boolean | undefined;
    }>>>;
    navigation: z.ZodOptional<z.ZodDefault<z.ZodObject<{
        navbarBreakpoint: z.ZodDefault<z.ZodObject<{
            full: z.ZodDefault<z.ZodNumber>;
            minimal: z.ZodDefault<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            full: number;
            minimal: number;
        }, {
            full?: number | undefined;
            minimal?: number | undefined;
        }>>;
        maxResultLength: z.ZodDefault<z.ZodObject<{
            categories: z.ZodDefault<z.ZodNumber>;
            equations: z.ZodDefault<z.ZodNumber>;
            snippets: z.ZodDefault<z.ZodNumber>;
            searchAll: z.ZodDefault<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            snippets: number;
            searchAll: number;
            equations: number;
            categories: number;
        }, {
            snippets?: number | undefined;
            searchAll?: number | undefined;
            equations?: number | undefined;
            categories?: number | undefined;
        }>>;
        bookmarkLink: z.ZodDefault<z.ZodOptional<z.ZodUnion<[z.ZodLiteral<"sidebar">, z.ZodLiteral<"navbar">, z.ZodLiteral<"both">, z.ZodLiteral<"none">]>>>;
        syncLink: z.ZodDefault<z.ZodOptional<z.ZodUnion<[z.ZodLiteral<"sidebar">, z.ZodLiteral<"navbar">, z.ZodLiteral<"both">, z.ZodLiteral<"none">]>>>;
        fileSystemToggle: z.ZodOptional<z.ZodUnion<[z.ZodLiteral<"sidebar">, z.ZodLiteral<"navbar">, z.ZodLiteral<"both">, z.ZodLiteral<"none">]>>;
        darkmodeToggle: z.ZodDefault<z.ZodOptional<z.ZodUnion<[z.ZodLiteral<"sidebar">, z.ZodLiteral<"navbar">, z.ZodLiteral<"both">, z.ZodLiteral<"none">]>>>;
        settings: z.ZodOptional<z.ZodUnion<[z.ZodLiteral<"sidebar">, z.ZodLiteral<"navbar">, z.ZodLiteral<"both">, z.ZodLiteral<"none">]>>;
        equationsLink: z.ZodOptional<z.ZodUnion<[z.ZodLiteral<"sidebar">, z.ZodLiteral<"navbar">, z.ZodLiteral<"both">, z.ZodLiteral<"none">]>>;
        snippetsLink: z.ZodDefault<z.ZodOptional<z.ZodUnion<[z.ZodLiteral<"sidebar">, z.ZodLiteral<"navbar">, z.ZodLiteral<"both">, z.ZodLiteral<"none">]>>>;
        backupData: z.ZodOptional<z.ZodUnion<[z.ZodLiteral<"sidebar">, z.ZodLiteral<"navbar">, z.ZodLiteral<"both">, z.ZodLiteral<"none">]>>;
        navbarLinks: z.ZodDefault<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodObject<{
            label: z.ZodString;
            icon: z.ZodOptional<z.ZodEffects<z.ZodString, string, string>>;
            href: z.ZodOptional<z.ZodString>;
            onClick: z.ZodOptional<z.ZodFunction<z.ZodTuple<[], z.ZodUnknown>, z.ZodUnknown>>;
        }, "strip", z.ZodTypeAny, {
            label: string;
            href?: string | undefined;
            icon?: string | undefined;
            onClick?: ((...args: unknown[]) => unknown) | undefined;
        }, {
            label: string;
            href?: string | undefined;
            icon?: string | undefined;
            onClick?: ((...args: unknown[]) => unknown) | undefined;
        }>]>, "many">>;
        sidebarLinks: z.ZodDefault<z.ZodArray<z.ZodUnion<[z.ZodObject<{
            icon: z.ZodEffects<z.ZodString, string, string>;
            href: z.ZodOptional<z.ZodString>;
            label: z.ZodOptional<z.ZodString>;
            Icon: z.ZodOptional<z.ZodFunction<z.ZodTuple<[], z.ZodUnknown>, z.ZodUnknown>>;
            onClick: z.ZodOptional<z.ZodFunction<z.ZodTuple<[], z.ZodUnknown>, z.ZodUnknown>>;
        }, "strip", z.ZodTypeAny, {
            icon: string;
            label?: string | undefined;
            href?: string | undefined;
            onClick?: ((...args: unknown[]) => unknown) | undefined;
            Icon?: ((...args: unknown[]) => unknown) | undefined;
        }, {
            icon: string;
            label?: string | undefined;
            href?: string | undefined;
            onClick?: ((...args: unknown[]) => unknown) | undefined;
            Icon?: ((...args: unknown[]) => unknown) | undefined;
        }>, z.ZodString]>, "many">>;
    }, "strip", z.ZodTypeAny, {
        navbarBreakpoint: {
            full: number;
            minimal: number;
        };
        maxResultLength: {
            snippets: number;
            searchAll: number;
            equations: number;
            categories: number;
        };
        bookmarkLink: "none" | "sidebar" | "navbar" | "both";
        syncLink: "none" | "sidebar" | "navbar" | "both";
        darkmodeToggle: "none" | "sidebar" | "navbar" | "both";
        snippetsLink: "none" | "sidebar" | "navbar" | "both";
        navbarLinks: (string | {
            label: string;
            href?: string | undefined;
            icon?: string | undefined;
            onClick?: ((...args: unknown[]) => unknown) | undefined;
        })[];
        sidebarLinks: (string | {
            icon: string;
            label?: string | undefined;
            href?: string | undefined;
            onClick?: ((...args: unknown[]) => unknown) | undefined;
            Icon?: ((...args: unknown[]) => unknown) | undefined;
        })[];
        settings?: "none" | "sidebar" | "navbar" | "both" | undefined;
        fileSystemToggle?: "none" | "sidebar" | "navbar" | "both" | undefined;
        equationsLink?: "none" | "sidebar" | "navbar" | "both" | undefined;
        backupData?: "none" | "sidebar" | "navbar" | "both" | undefined;
    }, {
        settings?: "none" | "sidebar" | "navbar" | "both" | undefined;
        navbarBreakpoint?: {
            full?: number | undefined;
            minimal?: number | undefined;
        } | undefined;
        maxResultLength?: {
            snippets?: number | undefined;
            searchAll?: number | undefined;
            equations?: number | undefined;
            categories?: number | undefined;
        } | undefined;
        bookmarkLink?: "none" | "sidebar" | "navbar" | "both" | undefined;
        syncLink?: "none" | "sidebar" | "navbar" | "both" | undefined;
        fileSystemToggle?: "none" | "sidebar" | "navbar" | "both" | undefined;
        darkmodeToggle?: "none" | "sidebar" | "navbar" | "both" | undefined;
        equationsLink?: "none" | "sidebar" | "navbar" | "both" | undefined;
        snippetsLink?: "none" | "sidebar" | "navbar" | "both" | undefined;
        backupData?: "none" | "sidebar" | "navbar" | "both" | undefined;
        navbarLinks?: (string | {
            label: string;
            href?: string | undefined;
            icon?: string | undefined;
            onClick?: ((...args: unknown[]) => unknown) | undefined;
        })[] | undefined;
        sidebarLinks?: (string | {
            icon: string;
            label?: string | undefined;
            href?: string | undefined;
            onClick?: ((...args: unknown[]) => unknown) | undefined;
            Icon?: ((...args: unknown[]) => unknown) | undefined;
        })[] | undefined;
    }>>>;
    terminal: z.ZodOptional<z.ZodDefault<z.ZodObject<{
        logLevel: z.ZodDefault<z.ZodUnion<[z.ZodLiteral<"debug">, z.ZodLiteral<"verbose">, z.ZodLiteral<"info">, z.ZodLiteral<"none">]>>;
    }, "strip", z.ZodTypeAny, {
        logLevel: "info" | "none" | "debug" | "verbose";
    }, {
        logLevel?: "info" | "none" | "debug" | "verbose" | undefined;
    }>>>;
    jupyter: z.ZodOptional<z.ZodDefault<z.ZodObject<{
        execute: z.ZodDefault<z.ZodBoolean>;
        environment: z.ZodDefault<z.ZodString>;
        syntaxHighlightTheme: z.ZodDefault<z.ZodString>;
        jupyterToken: z.ZodOptional<z.ZodString>;
        jupyterPort: z.ZodDefault<z.ZodNumber>;
        initiallyFoldCells: z.ZodDefault<z.ZodBoolean>;
        kernel: z.ZodDefault<z.ZodString>;
        jupyterReactProps: z.ZodDefault<z.ZodObject<{
            collaborative: z.ZodDefault<z.ZodBoolean>;
            lite: z.ZodDefault<z.ZodBoolean>;
            serverUrls: z.ZodOptional<z.ZodObject<{
                baseUrl: z.ZodOptional<z.ZodString>;
                wsUrl: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                baseUrl?: string | undefined;
                wsUrl?: string | undefined;
            }, {
                baseUrl?: string | undefined;
                wsUrl?: string | undefined;
            }>>;
        }, "strip", z.ZodTypeAny, {
            collaborative: boolean;
            lite: boolean;
            serverUrls?: {
                baseUrl?: string | undefined;
                wsUrl?: string | undefined;
            } | undefined;
        }, {
            collaborative?: boolean | undefined;
            lite?: boolean | undefined;
            serverUrls?: {
                baseUrl?: string | undefined;
                wsUrl?: string | undefined;
            } | undefined;
        }>>;
        nbConvert: z.ZodDefault<z.ZodObject<{
            nbconvertPath: z.ZodOptional<z.ZodString>;
            conversionTimeout: z.ZodDefault<z.ZodNumber>;
            customConversionFunction: z.ZodOptional<z.ZodObject<{
                pdf: z.ZodOptional<z.ZodFunction<z.ZodTuple<[z.ZodString, z.ZodString], z.ZodUnknown>, z.ZodString>>;
            }, "strip", z.ZodTypeAny, {
                pdf?: ((args_0: string, args_1: string, ...args: unknown[]) => string) | undefined;
            }, {
                pdf?: ((args_0: string, args_1: string, ...args: unknown[]) => string) | undefined;
            }>>;
            execute: z.ZodDefault<z.ZodBoolean>;
            nbConvertTemplate: z.ZodDefault<z.ZodUnion<[z.ZodLiteral<"lab">, z.ZodLiteral<"classic">, z.ZodLiteral<"reveal">, z.ZodString]>>;
            notebookOutputDir: z.ZodDefault<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            conversionTimeout: number;
            execute: boolean;
            nbConvertTemplate: string;
            notebookOutputDir: string;
            nbconvertPath?: string | undefined;
            customConversionFunction?: {
                pdf?: ((args_0: string, args_1: string, ...args: unknown[]) => string) | undefined;
            } | undefined;
        }, {
            nbconvertPath?: string | undefined;
            conversionTimeout?: number | undefined;
            customConversionFunction?: {
                pdf?: ((args_0: string, args_1: string, ...args: unknown[]) => string) | undefined;
            } | undefined;
            execute?: boolean | undefined;
            nbConvertTemplate?: string | undefined;
            notebookOutputDir?: string | undefined;
        }>>;
        jupyterNotebookProps: z.ZodDefault<z.ZodObject<{
            cellMetadataPanel: z.ZodDefault<z.ZodBoolean>;
            cellSidebarMargin: z.ZodDefault<z.ZodNumber>;
            height: z.ZodOptional<z.ZodString>;
            maxHeight: z.ZodOptional<z.ZodString>;
            bundledIPyWidgets: z.ZodDefault<z.ZodArray<z.ZodObject<{
                module: z.ZodUnion<[z.ZodString, z.ZodRecord<z.ZodString, z.ZodString>]>;
                name: z.ZodString;
                version: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                name: string;
                module: string | Record<string, string>;
                version: string;
            }, {
                name: string;
                module: string | Record<string, string>;
                version: string;
            }>, "many">>;
            externalIPyWidgets: z.ZodDefault<z.ZodArray<z.ZodObject<Omit<{
                module: z.ZodUnion<[z.ZodString, z.ZodRecord<z.ZodString, z.ZodString>]>;
                name: z.ZodString;
                version: z.ZodString;
            }, "module">, "strip", z.ZodTypeAny, {
                name: string;
                version: string;
            }, {
                name: string;
                version: string;
            }>, "many">>;
            nbgrader: z.ZodDefault<z.ZodBoolean>;
            readOnly: z.ZodDefault<z.ZodBoolean>;
        }, "strip", z.ZodTypeAny, {
            readOnly: boolean;
            cellMetadataPanel: boolean;
            cellSidebarMargin: number;
            bundledIPyWidgets: {
                name: string;
                module: string | Record<string, string>;
                version: string;
            }[];
            externalIPyWidgets: {
                name: string;
                version: string;
            }[];
            nbgrader: boolean;
            height?: string | undefined;
            maxHeight?: string | undefined;
        }, {
            height?: string | undefined;
            readOnly?: boolean | undefined;
            maxHeight?: string | undefined;
            cellMetadataPanel?: boolean | undefined;
            cellSidebarMargin?: number | undefined;
            bundledIPyWidgets?: {
                name: string;
                module: string | Record<string, string>;
                version: string;
            }[] | undefined;
            externalIPyWidgets?: {
                name: string;
                version: string;
            }[] | undefined;
            nbgrader?: boolean | undefined;
        }>>;
        cellInputWrappers: z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodObject<{
            prefix: z.ZodString;
            suffix: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            prefix: string;
            suffix: string;
        }, {
            prefix: string;
            suffix: string;
        }>]>, {
            prefix: string;
            suffix: string;
        }, string | {
            prefix: string;
            suffix: string;
        }>>>;
    }, "strip", z.ZodTypeAny, {
        execute: boolean;
        environment: string;
        syntaxHighlightTheme: string;
        jupyterPort: number;
        initiallyFoldCells: boolean;
        kernel: string;
        jupyterReactProps: {
            collaborative: boolean;
            lite: boolean;
            serverUrls?: {
                baseUrl?: string | undefined;
                wsUrl?: string | undefined;
            } | undefined;
        };
        nbConvert: {
            conversionTimeout: number;
            execute: boolean;
            nbConvertTemplate: string;
            notebookOutputDir: string;
            nbconvertPath?: string | undefined;
            customConversionFunction?: {
                pdf?: ((args_0: string, args_1: string, ...args: unknown[]) => string) | undefined;
            } | undefined;
        };
        jupyterNotebookProps: {
            readOnly: boolean;
            cellMetadataPanel: boolean;
            cellSidebarMargin: number;
            bundledIPyWidgets: {
                name: string;
                module: string | Record<string, string>;
                version: string;
            }[];
            externalIPyWidgets: {
                name: string;
                version: string;
            }[];
            nbgrader: boolean;
            height?: string | undefined;
            maxHeight?: string | undefined;
        };
        cellInputWrappers: Record<string, {
            prefix: string;
            suffix: string;
        }>;
        jupyterToken?: string | undefined;
    }, {
        execute?: boolean | undefined;
        environment?: string | undefined;
        syntaxHighlightTheme?: string | undefined;
        jupyterToken?: string | undefined;
        jupyterPort?: number | undefined;
        initiallyFoldCells?: boolean | undefined;
        kernel?: string | undefined;
        jupyterReactProps?: {
            collaborative?: boolean | undefined;
            lite?: boolean | undefined;
            serverUrls?: {
                baseUrl?: string | undefined;
                wsUrl?: string | undefined;
            } | undefined;
        } | undefined;
        nbConvert?: {
            nbconvertPath?: string | undefined;
            conversionTimeout?: number | undefined;
            customConversionFunction?: {
                pdf?: ((args_0: string, args_1: string, ...args: unknown[]) => string) | undefined;
            } | undefined;
            execute?: boolean | undefined;
            nbConvertTemplate?: string | undefined;
            notebookOutputDir?: string | undefined;
        } | undefined;
        jupyterNotebookProps?: {
            height?: string | undefined;
            readOnly?: boolean | undefined;
            maxHeight?: string | undefined;
            cellMetadataPanel?: boolean | undefined;
            cellSidebarMargin?: number | undefined;
            bundledIPyWidgets?: {
                name: string;
                module: string | Record<string, string>;
                version: string;
            }[] | undefined;
            externalIPyWidgets?: {
                name: string;
                version: string;
            }[] | undefined;
            nbgrader?: boolean | undefined;
        } | undefined;
        cellInputWrappers?: Record<string, string | {
            prefix: string;
            suffix: string;
        }> | undefined;
    }>>>;
    math: z.ZodOptional<z.ZodDefault<z.ZodObject<{
        latexPackages: z.ZodDefault<z.ZodUnion<[z.ZodArray<z.ZodString, "many">, z.ZodLiteral<"all">]>>;
        latexFontUrl: z.ZodEffects<z.ZodString, string, string> | z.ZodEffects<z.ZodOptional<z.ZodString>, string | undefined, string | undefined>;
        constants: z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodNumber>>;
    }, "strip", z.ZodTypeAny, {
        latexPackages: string[] | "all";
        constants: Record<string, number>;
        latexFontUrl?: string | undefined;
    }, {
        latexPackages?: string[] | "all" | undefined;
        latexFontUrl?: string | undefined;
        constants?: Record<string, number> | undefined;
    }>>>;
    UI: z.ZodOptional<z.ZodDefault<z.ZodObject<{
        table: z.ZodDefault<z.ZodObject<{
            maxHeight: z.ZodEffects<z.ZodDefault<z.ZodUnion<[z.ZodString, z.ZodNumber]>>, string, string | number | undefined>;
        }, "strip", z.ZodTypeAny, {
            maxHeight: string;
        }, {
            maxHeight?: string | number | undefined;
        }>>;
        text: z.ZodDefault<z.ZodObject<{
            blockQuoteItalic: z.ZodDefault<z.ZodBoolean>;
            fontPaths: z.ZodDefault<z.ZodUnion<[z.ZodArray<z.ZodObject<{
                path: z.ZodString;
                weight: z.ZodUnion<[z.ZodLiteral<"100">, z.ZodLiteral<"200">, z.ZodLiteral<"300">, z.ZodLiteral<"400">, z.ZodLiteral<"500">, z.ZodLiteral<"600">, z.ZodLiteral<"700">, z.ZodLiteral<"800">, z.ZodLiteral<"900">]>;
                style: z.ZodUnion<[z.ZodLiteral<"italic">, z.ZodLiteral<"bold">, z.ZodLiteral<"normal">]>;
            }, "strip", z.ZodTypeAny, {
                weight: "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900";
                path: string;
                style: "bold" | "italic" | "normal";
            }, {
                weight: "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900";
                path: string;
                style: "bold" | "italic" | "normal";
            }>, "many">, z.ZodLiteral<"default">]>>;
        }, "strip", z.ZodTypeAny, {
            blockQuoteItalic: boolean;
            fontPaths: "default" | {
                weight: "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900";
                path: string;
                style: "bold" | "italic" | "normal";
            }[];
        }, {
            blockQuoteItalic?: boolean | undefined;
            fontPaths?: "default" | {
                weight: "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900";
                path: string;
                style: "bold" | "italic" | "normal";
            }[] | undefined;
        }>>;
        media: z.ZodDefault<z.ZodObject<{
            imageMap: z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodEffects<z.ZodString, string, string> | z.ZodEffects<z.ZodOptional<z.ZodString>, string | undefined, string | undefined>>>;
            includeDefaultImageMap: z.ZodDefault<z.ZodBoolean>;
            imageRemoteTest: z.ZodDefault<z.ZodArray<z.ZodType<RegExp, z.ZodTypeDef, RegExp>, "many">>;
        }, "strip", z.ZodTypeAny, {
            imageMap: Record<string, string | undefined>;
            includeDefaultImageMap: boolean;
            imageRemoteTest: RegExp[];
        }, {
            imageMap?: Record<string, string | undefined> | undefined;
            includeDefaultImageMap?: boolean | undefined;
            imageRemoteTest?: RegExp[] | undefined;
        }>>;
        colors: z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodUnion<[z.ZodObject<{
            dark: z.ZodEffects<z.ZodOptional<z.ZodString>, string | undefined, string | undefined>;
            light: z.ZodEffects<z.ZodOptional<z.ZodString>, string | undefined, string | undefined>;
        }, "strip", z.ZodTypeAny, {
            dark?: string | undefined;
            light?: string | undefined;
        }, {
            dark?: string | undefined;
            light?: string | undefined;
        }>, z.ZodEffects<z.ZodString, string | undefined, string>]>>>, {
            dark?: string | undefined;
            light?: string | undefined;
        } | undefined, string | {
            dark?: string | undefined;
            light?: string | undefined;
        } | null | undefined>>>;
        theme: z.ZodDefault<z.ZodUnion<[z.ZodLiteral<"blue">, z.ZodLiteral<"gray">, z.ZodLiteral<"green">, z.ZodLiteral<"neutral">, z.ZodLiteral<"orange">, z.ZodLiteral<"red">, z.ZodLiteral<"rose">, z.ZodLiteral<"slate">, z.ZodLiteral<"stone">, z.ZodLiteral<"violet">, z.ZodLiteral<"yellow">, z.ZodLiteral<"zinc">, z.ZodLiteral<"ulld">]>>;
        autoApplyMdxTitles: z.ZodDefault<z.ZodBoolean>;
    }, "strip", z.ZodTypeAny, {
        table: {
            maxHeight: string;
        };
        text: {
            blockQuoteItalic: boolean;
            fontPaths: "default" | {
                weight: "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900";
                path: string;
                style: "bold" | "italic" | "normal";
            }[];
        };
        media: {
            imageMap: Record<string, string | undefined>;
            includeDefaultImageMap: boolean;
            imageRemoteTest: RegExp[];
        };
        theme: "ulld" | "red" | "orange" | "yellow" | "green" | "blue" | "rose" | "slate" | "gray" | "stone" | "zinc" | "neutral" | "violet";
        colors: Record<string, {
            dark?: string | undefined;
            light?: string | undefined;
        } | undefined>;
        autoApplyMdxTitles: boolean;
    }, {
        table?: {
            maxHeight?: string | number | undefined;
        } | undefined;
        text?: {
            blockQuoteItalic?: boolean | undefined;
            fontPaths?: "default" | {
                weight: "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900";
                path: string;
                style: "bold" | "italic" | "normal";
            }[] | undefined;
        } | undefined;
        media?: {
            imageMap?: Record<string, string | undefined> | undefined;
            includeDefaultImageMap?: boolean | undefined;
            imageRemoteTest?: RegExp[] | undefined;
        } | undefined;
        theme?: "ulld" | "red" | "orange" | "yellow" | "green" | "blue" | "rose" | "slate" | "gray" | "stone" | "zinc" | "neutral" | "violet" | undefined;
        colors?: Record<string, string | {
            dark?: string | undefined;
            light?: string | undefined;
        } | null | undefined> | undefined;
        autoApplyMdxTitles?: boolean | undefined;
    }>>>;
    slots: z.ZodOptional<z.ZodDefault<z.ZodObject<Record<keyof import("../../developer/slotMapRootType.js").SlotMap, z.ZodTypeAny>, "strip", z.ZodTypeAny, {
        navigation?: any;
        bibliography?: any;
        math?: any;
        snippets?: any;
        dashboard?: any;
        taskManager?: any;
        UI?: any;
        pdf?: any;
        editor?: any;
        form?: any;
        commandPalette?: any;
    }, {
        navigation?: any;
        bibliography?: any;
        math?: any;
        snippets?: any;
        dashboard?: any;
        taskManager?: any;
        UI?: any;
        pdf?: any;
        editor?: any;
        form?: any;
        commandPalette?: any;
    }>>>;
    fsRoot: z.ZodOptional<z.ZodEffects<z.ZodString, string, string>>;
    build: z.ZodOptional<z.ZodDefault<z.ZodObject<{
        database: z.ZodDefault<z.ZodEffects<z.ZodDefault<z.ZodObject<{
            type: z.ZodDefault<z.ZodEnum<["postgres", "sqlite"]>>;
            postgres: z.ZodEffects<z.ZodEffects<z.ZodDefault<z.ZodObject<{
                port: z.ZodDefault<z.ZodNumber>;
                dbName: z.ZodDefault<z.ZodString>;
                connectionURI: z.ZodDefault<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                port: number;
                dbName: string;
                connectionURI: string;
            }, {
                port?: number | undefined;
                dbName?: string | undefined;
                connectionURI?: string | undefined;
            }>>, {
                port: number;
                dbName: string;
                connectionURI: string;
            }, {
                port?: number | undefined;
                dbName?: string | undefined;
                connectionURI?: string | undefined;
            } | undefined>, {
                connectionURI: string;
                port?: undefined;
                dbName?: undefined;
            } | {
                port: number;
                dbName: string;
                connectionURI?: undefined;
            }, {
                port?: number | undefined;
                dbName?: string | undefined;
                connectionURI?: string | undefined;
            } | undefined>;
            prioritize: z.ZodDefault<z.ZodUnion<[z.ZodLiteral<"speed">, z.ZodLiteral<"size">]>>;
        }, "strip", z.ZodTypeAny, {
            type: "postgres" | "sqlite";
            postgres: {
                connectionURI: string;
                port?: undefined;
                dbName?: undefined;
            } | {
                port: number;
                dbName: string;
                connectionURI?: undefined;
            };
            prioritize: "size" | "speed";
        }, {
            type?: "postgres" | "sqlite" | undefined;
            postgres?: {
                port?: number | undefined;
                dbName?: string | undefined;
                connectionURI?: string | undefined;
            } | undefined;
            prioritize?: "size" | "speed" | undefined;
        }>>, {
            type: "postgres" | "sqlite";
            postgres: {
                connectionURI: string;
                port?: undefined;
                dbName?: undefined;
            } | {
                port: number;
                dbName: string;
                connectionURI?: undefined;
            };
            prioritize: "size" | "speed";
        }, {
            type?: "postgres" | "sqlite" | undefined;
            postgres?: {
                port?: number | undefined;
                dbName?: string | undefined;
                connectionURI?: string | undefined;
            } | undefined;
            prioritize?: "size" | "speed" | undefined;
        } | undefined>>;
        additionalUserContent: z.ZodDefault<z.ZodObject<{
            css: z.ZodOptional<z.ZodString>;
            favicon: z.ZodOptional<z.ZodEffects<z.ZodString, string, string>>;
            logo: z.ZodOptional<z.ZodEffects<z.ZodString, string, string>>;
        }, "strip", z.ZodTypeAny, {
            css?: string | undefined;
            logo?: string | undefined;
            favicon?: string | undefined;
        }, {
            css?: string | undefined;
            logo?: string | undefined;
            favicon?: string | undefined;
        }>>;
    }, "strip", z.ZodTypeAny, {
        database: {
            type: "postgres" | "sqlite";
            postgres: {
                connectionURI: string;
                port?: undefined;
                dbName?: undefined;
            } | {
                port: number;
                dbName: string;
                connectionURI?: undefined;
            };
            prioritize: "size" | "speed";
        };
        additionalUserContent: {
            css?: string | undefined;
            logo?: string | undefined;
            favicon?: string | undefined;
        };
    }, {
        database?: {
            type?: "postgres" | "sqlite" | undefined;
            postgres?: {
                port?: number | undefined;
                dbName?: string | undefined;
                connectionURI?: string | undefined;
            } | undefined;
            prioritize?: "size" | "speed" | undefined;
        } | undefined;
        additionalUserContent?: {
            css?: string | undefined;
            logo?: string | undefined;
            favicon?: string | undefined;
        } | undefined;
    }>>>;
    autoTag: z.ZodOptional<z.ZodDefault<z.ZodArray<z.ZodObject<{
        path: z.ZodString;
        tag: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        tag: string;
        path: string;
    }, {
        tag: string;
        path: string;
    }>, "many">>>;
    autoTopic: z.ZodOptional<z.ZodDefault<z.ZodArray<z.ZodObject<{
        path: z.ZodString;
        topic: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        path: string;
        topic: string;
    }, {
        path: string;
        topic: string;
    }>, "many">>>;
    autoSubject: z.ZodOptional<z.ZodDefault<z.ZodArray<z.ZodObject<{
        path: z.ZodString;
        subject: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        path: string;
        subject: string;
    }, {
        path: string;
        subject: string;
    }>, "many">>>;
    alwaysPreferFs: z.ZodOptional<z.ZodDefault<z.ZodBoolean>>;
    ignoreFilepaths: z.ZodOptional<z.ZodEffects<z.ZodDefault<z.ZodArray<z.ZodUnion<[z.ZodType<RegExp, z.ZodTypeDef, RegExp>, z.ZodString, z.ZodObject<{
        original: z.ZodString;
        regex: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodType<RegExp, z.ZodTypeDef, RegExp>]>, RegExp, string | RegExp>;
    }, "strip", z.ZodTypeAny, {
        regex: RegExp;
        original: string;
    }, {
        regex: string | RegExp;
        original: string;
    }>]>, "many">>, string[], (string | RegExp | {
        regex: string | RegExp;
        original: string;
    })[] | undefined>>;
    tempDir: z.ZodOptional<z.ZodEffects<z.ZodDefault<z.ZodString>, string, string | undefined>>;
    generatedDir: z.ZodOptional<z.ZodEffects<z.ZodDefault<z.ZodString>, string, string | undefined>>;
    ignorePreferFsExtensions: z.ZodOptional<z.ZodDefault<z.ZodArray<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodType<RegExp, z.ZodTypeDef, RegExp>, z.ZodObject<{
        original: z.ZodString;
        regex: z.ZodType<RegExp, z.ZodTypeDef, RegExp>;
    }, "strip", z.ZodTypeAny, {
        regex: RegExp;
        original: string;
    }, {
        regex: RegExp;
        original: string;
    }>]>, import("../configUtilitySchemas.js").ParsedRegExpField, string | RegExp | {
        regex: RegExp;
        original: string;
    }>, "many">>>;
    fileTypePriority: z.ZodOptional<z.ZodDefault<z.ZodArray<z.ZodUnion<[z.ZodUnion<[z.ZodLiteral<".mdx">, z.ZodLiteral<".md">, z.ZodLiteral<".ipynb">]>, z.ZodUnion<[z.ZodLiteral<".csv">, z.ZodLiteral<".tsv">, z.ZodLiteral<".excel">, z.ZodLiteral<".numpy">, z.ZodLiteral<".html">, z.ZodLiteral<".pickle">, z.ZodLiteral<".db">, z.ZodLiteral<".sql">, z.ZodLiteral<".pdf">, z.ZodLiteral<".json">, z.ZodLiteral<".tex">, z.ZodLiteral<".hdf5">]>]>, "many">>>;
    noteTypes: z.ZodEffects<z.ZodDefault<z.ZodArray<z.ZodEffects<z.ZodObject<{
        label: z.ZodString;
        icon: z.ZodDefault<z.ZodEffects<z.ZodString, string, string>>;
        UI: z.ZodDefault<z.ZodDefault<z.ZodObject<{
            styles: z.ZodDefault<z.ZodObject<{
                dark: z.ZodDefault<z.ZodObject<{
                    bg: z.ZodOptional<z.ZodString>;
                    fg: z.ZodOptional<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    bg?: string | undefined;
                    fg?: string | undefined;
                }, {
                    bg?: string | undefined;
                    fg?: string | undefined;
                }>>;
                light: z.ZodDefault<z.ZodObject<{
                    bg: z.ZodOptional<z.ZodString>;
                    fg: z.ZodOptional<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    bg?: string | undefined;
                    fg?: string | undefined;
                }, {
                    bg?: string | undefined;
                    fg?: string | undefined;
                }>>;
            }, "strip", z.ZodTypeAny, {
                dark: {
                    bg?: string | undefined;
                    fg?: string | undefined;
                };
                light: {
                    bg?: string | undefined;
                    fg?: string | undefined;
                };
            }, {
                dark?: {
                    bg?: string | undefined;
                    fg?: string | undefined;
                } | undefined;
                light?: {
                    bg?: string | undefined;
                    fg?: string | undefined;
                } | undefined;
            }>>;
        }, "strip", z.ZodTypeAny, {
            styles: {
                dark: {
                    bg?: string | undefined;
                    fg?: string | undefined;
                };
                light: {
                    bg?: string | undefined;
                    fg?: string | undefined;
                };
            };
        }, {
            styles?: {
                dark?: {
                    bg?: string | undefined;
                    fg?: string | undefined;
                } | undefined;
                light?: {
                    bg?: string | undefined;
                    fg?: string | undefined;
                } | undefined;
            } | undefined;
        }>>>;
        fs: z.ZodEffects<z.ZodString, string, string>;
        id: z.ZodOptional<z.ZodString>;
        docType: z.ZodOptional<z.ZodEffects<z.ZodString, string, string>>;
        filePathPattern: z.ZodOptional<z.ZodString>;
        matchWeight: z.ZodDefault<z.ZodNumber>;
        url: z.ZodOptional<z.ZodEffects<z.ZodString, string, string>>;
        urlQuery: z.ZodDefault<z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnion<[z.ZodString, z.ZodArray<z.ZodString, "many">, z.ZodNumber, z.ZodArray<z.ZodNumber, "many">]>>>>;
        keywords: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
        topicLabel: z.ZodOptional<z.ZodString>;
        subjectLabel: z.ZodOptional<z.ZodString>;
        autoTag: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
        autoTopic: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
        autoSubject: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
        inSidebar: z.ZodDefault<z.ZodBoolean>;
        inNavbar: z.ZodDefault<z.ZodBoolean>;
    }, "strip", z.ZodTypeAny, {
        label: string;
        icon: string;
        UI: {
            styles: {
                dark: {
                    bg?: string | undefined;
                    fg?: string | undefined;
                };
                light: {
                    bg?: string | undefined;
                    fg?: string | undefined;
                };
            };
        };
        fs: string;
        matchWeight: number;
        urlQuery: Record<string, string | number | string[] | number[]>;
        keywords: string[];
        autoTag: string[];
        autoTopic: string[];
        autoSubject: string[];
        inSidebar: boolean;
        inNavbar: boolean;
        id?: string | undefined;
        docType?: string | undefined;
        filePathPattern?: string | undefined;
        url?: string | undefined;
        topicLabel?: string | undefined;
        subjectLabel?: string | undefined;
    }, {
        label: string;
        fs: string;
        icon?: string | undefined;
        UI?: {
            styles?: {
                dark?: {
                    bg?: string | undefined;
                    fg?: string | undefined;
                } | undefined;
                light?: {
                    bg?: string | undefined;
                    fg?: string | undefined;
                } | undefined;
            } | undefined;
        } | undefined;
        id?: string | undefined;
        docType?: string | undefined;
        filePathPattern?: string | undefined;
        matchWeight?: number | undefined;
        url?: string | undefined;
        urlQuery?: Record<string, string | number | string[] | number[]> | undefined;
        keywords?: string[] | undefined;
        topicLabel?: string | undefined;
        subjectLabel?: string | undefined;
        autoTag?: string[] | undefined;
        autoTopic?: string[] | undefined;
        autoSubject?: string[] | undefined;
        inSidebar?: boolean | undefined;
        inNavbar?: boolean | undefined;
    }>, {
        docType: string;
        id: string;
        url: string;
        label: string;
        icon: string;
        UI: {
            styles: {
                dark: {
                    bg?: string | undefined;
                    fg?: string | undefined;
                };
                light: {
                    bg?: string | undefined;
                    fg?: string | undefined;
                };
            };
        };
        fs: string;
        matchWeight: number;
        urlQuery: Record<string, string | number | string[] | number[]>;
        keywords: string[];
        autoTag: string[];
        autoTopic: string[];
        autoSubject: string[];
        inSidebar: boolean;
        inNavbar: boolean;
        filePathPattern?: string | undefined;
        topicLabel?: string | undefined;
        subjectLabel?: string | undefined;
    }, {
        label: string;
        fs: string;
        icon?: string | undefined;
        UI?: {
            styles?: {
                dark?: {
                    bg?: string | undefined;
                    fg?: string | undefined;
                } | undefined;
                light?: {
                    bg?: string | undefined;
                    fg?: string | undefined;
                } | undefined;
            } | undefined;
        } | undefined;
        id?: string | undefined;
        docType?: string | undefined;
        filePathPattern?: string | undefined;
        matchWeight?: number | undefined;
        url?: string | undefined;
        urlQuery?: Record<string, string | number | string[] | number[]> | undefined;
        keywords?: string[] | undefined;
        topicLabel?: string | undefined;
        subjectLabel?: string | undefined;
        autoTag?: string[] | undefined;
        autoTopic?: string[] | undefined;
        autoSubject?: string[] | undefined;
        inSidebar?: boolean | undefined;
        inNavbar?: boolean | undefined;
    }>, "many">>, {
        docType: string;
        id: string;
        url: string;
        label: string;
        icon: string;
        UI: {
            styles: {
                dark: {
                    bg?: string | undefined;
                    fg?: string | undefined;
                };
                light: {
                    bg?: string | undefined;
                    fg?: string | undefined;
                };
            };
        };
        fs: string;
        matchWeight: number;
        urlQuery: Record<string, string | number | string[] | number[]>;
        keywords: string[];
        autoTag: string[];
        autoTopic: string[];
        autoSubject: string[];
        inSidebar: boolean;
        inNavbar: boolean;
        filePathPattern?: string | undefined;
        topicLabel?: string | undefined;
        subjectLabel?: string | undefined;
    }[], {
        label: string;
        fs: string;
        icon?: string | undefined;
        UI?: {
            styles?: {
                dark?: {
                    bg?: string | undefined;
                    fg?: string | undefined;
                } | undefined;
                light?: {
                    bg?: string | undefined;
                    fg?: string | undefined;
                } | undefined;
            } | undefined;
        } | undefined;
        id?: string | undefined;
        docType?: string | undefined;
        filePathPattern?: string | undefined;
        matchWeight?: number | undefined;
        url?: string | undefined;
        urlQuery?: Record<string, string | number | string[] | number[]> | undefined;
        keywords?: string[] | undefined;
        topicLabel?: string | undefined;
        subjectLabel?: string | undefined;
        autoTag?: string[] | undefined;
        autoTopic?: string[] | undefined;
        autoSubject?: string[] | undefined;
        inSidebar?: boolean | undefined;
        inNavbar?: boolean | undefined;
    }[] | undefined>;
    bibPath: z.ZodOptional<z.ZodEffects<z.ZodDefault<z.ZodString>, string, string | undefined>>;
    cslPath: z.ZodOptional<z.ZodEffects<z.ZodOptional<z.ZodString>, string | undefined, string | undefined>>;
    dateHandling: z.ZodOptional<z.ZodDefault<z.ZodObject<{
        enableAdvancedFormat: z.ZodDefault<z.ZodBoolean>;
        format: z.ZodDefault<z.ZodUnion<[z.ZodString, z.ZodObject<{
            short: z.ZodDefault<z.ZodString>;
            long: z.ZodDefault<z.ZodString>;
            withTime: z.ZodDefault<z.ZodString>;
            timeOnly: z.ZodDefault<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            short: string;
            long: string;
            withTime: string;
            timeOnly: string;
        }, {
            short?: string | undefined;
            long?: string | undefined;
            withTime?: string | undefined;
            timeOnly?: string | undefined;
        }>]>>;
        defaultTimeDisplayType: z.ZodDefault<z.ZodUnion<[z.ZodLiteral<"analog">, z.ZodLiteral<"summarized">, z.ZodLiteral<"descriptive">]>>;
        defaultTimeZone: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        enableAdvancedFormat: boolean;
        format: string | {
            short: string;
            long: string;
            withTime: string;
            timeOnly: string;
        };
        defaultTimeDisplayType: "summarized" | "analog" | "descriptive";
        defaultTimeZone?: string | undefined;
    }, {
        enableAdvancedFormat?: boolean | undefined;
        format?: string | {
            short?: string | undefined;
            long?: string | undefined;
            withTime?: string | undefined;
            timeOnly?: string | undefined;
        } | undefined;
        defaultTimeDisplayType?: "summarized" | "analog" | "descriptive" | undefined;
        defaultTimeZone?: string | undefined;
    }>>>;
    linkAliases: z.ZodOptional<z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodString>>>;
    features: z.ZodOptional<z.ZodOptional<z.ZodObject<{
        enabled: z.ZodOptional<z.ZodDefault<z.ZodObject<{
            commandPalette: z.ZodDefault<z.ZodBoolean>;
            tikz: z.ZodDefault<z.ZodBoolean>;
        }, "strip", z.ZodTypeAny, {
            commandPalette: boolean;
            tikz: boolean;
        }, {
            commandPalette?: boolean | undefined;
            tikz?: boolean | undefined;
        }>>>;
        pages: z.ZodOptional<z.ZodObject<{
            equations: z.ZodOptional<z.ZodDefault<z.ZodBoolean>>;
            snippets: z.ZodOptional<z.ZodDefault<z.ZodBoolean>>;
            calendar: z.ZodOptional<z.ZodDefault<z.ZodBoolean>>;
            bibliography: z.ZodOptional<z.ZodDefault<z.ZodBoolean>>;
            taskManager: z.ZodOptional<z.ZodDefault<z.ZodBoolean>>;
        }, "strip", z.ZodTypeAny, {
            calendar?: boolean | undefined;
            bibliography?: boolean | undefined;
            snippets?: boolean | undefined;
            taskManager?: boolean | undefined;
            equations?: boolean | undefined;
        }, {
            calendar?: boolean | undefined;
            bibliography?: boolean | undefined;
            snippets?: boolean | undefined;
            taskManager?: boolean | undefined;
            equations?: boolean | undefined;
        }>>;
    }, "strip", z.ZodTypeAny, {
        pages?: {
            calendar?: boolean | undefined;
            bibliography?: boolean | undefined;
            snippets?: boolean | undefined;
            taskManager?: boolean | undefined;
            equations?: boolean | undefined;
        } | undefined;
        enabled?: {
            commandPalette: boolean;
            tikz: boolean;
        } | undefined;
    }, {
        pages?: {
            calendar?: boolean | undefined;
            bibliography?: boolean | undefined;
            snippets?: boolean | undefined;
            taskManager?: boolean | undefined;
            equations?: boolean | undefined;
        } | undefined;
        enabled?: {
            commandPalette?: boolean | undefined;
            tikz?: boolean | undefined;
        } | undefined;
    }>>>;
    plotting: z.ZodOptional<z.ZodDefault<z.ZodObject<{
        plotColorList: z.ZodDefault<z.ZodUnion<[z.ZodArray<z.ZodString, "many">, z.ZodObject<{
            dark: z.ZodArray<z.ZodString, "many">;
            light: z.ZodArray<z.ZodString, "many">;
        }, "strip", z.ZodTypeAny, {
            dark: string[];
            light: string[];
        }, {
            dark: string[];
            light: string[];
        }>]>>;
        plotColorCycleMethod: z.ZodDefault<z.ZodUnion<[z.ZodLiteral<"inOrder">, z.ZodLiteral<"random">]>>;
    }, "strip", z.ZodTypeAny, {
        plotColorList: string[] | {
            dark: string[];
            light: string[];
        };
        plotColorCycleMethod: "inOrder" | "random";
    }, {
        plotColorList?: string[] | {
            dark: string[];
            light: string[];
        } | undefined;
        plotColorCycleMethod?: "inOrder" | "random" | undefined;
    }>>>;
    credentials: z.ZodOptional<z.ZodDefault<z.ZodObject<{
        googleServiceAccountJsonPath: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        googleServiceAccountJsonPath?: string | undefined;
    }, {
        googleServiceAccountJsonPath?: string | undefined;
    }>>>;
    performance: z.ZodOptional<z.ZodDefault<z.ZodObject<{
        latexParsingDebounceTimeout: z.ZodDefault<z.ZodNumber>;
        mdxParsingDebounceTimeout: z.ZodDefault<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        latexParsingDebounceTimeout: number;
        mdxParsingDebounceTimeout: number;
    }, {
        latexParsingDebounceTimeout?: number | undefined;
        mdxParsingDebounceTimeout?: number | undefined;
    }>>>;
    meta: z.ZodOptional<z.ZodDefault<z.ZodObject<{
        title: z.ZodDefault<z.ZodString>;
        desc: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        title: string;
        desc?: string | undefined;
    }, {
        title?: string | undefined;
        desc?: string | undefined;
    }>>>;
    plugins: z.ZodOptional<z.ZodEffects<z.ZodDefault<z.ZodUnion<[z.ZodObject<{
        name: z.ZodString;
        version: z.ZodDefault<z.ZodString>;
        parserIndex: z.ZodDefault<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        name: string;
        version: string;
        parserIndex: number;
    }, {
        name: string;
        version?: string | undefined;
        parserIndex?: number | undefined;
    }>, z.ZodArray<z.ZodObject<{
        name: z.ZodString;
        version: z.ZodDefault<z.ZodString>;
        parserIndex: z.ZodDefault<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        name: string;
        version: string;
        parserIndex: number;
    }, {
        name: string;
        version?: string | undefined;
        parserIndex?: number | undefined;
    }>, "many">, z.ZodString, z.ZodArray<z.ZodString, "many">]>>, ({
        name: string;
        version: string;
        parserIndex: number;
    } | {
        name: string;
        version: string;
    })[], string | string[] | {
        name: string;
        version?: string | undefined;
        parserIndex?: number | undefined;
    } | {
        name: string;
        version?: string | undefined;
        parserIndex?: number | undefined;
    }[] | undefined>>;
}, "strip", z.ZodTypeAny, {
    noteTypes: {
        docType: string;
        id: string;
        url: string;
        label: string;
        icon: string;
        UI: {
            styles: {
                dark: {
                    bg?: string | undefined;
                    fg?: string | undefined;
                };
                light: {
                    bg?: string | undefined;
                    fg?: string | undefined;
                };
            };
        };
        fs: string;
        matchWeight: number;
        urlQuery: Record<string, string | number | string[] | number[]>;
        keywords: string[];
        autoTag: string[];
        autoTopic: string[];
        autoSubject: string[];
        inSidebar: boolean;
        inNavbar: boolean;
        filePathPattern?: string | undefined;
        topicLabel?: string | undefined;
        subjectLabel?: string | undefined;
    }[];
    code?: {
        editor: {
            defaultLangauge: string;
            useVimMode: boolean;
        };
        theme: {
            dark: "andromeeda" | "aurora-x" | "ayu-dark" | "catppuccin-frappe" | "catppuccin-latte" | "catppuccin-macchiato" | "catppuccin-mocha" | "dark-plus" | "dracula" | "dracula-soft" | "github-dark" | "github-dark-dimmed" | "github-light" | "light-plus" | "material-theme" | "material-theme-darker" | "material-theme-lighter" | "material-theme-ocean" | "material-theme-palenight" | "min-dark" | "min-light" | "monokai" | "night-owl" | "nord" | "one-dark-pro" | "poimandres" | "red" | "rose-pine" | "rose-pine-dawn" | "rose-pine-moon" | "slack-dark" | "slack-ochin" | "solarized-dark" | "solarized-light" | "synthwave-84" | "tokyo-night" | "vesper" | "vitesse-black" | "vitesse-dark" | "vitesse-light";
            light: "andromeeda" | "aurora-x" | "ayu-dark" | "catppuccin-frappe" | "catppuccin-latte" | "catppuccin-macchiato" | "catppuccin-mocha" | "dark-plus" | "dracula" | "dracula-soft" | "github-dark" | "github-dark-dimmed" | "github-light" | "light-plus" | "material-theme" | "material-theme-darker" | "material-theme-lighter" | "material-theme-ocean" | "material-theme-palenight" | "min-dark" | "min-light" | "monokai" | "night-owl" | "nord" | "one-dark-pro" | "poimandres" | "red" | "rose-pine" | "rose-pine-dawn" | "rose-pine-moon" | "slack-dark" | "slack-ochin" | "solarized-dark" | "solarized-light" | "synthwave-84" | "tokyo-night" | "vesper" | "vitesse-black" | "vitesse-dark" | "vitesse-light";
        };
        syntaxHighlighting: {
            transformers: {
                regexHighlight: boolean;
                lineHighlight: boolean;
                lineFocus: boolean;
                lineErrorLevel: boolean;
                lineDiff: boolean;
            };
            defaultLanguage: {
                inline: "coffee" | "diff" | "fish" | "move" | "shell" | "turtle" | "swift" | "python" | "markdown" | "kotlin" | "css" | "latex" | "fs" | "json" | "rel" | "mdx" | "md" | "csv" | "html" | "abap" | "actionscript-3" | "ada" | "angular-html" | "angular-ts" | "apache" | "apex" | "apl" | "applescript" | "ara" | "asm" | "astro" | "awk" | "ballerina" | "bat" | "beancount" | "berry" | "bibtex" | "bicep" | "blade" | "c" | "cadence" | "clarity" | "clojure" | "cmake" | "cobol" | "codeql" | "cpp" | "crystal" | "csharp" | "cue" | "cypher" | "d" | "dart" | "dax" | "docker" | "dream-maker" | "elixir" | "elm" | "erb" | "erlang" | "fortran-fixed-form" | "fortran-free-form" | "fsharp" | "gdresource" | "gdscript" | "gdshader" | "gherkin" | "git-commit" | "git-rebase" | "glimmer-js" | "glimmer-ts" | "glsl" | "gnuplot" | "go" | "graphql" | "groovy" | "hack" | "haml" | "handlebars" | "haskell" | "hcl" | "hjson" | "hlsl" | "html-derivative" | "http" | "imba" | "ini" | "java" | "javascript" | "jinja" | "jison" | "json5" | "jsonc" | "jsonl" | "jsonnet" | "jssm" | "jsx" | "julia" | "kusto" | "less" | "liquid" | "lisp" | "logo" | "lua" | "make" | "marko" | "matlab" | "mdc" | "mermaid" | "mojo" | "narrat" | "nextflow" | "nginx" | "nim" | "nix" | "nushell" | "objective-c" | "objective-cpp" | "ocaml" | "pascal" | "perl" | "php" | "plsql" | "postcss" | "powerquery" | "powershell" | "prisma" | "prolog" | "proto" | "pug" | "puppet" | "purescript" | "r" | "raku" | "razor" | "reg" | "riscv" | "rst" | "ruby" | "rust" | "sas" | "sass" | "scala" | "scheme" | "scss" | "shaderlab" | "shellscript" | "shellsession" | "smalltalk" | "solidity" | "sparql" | "splunk" | "sql" | "ssh-config" | "stata" | "stylus" | "svelte" | "system-verilog" | "tasl" | "tcl" | "terraform" | "tex" | "toml" | "tsx" | "twig" | "typescript" | "typst" | "v" | "vb" | "verilog" | "vhdl" | "viml" | "vue" | "vue-html" | "vyper" | "wasm" | "wenyan" | "wgsl" | "wolfram" | "xml" | "xsl" | "yaml" | "zenscript" | "zig" | "batch" | "be" | "cdc" | "clj" | "ql" | "coffeescript" | "c++" | "c#" | "cs" | "cql" | "dockerfile" | "erl" | "f" | "for" | "f77" | "f90" | "f95" | "f03" | "f08" | "f18" | "f#" | "gjs" | "gts" | "gql" | "hbs" | "hs" | "properties" | "js" | "fsl" | "kt" | "kts" | "kql" | "makefile" | "nar" | "nf" | "nu" | "objc" | "ps" | "ps1" | "jade" | "py" | "perl6" | "rb" | "rs" | "shader" | "bash" | "sh" | "zsh" | "console" | "spl" | "styl" | "tf" | "tfvars" | "ts" | "typ" | "cmd" | "vim" | "vimscript" | "vy" | "文言" | "wl" | "yml";
                block: "coffee" | "diff" | "fish" | "move" | "shell" | "turtle" | "swift" | "python" | "markdown" | "kotlin" | "css" | "latex" | "fs" | "json" | "rel" | "mdx" | "md" | "csv" | "html" | "abap" | "actionscript-3" | "ada" | "angular-html" | "angular-ts" | "apache" | "apex" | "apl" | "applescript" | "ara" | "asm" | "astro" | "awk" | "ballerina" | "bat" | "beancount" | "berry" | "bibtex" | "bicep" | "blade" | "c" | "cadence" | "clarity" | "clojure" | "cmake" | "cobol" | "codeql" | "cpp" | "crystal" | "csharp" | "cue" | "cypher" | "d" | "dart" | "dax" | "docker" | "dream-maker" | "elixir" | "elm" | "erb" | "erlang" | "fortran-fixed-form" | "fortran-free-form" | "fsharp" | "gdresource" | "gdscript" | "gdshader" | "gherkin" | "git-commit" | "git-rebase" | "glimmer-js" | "glimmer-ts" | "glsl" | "gnuplot" | "go" | "graphql" | "groovy" | "hack" | "haml" | "handlebars" | "haskell" | "hcl" | "hjson" | "hlsl" | "html-derivative" | "http" | "imba" | "ini" | "java" | "javascript" | "jinja" | "jison" | "json5" | "jsonc" | "jsonl" | "jsonnet" | "jssm" | "jsx" | "julia" | "kusto" | "less" | "liquid" | "lisp" | "logo" | "lua" | "make" | "marko" | "matlab" | "mdc" | "mermaid" | "mojo" | "narrat" | "nextflow" | "nginx" | "nim" | "nix" | "nushell" | "objective-c" | "objective-cpp" | "ocaml" | "pascal" | "perl" | "php" | "plsql" | "postcss" | "powerquery" | "powershell" | "prisma" | "prolog" | "proto" | "pug" | "puppet" | "purescript" | "r" | "raku" | "razor" | "reg" | "riscv" | "rst" | "ruby" | "rust" | "sas" | "sass" | "scala" | "scheme" | "scss" | "shaderlab" | "shellscript" | "shellsession" | "smalltalk" | "solidity" | "sparql" | "splunk" | "sql" | "ssh-config" | "stata" | "stylus" | "svelte" | "system-verilog" | "tasl" | "tcl" | "terraform" | "tex" | "toml" | "tsx" | "twig" | "typescript" | "typst" | "v" | "vb" | "verilog" | "vhdl" | "viml" | "vue" | "vue-html" | "vyper" | "wasm" | "wenyan" | "wgsl" | "wolfram" | "xml" | "xsl" | "yaml" | "zenscript" | "zig" | "batch" | "be" | "cdc" | "clj" | "ql" | "coffeescript" | "c++" | "c#" | "cs" | "cql" | "dockerfile" | "erl" | "f" | "for" | "f77" | "f90" | "f95" | "f03" | "f08" | "f18" | "f#" | "gjs" | "gts" | "gql" | "hbs" | "hs" | "properties" | "js" | "fsl" | "kt" | "kts" | "kql" | "makefile" | "nar" | "nf" | "nu" | "objc" | "ps" | "ps1" | "jade" | "py" | "perl6" | "rb" | "rs" | "shader" | "bash" | "sh" | "zsh" | "console" | "spl" | "styl" | "tf" | "tfvars" | "ts" | "typ" | "cmd" | "vim" | "vimscript" | "vy" | "文言" | "wl" | "yml";
            };
        };
    } | undefined;
    database?: {
        storeFormatted: boolean;
        removeIfNotPresentInFs: boolean;
    } | undefined;
    navigation?: {
        navbarBreakpoint: {
            full: number;
            minimal: number;
        };
        maxResultLength: {
            snippets: number;
            searchAll: number;
            equations: number;
            categories: number;
        };
        bookmarkLink: "none" | "sidebar" | "navbar" | "both";
        syncLink: "none" | "sidebar" | "navbar" | "both";
        darkmodeToggle: "none" | "sidebar" | "navbar" | "both";
        snippetsLink: "none" | "sidebar" | "navbar" | "both";
        navbarLinks: (string | {
            label: string;
            href?: string | undefined;
            icon?: string | undefined;
            onClick?: ((...args: unknown[]) => unknown) | undefined;
        })[];
        sidebarLinks: (string | {
            icon: string;
            label?: string | undefined;
            href?: string | undefined;
            onClick?: ((...args: unknown[]) => unknown) | undefined;
            Icon?: ((...args: unknown[]) => unknown) | undefined;
        })[];
        settings?: "none" | "sidebar" | "navbar" | "both" | undefined;
        fileSystemToggle?: "none" | "sidebar" | "navbar" | "both" | undefined;
        equationsLink?: "none" | "sidebar" | "navbar" | "both" | undefined;
        backupData?: "none" | "sidebar" | "navbar" | "both" | undefined;
    } | undefined;
    terminal?: {
        logLevel: "info" | "none" | "debug" | "verbose";
    } | undefined;
    jupyter?: {
        execute: boolean;
        environment: string;
        syntaxHighlightTheme: string;
        jupyterPort: number;
        initiallyFoldCells: boolean;
        kernel: string;
        jupyterReactProps: {
            collaborative: boolean;
            lite: boolean;
            serverUrls?: {
                baseUrl?: string | undefined;
                wsUrl?: string | undefined;
            } | undefined;
        };
        nbConvert: {
            conversionTimeout: number;
            execute: boolean;
            nbConvertTemplate: string;
            notebookOutputDir: string;
            nbconvertPath?: string | undefined;
            customConversionFunction?: {
                pdf?: ((args_0: string, args_1: string, ...args: unknown[]) => string) | undefined;
            } | undefined;
        };
        jupyterNotebookProps: {
            readOnly: boolean;
            cellMetadataPanel: boolean;
            cellSidebarMargin: number;
            bundledIPyWidgets: {
                name: string;
                module: string | Record<string, string>;
                version: string;
            }[];
            externalIPyWidgets: {
                name: string;
                version: string;
            }[];
            nbgrader: boolean;
            height?: string | undefined;
            maxHeight?: string | undefined;
        };
        cellInputWrappers: Record<string, {
            prefix: string;
            suffix: string;
        }>;
        jupyterToken?: string | undefined;
    } | undefined;
    math?: {
        latexPackages: string[] | "all";
        constants: Record<string, number>;
        latexFontUrl?: string | undefined;
    } | undefined;
    UI?: {
        table: {
            maxHeight: string;
        };
        text: {
            blockQuoteItalic: boolean;
            fontPaths: "default" | {
                weight: "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900";
                path: string;
                style: "bold" | "italic" | "normal";
            }[];
        };
        media: {
            imageMap: Record<string, string | undefined>;
            includeDefaultImageMap: boolean;
            imageRemoteTest: RegExp[];
        };
        theme: "ulld" | "red" | "orange" | "yellow" | "green" | "blue" | "rose" | "slate" | "gray" | "stone" | "zinc" | "neutral" | "violet";
        colors: Record<string, {
            dark?: string | undefined;
            light?: string | undefined;
        } | undefined>;
        autoApplyMdxTitles: boolean;
    } | undefined;
    slots?: {
        navigation?: any;
        bibliography?: any;
        math?: any;
        snippets?: any;
        dashboard?: any;
        taskManager?: any;
        UI?: any;
        pdf?: any;
        editor?: any;
        form?: any;
        commandPalette?: any;
    } | undefined;
    fsRoot?: string | undefined;
    build?: {
        database: {
            type: "postgres" | "sqlite";
            postgres: {
                connectionURI: string;
                port?: undefined;
                dbName?: undefined;
            } | {
                port: number;
                dbName: string;
                connectionURI?: undefined;
            };
            prioritize: "size" | "speed";
        };
        additionalUserContent: {
            css?: string | undefined;
            logo?: string | undefined;
            favicon?: string | undefined;
        };
    } | undefined;
    autoTag?: {
        tag: string;
        path: string;
    }[] | undefined;
    autoTopic?: {
        path: string;
        topic: string;
    }[] | undefined;
    autoSubject?: {
        path: string;
        subject: string;
    }[] | undefined;
    alwaysPreferFs?: boolean | undefined;
    ignoreFilepaths?: string[] | undefined;
    tempDir?: string | undefined;
    generatedDir?: string | undefined;
    ignorePreferFsExtensions?: import("../configUtilitySchemas.js").ParsedRegExpField[] | undefined;
    fileTypePriority?: (".mdx" | ".ipynb" | ".csv" | ".tsv" | ".excel" | ".numpy" | ".html" | ".pickle" | ".db" | ".sql" | ".pdf" | ".json" | ".tex" | ".hdf5" | ".md")[] | undefined;
    bibPath?: string | undefined;
    cslPath?: string | undefined;
    dateHandling?: {
        enableAdvancedFormat: boolean;
        format: string | {
            short: string;
            long: string;
            withTime: string;
            timeOnly: string;
        };
        defaultTimeDisplayType: "summarized" | "analog" | "descriptive";
        defaultTimeZone?: string | undefined;
    } | undefined;
    linkAliases?: Record<string, string> | undefined;
    features?: {
        pages?: {
            calendar?: boolean | undefined;
            bibliography?: boolean | undefined;
            snippets?: boolean | undefined;
            taskManager?: boolean | undefined;
            equations?: boolean | undefined;
        } | undefined;
        enabled?: {
            commandPalette: boolean;
            tikz: boolean;
        } | undefined;
    } | undefined;
    plotting?: {
        plotColorList: string[] | {
            dark: string[];
            light: string[];
        };
        plotColorCycleMethod: "inOrder" | "random";
    } | undefined;
    credentials?: {
        googleServiceAccountJsonPath?: string | undefined;
    } | undefined;
    performance?: {
        latexParsingDebounceTimeout: number;
        mdxParsingDebounceTimeout: number;
    } | undefined;
    meta?: {
        title: string;
        desc?: string | undefined;
    } | undefined;
    plugins?: ({
        name: string;
        version: string;
        parserIndex: number;
    } | {
        name: string;
        version: string;
    })[] | undefined;
}, {
    code?: {
        editor?: {
            defaultLangauge?: string | undefined;
            useVimMode?: boolean | undefined;
        } | undefined;
        theme?: {
            dark?: "andromeeda" | "aurora-x" | "ayu-dark" | "catppuccin-frappe" | "catppuccin-latte" | "catppuccin-macchiato" | "catppuccin-mocha" | "dark-plus" | "dracula" | "dracula-soft" | "github-dark" | "github-dark-dimmed" | "github-light" | "light-plus" | "material-theme" | "material-theme-darker" | "material-theme-lighter" | "material-theme-ocean" | "material-theme-palenight" | "min-dark" | "min-light" | "monokai" | "night-owl" | "nord" | "one-dark-pro" | "poimandres" | "red" | "rose-pine" | "rose-pine-dawn" | "rose-pine-moon" | "slack-dark" | "slack-ochin" | "solarized-dark" | "solarized-light" | "synthwave-84" | "tokyo-night" | "vesper" | "vitesse-black" | "vitesse-dark" | "vitesse-light" | undefined;
            light?: "andromeeda" | "aurora-x" | "ayu-dark" | "catppuccin-frappe" | "catppuccin-latte" | "catppuccin-macchiato" | "catppuccin-mocha" | "dark-plus" | "dracula" | "dracula-soft" | "github-dark" | "github-dark-dimmed" | "github-light" | "light-plus" | "material-theme" | "material-theme-darker" | "material-theme-lighter" | "material-theme-ocean" | "material-theme-palenight" | "min-dark" | "min-light" | "monokai" | "night-owl" | "nord" | "one-dark-pro" | "poimandres" | "red" | "rose-pine" | "rose-pine-dawn" | "rose-pine-moon" | "slack-dark" | "slack-ochin" | "solarized-dark" | "solarized-light" | "synthwave-84" | "tokyo-night" | "vesper" | "vitesse-black" | "vitesse-dark" | "vitesse-light" | undefined;
        } | undefined;
        syntaxHighlighting?: {
            transformers?: {
                regexHighlight?: boolean | undefined;
                lineHighlight?: boolean | undefined;
                lineFocus?: boolean | undefined;
                lineErrorLevel?: boolean | undefined;
                lineDiff?: boolean | undefined;
            } | undefined;
            defaultLanguage?: "coffee" | "diff" | "fish" | "move" | "shell" | "turtle" | "swift" | "python" | "markdown" | "kotlin" | "css" | "latex" | "fs" | "json" | "rel" | "mdx" | "md" | "csv" | "html" | "abap" | "actionscript-3" | "ada" | "angular-html" | "angular-ts" | "apache" | "apex" | "apl" | "applescript" | "ara" | "asm" | "astro" | "awk" | "ballerina" | "bat" | "beancount" | "berry" | "bibtex" | "bicep" | "blade" | "c" | "cadence" | "clarity" | "clojure" | "cmake" | "cobol" | "codeql" | "cpp" | "crystal" | "csharp" | "cue" | "cypher" | "d" | "dart" | "dax" | "docker" | "dream-maker" | "elixir" | "elm" | "erb" | "erlang" | "fortran-fixed-form" | "fortran-free-form" | "fsharp" | "gdresource" | "gdscript" | "gdshader" | "gherkin" | "git-commit" | "git-rebase" | "glimmer-js" | "glimmer-ts" | "glsl" | "gnuplot" | "go" | "graphql" | "groovy" | "hack" | "haml" | "handlebars" | "haskell" | "hcl" | "hjson" | "hlsl" | "html-derivative" | "http" | "imba" | "ini" | "java" | "javascript" | "jinja" | "jison" | "json5" | "jsonc" | "jsonl" | "jsonnet" | "jssm" | "jsx" | "julia" | "kusto" | "less" | "liquid" | "lisp" | "logo" | "lua" | "make" | "marko" | "matlab" | "mdc" | "mermaid" | "mojo" | "narrat" | "nextflow" | "nginx" | "nim" | "nix" | "nushell" | "objective-c" | "objective-cpp" | "ocaml" | "pascal" | "perl" | "php" | "plsql" | "postcss" | "powerquery" | "powershell" | "prisma" | "prolog" | "proto" | "pug" | "puppet" | "purescript" | "r" | "raku" | "razor" | "reg" | "riscv" | "rst" | "ruby" | "rust" | "sas" | "sass" | "scala" | "scheme" | "scss" | "shaderlab" | "shellscript" | "shellsession" | "smalltalk" | "solidity" | "sparql" | "splunk" | "sql" | "ssh-config" | "stata" | "stylus" | "svelte" | "system-verilog" | "tasl" | "tcl" | "terraform" | "tex" | "toml" | "tsx" | "twig" | "typescript" | "typst" | "v" | "vb" | "verilog" | "vhdl" | "viml" | "vue" | "vue-html" | "vyper" | "wasm" | "wenyan" | "wgsl" | "wolfram" | "xml" | "xsl" | "yaml" | "zenscript" | "zig" | "batch" | "be" | "cdc" | "clj" | "ql" | "coffeescript" | "c++" | "c#" | "cs" | "cql" | "dockerfile" | "erl" | "f" | "for" | "f77" | "f90" | "f95" | "f03" | "f08" | "f18" | "f#" | "gjs" | "gts" | "gql" | "hbs" | "hs" | "properties" | "js" | "fsl" | "kt" | "kts" | "kql" | "makefile" | "nar" | "nf" | "nu" | "objc" | "ps" | "ps1" | "jade" | "py" | "perl6" | "rb" | "rs" | "shader" | "bash" | "sh" | "zsh" | "console" | "spl" | "styl" | "tf" | "tfvars" | "ts" | "typ" | "cmd" | "vim" | "vimscript" | "vy" | "文言" | "wl" | "yml" | {
                inline: "coffee" | "diff" | "fish" | "move" | "shell" | "turtle" | "swift" | "python" | "markdown" | "kotlin" | "css" | "latex" | "fs" | "json" | "rel" | "mdx" | "md" | "csv" | "html" | "abap" | "actionscript-3" | "ada" | "angular-html" | "angular-ts" | "apache" | "apex" | "apl" | "applescript" | "ara" | "asm" | "astro" | "awk" | "ballerina" | "bat" | "beancount" | "berry" | "bibtex" | "bicep" | "blade" | "c" | "cadence" | "clarity" | "clojure" | "cmake" | "cobol" | "codeql" | "cpp" | "crystal" | "csharp" | "cue" | "cypher" | "d" | "dart" | "dax" | "docker" | "dream-maker" | "elixir" | "elm" | "erb" | "erlang" | "fortran-fixed-form" | "fortran-free-form" | "fsharp" | "gdresource" | "gdscript" | "gdshader" | "gherkin" | "git-commit" | "git-rebase" | "glimmer-js" | "glimmer-ts" | "glsl" | "gnuplot" | "go" | "graphql" | "groovy" | "hack" | "haml" | "handlebars" | "haskell" | "hcl" | "hjson" | "hlsl" | "html-derivative" | "http" | "imba" | "ini" | "java" | "javascript" | "jinja" | "jison" | "json5" | "jsonc" | "jsonl" | "jsonnet" | "jssm" | "jsx" | "julia" | "kusto" | "less" | "liquid" | "lisp" | "logo" | "lua" | "make" | "marko" | "matlab" | "mdc" | "mermaid" | "mojo" | "narrat" | "nextflow" | "nginx" | "nim" | "nix" | "nushell" | "objective-c" | "objective-cpp" | "ocaml" | "pascal" | "perl" | "php" | "plsql" | "postcss" | "powerquery" | "powershell" | "prisma" | "prolog" | "proto" | "pug" | "puppet" | "purescript" | "r" | "raku" | "razor" | "reg" | "riscv" | "rst" | "ruby" | "rust" | "sas" | "sass" | "scala" | "scheme" | "scss" | "shaderlab" | "shellscript" | "shellsession" | "smalltalk" | "solidity" | "sparql" | "splunk" | "sql" | "ssh-config" | "stata" | "stylus" | "svelte" | "system-verilog" | "tasl" | "tcl" | "terraform" | "tex" | "toml" | "tsx" | "twig" | "typescript" | "typst" | "v" | "vb" | "verilog" | "vhdl" | "viml" | "vue" | "vue-html" | "vyper" | "wasm" | "wenyan" | "wgsl" | "wolfram" | "xml" | "xsl" | "yaml" | "zenscript" | "zig" | "batch" | "be" | "cdc" | "clj" | "ql" | "coffeescript" | "c++" | "c#" | "cs" | "cql" | "dockerfile" | "erl" | "f" | "for" | "f77" | "f90" | "f95" | "f03" | "f08" | "f18" | "f#" | "gjs" | "gts" | "gql" | "hbs" | "hs" | "properties" | "js" | "fsl" | "kt" | "kts" | "kql" | "makefile" | "nar" | "nf" | "nu" | "objc" | "ps" | "ps1" | "jade" | "py" | "perl6" | "rb" | "rs" | "shader" | "bash" | "sh" | "zsh" | "console" | "spl" | "styl" | "tf" | "tfvars" | "ts" | "typ" | "cmd" | "vim" | "vimscript" | "vy" | "文言" | "wl" | "yml";
                block: "coffee" | "diff" | "fish" | "move" | "shell" | "turtle" | "swift" | "python" | "markdown" | "kotlin" | "css" | "latex" | "fs" | "json" | "rel" | "mdx" | "md" | "csv" | "html" | "abap" | "actionscript-3" | "ada" | "angular-html" | "angular-ts" | "apache" | "apex" | "apl" | "applescript" | "ara" | "asm" | "astro" | "awk" | "ballerina" | "bat" | "beancount" | "berry" | "bibtex" | "bicep" | "blade" | "c" | "cadence" | "clarity" | "clojure" | "cmake" | "cobol" | "codeql" | "cpp" | "crystal" | "csharp" | "cue" | "cypher" | "d" | "dart" | "dax" | "docker" | "dream-maker" | "elixir" | "elm" | "erb" | "erlang" | "fortran-fixed-form" | "fortran-free-form" | "fsharp" | "gdresource" | "gdscript" | "gdshader" | "gherkin" | "git-commit" | "git-rebase" | "glimmer-js" | "glimmer-ts" | "glsl" | "gnuplot" | "go" | "graphql" | "groovy" | "hack" | "haml" | "handlebars" | "haskell" | "hcl" | "hjson" | "hlsl" | "html-derivative" | "http" | "imba" | "ini" | "java" | "javascript" | "jinja" | "jison" | "json5" | "jsonc" | "jsonl" | "jsonnet" | "jssm" | "jsx" | "julia" | "kusto" | "less" | "liquid" | "lisp" | "logo" | "lua" | "make" | "marko" | "matlab" | "mdc" | "mermaid" | "mojo" | "narrat" | "nextflow" | "nginx" | "nim" | "nix" | "nushell" | "objective-c" | "objective-cpp" | "ocaml" | "pascal" | "perl" | "php" | "plsql" | "postcss" | "powerquery" | "powershell" | "prisma" | "prolog" | "proto" | "pug" | "puppet" | "purescript" | "r" | "raku" | "razor" | "reg" | "riscv" | "rst" | "ruby" | "rust" | "sas" | "sass" | "scala" | "scheme" | "scss" | "shaderlab" | "shellscript" | "shellsession" | "smalltalk" | "solidity" | "sparql" | "splunk" | "sql" | "ssh-config" | "stata" | "stylus" | "svelte" | "system-verilog" | "tasl" | "tcl" | "terraform" | "tex" | "toml" | "tsx" | "twig" | "typescript" | "typst" | "v" | "vb" | "verilog" | "vhdl" | "viml" | "vue" | "vue-html" | "vyper" | "wasm" | "wenyan" | "wgsl" | "wolfram" | "xml" | "xsl" | "yaml" | "zenscript" | "zig" | "batch" | "be" | "cdc" | "clj" | "ql" | "coffeescript" | "c++" | "c#" | "cs" | "cql" | "dockerfile" | "erl" | "f" | "for" | "f77" | "f90" | "f95" | "f03" | "f08" | "f18" | "f#" | "gjs" | "gts" | "gql" | "hbs" | "hs" | "properties" | "js" | "fsl" | "kt" | "kts" | "kql" | "makefile" | "nar" | "nf" | "nu" | "objc" | "ps" | "ps1" | "jade" | "py" | "perl6" | "rb" | "rs" | "shader" | "bash" | "sh" | "zsh" | "console" | "spl" | "styl" | "tf" | "tfvars" | "ts" | "typ" | "cmd" | "vim" | "vimscript" | "vy" | "文言" | "wl" | "yml";
            } | undefined;
        } | undefined;
    } | undefined;
    database?: {
        storeFormatted?: boolean | undefined;
        removeIfNotPresentInFs?: boolean | undefined;
    } | undefined;
    navigation?: {
        settings?: "none" | "sidebar" | "navbar" | "both" | undefined;
        navbarBreakpoint?: {
            full?: number | undefined;
            minimal?: number | undefined;
        } | undefined;
        maxResultLength?: {
            snippets?: number | undefined;
            searchAll?: number | undefined;
            equations?: number | undefined;
            categories?: number | undefined;
        } | undefined;
        bookmarkLink?: "none" | "sidebar" | "navbar" | "both" | undefined;
        syncLink?: "none" | "sidebar" | "navbar" | "both" | undefined;
        fileSystemToggle?: "none" | "sidebar" | "navbar" | "both" | undefined;
        darkmodeToggle?: "none" | "sidebar" | "navbar" | "both" | undefined;
        equationsLink?: "none" | "sidebar" | "navbar" | "both" | undefined;
        snippetsLink?: "none" | "sidebar" | "navbar" | "both" | undefined;
        backupData?: "none" | "sidebar" | "navbar" | "both" | undefined;
        navbarLinks?: (string | {
            label: string;
            href?: string | undefined;
            icon?: string | undefined;
            onClick?: ((...args: unknown[]) => unknown) | undefined;
        })[] | undefined;
        sidebarLinks?: (string | {
            icon: string;
            label?: string | undefined;
            href?: string | undefined;
            onClick?: ((...args: unknown[]) => unknown) | undefined;
            Icon?: ((...args: unknown[]) => unknown) | undefined;
        })[] | undefined;
    } | undefined;
    terminal?: {
        logLevel?: "info" | "none" | "debug" | "verbose" | undefined;
    } | undefined;
    jupyter?: {
        execute?: boolean | undefined;
        environment?: string | undefined;
        syntaxHighlightTheme?: string | undefined;
        jupyterToken?: string | undefined;
        jupyterPort?: number | undefined;
        initiallyFoldCells?: boolean | undefined;
        kernel?: string | undefined;
        jupyterReactProps?: {
            collaborative?: boolean | undefined;
            lite?: boolean | undefined;
            serverUrls?: {
                baseUrl?: string | undefined;
                wsUrl?: string | undefined;
            } | undefined;
        } | undefined;
        nbConvert?: {
            nbconvertPath?: string | undefined;
            conversionTimeout?: number | undefined;
            customConversionFunction?: {
                pdf?: ((args_0: string, args_1: string, ...args: unknown[]) => string) | undefined;
            } | undefined;
            execute?: boolean | undefined;
            nbConvertTemplate?: string | undefined;
            notebookOutputDir?: string | undefined;
        } | undefined;
        jupyterNotebookProps?: {
            height?: string | undefined;
            readOnly?: boolean | undefined;
            maxHeight?: string | undefined;
            cellMetadataPanel?: boolean | undefined;
            cellSidebarMargin?: number | undefined;
            bundledIPyWidgets?: {
                name: string;
                module: string | Record<string, string>;
                version: string;
            }[] | undefined;
            externalIPyWidgets?: {
                name: string;
                version: string;
            }[] | undefined;
            nbgrader?: boolean | undefined;
        } | undefined;
        cellInputWrappers?: Record<string, string | {
            prefix: string;
            suffix: string;
        }> | undefined;
    } | undefined;
    math?: {
        latexPackages?: string[] | "all" | undefined;
        latexFontUrl?: string | undefined;
        constants?: Record<string, number> | undefined;
    } | undefined;
    UI?: {
        table?: {
            maxHeight?: string | number | undefined;
        } | undefined;
        text?: {
            blockQuoteItalic?: boolean | undefined;
            fontPaths?: "default" | {
                weight: "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900";
                path: string;
                style: "bold" | "italic" | "normal";
            }[] | undefined;
        } | undefined;
        media?: {
            imageMap?: Record<string, string | undefined> | undefined;
            includeDefaultImageMap?: boolean | undefined;
            imageRemoteTest?: RegExp[] | undefined;
        } | undefined;
        theme?: "ulld" | "red" | "orange" | "yellow" | "green" | "blue" | "rose" | "slate" | "gray" | "stone" | "zinc" | "neutral" | "violet" | undefined;
        colors?: Record<string, string | {
            dark?: string | undefined;
            light?: string | undefined;
        } | null | undefined> | undefined;
        autoApplyMdxTitles?: boolean | undefined;
    } | undefined;
    slots?: {
        navigation?: any;
        bibliography?: any;
        math?: any;
        snippets?: any;
        dashboard?: any;
        taskManager?: any;
        UI?: any;
        pdf?: any;
        editor?: any;
        form?: any;
        commandPalette?: any;
    } | undefined;
    fsRoot?: string | undefined;
    build?: {
        database?: {
            type?: "postgres" | "sqlite" | undefined;
            postgres?: {
                port?: number | undefined;
                dbName?: string | undefined;
                connectionURI?: string | undefined;
            } | undefined;
            prioritize?: "size" | "speed" | undefined;
        } | undefined;
        additionalUserContent?: {
            css?: string | undefined;
            logo?: string | undefined;
            favicon?: string | undefined;
        } | undefined;
    } | undefined;
    autoTag?: {
        tag: string;
        path: string;
    }[] | undefined;
    autoTopic?: {
        path: string;
        topic: string;
    }[] | undefined;
    autoSubject?: {
        path: string;
        subject: string;
    }[] | undefined;
    alwaysPreferFs?: boolean | undefined;
    ignoreFilepaths?: (string | RegExp | {
        regex: string | RegExp;
        original: string;
    })[] | undefined;
    tempDir?: string | undefined;
    generatedDir?: string | undefined;
    ignorePreferFsExtensions?: (string | RegExp | {
        regex: RegExp;
        original: string;
    })[] | undefined;
    fileTypePriority?: (".mdx" | ".ipynb" | ".csv" | ".tsv" | ".excel" | ".numpy" | ".html" | ".pickle" | ".db" | ".sql" | ".pdf" | ".json" | ".tex" | ".hdf5" | ".md")[] | undefined;
    noteTypes?: {
        label: string;
        fs: string;
        icon?: string | undefined;
        UI?: {
            styles?: {
                dark?: {
                    bg?: string | undefined;
                    fg?: string | undefined;
                } | undefined;
                light?: {
                    bg?: string | undefined;
                    fg?: string | undefined;
                } | undefined;
            } | undefined;
        } | undefined;
        id?: string | undefined;
        docType?: string | undefined;
        filePathPattern?: string | undefined;
        matchWeight?: number | undefined;
        url?: string | undefined;
        urlQuery?: Record<string, string | number | string[] | number[]> | undefined;
        keywords?: string[] | undefined;
        topicLabel?: string | undefined;
        subjectLabel?: string | undefined;
        autoTag?: string[] | undefined;
        autoTopic?: string[] | undefined;
        autoSubject?: string[] | undefined;
        inSidebar?: boolean | undefined;
        inNavbar?: boolean | undefined;
    }[] | undefined;
    bibPath?: string | undefined;
    cslPath?: string | undefined;
    dateHandling?: {
        enableAdvancedFormat?: boolean | undefined;
        format?: string | {
            short?: string | undefined;
            long?: string | undefined;
            withTime?: string | undefined;
            timeOnly?: string | undefined;
        } | undefined;
        defaultTimeDisplayType?: "summarized" | "analog" | "descriptive" | undefined;
        defaultTimeZone?: string | undefined;
    } | undefined;
    linkAliases?: Record<string, string> | undefined;
    features?: {
        pages?: {
            calendar?: boolean | undefined;
            bibliography?: boolean | undefined;
            snippets?: boolean | undefined;
            taskManager?: boolean | undefined;
            equations?: boolean | undefined;
        } | undefined;
        enabled?: {
            commandPalette?: boolean | undefined;
            tikz?: boolean | undefined;
        } | undefined;
    } | undefined;
    plotting?: {
        plotColorList?: string[] | {
            dark: string[];
            light: string[];
        } | undefined;
        plotColorCycleMethod?: "inOrder" | "random" | undefined;
    } | undefined;
    credentials?: {
        googleServiceAccountJsonPath?: string | undefined;
    } | undefined;
    performance?: {
        latexParsingDebounceTimeout?: number | undefined;
        mdxParsingDebounceTimeout?: number | undefined;
    } | undefined;
    meta?: {
        title?: string | undefined;
        desc?: string | undefined;
    } | undefined;
    plugins?: string | string[] | {
        name: string;
        version?: string | undefined;
        parserIndex?: number | undefined;
    } | {
        name: string;
        version?: string | undefined;
        parserIndex?: number | undefined;
    }[] | undefined;
}>;
export type AppConfigSchemaDeepPartialOutputWithFsRoot = z.output<typeof appConfigDeepPartialWithFsRoot>;
//# sourceMappingURL=minimalParsableConfig.d.ts.map