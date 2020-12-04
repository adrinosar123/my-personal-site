import React from "react"
import { Link } from "gatsby"
const data = [
  {
    id: 1,
    text: "Home",
    url: "/",
  },
  {
    id: 2,
    text: "About",
    url: "/about/",
  },
  {
    id: 3,
    text: "Projects",
    url: "/project/",
  },
  {
    id: 4,
    text: "Blog",
    url: "/blog/",
  },
  {
    id: 5,
    text: "Contact",
    url: "/contact/",
  },
]

const tempLinks = data.map(link => {
  return (
    <li key={link.id}>
      <Link to={link.url} className="btn" activeClassName="active-btn">
        {link.text}
      </Link>
    </li>
  )
})

export default () => {
  return <ul className="page-links">{tempLinks}</ul>
}
