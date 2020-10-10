import React from "react"
import FormSection from "./FormSection"
import SocialLinks from "../shared/SocialLinks"


export default function AboutSection() {
    return(
        <section className="about-section">
            <div className="wrapper"> 
      
          <div className="description-section">
            <h1>Contact Me</h1>

            <p>I am glad to answer your Question</p>
            <p>Or just send a friendly hello to <a href="mailto:adrinosar123@gmail.com">adrinosar123@gmail.com</a></p>


        <FormSection />
            </div>

            <div className="social-wrapper">
            <h2>
                    I am social
                </h2>
                <SocialLinks />
            </div>
            

            


            
            </div>
            </section>
    )
}
