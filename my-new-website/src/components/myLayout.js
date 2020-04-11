import PropTypes from "prop-types";
import React, { useState } from "react";

import Navbar from "./navbar";
import Footer from "./footer";

const MyLayout = ({ children }) => {

    const [showNavList, setshowNavList] = useState(false)

    const backDropClicked = () => {

        console.log('Backdrop Was clicked', showNavList)
        setshowNavList(false)

    }

    const toggleNavList = () => {

        setshowNavList(!showNavList)
        console.log('Toggled Nav')

    }

    const hideNavList = () => {

        setshowNavList(false)
        console.log('Toggled Nav From Header')

    }


    return (

        <React.Fragment>

            <Navbar
                showNavList={showNavList}
                toggleNavList={toggleNavList}
                hideNavList={hideNavList}
            />

            <div style={{ 'zIndex': '-10' }} onClick={backDropClicked}>

                {/* Default Container, may use again but want to try my own settingns */}
                {/* <main className="w-full bg-green-300 mx-auto px-4 py-8 flex flex-col flex-1 max-w-4xl  md:justify-center md:p-8 ">
                    {children}
                </main> */}

                <main className="flex flex-col flex-1 max-w-4xl md:justify-center md:p-8 ">
                    {children}
                </main>

                <Footer />

            </div>


        </React.Fragment>

    );
}


MyLayout.propTypes = {
    children: PropTypes.node.isRequired
};

export default MyLayout;
