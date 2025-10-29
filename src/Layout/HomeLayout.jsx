import React from 'react';
import { Outlet } from 'react-router';
import Header from '../components/header';
import LatestNews from '../components/LatestNews';
import Navbar from '../components/Navbar';


const HomeLayout = () => {
    return (
        <div>
            
            <header>
                <Header></Header>
                <section className='w-11/12 mx-auto my-3'>
                    <LatestNews></LatestNews>
                </section>
        <nav  className='w-11/12 mx-auto my-3'>

                <Navbar></Navbar>

        </nav>


            </header>
            <main>

                <section className="left-nav"></section>
                <section className="main">

                <Outlet></Outlet>


                </section>
                <section className="right-nav"></section>
            </main>
        </div>
    );
};

export default HomeLayout;