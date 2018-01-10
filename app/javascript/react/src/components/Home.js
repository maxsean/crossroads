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
        </ul>

      </div>
    </div>
  )
}

export default Home
