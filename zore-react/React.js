import Component from './Component';
import setComponentProps from './setComponentProps.js';
import createComponent from './createComponent';

function createElement (tag, attrs, ...children) {
  return {
    tag,
    attrs,
    children,
  }
}

export function setAttribute (dom, props, value) {
  dom.setAttribute(props, value);
  return dom;
}

// export function render (vnode, container) {
//   console.log(container);
//   if (vnode === undefined || vnode === null || typeof vnode === 'boolean') vnode = '';
//
//   if (typeof vnode === 'number') vnode += '';
//
//   if (typeof vnode === 'string') {
//     const textNode = document.createTextNode(vnode);
//     return container.appendChild(textNode);
//   }
//
//   if (typeof vnode.tag === 'function') {
//     const component = createComponent(vnode.tag, vnode.attrs);
//     // const rendeReturn = component.render();
//     // render(rendeReturn, container);
//     setComponentProps(component, vnode.attrs);
//     return component;
//   }
//
//   const dom = document.createElement(vnode.tag);
//
//   if (vnode.attrs) {
//     Object.keys(vnode.attrs).forEach(key => {
//       const value = vnode.attrs[key];
//       setAttribute(dom, key, value);
//     })
//   }
//
//   vnode.children.forEach(childNode => render(childNode, dom));
//
//   return container.appendChild(dom);
// }
//
// class Component {
//   constructor(props) {
//     console.log(props);
//   }
// }

export default {
  createElement,
  Component,
  // render,
}
