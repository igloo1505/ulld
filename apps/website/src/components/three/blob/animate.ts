import { useThree } from "@react-three/fiber";
import { RefObject, useEffect } from "react";
import { BufferGeometry } from "three";


// export const animateStars = (_stars: RefObject<BufferGeometry>) => {    
//     const stars = _stars.current
//     if(!stars) return null
//     stars.geometry.vertices.forEach(function (v) {
//         v.x += (0 - v.x) / v.velocity;
//         v.y += (0 - v.y) / v.velocity;
//         v.z += (0 - v.z) / v.velocity;

//         v.velocity -= 0.3;

//         if (v.x <= 5 && v.x >= -5 && v.z <= 5 && v.z >= -5) {
//             v.x = v.startX;
//             v.y = v.startY;
//             v.z = v.startZ;
//             v.velocity = THREE.MathUtils.randInt(50, 300);
//         }
//     });

//     }

// const animate = () => {

//     //Stars  Animation

//     //Nucleus Animation
//     nucleus.geometry.vertices.forEach(function (v) {
//         let time = Date.now();
//         v.normalize();
//         let distance = nucleus.geometry.parameters.radius + noise.noise3D(
//             v.x + time * 0.0005,
//             v.y + time * 0.0003,
//             v.z + time * 0.0008
//         ) * blobScale;
//         v.multiplyScalar(distance);
//     })
//     nucleus.geometry.verticesNeedUpdate = true;
//     nucleus.geometry.normalsNeedUpdate = true;
//     nucleus.geometry.computeVertexNormals();
//     nucleus.geometry.computeFaceNormals();
//     nucleus.rotation.y += 0.002;


//     //Sphere Beckground Animation
//     sphereBg.rotation.x += 0.002;
//     sphereBg.rotation.y += 0.002;
//     sphereBg.rotation.z += 0.002;

//     
//     controls.update();
//     stars.geometry.verticesNeedUpdate = true;
//     renderer.render(scene, camera);
//     requestAnimationFrame(animate);
// }


// export const useAnimate = (stars: RefObject<BufferGeometry>) => {
//     const three = useThree()
//     useEffect(() => {

//     }, [])
// };
