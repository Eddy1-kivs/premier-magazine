import React from "react";
import Discover from "./discover/Discover";
import Hero from "./hero/Hero";
import Homes from "./mainContent/homes/Home";
import Ppost from "./mainContent/Ppost/Ppost";

const Homepages = (props) => {
    return (
        <>
            <Hero data={props.data} />
            <Homes data={props.data} />
            {/* <Discover /> */}
        </>
    );
};

export default Homepages;
