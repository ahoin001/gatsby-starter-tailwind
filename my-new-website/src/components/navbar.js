import React from 'react';
import PropTypes from "prop-types";
import { Link } from "gatsby";

import companyLogo from "../images/EJLogo.png";

// TODO CHECK COMPATIBILITY FOR STICKY PROPERTY BEFORE PUSHING TO PRODUCTION

const Navbar = (props) => {

    console.log(props.showNavList)

    let navList = 'z-20 w-full lg:hidden'
    if (props.showNavList) {
        navList += ' block'
    } else {
        navList += ' hidden'
    }

    console.log(`State of Navbar: ${props.showNavList} && classes of navList`, navList)

    return (

        <header className="sticky top-0 shadow " role="navigation" >

            <nav className="z-20 bg-white shadow lg:hidden" role="navigation">

                <div className="shadow p-4 flex flex-wrap items-center ">

                    <div className="block w-24 md:mr-8">
                        <a href="#" rel="home">

                            {/* <svg className="w-10 h-10 text-purple-600" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg">
                            <title>TailwindCSS</title>
                            <path fill="currentColor" d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"></path>
                        </svg> */}

                            <img src={companyLogo} alt="Logo" className="object-cover" />

                        </a>
                    </div>

                    <div className="ml-auto lg:hidden">

                        <button
                            onClick={props.toggleNavList}
                            className="flex items-center px-3 py-2 border rounded text-purple-500"
                            type="button"
                        >
                            <svg className="h-6 w-6" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <title>HamburgerMenu</title>
                                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                            </svg>

                        </button>

                    </div>

                    {/* width-full makes div wrap, if flex wrap enabled */}
                    {/* Conditionally show lists */}
                    <div className={navList}>

                        <ul className="flex flex-col mt-4 mx-4 pt-4 border-t md:border-0 lg:mr-8">

                            <li className="py-1">
                                <a className="block text-purple-600 font-bold leading-tight px-4 py-2 text-3xl md:p-2 lg:px-4" href="#" title="Link">Pricing</a>
                            </li>
                            <li className="py-1">
                                <a className="block font-semibold text-gray-700 leading-tight px-4 py-1 md:p-2 lg:px-4 " href="#" title="Active Link">Airline Pilot Program</a>
                            </li>

                            <Link to='/pricing'>
                                <li className="block px-4 py-1 md:p-2 lg:px-4">
                                    Ratings & Officers
                                </li>
                            </Link>

                            <li className="py-1">
                                <a className="block px-4 py-1 md:p-2 lg:px-4" href="#" title="Link">Aircraft Sales & Leasing</a>
                            </li>
                            <li className="py-1">
                                <a className="block px-4 py-1 md:p-2 lg:px-4" href="#" title="Link">Helicopter</a>
                            </li>

                        </ul>


                        <ul className="flex flex-col mt-4 mx-4 pt-4 border-t md:border-0">

                            <li className="py-1">
                                <a className="block text-purple-600 font-bold px-4 py-2 text-3xl md:p-2 lg:px-4" href="#" title="Link">About Eagle Jet</a>
                            </li>

                            <Link to='/about'>
                                <li className="block px-4 py-1 md:p-2 lg:px-4">
                                  About Us
                                </li>
                            </Link>

                            <li className="py-1">
                                <a className="block px-4 py-1 md:p-2 lg:px-4 " href="#" title="Active Link">Contact Us</a>
                            </li>
                            <li className="py-1">
                                <a className="block px-4 py-1 md:p-2 lg:px-4" href="#" title="Link">Testimonials</a>
                            </li>
                            <li className="py-1">
                                <a className="block px-4 py-1 md:p-2 lg:px-4" href="#" title="Link">FAQ</a>
                            </li>

                        </ul>

                    </div>

                </div>



            </nav>

            <nav className=" hidden bg-white  py-5 shadow-md lg:block">

                <div className="-mb-px flex justify-center">

                    <button className="inline-block h- hover:bg-purple-200 no-underline text-teal-dark border-b-2 border-teal-dark uppercase tracking-wide font-bold text-xs px-3 mr-8" href="#">
                        Pricing
         </button>
                    <button className="inline-block hover:bg-purple-200 no-underline text-grey-dark border-b-2 border-transparent uppercase tracking-wide font-bold text-xs px-3 mr-8" href="#">
                        Airline Pilot Program
         </button>
                    <button className="inline-block hover:bg-purple-200 no-underline text-grey-dark border-b-2 border-transparent uppercase tracking-wide font-bold text-xs px-3 mr-8" href="#">
                        Ratings
         </button>
                    <button className="inline-block hover:bg-purple-200 no-underline text-grey-dark border-b-2 border-transparent uppercase tracking-wide font-bold text-xs px-3 mr-8" href="#">
                        Helicopters
         </button>
                    <button className="inline-block hover:bg-purple-200 no-underline text-grey-dark border-b-2 border-transparent uppercase tracking-wide font-bold text-xs px-3 mr-8" href="#">
                        AIRCRAFT SALES & LEASING
         </button>
                    <button className="inline-block hover:bg-purple-200 no-underline text-grey-dark border-b-2 border-transparent uppercase tracking-wide font-bold text-xs px-3 mr-8" href="#">
                        FAQ
         </button>
                    <button className="inline-block hover:bg-purple-200 no-underline text-grey-dark border-b-2 border-transparent uppercase tracking-wide font-bold text-xs px-3" href="#">
                        Contact Us
         </button>


                </div>
            </nav>

        </header>
    )


}

Navbar.propTypes = {
    showNavList: PropTypes.bool,
    toggleNavList: PropTypes.func,
    hideNavList: PropTypes.func,
};

export default Navbar
