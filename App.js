import React from 'react';
import './App.css';


 function App(){




  return (
    <div ClassName="form">

<div className="form-body">
<h1 className='h1'  >Registration Form </h1>
        
              <div className="username">
                  <label className="form__label" for="firstName">First Name </label><br></br><br></br>
                  <input className="form__input" type="text" id="firstName" placeholder="First Name"/><br></br><br></br>
              </div>
              <div className="lastname">
                  <label className="form__label" for="lastName">Last Name </label><br></br><br></br>
                  <input  type="text" name="" id="lastName"  className="form__input"placeholder="LastName"/><br></br><br></br>
              </div>
              <div className="email">
                  <label className="form__label" for="email">Email </label><br></br><br></br>
                  <input  type="email" id="email" className="form__input" placeholder="Email"/><br></br><br></br>
              </div>
              <div className="password">
                  <label className="form__label" for="password">Password </label><br></br><br></br>
                  <input className="form__input" type="password"  id="password" placeholder="Password"/><br></br><br></br>
              </div>
              <div className="confirm-password">
                  <label className="form__label" for="confirmPassword">Confirm Password </label><br></br><br></br>
                  <input className="form__input" type="password" id="confirmPassword" placeholder="Confirm Password"/><br></br><br></br>
              </div>
          </div>
          <div class="footer">
              <button type="submit" class="btn" > submit </button><br/>
              
          </div>
  
  
    </div>
  );
}


export default App;

