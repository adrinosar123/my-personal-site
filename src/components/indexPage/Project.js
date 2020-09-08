import React from "react"

export default function Project({ title, description, image, path }) {
  return (
    <div className="project">
      <div className="image-wrapper">
        <img src={image} />
      </div>
      <div className="project-text-wrapper">
        <h3>{title}m</h3>
        <p>{description}</p>
        <a href={path} className="btn project-button">
          Show more
        </a>
      </div>
    </div>
  )
}
