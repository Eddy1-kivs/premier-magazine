import React, { useEffect } from "react";
import Discover from "../../discover/Discover";
import Side from "../../sideContent/side/Side";
import Life from "../life/Life";
// import Music from "../musics/Music";
import Popular from "../popular/Popular";
import Ppost from "../Ppost/Ppost";
import "./style.css";

const Homes = (props) => {
    return (
        <>
            <main>
                <div className="">
                    <div className="flex flex-col md:px-16 md:flex-row">
                        <section className="mainContent">
                            {/* <Popular /> */}
                            <div className="pl-4 ">
                                <Ppost data={props.data.popular} />
                                {/* {console.log(props.data)} */}
                                <Life data={props.data.forYou} />
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
