import React from "react"
import aboutImg from "../../images/saroj-trans.png"
import SocialLinks from "../shared/SocialLinks"

export default function AboutSection() {
  return (
    <section className="about-section">
      <div className="wrapper">
        <div className="about-wrapper">
          <div className="description-section">
            <h1>About Me</h1>

            <span>
              I'm a professional network engineer from Melbourne,Australia. I am
              dedicated to my passion on networking and cybersecurity and enjoy
              my writing.{" "}
            </span>

            <p>
              I enjoy solving complex problems and extract simple solutions. I
              am mostly busy with my research on networking and cybersecurity
              field. If I'm not onto it, you'll find me either out in trekking,
              cooking or walking around in the park.
            </p>
            <div className="social-wrapper">
              <h1>Find me On</h1>
              <SocialLinks />
            </div>
          </div>
          <div className="image-section">
            <img src={aboutImg} />
          </div>
        </div>
      </div>
    </section>
  )
}
