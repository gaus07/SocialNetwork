import React from 'react';

function Signup() {
  return (

    <div className='mycard'>
      <div className='card auth-card input-field'>
        <h2>InstaBook</h2>
        <input type="text" placeholder='Name' />
        <input type="text" placeholder='Email' />
        <input type="text" placeholder='Password' />
        <button class="btn waves-effect waves-light #0a6ab6 blue" type="submit" name="action">Sign In
        </button>
        <h6>
          <Link to="/signin"> Already have an account ?</Link>
        </h6>
      </div>
    </div>

  );
}

export default Signup;