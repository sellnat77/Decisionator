import React, { useEffect, useState } from 'react';
import { withCookies, removeCookie, useCookies } from 'react-cookie';
import jwt from 'jwt-decode';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import Button from '@mui/material/Button';
import request from 'axios';

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
