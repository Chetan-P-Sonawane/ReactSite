import React from 'react'
import "../styles/home.scss"
import vg from "../assets/2.webp"
import { Link } from 'react-router-dom';
import { AiFillFacebook, AiFillDropboxCircle ,AiFillGithub, AiFillPlusCircle  } from "react-icons/ai";

const Home = () => {
  return (
    <>

    <div className="home" id="home">

    <main>
    <h1>React</h1>
    <p>A JavaScript library
        
    </p>
    </main>
    </div>

    <div className="home2"> 
    <img  src={vg} alt="Graphics"/>
     
     <div>
        <p>
            We are your one and only solution to the tech problems you face
            every day. We are leading tech company whose aim is to provide the
            best solutions to decrease the efforts of Developers.
        </p>
     </div>
    </div>

    <div className="home3" id="about">
    <div>
    <h1> What is React ?</h1>
        <p>
        React JS is a free and open-source front-end JavaScript library for 
        building user interfaces based on components. It is maintained by
         Meta (formerly Facebook) and a community of individual developers
         and companies. React is used for building interactive user 
         and web applications quickly and efficiently with significantly 
        less code than you would with vanilla JavaScript
        React can be used to develop single-page, mobile,
         or server-rendered applications with frameworks like Next.js. 
         Because React is only concerned with the user interface and rendering
          components to the DOM, React applications often rely on libraries for 
          routing and other client-side functionality.
        </p>
    </div>

    </div>

    <div className="home4">
       <div>
        <h1>Brands</h1>

        <article>

            <div style={{
                animationDelay:"0.3s"
            }}>

            <AiFillFacebook />
            <p>Facebook</p>
            </div>

            <div style={{
                animationDelay:"1s"
            }}>
            <AiFillGithub />
            <p>Github</p>
            </div>

            <div style={{
                animationDelay:"0.7s"
            }}>

            <AiFillDropboxCircle />
            <p>Dropbox</p>
            </div>

            

            <div style={{
                animationDelay:"1s"
            }}>
            <Link to="/brands"><AiFillPlusCircle /></Link>
            <p>more</p>
            </div>

            


            
        </article>
       </div>

    </div>

    </>
  )
}


export default Home