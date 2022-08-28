import React from 'react';
import { withCookies } from 'react-cookie';
import Button from '@mui/material/Button';

function LogoutButton({ logoutUser, loggedIn }) {
  return (
    <div>
      { loggedIn
        ? (
          <div className="LogoutButton">
            <Button variant="outlined" onClick={logoutUser}>
              Logout
            </Button>
          </div>
        )
        : <div />}
    </div>
  );
}

export default withCookies(LogoutButton);
