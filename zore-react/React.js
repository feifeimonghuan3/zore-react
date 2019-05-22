function createElement (tag, attrs, ...children) {
  return {
    tag,
    attrs,
    children,
  }
}

function setAttribute (dom, props, value) {
  dom.setAttribute(props, value);
  return dom;
}

function render (vnode, container) {
  if (typeof vnode === 'string') {
    const textNode = document.createTextNode(vnode);
    return container.appendChild(textNode);
  }

  const dom = document.createElement(vnode.tag);

  if (vnode.attrs) {
    Object.keys(vnode.attrs).forEach(key => {
      const value = vnode.attrs[key];
      setAttribute(dom, key, value);
    })
  }

  vnode.children.forEach(childNode => render(childNode, dom));

  return container.appendChild(dom);
}

class Component {
  constructor(props) {
    console.log(props);
  }
}

export default {
  createElement,
  Component,
  render,
}
