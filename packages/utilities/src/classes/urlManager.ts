export class Paths {
    constructor() { }
    static getTaskListPath(
        idOrIds: number | number[],
        showCompleted: boolean = false,
    ) {
        const sp = new URLSearchParams();
        let ids = Array.isArray(idOrIds) ? idOrIds : [idOrIds];
        for (const d of ids) {
            sp.append("listIds", `${d}`);
        }
        if (showCompleted) {
            sp.set("showCompleted", "true");
        }
        return `/todo?${sp.toString()}`;
    }
}
