import React from 'react';
import "./Login.css";

const Login = () => {
    return (
      <div className="Loginbody">
      <div className="Login">
        <h2>Login</h2>
        <form>
          <div className="text_area">
            <input
              type="username"
              id="username"
              name="username"
              placeholder="username"
              className="text_input"
              required/>
          </div>
          <div className="text_area">
            <input
              type="password"
              id="password"
              name="password"
              placeholder="password"
              className="text_input"
              required />
          </div>
          <div  classname='button'>
            <button>submit</button>

          </div>
          <div className='register'>
            <br/>
            <br/>
        </div>
        </form>

      </div>
      </div>
    )
  }

export default Login;