import React from "react"


export default function FormSection() {
    return(
        <div className= "form-section">
                <form action="/action_page.php">
                    <label for="fname">FirstName</label>
                    <input type="text" id="fname" name="firstname" placeholder="Your first name...">
                        </input>

                        <label for="lname">LastName</label>
                    <input type="text" id="lname" name="lastname" placeholder="Your last name...">

                        </input>

                        <label for="email">E-mail</label>
                    <input type="text" id="email" name="email" placeholder="Your E-mail...">
                        
                        </input>

                        <label for="message">Message</label>
                    <textarea id="message" name="message" placeholder="Your Message..." 
                        
                      />
                      <button type="submit" value="Submit"> Send</button>
                        
                        </form> 
                        </div>
    )
}