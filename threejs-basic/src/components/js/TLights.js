import { AmbientLight, PointLight } from "three";

/**
 * 光线
 */
export const allLights = []
//  添加环境光从AmbientLight里面

export const ambientLight = new AmbientLight('rgb(255,255,255)', 0.8)

// 点光源
// PointLight 有四个参数：

// color - (可选参数)) 十六进制光照颜色。默认 0xffffff (白色)。
// intensity - (可选参数) 光照强度。 缺省值 1。
// distance - 这个距离表示从光源到光照强度为0的位置。 当设置为0时，光永远不会消失，默认0。
// decay - 沿着光照距离的衰退量。默认 1。

export const pointLight =new PointLight(
    'rgb(255,255,255)',
    0.5,
    600,
    0.5
)
pointLight.position.set(0, 50, 100)  // 设置点光源位置


allLights.push(ambientLight, pointLight)

console.log(allLights ,'allLights')
