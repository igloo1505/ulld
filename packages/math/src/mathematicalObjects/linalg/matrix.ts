import * as numbers from "numbers"

console.log(numbers)
export class Matrix {
    constructor(public matrix: number[][]){}
    add(matrix: Matrix){
        return new Matrix(numbers.matrix.addition(this.matrix, matrix.matrix))
    }
    determinant(){
        return numbers.matrix.determinant(this.matrix)
    }
    gaussElimination(errorBounds: number = 0.1){
        return numbers.matrix.GaussJordanEliminate(this.matrix, errorBounds)
    }
    inverse(){
        return new Matrix(numbers.matrix.inverse(this.matrix))
    }
    isSquare(){
        return numbers.matrix.isSquare(this.matrix)
    }
    multiply(matrix: Matrix){
        return new Matrix(numbers.matrix.multiply(this.matrix, matrix.matrix))
    }
    scale(n: number){
        return new Matrix(numbers.matrix.scalar(this.matrix, n))
    }
    subtract(matrix: Matrix){
        return new Matrix(numbers.matrix.subtraction(this.matrix, matrix.matrix))
    }
    trace(){
        return numbers.matrix.trace(this.matrix)
    }
    /** creates an nxn identity matrix. */
    static identity(n: number = 3){
        return new Matrix(numbers.matrix.identity(n))
    }
    static zeros(rows: number, cols: number){
        return new Matrix(numbers.matrix.zeros(rows, cols))
    }
}



const testData = [
    [0, 1, 2],
    [2, 3, 1],
    [8, 9, 10]
]

const m1 = new Matrix(testData)

const m2 = new Matrix(testData)
console.log("m2: ", m2)
const m4 = m2.scale(3)
console.log("m4: ", m4)

const m3 = m1.add(m2)
console.log("m3: ", m3)
