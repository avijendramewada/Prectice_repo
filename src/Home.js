import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
function Home() {
    return (
        <div >
           <div >
           <header id="showcase">
    <h1>Welcome To The Our Company</h1>
    <p>The equipment alone can’t play out a specific count or control without being told precisely what to do and in
      what request to do it..</p>
    <div>
       <button><Link to="onform">  click here</Link></button> 
    </div>
  </header>

    <p> we develop innovative and creative products and services that provide total communication and information
      solutions.
      Among a plethora of services, web design and development, tailor made applications, ERPs, CRMs,
      e-commerce solutions, business-to-business applications, business-to-client applications, managed hosting and
      internet portal management are few that we offer. Satisfied clients around the globe bear testimony to the
      quality of our work.
      </p>
  
           </div>
        </div>
    )
}

export default Home
