import './index.css'

const BlogItem = props => {
  const {listDetails} = props
  const {title, description, publishedDate} = listDetails
  console.log(listDetails)
  return (
    <li className="list">
      <div className="head-date">
        <h1 className="title-head">{title}</h1>
        <p>{publishedDate}</p>
      </div>
      <p className="descrip">{description}</p>
    </li>
  )
}

export default BlogItem
