export const removeLeadingDotSlash = (p) => {
    let re = /^(?<remove>\.?\/?)/gm;
    let m = re.exec(p);
    if (m?.groups?.remove) {
        return p.slice(m.groups.remove.length);
    }
    return p;
};
