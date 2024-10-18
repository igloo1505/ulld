export declare const appConfigOnlyFSRequired: import("zod").ZodObject<{
    code: import("zod").ZodOptional<import("zod").ZodDefault<import("zod").ZodObject<{
        theme: import("zod").ZodDefault<import("zod").ZodObject<{
            dark: import("zod").ZodDefault<import("zod").ZodUnion<[import("zod").ZodLiteral<"andromeeda">, import("zod").ZodLiteral<"aurora-x">, import("zod").ZodLiteral<"ayu-dark">, import("zod").ZodLiteral<"catppuccin-frappe">, import("zod").ZodLiteral<"catppuccin-latte">, import("zod").ZodLiteral<"catppuccin-macchiato">, import("zod").ZodLiteral<"catppuccin-mocha">, import("zod").ZodLiteral<"dark-plus">, import("zod").ZodLiteral<"dracula">, import("zod").ZodLiteral<"dracula-soft">, import("zod").ZodLiteral<"github-dark">, import("zod").ZodLiteral<"github-dark-dimmed">, import("zod").ZodLiteral<"github-light">, import("zod").ZodLiteral<"light-plus">, import("zod").ZodLiteral<"material-theme">, import("zod").ZodLiteral<"material-theme-darker">, import("zod").ZodLiteral<"material-theme-lighter">, import("zod").ZodLiteral<"material-theme-ocean">, import("zod").ZodLiteral<"material-theme-palenight">, import("zod").ZodLiteral<"min-dark">, import("zod").ZodLiteral<"min-light">, import("zod").ZodLiteral<"monokai">, import("zod").ZodLiteral<"night-owl">, import("zod").ZodLiteral<"nord">, import("zod").ZodLiteral<"one-dark-pro">, import("zod").ZodLiteral<"poimandres">, import("zod").ZodLiteral<"red">, import("zod").ZodLiteral<"rose-pine">, import("zod").ZodLiteral<"rose-pine-dawn">, import("zod").ZodLiteral<"rose-pine-moon">, import("zod").ZodLiteral<"slack-dark">, import("zod").ZodLiteral<"slack-ochin">, import("zod").ZodLiteral<"solarized-dark">, import("zod").ZodLiteral<"solarized-light">, import("zod").ZodLiteral<"synthwave-84">, import("zod").ZodLiteral<"tokyo-night">, import("zod").ZodLiteral<"vesper">, import("zod").ZodLiteral<"vitesse-black">, import("zod").ZodLiteral<"vitesse-dark">, import("zod").ZodLiteral<"vitesse-light">]>>;
            light: import("zod").ZodDefault<import("zod").ZodUnion<[import("zod").ZodLiteral<"andromeeda">, import("zod").ZodLiteral<"aurora-x">, import("zod").ZodLiteral<"ayu-dark">, import("zod").ZodLiteral<"catppuccin-frappe">, import("zod").ZodLiteral<"catppuccin-latte">, import("zod").ZodLiteral<"catppuccin-macchiato">, import("zod").ZodLiteral<"catppuccin-mocha">, import("zod").ZodLiteral<"dark-plus">, import("zod").ZodLiteral<"dracula">, import("zod").ZodLiteral<"dracula-soft">, import("zod").ZodLiteral<"github-dark">, import("zod").ZodLiteral<"github-dark-dimmed">, import("zod").ZodLiteral<"github-light">, import("zod").ZodLiteral<"light-plus">, import("zod").ZodLiteral<"material-theme">, import("zod").ZodLiteral<"material-theme-darker">, import("zod").ZodLiteral<"material-theme-lighter">, import("zod").ZodLiteral<"material-theme-ocean">, import("zod").ZodLiteral<"material-theme-palenight">, import("zod").ZodLiteral<"min-dark">, import("zod").ZodLiteral<"min-light">, import("zod").ZodLiteral<"monokai">, import("zod").ZodLiteral<"night-owl">, import("zod").ZodLiteral<"nord">, import("zod").ZodLiteral<"one-dark-pro">, import("zod").ZodLiteral<"poimandres">, import("zod").ZodLiteral<"red">, import("zod").ZodLiteral<"rose-pine">, import("zod").ZodLiteral<"rose-pine-dawn">, import("zod").ZodLiteral<"rose-pine-moon">, import("zod").ZodLiteral<"slack-dark">, import("zod").ZodLiteral<"slack-ochin">, import("zod").ZodLiteral<"solarized-dark">, import("zod").ZodLiteral<"solarized-light">, import("zod").ZodLiteral<"synthwave-84">, import("zod").ZodLiteral<"tokyo-night">, import("zod").ZodLiteral<"vesper">, import("zod").ZodLiteral<"vitesse-black">, import("zod").ZodLiteral<"vitesse-dark">, import("zod").ZodLiteral<"vitesse-light">]>>;
        }, "strip", import("zod").ZodTypeAny, {
            dark: "andromeeda" | "aurora-x" | "ayu-dark" | "catppuccin-frappe" | "catppuccin-latte" | "catppuccin-macchiato" | "catppuccin-mocha" | "dark-plus" | "dracula" | "dracula-soft" | "github-dark" | "github-dark-dimmed" | "github-light" | "light-plus" | "material-theme" | "material-theme-darker" | "material-theme-lighter" | "material-theme-ocean" | "material-theme-palenight" | "min-dark" | "min-light" | "monokai" | "night-owl" | "nord" | "one-dark-pro" | "poimandres" | "red" | "rose-pine" | "rose-pine-dawn" | "rose-pine-moon" | "slack-dark" | "slack-ochin" | "solarized-dark" | "solarized-light" | "synthwave-84" | "tokyo-night" | "vesper" | "vitesse-black" | "vitesse-dark" | "vitesse-light";
            light: "andromeeda" | "aurora-x" | "ayu-dark" | "catppuccin-frappe" | "catppuccin-latte" | "catppuccin-macchiato" | "catppuccin-mocha" | "dark-plus" | "dracula" | "dracula-soft" | "github-dark" | "github-dark-dimmed" | "github-light" | "light-plus" | "material-theme" | "material-theme-darker" | "material-theme-lighter" | "material-theme-ocean" | "material-theme-palenight" | "min-dark" | "min-light" | "monokai" | "night-owl" | "nord" | "one-dark-pro" | "poimandres" | "red" | "rose-pine" | "rose-pine-dawn" | "rose-pine-moon" | "slack-dark" | "slack-ochin" | "solarized-dark" | "solarized-light" | "synthwave-84" | "tokyo-night" | "vesper" | "vitesse-black" | "vitesse-dark" | "vitesse-light";
        }, {
            dark?: "andromeeda" | "aurora-x" | "ayu-dark" | "catppuccin-frappe" | "catppuccin-latte" | "catppuccin-macchiato" | "catppuccin-mocha" | "dark-plus" | "dracula" | "dracula-soft" | "github-dark" | "github-dark-dimmed" | "github-light" | "light-plus" | "material-theme" | "material-theme-darker" | "material-theme-lighter" | "material-theme-ocean" | "material-theme-palenight" | "min-dark" | "min-light" | "monokai" | "night-owl" | "nord" | "one-dark-pro" | "poimandres" | "red" | "rose-pine" | "rose-pine-dawn" | "rose-pine-moon" | "slack-dark" | "slack-ochin" | "solarized-dark" | "solarized-light" | "synthwave-84" | "tokyo-night" | "vesper" | "vitesse-black" | "vitesse-dark" | "vitesse-light" | undefined;
            light?: "andromeeda" | "aurora-x" | "ayu-dark" | "catppuccin-frappe" | "catppuccin-latte" | "catppuccin-macchiato" | "catppuccin-mocha" | "dark-plus" | "dracula" | "dracula-soft" | "github-dark" | "github-dark-dimmed" | "github-light" | "light-plus" | "material-theme" | "material-theme-darker" | "material-theme-lighter" | "material-theme-ocean" | "material-theme-palenight" | "min-dark" | "min-light" | "monokai" | "night-owl" | "nord" | "one-dark-pro" | "poimandres" | "red" | "rose-pine" | "rose-pine-dawn" | "rose-pine-moon" | "slack-dark" | "slack-ochin" | "solarized-dark" | "solarized-light" | "synthwave-84" | "tokyo-night" | "vesper" | "vitesse-black" | "vitesse-dark" | "vitesse-light" | undefined;
        }>>;
        editor: import("zod").ZodDefault<import("zod").ZodObject<{
            defaultLangauge: import("zod").ZodDefault<import("zod").ZodString>;
            useVimMode: import("zod").ZodDefault<import("zod").ZodBoolean>;
        }, "strip", import("zod").ZodTypeAny, {
            defaultLangauge: string;
            useVimMode: boolean;
        }, {
            defaultLangauge?: string | undefined;
            useVimMode?: boolean | undefined;
        }>>;
        syntaxHighlighting: import("zod").ZodDefault<import("zod").ZodObject<{
            transformers: import("zod").ZodDefault<import("zod").ZodObject<{
                regexHighlight: import("zod").ZodDefault<import("zod").ZodBoolean>;
                lineHighlight: import("zod").ZodDefault<import("zod").ZodBoolean>;
                lineFocus: import("zod").ZodDefault<import("zod").ZodBoolean>;
                lineErrorLevel: import("zod").ZodDefault<import("zod").ZodBoolean>;
                lineDiff: import("zod").ZodDefault<import("zod").ZodBoolean>;
            }, "strip", import("zod").ZodTypeAny, {
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
            defaultLanguage: import("zod").ZodEffects<import("zod").ZodDefault<import("zod").ZodUnion<[import("zod").ZodEnum<["abap", "actionscript-3", "ada", "angular-html", "angular-ts", "apache", "apex", "apl", "applescript", "ara", "asm", "astro", "awk", "ballerina", "bat", "beancount", "berry", "bibtex", "bicep", "blade", "c", "cadence", "clarity", "clojure", "cmake", "cobol", "codeql", "coffee", "cpp", "crystal", "csharp", "css", "csv", "cue", "cypher", "d", "dart", "dax", "diff", "docker", "dream-maker", "elixir", "elm", "erb", "erlang", "fish", "fortran-fixed-form", "fortran-free-form", "fsharp", "gdresource", "gdscript", "gdshader", "gherkin", "git-commit", "git-rebase", "glimmer-js", "glimmer-ts", "glsl", "gnuplot", "go", "graphql", "groovy", "hack", "haml", "handlebars", "haskell", "hcl", "hjson", "hlsl", "html", "html-derivative", "http", "imba", "ini", "java", "javascript", "jinja", "jison", "json", "json5", "jsonc", "jsonl", "jsonnet", "jssm", "jsx", "julia", "kotlin", "kusto", "latex", "less", "liquid", "lisp", "logo", "lua", "make", "markdown", "marko", "matlab", "mdc", "mdx", "mermaid", "mojo", "move", "narrat", "nextflow", "nginx", "nim", "nix", "nushell", "objective-c", "objective-cpp", "ocaml", "pascal", "perl", "php", "plsql", "postcss", "powerquery", "powershell", "prisma", "prolog", "proto", "pug", "puppet", "purescript", "python", "r", "raku", "razor", "reg", "rel", "riscv", "rst", "ruby", "rust", "sas", "sass", "scala", "scheme", "scss", "shaderlab", "shellscript", "shellsession", "smalltalk", "solidity", "sparql", "splunk", "sql", "ssh-config", "stata", "stylus", "svelte", "swift", "system-verilog", "tasl", "tcl", "terraform", "tex", "toml", "tsx", "turtle", "twig", "typescript", "typst", "v", "vb", "verilog", "vhdl", "viml", "vue", "vue-html", "vyper", "wasm", "wenyan", "wgsl", "wolfram", "xml", "xsl", "yaml", "zenscript", "zig", "batch", "be", "cdc", "clj", "ql", "coffeescript", "c++", "c#", "cs", "cql", "dockerfile", "erl", "f", "for", "f77", "f90", "f95", "f03", "f08", "f18", "f#", "fs", "gjs", "gts", "gql", "hbs", "hs", "properties", "js", "fsl", "kt", "kts", "kql", "makefile", "md", "nar", "nf", "nu", "objc", "ps", "ps1", "jade", "py", "perl6", "rb", "rs", "shader", "bash", "sh", "shell", "zsh", "console", "spl", "styl", "tf", "tfvars", "ts", "typ", "cmd", "vim", "vimscript", "vy", "文言", "wl", "yml"]>, import("zod").ZodObject<{
                inline: import("zod").ZodEnum<["abap", "actionscript-3", "ada", "angular-html", "angular-ts", "apache", "apex", "apl", "applescript", "ara", "asm", "astro", "awk", "ballerina", "bat", "beancount", "berry", "bibtex", "bicep", "blade", "c", "cadence", "clarity", "clojure", "cmake", "cobol", "codeql", "coffee", "cpp", "crystal", "csharp", "css", "csv", "cue", "cypher", "d", "dart", "dax", "diff", "docker", "dream-maker", "elixir", "elm", "erb", "erlang", "fish", "fortran-fixed-form", "fortran-free-form", "fsharp", "gdresource", "gdscript", "gdshader", "gherkin", "git-commit", "git-rebase", "glimmer-js", "glimmer-ts", "glsl", "gnuplot", "go", "graphql", "groovy", "hack", "haml", "handlebars", "haskell", "hcl", "hjson", "hlsl", "html", "html-derivative", "http", "imba", "ini", "java", "javascript", "jinja", "jison", "json", "json5", "jsonc", "jsonl", "jsonnet", "jssm", "jsx", "julia", "kotlin", "kusto", "latex", "less", "liquid", "lisp", "logo", "lua", "make", "markdown", "marko", "matlab", "mdc", "mdx", "mermaid", "mojo", "move", "narrat", "nextflow", "nginx", "nim", "nix", "nushell", "objective-c", "objective-cpp", "ocaml", "pascal", "perl", "php", "plsql", "postcss", "powerquery", "powershell", "prisma", "prolog", "proto", "pug", "puppet", "purescript", "python", "r", "raku", "razor", "reg", "rel", "riscv", "rst", "ruby", "rust", "sas", "sass", "scala", "scheme", "scss", "shaderlab", "shellscript", "shellsession", "smalltalk", "solidity", "sparql", "splunk", "sql", "ssh-config", "stata", "stylus", "svelte", "swift", "system-verilog", "tasl", "tcl", "terraform", "tex", "toml", "tsx", "turtle", "twig", "typescript", "typst", "v", "vb", "verilog", "vhdl", "viml", "vue", "vue-html", "vyper", "wasm", "wenyan", "wgsl", "wolfram", "xml", "xsl", "yaml", "zenscript", "zig", "batch", "be", "cdc", "clj", "ql", "coffeescript", "c++", "c#", "cs", "cql", "dockerfile", "erl", "f", "for", "f77", "f90", "f95", "f03", "f08", "f18", "f#", "fs", "gjs", "gts", "gql", "hbs", "hs", "properties", "js", "fsl", "kt", "kts", "kql", "makefile", "md", "nar", "nf", "nu", "objc", "ps", "ps1", "jade", "py", "perl6", "rb", "rs", "shader", "bash", "sh", "shell", "zsh", "console", "spl", "styl", "tf", "tfvars", "ts", "typ", "cmd", "vim", "vimscript", "vy", "文言", "wl", "yml"]>;
                block: import("zod").ZodEnum<["abap", "actionscript-3", "ada", "angular-html", "angular-ts", "apache", "apex", "apl", "applescript", "ara", "asm", "astro", "awk", "ballerina", "bat", "beancount", "berry", "bibtex", "bicep", "blade", "c", "cadence", "clarity", "clojure", "cmake", "cobol", "codeql", "coffee", "cpp", "crystal", "csharp", "css", "csv", "cue", "cypher", "d", "dart", "dax", "diff", "docker", "dream-maker", "elixir", "elm", "erb", "erlang", "fish", "fortran-fixed-form", "fortran-free-form", "fsharp", "gdresource", "gdscript", "gdshader", "gherkin", "git-commit", "git-rebase", "glimmer-js", "glimmer-ts", "glsl", "gnuplot", "go", "graphql", "groovy", "hack", "haml", "handlebars", "haskell", "hcl", "hjson", "hlsl", "html", "html-derivative", "http", "imba", "ini", "java", "javascript", "jinja", "jison", "json", "json5", "jsonc", "jsonl", "jsonnet", "jssm", "jsx", "julia", "kotlin", "kusto", "latex", "less", "liquid", "lisp", "logo", "lua", "make", "markdown", "marko", "matlab", "mdc", "mdx", "mermaid", "mojo", "move", "narrat", "nextflow", "nginx", "nim", "nix", "nushell", "objective-c", "objective-cpp", "ocaml", "pascal", "perl", "php", "plsql", "postcss", "powerquery", "powershell", "prisma", "prolog", "proto", "pug", "puppet", "purescript", "python", "r", "raku", "razor", "reg", "rel", "riscv", "rst", "ruby", "rust", "sas", "sass", "scala", "scheme", "scss", "shaderlab", "shellscript", "shellsession", "smalltalk", "solidity", "sparql", "splunk", "sql", "ssh-config", "stata", "stylus", "svelte", "swift", "system-verilog", "tasl", "tcl", "terraform", "tex", "toml", "tsx", "turtle", "twig", "typescript", "typst", "v", "vb", "verilog", "vhdl", "viml", "vue", "vue-html", "vyper", "wasm", "wenyan", "wgsl", "wolfram", "xml", "xsl", "yaml", "zenscript", "zig", "batch", "be", "cdc", "clj", "ql", "coffeescript", "c++", "c#", "cs", "cql", "dockerfile", "erl", "f", "for", "f77", "f90", "f95", "f03", "f08", "f18", "f#", "fs", "gjs", "gts", "gql", "hbs", "hs", "properties", "js", "fsl", "kt", "kts", "kql", "makefile", "md", "nar", "nf", "nu", "objc", "ps", "ps1", "jade", "py", "perl6", "rb", "rs", "shader", "bash", "sh", "shell", "zsh", "console", "spl", "styl", "tf", "tfvars", "ts", "typ", "cmd", "vim", "vimscript", "vy", "文言", "wl", "yml"]>;
            }, "strip", import("zod").ZodTypeAny, {
                inline: "coffee" | "css" | "diff" | "fish" | "kotlin" | "latex" | "markdown" | "move" | "python" | "shell" | "swift" | "turtle" | "fs" | "json" | "abap" | "actionscript-3" | "ada" | "angular-html" | "angular-ts" | "apache" | "apex" | "apl" | "applescript" | "ara" | "asm" | "astro" | "awk" | "ballerina" | "bat" | "beancount" | "berry" | "bibtex" | "bicep" | "blade" | "c" | "cadence" | "clarity" | "clojure" | "cmake" | "cobol" | "codeql" | "cpp" | "crystal" | "csharp" | "csv" | "cue" | "cypher" | "d" | "dart" | "dax" | "docker" | "dream-maker" | "elixir" | "elm" | "erb" | "erlang" | "fortran-fixed-form" | "fortran-free-form" | "fsharp" | "gdresource" | "gdscript" | "gdshader" | "gherkin" | "git-commit" | "git-rebase" | "glimmer-js" | "glimmer-ts" | "glsl" | "gnuplot" | "go" | "graphql" | "groovy" | "hack" | "haml" | "handlebars" | "haskell" | "hcl" | "hjson" | "hlsl" | "html" | "html-derivative" | "http" | "imba" | "ini" | "java" | "javascript" | "jinja" | "jison" | "json5" | "jsonc" | "jsonl" | "jsonnet" | "jssm" | "jsx" | "julia" | "kusto" | "less" | "liquid" | "lisp" | "logo" | "lua" | "make" | "marko" | "matlab" | "mdc" | "mdx" | "mermaid" | "mojo" | "narrat" | "nextflow" | "nginx" | "nim" | "nix" | "nushell" | "objective-c" | "objective-cpp" | "ocaml" | "pascal" | "perl" | "php" | "plsql" | "postcss" | "powerquery" | "powershell" | "prisma" | "prolog" | "proto" | "pug" | "puppet" | "purescript" | "r" | "raku" | "razor" | "reg" | "rel" | "riscv" | "rst" | "ruby" | "rust" | "sas" | "sass" | "scala" | "scheme" | "scss" | "shaderlab" | "shellscript" | "shellsession" | "smalltalk" | "solidity" | "sparql" | "splunk" | "sql" | "ssh-config" | "stata" | "stylus" | "svelte" | "system-verilog" | "tasl" | "tcl" | "terraform" | "tex" | "toml" | "tsx" | "twig" | "typescript" | "typst" | "v" | "vb" | "verilog" | "vhdl" | "viml" | "vue" | "vue-html" | "vyper" | "wasm" | "wenyan" | "wgsl" | "wolfram" | "xml" | "xsl" | "yaml" | "zenscript" | "zig" | "batch" | "be" | "cdc" | "clj" | "ql" | "coffeescript" | "c++" | "c#" | "cs" | "cql" | "dockerfile" | "erl" | "f" | "for" | "f77" | "f90" | "f95" | "f03" | "f08" | "f18" | "f#" | "gjs" | "gts" | "gql" | "hbs" | "hs" | "properties" | "js" | "fsl" | "kt" | "kts" | "kql" | "makefile" | "md" | "nar" | "nf" | "nu" | "objc" | "ps" | "ps1" | "jade" | "py" | "perl6" | "rb" | "rs" | "shader" | "bash" | "sh" | "zsh" | "console" | "spl" | "styl" | "tf" | "tfvars" | "ts" | "typ" | "cmd" | "vim" | "vimscript" | "vy" | "文言" | "wl" | "yml";
                block: "coffee" | "css" | "diff" | "fish" | "kotlin" | "latex" | "markdown" | "move" | "python" | "shell" | "swift" | "turtle" | "fs" | "json" | "abap" | "actionscript-3" | "ada" | "angular-html" | "angular-ts" | "apache" | "apex" | "apl" | "applescript" | "ara" | "asm" | "astro" | "awk" | "ballerina" | "bat" | "beancount" | "berry" | "bibtex" | "bicep" | "blade" | "c" | "cadence" | "clarity" | "clojure" | "cmake" | "cobol" | "codeql" | "cpp" | "crystal" | "csharp" | "csv" | "cue" | "cypher" | "d" | "dart" | "dax" | "docker" | "dream-maker" | "elixir" | "elm" | "erb" | "erlang" | "fortran-fixed-form" | "fortran-free-form" | "fsharp" | "gdresource" | "gdscript" | "gdshader" | "gherkin" | "git-commit" | "git-rebase" | "glimmer-js" | "glimmer-ts" | "glsl" | "gnuplot" | "go" | "graphql" | "groovy" | "hack" | "haml" | "handlebars" | "haskell" | "hcl" | "hjson" | "hlsl" | "html" | "html-derivative" | "http" | "imba" | "ini" | "java" | "javascript" | "jinja" | "jison" | "json5" | "jsonc" | "jsonl" | "jsonnet" | "jssm" | "jsx" | "julia" | "kusto" | "less" | "liquid" | "lisp" | "logo" | "lua" | "make" | "marko" | "matlab" | "mdc" | "mdx" | "mermaid" | "mojo" | "narrat" | "nextflow" | "nginx" | "nim" | "nix" | "nushell" | "objective-c" | "objective-cpp" | "ocaml" | "pascal" | "perl" | "php" | "plsql" | "postcss" | "powerquery" | "powershell" | "prisma" | "prolog" | "proto" | "pug" | "puppet" | "purescript" | "r" | "raku" | "razor" | "reg" | "rel" | "riscv" | "rst" | "ruby" | "rust" | "sas" | "sass" | "scala" | "scheme" | "scss" | "shaderlab" | "shellscript" | "shellsession" | "smalltalk" | "solidity" | "sparql" | "splunk" | "sql" | "ssh-config" | "stata" | "stylus" | "svelte" | "system-verilog" | "tasl" | "tcl" | "terraform" | "tex" | "toml" | "tsx" | "twig" | "typescript" | "typst" | "v" | "vb" | "verilog" | "vhdl" | "viml" | "vue" | "vue-html" | "vyper" | "wasm" | "wenyan" | "wgsl" | "wolfram" | "xml" | "xsl" | "yaml" | "zenscript" | "zig" | "batch" | "be" | "cdc" | "clj" | "ql" | "coffeescript" | "c++" | "c#" | "cs" | "cql" | "dockerfile" | "erl" | "f" | "for" | "f77" | "f90" | "f95" | "f03" | "f08" | "f18" | "f#" | "gjs" | "gts" | "gql" | "hbs" | "hs" | "properties" | "js" | "fsl" | "kt" | "kts" | "kql" | "makefile" | "md" | "nar" | "nf" | "nu" | "objc" | "ps" | "ps1" | "jade" | "py" | "perl6" | "rb" | "rs" | "shader" | "bash" | "sh" | "zsh" | "console" | "spl" | "styl" | "tf" | "tfvars" | "ts" | "typ" | "cmd" | "vim" | "vimscript" | "vy" | "文言" | "wl" | "yml";
            }, {
                inline: "coffee" | "css" | "diff" | "fish" | "kotlin" | "latex" | "markdown" | "move" | "python" | "shell" | "swift" | "turtle" | "fs" | "json" | "abap" | "actionscript-3" | "ada" | "angular-html" | "angular-ts" | "apache" | "apex" | "apl" | "applescript" | "ara" | "asm" | "astro" | "awk" | "ballerina" | "bat" | "beancount" | "berry" | "bibtex" | "bicep" | "blade" | "c" | "cadence" | "clarity" | "clojure" | "cmake" | "cobol" | "codeql" | "cpp" | "crystal" | "csharp" | "csv" | "cue" | "cypher" | "d" | "dart" | "dax" | "docker" | "dream-maker" | "elixir" | "elm" | "erb" | "erlang" | "fortran-fixed-form" | "fortran-free-form" | "fsharp" | "gdresource" | "gdscript" | "gdshader" | "gherkin" | "git-commit" | "git-rebase" | "glimmer-js" | "glimmer-ts" | "glsl" | "gnuplot" | "go" | "graphql" | "groovy" | "hack" | "haml" | "handlebars" | "haskell" | "hcl" | "hjson" | "hlsl" | "html" | "html-derivative" | "http" | "imba" | "ini" | "java" | "javascript" | "jinja" | "jison" | "json5" | "jsonc" | "jsonl" | "jsonnet" | "jssm" | "jsx" | "julia" | "kusto" | "less" | "liquid" | "lisp" | "logo" | "lua" | "make" | "marko" | "matlab" | "mdc" | "mdx" | "mermaid" | "mojo" | "narrat" | "nextflow" | "nginx" | "nim" | "nix" | "nushell" | "objective-c" | "objective-cpp" | "ocaml" | "pascal" | "perl" | "php" | "plsql" | "postcss" | "powerquery" | "powershell" | "prisma" | "prolog" | "proto" | "pug" | "puppet" | "purescript" | "r" | "raku" | "razor" | "reg" | "rel" | "riscv" | "rst" | "ruby" | "rust" | "sas" | "sass" | "scala" | "scheme" | "scss" | "shaderlab" | "shellscript" | "shellsession" | "smalltalk" | "solidity" | "sparql" | "splunk" | "sql" | "ssh-config" | "stata" | "stylus" | "svelte" | "system-verilog" | "tasl" | "tcl" | "terraform" | "tex" | "toml" | "tsx" | "twig" | "typescript" | "typst" | "v" | "vb" | "verilog" | "vhdl" | "viml" | "vue" | "vue-html" | "vyper" | "wasm" | "wenyan" | "wgsl" | "wolfram" | "xml" | "xsl" | "yaml" | "zenscript" | "zig" | "batch" | "be" | "cdc" | "clj" | "ql" | "coffeescript" | "c++" | "c#" | "cs" | "cql" | "dockerfile" | "erl" | "f" | "for" | "f77" | "f90" | "f95" | "f03" | "f08" | "f18" | "f#" | "gjs" | "gts" | "gql" | "hbs" | "hs" | "properties" | "js" | "fsl" | "kt" | "kts" | "kql" | "makefile" | "md" | "nar" | "nf" | "nu" | "objc" | "ps" | "ps1" | "jade" | "py" | "perl6" | "rb" | "rs" | "shader" | "bash" | "sh" | "zsh" | "console" | "spl" | "styl" | "tf" | "tfvars" | "ts" | "typ" | "cmd" | "vim" | "vimscript" | "vy" | "文言" | "wl" | "yml";
                block: "coffee" | "css" | "diff" | "fish" | "kotlin" | "latex" | "markdown" | "move" | "python" | "shell" | "swift" | "turtle" | "fs" | "json" | "abap" | "actionscript-3" | "ada" | "angular-html" | "angular-ts" | "apache" | "apex" | "apl" | "applescript" | "ara" | "asm" | "astro" | "awk" | "ballerina" | "bat" | "beancount" | "berry" | "bibtex" | "bicep" | "blade" | "c" | "cadence" | "clarity" | "clojure" | "cmake" | "cobol" | "codeql" | "cpp" | "crystal" | "csharp" | "csv" | "cue" | "cypher" | "d" | "dart" | "dax" | "docker" | "dream-maker" | "elixir" | "elm" | "erb" | "erlang" | "fortran-fixed-form" | "fortran-free-form" | "fsharp" | "gdresource" | "gdscript" | "gdshader" | "gherkin" | "git-commit" | "git-rebase" | "glimmer-js" | "glimmer-ts" | "glsl" | "gnuplot" | "go" | "graphql" | "groovy" | "hack" | "haml" | "handlebars" | "haskell" | "hcl" | "hjson" | "hlsl" | "html" | "html-derivative" | "http" | "imba" | "ini" | "java" | "javascript" | "jinja" | "jison" | "json5" | "jsonc" | "jsonl" | "jsonnet" | "jssm" | "jsx" | "julia" | "kusto" | "less" | "liquid" | "lisp" | "logo" | "lua" | "make" | "marko" | "matlab" | "mdc" | "mdx" | "mermaid" | "mojo" | "narrat" | "nextflow" | "nginx" | "nim" | "nix" | "nushell" | "objective-c" | "objective-cpp" | "ocaml" | "pascal" | "perl" | "php" | "plsql" | "postcss" | "powerquery" | "powershell" | "prisma" | "prolog" | "proto" | "pug" | "puppet" | "purescript" | "r" | "raku" | "razor" | "reg" | "rel" | "riscv" | "rst" | "ruby" | "rust" | "sas" | "sass" | "scala" | "scheme" | "scss" | "shaderlab" | "shellscript" | "shellsession" | "smalltalk" | "solidity" | "sparql" | "splunk" | "sql" | "ssh-config" | "stata" | "stylus" | "svelte" | "system-verilog" | "tasl" | "tcl" | "terraform" | "tex" | "toml" | "tsx" | "twig" | "typescript" | "typst" | "v" | "vb" | "verilog" | "vhdl" | "viml" | "vue" | "vue-html" | "vyper" | "wasm" | "wenyan" | "wgsl" | "wolfram" | "xml" | "xsl" | "yaml" | "zenscript" | "zig" | "batch" | "be" | "cdc" | "clj" | "ql" | "coffeescript" | "c++" | "c#" | "cs" | "cql" | "dockerfile" | "erl" | "f" | "for" | "f77" | "f90" | "f95" | "f03" | "f08" | "f18" | "f#" | "gjs" | "gts" | "gql" | "hbs" | "hs" | "properties" | "js" | "fsl" | "kt" | "kts" | "kql" | "makefile" | "md" | "nar" | "nf" | "nu" | "objc" | "ps" | "ps1" | "jade" | "py" | "perl6" | "rb" | "rs" | "shader" | "bash" | "sh" | "zsh" | "console" | "spl" | "styl" | "tf" | "tfvars" | "ts" | "typ" | "cmd" | "vim" | "vimscript" | "vy" | "文言" | "wl" | "yml";
            }>]>>, {
                inline: "coffee" | "css" | "diff" | "fish" | "kotlin" | "latex" | "markdown" | "move" | "python" | "shell" | "swift" | "turtle" | "fs" | "json" | "abap" | "actionscript-3" | "ada" | "angular-html" | "angular-ts" | "apache" | "apex" | "apl" | "applescript" | "ara" | "asm" | "astro" | "awk" | "ballerina" | "bat" | "beancount" | "berry" | "bibtex" | "bicep" | "blade" | "c" | "cadence" | "clarity" | "clojure" | "cmake" | "cobol" | "codeql" | "cpp" | "crystal" | "csharp" | "csv" | "cue" | "cypher" | "d" | "dart" | "dax" | "docker" | "dream-maker" | "elixir" | "elm" | "erb" | "erlang" | "fortran-fixed-form" | "fortran-free-form" | "fsharp" | "gdresource" | "gdscript" | "gdshader" | "gherkin" | "git-commit" | "git-rebase" | "glimmer-js" | "glimmer-ts" | "glsl" | "gnuplot" | "go" | "graphql" | "groovy" | "hack" | "haml" | "handlebars" | "haskell" | "hcl" | "hjson" | "hlsl" | "html" | "html-derivative" | "http" | "imba" | "ini" | "java" | "javascript" | "jinja" | "jison" | "json5" | "jsonc" | "jsonl" | "jsonnet" | "jssm" | "jsx" | "julia" | "kusto" | "less" | "liquid" | "lisp" | "logo" | "lua" | "make" | "marko" | "matlab" | "mdc" | "mdx" | "mermaid" | "mojo" | "narrat" | "nextflow" | "nginx" | "nim" | "nix" | "nushell" | "objective-c" | "objective-cpp" | "ocaml" | "pascal" | "perl" | "php" | "plsql" | "postcss" | "powerquery" | "powershell" | "prisma" | "prolog" | "proto" | "pug" | "puppet" | "purescript" | "r" | "raku" | "razor" | "reg" | "rel" | "riscv" | "rst" | "ruby" | "rust" | "sas" | "sass" | "scala" | "scheme" | "scss" | "shaderlab" | "shellscript" | "shellsession" | "smalltalk" | "solidity" | "sparql" | "splunk" | "sql" | "ssh-config" | "stata" | "stylus" | "svelte" | "system-verilog" | "tasl" | "tcl" | "terraform" | "tex" | "toml" | "tsx" | "twig" | "typescript" | "typst" | "v" | "vb" | "verilog" | "vhdl" | "viml" | "vue" | "vue-html" | "vyper" | "wasm" | "wenyan" | "wgsl" | "wolfram" | "xml" | "xsl" | "yaml" | "zenscript" | "zig" | "batch" | "be" | "cdc" | "clj" | "ql" | "coffeescript" | "c++" | "c#" | "cs" | "cql" | "dockerfile" | "erl" | "f" | "for" | "f77" | "f90" | "f95" | "f03" | "f08" | "f18" | "f#" | "gjs" | "gts" | "gql" | "hbs" | "hs" | "properties" | "js" | "fsl" | "kt" | "kts" | "kql" | "makefile" | "md" | "nar" | "nf" | "nu" | "objc" | "ps" | "ps1" | "jade" | "py" | "perl6" | "rb" | "rs" | "shader" | "bash" | "sh" | "zsh" | "console" | "spl" | "styl" | "tf" | "tfvars" | "ts" | "typ" | "cmd" | "vim" | "vimscript" | "vy" | "文言" | "wl" | "yml";
                block: "coffee" | "css" | "diff" | "fish" | "kotlin" | "latex" | "markdown" | "move" | "python" | "shell" | "swift" | "turtle" | "fs" | "json" | "abap" | "actionscript-3" | "ada" | "angular-html" | "angular-ts" | "apache" | "apex" | "apl" | "applescript" | "ara" | "asm" | "astro" | "awk" | "ballerina" | "bat" | "beancount" | "berry" | "bibtex" | "bicep" | "blade" | "c" | "cadence" | "clarity" | "clojure" | "cmake" | "cobol" | "codeql" | "cpp" | "crystal" | "csharp" | "csv" | "cue" | "cypher" | "d" | "dart" | "dax" | "docker" | "dream-maker" | "elixir" | "elm" | "erb" | "erlang" | "fortran-fixed-form" | "fortran-free-form" | "fsharp" | "gdresource" | "gdscript" | "gdshader" | "gherkin" | "git-commit" | "git-rebase" | "glimmer-js" | "glimmer-ts" | "glsl" | "gnuplot" | "go" | "graphql" | "groovy" | "hack" | "haml" | "handlebars" | "haskell" | "hcl" | "hjson" | "hlsl" | "html" | "html-derivative" | "http" | "imba" | "ini" | "java" | "javascript" | "jinja" | "jison" | "json5" | "jsonc" | "jsonl" | "jsonnet" | "jssm" | "jsx" | "julia" | "kusto" | "less" | "liquid" | "lisp" | "logo" | "lua" | "make" | "marko" | "matlab" | "mdc" | "mdx" | "mermaid" | "mojo" | "narrat" | "nextflow" | "nginx" | "nim" | "nix" | "nushell" | "objective-c" | "objective-cpp" | "ocaml" | "pascal" | "perl" | "php" | "plsql" | "postcss" | "powerquery" | "powershell" | "prisma" | "prolog" | "proto" | "pug" | "puppet" | "purescript" | "r" | "raku" | "razor" | "reg" | "rel" | "riscv" | "rst" | "ruby" | "rust" | "sas" | "sass" | "scala" | "scheme" | "scss" | "shaderlab" | "shellscript" | "shellsession" | "smalltalk" | "solidity" | "sparql" | "splunk" | "sql" | "ssh-config" | "stata" | "stylus" | "svelte" | "system-verilog" | "tasl" | "tcl" | "terraform" | "tex" | "toml" | "tsx" | "twig" | "typescript" | "typst" | "v" | "vb" | "verilog" | "vhdl" | "viml" | "vue" | "vue-html" | "vyper" | "wasm" | "wenyan" | "wgsl" | "wolfram" | "xml" | "xsl" | "yaml" | "zenscript" | "zig" | "batch" | "be" | "cdc" | "clj" | "ql" | "coffeescript" | "c++" | "c#" | "cs" | "cql" | "dockerfile" | "erl" | "f" | "for" | "f77" | "f90" | "f95" | "f03" | "f08" | "f18" | "f#" | "gjs" | "gts" | "gql" | "hbs" | "hs" | "properties" | "js" | "fsl" | "kt" | "kts" | "kql" | "makefile" | "md" | "nar" | "nf" | "nu" | "objc" | "ps" | "ps1" | "jade" | "py" | "perl6" | "rb" | "rs" | "shader" | "bash" | "sh" | "zsh" | "console" | "spl" | "styl" | "tf" | "tfvars" | "ts" | "typ" | "cmd" | "vim" | "vimscript" | "vy" | "文言" | "wl" | "yml";
            }, "coffee" | "css" | "diff" | "fish" | "kotlin" | "latex" | "markdown" | "move" | "python" | "shell" | "swift" | "turtle" | "fs" | "json" | "abap" | "actionscript-3" | "ada" | "angular-html" | "angular-ts" | "apache" | "apex" | "apl" | "applescript" | "ara" | "asm" | "astro" | "awk" | "ballerina" | "bat" | "beancount" | "berry" | "bibtex" | "bicep" | "blade" | "c" | "cadence" | "clarity" | "clojure" | "cmake" | "cobol" | "codeql" | "cpp" | "crystal" | "csharp" | "csv" | "cue" | "cypher" | "d" | "dart" | "dax" | "docker" | "dream-maker" | "elixir" | "elm" | "erb" | "erlang" | "fortran-fixed-form" | "fortran-free-form" | "fsharp" | "gdresource" | "gdscript" | "gdshader" | "gherkin" | "git-commit" | "git-rebase" | "glimmer-js" | "glimmer-ts" | "glsl" | "gnuplot" | "go" | "graphql" | "groovy" | "hack" | "haml" | "handlebars" | "haskell" | "hcl" | "hjson" | "hlsl" | "html" | "html-derivative" | "http" | "imba" | "ini" | "java" | "javascript" | "jinja" | "jison" | "json5" | "jsonc" | "jsonl" | "jsonnet" | "jssm" | "jsx" | "julia" | "kusto" | "less" | "liquid" | "lisp" | "logo" | "lua" | "make" | "marko" | "matlab" | "mdc" | "mdx" | "mermaid" | "mojo" | "narrat" | "nextflow" | "nginx" | "nim" | "nix" | "nushell" | "objective-c" | "objective-cpp" | "ocaml" | "pascal" | "perl" | "php" | "plsql" | "postcss" | "powerquery" | "powershell" | "prisma" | "prolog" | "proto" | "pug" | "puppet" | "purescript" | "r" | "raku" | "razor" | "reg" | "rel" | "riscv" | "rst" | "ruby" | "rust" | "sas" | "sass" | "scala" | "scheme" | "scss" | "shaderlab" | "shellscript" | "shellsession" | "smalltalk" | "solidity" | "sparql" | "splunk" | "sql" | "ssh-config" | "stata" | "stylus" | "svelte" | "system-verilog" | "tasl" | "tcl" | "terraform" | "tex" | "toml" | "tsx" | "twig" | "typescript" | "typst" | "v" | "vb" | "verilog" | "vhdl" | "viml" | "vue" | "vue-html" | "vyper" | "wasm" | "wenyan" | "wgsl" | "wolfram" | "xml" | "xsl" | "yaml" | "zenscript" | "zig" | "batch" | "be" | "cdc" | "clj" | "ql" | "coffeescript" | "c++" | "c#" | "cs" | "cql" | "dockerfile" | "erl" | "f" | "for" | "f77" | "f90" | "f95" | "f03" | "f08" | "f18" | "f#" | "gjs" | "gts" | "gql" | "hbs" | "hs" | "properties" | "js" | "fsl" | "kt" | "kts" | "kql" | "makefile" | "md" | "nar" | "nf" | "nu" | "objc" | "ps" | "ps1" | "jade" | "py" | "perl6" | "rb" | "rs" | "shader" | "bash" | "sh" | "zsh" | "console" | "spl" | "styl" | "tf" | "tfvars" | "ts" | "typ" | "cmd" | "vim" | "vimscript" | "vy" | "文言" | "wl" | "yml" | {
                inline: "coffee" | "css" | "diff" | "fish" | "kotlin" | "latex" | "markdown" | "move" | "python" | "shell" | "swift" | "turtle" | "fs" | "json" | "abap" | "actionscript-3" | "ada" | "angular-html" | "angular-ts" | "apache" | "apex" | "apl" | "applescript" | "ara" | "asm" | "astro" | "awk" | "ballerina" | "bat" | "beancount" | "berry" | "bibtex" | "bicep" | "blade" | "c" | "cadence" | "clarity" | "clojure" | "cmake" | "cobol" | "codeql" | "cpp" | "crystal" | "csharp" | "csv" | "cue" | "cypher" | "d" | "dart" | "dax" | "docker" | "dream-maker" | "elixir" | "elm" | "erb" | "erlang" | "fortran-fixed-form" | "fortran-free-form" | "fsharp" | "gdresource" | "gdscript" | "gdshader" | "gherkin" | "git-commit" | "git-rebase" | "glimmer-js" | "glimmer-ts" | "glsl" | "gnuplot" | "go" | "graphql" | "groovy" | "hack" | "haml" | "handlebars" | "haskell" | "hcl" | "hjson" | "hlsl" | "html" | "html-derivative" | "http" | "imba" | "ini" | "java" | "javascript" | "jinja" | "jison" | "json5" | "jsonc" | "jsonl" | "jsonnet" | "jssm" | "jsx" | "julia" | "kusto" | "less" | "liquid" | "lisp" | "logo" | "lua" | "make" | "marko" | "matlab" | "mdc" | "mdx" | "mermaid" | "mojo" | "narrat" | "nextflow" | "nginx" | "nim" | "nix" | "nushell" | "objective-c" | "objective-cpp" | "ocaml" | "pascal" | "perl" | "php" | "plsql" | "postcss" | "powerquery" | "powershell" | "prisma" | "prolog" | "proto" | "pug" | "puppet" | "purescript" | "r" | "raku" | "razor" | "reg" | "rel" | "riscv" | "rst" | "ruby" | "rust" | "sas" | "sass" | "scala" | "scheme" | "scss" | "shaderlab" | "shellscript" | "shellsession" | "smalltalk" | "solidity" | "sparql" | "splunk" | "sql" | "ssh-config" | "stata" | "stylus" | "svelte" | "system-verilog" | "tasl" | "tcl" | "terraform" | "tex" | "toml" | "tsx" | "twig" | "typescript" | "typst" | "v" | "vb" | "verilog" | "vhdl" | "viml" | "vue" | "vue-html" | "vyper" | "wasm" | "wenyan" | "wgsl" | "wolfram" | "xml" | "xsl" | "yaml" | "zenscript" | "zig" | "batch" | "be" | "cdc" | "clj" | "ql" | "coffeescript" | "c++" | "c#" | "cs" | "cql" | "dockerfile" | "erl" | "f" | "for" | "f77" | "f90" | "f95" | "f03" | "f08" | "f18" | "f#" | "gjs" | "gts" | "gql" | "hbs" | "hs" | "properties" | "js" | "fsl" | "kt" | "kts" | "kql" | "makefile" | "md" | "nar" | "nf" | "nu" | "objc" | "ps" | "ps1" | "jade" | "py" | "perl6" | "rb" | "rs" | "shader" | "bash" | "sh" | "zsh" | "console" | "spl" | "styl" | "tf" | "tfvars" | "ts" | "typ" | "cmd" | "vim" | "vimscript" | "vy" | "文言" | "wl" | "yml";
                block: "coffee" | "css" | "diff" | "fish" | "kotlin" | "latex" | "markdown" | "move" | "python" | "shell" | "swift" | "turtle" | "fs" | "json" | "abap" | "actionscript-3" | "ada" | "angular-html" | "angular-ts" | "apache" | "apex" | "apl" | "applescript" | "ara" | "asm" | "astro" | "awk" | "ballerina" | "bat" | "beancount" | "berry" | "bibtex" | "bicep" | "blade" | "c" | "cadence" | "clarity" | "clojure" | "cmake" | "cobol" | "codeql" | "cpp" | "crystal" | "csharp" | "csv" | "cue" | "cypher" | "d" | "dart" | "dax" | "docker" | "dream-maker" | "elixir" | "elm" | "erb" | "erlang" | "fortran-fixed-form" | "fortran-free-form" | "fsharp" | "gdresource" | "gdscript" | "gdshader" | "gherkin" | "git-commit" | "git-rebase" | "glimmer-js" | "glimmer-ts" | "glsl" | "gnuplot" | "go" | "graphql" | "groovy" | "hack" | "haml" | "handlebars" | "haskell" | "hcl" | "hjson" | "hlsl" | "html" | "html-derivative" | "http" | "imba" | "ini" | "java" | "javascript" | "jinja" | "jison" | "json5" | "jsonc" | "jsonl" | "jsonnet" | "jssm" | "jsx" | "julia" | "kusto" | "less" | "liquid" | "lisp" | "logo" | "lua" | "make" | "marko" | "matlab" | "mdc" | "mdx" | "mermaid" | "mojo" | "narrat" | "nextflow" | "nginx" | "nim" | "nix" | "nushell" | "objective-c" | "objective-cpp" | "ocaml" | "pascal" | "perl" | "php" | "plsql" | "postcss" | "powerquery" | "powershell" | "prisma" | "prolog" | "proto" | "pug" | "puppet" | "purescript" | "r" | "raku" | "razor" | "reg" | "rel" | "riscv" | "rst" | "ruby" | "rust" | "sas" | "sass" | "scala" | "scheme" | "scss" | "shaderlab" | "shellscript" | "shellsession" | "smalltalk" | "solidity" | "sparql" | "splunk" | "sql" | "ssh-config" | "stata" | "stylus" | "svelte" | "system-verilog" | "tasl" | "tcl" | "terraform" | "tex" | "toml" | "tsx" | "twig" | "typescript" | "typst" | "v" | "vb" | "verilog" | "vhdl" | "viml" | "vue" | "vue-html" | "vyper" | "wasm" | "wenyan" | "wgsl" | "wolfram" | "xml" | "xsl" | "yaml" | "zenscript" | "zig" | "batch" | "be" | "cdc" | "clj" | "ql" | "coffeescript" | "c++" | "c#" | "cs" | "cql" | "dockerfile" | "erl" | "f" | "for" | "f77" | "f90" | "f95" | "f03" | "f08" | "f18" | "f#" | "gjs" | "gts" | "gql" | "hbs" | "hs" | "properties" | "js" | "fsl" | "kt" | "kts" | "kql" | "makefile" | "md" | "nar" | "nf" | "nu" | "objc" | "ps" | "ps1" | "jade" | "py" | "perl6" | "rb" | "rs" | "shader" | "bash" | "sh" | "zsh" | "console" | "spl" | "styl" | "tf" | "tfvars" | "ts" | "typ" | "cmd" | "vim" | "vimscript" | "vy" | "文言" | "wl" | "yml";
            } | undefined>;
        }, "strip", import("zod").ZodTypeAny, {
            transformers: {
                regexHighlight: boolean;
                lineHighlight: boolean;
                lineFocus: boolean;
                lineErrorLevel: boolean;
                lineDiff: boolean;
            };
            defaultLanguage: {
                inline: "coffee" | "css" | "diff" | "fish" | "kotlin" | "latex" | "markdown" | "move" | "python" | "shell" | "swift" | "turtle" | "fs" | "json" | "abap" | "actionscript-3" | "ada" | "angular-html" | "angular-ts" | "apache" | "apex" | "apl" | "applescript" | "ara" | "asm" | "astro" | "awk" | "ballerina" | "bat" | "beancount" | "berry" | "bibtex" | "bicep" | "blade" | "c" | "cadence" | "clarity" | "clojure" | "cmake" | "cobol" | "codeql" | "cpp" | "crystal" | "csharp" | "csv" | "cue" | "cypher" | "d" | "dart" | "dax" | "docker" | "dream-maker" | "elixir" | "elm" | "erb" | "erlang" | "fortran-fixed-form" | "fortran-free-form" | "fsharp" | "gdresource" | "gdscript" | "gdshader" | "gherkin" | "git-commit" | "git-rebase" | "glimmer-js" | "glimmer-ts" | "glsl" | "gnuplot" | "go" | "graphql" | "groovy" | "hack" | "haml" | "handlebars" | "haskell" | "hcl" | "hjson" | "hlsl" | "html" | "html-derivative" | "http" | "imba" | "ini" | "java" | "javascript" | "jinja" | "jison" | "json5" | "jsonc" | "jsonl" | "jsonnet" | "jssm" | "jsx" | "julia" | "kusto" | "less" | "liquid" | "lisp" | "logo" | "lua" | "make" | "marko" | "matlab" | "mdc" | "mdx" | "mermaid" | "mojo" | "narrat" | "nextflow" | "nginx" | "nim" | "nix" | "nushell" | "objective-c" | "objective-cpp" | "ocaml" | "pascal" | "perl" | "php" | "plsql" | "postcss" | "powerquery" | "powershell" | "prisma" | "prolog" | "proto" | "pug" | "puppet" | "purescript" | "r" | "raku" | "razor" | "reg" | "rel" | "riscv" | "rst" | "ruby" | "rust" | "sas" | "sass" | "scala" | "scheme" | "scss" | "shaderlab" | "shellscript" | "shellsession" | "smalltalk" | "solidity" | "sparql" | "splunk" | "sql" | "ssh-config" | "stata" | "stylus" | "svelte" | "system-verilog" | "tasl" | "tcl" | "terraform" | "tex" | "toml" | "tsx" | "twig" | "typescript" | "typst" | "v" | "vb" | "verilog" | "vhdl" | "viml" | "vue" | "vue-html" | "vyper" | "wasm" | "wenyan" | "wgsl" | "wolfram" | "xml" | "xsl" | "yaml" | "zenscript" | "zig" | "batch" | "be" | "cdc" | "clj" | "ql" | "coffeescript" | "c++" | "c#" | "cs" | "cql" | "dockerfile" | "erl" | "f" | "for" | "f77" | "f90" | "f95" | "f03" | "f08" | "f18" | "f#" | "gjs" | "gts" | "gql" | "hbs" | "hs" | "properties" | "js" | "fsl" | "kt" | "kts" | "kql" | "makefile" | "md" | "nar" | "nf" | "nu" | "objc" | "ps" | "ps1" | "jade" | "py" | "perl6" | "rb" | "rs" | "shader" | "bash" | "sh" | "zsh" | "console" | "spl" | "styl" | "tf" | "tfvars" | "ts" | "typ" | "cmd" | "vim" | "vimscript" | "vy" | "文言" | "wl" | "yml";
                block: "coffee" | "css" | "diff" | "fish" | "kotlin" | "latex" | "markdown" | "move" | "python" | "shell" | "swift" | "turtle" | "fs" | "json" | "abap" | "actionscript-3" | "ada" | "angular-html" | "angular-ts" | "apache" | "apex" | "apl" | "applescript" | "ara" | "asm" | "astro" | "awk" | "ballerina" | "bat" | "beancount" | "berry" | "bibtex" | "bicep" | "blade" | "c" | "cadence" | "clarity" | "clojure" | "cmake" | "cobol" | "codeql" | "cpp" | "crystal" | "csharp" | "csv" | "cue" | "cypher" | "d" | "dart" | "dax" | "docker" | "dream-maker" | "elixir" | "elm" | "erb" | "erlang" | "fortran-fixed-form" | "fortran-free-form" | "fsharp" | "gdresource" | "gdscript" | "gdshader" | "gherkin" | "git-commit" | "git-rebase" | "glimmer-js" | "glimmer-ts" | "glsl" | "gnuplot" | "go" | "graphql" | "groovy" | "hack" | "haml" | "handlebars" | "haskell" | "hcl" | "hjson" | "hlsl" | "html" | "html-derivative" | "http" | "imba" | "ini" | "java" | "javascript" | "jinja" | "jison" | "json5" | "jsonc" | "jsonl" | "jsonnet" | "jssm" | "jsx" | "julia" | "kusto" | "less" | "liquid" | "lisp" | "logo" | "lua" | "make" | "marko" | "matlab" | "mdc" | "mdx" | "mermaid" | "mojo" | "narrat" | "nextflow" | "nginx" | "nim" | "nix" | "nushell" | "objective-c" | "objective-cpp" | "ocaml" | "pascal" | "perl" | "php" | "plsql" | "postcss" | "powerquery" | "powershell" | "prisma" | "prolog" | "proto" | "pug" | "puppet" | "purescript" | "r" | "raku" | "razor" | "reg" | "rel" | "riscv" | "rst" | "ruby" | "rust" | "sas" | "sass" | "scala" | "scheme" | "scss" | "shaderlab" | "shellscript" | "shellsession" | "smalltalk" | "solidity" | "sparql" | "splunk" | "sql" | "ssh-config" | "stata" | "stylus" | "svelte" | "system-verilog" | "tasl" | "tcl" | "terraform" | "tex" | "toml" | "tsx" | "twig" | "typescript" | "typst" | "v" | "vb" | "verilog" | "vhdl" | "viml" | "vue" | "vue-html" | "vyper" | "wasm" | "wenyan" | "wgsl" | "wolfram" | "xml" | "xsl" | "yaml" | "zenscript" | "zig" | "batch" | "be" | "cdc" | "clj" | "ql" | "coffeescript" | "c++" | "c#" | "cs" | "cql" | "dockerfile" | "erl" | "f" | "for" | "f77" | "f90" | "f95" | "f03" | "f08" | "f18" | "f#" | "gjs" | "gts" | "gql" | "hbs" | "hs" | "properties" | "js" | "fsl" | "kt" | "kts" | "kql" | "makefile" | "md" | "nar" | "nf" | "nu" | "objc" | "ps" | "ps1" | "jade" | "py" | "perl6" | "rb" | "rs" | "shader" | "bash" | "sh" | "zsh" | "console" | "spl" | "styl" | "tf" | "tfvars" | "ts" | "typ" | "cmd" | "vim" | "vimscript" | "vy" | "文言" | "wl" | "yml";
            };
        }, {
            transformers?: {
                regexHighlight?: boolean | undefined;
                lineHighlight?: boolean | undefined;
                lineFocus?: boolean | undefined;
                lineErrorLevel?: boolean | undefined;
                lineDiff?: boolean | undefined;
            } | undefined;
            defaultLanguage?: "coffee" | "css" | "diff" | "fish" | "kotlin" | "latex" | "markdown" | "move" | "python" | "shell" | "swift" | "turtle" | "fs" | "json" | "abap" | "actionscript-3" | "ada" | "angular-html" | "angular-ts" | "apache" | "apex" | "apl" | "applescript" | "ara" | "asm" | "astro" | "awk" | "ballerina" | "bat" | "beancount" | "berry" | "bibtex" | "bicep" | "blade" | "c" | "cadence" | "clarity" | "clojure" | "cmake" | "cobol" | "codeql" | "cpp" | "crystal" | "csharp" | "csv" | "cue" | "cypher" | "d" | "dart" | "dax" | "docker" | "dream-maker" | "elixir" | "elm" | "erb" | "erlang" | "fortran-fixed-form" | "fortran-free-form" | "fsharp" | "gdresource" | "gdscript" | "gdshader" | "gherkin" | "git-commit" | "git-rebase" | "glimmer-js" | "glimmer-ts" | "glsl" | "gnuplot" | "go" | "graphql" | "groovy" | "hack" | "haml" | "handlebars" | "haskell" | "hcl" | "hjson" | "hlsl" | "html" | "html-derivative" | "http" | "imba" | "ini" | "java" | "javascript" | "jinja" | "jison" | "json5" | "jsonc" | "jsonl" | "jsonnet" | "jssm" | "jsx" | "julia" | "kusto" | "less" | "liquid" | "lisp" | "logo" | "lua" | "make" | "marko" | "matlab" | "mdc" | "mdx" | "mermaid" | "mojo" | "narrat" | "nextflow" | "nginx" | "nim" | "nix" | "nushell" | "objective-c" | "objective-cpp" | "ocaml" | "pascal" | "perl" | "php" | "plsql" | "postcss" | "powerquery" | "powershell" | "prisma" | "prolog" | "proto" | "pug" | "puppet" | "purescript" | "r" | "raku" | "razor" | "reg" | "rel" | "riscv" | "rst" | "ruby" | "rust" | "sas" | "sass" | "scala" | "scheme" | "scss" | "shaderlab" | "shellscript" | "shellsession" | "smalltalk" | "solidity" | "sparql" | "splunk" | "sql" | "ssh-config" | "stata" | "stylus" | "svelte" | "system-verilog" | "tasl" | "tcl" | "terraform" | "tex" | "toml" | "tsx" | "twig" | "typescript" | "typst" | "v" | "vb" | "verilog" | "vhdl" | "viml" | "vue" | "vue-html" | "vyper" | "wasm" | "wenyan" | "wgsl" | "wolfram" | "xml" | "xsl" | "yaml" | "zenscript" | "zig" | "batch" | "be" | "cdc" | "clj" | "ql" | "coffeescript" | "c++" | "c#" | "cs" | "cql" | "dockerfile" | "erl" | "f" | "for" | "f77" | "f90" | "f95" | "f03" | "f08" | "f18" | "f#" | "gjs" | "gts" | "gql" | "hbs" | "hs" | "properties" | "js" | "fsl" | "kt" | "kts" | "kql" | "makefile" | "md" | "nar" | "nf" | "nu" | "objc" | "ps" | "ps1" | "jade" | "py" | "perl6" | "rb" | "rs" | "shader" | "bash" | "sh" | "zsh" | "console" | "spl" | "styl" | "tf" | "tfvars" | "ts" | "typ" | "cmd" | "vim" | "vimscript" | "vy" | "文言" | "wl" | "yml" | {
                inline: "coffee" | "css" | "diff" | "fish" | "kotlin" | "latex" | "markdown" | "move" | "python" | "shell" | "swift" | "turtle" | "fs" | "json" | "abap" | "actionscript-3" | "ada" | "angular-html" | "angular-ts" | "apache" | "apex" | "apl" | "applescript" | "ara" | "asm" | "astro" | "awk" | "ballerina" | "bat" | "beancount" | "berry" | "bibtex" | "bicep" | "blade" | "c" | "cadence" | "clarity" | "clojure" | "cmake" | "cobol" | "codeql" | "cpp" | "crystal" | "csharp" | "csv" | "cue" | "cypher" | "d" | "dart" | "dax" | "docker" | "dream-maker" | "elixir" | "elm" | "erb" | "erlang" | "fortran-fixed-form" | "fortran-free-form" | "fsharp" | "gdresource" | "gdscript" | "gdshader" | "gherkin" | "git-commit" | "git-rebase" | "glimmer-js" | "glimmer-ts" | "glsl" | "gnuplot" | "go" | "graphql" | "groovy" | "hack" | "haml" | "handlebars" | "haskell" | "hcl" | "hjson" | "hlsl" | "html" | "html-derivative" | "http" | "imba" | "ini" | "java" | "javascript" | "jinja" | "jison" | "json5" | "jsonc" | "jsonl" | "jsonnet" | "jssm" | "jsx" | "julia" | "kusto" | "less" | "liquid" | "lisp" | "logo" | "lua" | "make" | "marko" | "matlab" | "mdc" | "mdx" | "mermaid" | "mojo" | "narrat" | "nextflow" | "nginx" | "nim" | "nix" | "nushell" | "objective-c" | "objective-cpp" | "ocaml" | "pascal" | "perl" | "php" | "plsql" | "postcss" | "powerquery" | "powershell" | "prisma" | "prolog" | "proto" | "pug" | "puppet" | "purescript" | "r" | "raku" | "razor" | "reg" | "rel" | "riscv" | "rst" | "ruby" | "rust" | "sas" | "sass" | "scala" | "scheme" | "scss" | "shaderlab" | "shellscript" | "shellsession" | "smalltalk" | "solidity" | "sparql" | "splunk" | "sql" | "ssh-config" | "stata" | "stylus" | "svelte" | "system-verilog" | "tasl" | "tcl" | "terraform" | "tex" | "toml" | "tsx" | "twig" | "typescript" | "typst" | "v" | "vb" | "verilog" | "vhdl" | "viml" | "vue" | "vue-html" | "vyper" | "wasm" | "wenyan" | "wgsl" | "wolfram" | "xml" | "xsl" | "yaml" | "zenscript" | "zig" | "batch" | "be" | "cdc" | "clj" | "ql" | "coffeescript" | "c++" | "c#" | "cs" | "cql" | "dockerfile" | "erl" | "f" | "for" | "f77" | "f90" | "f95" | "f03" | "f08" | "f18" | "f#" | "gjs" | "gts" | "gql" | "hbs" | "hs" | "properties" | "js" | "fsl" | "kt" | "kts" | "kql" | "makefile" | "md" | "nar" | "nf" | "nu" | "objc" | "ps" | "ps1" | "jade" | "py" | "perl6" | "rb" | "rs" | "shader" | "bash" | "sh" | "zsh" | "console" | "spl" | "styl" | "tf" | "tfvars" | "ts" | "typ" | "cmd" | "vim" | "vimscript" | "vy" | "文言" | "wl" | "yml";
                block: "coffee" | "css" | "diff" | "fish" | "kotlin" | "latex" | "markdown" | "move" | "python" | "shell" | "swift" | "turtle" | "fs" | "json" | "abap" | "actionscript-3" | "ada" | "angular-html" | "angular-ts" | "apache" | "apex" | "apl" | "applescript" | "ara" | "asm" | "astro" | "awk" | "ballerina" | "bat" | "beancount" | "berry" | "bibtex" | "bicep" | "blade" | "c" | "cadence" | "clarity" | "clojure" | "cmake" | "cobol" | "codeql" | "cpp" | "crystal" | "csharp" | "csv" | "cue" | "cypher" | "d" | "dart" | "dax" | "docker" | "dream-maker" | "elixir" | "elm" | "erb" | "erlang" | "fortran-fixed-form" | "fortran-free-form" | "fsharp" | "gdresource" | "gdscript" | "gdshader" | "gherkin" | "git-commit" | "git-rebase" | "glimmer-js" | "glimmer-ts" | "glsl" | "gnuplot" | "go" | "graphql" | "groovy" | "hack" | "haml" | "handlebars" | "haskell" | "hcl" | "hjson" | "hlsl" | "html" | "html-derivative" | "http" | "imba" | "ini" | "java" | "javascript" | "jinja" | "jison" | "json5" | "jsonc" | "jsonl" | "jsonnet" | "jssm" | "jsx" | "julia" | "kusto" | "less" | "liquid" | "lisp" | "logo" | "lua" | "make" | "marko" | "matlab" | "mdc" | "mdx" | "mermaid" | "mojo" | "narrat" | "nextflow" | "nginx" | "nim" | "nix" | "nushell" | "objective-c" | "objective-cpp" | "ocaml" | "pascal" | "perl" | "php" | "plsql" | "postcss" | "powerquery" | "powershell" | "prisma" | "prolog" | "proto" | "pug" | "puppet" | "purescript" | "r" | "raku" | "razor" | "reg" | "rel" | "riscv" | "rst" | "ruby" | "rust" | "sas" | "sass" | "scala" | "scheme" | "scss" | "shaderlab" | "shellscript" | "shellsession" | "smalltalk" | "solidity" | "sparql" | "splunk" | "sql" | "ssh-config" | "stata" | "stylus" | "svelte" | "system-verilog" | "tasl" | "tcl" | "terraform" | "tex" | "toml" | "tsx" | "twig" | "typescript" | "typst" | "v" | "vb" | "verilog" | "vhdl" | "viml" | "vue" | "vue-html" | "vyper" | "wasm" | "wenyan" | "wgsl" | "wolfram" | "xml" | "xsl" | "yaml" | "zenscript" | "zig" | "batch" | "be" | "cdc" | "clj" | "ql" | "coffeescript" | "c++" | "c#" | "cs" | "cql" | "dockerfile" | "erl" | "f" | "for" | "f77" | "f90" | "f95" | "f03" | "f08" | "f18" | "f#" | "gjs" | "gts" | "gql" | "hbs" | "hs" | "properties" | "js" | "fsl" | "kt" | "kts" | "kql" | "makefile" | "md" | "nar" | "nf" | "nu" | "objc" | "ps" | "ps1" | "jade" | "py" | "perl6" | "rb" | "rs" | "shader" | "bash" | "sh" | "zsh" | "console" | "spl" | "styl" | "tf" | "tfvars" | "ts" | "typ" | "cmd" | "vim" | "vimscript" | "vy" | "文言" | "wl" | "yml";
            } | undefined;
        }>>;
    }, "strip", import("zod").ZodTypeAny, {
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
                inline: "coffee" | "css" | "diff" | "fish" | "kotlin" | "latex" | "markdown" | "move" | "python" | "shell" | "swift" | "turtle" | "fs" | "json" | "abap" | "actionscript-3" | "ada" | "angular-html" | "angular-ts" | "apache" | "apex" | "apl" | "applescript" | "ara" | "asm" | "astro" | "awk" | "ballerina" | "bat" | "beancount" | "berry" | "bibtex" | "bicep" | "blade" | "c" | "cadence" | "clarity" | "clojure" | "cmake" | "cobol" | "codeql" | "cpp" | "crystal" | "csharp" | "csv" | "cue" | "cypher" | "d" | "dart" | "dax" | "docker" | "dream-maker" | "elixir" | "elm" | "erb" | "erlang" | "fortran-fixed-form" | "fortran-free-form" | "fsharp" | "gdresource" | "gdscript" | "gdshader" | "gherkin" | "git-commit" | "git-rebase" | "glimmer-js" | "glimmer-ts" | "glsl" | "gnuplot" | "go" | "graphql" | "groovy" | "hack" | "haml" | "handlebars" | "haskell" | "hcl" | "hjson" | "hlsl" | "html" | "html-derivative" | "http" | "imba" | "ini" | "java" | "javascript" | "jinja" | "jison" | "json5" | "jsonc" | "jsonl" | "jsonnet" | "jssm" | "jsx" | "julia" | "kusto" | "less" | "liquid" | "lisp" | "logo" | "lua" | "make" | "marko" | "matlab" | "mdc" | "mdx" | "mermaid" | "mojo" | "narrat" | "nextflow" | "nginx" | "nim" | "nix" | "nushell" | "objective-c" | "objective-cpp" | "ocaml" | "pascal" | "perl" | "php" | "plsql" | "postcss" | "powerquery" | "powershell" | "prisma" | "prolog" | "proto" | "pug" | "puppet" | "purescript" | "r" | "raku" | "razor" | "reg" | "rel" | "riscv" | "rst" | "ruby" | "rust" | "sas" | "sass" | "scala" | "scheme" | "scss" | "shaderlab" | "shellscript" | "shellsession" | "smalltalk" | "solidity" | "sparql" | "splunk" | "sql" | "ssh-config" | "stata" | "stylus" | "svelte" | "system-verilog" | "tasl" | "tcl" | "terraform" | "tex" | "toml" | "tsx" | "twig" | "typescript" | "typst" | "v" | "vb" | "verilog" | "vhdl" | "viml" | "vue" | "vue-html" | "vyper" | "wasm" | "wenyan" | "wgsl" | "wolfram" | "xml" | "xsl" | "yaml" | "zenscript" | "zig" | "batch" | "be" | "cdc" | "clj" | "ql" | "coffeescript" | "c++" | "c#" | "cs" | "cql" | "dockerfile" | "erl" | "f" | "for" | "f77" | "f90" | "f95" | "f03" | "f08" | "f18" | "f#" | "gjs" | "gts" | "gql" | "hbs" | "hs" | "properties" | "js" | "fsl" | "kt" | "kts" | "kql" | "makefile" | "md" | "nar" | "nf" | "nu" | "objc" | "ps" | "ps1" | "jade" | "py" | "perl6" | "rb" | "rs" | "shader" | "bash" | "sh" | "zsh" | "console" | "spl" | "styl" | "tf" | "tfvars" | "ts" | "typ" | "cmd" | "vim" | "vimscript" | "vy" | "文言" | "wl" | "yml";
                block: "coffee" | "css" | "diff" | "fish" | "kotlin" | "latex" | "markdown" | "move" | "python" | "shell" | "swift" | "turtle" | "fs" | "json" | "abap" | "actionscript-3" | "ada" | "angular-html" | "angular-ts" | "apache" | "apex" | "apl" | "applescript" | "ara" | "asm" | "astro" | "awk" | "ballerina" | "bat" | "beancount" | "berry" | "bibtex" | "bicep" | "blade" | "c" | "cadence" | "clarity" | "clojure" | "cmake" | "cobol" | "codeql" | "cpp" | "crystal" | "csharp" | "csv" | "cue" | "cypher" | "d" | "dart" | "dax" | "docker" | "dream-maker" | "elixir" | "elm" | "erb" | "erlang" | "fortran-fixed-form" | "fortran-free-form" | "fsharp" | "gdresource" | "gdscript" | "gdshader" | "gherkin" | "git-commit" | "git-rebase" | "glimmer-js" | "glimmer-ts" | "glsl" | "gnuplot" | "go" | "graphql" | "groovy" | "hack" | "haml" | "handlebars" | "haskell" | "hcl" | "hjson" | "hlsl" | "html" | "html-derivative" | "http" | "imba" | "ini" | "java" | "javascript" | "jinja" | "jison" | "json5" | "jsonc" | "jsonl" | "jsonnet" | "jssm" | "jsx" | "julia" | "kusto" | "less" | "liquid" | "lisp" | "logo" | "lua" | "make" | "marko" | "matlab" | "mdc" | "mdx" | "mermaid" | "mojo" | "narrat" | "nextflow" | "nginx" | "nim" | "nix" | "nushell" | "objective-c" | "objective-cpp" | "ocaml" | "pascal" | "perl" | "php" | "plsql" | "postcss" | "powerquery" | "powershell" | "prisma" | "prolog" | "proto" | "pug" | "puppet" | "purescript" | "r" | "raku" | "razor" | "reg" | "rel" | "riscv" | "rst" | "ruby" | "rust" | "sas" | "sass" | "scala" | "scheme" | "scss" | "shaderlab" | "shellscript" | "shellsession" | "smalltalk" | "solidity" | "sparql" | "splunk" | "sql" | "ssh-config" | "stata" | "stylus" | "svelte" | "system-verilog" | "tasl" | "tcl" | "terraform" | "tex" | "toml" | "tsx" | "twig" | "typescript" | "typst" | "v" | "vb" | "verilog" | "vhdl" | "viml" | "vue" | "vue-html" | "vyper" | "wasm" | "wenyan" | "wgsl" | "wolfram" | "xml" | "xsl" | "yaml" | "zenscript" | "zig" | "batch" | "be" | "cdc" | "clj" | "ql" | "coffeescript" | "c++" | "c#" | "cs" | "cql" | "dockerfile" | "erl" | "f" | "for" | "f77" | "f90" | "f95" | "f03" | "f08" | "f18" | "f#" | "gjs" | "gts" | "gql" | "hbs" | "hs" | "properties" | "js" | "fsl" | "kt" | "kts" | "kql" | "makefile" | "md" | "nar" | "nf" | "nu" | "objc" | "ps" | "ps1" | "jade" | "py" | "perl6" | "rb" | "rs" | "shader" | "bash" | "sh" | "zsh" | "console" | "spl" | "styl" | "tf" | "tfvars" | "ts" | "typ" | "cmd" | "vim" | "vimscript" | "vy" | "文言" | "wl" | "yml";
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
            defaultLanguage?: "coffee" | "css" | "diff" | "fish" | "kotlin" | "latex" | "markdown" | "move" | "python" | "shell" | "swift" | "turtle" | "fs" | "json" | "abap" | "actionscript-3" | "ada" | "angular-html" | "angular-ts" | "apache" | "apex" | "apl" | "applescript" | "ara" | "asm" | "astro" | "awk" | "ballerina" | "bat" | "beancount" | "berry" | "bibtex" | "bicep" | "blade" | "c" | "cadence" | "clarity" | "clojure" | "cmake" | "cobol" | "codeql" | "cpp" | "crystal" | "csharp" | "csv" | "cue" | "cypher" | "d" | "dart" | "dax" | "docker" | "dream-maker" | "elixir" | "elm" | "erb" | "erlang" | "fortran-fixed-form" | "fortran-free-form" | "fsharp" | "gdresource" | "gdscript" | "gdshader" | "gherkin" | "git-commit" | "git-rebase" | "glimmer-js" | "glimmer-ts" | "glsl" | "gnuplot" | "go" | "graphql" | "groovy" | "hack" | "haml" | "handlebars" | "haskell" | "hcl" | "hjson" | "hlsl" | "html" | "html-derivative" | "http" | "imba" | "ini" | "java" | "javascript" | "jinja" | "jison" | "json5" | "jsonc" | "jsonl" | "jsonnet" | "jssm" | "jsx" | "julia" | "kusto" | "less" | "liquid" | "lisp" | "logo" | "lua" | "make" | "marko" | "matlab" | "mdc" | "mdx" | "mermaid" | "mojo" | "narrat" | "nextflow" | "nginx" | "nim" | "nix" | "nushell" | "objective-c" | "objective-cpp" | "ocaml" | "pascal" | "perl" | "php" | "plsql" | "postcss" | "powerquery" | "powershell" | "prisma" | "prolog" | "proto" | "pug" | "puppet" | "purescript" | "r" | "raku" | "razor" | "reg" | "rel" | "riscv" | "rst" | "ruby" | "rust" | "sas" | "sass" | "scala" | "scheme" | "scss" | "shaderlab" | "shellscript" | "shellsession" | "smalltalk" | "solidity" | "sparql" | "splunk" | "sql" | "ssh-config" | "stata" | "stylus" | "svelte" | "system-verilog" | "tasl" | "tcl" | "terraform" | "tex" | "toml" | "tsx" | "twig" | "typescript" | "typst" | "v" | "vb" | "verilog" | "vhdl" | "viml" | "vue" | "vue-html" | "vyper" | "wasm" | "wenyan" | "wgsl" | "wolfram" | "xml" | "xsl" | "yaml" | "zenscript" | "zig" | "batch" | "be" | "cdc" | "clj" | "ql" | "coffeescript" | "c++" | "c#" | "cs" | "cql" | "dockerfile" | "erl" | "f" | "for" | "f77" | "f90" | "f95" | "f03" | "f08" | "f18" | "f#" | "gjs" | "gts" | "gql" | "hbs" | "hs" | "properties" | "js" | "fsl" | "kt" | "kts" | "kql" | "makefile" | "md" | "nar" | "nf" | "nu" | "objc" | "ps" | "ps1" | "jade" | "py" | "perl6" | "rb" | "rs" | "shader" | "bash" | "sh" | "zsh" | "console" | "spl" | "styl" | "tf" | "tfvars" | "ts" | "typ" | "cmd" | "vim" | "vimscript" | "vy" | "文言" | "wl" | "yml" | {
                inline: "coffee" | "css" | "diff" | "fish" | "kotlin" | "latex" | "markdown" | "move" | "python" | "shell" | "swift" | "turtle" | "fs" | "json" | "abap" | "actionscript-3" | "ada" | "angular-html" | "angular-ts" | "apache" | "apex" | "apl" | "applescript" | "ara" | "asm" | "astro" | "awk" | "ballerina" | "bat" | "beancount" | "berry" | "bibtex" | "bicep" | "blade" | "c" | "cadence" | "clarity" | "clojure" | "cmake" | "cobol" | "codeql" | "cpp" | "crystal" | "csharp" | "csv" | "cue" | "cypher" | "d" | "dart" | "dax" | "docker" | "dream-maker" | "elixir" | "elm" | "erb" | "erlang" | "fortran-fixed-form" | "fortran-free-form" | "fsharp" | "gdresource" | "gdscript" | "gdshader" | "gherkin" | "git-commit" | "git-rebase" | "glimmer-js" | "glimmer-ts" | "glsl" | "gnuplot" | "go" | "graphql" | "groovy" | "hack" | "haml" | "handlebars" | "haskell" | "hcl" | "hjson" | "hlsl" | "html" | "html-derivative" | "http" | "imba" | "ini" | "java" | "javascript" | "jinja" | "jison" | "json5" | "jsonc" | "jsonl" | "jsonnet" | "jssm" | "jsx" | "julia" | "kusto" | "less" | "liquid" | "lisp" | "logo" | "lua" | "make" | "marko" | "matlab" | "mdc" | "mdx" | "mermaid" | "mojo" | "narrat" | "nextflow" | "nginx" | "nim" | "nix" | "nushell" | "objective-c" | "objective-cpp" | "ocaml" | "pascal" | "perl" | "php" | "plsql" | "postcss" | "powerquery" | "powershell" | "prisma" | "prolog" | "proto" | "pug" | "puppet" | "purescript" | "r" | "raku" | "razor" | "reg" | "rel" | "riscv" | "rst" | "ruby" | "rust" | "sas" | "sass" | "scala" | "scheme" | "scss" | "shaderlab" | "shellscript" | "shellsession" | "smalltalk" | "solidity" | "sparql" | "splunk" | "sql" | "ssh-config" | "stata" | "stylus" | "svelte" | "system-verilog" | "tasl" | "tcl" | "terraform" | "tex" | "toml" | "tsx" | "twig" | "typescript" | "typst" | "v" | "vb" | "verilog" | "vhdl" | "viml" | "vue" | "vue-html" | "vyper" | "wasm" | "wenyan" | "wgsl" | "wolfram" | "xml" | "xsl" | "yaml" | "zenscript" | "zig" | "batch" | "be" | "cdc" | "clj" | "ql" | "coffeescript" | "c++" | "c#" | "cs" | "cql" | "dockerfile" | "erl" | "f" | "for" | "f77" | "f90" | "f95" | "f03" | "f08" | "f18" | "f#" | "gjs" | "gts" | "gql" | "hbs" | "hs" | "properties" | "js" | "fsl" | "kt" | "kts" | "kql" | "makefile" | "md" | "nar" | "nf" | "nu" | "objc" | "ps" | "ps1" | "jade" | "py" | "perl6" | "rb" | "rs" | "shader" | "bash" | "sh" | "zsh" | "console" | "spl" | "styl" | "tf" | "tfvars" | "ts" | "typ" | "cmd" | "vim" | "vimscript" | "vy" | "文言" | "wl" | "yml";
                block: "coffee" | "css" | "diff" | "fish" | "kotlin" | "latex" | "markdown" | "move" | "python" | "shell" | "swift" | "turtle" | "fs" | "json" | "abap" | "actionscript-3" | "ada" | "angular-html" | "angular-ts" | "apache" | "apex" | "apl" | "applescript" | "ara" | "asm" | "astro" | "awk" | "ballerina" | "bat" | "beancount" | "berry" | "bibtex" | "bicep" | "blade" | "c" | "cadence" | "clarity" | "clojure" | "cmake" | "cobol" | "codeql" | "cpp" | "crystal" | "csharp" | "csv" | "cue" | "cypher" | "d" | "dart" | "dax" | "docker" | "dream-maker" | "elixir" | "elm" | "erb" | "erlang" | "fortran-fixed-form" | "fortran-free-form" | "fsharp" | "gdresource" | "gdscript" | "gdshader" | "gherkin" | "git-commit" | "git-rebase" | "glimmer-js" | "glimmer-ts" | "glsl" | "gnuplot" | "go" | "graphql" | "groovy" | "hack" | "haml" | "handlebars" | "haskell" | "hcl" | "hjson" | "hlsl" | "html" | "html-derivative" | "http" | "imba" | "ini" | "java" | "javascript" | "jinja" | "jison" | "json5" | "jsonc" | "jsonl" | "jsonnet" | "jssm" | "jsx" | "julia" | "kusto" | "less" | "liquid" | "lisp" | "logo" | "lua" | "make" | "marko" | "matlab" | "mdc" | "mdx" | "mermaid" | "mojo" | "narrat" | "nextflow" | "nginx" | "nim" | "nix" | "nushell" | "objective-c" | "objective-cpp" | "ocaml" | "pascal" | "perl" | "php" | "plsql" | "postcss" | "powerquery" | "powershell" | "prisma" | "prolog" | "proto" | "pug" | "puppet" | "purescript" | "r" | "raku" | "razor" | "reg" | "rel" | "riscv" | "rst" | "ruby" | "rust" | "sas" | "sass" | "scala" | "scheme" | "scss" | "shaderlab" | "shellscript" | "shellsession" | "smalltalk" | "solidity" | "sparql" | "splunk" | "sql" | "ssh-config" | "stata" | "stylus" | "svelte" | "system-verilog" | "tasl" | "tcl" | "terraform" | "tex" | "toml" | "tsx" | "twig" | "typescript" | "typst" | "v" | "vb" | "verilog" | "vhdl" | "viml" | "vue" | "vue-html" | "vyper" | "wasm" | "wenyan" | "wgsl" | "wolfram" | "xml" | "xsl" | "yaml" | "zenscript" | "zig" | "batch" | "be" | "cdc" | "clj" | "ql" | "coffeescript" | "c++" | "c#" | "cs" | "cql" | "dockerfile" | "erl" | "f" | "for" | "f77" | "f90" | "f95" | "f03" | "f08" | "f18" | "f#" | "gjs" | "gts" | "gql" | "hbs" | "hs" | "properties" | "js" | "fsl" | "kt" | "kts" | "kql" | "makefile" | "md" | "nar" | "nf" | "nu" | "objc" | "ps" | "ps1" | "jade" | "py" | "perl6" | "rb" | "rs" | "shader" | "bash" | "sh" | "zsh" | "console" | "spl" | "styl" | "tf" | "tfvars" | "ts" | "typ" | "cmd" | "vim" | "vimscript" | "vy" | "文言" | "wl" | "yml";
            } | undefined;
        } | undefined;
    }>>>;
    math: import("zod").ZodOptional<import("zod").ZodDefault<import("zod").ZodObject<{
        latexPackages: import("zod").ZodDefault<import("zod").ZodUnion<[import("zod").ZodArray<import("zod").ZodString, "many">, import("zod").ZodLiteral<"all">]>>;
        latexFontUrl: import("zod").ZodEffects<import("zod").ZodString, string, string> | import("zod").ZodEffects<import("zod").ZodOptional<import("zod").ZodString>, string | undefined, string | undefined>;
        constants: import("zod").ZodDefault<import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodNumber>>;
    }, "strip", import("zod").ZodTypeAny, {
        latexPackages: string[] | "all";
        constants: Record<string, number>;
        latexFontUrl?: string | undefined;
    }, {
        latexPackages?: string[] | "all" | undefined;
        latexFontUrl?: string | undefined;
        constants?: Record<string, number> | undefined;
    }>>>;
    database: import("zod").ZodOptional<import("zod").ZodDefault<import("zod").ZodObject<{
        storeFormatted: import("zod").ZodDefault<import("zod").ZodBoolean>;
        removeIfNotPresentInFs: import("zod").ZodDefault<import("zod").ZodBoolean>;
    }, "strip", import("zod").ZodTypeAny, {
        storeFormatted: boolean;
        removeIfNotPresentInFs: boolean;
    }, {
        storeFormatted?: boolean | undefined;
        removeIfNotPresentInFs?: boolean | undefined;
    }>>>;
    jupyter: import("zod").ZodOptional<import("zod").ZodDefault<import("zod").ZodObject<{
        execute: import("zod").ZodDefault<import("zod").ZodBoolean>;
        environment: import("zod").ZodDefault<import("zod").ZodString>;
        syntaxHighlightTheme: import("zod").ZodDefault<import("zod").ZodString>;
        jupyterToken: import("zod").ZodOptional<import("zod").ZodString>;
        jupyterPort: import("zod").ZodDefault<import("zod").ZodNumber>;
        initiallyFoldCells: import("zod").ZodDefault<import("zod").ZodBoolean>;
        kernel: import("zod").ZodDefault<import("zod").ZodString>;
        jupyterReactProps: import("zod").ZodDefault<import("zod").ZodObject<{
            collaborative: import("zod").ZodDefault<import("zod").ZodBoolean>;
            lite: import("zod").ZodDefault<import("zod").ZodBoolean>;
            serverUrls: import("zod").ZodOptional<import("zod").ZodObject<{
                baseUrl: import("zod").ZodOptional<import("zod").ZodString>;
                wsUrl: import("zod").ZodOptional<import("zod").ZodString>;
            }, "strip", import("zod").ZodTypeAny, {
                baseUrl?: string | undefined;
                wsUrl?: string | undefined;
            }, {
                baseUrl?: string | undefined;
                wsUrl?: string | undefined;
            }>>;
        }, "strip", import("zod").ZodTypeAny, {
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
        nbConvert: import("zod").ZodDefault<import("zod").ZodObject<{
            nbconvertPath: import("zod").ZodOptional<import("zod").ZodString>;
            conversionTimeout: import("zod").ZodDefault<import("zod").ZodNumber>;
            customConversionFunction: import("zod").ZodOptional<import("zod").ZodObject<{
                pdf: import("zod").ZodOptional<import("zod").ZodFunction<import("zod").ZodTuple<[import("zod").ZodString, import("zod").ZodString], import("zod").ZodUnknown>, import("zod").ZodString>>;
            }, "strip", import("zod").ZodTypeAny, {
                pdf?: ((args_0: string, args_1: string, ...args: unknown[]) => string) | undefined;
            }, {
                pdf?: ((args_0: string, args_1: string, ...args: unknown[]) => string) | undefined;
            }>>;
            execute: import("zod").ZodDefault<import("zod").ZodBoolean>;
            nbConvertTemplate: import("zod").ZodDefault<import("zod").ZodUnion<[import("zod").ZodLiteral<"lab">, import("zod").ZodLiteral<"classic">, import("zod").ZodLiteral<"reveal">, import("zod").ZodString]>>;
            notebookOutputDir: import("zod").ZodDefault<import("zod").ZodString>;
        }, "strip", import("zod").ZodTypeAny, {
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
        jupyterNotebookProps: import("zod").ZodDefault<import("zod").ZodObject<{
            cellMetadataPanel: import("zod").ZodDefault<import("zod").ZodBoolean>;
            cellSidebarMargin: import("zod").ZodDefault<import("zod").ZodNumber>;
            height: import("zod").ZodOptional<import("zod").ZodString>;
            maxHeight: import("zod").ZodOptional<import("zod").ZodString>;
            bundledIPyWidgets: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodObject<{
                module: import("zod").ZodUnion<[import("zod").ZodString, import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodString>]>;
                name: import("zod").ZodString;
                version: import("zod").ZodString;
            }, "strip", import("zod").ZodTypeAny, {
                module: string | Record<string, string>;
                name: string;
                version: string;
            }, {
                module: string | Record<string, string>;
                name: string;
                version: string;
            }>, "many">>;
            externalIPyWidgets: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodObject<Omit<{
                module: import("zod").ZodUnion<[import("zod").ZodString, import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodString>]>;
                name: import("zod").ZodString;
                version: import("zod").ZodString;
            }, "module">, "strip", import("zod").ZodTypeAny, {
                name: string;
                version: string;
            }, {
                name: string;
                version: string;
            }>, "many">>;
            nbgrader: import("zod").ZodDefault<import("zod").ZodBoolean>;
            readOnly: import("zod").ZodDefault<import("zod").ZodBoolean>;
        }, "strip", import("zod").ZodTypeAny, {
            cellMetadataPanel: boolean;
            cellSidebarMargin: number;
            bundledIPyWidgets: {
                module: string | Record<string, string>;
                name: string;
                version: string;
            }[];
            externalIPyWidgets: {
                name: string;
                version: string;
            }[];
            nbgrader: boolean;
            readOnly: boolean;
            maxHeight?: string | undefined;
            height?: string | undefined;
        }, {
            maxHeight?: string | undefined;
            cellMetadataPanel?: boolean | undefined;
            cellSidebarMargin?: number | undefined;
            height?: string | undefined;
            bundledIPyWidgets?: {
                module: string | Record<string, string>;
                name: string;
                version: string;
            }[] | undefined;
            externalIPyWidgets?: {
                name: string;
                version: string;
            }[] | undefined;
            nbgrader?: boolean | undefined;
            readOnly?: boolean | undefined;
        }>>;
        cellInputWrappers: import("zod").ZodDefault<import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodEffects<import("zod").ZodUnion<[import("zod").ZodString, import("zod").ZodObject<{
            prefix: import("zod").ZodString;
            suffix: import("zod").ZodString;
        }, "strip", import("zod").ZodTypeAny, {
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
    }, "strip", import("zod").ZodTypeAny, {
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
            cellMetadataPanel: boolean;
            cellSidebarMargin: number;
            bundledIPyWidgets: {
                module: string | Record<string, string>;
                name: string;
                version: string;
            }[];
            externalIPyWidgets: {
                name: string;
                version: string;
            }[];
            nbgrader: boolean;
            readOnly: boolean;
            maxHeight?: string | undefined;
            height?: string | undefined;
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
            maxHeight?: string | undefined;
            cellMetadataPanel?: boolean | undefined;
            cellSidebarMargin?: number | undefined;
            height?: string | undefined;
            bundledIPyWidgets?: {
                module: string | Record<string, string>;
                name: string;
                version: string;
            }[] | undefined;
            externalIPyWidgets?: {
                name: string;
                version: string;
            }[] | undefined;
            nbgrader?: boolean | undefined;
            readOnly?: boolean | undefined;
        } | undefined;
        cellInputWrappers?: Record<string, string | {
            prefix: string;
            suffix: string;
        }> | undefined;
    }>>>;
    navigation: import("zod").ZodOptional<import("zod").ZodDefault<import("zod").ZodObject<{
        navbarBreakpoint: import("zod").ZodDefault<import("zod").ZodObject<{
            full: import("zod").ZodDefault<import("zod").ZodNumber>;
            minimal: import("zod").ZodDefault<import("zod").ZodNumber>;
        }, "strip", import("zod").ZodTypeAny, {
            full: number;
            minimal: number;
        }, {
            full?: number | undefined;
            minimal?: number | undefined;
        }>>;
        maxResultLength: import("zod").ZodDefault<import("zod").ZodObject<{
            categories: import("zod").ZodDefault<import("zod").ZodNumber>;
            equations: import("zod").ZodDefault<import("zod").ZodNumber>;
            snippets: import("zod").ZodDefault<import("zod").ZodNumber>;
            searchAll: import("zod").ZodDefault<import("zod").ZodNumber>;
        }, "strip", import("zod").ZodTypeAny, {
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
        bookmarkLink: import("zod").ZodDefault<import("zod").ZodOptional<import("zod").ZodUnion<[import("zod").ZodLiteral<"sidebar">, import("zod").ZodLiteral<"navbar">, import("zod").ZodLiteral<"both">, import("zod").ZodLiteral<"none">]>>>;
        syncLink: import("zod").ZodDefault<import("zod").ZodOptional<import("zod").ZodUnion<[import("zod").ZodLiteral<"sidebar">, import("zod").ZodLiteral<"navbar">, import("zod").ZodLiteral<"both">, import("zod").ZodLiteral<"none">]>>>;
        fileSystemToggle: import("zod").ZodOptional<import("zod").ZodUnion<[import("zod").ZodLiteral<"sidebar">, import("zod").ZodLiteral<"navbar">, import("zod").ZodLiteral<"both">, import("zod").ZodLiteral<"none">]>>;
        darkmodeToggle: import("zod").ZodDefault<import("zod").ZodOptional<import("zod").ZodUnion<[import("zod").ZodLiteral<"sidebar">, import("zod").ZodLiteral<"navbar">, import("zod").ZodLiteral<"both">, import("zod").ZodLiteral<"none">]>>>;
        settings: import("zod").ZodOptional<import("zod").ZodUnion<[import("zod").ZodLiteral<"sidebar">, import("zod").ZodLiteral<"navbar">, import("zod").ZodLiteral<"both">, import("zod").ZodLiteral<"none">]>>;
        equationsLink: import("zod").ZodOptional<import("zod").ZodUnion<[import("zod").ZodLiteral<"sidebar">, import("zod").ZodLiteral<"navbar">, import("zod").ZodLiteral<"both">, import("zod").ZodLiteral<"none">]>>;
        snippetsLink: import("zod").ZodDefault<import("zod").ZodOptional<import("zod").ZodUnion<[import("zod").ZodLiteral<"sidebar">, import("zod").ZodLiteral<"navbar">, import("zod").ZodLiteral<"both">, import("zod").ZodLiteral<"none">]>>>;
        backupData: import("zod").ZodOptional<import("zod").ZodUnion<[import("zod").ZodLiteral<"sidebar">, import("zod").ZodLiteral<"navbar">, import("zod").ZodLiteral<"both">, import("zod").ZodLiteral<"none">]>>;
        navbarLinks: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodUnion<[import("zod").ZodString, import("zod").ZodObject<{
            label: import("zod").ZodString;
            icon: import("zod").ZodOptional<import("zod").ZodNativeEnum<typeof import("@ulld/utilities/validIconNameEnum").ValidIconNameEnumDynamicallyGenerated>>;
            href: import("zod").ZodOptional<import("zod").ZodString>;
            onClick: import("zod").ZodOptional<import("zod").ZodFunction<import("zod").ZodTuple<[], import("zod").ZodUnknown>, import("zod").ZodUnknown>>;
        }, "strip", import("zod").ZodTypeAny, {
            label: string;
            href?: string | undefined;
            icon?: import("@ulld/utilities/validIconNameEnum").ValidIconNameEnumDynamicallyGenerated | undefined;
            onClick?: ((...args: unknown[]) => unknown) | undefined;
        }, {
            label: string;
            href?: string | undefined;
            icon?: import("@ulld/utilities/validIconNameEnum").ValidIconNameEnumDynamicallyGenerated | undefined;
            onClick?: ((...args: unknown[]) => unknown) | undefined;
        }>]>, "many">>;
        sidebarLinks: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodUnion<[import("zod").ZodObject<{
            icon: import("zod").ZodNativeEnum<typeof import("@ulld/utilities/validIconNameEnum").ValidIconNameEnumDynamicallyGenerated>;
            href: import("zod").ZodOptional<import("zod").ZodString>;
            label: import("zod").ZodOptional<import("zod").ZodString>;
            Icon: import("zod").ZodOptional<import("zod").ZodFunction<import("zod").ZodTuple<[], import("zod").ZodUnknown>, import("zod").ZodUnknown>>;
            onClick: import("zod").ZodOptional<import("zod").ZodFunction<import("zod").ZodTuple<[], import("zod").ZodUnknown>, import("zod").ZodUnknown>>;
        }, "strip", import("zod").ZodTypeAny, {
            icon: import("@ulld/utilities/validIconNameEnum").ValidIconNameEnumDynamicallyGenerated;
            label?: string | undefined;
            href?: string | undefined;
            onClick?: ((...args: unknown[]) => unknown) | undefined;
            Icon?: ((...args: unknown[]) => unknown) | undefined;
        }, {
            icon: import("@ulld/utilities/validIconNameEnum").ValidIconNameEnumDynamicallyGenerated;
            label?: string | undefined;
            href?: string | undefined;
            onClick?: ((...args: unknown[]) => unknown) | undefined;
            Icon?: ((...args: unknown[]) => unknown) | undefined;
        }>, import("zod").ZodString]>, "many">>;
    }, "strip", import("zod").ZodTypeAny, {
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
            icon?: import("@ulld/utilities/validIconNameEnum").ValidIconNameEnumDynamicallyGenerated | undefined;
            onClick?: ((...args: unknown[]) => unknown) | undefined;
        })[];
        sidebarLinks: (string | {
            icon: import("@ulld/utilities/validIconNameEnum").ValidIconNameEnumDynamicallyGenerated;
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
            icon?: import("@ulld/utilities/validIconNameEnum").ValidIconNameEnumDynamicallyGenerated | undefined;
            onClick?: ((...args: unknown[]) => unknown) | undefined;
        })[] | undefined;
        sidebarLinks?: (string | {
            icon: import("@ulld/utilities/validIconNameEnum").ValidIconNameEnumDynamicallyGenerated;
            label?: string | undefined;
            href?: string | undefined;
            onClick?: ((...args: unknown[]) => unknown) | undefined;
            Icon?: ((...args: unknown[]) => unknown) | undefined;
        })[] | undefined;
    }>>>;
    terminal: import("zod").ZodOptional<import("zod").ZodDefault<import("zod").ZodObject<{
        logLevel: import("zod").ZodDefault<import("zod").ZodUnion<[import("zod").ZodLiteral<"debug">, import("zod").ZodLiteral<"verbose">, import("zod").ZodLiteral<"info">, import("zod").ZodLiteral<"none">]>>;
    }, "strip", import("zod").ZodTypeAny, {
        logLevel: "info" | "none" | "debug" | "verbose";
    }, {
        logLevel?: "info" | "none" | "debug" | "verbose" | undefined;
    }>>>;
    UI: import("zod").ZodOptional<import("zod").ZodDefault<import("zod").ZodObject<{
        table: import("zod").ZodDefault<import("zod").ZodObject<{
            maxHeight: import("zod").ZodEffects<import("zod").ZodDefault<import("zod").ZodUnion<[import("zod").ZodString, import("zod").ZodNumber]>>, string, string | number | undefined>;
        }, "strip", import("zod").ZodTypeAny, {
            maxHeight: string;
        }, {
            maxHeight?: string | number | undefined;
        }>>;
        text: import("zod").ZodDefault<import("zod").ZodObject<{
            blockQuoteItalic: import("zod").ZodDefault<import("zod").ZodBoolean>;
            fontPaths: import("zod").ZodDefault<import("zod").ZodUnion<[import("zod").ZodArray<import("zod").ZodObject<{
                path: import("zod").ZodString;
                weight: import("zod").ZodUnion<[import("zod").ZodLiteral<"100">, import("zod").ZodLiteral<"200">, import("zod").ZodLiteral<"300">, import("zod").ZodLiteral<"400">, import("zod").ZodLiteral<"500">, import("zod").ZodLiteral<"600">, import("zod").ZodLiteral<"700">, import("zod").ZodLiteral<"800">, import("zod").ZodLiteral<"900">]>;
                style: import("zod").ZodUnion<[import("zod").ZodLiteral<"italic">, import("zod").ZodLiteral<"bold">, import("zod").ZodLiteral<"normal">]>;
            }, "strip", import("zod").ZodTypeAny, {
                path: string;
                weight: "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900";
                style: "bold" | "italic" | "normal";
            }, {
                path: string;
                weight: "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900";
                style: "bold" | "italic" | "normal";
            }>, "many">, import("zod").ZodLiteral<"default">]>>;
        }, "strip", import("zod").ZodTypeAny, {
            blockQuoteItalic: boolean;
            fontPaths: {
                path: string;
                weight: "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900";
                style: "bold" | "italic" | "normal";
            }[] | "default";
        }, {
            blockQuoteItalic?: boolean | undefined;
            fontPaths?: {
                path: string;
                weight: "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900";
                style: "bold" | "italic" | "normal";
            }[] | "default" | undefined;
        }>>;
        media: import("zod").ZodDefault<import("zod").ZodObject<{
            imageMap: import("zod").ZodDefault<import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodEffects<import("zod").ZodString, string, string> | import("zod").ZodEffects<import("zod").ZodOptional<import("zod").ZodString>, string | undefined, string | undefined>>>;
            includeDefaultImageMap: import("zod").ZodDefault<import("zod").ZodBoolean>;
            imageRemoteTest: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodType<RegExp, import("zod").ZodTypeDef, RegExp>, "many">>;
        }, "strip", import("zod").ZodTypeAny, {
            imageMap: Record<string, string | undefined>;
            includeDefaultImageMap: boolean;
            imageRemoteTest: RegExp[];
        }, {
            imageMap?: Record<string, string | undefined> | undefined;
            includeDefaultImageMap?: boolean | undefined;
            imageRemoteTest?: RegExp[] | undefined;
        }>>;
        colors: import("zod").ZodDefault<import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodEffects<import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodUnion<[import("zod").ZodObject<{
            dark: import("zod").ZodEffects<import("zod").ZodOptional<import("zod").ZodString>, string | undefined, string | undefined>;
            light: import("zod").ZodEffects<import("zod").ZodOptional<import("zod").ZodString>, string | undefined, string | undefined>;
        }, "strip", import("zod").ZodTypeAny, {
            dark?: string | undefined;
            light?: string | undefined;
        }, {
            dark?: string | undefined;
            light?: string | undefined;
        }>, import("zod").ZodEffects<import("zod").ZodString, string | undefined, string>]>>>, {
            dark?: string | undefined;
            light?: string | undefined;
        } | undefined, string | {
            dark?: string | undefined;
            light?: string | undefined;
        } | null | undefined>>>;
        theme: import("zod").ZodDefault<import("zod").ZodUnion<[import("zod").ZodLiteral<"blue">, import("zod").ZodLiteral<"gray">, import("zod").ZodLiteral<"green">, import("zod").ZodLiteral<"neutral">, import("zod").ZodLiteral<"orange">, import("zod").ZodLiteral<"red">, import("zod").ZodLiteral<"rose">, import("zod").ZodLiteral<"slate">, import("zod").ZodLiteral<"stone">, import("zod").ZodLiteral<"violet">, import("zod").ZodLiteral<"yellow">, import("zod").ZodLiteral<"zinc">, import("zod").ZodLiteral<"ulld">]>>;
        autoApplyMdxTitles: import("zod").ZodDefault<import("zod").ZodBoolean>;
    }, "strip", import("zod").ZodTypeAny, {
        table: {
            maxHeight: string;
        };
        text: {
            blockQuoteItalic: boolean;
            fontPaths: {
                path: string;
                weight: "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900";
                style: "bold" | "italic" | "normal";
            }[] | "default";
        };
        theme: "ulld" | "red" | "orange" | "yellow" | "green" | "blue" | "rose" | "slate" | "gray" | "stone" | "zinc" | "neutral" | "violet";
        media: {
            imageMap: Record<string, string | undefined>;
            includeDefaultImageMap: boolean;
            imageRemoteTest: RegExp[];
        };
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
            fontPaths?: {
                path: string;
                weight: "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900";
                style: "bold" | "italic" | "normal";
            }[] | "default" | undefined;
        } | undefined;
        theme?: "ulld" | "red" | "orange" | "yellow" | "green" | "blue" | "rose" | "slate" | "gray" | "stone" | "zinc" | "neutral" | "violet" | undefined;
        media?: {
            imageMap?: Record<string, string | undefined> | undefined;
            includeDefaultImageMap?: boolean | undefined;
            imageRemoteTest?: RegExp[] | undefined;
        } | undefined;
        colors?: Record<string, string | {
            dark?: string | undefined;
            light?: string | undefined;
        } | null | undefined> | undefined;
        autoApplyMdxTitles?: boolean | undefined;
    }>>>;
    slots: import("zod").ZodOptional<import("zod").ZodDefault<import("zod").ZodObject<Record<keyof import("../../developer/slotMapRootType.js").SlotMap, import("zod").ZodTypeAny>, "strip", import("zod").ZodTypeAny, {
        math?: any;
        snippets?: any;
        bibliography?: any;
        navigation?: any;
        dashboard?: any;
        taskManager?: any;
        UI?: any;
        pdf?: any;
        editor?: any;
        commandPalette?: any;
        form?: any;
    }, {
        math?: any;
        snippets?: any;
        bibliography?: any;
        navigation?: any;
        dashboard?: any;
        taskManager?: any;
        UI?: any;
        pdf?: any;
        editor?: any;
        commandPalette?: any;
        form?: any;
    }>>>;
    fsRoot: import("zod").ZodEffects<import("zod").ZodString, string, string>;
    autoTag: import("zod").ZodOptional<import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodObject<{
        path: import("zod").ZodString;
        tag: import("zod").ZodString;
    }, "strip", import("zod").ZodTypeAny, {
        path: string;
        tag: string;
    }, {
        path: string;
        tag: string;
    }>, "many">>>;
    autoTopic: import("zod").ZodOptional<import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodObject<{
        path: import("zod").ZodString;
        topic: import("zod").ZodString;
    }, "strip", import("zod").ZodTypeAny, {
        path: string;
        topic: string;
    }, {
        path: string;
        topic: string;
    }>, "many">>>;
    autoSubject: import("zod").ZodOptional<import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodObject<{
        path: import("zod").ZodString;
        subject: import("zod").ZodString;
    }, "strip", import("zod").ZodTypeAny, {
        path: string;
        subject: string;
    }, {
        path: string;
        subject: string;
    }>, "many">>>;
    alwaysPreferFs: import("zod").ZodOptional<import("zod").ZodDefault<import("zod").ZodBoolean>>;
    ignoreFilepaths: import("zod").ZodOptional<import("zod").ZodEffects<import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodUnion<[import("zod").ZodType<RegExp, import("zod").ZodTypeDef, RegExp>, import("zod").ZodString, import("zod").ZodObject<{
        original: import("zod").ZodString;
        regex: import("zod").ZodEffects<import("zod").ZodUnion<[import("zod").ZodString, import("zod").ZodType<RegExp, import("zod").ZodTypeDef, RegExp>]>, RegExp, string | RegExp>;
    }, "strip", import("zod").ZodTypeAny, {
        regex: RegExp;
        original: string;
    }, {
        regex: string | RegExp;
        original: string;
    }>]>, "many">>, {
        regex: string | RegExp;
        original: string;
    }[], (string | RegExp | {
        regex: string | RegExp;
        original: string;
    })[] | undefined>>;
    tempDir: import("zod").ZodOptional<import("zod").ZodEffects<import("zod").ZodDefault<import("zod").ZodString>, string, string | undefined>>;
    generatedDir: import("zod").ZodOptional<import("zod").ZodEffects<import("zod").ZodDefault<import("zod").ZodString>, string, string | undefined>>;
    ignorePreferFsExtensions: import("zod").ZodOptional<import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodEffects<import("zod").ZodUnion<[import("zod").ZodString, import("zod").ZodType<RegExp, import("zod").ZodTypeDef, RegExp>, import("zod").ZodObject<{
        original: import("zod").ZodString;
        regex: import("zod").ZodType<RegExp, import("zod").ZodTypeDef, RegExp>;
    }, "strip", import("zod").ZodTypeAny, {
        regex: RegExp;
        original: string;
    }, {
        regex: RegExp;
        original: string;
    }>]>, import("../configUtilitySchemas.js").ParsedRegExpField, string | RegExp | {
        regex: RegExp;
        original: string;
    }>, "many">>>;
    fileTypePriority: import("zod").ZodOptional<import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodLiteral<".mdx">, import("zod").ZodLiteral<".md">, import("zod").ZodLiteral<".ipynb">]>, import("zod").ZodUnion<[import("zod").ZodLiteral<".csv">, import("zod").ZodLiteral<".tsv">, import("zod").ZodLiteral<".excel">, import("zod").ZodLiteral<".numpy">, import("zod").ZodLiteral<".html">, import("zod").ZodLiteral<".pickle">, import("zod").ZodLiteral<".db">, import("zod").ZodLiteral<".sql">, import("zod").ZodLiteral<".pdf">, import("zod").ZodLiteral<".json">, import("zod").ZodLiteral<".tex">, import("zod").ZodLiteral<".hdf5">]>]>, "many">>>;
    noteTypes: import("zod").ZodOptional<import("zod").ZodEffects<import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodEffects<import("zod").ZodObject<{
        label: import("zod").ZodString;
        icon: import("zod").ZodDefault<import("zod").ZodNativeEnum<typeof import("@ulld/utilities/validIconNameEnum").ValidIconNameEnumDynamicallyGenerated>>;
        UI: import("zod").ZodDefault<import("zod").ZodDefault<import("zod").ZodObject<{
            styles: import("zod").ZodDefault<import("zod").ZodObject<{
                dark: import("zod").ZodDefault<import("zod").ZodObject<{
                    bg: import("zod").ZodOptional<import("zod").ZodString>;
                    fg: import("zod").ZodOptional<import("zod").ZodString>;
                }, "strip", import("zod").ZodTypeAny, {
                    bg?: string | undefined;
                    fg?: string | undefined;
                }, {
                    bg?: string | undefined;
                    fg?: string | undefined;
                }>>;
                light: import("zod").ZodDefault<import("zod").ZodObject<{
                    bg: import("zod").ZodOptional<import("zod").ZodString>;
                    fg: import("zod").ZodOptional<import("zod").ZodString>;
                }, "strip", import("zod").ZodTypeAny, {
                    bg?: string | undefined;
                    fg?: string | undefined;
                }, {
                    bg?: string | undefined;
                    fg?: string | undefined;
                }>>;
            }, "strip", import("zod").ZodTypeAny, {
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
        }, "strip", import("zod").ZodTypeAny, {
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
        fs: import("zod").ZodEffects<import("zod").ZodString, string, string>;
        id: import("zod").ZodOptional<import("zod").ZodString>;
        docType: import("zod").ZodOptional<import("zod").ZodEffects<import("zod").ZodString, string, string>>;
        filePathPattern: import("zod").ZodOptional<import("zod").ZodString>;
        matchWeight: import("zod").ZodDefault<import("zod").ZodNumber>;
        url: import("zod").ZodOptional<import("zod").ZodEffects<import("zod").ZodString, string, string>>;
        urlQuery: import("zod").ZodDefault<import("zod").ZodOptional<import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodUnion<[import("zod").ZodString, import("zod").ZodArray<import("zod").ZodString, "many">, import("zod").ZodNumber, import("zod").ZodArray<import("zod").ZodNumber, "many">]>>>>;
        keywords: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodString, "many">>;
        topicLabel: import("zod").ZodOptional<import("zod").ZodString>;
        subjectLabel: import("zod").ZodOptional<import("zod").ZodString>;
        autoTag: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodString, "many">>;
        autoTopic: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodString, "many">>;
        autoSubject: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodString, "many">>;
        inSidebar: import("zod").ZodDefault<import("zod").ZodBoolean>;
        inNavbar: import("zod").ZodDefault<import("zod").ZodBoolean>;
    }, "strip", import("zod").ZodTypeAny, {
        label: string;
        icon: import("@ulld/utilities/validIconNameEnum").ValidIconNameEnumDynamicallyGenerated;
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
        icon?: import("@ulld/utilities/validIconNameEnum").ValidIconNameEnumDynamicallyGenerated | undefined;
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
        icon: import("@ulld/utilities/validIconNameEnum").ValidIconNameEnumDynamicallyGenerated;
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
        icon?: import("@ulld/utilities/validIconNameEnum").ValidIconNameEnumDynamicallyGenerated | undefined;
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
        icon: import("@ulld/utilities/validIconNameEnum").ValidIconNameEnumDynamicallyGenerated;
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
        icon?: import("@ulld/utilities/validIconNameEnum").ValidIconNameEnumDynamicallyGenerated | undefined;
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
    }[] | undefined>>;
    bibPath: import("zod").ZodOptional<import("zod").ZodEffects<import("zod").ZodDefault<import("zod").ZodString>, string, string | undefined>>;
    cslPath: import("zod").ZodOptional<import("zod").ZodEffects<import("zod").ZodOptional<import("zod").ZodString>, string | undefined, string | undefined>>;
    dateHandling: import("zod").ZodOptional<import("zod").ZodDefault<import("zod").ZodObject<{
        enableAdvancedFormat: import("zod").ZodDefault<import("zod").ZodBoolean>;
        format: import("zod").ZodDefault<import("zod").ZodUnion<[import("zod").ZodString, import("zod").ZodObject<{
            short: import("zod").ZodDefault<import("zod").ZodString>;
            long: import("zod").ZodDefault<import("zod").ZodString>;
            withTime: import("zod").ZodDefault<import("zod").ZodString>;
            timeOnly: import("zod").ZodDefault<import("zod").ZodString>;
        }, "strip", import("zod").ZodTypeAny, {
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
        defaultTimeDisplayType: import("zod").ZodDefault<import("zod").ZodUnion<[import("zod").ZodLiteral<"analog">, import("zod").ZodLiteral<"summarized">, import("zod").ZodLiteral<"descriptive">]>>;
        defaultTimeZone: import("zod").ZodOptional<import("zod").ZodString>;
    }, "strip", import("zod").ZodTypeAny, {
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
    linkAliases: import("zod").ZodOptional<import("zod").ZodDefault<import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodString>>>;
    features: import("zod").ZodOptional<import("zod").ZodOptional<import("zod").ZodObject<{
        enabled: import("zod").ZodOptional<import("zod").ZodDefault<import("zod").ZodObject<{
            commandPalette: import("zod").ZodDefault<import("zod").ZodBoolean>;
            tikz: import("zod").ZodDefault<import("zod").ZodBoolean>;
        }, "strip", import("zod").ZodTypeAny, {
            commandPalette: boolean;
            tikz: boolean;
        }, {
            commandPalette?: boolean | undefined;
            tikz?: boolean | undefined;
        }>>>;
        pages: import("zod").ZodOptional<import("zod").ZodObject<{
            equations: import("zod").ZodOptional<import("zod").ZodDefault<import("zod").ZodBoolean>>;
            snippets: import("zod").ZodOptional<import("zod").ZodDefault<import("zod").ZodBoolean>>;
            calendar: import("zod").ZodOptional<import("zod").ZodDefault<import("zod").ZodBoolean>>;
            bibliography: import("zod").ZodOptional<import("zod").ZodDefault<import("zod").ZodBoolean>>;
            taskManager: import("zod").ZodOptional<import("zod").ZodDefault<import("zod").ZodBoolean>>;
        }, "strip", import("zod").ZodTypeAny, {
            snippets?: boolean | undefined;
            calendar?: boolean | undefined;
            bibliography?: boolean | undefined;
            taskManager?: boolean | undefined;
            equations?: boolean | undefined;
        }, {
            snippets?: boolean | undefined;
            calendar?: boolean | undefined;
            bibliography?: boolean | undefined;
            taskManager?: boolean | undefined;
            equations?: boolean | undefined;
        }>>;
    }, "strip", import("zod").ZodTypeAny, {
        pages?: {
            snippets?: boolean | undefined;
            calendar?: boolean | undefined;
            bibliography?: boolean | undefined;
            taskManager?: boolean | undefined;
            equations?: boolean | undefined;
        } | undefined;
        enabled?: {
            commandPalette: boolean;
            tikz: boolean;
        } | undefined;
    }, {
        pages?: {
            snippets?: boolean | undefined;
            calendar?: boolean | undefined;
            bibliography?: boolean | undefined;
            taskManager?: boolean | undefined;
            equations?: boolean | undefined;
        } | undefined;
        enabled?: {
            commandPalette?: boolean | undefined;
            tikz?: boolean | undefined;
        } | undefined;
    }>>>;
    plotting: import("zod").ZodOptional<import("zod").ZodDefault<import("zod").ZodObject<{
        plotColorList: import("zod").ZodDefault<import("zod").ZodUnion<[import("zod").ZodArray<import("zod").ZodString, "many">, import("zod").ZodObject<{
            dark: import("zod").ZodArray<import("zod").ZodString, "many">;
            light: import("zod").ZodArray<import("zod").ZodString, "many">;
        }, "strip", import("zod").ZodTypeAny, {
            dark: string[];
            light: string[];
        }, {
            dark: string[];
            light: string[];
        }>]>>;
        plotColorCycleMethod: import("zod").ZodDefault<import("zod").ZodUnion<[import("zod").ZodLiteral<"inOrder">, import("zod").ZodLiteral<"random">]>>;
    }, "strip", import("zod").ZodTypeAny, {
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
    credentials: import("zod").ZodOptional<import("zod").ZodDefault<import("zod").ZodObject<{
        googleServiceAccountJsonPath: import("zod").ZodOptional<import("zod").ZodString>;
    }, "strip", import("zod").ZodTypeAny, {
        googleServiceAccountJsonPath?: string | undefined;
    }, {
        googleServiceAccountJsonPath?: string | undefined;
    }>>>;
    performance: import("zod").ZodOptional<import("zod").ZodDefault<import("zod").ZodObject<{
        latexParsingDebounceTimeout: import("zod").ZodDefault<import("zod").ZodNumber>;
        mdxParsingDebounceTimeout: import("zod").ZodDefault<import("zod").ZodNumber>;
    }, "strip", import("zod").ZodTypeAny, {
        latexParsingDebounceTimeout: number;
        mdxParsingDebounceTimeout: number;
    }, {
        latexParsingDebounceTimeout?: number | undefined;
        mdxParsingDebounceTimeout?: number | undefined;
    }>>>;
    build: import("zod").ZodOptional<import("zod").ZodDefault<import("zod").ZodObject<{
        database: import("zod").ZodDefault<import("zod").ZodEffects<import("zod").ZodDefault<import("zod").ZodObject<{
            type: import("zod").ZodDefault<import("zod").ZodEnum<["postgres", "sqlite"]>>;
            postgres: import("zod").ZodEffects<import("zod").ZodEffects<import("zod").ZodDefault<import("zod").ZodObject<{
                port: import("zod").ZodDefault<import("zod").ZodNumber>;
                dbName: import("zod").ZodDefault<import("zod").ZodString>;
                connectionURI: import("zod").ZodDefault<import("zod").ZodString>;
            }, "strip", import("zod").ZodTypeAny, {
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
            prioritize: import("zod").ZodDefault<import("zod").ZodUnion<[import("zod").ZodLiteral<"speed">, import("zod").ZodLiteral<"size">]>>;
        }, "strip", import("zod").ZodTypeAny, {
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
            prioritize: "speed" | "size";
        }, {
            type?: "postgres" | "sqlite" | undefined;
            postgres?: {
                port?: number | undefined;
                dbName?: string | undefined;
                connectionURI?: string | undefined;
            } | undefined;
            prioritize?: "speed" | "size" | undefined;
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
            prioritize: "speed" | "size";
        }, {
            type?: "postgres" | "sqlite" | undefined;
            postgres?: {
                port?: number | undefined;
                dbName?: string | undefined;
                connectionURI?: string | undefined;
            } | undefined;
            prioritize?: "speed" | "size" | undefined;
        } | undefined>>;
        additionalUserContent: import("zod").ZodDefault<import("zod").ZodObject<{
            css: import("zod").ZodOptional<import("zod").ZodString>;
            favicon: import("zod").ZodOptional<import("zod").ZodEffects<import("zod").ZodString, string, string>>;
            logo: import("zod").ZodOptional<import("zod").ZodEffects<import("zod").ZodString, string, string>>;
        }, "strip", import("zod").ZodTypeAny, {
            css?: string | undefined;
            logo?: string | undefined;
            favicon?: string | undefined;
        }, {
            css?: string | undefined;
            logo?: string | undefined;
            favicon?: string | undefined;
        }>>;
    }, "strip", import("zod").ZodTypeAny, {
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
            prioritize: "speed" | "size";
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
            prioritize?: "speed" | "size" | undefined;
        } | undefined;
        additionalUserContent?: {
            css?: string | undefined;
            logo?: string | undefined;
            favicon?: string | undefined;
        } | undefined;
    }>>>;
    meta: import("zod").ZodOptional<import("zod").ZodDefault<import("zod").ZodObject<{
        title: import("zod").ZodDefault<import("zod").ZodString>;
        desc: import("zod").ZodOptional<import("zod").ZodString>;
    }, "strip", import("zod").ZodTypeAny, {
        title: string;
        desc?: string | undefined;
    }, {
        title?: string | undefined;
        desc?: string | undefined;
    }>>>;
    plugins: import("zod").ZodOptional<import("zod").ZodEffects<import("zod").ZodDefault<import("zod").ZodUnion<[import("zod").ZodObject<{
        name: import("zod").ZodString;
        version: import("zod").ZodDefault<import("zod").ZodString>;
        parserIndex: import("zod").ZodDefault<import("zod").ZodNumber>;
    }, "strip", import("zod").ZodTypeAny, {
        name: string;
        version: string;
        parserIndex: number;
    }, {
        name: string;
        version?: string | undefined;
        parserIndex?: number | undefined;
    }>, import("zod").ZodArray<import("zod").ZodObject<{
        name: import("zod").ZodString;
        version: import("zod").ZodDefault<import("zod").ZodString>;
        parserIndex: import("zod").ZodDefault<import("zod").ZodNumber>;
    }, "strip", import("zod").ZodTypeAny, {
        name: string;
        version: string;
        parserIndex: number;
    }, {
        name: string;
        version?: string | undefined;
        parserIndex?: number | undefined;
    }>, "many">, import("zod").ZodString, import("zod").ZodArray<import("zod").ZodString, "many">]>>, ({
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
}, "strip", import("zod").ZodTypeAny, {
    fsRoot: string;
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
                inline: "coffee" | "css" | "diff" | "fish" | "kotlin" | "latex" | "markdown" | "move" | "python" | "shell" | "swift" | "turtle" | "fs" | "json" | "abap" | "actionscript-3" | "ada" | "angular-html" | "angular-ts" | "apache" | "apex" | "apl" | "applescript" | "ara" | "asm" | "astro" | "awk" | "ballerina" | "bat" | "beancount" | "berry" | "bibtex" | "bicep" | "blade" | "c" | "cadence" | "clarity" | "clojure" | "cmake" | "cobol" | "codeql" | "cpp" | "crystal" | "csharp" | "csv" | "cue" | "cypher" | "d" | "dart" | "dax" | "docker" | "dream-maker" | "elixir" | "elm" | "erb" | "erlang" | "fortran-fixed-form" | "fortran-free-form" | "fsharp" | "gdresource" | "gdscript" | "gdshader" | "gherkin" | "git-commit" | "git-rebase" | "glimmer-js" | "glimmer-ts" | "glsl" | "gnuplot" | "go" | "graphql" | "groovy" | "hack" | "haml" | "handlebars" | "haskell" | "hcl" | "hjson" | "hlsl" | "html" | "html-derivative" | "http" | "imba" | "ini" | "java" | "javascript" | "jinja" | "jison" | "json5" | "jsonc" | "jsonl" | "jsonnet" | "jssm" | "jsx" | "julia" | "kusto" | "less" | "liquid" | "lisp" | "logo" | "lua" | "make" | "marko" | "matlab" | "mdc" | "mdx" | "mermaid" | "mojo" | "narrat" | "nextflow" | "nginx" | "nim" | "nix" | "nushell" | "objective-c" | "objective-cpp" | "ocaml" | "pascal" | "perl" | "php" | "plsql" | "postcss" | "powerquery" | "powershell" | "prisma" | "prolog" | "proto" | "pug" | "puppet" | "purescript" | "r" | "raku" | "razor" | "reg" | "rel" | "riscv" | "rst" | "ruby" | "rust" | "sas" | "sass" | "scala" | "scheme" | "scss" | "shaderlab" | "shellscript" | "shellsession" | "smalltalk" | "solidity" | "sparql" | "splunk" | "sql" | "ssh-config" | "stata" | "stylus" | "svelte" | "system-verilog" | "tasl" | "tcl" | "terraform" | "tex" | "toml" | "tsx" | "twig" | "typescript" | "typst" | "v" | "vb" | "verilog" | "vhdl" | "viml" | "vue" | "vue-html" | "vyper" | "wasm" | "wenyan" | "wgsl" | "wolfram" | "xml" | "xsl" | "yaml" | "zenscript" | "zig" | "batch" | "be" | "cdc" | "clj" | "ql" | "coffeescript" | "c++" | "c#" | "cs" | "cql" | "dockerfile" | "erl" | "f" | "for" | "f77" | "f90" | "f95" | "f03" | "f08" | "f18" | "f#" | "gjs" | "gts" | "gql" | "hbs" | "hs" | "properties" | "js" | "fsl" | "kt" | "kts" | "kql" | "makefile" | "md" | "nar" | "nf" | "nu" | "objc" | "ps" | "ps1" | "jade" | "py" | "perl6" | "rb" | "rs" | "shader" | "bash" | "sh" | "zsh" | "console" | "spl" | "styl" | "tf" | "tfvars" | "ts" | "typ" | "cmd" | "vim" | "vimscript" | "vy" | "文言" | "wl" | "yml";
                block: "coffee" | "css" | "diff" | "fish" | "kotlin" | "latex" | "markdown" | "move" | "python" | "shell" | "swift" | "turtle" | "fs" | "json" | "abap" | "actionscript-3" | "ada" | "angular-html" | "angular-ts" | "apache" | "apex" | "apl" | "applescript" | "ara" | "asm" | "astro" | "awk" | "ballerina" | "bat" | "beancount" | "berry" | "bibtex" | "bicep" | "blade" | "c" | "cadence" | "clarity" | "clojure" | "cmake" | "cobol" | "codeql" | "cpp" | "crystal" | "csharp" | "csv" | "cue" | "cypher" | "d" | "dart" | "dax" | "docker" | "dream-maker" | "elixir" | "elm" | "erb" | "erlang" | "fortran-fixed-form" | "fortran-free-form" | "fsharp" | "gdresource" | "gdscript" | "gdshader" | "gherkin" | "git-commit" | "git-rebase" | "glimmer-js" | "glimmer-ts" | "glsl" | "gnuplot" | "go" | "graphql" | "groovy" | "hack" | "haml" | "handlebars" | "haskell" | "hcl" | "hjson" | "hlsl" | "html" | "html-derivative" | "http" | "imba" | "ini" | "java" | "javascript" | "jinja" | "jison" | "json5" | "jsonc" | "jsonl" | "jsonnet" | "jssm" | "jsx" | "julia" | "kusto" | "less" | "liquid" | "lisp" | "logo" | "lua" | "make" | "marko" | "matlab" | "mdc" | "mdx" | "mermaid" | "mojo" | "narrat" | "nextflow" | "nginx" | "nim" | "nix" | "nushell" | "objective-c" | "objective-cpp" | "ocaml" | "pascal" | "perl" | "php" | "plsql" | "postcss" | "powerquery" | "powershell" | "prisma" | "prolog" | "proto" | "pug" | "puppet" | "purescript" | "r" | "raku" | "razor" | "reg" | "rel" | "riscv" | "rst" | "ruby" | "rust" | "sas" | "sass" | "scala" | "scheme" | "scss" | "shaderlab" | "shellscript" | "shellsession" | "smalltalk" | "solidity" | "sparql" | "splunk" | "sql" | "ssh-config" | "stata" | "stylus" | "svelte" | "system-verilog" | "tasl" | "tcl" | "terraform" | "tex" | "toml" | "tsx" | "twig" | "typescript" | "typst" | "v" | "vb" | "verilog" | "vhdl" | "viml" | "vue" | "vue-html" | "vyper" | "wasm" | "wenyan" | "wgsl" | "wolfram" | "xml" | "xsl" | "yaml" | "zenscript" | "zig" | "batch" | "be" | "cdc" | "clj" | "ql" | "coffeescript" | "c++" | "c#" | "cs" | "cql" | "dockerfile" | "erl" | "f" | "for" | "f77" | "f90" | "f95" | "f03" | "f08" | "f18" | "f#" | "gjs" | "gts" | "gql" | "hbs" | "hs" | "properties" | "js" | "fsl" | "kt" | "kts" | "kql" | "makefile" | "md" | "nar" | "nf" | "nu" | "objc" | "ps" | "ps1" | "jade" | "py" | "perl6" | "rb" | "rs" | "shader" | "bash" | "sh" | "zsh" | "console" | "spl" | "styl" | "tf" | "tfvars" | "ts" | "typ" | "cmd" | "vim" | "vimscript" | "vy" | "文言" | "wl" | "yml";
            };
        };
    } | undefined;
    math?: {
        latexPackages: string[] | "all";
        constants: Record<string, number>;
        latexFontUrl?: string | undefined;
    } | undefined;
    database?: {
        storeFormatted: boolean;
        removeIfNotPresentInFs: boolean;
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
            cellMetadataPanel: boolean;
            cellSidebarMargin: number;
            bundledIPyWidgets: {
                module: string | Record<string, string>;
                name: string;
                version: string;
            }[];
            externalIPyWidgets: {
                name: string;
                version: string;
            }[];
            nbgrader: boolean;
            readOnly: boolean;
            maxHeight?: string | undefined;
            height?: string | undefined;
        };
        cellInputWrappers: Record<string, {
            prefix: string;
            suffix: string;
        }>;
        jupyterToken?: string | undefined;
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
            icon?: import("@ulld/utilities/validIconNameEnum").ValidIconNameEnumDynamicallyGenerated | undefined;
            onClick?: ((...args: unknown[]) => unknown) | undefined;
        })[];
        sidebarLinks: (string | {
            icon: import("@ulld/utilities/validIconNameEnum").ValidIconNameEnumDynamicallyGenerated;
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
    UI?: {
        table: {
            maxHeight: string;
        };
        text: {
            blockQuoteItalic: boolean;
            fontPaths: {
                path: string;
                weight: "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900";
                style: "bold" | "italic" | "normal";
            }[] | "default";
        };
        theme: "ulld" | "red" | "orange" | "yellow" | "green" | "blue" | "rose" | "slate" | "gray" | "stone" | "zinc" | "neutral" | "violet";
        media: {
            imageMap: Record<string, string | undefined>;
            includeDefaultImageMap: boolean;
            imageRemoteTest: RegExp[];
        };
        colors: Record<string, {
            dark?: string | undefined;
            light?: string | undefined;
        } | undefined>;
        autoApplyMdxTitles: boolean;
    } | undefined;
    slots?: {
        math?: any;
        snippets?: any;
        bibliography?: any;
        navigation?: any;
        dashboard?: any;
        taskManager?: any;
        UI?: any;
        pdf?: any;
        editor?: any;
        commandPalette?: any;
        form?: any;
    } | undefined;
    autoTag?: {
        path: string;
        tag: string;
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
    ignoreFilepaths?: {
        regex: string | RegExp;
        original: string;
    }[] | undefined;
    tempDir?: string | undefined;
    generatedDir?: string | undefined;
    ignorePreferFsExtensions?: import("../configUtilitySchemas.js").ParsedRegExpField[] | undefined;
    fileTypePriority?: (".mdx" | ".ipynb" | ".md" | ".csv" | ".tsv" | ".excel" | ".numpy" | ".html" | ".pickle" | ".db" | ".sql" | ".pdf" | ".json" | ".tex" | ".hdf5")[] | undefined;
    noteTypes?: {
        docType: string;
        id: string;
        url: string;
        label: string;
        icon: import("@ulld/utilities/validIconNameEnum").ValidIconNameEnumDynamicallyGenerated;
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
    }[] | undefined;
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
            snippets?: boolean | undefined;
            calendar?: boolean | undefined;
            bibliography?: boolean | undefined;
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
            prioritize: "speed" | "size";
        };
        additionalUserContent: {
            css?: string | undefined;
            logo?: string | undefined;
            favicon?: string | undefined;
        };
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
            defaultLanguage?: "coffee" | "css" | "diff" | "fish" | "kotlin" | "latex" | "markdown" | "move" | "python" | "shell" | "swift" | "turtle" | "fs" | "json" | "abap" | "actionscript-3" | "ada" | "angular-html" | "angular-ts" | "apache" | "apex" | "apl" | "applescript" | "ara" | "asm" | "astro" | "awk" | "ballerina" | "bat" | "beancount" | "berry" | "bibtex" | "bicep" | "blade" | "c" | "cadence" | "clarity" | "clojure" | "cmake" | "cobol" | "codeql" | "cpp" | "crystal" | "csharp" | "csv" | "cue" | "cypher" | "d" | "dart" | "dax" | "docker" | "dream-maker" | "elixir" | "elm" | "erb" | "erlang" | "fortran-fixed-form" | "fortran-free-form" | "fsharp" | "gdresource" | "gdscript" | "gdshader" | "gherkin" | "git-commit" | "git-rebase" | "glimmer-js" | "glimmer-ts" | "glsl" | "gnuplot" | "go" | "graphql" | "groovy" | "hack" | "haml" | "handlebars" | "haskell" | "hcl" | "hjson" | "hlsl" | "html" | "html-derivative" | "http" | "imba" | "ini" | "java" | "javascript" | "jinja" | "jison" | "json5" | "jsonc" | "jsonl" | "jsonnet" | "jssm" | "jsx" | "julia" | "kusto" | "less" | "liquid" | "lisp" | "logo" | "lua" | "make" | "marko" | "matlab" | "mdc" | "mdx" | "mermaid" | "mojo" | "narrat" | "nextflow" | "nginx" | "nim" | "nix" | "nushell" | "objective-c" | "objective-cpp" | "ocaml" | "pascal" | "perl" | "php" | "plsql" | "postcss" | "powerquery" | "powershell" | "prisma" | "prolog" | "proto" | "pug" | "puppet" | "purescript" | "r" | "raku" | "razor" | "reg" | "rel" | "riscv" | "rst" | "ruby" | "rust" | "sas" | "sass" | "scala" | "scheme" | "scss" | "shaderlab" | "shellscript" | "shellsession" | "smalltalk" | "solidity" | "sparql" | "splunk" | "sql" | "ssh-config" | "stata" | "stylus" | "svelte" | "system-verilog" | "tasl" | "tcl" | "terraform" | "tex" | "toml" | "tsx" | "twig" | "typescript" | "typst" | "v" | "vb" | "verilog" | "vhdl" | "viml" | "vue" | "vue-html" | "vyper" | "wasm" | "wenyan" | "wgsl" | "wolfram" | "xml" | "xsl" | "yaml" | "zenscript" | "zig" | "batch" | "be" | "cdc" | "clj" | "ql" | "coffeescript" | "c++" | "c#" | "cs" | "cql" | "dockerfile" | "erl" | "f" | "for" | "f77" | "f90" | "f95" | "f03" | "f08" | "f18" | "f#" | "gjs" | "gts" | "gql" | "hbs" | "hs" | "properties" | "js" | "fsl" | "kt" | "kts" | "kql" | "makefile" | "md" | "nar" | "nf" | "nu" | "objc" | "ps" | "ps1" | "jade" | "py" | "perl6" | "rb" | "rs" | "shader" | "bash" | "sh" | "zsh" | "console" | "spl" | "styl" | "tf" | "tfvars" | "ts" | "typ" | "cmd" | "vim" | "vimscript" | "vy" | "文言" | "wl" | "yml" | {
                inline: "coffee" | "css" | "diff" | "fish" | "kotlin" | "latex" | "markdown" | "move" | "python" | "shell" | "swift" | "turtle" | "fs" | "json" | "abap" | "actionscript-3" | "ada" | "angular-html" | "angular-ts" | "apache" | "apex" | "apl" | "applescript" | "ara" | "asm" | "astro" | "awk" | "ballerina" | "bat" | "beancount" | "berry" | "bibtex" | "bicep" | "blade" | "c" | "cadence" | "clarity" | "clojure" | "cmake" | "cobol" | "codeql" | "cpp" | "crystal" | "csharp" | "csv" | "cue" | "cypher" | "d" | "dart" | "dax" | "docker" | "dream-maker" | "elixir" | "elm" | "erb" | "erlang" | "fortran-fixed-form" | "fortran-free-form" | "fsharp" | "gdresource" | "gdscript" | "gdshader" | "gherkin" | "git-commit" | "git-rebase" | "glimmer-js" | "glimmer-ts" | "glsl" | "gnuplot" | "go" | "graphql" | "groovy" | "hack" | "haml" | "handlebars" | "haskell" | "hcl" | "hjson" | "hlsl" | "html" | "html-derivative" | "http" | "imba" | "ini" | "java" | "javascript" | "jinja" | "jison" | "json5" | "jsonc" | "jsonl" | "jsonnet" | "jssm" | "jsx" | "julia" | "kusto" | "less" | "liquid" | "lisp" | "logo" | "lua" | "make" | "marko" | "matlab" | "mdc" | "mdx" | "mermaid" | "mojo" | "narrat" | "nextflow" | "nginx" | "nim" | "nix" | "nushell" | "objective-c" | "objective-cpp" | "ocaml" | "pascal" | "perl" | "php" | "plsql" | "postcss" | "powerquery" | "powershell" | "prisma" | "prolog" | "proto" | "pug" | "puppet" | "purescript" | "r" | "raku" | "razor" | "reg" | "rel" | "riscv" | "rst" | "ruby" | "rust" | "sas" | "sass" | "scala" | "scheme" | "scss" | "shaderlab" | "shellscript" | "shellsession" | "smalltalk" | "solidity" | "sparql" | "splunk" | "sql" | "ssh-config" | "stata" | "stylus" | "svelte" | "system-verilog" | "tasl" | "tcl" | "terraform" | "tex" | "toml" | "tsx" | "twig" | "typescript" | "typst" | "v" | "vb" | "verilog" | "vhdl" | "viml" | "vue" | "vue-html" | "vyper" | "wasm" | "wenyan" | "wgsl" | "wolfram" | "xml" | "xsl" | "yaml" | "zenscript" | "zig" | "batch" | "be" | "cdc" | "clj" | "ql" | "coffeescript" | "c++" | "c#" | "cs" | "cql" | "dockerfile" | "erl" | "f" | "for" | "f77" | "f90" | "f95" | "f03" | "f08" | "f18" | "f#" | "gjs" | "gts" | "gql" | "hbs" | "hs" | "properties" | "js" | "fsl" | "kt" | "kts" | "kql" | "makefile" | "md" | "nar" | "nf" | "nu" | "objc" | "ps" | "ps1" | "jade" | "py" | "perl6" | "rb" | "rs" | "shader" | "bash" | "sh" | "zsh" | "console" | "spl" | "styl" | "tf" | "tfvars" | "ts" | "typ" | "cmd" | "vim" | "vimscript" | "vy" | "文言" | "wl" | "yml";
                block: "coffee" | "css" | "diff" | "fish" | "kotlin" | "latex" | "markdown" | "move" | "python" | "shell" | "swift" | "turtle" | "fs" | "json" | "abap" | "actionscript-3" | "ada" | "angular-html" | "angular-ts" | "apache" | "apex" | "apl" | "applescript" | "ara" | "asm" | "astro" | "awk" | "ballerina" | "bat" | "beancount" | "berry" | "bibtex" | "bicep" | "blade" | "c" | "cadence" | "clarity" | "clojure" | "cmake" | "cobol" | "codeql" | "cpp" | "crystal" | "csharp" | "csv" | "cue" | "cypher" | "d" | "dart" | "dax" | "docker" | "dream-maker" | "elixir" | "elm" | "erb" | "erlang" | "fortran-fixed-form" | "fortran-free-form" | "fsharp" | "gdresource" | "gdscript" | "gdshader" | "gherkin" | "git-commit" | "git-rebase" | "glimmer-js" | "glimmer-ts" | "glsl" | "gnuplot" | "go" | "graphql" | "groovy" | "hack" | "haml" | "handlebars" | "haskell" | "hcl" | "hjson" | "hlsl" | "html" | "html-derivative" | "http" | "imba" | "ini" | "java" | "javascript" | "jinja" | "jison" | "json5" | "jsonc" | "jsonl" | "jsonnet" | "jssm" | "jsx" | "julia" | "kusto" | "less" | "liquid" | "lisp" | "logo" | "lua" | "make" | "marko" | "matlab" | "mdc" | "mdx" | "mermaid" | "mojo" | "narrat" | "nextflow" | "nginx" | "nim" | "nix" | "nushell" | "objective-c" | "objective-cpp" | "ocaml" | "pascal" | "perl" | "php" | "plsql" | "postcss" | "powerquery" | "powershell" | "prisma" | "prolog" | "proto" | "pug" | "puppet" | "purescript" | "r" | "raku" | "razor" | "reg" | "rel" | "riscv" | "rst" | "ruby" | "rust" | "sas" | "sass" | "scala" | "scheme" | "scss" | "shaderlab" | "shellscript" | "shellsession" | "smalltalk" | "solidity" | "sparql" | "splunk" | "sql" | "ssh-config" | "stata" | "stylus" | "svelte" | "system-verilog" | "tasl" | "tcl" | "terraform" | "tex" | "toml" | "tsx" | "twig" | "typescript" | "typst" | "v" | "vb" | "verilog" | "vhdl" | "viml" | "vue" | "vue-html" | "vyper" | "wasm" | "wenyan" | "wgsl" | "wolfram" | "xml" | "xsl" | "yaml" | "zenscript" | "zig" | "batch" | "be" | "cdc" | "clj" | "ql" | "coffeescript" | "c++" | "c#" | "cs" | "cql" | "dockerfile" | "erl" | "f" | "for" | "f77" | "f90" | "f95" | "f03" | "f08" | "f18" | "f#" | "gjs" | "gts" | "gql" | "hbs" | "hs" | "properties" | "js" | "fsl" | "kt" | "kts" | "kql" | "makefile" | "md" | "nar" | "nf" | "nu" | "objc" | "ps" | "ps1" | "jade" | "py" | "perl6" | "rb" | "rs" | "shader" | "bash" | "sh" | "zsh" | "console" | "spl" | "styl" | "tf" | "tfvars" | "ts" | "typ" | "cmd" | "vim" | "vimscript" | "vy" | "文言" | "wl" | "yml";
            } | undefined;
        } | undefined;
    } | undefined;
    math?: {
        latexPackages?: string[] | "all" | undefined;
        latexFontUrl?: string | undefined;
        constants?: Record<string, number> | undefined;
    } | undefined;
    database?: {
        storeFormatted?: boolean | undefined;
        removeIfNotPresentInFs?: boolean | undefined;
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
            maxHeight?: string | undefined;
            cellMetadataPanel?: boolean | undefined;
            cellSidebarMargin?: number | undefined;
            height?: string | undefined;
            bundledIPyWidgets?: {
                module: string | Record<string, string>;
                name: string;
                version: string;
            }[] | undefined;
            externalIPyWidgets?: {
                name: string;
                version: string;
            }[] | undefined;
            nbgrader?: boolean | undefined;
            readOnly?: boolean | undefined;
        } | undefined;
        cellInputWrappers?: Record<string, string | {
            prefix: string;
            suffix: string;
        }> | undefined;
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
            icon?: import("@ulld/utilities/validIconNameEnum").ValidIconNameEnumDynamicallyGenerated | undefined;
            onClick?: ((...args: unknown[]) => unknown) | undefined;
        })[] | undefined;
        sidebarLinks?: (string | {
            icon: import("@ulld/utilities/validIconNameEnum").ValidIconNameEnumDynamicallyGenerated;
            label?: string | undefined;
            href?: string | undefined;
            onClick?: ((...args: unknown[]) => unknown) | undefined;
            Icon?: ((...args: unknown[]) => unknown) | undefined;
        })[] | undefined;
    } | undefined;
    terminal?: {
        logLevel?: "info" | "none" | "debug" | "verbose" | undefined;
    } | undefined;
    UI?: {
        table?: {
            maxHeight?: string | number | undefined;
        } | undefined;
        text?: {
            blockQuoteItalic?: boolean | undefined;
            fontPaths?: {
                path: string;
                weight: "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900";
                style: "bold" | "italic" | "normal";
            }[] | "default" | undefined;
        } | undefined;
        theme?: "ulld" | "red" | "orange" | "yellow" | "green" | "blue" | "rose" | "slate" | "gray" | "stone" | "zinc" | "neutral" | "violet" | undefined;
        media?: {
            imageMap?: Record<string, string | undefined> | undefined;
            includeDefaultImageMap?: boolean | undefined;
            imageRemoteTest?: RegExp[] | undefined;
        } | undefined;
        colors?: Record<string, string | {
            dark?: string | undefined;
            light?: string | undefined;
        } | null | undefined> | undefined;
        autoApplyMdxTitles?: boolean | undefined;
    } | undefined;
    slots?: {
        math?: any;
        snippets?: any;
        bibliography?: any;
        navigation?: any;
        dashboard?: any;
        taskManager?: any;
        UI?: any;
        pdf?: any;
        editor?: any;
        commandPalette?: any;
        form?: any;
    } | undefined;
    autoTag?: {
        path: string;
        tag: string;
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
    fileTypePriority?: (".mdx" | ".ipynb" | ".md" | ".csv" | ".tsv" | ".excel" | ".numpy" | ".html" | ".pickle" | ".db" | ".sql" | ".pdf" | ".json" | ".tex" | ".hdf5")[] | undefined;
    noteTypes?: {
        label: string;
        fs: string;
        icon?: import("@ulld/utilities/validIconNameEnum").ValidIconNameEnumDynamicallyGenerated | undefined;
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
            snippets?: boolean | undefined;
            calendar?: boolean | undefined;
            bibliography?: boolean | undefined;
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
    build?: {
        database?: {
            type?: "postgres" | "sqlite" | undefined;
            postgres?: {
                port?: number | undefined;
                dbName?: string | undefined;
                connectionURI?: string | undefined;
            } | undefined;
            prioritize?: "speed" | "size" | undefined;
        } | undefined;
        additionalUserContent?: {
            css?: string | undefined;
            logo?: string | undefined;
            favicon?: string | undefined;
        } | undefined;
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
//# sourceMappingURL=justFsRequired.d.ts.map