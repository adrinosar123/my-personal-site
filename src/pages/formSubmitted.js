import React from "react";
import Layout from "../components/Layout"
import {Link} from "gatsby"

export default () => {
    return (
      <Layout>  
        <div className="success">
          <div className="success-wrapper">
          <h1> Thank you!</h1>
          <h2>Your message is successfully sent.</h2>
          <p>Hi there, I am really glad that you contact me. I will get back to you as soon as possible!</p>
          <p>Happy time! Cheers!</p>
          <Link to = "/" className="Link">Go to Homepage</Link>
          </div>
          </div>

</Layout>
      
    )
  }