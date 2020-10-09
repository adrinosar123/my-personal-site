import React from "react"
import Resume from "../../assets/Resume.pdf"

export default function AboutDescription() {
  return (
    <section className="about-description">
      <div className="wrapper">
        <div className="skills-section">
          <h1> Skills </h1>
          <ul>
            <li>
              Network designing including <em>Routing and Swithing</em> in Cisco
              Packet Tracer.
            </li>
            <li>Network and Cyber Security using Firewall and IDPs.</li>
            <li>
              Ethical Hacking{" "}
              <em>
                (such as Windows Attack with Armitage, Crunch, Cewl and Other
                Penetration Tools)
              </em>{" "}
              using Kali linux.
            </li>
            <li>
              An IoT based Real-Time Meat Inventory Management System using:
              <br />
              <br />
              <span>
                <em>Hardware:</em> RFID, DHT11(Temperature Sensor) and Raspberry
                Pi.
              </span>
              <br />
              <br />
              <span>
                {" "}
                <em>Software:</em> Raspbian, Python, Node.JS, EJS, MongoDB,
                Express
              </span>
              <br /> <br />
            </li>
            <li>
              Web Application Development with{" "}
              <em>React, Node, Gatsby and GraphQL.</em>
            </li>
          </ul>
        </div>
        <div className="resume-section">
          <h1>Resume </h1>
          <p> Want to Hire me! Here is my Resume: </p>
          <a target="_blank" href={Resume}>
            {" "}
            Resume
          </a>
        </div>
        <div className="website-section">
          <h1>About this website</h1>
          <p>
            This website is my personal portfolio site. I have designed and
            developed it using React/Gatsby. If you are interested on how I
            built this website, you can see my blog on it{" "}
            <a href="/"> Click Here</a>
            (Coming Soon)
          </p>
        </div>
      </div>
    </section>
  )
}
