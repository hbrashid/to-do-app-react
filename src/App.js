import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isClicked: false,
      todos: [],
      text: ''
    };
  }

  handleClick = () => {
    this.setState({
      isClicked: true,
      todos: [...this.state.todos, this.state.text],
      text: ''
    });
  }

  handleDelete = (index)=> () => {
    const todosCopy = [...this.state.todos];
    todosCopy.splice(index, 1)

    this.setState({
      todos: todosCopy
    });
  }

  onChange = e => {
    this.setState({
      text: e.target.value
    })
  }

  render() {
  return (
    <div className="App">
      <button onClick={this.handleClick}>{this.state.isClicked ? 'True' : 'False' }</button>
      <input value={this.state.text} onChange={this.onChange}/>

      {this.state.todos.map((todo, index) => <div key={index}>
        <button onClick={this.handleDelete(index)}>delete</button>{todo}</div>)}
    </div>
  );
  }
}

export default App;
