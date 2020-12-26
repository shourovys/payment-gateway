import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import './Authentication.css';
import SignIn from './SignIn';
import UserInfo from './UserInfo';




const Authentication = () => {
    const [oldUser, setOldUser] = useState(true)
    // const { sineUpWithGoogle, sineUpWithFacebook, } = useAuth()
    const currentUser = useSelector(state => state.userInfo.currentUserInfo)


    return (
        <div className='authentication'>
            {/* <div className="">
                <img
                    className='svg'
                    src={currentUser.isLogin ? loginImg : sideImg} alt="side Img"
                />
            </div> */}

            {!currentUser.isLogin
                ? <div className="login-container">

                    {oldUser
                        ? <p>New User?&nbsp;
                             <samp
                                onClick={() => setOldUser(false)}
                                className='colourBlue'
                            >
                                Sign Up</samp>
                        </p>
                        : <p>Already Have A Account?&nbsp;
                             <samp
                                onClick={() => setOldUser(true)}
                                className='colourBlue'
                            >
                                Log In</samp>
                        </p>
                    }

                    <SignIn oldUser={oldUser} />

                </div>
                : <UserInfo showBtn={true} />
            }
        </div>

    );
};

export default Authentication;