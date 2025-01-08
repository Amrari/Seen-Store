import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './sign-In.styles.css';
import { signInWithGooglePopup,createUserDocumentFromAuth } from '/home/amr/projects/Frontend/Seen-Store/src/utils/firebase/firebase.utils.jsx';


const SignIn = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [phonenumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [storeName, setStoreName] = useState('');
  const [userType, setUserType] = useState('normal');
  const [storeLinkAddress, setStoreLinkAddress] = useState('');
  const [storeCity, setStoreCity] = useState('');
  
   
  const logGoogleUser = async () => {
      const { user } = await signInWithGooglePopup();
       await createUserDocumentFromAuth(user);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="su-container">
      <div className="su-top"></div>
      <div className="su-bottom"></div>
      <div className="su-center">
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <select className='user-type'
            value={userType}
            onChange={(e) => setUserType(e.target.value)}
          >
            <option value="normal">Normal User</option>
            <option value="store">Store Owner</option>
          </select>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="text"
            placeholder="Phone Number"
            value={phonenumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          <input
            type="text"
            placeholder="Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          <input
            type="text"
            placeholder="City"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          {userType === 'store' && (
            <>
              <input
                type="text"
                placeholder="Store Name"
                value={storeName}
                onChange={(e) => setStoreName(e.target.value)}
              />
              <input
                type={Link}
                placeholder="Store Instagram Url"
                value={storeLinkAddress}
                onChange={(e) => setStoreLinkAddress(e.target.value)}
              />
              <input
                type="text"
                placeholder="Store City"
                value={storeCity}
                onChange={(e) => setStoreCity(e.target.value)}
              />
            </>
          )}
          <button className="SignIn-button" type="submit">Sign Up</button>
          <button className="google-button" onClick={logGoogleUser}>
            Sign Up with Google </button>
        </form>
        <p>Already have an account? <Link to="/login">Login</Link></p>
      </div>
    </div>
  );
};

export default SignIn;