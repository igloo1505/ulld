import { Matrix } from "./matrix";
import { Vector } from "./vector";

export class LinearAlgebra {
    constructor(){}
    getIdentityMatrix(nDimensions: number){
        return Matrix.identity(nDimensions)
    }
    getDiagonalMatrix(scalar: number, nDimensions: number = 3){
         return Matrix.identity(nDimensions).scale(scalar)
    }
}
