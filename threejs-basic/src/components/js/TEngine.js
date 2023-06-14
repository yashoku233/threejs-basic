import { WebGLRenderer, Scene, PerspectiveCamera, Vector3, MOUSE, Vector2, Raycaster } from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { TransformControls } from 'three/examples/jsm/controls/TransformControls'
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
    let scene = new Scene(); // 实例化场景

    let camera = new PerspectiveCamera(45, dom.offsetWidth / dom.offsetHeight, 1, 1000); //实例化相机
    camera.position.set(50, 50, 50); //设置相机位置
    camera.lookAt(new Vector3(0, 0, 0)); // 设置相机看先中心点
    camera.up = new Vector3(0, 1, 0); // 设置相机自身方向

    let orbitControls = new OrbitControls(camera, renderer.domElement);
    orbitControls.mouseButtons = {
      // 设置鼠标功能键（轨道控制器）
      LEFT: null, // 左键无功能
      MIDDLE: MOUSE.DOLLY, // 中键缩放
      RIGHT: MOUSE.ROTATE, // 右键旋转
    };

    renderer.render(scene, camera);
    this.dom = dom;
    this.sence = scene;

    //初始化鼠标的位置
    let mouse = new Vector2();
    let x,
      y,
      width,
      height = 0;
    console.log(mouse, x, y, height);

    // 初始化射线发射器
    let raycaster = new Raycaster();
    // 初始化变换控制器
    let transformControls = new TransformControls(camera, renderer.domElement)
    scene.add(transformControls) // 将变换控制器添加至场景
    
    let transing = false
    transformControls.addEventListener("mouseDown", () => {
      transing = true
    })

    renderer.domElement.addEventListener("click", () => {
      if(transing) {
        console.log(transing);
        transing = false
        return
      }
      scene.remove(transformControls); //移除变化控制器
      transformControls.enabled = false // 停用变换控制器

      raycaster.setFromCamera(mouse, camera)  // 配置射线发射器，传递鼠标和相机对象
      const intersection = raycaster.intersectObjects(scene.children) // 获取射线发射器捕获的模型列表，传进去场景中所以模型，穿透的会返回我们
      if (intersection.length) {
        const object = intersection[0].object  // 获取第一个模型
        scene.add(transformControls) // 添加变换控制器
        transformControls.enabled = true // 启用变换控制器
        transformControls.attach(object)
      }
    })

    // 获取鼠标实际在three中的位置
    renderer.domElement.addEventListener('mousemove', (event) => {
      let x = event.offsetX; //鼠标在屏幕的宽度
      let y = event.offsetY; //鼠标在屏幕的高度
      // 关于
      width = renderer.domElement.offsetWidth;
      height = renderer.domElement.offsetHeight;
      mouse.x = (x / width) * 2 - 1;
      mouse.y = (-y * 2) / height + 1;
    });

    let animate = () => {
      renderer.render(scene, camera); // 渲染器渲染场景和相机
      requestAnimationFrame(animate);
    };
    animate();
  }

  /**
   * 向场景中添加模型
   * @param  {...any} object 模型列表
   */
  addObject(...object) {
    object.forEach((elem) => {
      this.sence.add(elem); // 场景添加模型
    });
  }
}
