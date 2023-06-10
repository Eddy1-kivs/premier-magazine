import React from "react";
import Discover from "./discover/Discover";
import Hero from "./hero/Hero";
import Homes from "./mainContent/homes/Home";
import Ppost from "./mainContent/Ppost/Ppost";

const Homepages = () => {
    return (
        <>
            <Hero />
            <Homes />
            {/* <Discover /> */}
        </>
    );
};

export default Homepages;
