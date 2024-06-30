export class Point {
    constructor(public position: [number, number, number]) { }
    x() {
        return this.position[0];
    }
    y() {
        return this.position[1];
    }
    z() {
        return this.position[2];
    }
    distance(p: Point){
        return Math.sqrt(this.position.map((l, i) => (l - p.position[i])**2).reduce((a, b) => a + b))
    }
}
