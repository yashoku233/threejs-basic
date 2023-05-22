import { WebGLRenderer,Scene,PerspectiveCamera, Vector3 } from 'three';

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
    dom.appendChild(renderer.domElement)
    renderer.setSize(dom.offsetWidth, dom.offsetHeight, true);
    let scene = new Scene()  // 实例化场景
    console.log(scene,'scene');
    let camera = new PerspectiveCamera(45, dom.offsetWidth / dom.offsetHeight, 1, 1000)  //实例化相机
    camera.position.set(50,50,50); //设置相机位置
    camera.lookAt(new Vector3(0,0,0)) // 设置相机看先中心点
    camera.up = new Vector3(0, 1, 0) // 设置相机自身方向
    renderer.render(scene, camera)
    this.dom = dom
    this.sence = scene
    
    console.log(this.sence, 'this.scene.add');

  }
    /**
   * 向场景中添加模型
   * @param  {...any} object 模型列表
   */
    addObject(...object) {
      object.forEach(elem => {
        this.sence.add(elem)  // 场景添加模型
      })
    }
}
