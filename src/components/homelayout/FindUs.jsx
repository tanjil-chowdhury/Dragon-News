import React from 'react';
import { FaInstagram, FaTwitter } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa6';

const FindUs = () => {
    return (
        <div className='font-bold mb-5'>
            <h2>find us on</h2>
            <div>
                <div className="join join-vertical w-full">
  <button className="btn bg-base-100 justify-start  join-item"><FaFacebook></FaFacebook> Facebook</button>
  <button className="btn bg-base-100 justify-start join-item"> <FaTwitter></FaTwitter>  Twitter</button>
  <button className="btn bg-base-100 justify-start join-item"> <FaInstagram></FaInstagram>Instagram</button>
</div>
            </div>
        </div>
    );
};

export default FindUs;