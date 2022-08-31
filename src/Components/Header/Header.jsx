import { useCookies } from 'react-cookie';
import React, { useEffect, useState } from 'react';
import jwt from 'jwt-decode';
import request from 'axios';
import Stack from '@mui/material/Stack';
import SigninModal from './Signin/SigninModal';
import SignupModal from './Signup/SignupModal';
import LogoutButton from './Logout/LogoutButton';
import UserAvatar from './Avatar/UserAvatar';

function Header() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [cookies, removeCookie] = useCookies();

  useEffect(() => {
    const jwtToken = cookies.token;
    try {
      const appJwt = jwt(jwtToken);
      const tokenUsername = appJwt.username;
      setUsername(tokenUsername);
      setLoggedIn(true);
    } catch (err) {
      setUsername('');
      setLoggedIn(false);
    }
  }, [cookies.token]);

  const handleSignin = async (inputUsername, inputPassword) => {
    const credentials = {
      inputUsername,
      inputPassword,
    };
    try {
      await request.post('http://localhost:8080/signin', credentials, {
        withCredentials: true,
      });
      setLoggedIn(true);
      setUsername(username);
    } catch (err) {
      setLoggedIn(false);
    }
  };

  const handleSignup = async (inUsername, password, email) => {
    const credentials = {
      inUsername,
      password,
      email,
    };

    try {
      await request.post('http://localhost:8080/signup', credentials, {
        withCredentials: true,
      });
      setLoggedIn(true);
      setUsername(username);
    } catch (err) {
      setLoggedIn(false);
      setUsername('');
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
