import React from './index';
import { setAttribute } from './React.js';
import createComponent from "./createComponent";
import setComponentProps from "./setComponentProps";

function render( vnode, container ) {
  const dom = _render( vnode );
  return container.appendChild(dom);
}

function _render( vnode ) {

  if ( vnode === undefined || vnode === null || typeof vnode === 'boolean' ) vnode = '';

  if ( typeof vnode === 'number' ) vnode = String( vnode );

  if ( typeof vnode === 'string' ) {
    let textNode = document.createTextNode( vnode );
    return textNode;
  }

  if ( typeof vnode.tag === 'function' ) {

    const component = createComponent( vnode.tag, vnode.attrs );

    setComponentProps( component, vnode.attrs );

    return component.base;
  }

  const dom = document.createElement( vnode.tag );

  if ( vnode.attrs ) {
    Object.keys( vnode.attrs ).forEach( key => {
      const value = vnode.attrs[ key ];
      setAttribute( dom, key, value );
    } );
  }

  vnode.children.forEach( child => render( child, dom ) );    // 递归渲染子节点

  return dom;
}

export default {
  render,
  _render,
};
