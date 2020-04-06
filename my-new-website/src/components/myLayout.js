import PropTypes from "prop-types";
import React from "react";

import Navbar from "./navbar";
import Footer from "./footer";

const MyLayout = ({ children }) => {
    return (

        <React.Fragment>

            <Navbar />

            <main className="flex flex-col flex-1 md:justify-center max-w-4xl mx-auto px-4 py-8 md:p-8 w-full">
                {children}
            </main>

            <Footer />
        
        </React.Fragment>

  );
}


MyLayout.propTypes = {
    children: PropTypes.node.isRequired
};

export default MyLayout;
