import renderComponent from './renderComponent.js';

function setComponentProps(component, props) {
  if (component.base) {
    if (component.componentWillMount) component.componentWillMount();
  } else if (component.componentWillReceiveProps) {
    component.componentWillReceiveProps(props);
  }

  component.props = props;
  renderComponent(component);
}

export default setComponentProps;
