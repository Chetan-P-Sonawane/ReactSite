import React from 'react'
import { AiFillLinkedin, AiFillGithub, AiFillInstagram } from 'react-icons/ai'


const Footer = () => {
  return (
    <footer>
  
    <div>
        <h5>
            Follow Us
        </h5>
        
       <div>
       <article>

           <div>
            <a href="https://www.linkedin.com/in/chetan-sonawane-345521201/" target="blank">
            <AiFillLinkedin />
            </a>
            </div>

            <div>
            <a href="https://instagram.com/x__invincible__x?igshid=ZGUzMzM3NWJiOQ==" target="blank">
            <AiFillInstagram/>
            </a>
            </div>

            <div>
            <a href="https://github.com/chetanps3110?tab=repositories" target="blank">
            <AiFillGithub/>
            </a>
            </div>
          
         
        </article>
        
        </div>
        


        
      
        <div>
            <h1>CS</h1>
            <p>@all right reserverd</p>
        </div>
    </div>

    

    </footer>



  )
}

export default Footer