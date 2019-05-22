import React, { ReactDOM } from './zore-react';

class MyComponent extends React.Component{
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className={'class1'} onClick={(a) => {console.log(a)}}>
        <p style="color: #F00;">1</p>
        <p>2</p>
        <p>3</p>
        <p>4</p>
        <p>5</p>
        <p>6</p>
      </div>
    );
  }
};


const rootDom = document.getElementById('root');
setInterval(() => {
  const element = (
    <div className={'class1'} onClick={(a) => {console.log(a)}}>
      <p style="color: #F00;">1</p>
      <p>Time is {new Date().toLocaleTimeString()}</p>
      <p>3</p>
      <p>4</p>
      <p>5</p>
      <p>6</p>
    </div>
  );
  ReactDOM.render(element, rootDom);
}, 1000);
