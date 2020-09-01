import React, { useState, useEffect } from "react";
import { fetchPositions } from '../../usersGateway';
import PositionsList from './PositionsList';
import { postUserData, fetchToken } from '../../usersGateway';

const Form = () => {
  const [ positions, setPositions ] = useState([]);
  const [ token, setToken] = useState ('');

  useEffect(() => {
    fetchPositions
      .then(data => 
        setPositions( data.positions ) )
      .catch( error => new Error(error) );
        
    fetchToken
      .then(data => 
        setToken( data.token ) )
      .catch( error => new Error(error) );
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = [...new FormData(e.target)]
      .reduce((acc, [name, value]) => {
        const typization = name === "position_id" ? Number(value) : value;

        return ({...acc, [name]: typization});
        }, {});
          

    postUserData(token, formData)
  }
  
  console.log(token);
  
  return (
    <div className="registration">
      <h1 className="registration-headline">
        Register to get a work
      </h1>
      <p className="registration-paragraph">
        Attention! After successful registration and alert, update the 
        list of users in the block from the top
      </p>
      <form className="form" onSubmit={handleSubmit}
        encType="multipart/form-data"
      >
        <div className="form-control">
          <label className="form-lable">Name</label>
          <input className="form-input" 
            type="text" id="name" name="name" 
            placeholder="Your name" required 
          />
        </div>
        <div className="form-control"
          style={{marginTop: "25px"}}  
        >
          <label className="form-lable">Email</label>
          <input className="form-input" 
            type="email" id="email" name="email" 
            placeholder="Your email" required 
          />
        </div>
        <div className="form-control"
          style={{marginTop: "25px"}}
        >
          <label className="form-lable">Phone number</label>
          <input className="form-input" 
            type="tel" id="phone" name="phone" 
            placeholder="+380 XX XXX XX XX" required 
          />
          <span className="form-outline">Enter phone number in open format</span>
        </div>
        <PositionsList positions={positions} />
        <div className="form-control">
          <label className="form-lable"
            style={{margin: "7px 0"}}
          >Photo</label>
          <input className="form-input" 
            type="file" id="photo" name="photo"  
            multiple accept=".jpg, .jpeg"
            required
          />
        </div>
        <button className="form-btn"
          type="onSubmit"
        >
          Sing up now
        </button>
      </form>

    </div>
  )
};

export default Form;