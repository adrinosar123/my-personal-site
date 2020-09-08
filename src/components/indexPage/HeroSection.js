import React from "react"
import { FaRegBell } from "react-icons/fa"
import profile from "../../images/hero-img.jpg"
import SocialLinks from "../shared/SocialLinks"

export default function HeroSection() {
  return (
    <section className="hero-section">
      <div className="wrapper">
        <div className="hero-wrapper">
          <div className="profile-section">
            <div className="profile-wrapper">
              <div className="profile-img">
                <img src={profile} />
              </div>
              <div className="profile-text">
                <h3>Newsletter</h3>
                <p>
                  I have compiled my codes utilizing my free time and hobbie.
                  Please subscribe below to get updates of my few ideas.{" "}
                </p>
                <a href="/">
                  <div className="subscribe-text">Subscribe</div>

                  <FaRegBell />
                </a>
              </div>
            </div>
          </div>
          <div className="description-section">
            <div className="description-wrapper">
              <div className="description-text">
                <h2>Hello. Welcome to my site.</h2>
                <p>
                  I am professional network engineer. I am dedicated to my
                  passion on cybersecurity and enjoy my writing.
                </p>
                <div className="description-btn">
                  <a href="/" className="btn">
                    About Me
                  </a>
                  <a href="/" className="btn">
                    Resume
                  </a>
                </div>
              </div>
              <div className="social-wrapper">
                <SocialLinks />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
