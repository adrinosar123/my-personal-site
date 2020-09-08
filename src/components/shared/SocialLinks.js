import React from "react"
import {
  FaFacebookSquare,
  FaLinkedin,
  FaInstagramSquare,
  FaGithub,
  FaTwitterSquare,
  FaCoffee,
} from "react-icons/fa"

const data = [
  {
    id: 1,
    icon: <FaFacebookSquare className="social-icon1"></FaFacebookSquare>,

    url: "https://www.facebook.com/adrinosar123",
  },
  {
    id: 2,
    icon: <FaTwitterSquare className="social-icon"></FaTwitterSquare>,
    url: "https://twitter.com/adrinosar123",
  },
  {
    id: 3,
    icon: <FaLinkedin className="social-icon"></FaLinkedin>,
    url: "https://www.linkedin.com/in/adrinosar123/",
  },
  {
    id: 4,
    icon: <FaInstagramSquare className="social-icon"></FaInstagramSquare>,
    url: "https://www.instagram.com/adrinosar123/",
  },
  {
    id: 5,
    icon: <FaGithub className="social-icon"></FaGithub>,
    url: "https://github.com/adrinosar123",
  },
  {
    id: 5,
    icon: <FaCoffee className="social-icon"></FaCoffee>,
    url: "https://ko-fi.com/saroj",
  },
]
const links = data.map(link => {
  return (
    <li key={link.id}>
      <a href={link.url} className="social-link" target="__blank">
        {link.icon}
      </a>
    </li>
  )
})

export default () => {
  return <ul className="social-link">{links}</ul>
}
