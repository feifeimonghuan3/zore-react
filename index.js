import React, { ReactDOM } from './zore-react';

// class MyComponent extends React.Component{
//   constructor(props) {
//     super(props);
//   }
//   render() {
//     return (
//       <div className={'class1'} onClick={(a) => {console.log(a)}}>
//         <p style="color: #F00;">1</p>
//         <p>2</p>
//         <p>3</p>
//         <p>4</p>
//         <p>5</p>
//         <p>6</p>
//       </div>
//     );
//   }
// };


// const rootDom = document.getElementById('root');
// setInterval(() => {
//   const element = (
//     <div className={'class1'} onClick={(a) => {console.log(a)}}>
//       <p style="color: #F00;">1</p>
//       <p>Time is {new Date().toLocaleTimeString()}</p>
//       <p>3</p>
//       <p>4</p>
//       <p>5</p>
//       <p>6</p>
//     </div>
//   );
//   ReactDOM.render(element, rootDom);
// }, 1000);

class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}

class Hi extends React.Component {
  render() {
    return <h1>Hi</h1>;
  }
}

function App() {
  return (
    <div>
      <Welcome name="Sara" />
      <Welcome name="Cahal" />
      <Welcome name="Edite" />
    </div>
  );
}

// class App extends React.Component {
//   render() {
//     return (
//       <div>
//         <Welcome name="Sara">
//           <Hi/>
//         </Welcome>
//         <Welcome name="Cahal" />
//         <Welcome name="Edite" />
//       </div>
//     );
//   }
// }

// console.log(<App />);
const rootDom = document.getElementById('root');
ReactDOM.render(
  <App/>,
  rootDom
);
