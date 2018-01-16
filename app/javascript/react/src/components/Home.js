import React from 'react'

const Home = (props) => {
  return(
    <div>
      <div>
        <ul className="bubbles">
          <li><img style={{width:'100%',height:'100%'}} src={require("tech/ruby.png")}/></li>
          <li><img style={{width:'100%',height:'100%'}} src={require("tech/rails.png")}/></li>
          <li><img style={{width:'100%',height:'100%'}} src={require("tech/react.png")}/></li>
          <li><img style={{width:'100%',height:'80%'}} src={require("tech/postgres.svg")}/></li>
          <li><img style={{width:'100%',height:'100%'}} src={require("tech/d3.png")}/></li>
          <li><img style={{width:'100%',height:'100%'}} src={require("tech/python.png")}/></li>
          <li><img style={{width:'100%',height:'100%'}} src={require("tech/javascript.png")}/></li>
        </ul>

      </div>
      <div className="home-tile">
          My name is Sean and I'm a web developer. I enjoy finding elegant solutions to challenging problems and thrive in highly collaborative environments with multi-disciplinary teams.
      </div>
    </div>
  )
}

export default Home
