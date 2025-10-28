import React from 'react';
import logo from '../assets/logo.png'
import { format } from 'date-fns';

const Header = () => {
    return (
        <div className='flex justify-center flex-col items-center gap-3'>
            <img className='w-[350px]' src={logo} alt="Logo" />
            <p className='text-accent'>journalism without Fear</p>
            <p>{format(new Date(), 'MMMM dd, yyyy')}</p>
        </div>
    );
};

export default Header;