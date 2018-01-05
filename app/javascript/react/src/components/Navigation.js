import React from 'react'
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import Tabs from 'material-ui/Tabs/Tabs';
import Tab from 'material-ui/Tabs/Tab';
import Menu from 'material-ui/svg-icons/navigation/menu';
import { Link } from 'react-router-dom';

class Navigation extends React.Component {
  constructor(props){
    super(props)
  }

  render() {
    var titleStyle = {
      margin: 0,
      color: 'black',
      textAlign: 'center',
      fontFamily: 'EB Garamond, serif'
    }
    const Title = () => (
      <h3 style={titleStyle}>Xiaonan Sean Ma</h3>
    )

    var appBarStyle = {
      backgroundColor: 'white',
      boxShadow: 'none'
    }

    var tabStyle = {
      backgroundColor: 'white',
      color: 'black',
      fontFamily: 'EB Garamond, serif'
    }

    return(
      <div>
        <AppBar
            title={<Title/>}
            showMenuIconButton={false}
            className="appbar"
            style={appBarStyle}
          >
        </AppBar>
        <Tabs className="tabs">
          <Tab label="Home" style={tabStyle} containerElement={<Link to="/" />} />
          <Tab label="Projects" style={tabStyle} containerElement={<Link to="/projects" />} />
          <Tab label="Contact" style={tabStyle} containerElement={<Link to="/contact" />} />
        </Tabs>
      </div>
    )
  }
}

export default Navigation
