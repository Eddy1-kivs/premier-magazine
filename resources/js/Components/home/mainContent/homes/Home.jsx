import React from "react";
import Discover from "../../discover/Discover";
import Side from "../../sideContent/side/Side";
import Life from "../life/Life";
// import Music from "../musics/Music";
import Popular from "../popular/Popular";
import Ppost from "../Ppost/Ppost";
import "./style.css";

const Homes = () => {
    return (
        <>
            <main>
                <div className="">
                    <div className="flex flex-col md:flex-row">
                        <section className="mainContent">
                            {/* <Popular /> */}
                            <div className="pl-4 ">
                                <Ppost />
                                <Life />
                            </div>
                            {/* <Music /> */}
                        </section>
                        <section className="sideContent sticky px-4">
                            <Side />
                        </section>
                    </div>
                </div>
            </main>
        </>
    );
};

export default Homes;
