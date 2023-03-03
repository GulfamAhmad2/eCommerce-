import React from 'react'
import { Link } from "react-router-dom";

import Apple from '../components/assets/svg/apple.svg'
import Facebook from '../components/assets/svg/facebook.svg'
import Google from '../components/assets/svg/google.svg'
const login = () => {
  return (
    <div className="login-section">
      <div className="login">
        <div className="card">
          <h2 className="card-title">Login</h2>
          <form>
            <div className="input-block">
              <label htmlFor="name">Username</label>
              <input type='text' placeholder="Username" name="name" />
            </div>
            <div className="input-block">
              <label htmlFor="pass">Password</label>
              <input type='password' placeholder="Password" name="pass" />
            </div>
            <button className="btn">Login</button>
          </form>
          <Link to='/register' className='login-link'>
          <p>Don't you have an account</p>
          <span className="register-span">Register</span>
          </Link>
          <div className="using-social-media">
            <button
             className="media">
            
            <img src={Google} />
            <span className="media-name">Google</span>
            </button>

            <button className="media">
            <img src={Facebook} alt="facebook"/>

            <span className="media-name">Facebook</span>
            </button>

            <button className="media">
            <img src={Apple}/>
            <span className="media-name">Apple</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default login