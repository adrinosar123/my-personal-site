import React from "react"

import Project from "./Project"
import projects from "../../components/projectData"

export default function PortfolioSection() {
  return (
    <section className="portfolio-section">
      <div className="wrapper">
        <div className="portfolio-wrapper">
          <h2>Projects</h2>
          <p>Explore some of my recent projects</p>
          <div className="projects-wrapper">
            {projects.map(project => {
              return (
                <Project
                  title={project.projectName}
                  description={project.description}
                  image={project.imagePath}
                  path={project.path}
                />
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
