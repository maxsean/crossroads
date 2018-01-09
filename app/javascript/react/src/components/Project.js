import React from 'react'
import Slider from 'react-slick'

const Project = ({match,data}) => {
  var project = data.find(p => p.id == match.params.projectId)
  var projectData

  if(project) {
    let images = project.images.map(image => {
      return(
        <div
          key={image}
        >
          <img src={require(`../../../../assets/images/${image}`)}
          style={{width:'100%',height:'100%'}}
          />
        </div>
      )
    })
    let settings = {
      autoplay: true,
      autoplaySpeed: 8000,
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      lazyLoad: true,
      pauseOnHover: true,
      swipeToSlide: true,
    }
    projectData =
      <div>
        <div style={{padding:'0 20px'}}>
          <h3> {project.name} </h3>
          <p> {project.description} </p>
          <p> {project.url} </p>
        </div>
        <div style={{padding:'0 20px'}}>
          <Slider {...settings}>
            {images}
          </Slider>
          <br/>
          <br/>
        </div>
      </div>
  } else {
    projectData = <h2>Project does not exist</h2>
  }

  return(
    <div>
      <div>
        {projectData}
      </div>
    </div>
  )
}

export default Project
