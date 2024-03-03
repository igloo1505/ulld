import { ArrayUtilities } from "@ulld/utilities"

export class Numpy extends ArrayUtilities {
    constructor() {
        super()
    }
    linspace(min: number, max: number, points: number) {
        let data = []
        for (var i = min; i <= max; i += (max - min) / points) {
            data.push(i)
        }
        data.push(max)
        return data
    }
    sum(arr: number[]) {
        return arr.reduce((a, b) => a + b)
    }
    product(arr: number[]) {
        return arr.reduce((a, b) => a * b)
    }
}
