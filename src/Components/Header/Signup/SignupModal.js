import React, { useRef, useState } from 'react';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import Button from '@mui/material/Button';
import request from 'axios';
import SignupForm from './SignupForm';

function SignupModal({ loggedIn, title, handleSignup }) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      { loggedIn
        ? null
        : (
          <div className="SignupModal">
            <Button variant="outlined" onClick={handleClickOpen}>
              {title}
            </Button>
            <Dialog open={open} onClose={handleClose}>
              <DialogContent>
                <SignupForm buttonText={title} onClose={handleClose} handleSignup={handleSignup} />
              </DialogContent>
            </Dialog>
          </div>
        )}
    </div>
  );
}

export default SignupModal;
