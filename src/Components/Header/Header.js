import { withCookies, useCookies } from 'react-cookie';
import React, { useEffect, useState } from 'react';
import jwt from 'jwt-decode';
import request from 'axios';
import Stack from '@mui/material/Stack';
import SigninModal from './Signin/SigninModal.js';
import SignupModal from './Signup/SignupModal.js';
import LogoutButton from './Logout/LogoutButton.js';
import UserAvatar from './Avatar/UserAvatar.js';

function Header() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState('false');
  const [cookies, setCookie, removeCookie] = useCookies();

  useEffect(() => {
    const jwtToken = cookies.token;
    try {
      const appJwt = jwt(jwtToken);
      const tokenUsername = appJwt.username;
      setUsername(tokenUsername);
      setLoggedIn(true);
    } catch (err) {}
  }, []);

  const handleSignin = async (username, password) => {
    const credentials = {
      username,
      password,
    };
    try {
      const res = await request.post('http://localhost:8080/signin', credentials, {
        withCredentials: true,
      });
      setLoggedIn(true);
      setUsername(username);
    } catch (err) {
      console.log(err);
      setLoggedIn(false);
    }
  };

  const handleSignup = async (username, password, email) => {
    const credentials = {
      username,
      password,
      email,
    };

    try {
      const res = await request.post('http://localhost:8080/signup', credentials, {
        withCredentials: true,
      });
      console.log('hehehe');
      console.log(res);
      setLoggedIn(true);
      setUsername(username);
    } catch (err) {
      console.log(err);
    }
  };

  const handleLogout = () => {
    removeCookie('token');
    setUsername('');
    setLoggedIn(false);
  };

  return (
    <div className="Header">
      <Stack direction="row" spacing={2}>
        <SigninModal loggedIn={loggedIn} title="Sign In" handleSignin={handleSignin} />
        <SignupModal loggedIn={loggedIn} title="Sign Up" handleSignup={handleSignup} />
        <UserAvatar loggedIn={loggedIn} username={username} />
        <LogoutButton logoutUser={handleLogout} loggedIn={loggedIn} />
      </Stack>
    </div>
  );
}

export default Header;
