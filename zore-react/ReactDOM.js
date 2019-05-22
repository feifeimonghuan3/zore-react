import React from './index';

const render = (vnode, container) => {
  container.innerHTML = '';
  React.render(vnode, container)
};

export default {
  render,
};
