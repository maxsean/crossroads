import React from 'react'
import { Link, Route } from 'react-router-dom'
import Project from '../components/Project'

class Projects extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      projects: [
        {
          id: 1,
          name: "YANA",
          description: "Chronic Illness Patient Support",
          url: "yana-app.herokuapp.com"
        },
        {
          id: 2,
          name: "Eatalike",
          description: "Restaurant Review Site",
          url: "eatalike.herokuapp.com"
        }
      ]
    }
  }

  render(){
    var projectList = this.state.projects.map( (project) => {
      return(
        <li key={project.id}>
          <Link to={`${this.props.match.url}/${project.id}`}>
            {project.name}
          </Link>
        </li>
      )
    })

    return(
      <div>
        <div>
          <div>
            <h3>Projects</h3>
            <ul>{projectList}</ul>
          </div>
        </div>

        <Route path={`${this.props.match.url}/:projectId`} render={ (props) => <Project data={this.state.projects} {...props} />}/>
        <Route exact path={this.props.match.url} render={() => (<div>Please select a project</div>)}/>
      </div>
    )
  }
}

export default Projects
