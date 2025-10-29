import React from 'react';
import { NavLink } from 'react-router';
import user from '../assets/user.png'

const Navbar = () => {
    return (
        <div className='flex justify-between items-center'>
            <div className=''></div>
            <div className="nav flex gap-5 text-accent">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/About">About</NavLink>
        <NavLink to="/Career">Career</NavLink>
</div>
        <div className="log-btn flex gap-5">
            <img src={user} alt="" />
            <button className='btn btn-primary px-10'>Login</button>

        </div>

            </div>


        
    );
};

export default Navbar;