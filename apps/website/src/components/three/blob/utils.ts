import { Vector3 } from "three";

export const randomPointSphere = (radius: number) => {
  let theta = 2 * Math.PI * Math.random();
  let phi = Math.acos(2 * Math.random() - 1);
  let dx = 0 + radius * Math.sin(phi) * Math.cos(theta);
  let dy = 0 + radius * Math.sin(phi) * Math.sin(theta);
  let dz = 0 + radius * Math.cos(phi);
  return new Vector3(dx, dy, dz);
};


export const getPointArray = (radius: number, n: number = 50) => {
  let points: number[] = [];
  Array(n)
    .fill(0)
    .forEach(() => {
      let theta = 2 * Math.PI * Math.random();
      let phi = Math.acos(2 * Math.random() - 1);
      points.push(0 + radius * Math.sin(phi) * Math.cos(theta));
      points.push(0 + radius * Math.sin(phi) * Math.sin(theta));
      points.push(0 + radius * Math.cos(phi));
    });
  return points;
};


/* @ts-ignore */
export const makeBuffer = (...args: any) => Float32Array.from(...args)
