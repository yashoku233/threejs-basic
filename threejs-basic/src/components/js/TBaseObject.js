import { BoxGeometry, Mesh, MeshStandardMaterial } from "three";

export const allBaseObject = []  // 返回所有基础模型

// THREE.Mesh 是 Three.js 库中用于创建网格对象的类。
// 通过 new THREE.Mesh() 实例化一个 Mesh 对象时，你需要传入两个参数：几何体（geometry）和材质（material）。
export const box = new Mesh(
    new BoxGeometry(20, 20, 20), // 设置立方体的大小 (x 长度, y 高度 ,z 长度)
    new MeshStandardMaterial({   // 设置材质
        color: 'rgb(36, 172, 242)',  // 设置材质的颜色
        metalness: 0.5,   // 金属度 （1 最像金属，0 最不想金属）
        roughness: 0   // 粗糙度（0 最光滑，1 最粗糙）
      })

);
allBaseObject.push(box)  // 添加到模型数组
