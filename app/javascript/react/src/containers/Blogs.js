import React from 'react'

class Blogs extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      blogs: null
    }
  }

  componentDidMount() {
    this.fetchBlogs()
  }

  fetchBlogs() {
    fetch('/api/v1/blogs')
    .then(response => response.json())
    .then(data => {
      this.setState({
        blogs: data
      })
    })
  }

  render() {
    let blogs
    if (this.state.blogs) {
      blogs = this.state.blogs.map(blog => {
        return(
          <div
            className="home-tile"
            key={blog.id}>
            <h2>
              {blog.title}
            </h2>
            <p>
              {Date(blog.updated_at).toString().substring(3,15)}
            </p>
            <p dangerouslySetInnerHTML={{__html: blog.body}} />
          </div>
        )
      })
    }

    return(
      <div>
        {blogs}
      </div>
    )
  }
}

export default Blogs
