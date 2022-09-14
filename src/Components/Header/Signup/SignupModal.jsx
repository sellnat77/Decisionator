import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import Button from '@mui/material/Button';
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
        ? <div />
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
