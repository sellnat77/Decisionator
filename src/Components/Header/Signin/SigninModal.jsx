import React, { useEffect, useState } from 'react';
import { withCookies, useCookies } from 'react-cookie';
import jwt from 'jwt-decode';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import Button from '@mui/material/Button';
import SigninForm from './SigninForm';

function SigninModal({ loggedIn, title, handleSignin }) {
  const [open, setOpen] = useState(false);
  const [username, setUsername] = useState('');
  const [cookies] = useCookies();

  useEffect(() => {
    const jwtToken = cookies.token;
    console.log(jwtToken);
    try {
      const appJwt = jwt(jwtToken);
      setUsername(appJwt.username);
      console.log('VALID VALID');
    } catch (err) {
      console.log(err);
    }
  }, [cookies.token]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="SigninModal">
      { loggedIn
        ? { username }
        : (
          <div>
            <Button variant="outlined" onClick={handleClickOpen}>
              {title}
            </Button>
            <Dialog open={open} onClose={handleClose}>
              <DialogContent>
                <SigninForm buttonText={title} onClose={handleClose} handleSignin={handleSignin} />
              </DialogContent>
            </Dialog>
          </div>
        )}

    </div>
  );
}

export default withCookies(SigninModal);
