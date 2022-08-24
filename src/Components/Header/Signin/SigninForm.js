import React, { useState, useEffect } from 'react';
import { withCookies, useCookies } from 'react-cookie';
import jwt from 'jwt-decode';
import Stack from '@mui/material/Stack';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import request from 'axios';

function SigninForm({ buttonText, onClose, handleSignin }) {
  const [username, setUsername] = useState('DefaultBob');
  const [password, setPassword] = useState('DefaultPassword');
  const [cookies, setCookie] = useCookies();

  // Autofill username if theres a valid token
  useEffect(() => {
    const jwtToken = cookies.token;
    console.log(jwtToken);
    try {
      const appJwt = jwt(jwtToken);
      setUsername(appJwt.username);
    } catch (err) {}
  }, [username]);

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmitButton = async () => {
    await handleSignin(username, password);
    onClose();
  };

  return (
    <form className="SigninForm">
      <Stack spacing={5}>
        <FormControl>
          <TextField type="text" label="Username" value={username} onChange={handleUsernameChange} />
        </FormControl>
        <FormControl>
          <TextField type="text" label="Password" value={password} onChange={handlePasswordChange} />
        </FormControl>
        <FormControl>
          <Button variant="contained" onClick={handleSubmitButton}>{buttonText}</Button>
        </FormControl>
      </Stack>
    </form>
  );
}

export default withCookies(SigninForm);
