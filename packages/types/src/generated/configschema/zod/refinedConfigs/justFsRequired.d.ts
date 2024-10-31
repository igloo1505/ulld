export declare const appConfigOnlyFSRequired: import("zod").ZodObject<{
    code: import("zod").ZodOptional<import("zod").ZodDefault<import("zod").ZodObject<{
        theme: import("zod").ZodDefault<import("zod").ZodObject<{
            dark: import("zod").ZodDefault<import("zod").ZodUnion<[import("zod").ZodLiteral<"andromeeda">, import("zod").ZodLiteral<"aurora-x">, import("zod").ZodLiteral<"ayu-dark">, import("zod").ZodLiteral<"catppuccin-frappe">, import("zod").ZodLiteral<"catppuccin-latte">, import("zod").ZodLiteral<"catppuccin-macchiato">, import("zod").ZodLiteral<"catppuccin-mocha">, import("zod").ZodLiteral<"dark-plus">, import("zod").ZodLiteral<"dracula">, import("zod").ZodLiteral<"dracula-soft">, import("zod").ZodLiteral<"github-dark">, import("zod").ZodLiteral<"github-dark-dimmed">, import("zod").ZodLiteral<"github-light">, import("zod").ZodLiteral<"light-plus">, import("zod").ZodLiteral<"material-theme">, import("zod").ZodLiteral<"material-theme-darker">, import("zod").ZodLiteral<"material-theme-lighter">, import("zod").ZodLiteral<"material-theme-ocean">, import("zod").ZodLiteral<"material-theme-palenight">, import("zod").ZodLiteral<"min-dark">, import("zod").ZodLiteral<"min-light">, import("zod").ZodLiteral<"monokai">, import("zod").ZodLiteral<"night-owl">, import("zod").ZodLiteral<"nord">, import("zod").ZodLiteral<"one-dark-pro">, import("zod").ZodLiteral<"poimandres">, import("zod").ZodLiteral<"red">, import("zod").ZodLiteral<"rose-pine">, import("zod").ZodLiteral<"rose-pine-dawn">, import("zod").ZodLiteral<"rose-pine-moon">, import("zod").ZodLiteral<"slack-dark">, import("zod").ZodLiteral<"slack-ochin">, import("zod").ZodLiteral<"solarized-dark">, import("zod").ZodLiteral<"solarized-light">, import("zod").ZodLiteral<"synthwave-84">, import("zod").ZodLiteral<"tokyo-night">, import("zod").ZodLiteral<"vesper">, import("zod").ZodLiteral<"vitesse-black">, import("zod").ZodLiteral<"vitesse-dark">, import("zod").ZodLiteral<"vitesse-light">]>>;
            light: import("zod").ZodDefault<import("zod").ZodUnion<[import("zod").ZodLiteral<"andromeeda">, import("zod").ZodLiteral<"aurora-x">, import("zod").ZodLiteral<"ayu-dark">, import("zod").ZodLiteral<"catppuccin-frappe">, import("zod").ZodLiteral<"catppuccin-latte">, import("zod").ZodLiteral<"catppuccin-macchiato">, import("zod").ZodLiteral<"catppuccin-mocha">, import("zod").ZodLiteral<"dark-plus">, import("zod").ZodLiteral<"dracula">, import("zod").ZodLiteral<"dracula-soft">, import("zod").ZodLiteral<"github-dark">, import("zod").ZodLiteral<"github-dark-dimmed">, import("zod").ZodLiteral<"github-light">, import("zod").ZodLiteral<"light-plus">, import("zod").ZodLiteral<"material-theme">, import("zod").ZodLiteral<"material-theme-darker">, import("zod").ZodLiteral<"material-theme-lighter">, import("zod").ZodLiteral<"material-theme-ocean">, import("zod").ZodLiteral<"material-theme-palenight">, import("zod").ZodLiteral<"min-dark">, import("zod").ZodLiteral<"min-light">, import("zod").ZodLiteral<"monokai">, import("zod").ZodLiteral<"night-owl">, import("zod").ZodLiteral<"nord">, import("zod").ZodLiteral<"one-dark-pro">, import("zod").ZodLiteral<"poimandres">, import("zod").ZodLiteral<"red">, import("zod").ZodLiteral<"rose-pine">, import("zod").ZodLiteral<"rose-pine-dawn">, import("zod").ZodLiteral<"rose-pine-moon">, import("zod").ZodLiteral<"slack-dark">, import("zod").ZodLiteral<"slack-ochin">, import("zod").ZodLiteral<"solarized-dark">, import("zod").ZodLiteral<"solarized-light">, import("zod").ZodLiteral<"synthwave-84">, import("zod").ZodLiteral<"tokyo-night">, import("zod").ZodLiteral<"vesper">, import("zod").ZodLiteral<"vitesse-black">, import("zod").ZodLiteral<"vitesse-dark">, import("zod").ZodLiteral<"vitesse-light">]>>;
        }, "strip", import("zod").ZodTypeAny, {
            dark?: "andromeeda" | "aurora-x" | "ayu-dark" | "catppuccin-frappe" | "catppuccin-latte" | "catppuccin-macchiato" | "catppuccin-mocha" | "dark-plus" | "dracula" | "dracula-soft" | "github-dark" | "github-dark-dimmed" | "github-light" | "light-plus" | "material-theme" | "material-theme-darker" | "material-theme-lighter" | "material-theme-ocean" | "material-theme-palenight" | "min-dark" | "min-light" | "monokai" | "night-owl" | "nord" | "one-dark-pro" | "poimandres" | "red" | "rose-pine" | "rose-pine-dawn" | "rose-pine-moon" | "slack-dark" | "slack-ochin" | "solarized-dark" | "solarized-light" | "synthwave-84" | "tokyo-night" | "vesper" | "vitesse-black" | "vitesse-dark" | "vitesse-light";
            light?: "andromeeda" | "aurora-x" | "ayu-dark" | "catppuccin-frappe" | "catppuccin-latte" | "catppuccin-macchiato" | "catppuccin-mocha" | "dark-plus" | "dracula" | "dracula-soft" | "github-dark" | "github-dark-dimmed" | "github-light" | "light-plus" | "material-theme" | "material-theme-darker" | "material-theme-lighter" | "material-theme-ocean" | "material-theme-palenight" | "min-dark" | "min-light" | "monokai" | "night-owl" | "nord" | "one-dark-pro" | "poimandres" | "red" | "rose-pine" | "rose-pine-dawn" | "rose-pine-moon" | "slack-dark" | "slack-ochin" | "solarized-dark" | "solarized-light" | "synthwave-84" | "tokyo-night" | "vesper" | "vitesse-black" | "vitesse-dark" | "vitesse-light";
        }, {
            dark?: "andromeeda" | "aurora-x" | "ayu-dark" | "catppuccin-frappe" | "catppuccin-latte" | "catppuccin-macchiato" | "catppuccin-mocha" | "dark-plus" | "dracula" | "dracula-soft" | "github-dark" | "github-dark-dimmed" | "github-light" | "light-plus" | "material-theme" | "material-theme-darker" | "material-theme-lighter" | "material-theme-ocean" | "material-theme-palenight" | "min-dark" | "min-light" | "monokai" | "night-owl" | "nord" | "one-dark-pro" | "poimandres" | "red" | "rose-pine" | "rose-pine-dawn" | "rose-pine-moon" | "slack-dark" | "slack-ochin" | "solarized-dark" | "solarized-light" | "synthwave-84" | "tokyo-night" | "vesper" | "vitesse-black" | "vitesse-dark" | "vitesse-light";
            light?: "andromeeda" | "aurora-x" | "ayu-dark" | "catppuccin-frappe" | "catppuccin-latte" | "catppuccin-macchiato" | "catppuccin-mocha" | "dark-plus" | "dracula" | "dracula-soft" | "github-dark" | "github-dark-dimmed" | "github-light" | "light-plus" | "material-theme" | "material-theme-darker" | "material-theme-lighter" | "material-theme-ocean" | "material-theme-palenight" | "min-dark" | "min-light" | "monokai" | "night-owl" | "nord" | "one-dark-pro" | "poimandres" | "red" | "rose-pine" | "rose-pine-dawn" | "rose-pine-moon" | "slack-dark" | "slack-ochin" | "solarized-dark" | "solarized-light" | "synthwave-84" | "tokyo-night" | "vesper" | "vitesse-black" | "vitesse-dark" | "vitesse-light";
        }>>;
        editor: import("zod").ZodDefault<import("zod").ZodObject<{
            defaultLangauge: import("zod").ZodDefault<import("zod").ZodString>;
            useVimMode: import("zod").ZodDefault<import("zod").ZodBoolean>;
        }, "strip", import("zod").ZodTypeAny, {
            defaultLangauge?: string;
            useVimMode?: boolean;
        }, {
            defaultLangauge?: string;
            useVimMode?: boolean;
        }>>;
        syntaxHighlighting: import("zod").ZodDefault<import("zod").ZodObject<{
            transformers: import("zod").ZodDefault<import("zod").ZodObject<{
                regexHighlight: import("zod").ZodDefault<import("zod").ZodBoolean>;
                lineHighlight: import("zod").ZodDefault<import("zod").ZodBoolean>;
                lineFocus: import("zod").ZodDefault<import("zod").ZodBoolean>;
                lineErrorLevel: import("zod").ZodDefault<import("zod").ZodBoolean>;
                lineDiff: import("zod").ZodDefault<import("zod").ZodBoolean>;
            }, "strip", import("zod").ZodTypeAny, {
                regexHighlight?: boolean;
                lineHighlight?: boolean;
                lineFocus?: boolean;
                lineErrorLevel?: boolean;
                lineDiff?: boolean;
            }, {
                regexHighlight?: boolean;
                lineHighlight?: boolean;
                lineFocus?: boolean;
                lineErrorLevel?: boolean;
                lineDiff?: boolean;
            }>>;
            defaultLanguage: import("zod").ZodEffects<import("zod").ZodDefault<import("zod").ZodUnion<[import("zod").ZodEnum<["abap", "actionscript-3", "ada", "angular-html", "angular-ts", "apache", "apex", "apl", "applescript", "ara", "asm", "astro", "awk", "ballerina", "bat", "beancount", "berry", "bibtex", "bicep", "blade", "c", "cadence", "clarity", "clojure", "cmake", "cobol", "codeql", "coffee", "cpp", "crystal", "csharp", "css", "csv", "cue", "cypher", "d", "dart", "dax", "diff", "docker", "dream-maker", "elixir", "elm", "erb", "erlang", "fish", "fortran-fixed-form", "fortran-free-form", "fsharp", "gdresource", "gdscript", "gdshader", "gherkin", "git-commit", "git-rebase", "glimmer-js", "glimmer-ts", "glsl", "gnuplot", "go", "graphql", "groovy", "hack", "haml", "handlebars", "haskell", "hcl", "hjson", "hlsl", "html", "html-derivative", "http", "imba", "ini", "java", "javascript", "jinja", "jison", "json", "json5", "jsonc", "jsonl", "jsonnet", "jssm", "jsx", "julia", "kotlin", "kusto", "latex", "less", "liquid", "lisp", "logo", "lua", "make", "markdown", "marko", "matlab", "mdc", "mdx", "mermaid", "mojo", "move", "narrat", "nextflow", "nginx", "nim", "nix", "nushell", "objective-c", "objective-cpp", "ocaml", "pascal", "perl", "php", "plsql", "postcss", "powerquery", "powershell", "prisma", "prolog", "proto", "pug", "puppet", "purescript", "python", "r", "raku", "razor", "reg", "rel", "riscv", "rst", "ruby", "rust", "sas", "sass", "scala", "scheme", "scss", "shaderlab", "shellscript", "shellsession", "smalltalk", "solidity", "sparql", "splunk", "sql", "ssh-config", "stata", "stylus", "svelte", "swift", "system-verilog", "tasl", "tcl", "terraform", "tex", "toml", "tsx", "turtle", "twig", "typescript", "typst", "v", "vb", "verilog", "vhdl", "viml", "vue", "vue-html", "vyper", "wasm", "wenyan", "wgsl", "wolfram", "xml", "xsl", "yaml", "zenscript", "zig", "batch", "be", "cdc", "clj", "ql", "coffeescript", "c++", "c#", "cs", "cql", "dockerfile", "erl", "f", "for", "f77", "f90", "f95", "f03", "f08", "f18", "f#", "fs", "gjs", "gts", "gql", "hbs", "hs", "properties", "js", "fsl", "kt", "kts", "kql", "makefile", "md", "nar", "nf", "nu", "objc", "ps", "ps1", "jade", "py", "perl6", "rb", "rs", "shader", "bash", "sh", "shell", "zsh", "console", "spl", "styl", "tf", "tfvars", "ts", "typ", "cmd", "vim", "vimscript", "vy", "文言", "wl", "yml"]>, import("zod").ZodObject<{
                inline: import("zod").ZodEnum<["abap", "actionscript-3", "ada", "angular-html", "angular-ts", "apache", "apex", "apl", "applescript", "ara", "asm", "astro", "awk", "ballerina", "bat", "beancount", "berry", "bibtex", "bicep", "blade", "c", "cadence", "clarity", "clojure", "cmake", "cobol", "codeql", "coffee", "cpp", "crystal", "csharp", "css", "csv", "cue", "cypher", "d", "dart", "dax", "diff", "docker", "dream-maker", "elixir", "elm", "erb", "erlang", "fish", "fortran-fixed-form", "fortran-free-form", "fsharp", "gdresource", "gdscript", "gdshader", "gherkin", "git-commit", "git-rebase", "glimmer-js", "glimmer-ts", "glsl", "gnuplot", "go", "graphql", "groovy", "hack", "haml", "handlebars", "haskell", "hcl", "hjson", "hlsl", "html", "html-derivative", "http", "imba", "ini", "java", "javascript", "jinja", "jison", "json", "json5", "jsonc", "jsonl", "jsonnet", "jssm", "jsx", "julia", "kotlin", "kusto", "latex", "less", "liquid", "lisp", "logo", "lua", "make", "markdown", "marko", "matlab", "mdc", "mdx", "mermaid", "mojo", "move", "narrat", "nextflow", "nginx", "nim", "nix", "nushell", "objective-c", "objective-cpp", "ocaml", "pascal", "perl", "php", "plsql", "postcss", "powerquery", "powershell", "prisma", "prolog", "proto", "pug", "puppet", "purescript", "python", "r", "raku", "razor", "reg", "rel", "riscv", "rst", "ruby", "rust", "sas", "sass", "scala", "scheme", "scss", "shaderlab", "shellscript", "shellsession", "smalltalk", "solidity", "sparql", "splunk", "sql", "ssh-config", "stata", "stylus", "svelte", "swift", "system-verilog", "tasl", "tcl", "terraform", "tex", "toml", "tsx", "turtle", "twig", "typescript", "typst", "v", "vb", "verilog", "vhdl", "viml", "vue", "vue-html", "vyper", "wasm", "wenyan", "wgsl", "wolfram", "xml", "xsl", "yaml", "zenscript", "zig", "batch", "be", "cdc", "clj", "ql", "coffeescript", "c++", "c#", "cs", "cql", "dockerfile", "erl", "f", "for", "f77", "f90", "f95", "f03", "f08", "f18", "f#", "fs", "gjs", "gts", "gql", "hbs", "hs", "properties", "js", "fsl", "kt", "kts", "kql", "makefile", "md", "nar", "nf", "nu", "objc", "ps", "ps1", "jade", "py", "perl6", "rb", "rs", "shader", "bash", "sh", "shell", "zsh", "console", "spl", "styl", "tf", "tfvars", "ts", "typ", "cmd", "vim", "vimscript", "vy", "文言", "wl", "yml"]>;
                block: import("zod").ZodEnum<["abap", "actionscript-3", "ada", "angular-html", "angular-ts", "apache", "apex", "apl", "applescript", "ara", "asm", "astro", "awk", "ballerina", "bat", "beancount", "berry", "bibtex", "bicep", "blade", "c", "cadence", "clarity", "clojure", "cmake", "cobol", "codeql", "coffee", "cpp", "crystal", "csharp", "css", "csv", "cue", "cypher", "d", "dart", "dax", "diff", "docker", "dream-maker", "elixir", "elm", "erb", "erlang", "fish", "fortran-fixed-form", "fortran-free-form", "fsharp", "gdresource", "gdscript", "gdshader", "gherkin", "git-commit", "git-rebase", "glimmer-js", "glimmer-ts", "glsl", "gnuplot", "go", "graphql", "groovy", "hack", "haml", "handlebars", "haskell", "hcl", "hjson", "hlsl", "html", "html-derivative", "http", "imba", "ini", "java", "javascript", "jinja", "jison", "json", "json5", "jsonc", "jsonl", "jsonnet", "jssm", "jsx", "julia", "kotlin", "kusto", "latex", "less", "liquid", "lisp", "logo", "lua", "make", "markdown", "marko", "matlab", "mdc", "mdx", "mermaid", "mojo", "move", "narrat", "nextflow", "nginx", "nim", "nix", "nushell", "objective-c", "objective-cpp", "ocaml", "pascal", "perl", "php", "plsql", "postcss", "powerquery", "powershell", "prisma", "prolog", "proto", "pug", "puppet", "purescript", "python", "r", "raku", "razor", "reg", "rel", "riscv", "rst", "ruby", "rust", "sas", "sass", "scala", "scheme", "scss", "shaderlab", "shellscript", "shellsession", "smalltalk", "solidity", "sparql", "splunk", "sql", "ssh-config", "stata", "stylus", "svelte", "swift", "system-verilog", "tasl", "tcl", "terraform", "tex", "toml", "tsx", "turtle", "twig", "typescript", "typst", "v", "vb", "verilog", "vhdl", "viml", "vue", "vue-html", "vyper", "wasm", "wenyan", "wgsl", "wolfram", "xml", "xsl", "yaml", "zenscript", "zig", "batch", "be", "cdc", "clj", "ql", "coffeescript", "c++", "c#", "cs", "cql", "dockerfile", "erl", "f", "for", "f77", "f90", "f95", "f03", "f08", "f18", "f#", "fs", "gjs", "gts", "gql", "hbs", "hs", "properties", "js", "fsl", "kt", "kts", "kql", "makefile", "md", "nar", "nf", "nu", "objc", "ps", "ps1", "jade", "py", "perl6", "rb", "rs", "shader", "bash", "sh", "shell", "zsh", "console", "spl", "styl", "tf", "tfvars", "ts", "typ", "cmd", "vim", "vimscript", "vy", "文言", "wl", "yml"]>;
            }, "strip", import("zod").ZodTypeAny, {
                inline?: "coffee" | "diff" | "fish" | "move" | "shell" | "turtle" | "swift" | "python" | "markdown" | "kotlin" | "css" | "latex" | "fs" | "json" | "rel" | "mdx" | "md" | "csv" | "html" | "abap" | "actionscript-3" | "ada" | "angular-html" | "angular-ts" | "apache" | "apex" | "apl" | "applescript" | "ara" | "asm" | "astro" | "awk" | "ballerina" | "bat" | "beancount" | "berry" | "bibtex" | "bicep" | "blade" | "c" | "cadence" | "clarity" | "clojure" | "cmake" | "cobol" | "codeql" | "cpp" | "crystal" | "csharp" | "cue" | "cypher" | "d" | "dart" | "dax" | "docker" | "dream-maker" | "elixir" | "elm" | "erb" | "erlang" | "fortran-fixed-form" | "fortran-free-form" | "fsharp" | "gdresource" | "gdscript" | "gdshader" | "gherkin" | "git-commit" | "git-rebase" | "glimmer-js" | "glimmer-ts" | "glsl" | "gnuplot" | "go" | "graphql" | "groovy" | "hack" | "haml" | "handlebars" | "haskell" | "hcl" | "hjson" | "hlsl" | "html-derivative" | "http" | "imba" | "ini" | "java" | "javascript" | "jinja" | "jison" | "json5" | "jsonc" | "jsonl" | "jsonnet" | "jssm" | "jsx" | "julia" | "kusto" | "less" | "liquid" | "lisp" | "logo" | "lua" | "make" | "marko" | "matlab" | "mdc" | "mermaid" | "mojo" | "narrat" | "nextflow" | "nginx" | "nim" | "nix" | "nushell" | "objective-c" | "objective-cpp" | "ocaml" | "pascal" | "perl" | "php" | "plsql" | "postcss" | "powerquery" | "powershell" | "prisma" | "prolog" | "proto" | "pug" | "puppet" | "purescript" | "r" | "raku" | "razor" | "reg" | "riscv" | "rst" | "ruby" | "rust" | "sas" | "sass" | "scala" | "scheme" | "scss" | "shaderlab" | "shellscript" | "shellsession" | "smalltalk" | "solidity" | "sparql" | "splunk" | "sql" | "ssh-config" | "stata" | "stylus" | "svelte" | "system-verilog" | "tasl" | "tcl" | "terraform" | "tex" | "toml" | "tsx" | "twig" | "typescript" | "typst" | "v" | "vb" | "verilog" | "vhdl" | "viml" | "vue" | "vue-html" | "vyper" | "wasm" | "wenyan" | "wgsl" | "wolfram" | "xml" | "xsl" | "yaml" | "zenscript" | "zig" | "batch" | "be" | "cdc" | "clj" | "ql" | "coffeescript" | "c++" | "c#" | "cs" | "cql" | "dockerfile" | "erl" | "f" | "for" | "f77" | "f90" | "f95" | "f03" | "f08" | "f18" | "f#" | "gjs" | "gts" | "gql" | "hbs" | "hs" | "properties" | "js" | "fsl" | "kt" | "kts" | "kql" | "makefile" | "nar" | "nf" | "nu" | "objc" | "ps" | "ps1" | "jade" | "py" | "perl6" | "rb" | "rs" | "shader" | "bash" | "sh" | "zsh" | "console" | "spl" | "styl" | "tf" | "tfvars" | "ts" | "typ" | "cmd" | "vim" | "vimscript" | "vy" | "文言" | "wl" | "yml";
                block?: "coffee" | "diff" | "fish" | "move" | "shell" | "turtle" | "swift" | "python" | "markdown" | "kotlin" | "css" | "latex" | "fs" | "json" | "rel" | "mdx" | "md" | "csv" | "html" | "abap" | "actionscript-3" | "ada" | "angular-html" | "angular-ts" | "apache" | "apex" | "apl" | "applescript" | "ara" | "asm" | "astro" | "awk" | "ballerina" | "bat" | "beancount" | "berry" | "bibtex" | "bicep" | "blade" | "c" | "cadence" | "clarity" | "clojure" | "cmake" | "cobol" | "codeql" | "cpp" | "crystal" | "csharp" | "cue" | "cypher" | "d" | "dart" | "dax" | "docker" | "dream-maker" | "elixir" | "elm" | "erb" | "erlang" | "fortran-fixed-form" | "fortran-free-form" | "fsharp" | "gdresource" | "gdscript" | "gdshader" | "gherkin" | "git-commit" | "git-rebase" | "glimmer-js" | "glimmer-ts" | "glsl" | "gnuplot" | "go" | "graphql" | "groovy" | "hack" | "haml" | "handlebars" | "haskell" | "hcl" | "hjson" | "hlsl" | "html-derivative" | "http" | "imba" | "ini" | "java" | "javascript" | "jinja" | "jison" | "json5" | "jsonc" | "jsonl" | "jsonnet" | "jssm" | "jsx" | "julia" | "kusto" | "less" | "liquid" | "lisp" | "logo" | "lua" | "make" | "marko" | "matlab" | "mdc" | "mermaid" | "mojo" | "narrat" | "nextflow" | "nginx" | "nim" | "nix" | "nushell" | "objective-c" | "objective-cpp" | "ocaml" | "pascal" | "perl" | "php" | "plsql" | "postcss" | "powerquery" | "powershell" | "prisma" | "prolog" | "proto" | "pug" | "puppet" | "purescript" | "r" | "raku" | "razor" | "reg" | "riscv" | "rst" | "ruby" | "rust" | "sas" | "sass" | "scala" | "scheme" | "scss" | "shaderlab" | "shellscript" | "shellsession" | "smalltalk" | "solidity" | "sparql" | "splunk" | "sql" | "ssh-config" | "stata" | "stylus" | "svelte" | "system-verilog" | "tasl" | "tcl" | "terraform" | "tex" | "toml" | "tsx" | "twig" | "typescript" | "typst" | "v" | "vb" | "verilog" | "vhdl" | "viml" | "vue" | "vue-html" | "vyper" | "wasm" | "wenyan" | "wgsl" | "wolfram" | "xml" | "xsl" | "yaml" | "zenscript" | "zig" | "batch" | "be" | "cdc" | "clj" | "ql" | "coffeescript" | "c++" | "c#" | "cs" | "cql" | "dockerfile" | "erl" | "f" | "for" | "f77" | "f90" | "f95" | "f03" | "f08" | "f18" | "f#" | "gjs" | "gts" | "gql" | "hbs" | "hs" | "properties" | "js" | "fsl" | "kt" | "kts" | "kql" | "makefile" | "nar" | "nf" | "nu" | "objc" | "ps" | "ps1" | "jade" | "py" | "perl6" | "rb" | "rs" | "shader" | "bash" | "sh" | "zsh" | "console" | "spl" | "styl" | "tf" | "tfvars" | "ts" | "typ" | "cmd" | "vim" | "vimscript" | "vy" | "文言" | "wl" | "yml";
            }, {
                inline?: "coffee" | "diff" | "fish" | "move" | "shell" | "turtle" | "swift" | "python" | "markdown" | "kotlin" | "css" | "latex" | "fs" | "json" | "rel" | "mdx" | "md" | "csv" | "html" | "abap" | "actionscript-3" | "ada" | "angular-html" | "angular-ts" | "apache" | "apex" | "apl" | "applescript" | "ara" | "asm" | "astro" | "awk" | "ballerina" | "bat" | "beancount" | "berry" | "bibtex" | "bicep" | "blade" | "c" | "cadence" | "clarity" | "clojure" | "cmake" | "cobol" | "codeql" | "cpp" | "crystal" | "csharp" | "cue" | "cypher" | "d" | "dart" | "dax" | "docker" | "dream-maker" | "elixir" | "elm" | "erb" | "erlang" | "fortran-fixed-form" | "fortran-free-form" | "fsharp" | "gdresource" | "gdscript" | "gdshader" | "gherkin" | "git-commit" | "git-rebase" | "glimmer-js" | "glimmer-ts" | "glsl" | "gnuplot" | "go" | "graphql" | "groovy" | "hack" | "haml" | "handlebars" | "haskell" | "hcl" | "hjson" | "hlsl" | "html-derivative" | "http" | "imba" | "ini" | "java" | "javascript" | "jinja" | "jison" | "json5" | "jsonc" | "jsonl" | "jsonnet" | "jssm" | "jsx" | "julia" | "kusto" | "less" | "liquid" | "lisp" | "logo" | "lua" | "make" | "marko" | "matlab" | "mdc" | "mermaid" | "mojo" | "narrat" | "nextflow" | "nginx" | "nim" | "nix" | "nushell" | "objective-c" | "objective-cpp" | "ocaml" | "pascal" | "perl" | "php" | "plsql" | "postcss" | "powerquery" | "powershell" | "prisma" | "prolog" | "proto" | "pug" | "puppet" | "purescript" | "r" | "raku" | "razor" | "reg" | "riscv" | "rst" | "ruby" | "rust" | "sas" | "sass" | "scala" | "scheme" | "scss" | "shaderlab" | "shellscript" | "shellsession" | "smalltalk" | "solidity" | "sparql" | "splunk" | "sql" | "ssh-config" | "stata" | "stylus" | "svelte" | "system-verilog" | "tasl" | "tcl" | "terraform" | "tex" | "toml" | "tsx" | "twig" | "typescript" | "typst" | "v" | "vb" | "verilog" | "vhdl" | "viml" | "vue" | "vue-html" | "vyper" | "wasm" | "wenyan" | "wgsl" | "wolfram" | "xml" | "xsl" | "yaml" | "zenscript" | "zig" | "batch" | "be" | "cdc" | "clj" | "ql" | "coffeescript" | "c++" | "c#" | "cs" | "cql" | "dockerfile" | "erl" | "f" | "for" | "f77" | "f90" | "f95" | "f03" | "f08" | "f18" | "f#" | "gjs" | "gts" | "gql" | "hbs" | "hs" | "properties" | "js" | "fsl" | "kt" | "kts" | "kql" | "makefile" | "nar" | "nf" | "nu" | "objc" | "ps" | "ps1" | "jade" | "py" | "perl6" | "rb" | "rs" | "shader" | "bash" | "sh" | "zsh" | "console" | "spl" | "styl" | "tf" | "tfvars" | "ts" | "typ" | "cmd" | "vim" | "vimscript" | "vy" | "文言" | "wl" | "yml";
                block?: "coffee" | "diff" | "fish" | "move" | "shell" | "turtle" | "swift" | "python" | "markdown" | "kotlin" | "css" | "latex" | "fs" | "json" | "rel" | "mdx" | "md" | "csv" | "html" | "abap" | "actionscript-3" | "ada" | "angular-html" | "angular-ts" | "apache" | "apex" | "apl" | "applescript" | "ara" | "asm" | "astro" | "awk" | "ballerina" | "bat" | "beancount" | "berry" | "bibtex" | "bicep" | "blade" | "c" | "cadence" | "clarity" | "clojure" | "cmake" | "cobol" | "codeql" | "cpp" | "crystal" | "csharp" | "cue" | "cypher" | "d" | "dart" | "dax" | "docker" | "dream-maker" | "elixir" | "elm" | "erb" | "erlang" | "fortran-fixed-form" | "fortran-free-form" | "fsharp" | "gdresource" | "gdscript" | "gdshader" | "gherkin" | "git-commit" | "git-rebase" | "glimmer-js" | "glimmer-ts" | "glsl" | "gnuplot" | "go" | "graphql" | "groovy" | "hack" | "haml" | "handlebars" | "haskell" | "hcl" | "hjson" | "hlsl" | "html-derivative" | "http" | "imba" | "ini" | "java" | "javascript" | "jinja" | "jison" | "json5" | "jsonc" | "jsonl" | "jsonnet" | "jssm" | "jsx" | "julia" | "kusto" | "less" | "liquid" | "lisp" | "logo" | "lua" | "make" | "marko" | "matlab" | "mdc" | "mermaid" | "mojo" | "narrat" | "nextflow" | "nginx" | "nim" | "nix" | "nushell" | "objective-c" | "objective-cpp" | "ocaml" | "pascal" | "perl" | "php" | "plsql" | "postcss" | "powerquery" | "powershell" | "prisma" | "prolog" | "proto" | "pug" | "puppet" | "purescript" | "r" | "raku" | "razor" | "reg" | "riscv" | "rst" | "ruby" | "rust" | "sas" | "sass" | "scala" | "scheme" | "scss" | "shaderlab" | "shellscript" | "shellsession" | "smalltalk" | "solidity" | "sparql" | "splunk" | "sql" | "ssh-config" | "stata" | "stylus" | "svelte" | "system-verilog" | "tasl" | "tcl" | "terraform" | "tex" | "toml" | "tsx" | "twig" | "typescript" | "typst" | "v" | "vb" | "verilog" | "vhdl" | "viml" | "vue" | "vue-html" | "vyper" | "wasm" | "wenyan" | "wgsl" | "wolfram" | "xml" | "xsl" | "yaml" | "zenscript" | "zig" | "batch" | "be" | "cdc" | "clj" | "ql" | "coffeescript" | "c++" | "c#" | "cs" | "cql" | "dockerfile" | "erl" | "f" | "for" | "f77" | "f90" | "f95" | "f03" | "f08" | "f18" | "f#" | "gjs" | "gts" | "gql" | "hbs" | "hs" | "properties" | "js" | "fsl" | "kt" | "kts" | "kql" | "makefile" | "nar" | "nf" | "nu" | "objc" | "ps" | "ps1" | "jade" | "py" | "perl6" | "rb" | "rs" | "shader" | "bash" | "sh" | "zsh" | "console" | "spl" | "styl" | "tf" | "tfvars" | "ts" | "typ" | "cmd" | "vim" | "vimscript" | "vy" | "文言" | "wl" | "yml";
            }>]>>, {
                inline?: "coffee" | "diff" | "fish" | "move" | "shell" | "turtle" | "swift" | "python" | "markdown" | "kotlin" | "css" | "latex" | "fs" | "json" | "rel" | "mdx" | "md" | "csv" | "html" | "abap" | "actionscript-3" | "ada" | "angular-html" | "angular-ts" | "apache" | "apex" | "apl" | "applescript" | "ara" | "asm" | "astro" | "awk" | "ballerina" | "bat" | "beancount" | "berry" | "bibtex" | "bicep" | "blade" | "c" | "cadence" | "clarity" | "clojure" | "cmake" | "cobol" | "codeql" | "cpp" | "crystal" | "csharp" | "cue" | "cypher" | "d" | "dart" | "dax" | "docker" | "dream-maker" | "elixir" | "elm" | "erb" | "erlang" | "fortran-fixed-form" | "fortran-free-form" | "fsharp" | "gdresource" | "gdscript" | "gdshader" | "gherkin" | "git-commit" | "git-rebase" | "glimmer-js" | "glimmer-ts" | "glsl" | "gnuplot" | "go" | "graphql" | "groovy" | "hack" | "haml" | "handlebars" | "haskell" | "hcl" | "hjson" | "hlsl" | "html-derivative" | "http" | "imba" | "ini" | "java" | "javascript" | "jinja" | "jison" | "json5" | "jsonc" | "jsonl" | "jsonnet" | "jssm" | "jsx" | "julia" | "kusto" | "less" | "liquid" | "lisp" | "logo" | "lua" | "make" | "marko" | "matlab" | "mdc" | "mermaid" | "mojo" | "narrat" | "nextflow" | "nginx" | "nim" | "nix" | "nushell" | "objective-c" | "objective-cpp" | "ocaml" | "pascal" | "perl" | "php" | "plsql" | "postcss" | "powerquery" | "powershell" | "prisma" | "prolog" | "proto" | "pug" | "puppet" | "purescript" | "r" | "raku" | "razor" | "reg" | "riscv" | "rst" | "ruby" | "rust" | "sas" | "sass" | "scala" | "scheme" | "scss" | "shaderlab" | "shellscript" | "shellsession" | "smalltalk" | "solidity" | "sparql" | "splunk" | "sql" | "ssh-config" | "stata" | "stylus" | "svelte" | "system-verilog" | "tasl" | "tcl" | "terraform" | "tex" | "toml" | "tsx" | "twig" | "typescript" | "typst" | "v" | "vb" | "verilog" | "vhdl" | "viml" | "vue" | "vue-html" | "vyper" | "wasm" | "wenyan" | "wgsl" | "wolfram" | "xml" | "xsl" | "yaml" | "zenscript" | "zig" | "batch" | "be" | "cdc" | "clj" | "ql" | "coffeescript" | "c++" | "c#" | "cs" | "cql" | "dockerfile" | "erl" | "f" | "for" | "f77" | "f90" | "f95" | "f03" | "f08" | "f18" | "f#" | "gjs" | "gts" | "gql" | "hbs" | "hs" | "properties" | "js" | "fsl" | "kt" | "kts" | "kql" | "makefile" | "nar" | "nf" | "nu" | "objc" | "ps" | "ps1" | "jade" | "py" | "perl6" | "rb" | "rs" | "shader" | "bash" | "sh" | "zsh" | "console" | "spl" | "styl" | "tf" | "tfvars" | "ts" | "typ" | "cmd" | "vim" | "vimscript" | "vy" | "文言" | "wl" | "yml";
                block?: "coffee" | "diff" | "fish" | "move" | "shell" | "turtle" | "swift" | "python" | "markdown" | "kotlin" | "css" | "latex" | "fs" | "json" | "rel" | "mdx" | "md" | "csv" | "html" | "abap" | "actionscript-3" | "ada" | "angular-html" | "angular-ts" | "apache" | "apex" | "apl" | "applescript" | "ara" | "asm" | "astro" | "awk" | "ballerina" | "bat" | "beancount" | "berry" | "bibtex" | "bicep" | "blade" | "c" | "cadence" | "clarity" | "clojure" | "cmake" | "cobol" | "codeql" | "cpp" | "crystal" | "csharp" | "cue" | "cypher" | "d" | "dart" | "dax" | "docker" | "dream-maker" | "elixir" | "elm" | "erb" | "erlang" | "fortran-fixed-form" | "fortran-free-form" | "fsharp" | "gdresource" | "gdscript" | "gdshader" | "gherkin" | "git-commit" | "git-rebase" | "glimmer-js" | "glimmer-ts" | "glsl" | "gnuplot" | "go" | "graphql" | "groovy" | "hack" | "haml" | "handlebars" | "haskell" | "hcl" | "hjson" | "hlsl" | "html-derivative" | "http" | "imba" | "ini" | "java" | "javascript" | "jinja" | "jison" | "json5" | "jsonc" | "jsonl" | "jsonnet" | "jssm" | "jsx" | "julia" | "kusto" | "less" | "liquid" | "lisp" | "logo" | "lua" | "make" | "marko" | "matlab" | "mdc" | "mermaid" | "mojo" | "narrat" | "nextflow" | "nginx" | "nim" | "nix" | "nushell" | "objective-c" | "objective-cpp" | "ocaml" | "pascal" | "perl" | "php" | "plsql" | "postcss" | "powerquery" | "powershell" | "prisma" | "prolog" | "proto" | "pug" | "puppet" | "purescript" | "r" | "raku" | "razor" | "reg" | "riscv" | "rst" | "ruby" | "rust" | "sas" | "sass" | "scala" | "scheme" | "scss" | "shaderlab" | "shellscript" | "shellsession" | "smalltalk" | "solidity" | "sparql" | "splunk" | "sql" | "ssh-config" | "stata" | "stylus" | "svelte" | "system-verilog" | "tasl" | "tcl" | "terraform" | "tex" | "toml" | "tsx" | "twig" | "typescript" | "typst" | "v" | "vb" | "verilog" | "vhdl" | "viml" | "vue" | "vue-html" | "vyper" | "wasm" | "wenyan" | "wgsl" | "wolfram" | "xml" | "xsl" | "yaml" | "zenscript" | "zig" | "batch" | "be" | "cdc" | "clj" | "ql" | "coffeescript" | "c++" | "c#" | "cs" | "cql" | "dockerfile" | "erl" | "f" | "for" | "f77" | "f90" | "f95" | "f03" | "f08" | "f18" | "f#" | "gjs" | "gts" | "gql" | "hbs" | "hs" | "properties" | "js" | "fsl" | "kt" | "kts" | "kql" | "makefile" | "nar" | "nf" | "nu" | "objc" | "ps" | "ps1" | "jade" | "py" | "perl6" | "rb" | "rs" | "shader" | "bash" | "sh" | "zsh" | "console" | "spl" | "styl" | "tf" | "tfvars" | "ts" | "typ" | "cmd" | "vim" | "vimscript" | "vy" | "文言" | "wl" | "yml";
            }, "coffee" | "diff" | "fish" | "move" | "shell" | "turtle" | "swift" | "python" | "markdown" | "kotlin" | "css" | "latex" | "fs" | "json" | "rel" | "mdx" | "md" | "csv" | "html" | "abap" | "actionscript-3" | "ada" | "angular-html" | "angular-ts" | "apache" | "apex" | "apl" | "applescript" | "ara" | "asm" | "astro" | "awk" | "ballerina" | "bat" | "beancount" | "berry" | "bibtex" | "bicep" | "blade" | "c" | "cadence" | "clarity" | "clojure" | "cmake" | "cobol" | "codeql" | "cpp" | "crystal" | "csharp" | "cue" | "cypher" | "d" | "dart" | "dax" | "docker" | "dream-maker" | "elixir" | "elm" | "erb" | "erlang" | "fortran-fixed-form" | "fortran-free-form" | "fsharp" | "gdresource" | "gdscript" | "gdshader" | "gherkin" | "git-commit" | "git-rebase" | "glimmer-js" | "glimmer-ts" | "glsl" | "gnuplot" | "go" | "graphql" | "groovy" | "hack" | "haml" | "handlebars" | "haskell" | "hcl" | "hjson" | "hlsl" | "html-derivative" | "http" | "imba" | "ini" | "java" | "javascript" | "jinja" | "jison" | "json5" | "jsonc" | "jsonl" | "jsonnet" | "jssm" | "jsx" | "julia" | "kusto" | "less" | "liquid" | "lisp" | "logo" | "lua" | "make" | "marko" | "matlab" | "mdc" | "mermaid" | "mojo" | "narrat" | "nextflow" | "nginx" | "nim" | "nix" | "nushell" | "objective-c" | "objective-cpp" | "ocaml" | "pascal" | "perl" | "php" | "plsql" | "postcss" | "powerquery" | "powershell" | "prisma" | "prolog" | "proto" | "pug" | "puppet" | "purescript" | "r" | "raku" | "razor" | "reg" | "riscv" | "rst" | "ruby" | "rust" | "sas" | "sass" | "scala" | "scheme" | "scss" | "shaderlab" | "shellscript" | "shellsession" | "smalltalk" | "solidity" | "sparql" | "splunk" | "sql" | "ssh-config" | "stata" | "stylus" | "svelte" | "system-verilog" | "tasl" | "tcl" | "terraform" | "tex" | "toml" | "tsx" | "twig" | "typescript" | "typst" | "v" | "vb" | "verilog" | "vhdl" | "viml" | "vue" | "vue-html" | "vyper" | "wasm" | "wenyan" | "wgsl" | "wolfram" | "xml" | "xsl" | "yaml" | "zenscript" | "zig" | "batch" | "be" | "cdc" | "clj" | "ql" | "coffeescript" | "c++" | "c#" | "cs" | "cql" | "dockerfile" | "erl" | "f" | "for" | "f77" | "f90" | "f95" | "f03" | "f08" | "f18" | "f#" | "gjs" | "gts" | "gql" | "hbs" | "hs" | "properties" | "js" | "fsl" | "kt" | "kts" | "kql" | "makefile" | "nar" | "nf" | "nu" | "objc" | "ps" | "ps1" | "jade" | "py" | "perl6" | "rb" | "rs" | "shader" | "bash" | "sh" | "zsh" | "console" | "spl" | "styl" | "tf" | "tfvars" | "ts" | "typ" | "cmd" | "vim" | "vimscript" | "vy" | "文言" | "wl" | "yml" | {
                inline?: "coffee" | "diff" | "fish" | "move" | "shell" | "turtle" | "swift" | "python" | "markdown" | "kotlin" | "css" | "latex" | "fs" | "json" | "rel" | "mdx" | "md" | "csv" | "html" | "abap" | "actionscript-3" | "ada" | "angular-html" | "angular-ts" | "apache" | "apex" | "apl" | "applescript" | "ara" | "asm" | "astro" | "awk" | "ballerina" | "bat" | "beancount" | "berry" | "bibtex" | "bicep" | "blade" | "c" | "cadence" | "clarity" | "clojure" | "cmake" | "cobol" | "codeql" | "cpp" | "crystal" | "csharp" | "cue" | "cypher" | "d" | "dart" | "dax" | "docker" | "dream-maker" | "elixir" | "elm" | "erb" | "erlang" | "fortran-fixed-form" | "fortran-free-form" | "fsharp" | "gdresource" | "gdscript" | "gdshader" | "gherkin" | "git-commit" | "git-rebase" | "glimmer-js" | "glimmer-ts" | "glsl" | "gnuplot" | "go" | "graphql" | "groovy" | "hack" | "haml" | "handlebars" | "haskell" | "hcl" | "hjson" | "hlsl" | "html-derivative" | "http" | "imba" | "ini" | "java" | "javascript" | "jinja" | "jison" | "json5" | "jsonc" | "jsonl" | "jsonnet" | "jssm" | "jsx" | "julia" | "kusto" | "less" | "liquid" | "lisp" | "logo" | "lua" | "make" | "marko" | "matlab" | "mdc" | "mermaid" | "mojo" | "narrat" | "nextflow" | "nginx" | "nim" | "nix" | "nushell" | "objective-c" | "objective-cpp" | "ocaml" | "pascal" | "perl" | "php" | "plsql" | "postcss" | "powerquery" | "powershell" | "prisma" | "prolog" | "proto" | "pug" | "puppet" | "purescript" | "r" | "raku" | "razor" | "reg" | "riscv" | "rst" | "ruby" | "rust" | "sas" | "sass" | "scala" | "scheme" | "scss" | "shaderlab" | "shellscript" | "shellsession" | "smalltalk" | "solidity" | "sparql" | "splunk" | "sql" | "ssh-config" | "stata" | "stylus" | "svelte" | "system-verilog" | "tasl" | "tcl" | "terraform" | "tex" | "toml" | "tsx" | "twig" | "typescript" | "typst" | "v" | "vb" | "verilog" | "vhdl" | "viml" | "vue" | "vue-html" | "vyper" | "wasm" | "wenyan" | "wgsl" | "wolfram" | "xml" | "xsl" | "yaml" | "zenscript" | "zig" | "batch" | "be" | "cdc" | "clj" | "ql" | "coffeescript" | "c++" | "c#" | "cs" | "cql" | "dockerfile" | "erl" | "f" | "for" | "f77" | "f90" | "f95" | "f03" | "f08" | "f18" | "f#" | "gjs" | "gts" | "gql" | "hbs" | "hs" | "properties" | "js" | "fsl" | "kt" | "kts" | "kql" | "makefile" | "nar" | "nf" | "nu" | "objc" | "ps" | "ps1" | "jade" | "py" | "perl6" | "rb" | "rs" | "shader" | "bash" | "sh" | "zsh" | "console" | "spl" | "styl" | "tf" | "tfvars" | "ts" | "typ" | "cmd" | "vim" | "vimscript" | "vy" | "文言" | "wl" | "yml";
                block?: "coffee" | "diff" | "fish" | "move" | "shell" | "turtle" | "swift" | "python" | "markdown" | "kotlin" | "css" | "latex" | "fs" | "json" | "rel" | "mdx" | "md" | "csv" | "html" | "abap" | "actionscript-3" | "ada" | "angular-html" | "angular-ts" | "apache" | "apex" | "apl" | "applescript" | "ara" | "asm" | "astro" | "awk" | "ballerina" | "bat" | "beancount" | "berry" | "bibtex" | "bicep" | "blade" | "c" | "cadence" | "clarity" | "clojure" | "cmake" | "cobol" | "codeql" | "cpp" | "crystal" | "csharp" | "cue" | "cypher" | "d" | "dart" | "dax" | "docker" | "dream-maker" | "elixir" | "elm" | "erb" | "erlang" | "fortran-fixed-form" | "fortran-free-form" | "fsharp" | "gdresource" | "gdscript" | "gdshader" | "gherkin" | "git-commit" | "git-rebase" | "glimmer-js" | "glimmer-ts" | "glsl" | "gnuplot" | "go" | "graphql" | "groovy" | "hack" | "haml" | "handlebars" | "haskell" | "hcl" | "hjson" | "hlsl" | "html-derivative" | "http" | "imba" | "ini" | "java" | "javascript" | "jinja" | "jison" | "json5" | "jsonc" | "jsonl" | "jsonnet" | "jssm" | "jsx" | "julia" | "kusto" | "less" | "liquid" | "lisp" | "logo" | "lua" | "make" | "marko" | "matlab" | "mdc" | "mermaid" | "mojo" | "narrat" | "nextflow" | "nginx" | "nim" | "nix" | "nushell" | "objective-c" | "objective-cpp" | "ocaml" | "pascal" | "perl" | "php" | "plsql" | "postcss" | "powerquery" | "powershell" | "prisma" | "prolog" | "proto" | "pug" | "puppet" | "purescript" | "r" | "raku" | "razor" | "reg" | "riscv" | "rst" | "ruby" | "rust" | "sas" | "sass" | "scala" | "scheme" | "scss" | "shaderlab" | "shellscript" | "shellsession" | "smalltalk" | "solidity" | "sparql" | "splunk" | "sql" | "ssh-config" | "stata" | "stylus" | "svelte" | "system-verilog" | "tasl" | "tcl" | "terraform" | "tex" | "toml" | "tsx" | "twig" | "typescript" | "typst" | "v" | "vb" | "verilog" | "vhdl" | "viml" | "vue" | "vue-html" | "vyper" | "wasm" | "wenyan" | "wgsl" | "wolfram" | "xml" | "xsl" | "yaml" | "zenscript" | "zig" | "batch" | "be" | "cdc" | "clj" | "ql" | "coffeescript" | "c++" | "c#" | "cs" | "cql" | "dockerfile" | "erl" | "f" | "for" | "f77" | "f90" | "f95" | "f03" | "f08" | "f18" | "f#" | "gjs" | "gts" | "gql" | "hbs" | "hs" | "properties" | "js" | "fsl" | "kt" | "kts" | "kql" | "makefile" | "nar" | "nf" | "nu" | "objc" | "ps" | "ps1" | "jade" | "py" | "perl6" | "rb" | "rs" | "shader" | "bash" | "sh" | "zsh" | "console" | "spl" | "styl" | "tf" | "tfvars" | "ts" | "typ" | "cmd" | "vim" | "vimscript" | "vy" | "文言" | "wl" | "yml";
            }>;
        }, "strip", import("zod").ZodTypeAny, {
            transformers?: {
                regexHighlight?: boolean;
                lineHighlight?: boolean;
                lineFocus?: boolean;
                lineErrorLevel?: boolean;
                lineDiff?: boolean;
            };
            defaultLanguage?: {
                inline?: "coffee" | "diff" | "fish" | "move" | "shell" | "turtle" | "swift" | "python" | "markdown" | "kotlin" | "css" | "latex" | "fs" | "json" | "rel" | "mdx" | "md" | "csv" | "html" | "abap" | "actionscript-3" | "ada" | "angular-html" | "angular-ts" | "apache" | "apex" | "apl" | "applescript" | "ara" | "asm" | "astro" | "awk" | "ballerina" | "bat" | "beancount" | "berry" | "bibtex" | "bicep" | "blade" | "c" | "cadence" | "clarity" | "clojure" | "cmake" | "cobol" | "codeql" | "cpp" | "crystal" | "csharp" | "cue" | "cypher" | "d" | "dart" | "dax" | "docker" | "dream-maker" | "elixir" | "elm" | "erb" | "erlang" | "fortran-fixed-form" | "fortran-free-form" | "fsharp" | "gdresource" | "gdscript" | "gdshader" | "gherkin" | "git-commit" | "git-rebase" | "glimmer-js" | "glimmer-ts" | "glsl" | "gnuplot" | "go" | "graphql" | "groovy" | "hack" | "haml" | "handlebars" | "haskell" | "hcl" | "hjson" | "hlsl" | "html-derivative" | "http" | "imba" | "ini" | "java" | "javascript" | "jinja" | "jison" | "json5" | "jsonc" | "jsonl" | "jsonnet" | "jssm" | "jsx" | "julia" | "kusto" | "less" | "liquid" | "lisp" | "logo" | "lua" | "make" | "marko" | "matlab" | "mdc" | "mermaid" | "mojo" | "narrat" | "nextflow" | "nginx" | "nim" | "nix" | "nushell" | "objective-c" | "objective-cpp" | "ocaml" | "pascal" | "perl" | "php" | "plsql" | "postcss" | "powerquery" | "powershell" | "prisma" | "prolog" | "proto" | "pug" | "puppet" | "purescript" | "r" | "raku" | "razor" | "reg" | "riscv" | "rst" | "ruby" | "rust" | "sas" | "sass" | "scala" | "scheme" | "scss" | "shaderlab" | "shellscript" | "shellsession" | "smalltalk" | "solidity" | "sparql" | "splunk" | "sql" | "ssh-config" | "stata" | "stylus" | "svelte" | "system-verilog" | "tasl" | "tcl" | "terraform" | "tex" | "toml" | "tsx" | "twig" | "typescript" | "typst" | "v" | "vb" | "verilog" | "vhdl" | "viml" | "vue" | "vue-html" | "vyper" | "wasm" | "wenyan" | "wgsl" | "wolfram" | "xml" | "xsl" | "yaml" | "zenscript" | "zig" | "batch" | "be" | "cdc" | "clj" | "ql" | "coffeescript" | "c++" | "c#" | "cs" | "cql" | "dockerfile" | "erl" | "f" | "for" | "f77" | "f90" | "f95" | "f03" | "f08" | "f18" | "f#" | "gjs" | "gts" | "gql" | "hbs" | "hs" | "properties" | "js" | "fsl" | "kt" | "kts" | "kql" | "makefile" | "nar" | "nf" | "nu" | "objc" | "ps" | "ps1" | "jade" | "py" | "perl6" | "rb" | "rs" | "shader" | "bash" | "sh" | "zsh" | "console" | "spl" | "styl" | "tf" | "tfvars" | "ts" | "typ" | "cmd" | "vim" | "vimscript" | "vy" | "文言" | "wl" | "yml";
                block?: "coffee" | "diff" | "fish" | "move" | "shell" | "turtle" | "swift" | "python" | "markdown" | "kotlin" | "css" | "latex" | "fs" | "json" | "rel" | "mdx" | "md" | "csv" | "html" | "abap" | "actionscript-3" | "ada" | "angular-html" | "angular-ts" | "apache" | "apex" | "apl" | "applescript" | "ara" | "asm" | "astro" | "awk" | "ballerina" | "bat" | "beancount" | "berry" | "bibtex" | "bicep" | "blade" | "c" | "cadence" | "clarity" | "clojure" | "cmake" | "cobol" | "codeql" | "cpp" | "crystal" | "csharp" | "cue" | "cypher" | "d" | "dart" | "dax" | "docker" | "dream-maker" | "elixir" | "elm" | "erb" | "erlang" | "fortran-fixed-form" | "fortran-free-form" | "fsharp" | "gdresource" | "gdscript" | "gdshader" | "gherkin" | "git-commit" | "git-rebase" | "glimmer-js" | "glimmer-ts" | "glsl" | "gnuplot" | "go" | "graphql" | "groovy" | "hack" | "haml" | "handlebars" | "haskell" | "hcl" | "hjson" | "hlsl" | "html-derivative" | "http" | "imba" | "ini" | "java" | "javascript" | "jinja" | "jison" | "json5" | "jsonc" | "jsonl" | "jsonnet" | "jssm" | "jsx" | "julia" | "kusto" | "less" | "liquid" | "lisp" | "logo" | "lua" | "make" | "marko" | "matlab" | "mdc" | "mermaid" | "mojo" | "narrat" | "nextflow" | "nginx" | "nim" | "nix" | "nushell" | "objective-c" | "objective-cpp" | "ocaml" | "pascal" | "perl" | "php" | "plsql" | "postcss" | "powerquery" | "powershell" | "prisma" | "prolog" | "proto" | "pug" | "puppet" | "purescript" | "r" | "raku" | "razor" | "reg" | "riscv" | "rst" | "ruby" | "rust" | "sas" | "sass" | "scala" | "scheme" | "scss" | "shaderlab" | "shellscript" | "shellsession" | "smalltalk" | "solidity" | "sparql" | "splunk" | "sql" | "ssh-config" | "stata" | "stylus" | "svelte" | "system-verilog" | "tasl" | "tcl" | "terraform" | "tex" | "toml" | "tsx" | "twig" | "typescript" | "typst" | "v" | "vb" | "verilog" | "vhdl" | "viml" | "vue" | "vue-html" | "vyper" | "wasm" | "wenyan" | "wgsl" | "wolfram" | "xml" | "xsl" | "yaml" | "zenscript" | "zig" | "batch" | "be" | "cdc" | "clj" | "ql" | "coffeescript" | "c++" | "c#" | "cs" | "cql" | "dockerfile" | "erl" | "f" | "for" | "f77" | "f90" | "f95" | "f03" | "f08" | "f18" | "f#" | "gjs" | "gts" | "gql" | "hbs" | "hs" | "properties" | "js" | "fsl" | "kt" | "kts" | "kql" | "makefile" | "nar" | "nf" | "nu" | "objc" | "ps" | "ps1" | "jade" | "py" | "perl6" | "rb" | "rs" | "shader" | "bash" | "sh" | "zsh" | "console" | "spl" | "styl" | "tf" | "tfvars" | "ts" | "typ" | "cmd" | "vim" | "vimscript" | "vy" | "文言" | "wl" | "yml";
            };
        }, {
            transformers?: {
                regexHighlight?: boolean;
                lineHighlight?: boolean;
                lineFocus?: boolean;
                lineErrorLevel?: boolean;
                lineDiff?: boolean;
            };
            defaultLanguage?: "coffee" | "diff" | "fish" | "move" | "shell" | "turtle" | "swift" | "python" | "markdown" | "kotlin" | "css" | "latex" | "fs" | "json" | "rel" | "mdx" | "md" | "csv" | "html" | "abap" | "actionscript-3" | "ada" | "angular-html" | "angular-ts" | "apache" | "apex" | "apl" | "applescript" | "ara" | "asm" | "astro" | "awk" | "ballerina" | "bat" | "beancount" | "berry" | "bibtex" | "bicep" | "blade" | "c" | "cadence" | "clarity" | "clojure" | "cmake" | "cobol" | "codeql" | "cpp" | "crystal" | "csharp" | "cue" | "cypher" | "d" | "dart" | "dax" | "docker" | "dream-maker" | "elixir" | "elm" | "erb" | "erlang" | "fortran-fixed-form" | "fortran-free-form" | "fsharp" | "gdresource" | "gdscript" | "gdshader" | "gherkin" | "git-commit" | "git-rebase" | "glimmer-js" | "glimmer-ts" | "glsl" | "gnuplot" | "go" | "graphql" | "groovy" | "hack" | "haml" | "handlebars" | "haskell" | "hcl" | "hjson" | "hlsl" | "html-derivative" | "http" | "imba" | "ini" | "java" | "javascript" | "jinja" | "jison" | "json5" | "jsonc" | "jsonl" | "jsonnet" | "jssm" | "jsx" | "julia" | "kusto" | "less" | "liquid" | "lisp" | "logo" | "lua" | "make" | "marko" | "matlab" | "mdc" | "mermaid" | "mojo" | "narrat" | "nextflow" | "nginx" | "nim" | "nix" | "nushell" | "objective-c" | "objective-cpp" | "ocaml" | "pascal" | "perl" | "php" | "plsql" | "postcss" | "powerquery" | "powershell" | "prisma" | "prolog" | "proto" | "pug" | "puppet" | "purescript" | "r" | "raku" | "razor" | "reg" | "riscv" | "rst" | "ruby" | "rust" | "sas" | "sass" | "scala" | "scheme" | "scss" | "shaderlab" | "shellscript" | "shellsession" | "smalltalk" | "solidity" | "sparql" | "splunk" | "sql" | "ssh-config" | "stata" | "stylus" | "svelte" | "system-verilog" | "tasl" | "tcl" | "terraform" | "tex" | "toml" | "tsx" | "twig" | "typescript" | "typst" | "v" | "vb" | "verilog" | "vhdl" | "viml" | "vue" | "vue-html" | "vyper" | "wasm" | "wenyan" | "wgsl" | "wolfram" | "xml" | "xsl" | "yaml" | "zenscript" | "zig" | "batch" | "be" | "cdc" | "clj" | "ql" | "coffeescript" | "c++" | "c#" | "cs" | "cql" | "dockerfile" | "erl" | "f" | "for" | "f77" | "f90" | "f95" | "f03" | "f08" | "f18" | "f#" | "gjs" | "gts" | "gql" | "hbs" | "hs" | "properties" | "js" | "fsl" | "kt" | "kts" | "kql" | "makefile" | "nar" | "nf" | "nu" | "objc" | "ps" | "ps1" | "jade" | "py" | "perl6" | "rb" | "rs" | "shader" | "bash" | "sh" | "zsh" | "console" | "spl" | "styl" | "tf" | "tfvars" | "ts" | "typ" | "cmd" | "vim" | "vimscript" | "vy" | "文言" | "wl" | "yml" | {
                inline?: "coffee" | "diff" | "fish" | "move" | "shell" | "turtle" | "swift" | "python" | "markdown" | "kotlin" | "css" | "latex" | "fs" | "json" | "rel" | "mdx" | "md" | "csv" | "html" | "abap" | "actionscript-3" | "ada" | "angular-html" | "angular-ts" | "apache" | "apex" | "apl" | "applescript" | "ara" | "asm" | "astro" | "awk" | "ballerina" | "bat" | "beancount" | "berry" | "bibtex" | "bicep" | "blade" | "c" | "cadence" | "clarity" | "clojure" | "cmake" | "cobol" | "codeql" | "cpp" | "crystal" | "csharp" | "cue" | "cypher" | "d" | "dart" | "dax" | "docker" | "dream-maker" | "elixir" | "elm" | "erb" | "erlang" | "fortran-fixed-form" | "fortran-free-form" | "fsharp" | "gdresource" | "gdscript" | "gdshader" | "gherkin" | "git-commit" | "git-rebase" | "glimmer-js" | "glimmer-ts" | "glsl" | "gnuplot" | "go" | "graphql" | "groovy" | "hack" | "haml" | "handlebars" | "haskell" | "hcl" | "hjson" | "hlsl" | "html-derivative" | "http" | "imba" | "ini" | "java" | "javascript" | "jinja" | "jison" | "json5" | "jsonc" | "jsonl" | "jsonnet" | "jssm" | "jsx" | "julia" | "kusto" | "less" | "liquid" | "lisp" | "logo" | "lua" | "make" | "marko" | "matlab" | "mdc" | "mermaid" | "mojo" | "narrat" | "nextflow" | "nginx" | "nim" | "nix" | "nushell" | "objective-c" | "objective-cpp" | "ocaml" | "pascal" | "perl" | "php" | "plsql" | "postcss" | "powerquery" | "powershell" | "prisma" | "prolog" | "proto" | "pug" | "puppet" | "purescript" | "r" | "raku" | "razor" | "reg" | "riscv" | "rst" | "ruby" | "rust" | "sas" | "sass" | "scala" | "scheme" | "scss" | "shaderlab" | "shellscript" | "shellsession" | "smalltalk" | "solidity" | "sparql" | "splunk" | "sql" | "ssh-config" | "stata" | "stylus" | "svelte" | "system-verilog" | "tasl" | "tcl" | "terraform" | "tex" | "toml" | "tsx" | "twig" | "typescript" | "typst" | "v" | "vb" | "verilog" | "vhdl" | "viml" | "vue" | "vue-html" | "vyper" | "wasm" | "wenyan" | "wgsl" | "wolfram" | "xml" | "xsl" | "yaml" | "zenscript" | "zig" | "batch" | "be" | "cdc" | "clj" | "ql" | "coffeescript" | "c++" | "c#" | "cs" | "cql" | "dockerfile" | "erl" | "f" | "for" | "f77" | "f90" | "f95" | "f03" | "f08" | "f18" | "f#" | "gjs" | "gts" | "gql" | "hbs" | "hs" | "properties" | "js" | "fsl" | "kt" | "kts" | "kql" | "makefile" | "nar" | "nf" | "nu" | "objc" | "ps" | "ps1" | "jade" | "py" | "perl6" | "rb" | "rs" | "shader" | "bash" | "sh" | "zsh" | "console" | "spl" | "styl" | "tf" | "tfvars" | "ts" | "typ" | "cmd" | "vim" | "vimscript" | "vy" | "文言" | "wl" | "yml";
                block?: "coffee" | "diff" | "fish" | "move" | "shell" | "turtle" | "swift" | "python" | "markdown" | "kotlin" | "css" | "latex" | "fs" | "json" | "rel" | "mdx" | "md" | "csv" | "html" | "abap" | "actionscript-3" | "ada" | "angular-html" | "angular-ts" | "apache" | "apex" | "apl" | "applescript" | "ara" | "asm" | "astro" | "awk" | "ballerina" | "bat" | "beancount" | "berry" | "bibtex" | "bicep" | "blade" | "c" | "cadence" | "clarity" | "clojure" | "cmake" | "cobol" | "codeql" | "cpp" | "crystal" | "csharp" | "cue" | "cypher" | "d" | "dart" | "dax" | "docker" | "dream-maker" | "elixir" | "elm" | "erb" | "erlang" | "fortran-fixed-form" | "fortran-free-form" | "fsharp" | "gdresource" | "gdscript" | "gdshader" | "gherkin" | "git-commit" | "git-rebase" | "glimmer-js" | "glimmer-ts" | "glsl" | "gnuplot" | "go" | "graphql" | "groovy" | "hack" | "haml" | "handlebars" | "haskell" | "hcl" | "hjson" | "hlsl" | "html-derivative" | "http" | "imba" | "ini" | "java" | "javascript" | "jinja" | "jison" | "json5" | "jsonc" | "jsonl" | "jsonnet" | "jssm" | "jsx" | "julia" | "kusto" | "less" | "liquid" | "lisp" | "logo" | "lua" | "make" | "marko" | "matlab" | "mdc" | "mermaid" | "mojo" | "narrat" | "nextflow" | "nginx" | "nim" | "nix" | "nushell" | "objective-c" | "objective-cpp" | "ocaml" | "pascal" | "perl" | "php" | "plsql" | "postcss" | "powerquery" | "powershell" | "prisma" | "prolog" | "proto" | "pug" | "puppet" | "purescript" | "r" | "raku" | "razor" | "reg" | "riscv" | "rst" | "ruby" | "rust" | "sas" | "sass" | "scala" | "scheme" | "scss" | "shaderlab" | "shellscript" | "shellsession" | "smalltalk" | "solidity" | "sparql" | "splunk" | "sql" | "ssh-config" | "stata" | "stylus" | "svelte" | "system-verilog" | "tasl" | "tcl" | "terraform" | "tex" | "toml" | "tsx" | "twig" | "typescript" | "typst" | "v" | "vb" | "verilog" | "vhdl" | "viml" | "vue" | "vue-html" | "vyper" | "wasm" | "wenyan" | "wgsl" | "wolfram" | "xml" | "xsl" | "yaml" | "zenscript" | "zig" | "batch" | "be" | "cdc" | "clj" | "ql" | "coffeescript" | "c++" | "c#" | "cs" | "cql" | "dockerfile" | "erl" | "f" | "for" | "f77" | "f90" | "f95" | "f03" | "f08" | "f18" | "f#" | "gjs" | "gts" | "gql" | "hbs" | "hs" | "properties" | "js" | "fsl" | "kt" | "kts" | "kql" | "makefile" | "nar" | "nf" | "nu" | "objc" | "ps" | "ps1" | "jade" | "py" | "perl6" | "rb" | "rs" | "shader" | "bash" | "sh" | "zsh" | "console" | "spl" | "styl" | "tf" | "tfvars" | "ts" | "typ" | "cmd" | "vim" | "vimscript" | "vy" | "文言" | "wl" | "yml";
            };
        }>>;
    }, "strip", import("zod").ZodTypeAny, {
        editor?: {
            defaultLangauge?: string;
            useVimMode?: boolean;
        };
        theme?: {
            dark?: "andromeeda" | "aurora-x" | "ayu-dark" | "catppuccin-frappe" | "catppuccin-latte" | "catppuccin-macchiato" | "catppuccin-mocha" | "dark-plus" | "dracula" | "dracula-soft" | "github-dark" | "github-dark-dimmed" | "github-light" | "light-plus" | "material-theme" | "material-theme-darker" | "material-theme-lighter" | "material-theme-ocean" | "material-theme-palenight" | "min-dark" | "min-light" | "monokai" | "night-owl" | "nord" | "one-dark-pro" | "poimandres" | "red" | "rose-pine" | "rose-pine-dawn" | "rose-pine-moon" | "slack-dark" | "slack-ochin" | "solarized-dark" | "solarized-light" | "synthwave-84" | "tokyo-night" | "vesper" | "vitesse-black" | "vitesse-dark" | "vitesse-light";
            light?: "andromeeda" | "aurora-x" | "ayu-dark" | "catppuccin-frappe" | "catppuccin-latte" | "catppuccin-macchiato" | "catppuccin-mocha" | "dark-plus" | "dracula" | "dracula-soft" | "github-dark" | "github-dark-dimmed" | "github-light" | "light-plus" | "material-theme" | "material-theme-darker" | "material-theme-lighter" | "material-theme-ocean" | "material-theme-palenight" | "min-dark" | "min-light" | "monokai" | "night-owl" | "nord" | "one-dark-pro" | "poimandres" | "red" | "rose-pine" | "rose-pine-dawn" | "rose-pine-moon" | "slack-dark" | "slack-ochin" | "solarized-dark" | "solarized-light" | "synthwave-84" | "tokyo-night" | "vesper" | "vitesse-black" | "vitesse-dark" | "vitesse-light";
        };
        syntaxHighlighting?: {
            transformers?: {
                regexHighlight?: boolean;
                lineHighlight?: boolean;
                lineFocus?: boolean;
                lineErrorLevel?: boolean;
                lineDiff?: boolean;
            };
            defaultLanguage?: {
                inline?: "coffee" | "diff" | "fish" | "move" | "shell" | "turtle" | "swift" | "python" | "markdown" | "kotlin" | "css" | "latex" | "fs" | "json" | "rel" | "mdx" | "md" | "csv" | "html" | "abap" | "actionscript-3" | "ada" | "angular-html" | "angular-ts" | "apache" | "apex" | "apl" | "applescript" | "ara" | "asm" | "astro" | "awk" | "ballerina" | "bat" | "beancount" | "berry" | "bibtex" | "bicep" | "blade" | "c" | "cadence" | "clarity" | "clojure" | "cmake" | "cobol" | "codeql" | "cpp" | "crystal" | "csharp" | "cue" | "cypher" | "d" | "dart" | "dax" | "docker" | "dream-maker" | "elixir" | "elm" | "erb" | "erlang" | "fortran-fixed-form" | "fortran-free-form" | "fsharp" | "gdresource" | "gdscript" | "gdshader" | "gherkin" | "git-commit" | "git-rebase" | "glimmer-js" | "glimmer-ts" | "glsl" | "gnuplot" | "go" | "graphql" | "groovy" | "hack" | "haml" | "handlebars" | "haskell" | "hcl" | "hjson" | "hlsl" | "html-derivative" | "http" | "imba" | "ini" | "java" | "javascript" | "jinja" | "jison" | "json5" | "jsonc" | "jsonl" | "jsonnet" | "jssm" | "jsx" | "julia" | "kusto" | "less" | "liquid" | "lisp" | "logo" | "lua" | "make" | "marko" | "matlab" | "mdc" | "mermaid" | "mojo" | "narrat" | "nextflow" | "nginx" | "nim" | "nix" | "nushell" | "objective-c" | "objective-cpp" | "ocaml" | "pascal" | "perl" | "php" | "plsql" | "postcss" | "powerquery" | "powershell" | "prisma" | "prolog" | "proto" | "pug" | "puppet" | "purescript" | "r" | "raku" | "razor" | "reg" | "riscv" | "rst" | "ruby" | "rust" | "sas" | "sass" | "scala" | "scheme" | "scss" | "shaderlab" | "shellscript" | "shellsession" | "smalltalk" | "solidity" | "sparql" | "splunk" | "sql" | "ssh-config" | "stata" | "stylus" | "svelte" | "system-verilog" | "tasl" | "tcl" | "terraform" | "tex" | "toml" | "tsx" | "twig" | "typescript" | "typst" | "v" | "vb" | "verilog" | "vhdl" | "viml" | "vue" | "vue-html" | "vyper" | "wasm" | "wenyan" | "wgsl" | "wolfram" | "xml" | "xsl" | "yaml" | "zenscript" | "zig" | "batch" | "be" | "cdc" | "clj" | "ql" | "coffeescript" | "c++" | "c#" | "cs" | "cql" | "dockerfile" | "erl" | "f" | "for" | "f77" | "f90" | "f95" | "f03" | "f08" | "f18" | "f#" | "gjs" | "gts" | "gql" | "hbs" | "hs" | "properties" | "js" | "fsl" | "kt" | "kts" | "kql" | "makefile" | "nar" | "nf" | "nu" | "objc" | "ps" | "ps1" | "jade" | "py" | "perl6" | "rb" | "rs" | "shader" | "bash" | "sh" | "zsh" | "console" | "spl" | "styl" | "tf" | "tfvars" | "ts" | "typ" | "cmd" | "vim" | "vimscript" | "vy" | "文言" | "wl" | "yml";
                block?: "coffee" | "diff" | "fish" | "move" | "shell" | "turtle" | "swift" | "python" | "markdown" | "kotlin" | "css" | "latex" | "fs" | "json" | "rel" | "mdx" | "md" | "csv" | "html" | "abap" | "actionscript-3" | "ada" | "angular-html" | "angular-ts" | "apache" | "apex" | "apl" | "applescript" | "ara" | "asm" | "astro" | "awk" | "ballerina" | "bat" | "beancount" | "berry" | "bibtex" | "bicep" | "blade" | "c" | "cadence" | "clarity" | "clojure" | "cmake" | "cobol" | "codeql" | "cpp" | "crystal" | "csharp" | "cue" | "cypher" | "d" | "dart" | "dax" | "docker" | "dream-maker" | "elixir" | "elm" | "erb" | "erlang" | "fortran-fixed-form" | "fortran-free-form" | "fsharp" | "gdresource" | "gdscript" | "gdshader" | "gherkin" | "git-commit" | "git-rebase" | "glimmer-js" | "glimmer-ts" | "glsl" | "gnuplot" | "go" | "graphql" | "groovy" | "hack" | "haml" | "handlebars" | "haskell" | "hcl" | "hjson" | "hlsl" | "html-derivative" | "http" | "imba" | "ini" | "java" | "javascript" | "jinja" | "jison" | "json5" | "jsonc" | "jsonl" | "jsonnet" | "jssm" | "jsx" | "julia" | "kusto" | "less" | "liquid" | "lisp" | "logo" | "lua" | "make" | "marko" | "matlab" | "mdc" | "mermaid" | "mojo" | "narrat" | "nextflow" | "nginx" | "nim" | "nix" | "nushell" | "objective-c" | "objective-cpp" | "ocaml" | "pascal" | "perl" | "php" | "plsql" | "postcss" | "powerquery" | "powershell" | "prisma" | "prolog" | "proto" | "pug" | "puppet" | "purescript" | "r" | "raku" | "razor" | "reg" | "riscv" | "rst" | "ruby" | "rust" | "sas" | "sass" | "scala" | "scheme" | "scss" | "shaderlab" | "shellscript" | "shellsession" | "smalltalk" | "solidity" | "sparql" | "splunk" | "sql" | "ssh-config" | "stata" | "stylus" | "svelte" | "system-verilog" | "tasl" | "tcl" | "terraform" | "tex" | "toml" | "tsx" | "twig" | "typescript" | "typst" | "v" | "vb" | "verilog" | "vhdl" | "viml" | "vue" | "vue-html" | "vyper" | "wasm" | "wenyan" | "wgsl" | "wolfram" | "xml" | "xsl" | "yaml" | "zenscript" | "zig" | "batch" | "be" | "cdc" | "clj" | "ql" | "coffeescript" | "c++" | "c#" | "cs" | "cql" | "dockerfile" | "erl" | "f" | "for" | "f77" | "f90" | "f95" | "f03" | "f08" | "f18" | "f#" | "gjs" | "gts" | "gql" | "hbs" | "hs" | "properties" | "js" | "fsl" | "kt" | "kts" | "kql" | "makefile" | "nar" | "nf" | "nu" | "objc" | "ps" | "ps1" | "jade" | "py" | "perl6" | "rb" | "rs" | "shader" | "bash" | "sh" | "zsh" | "console" | "spl" | "styl" | "tf" | "tfvars" | "ts" | "typ" | "cmd" | "vim" | "vimscript" | "vy" | "文言" | "wl" | "yml";
            };
        };
    }, {
        editor?: {
            defaultLangauge?: string;
            useVimMode?: boolean;
        };
        theme?: {
            dark?: "andromeeda" | "aurora-x" | "ayu-dark" | "catppuccin-frappe" | "catppuccin-latte" | "catppuccin-macchiato" | "catppuccin-mocha" | "dark-plus" | "dracula" | "dracula-soft" | "github-dark" | "github-dark-dimmed" | "github-light" | "light-plus" | "material-theme" | "material-theme-darker" | "material-theme-lighter" | "material-theme-ocean" | "material-theme-palenight" | "min-dark" | "min-light" | "monokai" | "night-owl" | "nord" | "one-dark-pro" | "poimandres" | "red" | "rose-pine" | "rose-pine-dawn" | "rose-pine-moon" | "slack-dark" | "slack-ochin" | "solarized-dark" | "solarized-light" | "synthwave-84" | "tokyo-night" | "vesper" | "vitesse-black" | "vitesse-dark" | "vitesse-light";
            light?: "andromeeda" | "aurora-x" | "ayu-dark" | "catppuccin-frappe" | "catppuccin-latte" | "catppuccin-macchiato" | "catppuccin-mocha" | "dark-plus" | "dracula" | "dracula-soft" | "github-dark" | "github-dark-dimmed" | "github-light" | "light-plus" | "material-theme" | "material-theme-darker" | "material-theme-lighter" | "material-theme-ocean" | "material-theme-palenight" | "min-dark" | "min-light" | "monokai" | "night-owl" | "nord" | "one-dark-pro" | "poimandres" | "red" | "rose-pine" | "rose-pine-dawn" | "rose-pine-moon" | "slack-dark" | "slack-ochin" | "solarized-dark" | "solarized-light" | "synthwave-84" | "tokyo-night" | "vesper" | "vitesse-black" | "vitesse-dark" | "vitesse-light";
        };
        syntaxHighlighting?: {
            transformers?: {
                regexHighlight?: boolean;
                lineHighlight?: boolean;
                lineFocus?: boolean;
                lineErrorLevel?: boolean;
                lineDiff?: boolean;
            };
            defaultLanguage?: "coffee" | "diff" | "fish" | "move" | "shell" | "turtle" | "swift" | "python" | "markdown" | "kotlin" | "css" | "latex" | "fs" | "json" | "rel" | "mdx" | "md" | "csv" | "html" | "abap" | "actionscript-3" | "ada" | "angular-html" | "angular-ts" | "apache" | "apex" | "apl" | "applescript" | "ara" | "asm" | "astro" | "awk" | "ballerina" | "bat" | "beancount" | "berry" | "bibtex" | "bicep" | "blade" | "c" | "cadence" | "clarity" | "clojure" | "cmake" | "cobol" | "codeql" | "cpp" | "crystal" | "csharp" | "cue" | "cypher" | "d" | "dart" | "dax" | "docker" | "dream-maker" | "elixir" | "elm" | "erb" | "erlang" | "fortran-fixed-form" | "fortran-free-form" | "fsharp" | "gdresource" | "gdscript" | "gdshader" | "gherkin" | "git-commit" | "git-rebase" | "glimmer-js" | "glimmer-ts" | "glsl" | "gnuplot" | "go" | "graphql" | "groovy" | "hack" | "haml" | "handlebars" | "haskell" | "hcl" | "hjson" | "hlsl" | "html-derivative" | "http" | "imba" | "ini" | "java" | "javascript" | "jinja" | "jison" | "json5" | "jsonc" | "jsonl" | "jsonnet" | "jssm" | "jsx" | "julia" | "kusto" | "less" | "liquid" | "lisp" | "logo" | "lua" | "make" | "marko" | "matlab" | "mdc" | "mermaid" | "mojo" | "narrat" | "nextflow" | "nginx" | "nim" | "nix" | "nushell" | "objective-c" | "objective-cpp" | "ocaml" | "pascal" | "perl" | "php" | "plsql" | "postcss" | "powerquery" | "powershell" | "prisma" | "prolog" | "proto" | "pug" | "puppet" | "purescript" | "r" | "raku" | "razor" | "reg" | "riscv" | "rst" | "ruby" | "rust" | "sas" | "sass" | "scala" | "scheme" | "scss" | "shaderlab" | "shellscript" | "shellsession" | "smalltalk" | "solidity" | "sparql" | "splunk" | "sql" | "ssh-config" | "stata" | "stylus" | "svelte" | "system-verilog" | "tasl" | "tcl" | "terraform" | "tex" | "toml" | "tsx" | "twig" | "typescript" | "typst" | "v" | "vb" | "verilog" | "vhdl" | "viml" | "vue" | "vue-html" | "vyper" | "wasm" | "wenyan" | "wgsl" | "wolfram" | "xml" | "xsl" | "yaml" | "zenscript" | "zig" | "batch" | "be" | "cdc" | "clj" | "ql" | "coffeescript" | "c++" | "c#" | "cs" | "cql" | "dockerfile" | "erl" | "f" | "for" | "f77" | "f90" | "f95" | "f03" | "f08" | "f18" | "f#" | "gjs" | "gts" | "gql" | "hbs" | "hs" | "properties" | "js" | "fsl" | "kt" | "kts" | "kql" | "makefile" | "nar" | "nf" | "nu" | "objc" | "ps" | "ps1" | "jade" | "py" | "perl6" | "rb" | "rs" | "shader" | "bash" | "sh" | "zsh" | "console" | "spl" | "styl" | "tf" | "tfvars" | "ts" | "typ" | "cmd" | "vim" | "vimscript" | "vy" | "文言" | "wl" | "yml" | {
                inline?: "coffee" | "diff" | "fish" | "move" | "shell" | "turtle" | "swift" | "python" | "markdown" | "kotlin" | "css" | "latex" | "fs" | "json" | "rel" | "mdx" | "md" | "csv" | "html" | "abap" | "actionscript-3" | "ada" | "angular-html" | "angular-ts" | "apache" | "apex" | "apl" | "applescript" | "ara" | "asm" | "astro" | "awk" | "ballerina" | "bat" | "beancount" | "berry" | "bibtex" | "bicep" | "blade" | "c" | "cadence" | "clarity" | "clojure" | "cmake" | "cobol" | "codeql" | "cpp" | "crystal" | "csharp" | "cue" | "cypher" | "d" | "dart" | "dax" | "docker" | "dream-maker" | "elixir" | "elm" | "erb" | "erlang" | "fortran-fixed-form" | "fortran-free-form" | "fsharp" | "gdresource" | "gdscript" | "gdshader" | "gherkin" | "git-commit" | "git-rebase" | "glimmer-js" | "glimmer-ts" | "glsl" | "gnuplot" | "go" | "graphql" | "groovy" | "hack" | "haml" | "handlebars" | "haskell" | "hcl" | "hjson" | "hlsl" | "html-derivative" | "http" | "imba" | "ini" | "java" | "javascript" | "jinja" | "jison" | "json5" | "jsonc" | "jsonl" | "jsonnet" | "jssm" | "jsx" | "julia" | "kusto" | "less" | "liquid" | "lisp" | "logo" | "lua" | "make" | "marko" | "matlab" | "mdc" | "mermaid" | "mojo" | "narrat" | "nextflow" | "nginx" | "nim" | "nix" | "nushell" | "objective-c" | "objective-cpp" | "ocaml" | "pascal" | "perl" | "php" | "plsql" | "postcss" | "powerquery" | "powershell" | "prisma" | "prolog" | "proto" | "pug" | "puppet" | "purescript" | "r" | "raku" | "razor" | "reg" | "riscv" | "rst" | "ruby" | "rust" | "sas" | "sass" | "scala" | "scheme" | "scss" | "shaderlab" | "shellscript" | "shellsession" | "smalltalk" | "solidity" | "sparql" | "splunk" | "sql" | "ssh-config" | "stata" | "stylus" | "svelte" | "system-verilog" | "tasl" | "tcl" | "terraform" | "tex" | "toml" | "tsx" | "twig" | "typescript" | "typst" | "v" | "vb" | "verilog" | "vhdl" | "viml" | "vue" | "vue-html" | "vyper" | "wasm" | "wenyan" | "wgsl" | "wolfram" | "xml" | "xsl" | "yaml" | "zenscript" | "zig" | "batch" | "be" | "cdc" | "clj" | "ql" | "coffeescript" | "c++" | "c#" | "cs" | "cql" | "dockerfile" | "erl" | "f" | "for" | "f77" | "f90" | "f95" | "f03" | "f08" | "f18" | "f#" | "gjs" | "gts" | "gql" | "hbs" | "hs" | "properties" | "js" | "fsl" | "kt" | "kts" | "kql" | "makefile" | "nar" | "nf" | "nu" | "objc" | "ps" | "ps1" | "jade" | "py" | "perl6" | "rb" | "rs" | "shader" | "bash" | "sh" | "zsh" | "console" | "spl" | "styl" | "tf" | "tfvars" | "ts" | "typ" | "cmd" | "vim" | "vimscript" | "vy" | "文言" | "wl" | "yml";
                block?: "coffee" | "diff" | "fish" | "move" | "shell" | "turtle" | "swift" | "python" | "markdown" | "kotlin" | "css" | "latex" | "fs" | "json" | "rel" | "mdx" | "md" | "csv" | "html" | "abap" | "actionscript-3" | "ada" | "angular-html" | "angular-ts" | "apache" | "apex" | "apl" | "applescript" | "ara" | "asm" | "astro" | "awk" | "ballerina" | "bat" | "beancount" | "berry" | "bibtex" | "bicep" | "blade" | "c" | "cadence" | "clarity" | "clojure" | "cmake" | "cobol" | "codeql" | "cpp" | "crystal" | "csharp" | "cue" | "cypher" | "d" | "dart" | "dax" | "docker" | "dream-maker" | "elixir" | "elm" | "erb" | "erlang" | "fortran-fixed-form" | "fortran-free-form" | "fsharp" | "gdresource" | "gdscript" | "gdshader" | "gherkin" | "git-commit" | "git-rebase" | "glimmer-js" | "glimmer-ts" | "glsl" | "gnuplot" | "go" | "graphql" | "groovy" | "hack" | "haml" | "handlebars" | "haskell" | "hcl" | "hjson" | "hlsl" | "html-derivative" | "http" | "imba" | "ini" | "java" | "javascript" | "jinja" | "jison" | "json5" | "jsonc" | "jsonl" | "jsonnet" | "jssm" | "jsx" | "julia" | "kusto" | "less" | "liquid" | "lisp" | "logo" | "lua" | "make" | "marko" | "matlab" | "mdc" | "mermaid" | "mojo" | "narrat" | "nextflow" | "nginx" | "nim" | "nix" | "nushell" | "objective-c" | "objective-cpp" | "ocaml" | "pascal" | "perl" | "php" | "plsql" | "postcss" | "powerquery" | "powershell" | "prisma" | "prolog" | "proto" | "pug" | "puppet" | "purescript" | "r" | "raku" | "razor" | "reg" | "riscv" | "rst" | "ruby" | "rust" | "sas" | "sass" | "scala" | "scheme" | "scss" | "shaderlab" | "shellscript" | "shellsession" | "smalltalk" | "solidity" | "sparql" | "splunk" | "sql" | "ssh-config" | "stata" | "stylus" | "svelte" | "system-verilog" | "tasl" | "tcl" | "terraform" | "tex" | "toml" | "tsx" | "twig" | "typescript" | "typst" | "v" | "vb" | "verilog" | "vhdl" | "viml" | "vue" | "vue-html" | "vyper" | "wasm" | "wenyan" | "wgsl" | "wolfram" | "xml" | "xsl" | "yaml" | "zenscript" | "zig" | "batch" | "be" | "cdc" | "clj" | "ql" | "coffeescript" | "c++" | "c#" | "cs" | "cql" | "dockerfile" | "erl" | "f" | "for" | "f77" | "f90" | "f95" | "f03" | "f08" | "f18" | "f#" | "gjs" | "gts" | "gql" | "hbs" | "hs" | "properties" | "js" | "fsl" | "kt" | "kts" | "kql" | "makefile" | "nar" | "nf" | "nu" | "objc" | "ps" | "ps1" | "jade" | "py" | "perl6" | "rb" | "rs" | "shader" | "bash" | "sh" | "zsh" | "console" | "spl" | "styl" | "tf" | "tfvars" | "ts" | "typ" | "cmd" | "vim" | "vimscript" | "vy" | "文言" | "wl" | "yml";
            };
        };
    }>>>;
    database: import("zod").ZodOptional<import("zod").ZodDefault<import("zod").ZodObject<{
        storeFormatted: import("zod").ZodDefault<import("zod").ZodBoolean>;
        removeIfNotPresentInFs: import("zod").ZodDefault<import("zod").ZodBoolean>;
    }, "strip", import("zod").ZodTypeAny, {
        storeFormatted?: boolean;
        removeIfNotPresentInFs?: boolean;
    }, {
        storeFormatted?: boolean;
        removeIfNotPresentInFs?: boolean;
    }>>>;
    navigation: import("zod").ZodOptional<import("zod").ZodDefault<import("zod").ZodObject<{
        navbarBreakpoint: import("zod").ZodDefault<import("zod").ZodObject<{
            full: import("zod").ZodDefault<import("zod").ZodNumber>;
            minimal: import("zod").ZodDefault<import("zod").ZodNumber>;
        }, "strip", import("zod").ZodTypeAny, {
            full?: number;
            minimal?: number;
        }, {
            full?: number;
            minimal?: number;
        }>>;
        maxResultLength: import("zod").ZodDefault<import("zod").ZodObject<{
            categories: import("zod").ZodDefault<import("zod").ZodNumber>;
            equations: import("zod").ZodDefault<import("zod").ZodNumber>;
            snippets: import("zod").ZodDefault<import("zod").ZodNumber>;
            searchAll: import("zod").ZodDefault<import("zod").ZodNumber>;
        }, "strip", import("zod").ZodTypeAny, {
            snippets?: number;
            searchAll?: number;
            equations?: number;
            categories?: number;
        }, {
            snippets?: number;
            searchAll?: number;
            equations?: number;
            categories?: number;
        }>>;
        navbarLinks: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodUnion<[import("zod").ZodString, import("zod").ZodObject<{
            label: import("zod").ZodString;
            icon: import("zod").ZodOptional<import("zod").ZodEffects<import("zod").ZodString, string, string>>;
            href: import("zod").ZodOptional<import("zod").ZodString>;
            onClick: import("zod").ZodOptional<import("zod").ZodFunction<import("zod").ZodTuple<[], import("zod").ZodUnknown>, import("zod").ZodUnknown>>;
        }, "strip", import("zod").ZodTypeAny, {
            label?: string;
            href?: string;
            icon?: string;
            onClick?: (...args: unknown[]) => unknown;
        }, {
            label?: string;
            href?: string;
            icon?: string;
            onClick?: (...args: unknown[]) => unknown;
        }>]>, "many">>;
        sidebarLinks: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodUnion<[import("zod").ZodObject<{
            icon: import("zod").ZodEffects<import("zod").ZodString, string, string>;
            href: import("zod").ZodOptional<import("zod").ZodString>;
            label: import("zod").ZodOptional<import("zod").ZodString>;
            Icon: import("zod").ZodOptional<import("zod").ZodFunction<import("zod").ZodTuple<[], import("zod").ZodUnknown>, import("zod").ZodUnknown>>;
            onClick: import("zod").ZodOptional<import("zod").ZodFunction<import("zod").ZodTuple<[], import("zod").ZodUnknown>, import("zod").ZodUnknown>>;
        }, "strip", import("zod").ZodTypeAny, {
            label?: string;
            href?: string;
            icon?: string;
            Icon?: (...args: unknown[]) => unknown;
            onClick?: (...args: unknown[]) => unknown;
        }, {
            label?: string;
            href?: string;
            icon?: string;
            Icon?: (...args: unknown[]) => unknown;
            onClick?: (...args: unknown[]) => unknown;
        }>, import("zod").ZodString]>, "many">>;
    }, "strip", import("zod").ZodTypeAny, {
        navbarBreakpoint?: {
            full?: number;
            minimal?: number;
        };
        maxResultLength?: {
            snippets?: number;
            searchAll?: number;
            equations?: number;
            categories?: number;
        };
        navbarLinks?: (string | {
            label?: string;
            href?: string;
            icon?: string;
            onClick?: (...args: unknown[]) => unknown;
        })[];
        sidebarLinks?: (string | {
            label?: string;
            href?: string;
            icon?: string;
            Icon?: (...args: unknown[]) => unknown;
            onClick?: (...args: unknown[]) => unknown;
        })[];
    }, {
        navbarBreakpoint?: {
            full?: number;
            minimal?: number;
        };
        maxResultLength?: {
            snippets?: number;
            searchAll?: number;
            equations?: number;
            categories?: number;
        };
        navbarLinks?: (string | {
            label?: string;
            href?: string;
            icon?: string;
            onClick?: (...args: unknown[]) => unknown;
        })[];
        sidebarLinks?: (string | {
            label?: string;
            href?: string;
            icon?: string;
            Icon?: (...args: unknown[]) => unknown;
            onClick?: (...args: unknown[]) => unknown;
        })[];
    }>>>;
    terminal: import("zod").ZodOptional<import("zod").ZodDefault<import("zod").ZodObject<{
        logLevel: import("zod").ZodDefault<import("zod").ZodUnion<[import("zod").ZodLiteral<"debug">, import("zod").ZodLiteral<"verbose">, import("zod").ZodLiteral<"info">, import("zod").ZodLiteral<"none">]>>;
    }, "strip", import("zod").ZodTypeAny, {
        logLevel?: "info" | "none" | "debug" | "verbose";
    }, {
        logLevel?: "info" | "none" | "debug" | "verbose";
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
                baseUrl?: string;
                wsUrl?: string;
            }, {
                baseUrl?: string;
                wsUrl?: string;
            }>>;
        }, "strip", import("zod").ZodTypeAny, {
            collaborative?: boolean;
            lite?: boolean;
            serverUrls?: {
                baseUrl?: string;
                wsUrl?: string;
            };
        }, {
            collaborative?: boolean;
            lite?: boolean;
            serverUrls?: {
                baseUrl?: string;
                wsUrl?: string;
            };
        }>>;
        nbConvert: import("zod").ZodDefault<import("zod").ZodObject<{
            nbconvertPath: import("zod").ZodOptional<import("zod").ZodString>;
            conversionTimeout: import("zod").ZodDefault<import("zod").ZodNumber>;
            customConversionFunction: import("zod").ZodOptional<import("zod").ZodObject<{
                pdf: import("zod").ZodOptional<import("zod").ZodFunction<import("zod").ZodTuple<[import("zod").ZodString, import("zod").ZodString], import("zod").ZodUnknown>, import("zod").ZodString>>;
            }, "strip", import("zod").ZodTypeAny, {
                pdf?: (args_0: string, args_1: string, ...args: unknown[]) => string;
            }, {
                pdf?: (args_0: string, args_1: string, ...args: unknown[]) => string;
            }>>;
            execute: import("zod").ZodDefault<import("zod").ZodBoolean>;
            nbConvertTemplate: import("zod").ZodDefault<import("zod").ZodUnion<[import("zod").ZodLiteral<"lab">, import("zod").ZodLiteral<"classic">, import("zod").ZodLiteral<"reveal">, import("zod").ZodString]>>;
            notebookOutputDir: import("zod").ZodDefault<import("zod").ZodString>;
        }, "strip", import("zod").ZodTypeAny, {
            nbconvertPath?: string;
            conversionTimeout?: number;
            customConversionFunction?: {
                pdf?: (args_0: string, args_1: string, ...args: unknown[]) => string;
            };
            execute?: boolean;
            nbConvertTemplate?: string;
            notebookOutputDir?: string;
        }, {
            nbconvertPath?: string;
            conversionTimeout?: number;
            customConversionFunction?: {
                pdf?: (args_0: string, args_1: string, ...args: unknown[]) => string;
            };
            execute?: boolean;
            nbConvertTemplate?: string;
            notebookOutputDir?: string;
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
                name?: string;
                module?: string | Record<string, string>;
                version?: string;
            }, {
                name?: string;
                module?: string | Record<string, string>;
                version?: string;
            }>, "many">>;
            externalIPyWidgets: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodObject<Omit<{
                module: import("zod").ZodUnion<[import("zod").ZodString, import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodString>]>;
                name: import("zod").ZodString;
                version: import("zod").ZodString;
            }, "module">, "strip", import("zod").ZodTypeAny, {
                name?: string;
                version?: string;
            }, {
                name?: string;
                version?: string;
            }>, "many">>;
            nbgrader: import("zod").ZodDefault<import("zod").ZodBoolean>;
            readOnly: import("zod").ZodDefault<import("zod").ZodBoolean>;
        }, "strip", import("zod").ZodTypeAny, {
            height?: string;
            readOnly?: boolean;
            maxHeight?: string;
            cellMetadataPanel?: boolean;
            cellSidebarMargin?: number;
            bundledIPyWidgets?: {
                name?: string;
                module?: string | Record<string, string>;
                version?: string;
            }[];
            externalIPyWidgets?: {
                name?: string;
                version?: string;
            }[];
            nbgrader?: boolean;
        }, {
            height?: string;
            readOnly?: boolean;
            maxHeight?: string;
            cellMetadataPanel?: boolean;
            cellSidebarMargin?: number;
            bundledIPyWidgets?: {
                name?: string;
                module?: string | Record<string, string>;
                version?: string;
            }[];
            externalIPyWidgets?: {
                name?: string;
                version?: string;
            }[];
            nbgrader?: boolean;
        }>>;
        cellInputWrappers: import("zod").ZodDefault<import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodEffects<import("zod").ZodUnion<[import("zod").ZodString, import("zod").ZodObject<{
            prefix: import("zod").ZodString;
            suffix: import("zod").ZodString;
        }, "strip", import("zod").ZodTypeAny, {
            prefix?: string;
            suffix?: string;
        }, {
            prefix?: string;
            suffix?: string;
        }>]>, {
            prefix?: string;
            suffix?: string;
        }, string | {
            prefix?: string;
            suffix?: string;
        }>>>;
    }, "strip", import("zod").ZodTypeAny, {
        execute?: boolean;
        environment?: string;
        syntaxHighlightTheme?: string;
        jupyterToken?: string;
        jupyterPort?: number;
        initiallyFoldCells?: boolean;
        kernel?: string;
        jupyterReactProps?: {
            collaborative?: boolean;
            lite?: boolean;
            serverUrls?: {
                baseUrl?: string;
                wsUrl?: string;
            };
        };
        nbConvert?: {
            nbconvertPath?: string;
            conversionTimeout?: number;
            customConversionFunction?: {
                pdf?: (args_0: string, args_1: string, ...args: unknown[]) => string;
            };
            execute?: boolean;
            nbConvertTemplate?: string;
            notebookOutputDir?: string;
        };
        jupyterNotebookProps?: {
            height?: string;
            readOnly?: boolean;
            maxHeight?: string;
            cellMetadataPanel?: boolean;
            cellSidebarMargin?: number;
            bundledIPyWidgets?: {
                name?: string;
                module?: string | Record<string, string>;
                version?: string;
            }[];
            externalIPyWidgets?: {
                name?: string;
                version?: string;
            }[];
            nbgrader?: boolean;
        };
        cellInputWrappers?: Record<string, {
            prefix?: string;
            suffix?: string;
        }>;
    }, {
        execute?: boolean;
        environment?: string;
        syntaxHighlightTheme?: string;
        jupyterToken?: string;
        jupyterPort?: number;
        initiallyFoldCells?: boolean;
        kernel?: string;
        jupyterReactProps?: {
            collaborative?: boolean;
            lite?: boolean;
            serverUrls?: {
                baseUrl?: string;
                wsUrl?: string;
            };
        };
        nbConvert?: {
            nbconvertPath?: string;
            conversionTimeout?: number;
            customConversionFunction?: {
                pdf?: (args_0: string, args_1: string, ...args: unknown[]) => string;
            };
            execute?: boolean;
            nbConvertTemplate?: string;
            notebookOutputDir?: string;
        };
        jupyterNotebookProps?: {
            height?: string;
            readOnly?: boolean;
            maxHeight?: string;
            cellMetadataPanel?: boolean;
            cellSidebarMargin?: number;
            bundledIPyWidgets?: {
                name?: string;
                module?: string | Record<string, string>;
                version?: string;
            }[];
            externalIPyWidgets?: {
                name?: string;
                version?: string;
            }[];
            nbgrader?: boolean;
        };
        cellInputWrappers?: Record<string, string | {
            prefix?: string;
            suffix?: string;
        }>;
    }>>>;
    math: import("zod").ZodOptional<import("zod").ZodDefault<import("zod").ZodObject<{
        latexPackages: import("zod").ZodDefault<import("zod").ZodUnion<[import("zod").ZodArray<import("zod").ZodString, "many">, import("zod").ZodLiteral<"all">]>>;
        latexFontUrl: import("zod").ZodEffects<import("zod").ZodString, string, string> | import("zod").ZodEffects<import("zod").ZodOptional<import("zod").ZodString>, string, string>;
        constants: import("zod").ZodDefault<import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodNumber>>;
    }, "strip", import("zod").ZodTypeAny, {
        latexPackages?: string[] | "all";
        latexFontUrl?: string;
        constants?: Record<string, number>;
    }, {
        latexPackages?: string[] | "all";
        latexFontUrl?: string;
        constants?: Record<string, number>;
    }>>>;
    UI: import("zod").ZodOptional<import("zod").ZodDefault<import("zod").ZodObject<{
        table: import("zod").ZodDefault<import("zod").ZodObject<{
            maxHeight: import("zod").ZodEffects<import("zod").ZodDefault<import("zod").ZodUnion<[import("zod").ZodString, import("zod").ZodNumber]>>, string, string | number>;
        }, "strip", import("zod").ZodTypeAny, {
            maxHeight?: string;
        }, {
            maxHeight?: string | number;
        }>>;
        text: import("zod").ZodDefault<import("zod").ZodObject<{
            blockQuoteItalic: import("zod").ZodDefault<import("zod").ZodBoolean>;
            fontPaths: import("zod").ZodDefault<import("zod").ZodUnion<[import("zod").ZodArray<import("zod").ZodObject<{
                path: import("zod").ZodString;
                weight: import("zod").ZodUnion<[import("zod").ZodLiteral<"100">, import("zod").ZodLiteral<"200">, import("zod").ZodLiteral<"300">, import("zod").ZodLiteral<"400">, import("zod").ZodLiteral<"500">, import("zod").ZodLiteral<"600">, import("zod").ZodLiteral<"700">, import("zod").ZodLiteral<"800">, import("zod").ZodLiteral<"900">]>;
                style: import("zod").ZodUnion<[import("zod").ZodLiteral<"italic">, import("zod").ZodLiteral<"bold">, import("zod").ZodLiteral<"normal">]>;
            }, "strip", import("zod").ZodTypeAny, {
                weight?: "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900";
                path?: string;
                style?: "bold" | "italic" | "normal";
            }, {
                weight?: "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900";
                path?: string;
                style?: "bold" | "italic" | "normal";
            }>, "many">, import("zod").ZodLiteral<"default">]>>;
        }, "strip", import("zod").ZodTypeAny, {
            blockQuoteItalic?: boolean;
            fontPaths?: "default" | {
                weight?: "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900";
                path?: string;
                style?: "bold" | "italic" | "normal";
            }[];
        }, {
            blockQuoteItalic?: boolean;
            fontPaths?: "default" | {
                weight?: "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900";
                path?: string;
                style?: "bold" | "italic" | "normal";
            }[];
        }>>;
        media: import("zod").ZodDefault<import("zod").ZodObject<{
            imageMap: import("zod").ZodDefault<import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodEffects<import("zod").ZodString, string, string> | import("zod").ZodEffects<import("zod").ZodOptional<import("zod").ZodString>, string, string>>>;
            includeDefaultImageMap: import("zod").ZodDefault<import("zod").ZodBoolean>;
            imageRemoteTest: import("zod").ZodEffects<import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodUnion<[import("zod").ZodType<RegExp, import("zod").ZodTypeDef, RegExp>, import("zod").ZodString]>, "many">>, string[], (string | RegExp)[]>;
        }, "strip", import("zod").ZodTypeAny, {
            imageMap?: Record<string, string>;
            includeDefaultImageMap?: boolean;
            imageRemoteTest?: string[];
        }, {
            imageMap?: Record<string, string>;
            includeDefaultImageMap?: boolean;
            imageRemoteTest?: (string | RegExp)[];
        }>>;
        colors: import("zod").ZodDefault<import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodEffects<import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodUnion<[import("zod").ZodObject<{
            dark: import("zod").ZodEffects<import("zod").ZodOptional<import("zod").ZodString>, string, string>;
            light: import("zod").ZodEffects<import("zod").ZodOptional<import("zod").ZodString>, string, string>;
        }, "strip", import("zod").ZodTypeAny, {
            dark?: string;
            light?: string;
        }, {
            dark?: string;
            light?: string;
        }>, import("zod").ZodEffects<import("zod").ZodString, string, string>]>>>, {
            dark?: string;
            light?: string;
        }, string | {
            dark?: string;
            light?: string;
        }>>>;
        theme: import("zod").ZodDefault<import("zod").ZodUnion<[import("zod").ZodLiteral<"blue">, import("zod").ZodLiteral<"gray">, import("zod").ZodLiteral<"green">, import("zod").ZodLiteral<"neutral">, import("zod").ZodLiteral<"orange">, import("zod").ZodLiteral<"red">, import("zod").ZodLiteral<"rose">, import("zod").ZodLiteral<"slate">, import("zod").ZodLiteral<"stone">, import("zod").ZodLiteral<"violet">, import("zod").ZodLiteral<"yellow">, import("zod").ZodLiteral<"zinc">, import("zod").ZodLiteral<"ulld">]>>;
        autoApplyMdxTitles: import("zod").ZodDefault<import("zod").ZodBoolean>;
    }, "strip", import("zod").ZodTypeAny, {
        table?: {
            maxHeight?: string;
        };
        text?: {
            blockQuoteItalic?: boolean;
            fontPaths?: "default" | {
                weight?: "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900";
                path?: string;
                style?: "bold" | "italic" | "normal";
            }[];
        };
        media?: {
            imageMap?: Record<string, string>;
            includeDefaultImageMap?: boolean;
            imageRemoteTest?: string[];
        };
        theme?: "ulld" | "red" | "orange" | "yellow" | "green" | "blue" | "rose" | "slate" | "gray" | "stone" | "zinc" | "neutral" | "violet";
        colors?: Record<string, {
            dark?: string;
            light?: string;
        }>;
        autoApplyMdxTitles?: boolean;
    }, {
        table?: {
            maxHeight?: string | number;
        };
        text?: {
            blockQuoteItalic?: boolean;
            fontPaths?: "default" | {
                weight?: "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900";
                path?: string;
                style?: "bold" | "italic" | "normal";
            }[];
        };
        media?: {
            imageMap?: Record<string, string>;
            includeDefaultImageMap?: boolean;
            imageRemoteTest?: (string | RegExp)[];
        };
        theme?: "ulld" | "red" | "orange" | "yellow" | "green" | "blue" | "rose" | "slate" | "gray" | "stone" | "zinc" | "neutral" | "violet";
        colors?: Record<string, string | {
            dark?: string;
            light?: string;
        }>;
        autoApplyMdxTitles?: boolean;
    }>>>;
    slots: import("zod").ZodOptional<import("zod").ZodDefault<import("zod").ZodObject<Record<keyof import("../../developer/slotMapRootType.js").SlotMap, import("zod").ZodTypeAny>, "strip", import("zod").ZodTypeAny, {
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
    fsRoot: import("zod").ZodEffects<import("zod").ZodString, string, string>;
    build: import("zod").ZodOptional<import("zod").ZodDefault<import("zod").ZodObject<{
        database: import("zod").ZodDefault<import("zod").ZodEffects<import("zod").ZodDefault<import("zod").ZodObject<{
            type: import("zod").ZodDefault<import("zod").ZodEnum<["postgres", "sqlite"]>>;
            postgres: import("zod").ZodEffects<import("zod").ZodEffects<import("zod").ZodDefault<import("zod").ZodObject<{
                port: import("zod").ZodDefault<import("zod").ZodNumber>;
                dbName: import("zod").ZodDefault<import("zod").ZodString>;
                connectionURI: import("zod").ZodDefault<import("zod").ZodString>;
            }, "strip", import("zod").ZodTypeAny, {
                port?: number;
                dbName?: string;
                connectionURI?: string;
            }, {
                port?: number;
                dbName?: string;
                connectionURI?: string;
            }>>, {
                port?: number;
                dbName?: string;
                connectionURI?: string;
            }, {
                port?: number;
                dbName?: string;
                connectionURI?: string;
            }>, {
                connectionURI: string;
                port?: undefined;
                dbName?: undefined;
            } | {
                port: number;
                dbName: string;
                connectionURI?: undefined;
            }, {
                port?: number;
                dbName?: string;
                connectionURI?: string;
            }>;
            prioritize: import("zod").ZodDefault<import("zod").ZodUnion<[import("zod").ZodLiteral<"speed">, import("zod").ZodLiteral<"size">]>>;
        }, "strip", import("zod").ZodTypeAny, {
            type?: "postgres" | "sqlite";
            postgres?: {
                connectionURI: string;
                port?: undefined;
                dbName?: undefined;
            } | {
                port: number;
                dbName: string;
                connectionURI?: undefined;
            };
            prioritize?: "size" | "speed";
        }, {
            type?: "postgres" | "sqlite";
            postgres?: {
                port?: number;
                dbName?: string;
                connectionURI?: string;
            };
            prioritize?: "size" | "speed";
        }>>, {
            type?: "postgres" | "sqlite";
            postgres?: {
                connectionURI: string;
                port?: undefined;
                dbName?: undefined;
            } | {
                port: number;
                dbName: string;
                connectionURI?: undefined;
            };
            prioritize?: "size" | "speed";
        }, {
            type?: "postgres" | "sqlite";
            postgres?: {
                port?: number;
                dbName?: string;
                connectionURI?: string;
            };
            prioritize?: "size" | "speed";
        }>>;
        additionalUserContent: import("zod").ZodDefault<import("zod").ZodObject<{
            css: import("zod").ZodOptional<import("zod").ZodString>;
            favicon: import("zod").ZodOptional<import("zod").ZodEffects<import("zod").ZodString, string, string>>;
            logo: import("zod").ZodOptional<import("zod").ZodEffects<import("zod").ZodString, string, string>>;
        }, "strip", import("zod").ZodTypeAny, {
            css?: string;
            logo?: string;
            favicon?: string;
        }, {
            css?: string;
            logo?: string;
            favicon?: string;
        }>>;
    }, "strip", import("zod").ZodTypeAny, {
        database?: {
            type?: "postgres" | "sqlite";
            postgres?: {
                connectionURI: string;
                port?: undefined;
                dbName?: undefined;
            } | {
                port: number;
                dbName: string;
                connectionURI?: undefined;
            };
            prioritize?: "size" | "speed";
        };
        additionalUserContent?: {
            css?: string;
            logo?: string;
            favicon?: string;
        };
    }, {
        database?: {
            type?: "postgres" | "sqlite";
            postgres?: {
                port?: number;
                dbName?: string;
                connectionURI?: string;
            };
            prioritize?: "size" | "speed";
        };
        additionalUserContent?: {
            css?: string;
            logo?: string;
            favicon?: string;
        };
    }>>>;
    autoTag: import("zod").ZodOptional<import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodObject<{
        path: import("zod").ZodString;
        tag: import("zod").ZodString;
    }, "strip", import("zod").ZodTypeAny, {
        tag?: string;
        path?: string;
    }, {
        tag?: string;
        path?: string;
    }>, "many">>>;
    autoTopic: import("zod").ZodOptional<import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodObject<{
        path: import("zod").ZodString;
        topic: import("zod").ZodString;
    }, "strip", import("zod").ZodTypeAny, {
        path?: string;
        topic?: string;
    }, {
        path?: string;
        topic?: string;
    }>, "many">>>;
    autoSubject: import("zod").ZodOptional<import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodObject<{
        path: import("zod").ZodString;
        subject: import("zod").ZodString;
    }, "strip", import("zod").ZodTypeAny, {
        path?: string;
        subject?: string;
    }, {
        path?: string;
        subject?: string;
    }>, "many">>>;
    alwaysPreferFs: import("zod").ZodOptional<import("zod").ZodDefault<import("zod").ZodBoolean>>;
    ignoreFilepaths: import("zod").ZodOptional<import("zod").ZodEffects<import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodUnion<[import("zod").ZodType<RegExp, import("zod").ZodTypeDef, RegExp>, import("zod").ZodString, import("zod").ZodObject<{
        original: import("zod").ZodString;
        regex: import("zod").ZodEffects<import("zod").ZodUnion<[import("zod").ZodString, import("zod").ZodType<RegExp, import("zod").ZodTypeDef, RegExp>]>, RegExp, string | RegExp>;
    }, "strip", import("zod").ZodTypeAny, {
        regex?: RegExp;
        original?: string;
    }, {
        regex?: string | RegExp;
        original?: string;
    }>]>, "many">>, string[], (string | RegExp | {
        regex?: string | RegExp;
        original?: string;
    })[]>>;
    tempDir: import("zod").ZodOptional<import("zod").ZodEffects<import("zod").ZodDefault<import("zod").ZodString>, string, string>>;
    generatedDir: import("zod").ZodOptional<import("zod").ZodEffects<import("zod").ZodDefault<import("zod").ZodString>, string, string>>;
    ignorePreferFsExtensions: import("zod").ZodOptional<import("zod").ZodDefault<import("zod").ZodEffects<import("zod").ZodArray<import("zod").ZodUnion<[import("zod").ZodType<RegExp, import("zod").ZodTypeDef, RegExp>, import("zod").ZodString, import("zod").ZodObject<{
        original: import("zod").ZodString;
        regex: import("zod").ZodEffects<import("zod").ZodUnion<[import("zod").ZodString, import("zod").ZodType<RegExp, import("zod").ZodTypeDef, RegExp>]>, RegExp, string | RegExp>;
    }, "strip", import("zod").ZodTypeAny, {
        regex?: RegExp;
        original?: string;
    }, {
        regex?: string | RegExp;
        original?: string;
    }>]>, "many">, string[], (string | RegExp | {
        regex?: string | RegExp;
        original?: string;
    })[]>>>;
    fileTypePriority: import("zod").ZodOptional<import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodLiteral<".mdx">, import("zod").ZodLiteral<".md">, import("zod").ZodLiteral<".ipynb">]>, import("zod").ZodUnion<[import("zod").ZodLiteral<".csv">, import("zod").ZodLiteral<".tsv">, import("zod").ZodLiteral<".excel">, import("zod").ZodLiteral<".numpy">, import("zod").ZodLiteral<".html">, import("zod").ZodLiteral<".pickle">, import("zod").ZodLiteral<".db">, import("zod").ZodLiteral<".sql">, import("zod").ZodLiteral<".pdf">, import("zod").ZodLiteral<".json">, import("zod").ZodLiteral<".tex">, import("zod").ZodLiteral<".hdf5">]>]>, "many">>>;
    noteTypes: import("zod").ZodOptional<import("zod").ZodEffects<import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodEffects<import("zod").ZodObject<{
        label: import("zod").ZodString;
        icon: import("zod").ZodDefault<import("zod").ZodEffects<import("zod").ZodString, string, string>>;
        UI: import("zod").ZodDefault<import("zod").ZodDefault<import("zod").ZodObject<{
            styles: import("zod").ZodDefault<import("zod").ZodObject<{
                dark: import("zod").ZodDefault<import("zod").ZodObject<{
                    bg: import("zod").ZodOptional<import("zod").ZodString>;
                    fg: import("zod").ZodOptional<import("zod").ZodString>;
                }, "strip", import("zod").ZodTypeAny, {
                    bg?: string;
                    fg?: string;
                }, {
                    bg?: string;
                    fg?: string;
                }>>;
                light: import("zod").ZodDefault<import("zod").ZodObject<{
                    bg: import("zod").ZodOptional<import("zod").ZodString>;
                    fg: import("zod").ZodOptional<import("zod").ZodString>;
                }, "strip", import("zod").ZodTypeAny, {
                    bg?: string;
                    fg?: string;
                }, {
                    bg?: string;
                    fg?: string;
                }>>;
            }, "strip", import("zod").ZodTypeAny, {
                dark?: {
                    bg?: string;
                    fg?: string;
                };
                light?: {
                    bg?: string;
                    fg?: string;
                };
            }, {
                dark?: {
                    bg?: string;
                    fg?: string;
                };
                light?: {
                    bg?: string;
                    fg?: string;
                };
            }>>;
        }, "strip", import("zod").ZodTypeAny, {
            styles?: {
                dark?: {
                    bg?: string;
                    fg?: string;
                };
                light?: {
                    bg?: string;
                    fg?: string;
                };
            };
        }, {
            styles?: {
                dark?: {
                    bg?: string;
                    fg?: string;
                };
                light?: {
                    bg?: string;
                    fg?: string;
                };
            };
        }>>>;
        fs: import("zod").ZodEffects<import("zod").ZodString, string, string>;
        url: import("zod").ZodOptional<import("zod").ZodEffects<import("zod").ZodString, string, string>>;
        id: import("zod").ZodOptional<import("zod").ZodString>;
        docType: import("zod").ZodOptional<import("zod").ZodEffects<import("zod").ZodString, string, string>>;
        filePathPattern: import("zod").ZodOptional<import("zod").ZodString>;
        matchWeight: import("zod").ZodDefault<import("zod").ZodNumber>;
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
        label?: string;
        icon?: string;
        UI?: {
            styles?: {
                dark?: {
                    bg?: string;
                    fg?: string;
                };
                light?: {
                    bg?: string;
                    fg?: string;
                };
            };
        };
        fs?: string;
        url?: string;
        id?: string;
        docType?: string;
        filePathPattern?: string;
        matchWeight?: number;
        urlQuery?: Record<string, string | number | string[] | number[]>;
        keywords?: string[];
        topicLabel?: string;
        subjectLabel?: string;
        autoTag?: string[];
        autoTopic?: string[];
        autoSubject?: string[];
        inSidebar?: boolean;
        inNavbar?: boolean;
    }, {
        label?: string;
        icon?: string;
        UI?: {
            styles?: {
                dark?: {
                    bg?: string;
                    fg?: string;
                };
                light?: {
                    bg?: string;
                    fg?: string;
                };
            };
        };
        fs?: string;
        url?: string;
        id?: string;
        docType?: string;
        filePathPattern?: string;
        matchWeight?: number;
        urlQuery?: Record<string, string | number | string[] | number[]>;
        keywords?: string[];
        topicLabel?: string;
        subjectLabel?: string;
        autoTag?: string[];
        autoTopic?: string[];
        autoSubject?: string[];
        inSidebar?: boolean;
        inNavbar?: boolean;
    }>, {
        docType: string;
        id: string;
        url: string;
        label?: string;
        icon?: string;
        UI?: {
            styles?: {
                dark?: {
                    bg?: string;
                    fg?: string;
                };
                light?: {
                    bg?: string;
                    fg?: string;
                };
            };
        };
        fs?: string;
        filePathPattern?: string;
        matchWeight?: number;
        urlQuery?: Record<string, string | number | string[] | number[]>;
        keywords?: string[];
        topicLabel?: string;
        subjectLabel?: string;
        autoTag?: string[];
        autoTopic?: string[];
        autoSubject?: string[];
        inSidebar?: boolean;
        inNavbar?: boolean;
    }, {
        label?: string;
        icon?: string;
        UI?: {
            styles?: {
                dark?: {
                    bg?: string;
                    fg?: string;
                };
                light?: {
                    bg?: string;
                    fg?: string;
                };
            };
        };
        fs?: string;
        url?: string;
        id?: string;
        docType?: string;
        filePathPattern?: string;
        matchWeight?: number;
        urlQuery?: Record<string, string | number | string[] | number[]>;
        keywords?: string[];
        topicLabel?: string;
        subjectLabel?: string;
        autoTag?: string[];
        autoTopic?: string[];
        autoSubject?: string[];
        inSidebar?: boolean;
        inNavbar?: boolean;
    }>, "many">>, {
        docType: string;
        id: string;
        url: string;
        label?: string;
        icon?: string;
        UI?: {
            styles?: {
                dark?: {
                    bg?: string;
                    fg?: string;
                };
                light?: {
                    bg?: string;
                    fg?: string;
                };
            };
        };
        fs?: string;
        filePathPattern?: string;
        matchWeight?: number;
        urlQuery?: Record<string, string | number | string[] | number[]>;
        keywords?: string[];
        topicLabel?: string;
        subjectLabel?: string;
        autoTag?: string[];
        autoTopic?: string[];
        autoSubject?: string[];
        inSidebar?: boolean;
        inNavbar?: boolean;
    }[], {
        label?: string;
        icon?: string;
        UI?: {
            styles?: {
                dark?: {
                    bg?: string;
                    fg?: string;
                };
                light?: {
                    bg?: string;
                    fg?: string;
                };
            };
        };
        fs?: string;
        url?: string;
        id?: string;
        docType?: string;
        filePathPattern?: string;
        matchWeight?: number;
        urlQuery?: Record<string, string | number | string[] | number[]>;
        keywords?: string[];
        topicLabel?: string;
        subjectLabel?: string;
        autoTag?: string[];
        autoTopic?: string[];
        autoSubject?: string[];
        inSidebar?: boolean;
        inNavbar?: boolean;
    }[]>>;
    bibPath: import("zod").ZodOptional<import("zod").ZodEffects<import("zod").ZodDefault<import("zod").ZodString>, string, string>>;
    cslPath: import("zod").ZodOptional<import("zod").ZodEffects<import("zod").ZodOptional<import("zod").ZodString>, string, string>>;
    dateHandling: import("zod").ZodOptional<import("zod").ZodDefault<import("zod").ZodObject<{
        enableAdvancedFormat: import("zod").ZodDefault<import("zod").ZodBoolean>;
        format: import("zod").ZodEffects<import("zod").ZodDefault<import("zod").ZodUnion<[import("zod").ZodString, import("zod").ZodObject<{
            short: import("zod").ZodDefault<import("zod").ZodString>;
            long: import("zod").ZodDefault<import("zod").ZodString>;
            withTime: import("zod").ZodDefault<import("zod").ZodString>;
            timeOnly: import("zod").ZodDefault<import("zod").ZodString>;
        }, "strip", import("zod").ZodTypeAny, {
            short?: string;
            long?: string;
            withTime?: string;
            timeOnly?: string;
        }, {
            short?: string;
            long?: string;
            withTime?: string;
            timeOnly?: string;
        }>]>>, {
            short: string;
            long: string;
            withTime: string;
            timeOnly: string;
        }, string | {
            short?: string;
            long?: string;
            withTime?: string;
            timeOnly?: string;
        }>;
        defaultTimeDisplayType: import("zod").ZodDefault<import("zod").ZodUnion<[import("zod").ZodLiteral<"analog">, import("zod").ZodLiteral<"summarized">, import("zod").ZodLiteral<"descriptive">]>>;
        defaultTimeZone: import("zod").ZodOptional<import("zod").ZodString>;
    }, "strip", import("zod").ZodTypeAny, {
        enableAdvancedFormat?: boolean;
        format?: {
            short: string;
            long: string;
            withTime: string;
            timeOnly: string;
        };
        defaultTimeDisplayType?: "summarized" | "analog" | "descriptive";
        defaultTimeZone?: string;
    }, {
        enableAdvancedFormat?: boolean;
        format?: string | {
            short?: string;
            long?: string;
            withTime?: string;
            timeOnly?: string;
        };
        defaultTimeDisplayType?: "summarized" | "analog" | "descriptive";
        defaultTimeZone?: string;
    }>>>;
    linkAliases: import("zod").ZodOptional<import("zod").ZodDefault<import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodString>>>;
    plotting: import("zod").ZodOptional<import("zod").ZodDefault<import("zod").ZodObject<{
        plotColorList: import("zod").ZodDefault<import("zod").ZodUnion<[import("zod").ZodArray<import("zod").ZodString, "many">, import("zod").ZodObject<{
            dark: import("zod").ZodArray<import("zod").ZodString, "many">;
            light: import("zod").ZodArray<import("zod").ZodString, "many">;
        }, "strip", import("zod").ZodTypeAny, {
            dark?: string[];
            light?: string[];
        }, {
            dark?: string[];
            light?: string[];
        }>]>>;
        plotColorCycleMethod: import("zod").ZodDefault<import("zod").ZodUnion<[import("zod").ZodLiteral<"inOrder">, import("zod").ZodLiteral<"random">]>>;
    }, "strip", import("zod").ZodTypeAny, {
        plotColorList?: string[] | {
            dark?: string[];
            light?: string[];
        };
        plotColorCycleMethod?: "inOrder" | "random";
    }, {
        plotColorList?: string[] | {
            dark?: string[];
            light?: string[];
        };
        plotColorCycleMethod?: "inOrder" | "random";
    }>>>;
    credentials: import("zod").ZodOptional<import("zod").ZodDefault<import("zod").ZodObject<{
        googleServiceAccountJsonPath: import("zod").ZodOptional<import("zod").ZodString>;
    }, "strip", import("zod").ZodTypeAny, {
        googleServiceAccountJsonPath?: string;
    }, {
        googleServiceAccountJsonPath?: string;
    }>>>;
    performance: import("zod").ZodOptional<import("zod").ZodDefault<import("zod").ZodObject<{
        latexParsingDebounceTimeout: import("zod").ZodDefault<import("zod").ZodNumber>;
        mdxParsingDebounceTimeout: import("zod").ZodDefault<import("zod").ZodNumber>;
    }, "strip", import("zod").ZodTypeAny, {
        latexParsingDebounceTimeout?: number;
        mdxParsingDebounceTimeout?: number;
    }, {
        latexParsingDebounceTimeout?: number;
        mdxParsingDebounceTimeout?: number;
    }>>>;
    meta: import("zod").ZodOptional<import("zod").ZodDefault<import("zod").ZodObject<{
        title: import("zod").ZodDefault<import("zod").ZodString>;
        desc: import("zod").ZodOptional<import("zod").ZodString>;
    }, "strip", import("zod").ZodTypeAny, {
        title?: string;
        desc?: string;
    }, {
        title?: string;
        desc?: string;
    }>>>;
    plugins: import("zod").ZodOptional<import("zod").ZodEffects<import("zod").ZodDefault<import("zod").ZodUnion<[import("zod").ZodObject<{
        name: import("zod").ZodString;
        version: import("zod").ZodDefault<import("zod").ZodString>;
        parserIndex: import("zod").ZodDefault<import("zod").ZodNumber>;
    }, "strip", import("zod").ZodTypeAny, {
        name?: string;
        version?: string;
        parserIndex?: number;
    }, {
        name?: string;
        version?: string;
        parserIndex?: number;
    }>, import("zod").ZodArray<import("zod").ZodObject<{
        name: import("zod").ZodString;
        version: import("zod").ZodDefault<import("zod").ZodString>;
        parserIndex: import("zod").ZodDefault<import("zod").ZodNumber>;
    }, "strip", import("zod").ZodTypeAny, {
        name?: string;
        version?: string;
        parserIndex?: number;
    }, {
        name?: string;
        version?: string;
        parserIndex?: number;
    }>, "many">, import("zod").ZodString, import("zod").ZodArray<import("zod").ZodString, "many">]>>, {
        name?: string;
        version?: string;
        parserIndex?: number;
    }[], string | string[] | {
        name?: string;
        version?: string;
        parserIndex?: number;
    } | {
        name?: string;
        version?: string;
        parserIndex?: number;
    }[]>>;
}, "strip", import("zod").ZodTypeAny, {
    code?: {
        editor?: {
            defaultLangauge?: string;
            useVimMode?: boolean;
        };
        theme?: {
            dark?: "andromeeda" | "aurora-x" | "ayu-dark" | "catppuccin-frappe" | "catppuccin-latte" | "catppuccin-macchiato" | "catppuccin-mocha" | "dark-plus" | "dracula" | "dracula-soft" | "github-dark" | "github-dark-dimmed" | "github-light" | "light-plus" | "material-theme" | "material-theme-darker" | "material-theme-lighter" | "material-theme-ocean" | "material-theme-palenight" | "min-dark" | "min-light" | "monokai" | "night-owl" | "nord" | "one-dark-pro" | "poimandres" | "red" | "rose-pine" | "rose-pine-dawn" | "rose-pine-moon" | "slack-dark" | "slack-ochin" | "solarized-dark" | "solarized-light" | "synthwave-84" | "tokyo-night" | "vesper" | "vitesse-black" | "vitesse-dark" | "vitesse-light";
            light?: "andromeeda" | "aurora-x" | "ayu-dark" | "catppuccin-frappe" | "catppuccin-latte" | "catppuccin-macchiato" | "catppuccin-mocha" | "dark-plus" | "dracula" | "dracula-soft" | "github-dark" | "github-dark-dimmed" | "github-light" | "light-plus" | "material-theme" | "material-theme-darker" | "material-theme-lighter" | "material-theme-ocean" | "material-theme-palenight" | "min-dark" | "min-light" | "monokai" | "night-owl" | "nord" | "one-dark-pro" | "poimandres" | "red" | "rose-pine" | "rose-pine-dawn" | "rose-pine-moon" | "slack-dark" | "slack-ochin" | "solarized-dark" | "solarized-light" | "synthwave-84" | "tokyo-night" | "vesper" | "vitesse-black" | "vitesse-dark" | "vitesse-light";
        };
        syntaxHighlighting?: {
            transformers?: {
                regexHighlight?: boolean;
                lineHighlight?: boolean;
                lineFocus?: boolean;
                lineErrorLevel?: boolean;
                lineDiff?: boolean;
            };
            defaultLanguage?: {
                inline?: "coffee" | "diff" | "fish" | "move" | "shell" | "turtle" | "swift" | "python" | "markdown" | "kotlin" | "css" | "latex" | "fs" | "json" | "rel" | "mdx" | "md" | "csv" | "html" | "abap" | "actionscript-3" | "ada" | "angular-html" | "angular-ts" | "apache" | "apex" | "apl" | "applescript" | "ara" | "asm" | "astro" | "awk" | "ballerina" | "bat" | "beancount" | "berry" | "bibtex" | "bicep" | "blade" | "c" | "cadence" | "clarity" | "clojure" | "cmake" | "cobol" | "codeql" | "cpp" | "crystal" | "csharp" | "cue" | "cypher" | "d" | "dart" | "dax" | "docker" | "dream-maker" | "elixir" | "elm" | "erb" | "erlang" | "fortran-fixed-form" | "fortran-free-form" | "fsharp" | "gdresource" | "gdscript" | "gdshader" | "gherkin" | "git-commit" | "git-rebase" | "glimmer-js" | "glimmer-ts" | "glsl" | "gnuplot" | "go" | "graphql" | "groovy" | "hack" | "haml" | "handlebars" | "haskell" | "hcl" | "hjson" | "hlsl" | "html-derivative" | "http" | "imba" | "ini" | "java" | "javascript" | "jinja" | "jison" | "json5" | "jsonc" | "jsonl" | "jsonnet" | "jssm" | "jsx" | "julia" | "kusto" | "less" | "liquid" | "lisp" | "logo" | "lua" | "make" | "marko" | "matlab" | "mdc" | "mermaid" | "mojo" | "narrat" | "nextflow" | "nginx" | "nim" | "nix" | "nushell" | "objective-c" | "objective-cpp" | "ocaml" | "pascal" | "perl" | "php" | "plsql" | "postcss" | "powerquery" | "powershell" | "prisma" | "prolog" | "proto" | "pug" | "puppet" | "purescript" | "r" | "raku" | "razor" | "reg" | "riscv" | "rst" | "ruby" | "rust" | "sas" | "sass" | "scala" | "scheme" | "scss" | "shaderlab" | "shellscript" | "shellsession" | "smalltalk" | "solidity" | "sparql" | "splunk" | "sql" | "ssh-config" | "stata" | "stylus" | "svelte" | "system-verilog" | "tasl" | "tcl" | "terraform" | "tex" | "toml" | "tsx" | "twig" | "typescript" | "typst" | "v" | "vb" | "verilog" | "vhdl" | "viml" | "vue" | "vue-html" | "vyper" | "wasm" | "wenyan" | "wgsl" | "wolfram" | "xml" | "xsl" | "yaml" | "zenscript" | "zig" | "batch" | "be" | "cdc" | "clj" | "ql" | "coffeescript" | "c++" | "c#" | "cs" | "cql" | "dockerfile" | "erl" | "f" | "for" | "f77" | "f90" | "f95" | "f03" | "f08" | "f18" | "f#" | "gjs" | "gts" | "gql" | "hbs" | "hs" | "properties" | "js" | "fsl" | "kt" | "kts" | "kql" | "makefile" | "nar" | "nf" | "nu" | "objc" | "ps" | "ps1" | "jade" | "py" | "perl6" | "rb" | "rs" | "shader" | "bash" | "sh" | "zsh" | "console" | "spl" | "styl" | "tf" | "tfvars" | "ts" | "typ" | "cmd" | "vim" | "vimscript" | "vy" | "文言" | "wl" | "yml";
                block?: "coffee" | "diff" | "fish" | "move" | "shell" | "turtle" | "swift" | "python" | "markdown" | "kotlin" | "css" | "latex" | "fs" | "json" | "rel" | "mdx" | "md" | "csv" | "html" | "abap" | "actionscript-3" | "ada" | "angular-html" | "angular-ts" | "apache" | "apex" | "apl" | "applescript" | "ara" | "asm" | "astro" | "awk" | "ballerina" | "bat" | "beancount" | "berry" | "bibtex" | "bicep" | "blade" | "c" | "cadence" | "clarity" | "clojure" | "cmake" | "cobol" | "codeql" | "cpp" | "crystal" | "csharp" | "cue" | "cypher" | "d" | "dart" | "dax" | "docker" | "dream-maker" | "elixir" | "elm" | "erb" | "erlang" | "fortran-fixed-form" | "fortran-free-form" | "fsharp" | "gdresource" | "gdscript" | "gdshader" | "gherkin" | "git-commit" | "git-rebase" | "glimmer-js" | "glimmer-ts" | "glsl" | "gnuplot" | "go" | "graphql" | "groovy" | "hack" | "haml" | "handlebars" | "haskell" | "hcl" | "hjson" | "hlsl" | "html-derivative" | "http" | "imba" | "ini" | "java" | "javascript" | "jinja" | "jison" | "json5" | "jsonc" | "jsonl" | "jsonnet" | "jssm" | "jsx" | "julia" | "kusto" | "less" | "liquid" | "lisp" | "logo" | "lua" | "make" | "marko" | "matlab" | "mdc" | "mermaid" | "mojo" | "narrat" | "nextflow" | "nginx" | "nim" | "nix" | "nushell" | "objective-c" | "objective-cpp" | "ocaml" | "pascal" | "perl" | "php" | "plsql" | "postcss" | "powerquery" | "powershell" | "prisma" | "prolog" | "proto" | "pug" | "puppet" | "purescript" | "r" | "raku" | "razor" | "reg" | "riscv" | "rst" | "ruby" | "rust" | "sas" | "sass" | "scala" | "scheme" | "scss" | "shaderlab" | "shellscript" | "shellsession" | "smalltalk" | "solidity" | "sparql" | "splunk" | "sql" | "ssh-config" | "stata" | "stylus" | "svelte" | "system-verilog" | "tasl" | "tcl" | "terraform" | "tex" | "toml" | "tsx" | "twig" | "typescript" | "typst" | "v" | "vb" | "verilog" | "vhdl" | "viml" | "vue" | "vue-html" | "vyper" | "wasm" | "wenyan" | "wgsl" | "wolfram" | "xml" | "xsl" | "yaml" | "zenscript" | "zig" | "batch" | "be" | "cdc" | "clj" | "ql" | "coffeescript" | "c++" | "c#" | "cs" | "cql" | "dockerfile" | "erl" | "f" | "for" | "f77" | "f90" | "f95" | "f03" | "f08" | "f18" | "f#" | "gjs" | "gts" | "gql" | "hbs" | "hs" | "properties" | "js" | "fsl" | "kt" | "kts" | "kql" | "makefile" | "nar" | "nf" | "nu" | "objc" | "ps" | "ps1" | "jade" | "py" | "perl6" | "rb" | "rs" | "shader" | "bash" | "sh" | "zsh" | "console" | "spl" | "styl" | "tf" | "tfvars" | "ts" | "typ" | "cmd" | "vim" | "vimscript" | "vy" | "文言" | "wl" | "yml";
            };
        };
    };
    database?: {
        storeFormatted?: boolean;
        removeIfNotPresentInFs?: boolean;
    };
    navigation?: {
        navbarBreakpoint?: {
            full?: number;
            minimal?: number;
        };
        maxResultLength?: {
            snippets?: number;
            searchAll?: number;
            equations?: number;
            categories?: number;
        };
        navbarLinks?: (string | {
            label?: string;
            href?: string;
            icon?: string;
            onClick?: (...args: unknown[]) => unknown;
        })[];
        sidebarLinks?: (string | {
            label?: string;
            href?: string;
            icon?: string;
            Icon?: (...args: unknown[]) => unknown;
            onClick?: (...args: unknown[]) => unknown;
        })[];
    };
    terminal?: {
        logLevel?: "info" | "none" | "debug" | "verbose";
    };
    jupyter?: {
        execute?: boolean;
        environment?: string;
        syntaxHighlightTheme?: string;
        jupyterToken?: string;
        jupyterPort?: number;
        initiallyFoldCells?: boolean;
        kernel?: string;
        jupyterReactProps?: {
            collaborative?: boolean;
            lite?: boolean;
            serverUrls?: {
                baseUrl?: string;
                wsUrl?: string;
            };
        };
        nbConvert?: {
            nbconvertPath?: string;
            conversionTimeout?: number;
            customConversionFunction?: {
                pdf?: (args_0: string, args_1: string, ...args: unknown[]) => string;
            };
            execute?: boolean;
            nbConvertTemplate?: string;
            notebookOutputDir?: string;
        };
        jupyterNotebookProps?: {
            height?: string;
            readOnly?: boolean;
            maxHeight?: string;
            cellMetadataPanel?: boolean;
            cellSidebarMargin?: number;
            bundledIPyWidgets?: {
                name?: string;
                module?: string | Record<string, string>;
                version?: string;
            }[];
            externalIPyWidgets?: {
                name?: string;
                version?: string;
            }[];
            nbgrader?: boolean;
        };
        cellInputWrappers?: Record<string, {
            prefix?: string;
            suffix?: string;
        }>;
    };
    math?: {
        latexPackages?: string[] | "all";
        latexFontUrl?: string;
        constants?: Record<string, number>;
    };
    UI?: {
        table?: {
            maxHeight?: string;
        };
        text?: {
            blockQuoteItalic?: boolean;
            fontPaths?: "default" | {
                weight?: "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900";
                path?: string;
                style?: "bold" | "italic" | "normal";
            }[];
        };
        media?: {
            imageMap?: Record<string, string>;
            includeDefaultImageMap?: boolean;
            imageRemoteTest?: string[];
        };
        theme?: "ulld" | "red" | "orange" | "yellow" | "green" | "blue" | "rose" | "slate" | "gray" | "stone" | "zinc" | "neutral" | "violet";
        colors?: Record<string, {
            dark?: string;
            light?: string;
        }>;
        autoApplyMdxTitles?: boolean;
    };
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
    };
    fsRoot?: string;
    build?: {
        database?: {
            type?: "postgres" | "sqlite";
            postgres?: {
                connectionURI: string;
                port?: undefined;
                dbName?: undefined;
            } | {
                port: number;
                dbName: string;
                connectionURI?: undefined;
            };
            prioritize?: "size" | "speed";
        };
        additionalUserContent?: {
            css?: string;
            logo?: string;
            favicon?: string;
        };
    };
    autoTag?: {
        tag?: string;
        path?: string;
    }[];
    autoTopic?: {
        path?: string;
        topic?: string;
    }[];
    autoSubject?: {
        path?: string;
        subject?: string;
    }[];
    alwaysPreferFs?: boolean;
    ignoreFilepaths?: string[];
    tempDir?: string;
    generatedDir?: string;
    ignorePreferFsExtensions?: string[];
    fileTypePriority?: (".mdx" | ".ipynb" | ".csv" | ".tsv" | ".excel" | ".numpy" | ".html" | ".pickle" | ".db" | ".sql" | ".pdf" | ".json" | ".tex" | ".hdf5" | ".md")[];
    noteTypes?: {
        docType: string;
        id: string;
        url: string;
        label?: string;
        icon?: string;
        UI?: {
            styles?: {
                dark?: {
                    bg?: string;
                    fg?: string;
                };
                light?: {
                    bg?: string;
                    fg?: string;
                };
            };
        };
        fs?: string;
        filePathPattern?: string;
        matchWeight?: number;
        urlQuery?: Record<string, string | number | string[] | number[]>;
        keywords?: string[];
        topicLabel?: string;
        subjectLabel?: string;
        autoTag?: string[];
        autoTopic?: string[];
        autoSubject?: string[];
        inSidebar?: boolean;
        inNavbar?: boolean;
    }[];
    bibPath?: string;
    cslPath?: string;
    dateHandling?: {
        enableAdvancedFormat?: boolean;
        format?: {
            short: string;
            long: string;
            withTime: string;
            timeOnly: string;
        };
        defaultTimeDisplayType?: "summarized" | "analog" | "descriptive";
        defaultTimeZone?: string;
    };
    linkAliases?: Record<string, string>;
    plotting?: {
        plotColorList?: string[] | {
            dark?: string[];
            light?: string[];
        };
        plotColorCycleMethod?: "inOrder" | "random";
    };
    credentials?: {
        googleServiceAccountJsonPath?: string;
    };
    performance?: {
        latexParsingDebounceTimeout?: number;
        mdxParsingDebounceTimeout?: number;
    };
    meta?: {
        title?: string;
        desc?: string;
    };
    plugins?: {
        name?: string;
        version?: string;
        parserIndex?: number;
    }[];
}, {
    code?: {
        editor?: {
            defaultLangauge?: string;
            useVimMode?: boolean;
        };
        theme?: {
            dark?: "andromeeda" | "aurora-x" | "ayu-dark" | "catppuccin-frappe" | "catppuccin-latte" | "catppuccin-macchiato" | "catppuccin-mocha" | "dark-plus" | "dracula" | "dracula-soft" | "github-dark" | "github-dark-dimmed" | "github-light" | "light-plus" | "material-theme" | "material-theme-darker" | "material-theme-lighter" | "material-theme-ocean" | "material-theme-palenight" | "min-dark" | "min-light" | "monokai" | "night-owl" | "nord" | "one-dark-pro" | "poimandres" | "red" | "rose-pine" | "rose-pine-dawn" | "rose-pine-moon" | "slack-dark" | "slack-ochin" | "solarized-dark" | "solarized-light" | "synthwave-84" | "tokyo-night" | "vesper" | "vitesse-black" | "vitesse-dark" | "vitesse-light";
            light?: "andromeeda" | "aurora-x" | "ayu-dark" | "catppuccin-frappe" | "catppuccin-latte" | "catppuccin-macchiato" | "catppuccin-mocha" | "dark-plus" | "dracula" | "dracula-soft" | "github-dark" | "github-dark-dimmed" | "github-light" | "light-plus" | "material-theme" | "material-theme-darker" | "material-theme-lighter" | "material-theme-ocean" | "material-theme-palenight" | "min-dark" | "min-light" | "monokai" | "night-owl" | "nord" | "one-dark-pro" | "poimandres" | "red" | "rose-pine" | "rose-pine-dawn" | "rose-pine-moon" | "slack-dark" | "slack-ochin" | "solarized-dark" | "solarized-light" | "synthwave-84" | "tokyo-night" | "vesper" | "vitesse-black" | "vitesse-dark" | "vitesse-light";
        };
        syntaxHighlighting?: {
            transformers?: {
                regexHighlight?: boolean;
                lineHighlight?: boolean;
                lineFocus?: boolean;
                lineErrorLevel?: boolean;
                lineDiff?: boolean;
            };
            defaultLanguage?: "coffee" | "diff" | "fish" | "move" | "shell" | "turtle" | "swift" | "python" | "markdown" | "kotlin" | "css" | "latex" | "fs" | "json" | "rel" | "mdx" | "md" | "csv" | "html" | "abap" | "actionscript-3" | "ada" | "angular-html" | "angular-ts" | "apache" | "apex" | "apl" | "applescript" | "ara" | "asm" | "astro" | "awk" | "ballerina" | "bat" | "beancount" | "berry" | "bibtex" | "bicep" | "blade" | "c" | "cadence" | "clarity" | "clojure" | "cmake" | "cobol" | "codeql" | "cpp" | "crystal" | "csharp" | "cue" | "cypher" | "d" | "dart" | "dax" | "docker" | "dream-maker" | "elixir" | "elm" | "erb" | "erlang" | "fortran-fixed-form" | "fortran-free-form" | "fsharp" | "gdresource" | "gdscript" | "gdshader" | "gherkin" | "git-commit" | "git-rebase" | "glimmer-js" | "glimmer-ts" | "glsl" | "gnuplot" | "go" | "graphql" | "groovy" | "hack" | "haml" | "handlebars" | "haskell" | "hcl" | "hjson" | "hlsl" | "html-derivative" | "http" | "imba" | "ini" | "java" | "javascript" | "jinja" | "jison" | "json5" | "jsonc" | "jsonl" | "jsonnet" | "jssm" | "jsx" | "julia" | "kusto" | "less" | "liquid" | "lisp" | "logo" | "lua" | "make" | "marko" | "matlab" | "mdc" | "mermaid" | "mojo" | "narrat" | "nextflow" | "nginx" | "nim" | "nix" | "nushell" | "objective-c" | "objective-cpp" | "ocaml" | "pascal" | "perl" | "php" | "plsql" | "postcss" | "powerquery" | "powershell" | "prisma" | "prolog" | "proto" | "pug" | "puppet" | "purescript" | "r" | "raku" | "razor" | "reg" | "riscv" | "rst" | "ruby" | "rust" | "sas" | "sass" | "scala" | "scheme" | "scss" | "shaderlab" | "shellscript" | "shellsession" | "smalltalk" | "solidity" | "sparql" | "splunk" | "sql" | "ssh-config" | "stata" | "stylus" | "svelte" | "system-verilog" | "tasl" | "tcl" | "terraform" | "tex" | "toml" | "tsx" | "twig" | "typescript" | "typst" | "v" | "vb" | "verilog" | "vhdl" | "viml" | "vue" | "vue-html" | "vyper" | "wasm" | "wenyan" | "wgsl" | "wolfram" | "xml" | "xsl" | "yaml" | "zenscript" | "zig" | "batch" | "be" | "cdc" | "clj" | "ql" | "coffeescript" | "c++" | "c#" | "cs" | "cql" | "dockerfile" | "erl" | "f" | "for" | "f77" | "f90" | "f95" | "f03" | "f08" | "f18" | "f#" | "gjs" | "gts" | "gql" | "hbs" | "hs" | "properties" | "js" | "fsl" | "kt" | "kts" | "kql" | "makefile" | "nar" | "nf" | "nu" | "objc" | "ps" | "ps1" | "jade" | "py" | "perl6" | "rb" | "rs" | "shader" | "bash" | "sh" | "zsh" | "console" | "spl" | "styl" | "tf" | "tfvars" | "ts" | "typ" | "cmd" | "vim" | "vimscript" | "vy" | "文言" | "wl" | "yml" | {
                inline?: "coffee" | "diff" | "fish" | "move" | "shell" | "turtle" | "swift" | "python" | "markdown" | "kotlin" | "css" | "latex" | "fs" | "json" | "rel" | "mdx" | "md" | "csv" | "html" | "abap" | "actionscript-3" | "ada" | "angular-html" | "angular-ts" | "apache" | "apex" | "apl" | "applescript" | "ara" | "asm" | "astro" | "awk" | "ballerina" | "bat" | "beancount" | "berry" | "bibtex" | "bicep" | "blade" | "c" | "cadence" | "clarity" | "clojure" | "cmake" | "cobol" | "codeql" | "cpp" | "crystal" | "csharp" | "cue" | "cypher" | "d" | "dart" | "dax" | "docker" | "dream-maker" | "elixir" | "elm" | "erb" | "erlang" | "fortran-fixed-form" | "fortran-free-form" | "fsharp" | "gdresource" | "gdscript" | "gdshader" | "gherkin" | "git-commit" | "git-rebase" | "glimmer-js" | "glimmer-ts" | "glsl" | "gnuplot" | "go" | "graphql" | "groovy" | "hack" | "haml" | "handlebars" | "haskell" | "hcl" | "hjson" | "hlsl" | "html-derivative" | "http" | "imba" | "ini" | "java" | "javascript" | "jinja" | "jison" | "json5" | "jsonc" | "jsonl" | "jsonnet" | "jssm" | "jsx" | "julia" | "kusto" | "less" | "liquid" | "lisp" | "logo" | "lua" | "make" | "marko" | "matlab" | "mdc" | "mermaid" | "mojo" | "narrat" | "nextflow" | "nginx" | "nim" | "nix" | "nushell" | "objective-c" | "objective-cpp" | "ocaml" | "pascal" | "perl" | "php" | "plsql" | "postcss" | "powerquery" | "powershell" | "prisma" | "prolog" | "proto" | "pug" | "puppet" | "purescript" | "r" | "raku" | "razor" | "reg" | "riscv" | "rst" | "ruby" | "rust" | "sas" | "sass" | "scala" | "scheme" | "scss" | "shaderlab" | "shellscript" | "shellsession" | "smalltalk" | "solidity" | "sparql" | "splunk" | "sql" | "ssh-config" | "stata" | "stylus" | "svelte" | "system-verilog" | "tasl" | "tcl" | "terraform" | "tex" | "toml" | "tsx" | "twig" | "typescript" | "typst" | "v" | "vb" | "verilog" | "vhdl" | "viml" | "vue" | "vue-html" | "vyper" | "wasm" | "wenyan" | "wgsl" | "wolfram" | "xml" | "xsl" | "yaml" | "zenscript" | "zig" | "batch" | "be" | "cdc" | "clj" | "ql" | "coffeescript" | "c++" | "c#" | "cs" | "cql" | "dockerfile" | "erl" | "f" | "for" | "f77" | "f90" | "f95" | "f03" | "f08" | "f18" | "f#" | "gjs" | "gts" | "gql" | "hbs" | "hs" | "properties" | "js" | "fsl" | "kt" | "kts" | "kql" | "makefile" | "nar" | "nf" | "nu" | "objc" | "ps" | "ps1" | "jade" | "py" | "perl6" | "rb" | "rs" | "shader" | "bash" | "sh" | "zsh" | "console" | "spl" | "styl" | "tf" | "tfvars" | "ts" | "typ" | "cmd" | "vim" | "vimscript" | "vy" | "文言" | "wl" | "yml";
                block?: "coffee" | "diff" | "fish" | "move" | "shell" | "turtle" | "swift" | "python" | "markdown" | "kotlin" | "css" | "latex" | "fs" | "json" | "rel" | "mdx" | "md" | "csv" | "html" | "abap" | "actionscript-3" | "ada" | "angular-html" | "angular-ts" | "apache" | "apex" | "apl" | "applescript" | "ara" | "asm" | "astro" | "awk" | "ballerina" | "bat" | "beancount" | "berry" | "bibtex" | "bicep" | "blade" | "c" | "cadence" | "clarity" | "clojure" | "cmake" | "cobol" | "codeql" | "cpp" | "crystal" | "csharp" | "cue" | "cypher" | "d" | "dart" | "dax" | "docker" | "dream-maker" | "elixir" | "elm" | "erb" | "erlang" | "fortran-fixed-form" | "fortran-free-form" | "fsharp" | "gdresource" | "gdscript" | "gdshader" | "gherkin" | "git-commit" | "git-rebase" | "glimmer-js" | "glimmer-ts" | "glsl" | "gnuplot" | "go" | "graphql" | "groovy" | "hack" | "haml" | "handlebars" | "haskell" | "hcl" | "hjson" | "hlsl" | "html-derivative" | "http" | "imba" | "ini" | "java" | "javascript" | "jinja" | "jison" | "json5" | "jsonc" | "jsonl" | "jsonnet" | "jssm" | "jsx" | "julia" | "kusto" | "less" | "liquid" | "lisp" | "logo" | "lua" | "make" | "marko" | "matlab" | "mdc" | "mermaid" | "mojo" | "narrat" | "nextflow" | "nginx" | "nim" | "nix" | "nushell" | "objective-c" | "objective-cpp" | "ocaml" | "pascal" | "perl" | "php" | "plsql" | "postcss" | "powerquery" | "powershell" | "prisma" | "prolog" | "proto" | "pug" | "puppet" | "purescript" | "r" | "raku" | "razor" | "reg" | "riscv" | "rst" | "ruby" | "rust" | "sas" | "sass" | "scala" | "scheme" | "scss" | "shaderlab" | "shellscript" | "shellsession" | "smalltalk" | "solidity" | "sparql" | "splunk" | "sql" | "ssh-config" | "stata" | "stylus" | "svelte" | "system-verilog" | "tasl" | "tcl" | "terraform" | "tex" | "toml" | "tsx" | "twig" | "typescript" | "typst" | "v" | "vb" | "verilog" | "vhdl" | "viml" | "vue" | "vue-html" | "vyper" | "wasm" | "wenyan" | "wgsl" | "wolfram" | "xml" | "xsl" | "yaml" | "zenscript" | "zig" | "batch" | "be" | "cdc" | "clj" | "ql" | "coffeescript" | "c++" | "c#" | "cs" | "cql" | "dockerfile" | "erl" | "f" | "for" | "f77" | "f90" | "f95" | "f03" | "f08" | "f18" | "f#" | "gjs" | "gts" | "gql" | "hbs" | "hs" | "properties" | "js" | "fsl" | "kt" | "kts" | "kql" | "makefile" | "nar" | "nf" | "nu" | "objc" | "ps" | "ps1" | "jade" | "py" | "perl6" | "rb" | "rs" | "shader" | "bash" | "sh" | "zsh" | "console" | "spl" | "styl" | "tf" | "tfvars" | "ts" | "typ" | "cmd" | "vim" | "vimscript" | "vy" | "文言" | "wl" | "yml";
            };
        };
    };
    database?: {
        storeFormatted?: boolean;
        removeIfNotPresentInFs?: boolean;
    };
    navigation?: {
        navbarBreakpoint?: {
            full?: number;
            minimal?: number;
        };
        maxResultLength?: {
            snippets?: number;
            searchAll?: number;
            equations?: number;
            categories?: number;
        };
        navbarLinks?: (string | {
            label?: string;
            href?: string;
            icon?: string;
            onClick?: (...args: unknown[]) => unknown;
        })[];
        sidebarLinks?: (string | {
            label?: string;
            href?: string;
            icon?: string;
            Icon?: (...args: unknown[]) => unknown;
            onClick?: (...args: unknown[]) => unknown;
        })[];
    };
    terminal?: {
        logLevel?: "info" | "none" | "debug" | "verbose";
    };
    jupyter?: {
        execute?: boolean;
        environment?: string;
        syntaxHighlightTheme?: string;
        jupyterToken?: string;
        jupyterPort?: number;
        initiallyFoldCells?: boolean;
        kernel?: string;
        jupyterReactProps?: {
            collaborative?: boolean;
            lite?: boolean;
            serverUrls?: {
                baseUrl?: string;
                wsUrl?: string;
            };
        };
        nbConvert?: {
            nbconvertPath?: string;
            conversionTimeout?: number;
            customConversionFunction?: {
                pdf?: (args_0: string, args_1: string, ...args: unknown[]) => string;
            };
            execute?: boolean;
            nbConvertTemplate?: string;
            notebookOutputDir?: string;
        };
        jupyterNotebookProps?: {
            height?: string;
            readOnly?: boolean;
            maxHeight?: string;
            cellMetadataPanel?: boolean;
            cellSidebarMargin?: number;
            bundledIPyWidgets?: {
                name?: string;
                module?: string | Record<string, string>;
                version?: string;
            }[];
            externalIPyWidgets?: {
                name?: string;
                version?: string;
            }[];
            nbgrader?: boolean;
        };
        cellInputWrappers?: Record<string, string | {
            prefix?: string;
            suffix?: string;
        }>;
    };
    math?: {
        latexPackages?: string[] | "all";
        latexFontUrl?: string;
        constants?: Record<string, number>;
    };
    UI?: {
        table?: {
            maxHeight?: string | number;
        };
        text?: {
            blockQuoteItalic?: boolean;
            fontPaths?: "default" | {
                weight?: "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900";
                path?: string;
                style?: "bold" | "italic" | "normal";
            }[];
        };
        media?: {
            imageMap?: Record<string, string>;
            includeDefaultImageMap?: boolean;
            imageRemoteTest?: (string | RegExp)[];
        };
        theme?: "ulld" | "red" | "orange" | "yellow" | "green" | "blue" | "rose" | "slate" | "gray" | "stone" | "zinc" | "neutral" | "violet";
        colors?: Record<string, string | {
            dark?: string;
            light?: string;
        }>;
        autoApplyMdxTitles?: boolean;
    };
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
    };
    fsRoot?: string;
    build?: {
        database?: {
            type?: "postgres" | "sqlite";
            postgres?: {
                port?: number;
                dbName?: string;
                connectionURI?: string;
            };
            prioritize?: "size" | "speed";
        };
        additionalUserContent?: {
            css?: string;
            logo?: string;
            favicon?: string;
        };
    };
    autoTag?: {
        tag?: string;
        path?: string;
    }[];
    autoTopic?: {
        path?: string;
        topic?: string;
    }[];
    autoSubject?: {
        path?: string;
        subject?: string;
    }[];
    alwaysPreferFs?: boolean;
    ignoreFilepaths?: (string | RegExp | {
        regex?: string | RegExp;
        original?: string;
    })[];
    tempDir?: string;
    generatedDir?: string;
    ignorePreferFsExtensions?: (string | RegExp | {
        regex?: string | RegExp;
        original?: string;
    })[];
    fileTypePriority?: (".mdx" | ".ipynb" | ".csv" | ".tsv" | ".excel" | ".numpy" | ".html" | ".pickle" | ".db" | ".sql" | ".pdf" | ".json" | ".tex" | ".hdf5" | ".md")[];
    noteTypes?: {
        label?: string;
        icon?: string;
        UI?: {
            styles?: {
                dark?: {
                    bg?: string;
                    fg?: string;
                };
                light?: {
                    bg?: string;
                    fg?: string;
                };
            };
        };
        fs?: string;
        url?: string;
        id?: string;
        docType?: string;
        filePathPattern?: string;
        matchWeight?: number;
        urlQuery?: Record<string, string | number | string[] | number[]>;
        keywords?: string[];
        topicLabel?: string;
        subjectLabel?: string;
        autoTag?: string[];
        autoTopic?: string[];
        autoSubject?: string[];
        inSidebar?: boolean;
        inNavbar?: boolean;
    }[];
    bibPath?: string;
    cslPath?: string;
    dateHandling?: {
        enableAdvancedFormat?: boolean;
        format?: string | {
            short?: string;
            long?: string;
            withTime?: string;
            timeOnly?: string;
        };
        defaultTimeDisplayType?: "summarized" | "analog" | "descriptive";
        defaultTimeZone?: string;
    };
    linkAliases?: Record<string, string>;
    plotting?: {
        plotColorList?: string[] | {
            dark?: string[];
            light?: string[];
        };
        plotColorCycleMethod?: "inOrder" | "random";
    };
    credentials?: {
        googleServiceAccountJsonPath?: string;
    };
    performance?: {
        latexParsingDebounceTimeout?: number;
        mdxParsingDebounceTimeout?: number;
    };
    meta?: {
        title?: string;
        desc?: string;
    };
    plugins?: string | string[] | {
        name?: string;
        version?: string;
        parserIndex?: number;
    } | {
        name?: string;
        version?: string;
        parserIndex?: number;
    }[];
}>;
