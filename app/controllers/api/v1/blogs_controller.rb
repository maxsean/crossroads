class Api::V1::BlogsController < Api::V1::ApiController
  def index
    package = []
    blogs = Blog.all.order('updated_at DESC')

    blogs.each do |blog|
      post = {
        id: blog.id,
        title: blog["title"],
        body: blog["body"].gsub(URI.regexp, '<a href="\0" target="_blank">\0</a>').html_safe,
        updated_at: blog["updated_at"]
      }
      package.push(post)
    end

    render json: package
  end

end
