import  { AxesHelper, GridHelper } from 'three'

export const allHelper = [];

// 坐标辅助

export const axesHelper = new AxesHelper(500);

// 网格辅助线一共需要配置四个参数：

// size – 坐标格尺寸. 默认为 10. 这就是网格组成的大正方形最大是多少
// divisions – 坐标格细分次数. 默认为 10. 组成的最大的正方向平均分多少份
// colorCenterLine – 中线颜色. 值可以为 Color 类型, 16进制 和 CSS 颜色名. 默认为 0x444444。这个是指网格和坐标的 x轴 z 轴重合线的颜色。
// colorGrid – 坐标格网格线颜色. 值可以为 Color 类型, 16进制 和 CSS 颜色名. 默认为 0x888888

export const gridHelper = new GridHelper(100, 10, 'red', 'rgb(222, 225, 230)')


allHelper.push(axesHelper, gridHelper);