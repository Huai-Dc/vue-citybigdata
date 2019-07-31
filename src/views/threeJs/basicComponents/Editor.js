import * as THREE from 'three'

function Editor(){
    // 编辑器容器
    this.container = null;

    // 默认相机
    this.DEFAULT_CAMERA = new THREE.PerspectiveCamera(45, 1, 0.1, 2000); // 投影透视相机
    this.DEFAULT_CAMERA.name = 'Camera';
    this.DEFAULT_CAMERA.position.set(20, 10, 20);
    this.DEFAULT_CAMERA.lookAt(new THREE.Vector3());

    this.camera = this.DEFAULT_CAMERA.clone();
    // 场景构建
    this.scene = new THREE.Scene();
    this.scene.name = 'Scene';
    this.scene.background = new THREE.Color(0xaaaaaa);

    // 渲染器
    this.renderer = null;
    /********************************************************************************/

    // 射线对象相关
    this.mouse = new THREE.Vector2();
    this.raycaster = new THREE.Raycaster();

    // 是否是编辑模式
    this.isEdit = true;

    // 鼠标模式
    this.activeMode = "pick";

    // 区分鼠标点击与拖拽事件
    this.mouseEventType = false; // 记录鼠标是否处于按住状态
    this.mouseMoveCount = 0; // 约定大于2为拖动
}

Editor.prototype = {
    init: function (options) {
        
    }
}

module.exports = Editor;