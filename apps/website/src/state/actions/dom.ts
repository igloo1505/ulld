export const setHeroVisibility = (shouldShow: boolean) => {
    document
        .getElementById("blobSection")
        ?.classList[shouldShow ? "remove" : "add"]("inactive");
};

export const setTheme = (newTheme: string = "ulld") => {
    document.querySelector("html")?.setAttribute("data-ulld-theme", newTheme);
};
