import {
  TAG_ROOT,
  ELEMENT_TEXT,
  TAG_HOST,
  TAG_TEXT,
  PLACEMENT
} from './constants'

/**
 * 实现渲染的功能
 * 1、根据虚拟dom生成fiber树
 * 2、收集effectlist
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
let nextUnitOfWork = null;      // 下一次工作单元
let workInProgressRoot = null;  // rootFiber 根
function scheduleRoot(rootFiber) {
  // 这里就要创建真实 的dom了
  workInProgressRoot = rootFiber;
  nextUnitOfWork = rootFiber;
  workloop(nextUnitOfWork)
}

/**
 * 循环工作执行单元
 * @param deadline requestIdleCallback 自动传入的参数
 */
function workloop(deadline) {
  while (nextUnitOfWork && (!deadline.didTimeout || deadline.timeRemaining() < 1)) {
    // 遍历子项目
    nextUnitOfWork = performUnitOfWork(nextUnitOfWork);
  }
  // 如果为空则遍历结束
  if (!nextUnitOfWork) {
    console.log('render 结束');
  }
  /**
   * 每一帧都去调度看看有没有新任务
   * 每一帧都会执行
   */
  requestIdleCallback(workloop, { timeout: 500 })
}

function performUnitOfWork(currentFiber) {
  beginWork(currentFiber)

  if (currentFiber.child) {
    return currentFiber.child
  }
  while (currentFiber) {
    completeUnitOfWork(currentFiber)
    // 如果存在 弟弟，返回
    if (currentFiber.sibling) {
      return currentFiber.sibling
    }
    // 最后返回父亲，找父亲的兄弟
    currentFiber = currentFiber.return

  }
}
function beginWork(currentFiber) {
  //如果是根fiber
  if (currentFiber.tag === TAG_ROOT) {
    // 跟新根节点
    updateHostRoot(currentFiber)
  }
}
function completeUnitOfWork(currentFiber) {

}


function updateHostRoot(currentFiber) {
  // react的调和 (协调子节点)
  reconcileChildren(currentFiber, currentFiber.props.children)
}


function reconcileChildren(currentFiber, children) {
  // 子节点的索引，通过这个将根节点的所有直系儿子们取出
  let currentChildrenIndex = 0;
  // 上一个子fiber
  let preSibling;

  while (currentChildrenIndex < children.length) {
    // 取出children的每一项vnode
    let currentSon = children[currentChildrenIndex];
    // 
    let tag;
    if (currentSon.type === ELEMENT_TEXT) {
      tag = TAG_TEXT
    } else if (typeof currentSon.type === 'string') {
      tag = TAG_HOST
    }

    // beginWork的时候将 虚拟dom 转换成fiber
    // 在completeUnitOfWork 收集effectlist
    let newFiber = {
      tag,
      type: currentSon.type,
      props: currentSon.props,
      stateNode: null,// dom元素，这个时候还没没有创建所以为null;
      return: currentFiber,// 父节点
      effectTag: PLACEMENT,
      nextEffect: null,// effect list 是个单链表，和fiber的完成顺序一致，但是节点只放哪些出钱的人
    }

    if (newFiber) {
      if (currentChildrenIndex === 0) {
        currentFiber.child = newFiber
      } else {
        preSibling.sibling = newFiber
      }
      preSibling = newFiber
    }





    currentChildrenIndex++;
  }
}











const ReactDom = {
  render
}
export default ReactDom;