import {
  ELEMENT_TEXT
} from './constants'


/**
 * 创建虚拟dom的方法
 * @param {类型} type 
 * @param {属性} props 
 * @param  {...any} children 直系儿子节点
 */
function createELement(type, props, ...children) {
  // 删除无关的属性
  delete props.__self;
  delete props.__source;
  return {
    type,
    props: {
      ...props,
      children: children.map(child => {
        // 兼容处理，如果时 text文本，返回处理的文本对象
        return typeof child === 'object' ? child : {
          type: ELEMENT_TEXT,
          props: { text: child, children: [] }
        }
      })
    }

  }
}

export default {
  createELement
}