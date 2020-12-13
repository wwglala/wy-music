import { TAG_ROOT } from './constants'

/**
 * 实现渲染的功能
 * @param element 要渲染的dom节点
 * @param container 容器 root
 */
function render(element, container) {
  // 根节点
  let rootFiber = {
    tag: TAG_ROOT,    // 每一个fiber都会有一个tag标识，代表此元素的类型
    stateNode: container,  // 原生节点，执行真是dom节点  root
    props: {
      children: [element]
    }
  }
  // 准备渲染
  scheduleRoot(rootFiber)
}

/**
 * 从根节点开始渲染
 * 两个阶段：
 * 1、diff，对比新旧的虚拟dom，进行 渲染。这个阶段比较花时间，所以需要拆分
 *    拆分的维度就是虚拟dom节点，此阶段可以暂停。
 * 2、commit，进行dom更新创建的阶段，此阶段不能暂停。否则用户体验不好会卡
 * 
 * @param rootFiber fiber对象
 */
function scheduleRoot(rootFiber) {

}




export default {
  render
}