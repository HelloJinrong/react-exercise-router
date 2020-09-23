import React from 'react';
import '../styles/Profile.css'

class Profile extends React.Component{
    render() {
        return (
            <div className='profile'>
                <p>UserName:hjr</p>
                <p>Gender:Female</p>
                <p>Work:IT Industry</p>
                <p>Website:'/my-profile'</p>
            </div>
        );
    }
}

export default Profile;
