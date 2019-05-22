import Component from './Component';

function createComponent(component, props) {
  let inst;
  if (component.prototype && component.prototype.render) {
    inst = new component(props);
    console.log(inst);
  } else {
    inst = new Component(props);
    inst.constructor = component;
    inst.render = function() {
      return this.constructor( props );
    }
  }
  return inst;
}

export default createComponent;
