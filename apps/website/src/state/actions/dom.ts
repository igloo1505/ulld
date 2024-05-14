export const setHeroVisibility = (shouldShow: boolean) => {
    document.getElementById("blobSection")?.classList[shouldShow ? "remove" : "add"]("inactive");
}
