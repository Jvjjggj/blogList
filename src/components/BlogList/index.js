import BlogItem from '../BlogItem'

import './index.css'

const BlogList = props => {
  const {blogsList} = props
  return (
    <ul className="unorder-list">
      {blogsList.map(i => (
        <BlogItem key={i.id} listDetails={i} />
      ))}
    </ul>
  )
}

export default BlogList
