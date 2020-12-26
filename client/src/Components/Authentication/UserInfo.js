import React from 'react';
import { useSelector } from 'react-redux';
import { useAuth } from './AuthFunctions';

const UserInfo = ({showBtn}) => {
    const {  logOut } = useAuth()
    const  { name, email, photo }=  useSelector(state => state.userInfo.currentUserInfo)

    return (
        <div className='user-info'>
            <img src={photo} alt="Profile" />
            <h1>{name}</h1>
            <h4>{email}</h4>
            {showBtn && <button
                id='loginBtn'
                onClick={logOut}
            >Log Out</button>}
        </div>
    );
};

export default UserInfo;