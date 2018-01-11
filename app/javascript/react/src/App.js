import React from 'react';
import { Link, Route, Switch } from 'react-router-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Home from './components/Home'
import Projects from './containers/Projects'
import Contact from './components/Contact'
import Navigation from './components/Navigation'

class App extends React.Component{
  render() {
    return(
      <div>
        <MuiThemeProvider>
          <Navigation/>
        </MuiThemeProvider>

        <Route exact={true} path="/" component={Home}/>
        <Route path="/projects" component={Projects}/>
        <Route path="/contact" component={Contact}/>
      </div>
    )
  }
}

export default App
