import ReactDOM from './ReactDOM';
import { render } from './React';

function renderComponent(component) {
  let base;

  const renderer = component.render();

  if ( component.base && component.componentWillUpdate ) {
    component.componentWillUpdate();
  }

  base = ReactDOM._render( renderer );

  if ( component.base ) {
    if ( component.componentDidUpdate ) component.componentDidUpdate();
  } else if ( component.componentDidMount ) {
    component.componentDidMount();
  }
  console.log(component);
  if ( component.base && component.base.parentNode ) {
    component.base.parentNode.replaceChild( base, component.base );
  }

  component.base = base;
  base._component = component;
}

export default renderComponent;
