import { WebGLRenderer,Scene } from 'three';

// Scene是个场景 需要引入
export class ThreeEngine {
  dom = null;
  sence = null;
  constructor(dom) {
     console.log(dom);
    // 创建一个渲染器
    let renderer = new WebGLRenderer({
      antialias: true, // 开启抗锯齿
    }); // 创建渲染器并且开启抗锯齿
    dom.appendChild(renderer.domElement);
    renderer.setSize(dom.offsetWidth, dom.offsetHeight, true);
    this.dom = dom
    this.sence = Scene
    console.log(dom);

  }
}
