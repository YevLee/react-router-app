import React, { Component } from 'react';
import './App.css';
import routes from './router/routes'
class App extends Component {
  componentDidMount(){
    //console.log(this.props)
  }
  render () {
    return (
     <div> {routes}</div>
    )
  }
}

export default App;
