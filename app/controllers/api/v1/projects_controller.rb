class Api::V1::ProjectsController < Api::V1::ApiController
  def index
    projects = Project.all.order('name')
    render json: projects
  end

  def show
    project = Project.find(params["id"])
    render json: project
  end
end
