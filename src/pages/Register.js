import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <div className="login-section">
      <div className="login">
        <div className="card">
          <h2 className="card-title">Register</h2>
          <form>
            <div className="input-block">
              <label htmlFor="name">Full name</label>
              <input type='text' placeholder="Username" name="name" />
            </div>
            <div className="input-block">
              <label htmlFor="email">Email address</label>
              <input type='email' placeholder="Enter your email" name="email" />
            </div>

            <div className="input-block">
              <label htmlFor="number">Phone number</label>
              <input type='number' placeholder="Phone number" name="number" />
            </div>

            <div className="input-block">
              <label htmlFor="password">Password</label>
              <input type='password' placeholder="Password" name="password" />
            </div>

            <div className="input-block">
              <label htmlFor="con_pass">Confirm password</label>
              <input type='password' placeholder="Confirm password" name="con_pass" />
            </div>
            <button className="btn">Register</button>
          </form>
          <Link to='/login' className='login-link'>
          <p>Do you have an account</p>
          <span className="register-span">Login</span>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Register