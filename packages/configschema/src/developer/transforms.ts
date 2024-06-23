export const transformExportString = (s: string) => {
    let _s = s;
    if (_s.startsWith(".")) {
        _s = _s.slice(1);
    }
    if (_s.startsWith("/")) {
        _s = _s.slice(1);
    }
    return _s;
};


export const transformExportStringOptional = (val?: string) => val ? transformExportString(val) : undefined

export const transformExportStringArray = (s: string[]) =>
    s.map((val) => transformExportString(val));
