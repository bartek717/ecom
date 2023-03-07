import React, { useState } from 'react';
import ecommind from '../assets/ecommind.png'
import '../styles/Form.css'
import { addDoc, collection } from "@firebase/firestore"
import { db } from "../Firebase.js"
import { doc, setDoc } from "firebase/firestore"; 

const Form = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [purpose, setPurpose] = useState('');
  const [buttonClicked, setButtonClicked] = useState(false);
  const ref = collection(db, "sign_ups");
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      email: email,
      name: name,
      purpose: purpose
    }
    try{    
      addDoc(ref, data);
    } catch (error) {
      console.log(error)
    }
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Purpose:', purpose);
    setName('');
    setEmail('');
    setPurpose('');
    setButtonClicked(true);
  };

  return (
    <div>
    <img src={ecommind} alt="ecommind" className='logo2'/>
    <div className='container'>
    {buttonClicked ? (
      <div>
        <h1>Thank you for your interest. Upon release you will be sent a 50% off code as a thank you!</h1>
      </div>
    ) : (
      <div>
      <h1>Get Notified when we release</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <input
            type="text"
            value={name}
            className="inputfield"
            placeholder='Name'
            onChange={(event) => setName(event.target.value)}
          />
        </label>
        <br />
        <label>
          <input
            type="email"
            value={email}
            className="inputfield"
            placeholder='Email'
            onChange={(event) => setEmail(event.target.value)}
          />
        </label>
        <br />
        <label>
          <input
            type="text"
            value={purpose}
            className="inputfield"
            placeholder='Product'
            onChange={(event) => setPurpose(event.target.value)}
          />
        </label>
        <br />
        <button className="button" type="submit" onClick={handleSubmit}>Submit</button>
    </form>
    </div>
    )}
    </div>
    </div>
  );
};

export default Form;