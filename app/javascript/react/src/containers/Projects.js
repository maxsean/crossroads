import React from 'react'
import { Link, Route } from 'react-router-dom'
import Project from '../components/Project'

class Projects extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      projects: [],
      selected: window.location.pathname.split('/')[2]
    }
    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount() {
    this.fetchProjects()
  }

  fetchProjects() {
    fetch('/api/v1/projects')
    .then(response => response.json())
    .then(data => {
      this.setState({
        projects: data
      })
    })
  }

  handleClick(event){
    this.setState({
      selected: event.target.id
    })
  }

  render(){
    var projectList = this.state.projects.map( (project) => {
      let tileClass
      if (project.id == this.state.selected) {
        tileClass = "project-tile-selected"
      } else {
        tileClass = "project-tile"
      }

      return(
        <div className={tileClass} key={project.id}>
          <Link
            id={project.id}
            to={`${this.props.match.url}/${project.id}`}
            style={{textDecoration:'none'}}
            onClick={this.handleClick}
          >
            {project.name}
          </Link>
        </div>
      )
    })
    return(
      <div className="project-tab">
        <div>
          <div className="project-list">
            {projectList}
          </div>
        </div>

        <div className="project">
          <Route path={`${this.props.match.url}/:projectId`} render={ (props) => <Project data={this.state.projects} {...props} />}/>
          <Route exact path={this.props.match.url} render={() => (<div style={{padding:'18px 0'}}>Please select a project</div>)}/>
        </div>
      </div>
    )
  }
}

export default Projects
