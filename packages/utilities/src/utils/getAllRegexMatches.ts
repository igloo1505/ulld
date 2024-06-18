export const getAllRegexMatches = (content: string, regex: RegExp) => {
    let results: RegExpExecArray[] = [];

    let c = content;
    let m;
    do {
        m = regex.exec(c);
        if (m) {
            results.push(m);
        }
    } while (m);
    return results
};
