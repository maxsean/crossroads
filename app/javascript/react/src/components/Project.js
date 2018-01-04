import React from 'react'

const Project = ({match,data}) => {
  var project = data.find(p => p.id == match.params.projectId)
  var projectData

  if(project) {
    projectData =
      <div>
        <h3> {project.name} </h3>
        <p> {project.description} </p>
        <p> {project.url} </p>
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
