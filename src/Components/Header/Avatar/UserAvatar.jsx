import React from 'react';
import Avatar from '@mui/material/Avatar';

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
