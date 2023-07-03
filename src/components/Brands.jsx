import React from 'react'
import { AiFillFacebook, AiFillInstagram, AiFillDropboxCircle, AiFillYahoo, AiFillRedditCircle, AiFillGithub, AiFillSkype, AiFillTwitterCircle, AiOutlineWhatsApp, AiFillCloud } from "react-icons/ai";
import "../styles/brands.scss"

const Brands = () => {
  return (
    <>
    <div className="brands" >
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
                animationDelay:"0.5s"
            }}>

            <AiFillInstagram />
            <p>Instagram</p>
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
            <AiFillYahoo />
            <p>Yahoo Mail</p>
            </div>

            <div style={{
                animationDelay:"0.5s"
            }}>
            <AiFillRedditCircle />
            <p>Reddit</p>
            </div>

            <div style={{
                animationDelay:"0.7s"
            }}>
            <AiFillGithub />
            <p>Github</p>
            </div>

            <div style={{
                animationDelay:"0.3s"
            }}>
            <AiFillSkype />
            <p>Skype</p>
            </div>

            <div style={{
                animationDelay:"0.4s"
            }}>
            <AiFillTwitterCircle />
            <p>Twitter</p>
            </div>

            <div style={{
                animationDelay:"0.2s"
            }}>
            <AiOutlineWhatsApp />
            <p>Whatsapp</p>
            </div>

            <div style={{
                animationDelay:"0.8s"
            }}>
            <AiFillCloud />
            <p>Cloudflare</p>
            </div>

         


            
        </article>
       </div>
       </div>
       </>
  )
}

export default Brands