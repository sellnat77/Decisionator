import React from 'react';
// import Avatar from '@mui/material/Avatar';

function UserAvatar({ loggedIn, username }) {
  return (
    <div>
      { loggedIn
        ? (
          <div className="UserAvatar">
            {username}
          </div>
        )
        : <div />}
    </div>
  );
}

export default UserAvatar;
