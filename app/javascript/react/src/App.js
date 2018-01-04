import React from 'react';
import { Link, Route, Switch } from 'react-router-dom'
import Home from './components/Home'
import Projects from './containers/Projects'

class App extends React.Component{
  render() {
    return(
      <div>
        <nav className="navbar navbar-light">
          <ul className="nav navbar-nav">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/projects">Projects</Link></li>
          </ul>
        </nav>

        <Route exact={true} path="/" component={Home}/>
        <Route path="/projects" component={Projects}/>
      </div>
    )
  }
}

export default App
