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


    return (

        <React.Fragment>

            <Navbar
                showNavList={showNavList}
                toggleNavList={toggleNavList}
            />

            <div style={{ 'zIndex': '-10' }} onClick={backDropClicked}>

                <main className="flex flex-col flex-1 md:justify-center max-w-4xl mx-auto px-4 py-8 md:p-8 w-full">
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
