export interface MermaidConfigType {
    output: "svg" | "ast";
    theme?: {
        dark?: string;
        light?: string;
    };
    mermaid: any;
}
export declare const mermaidTheme: {
    light: {
        darkMode: boolean;
        background: string;
        primaryColor: string;
        primaryTextColor: string;
        secondaryColor: string;
        secondaryTextColor: string;
        primaryBorderColor: string;
        secondaryBorderColor: string;
        noteBorderColor: string;
        tertiaryBorderColor: string;
        tertiaryColor: string;
        tertiaryTextColor: string;
        lineColor: string;
        noteBkgColor: string;
        noteTextColor: string;
    };
    dark: {
        darkMode: boolean;
        background: string;
        primaryColor: string;
        primaryTextColor: string;
        secondaryColor: string;
        secondaryTextColor: string;
        primaryBorderColor: string;
        tertiaryBorderColor: string;
        secondaryBorderColor: string;
        tertiaryColor: string;
        tertiaryTextColor: string;
        lineColor: string;
        noteBkgColor: string;
        noteTextColor: string;
    };
};
//# sourceMappingURL=defaultMermaidConfig.d.ts.map