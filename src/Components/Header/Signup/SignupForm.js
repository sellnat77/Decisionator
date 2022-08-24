import React, { useState } from 'react';
import { withCookies, useCookies } from 'react-cookie';
import jwt from 'jwt-decode';
import Stack from '@mui/material/Stack';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import request from 'axios';

function SignupForm({ buttonText, onClose, handleSignup }) {
  const [username, setUsername] = useState('DefaultBob');
  const [password, setPassword] = useState('DefaultPassword');
  const [email, setEmail] = useState('Default@email.com');
  const [cookies, setCookie] = useCookies();

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmitButton = async () => {
    await handleSignup(username, password, email);
    onClose();
  };

  return (
    <form className="SignupForm">
      <Stack spacing={5}>
        <FormControl>
          <TextField type="text" label="Username" value={username} onChange={handleUsernameChange} />
        </FormControl>
        <FormControl>
          <TextField type="text" label="Password" value={password} onChange={handlePasswordChange} />
        </FormControl>
        <FormControl>
          <TextField type="text" label="Email" value={email} onChange={handleEmailChange} />
        </FormControl>
        <FormControl>
          <Button variant="contained" onClick={handleSubmitButton}>{buttonText}</Button>
        </FormControl>
      </Stack>
    </form>
  );
}

export default withCookies(SignupForm);
