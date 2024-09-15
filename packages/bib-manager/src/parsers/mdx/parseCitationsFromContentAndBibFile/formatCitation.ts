
export const formatCitation = (s: string, index: number) => {
    return `<sup><a href='#bib-${s.toLowerCase()}' className="citation citationAnchor" id="cit-${s}-idx-${index}">${index + 1}</a></sup>`;
};
