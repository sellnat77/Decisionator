import React, { useEffect, useState } from 'react';
import { withCookies, removeCookie, useCookies } from 'react-cookie';
import jwt from 'jwt-decode';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import Avatar from '@mui/material/Avatar';
import request from 'axios';

function UserAvatar({ loggedIn, username }) {
  return (
    <div>
      { loggedIn
        ? (
          <div className="UserAvatar">
            <Avatar>
              {username}
            </Avatar>
          </div>
        )
        : <div />}
    </div>
  );
}

export default UserAvatar;
