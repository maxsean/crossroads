import React from 'react'
import Blogs from '../containers/Blogs'

const Home = (props) => {
  return(
    <div>
      <div
        className="home-tile"
        style={{
          backgroundColor:"#373737",
          color:"#C0B283",
          textAlign:"center"
        }}
        >
          <p>
            My name is Sean and I'm a web developer. I enjoy finding elegant solutions to challenging problems and thrive in highly collaborative environments with multi-disciplinary teams.
          </p>
      </div>
      <Blogs />
    </div>
  )
}

export default Home
