import React, { Component } from 'react';
import './App.css';


class App extends Component {
  constructor(props)
  {
    super(props);
    let firstName = this.props.name.split(' ')[0];
    
    this.state = {
      name: firstName 
    }
  }
  render() {
    return (
      <div className="whole">
       <div className="raheem">
          <img src={require('./a.jpg')}  alt="happy"/>
       </div>
       <div className="raheem">
          <img src={require('./a.jpg')}  alt="happy"/>
       </div>
       <div className="raheem">
          <img src={require('./a.jpg')}  alt="happy"/>
       </div>
       <div className="raheem">
          <img src={require('./a.jpg')}  alt="happy"/>
       </div>
       <div className="App">
        <header className="App-header">
          <p >
            Edit  and save to {this.state.name}.
          </p>
          <p >
            Edit  and save to {this.props.name}.
          </p>
        </header>
       </div>
      </div>
    );
  }
}

export default App;
