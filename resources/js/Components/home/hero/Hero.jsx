import React, { useState } from "react";
import { hero } from "../../../dummyData";
import "./hero.css";
import Card from "./Card";

const Hero = (props) => {
    const [items, setIems] = React.useState(hero);

    return (
        <>
            <section className="hero">
                <div className="container">
                    {props.data.hero.map((item) => {
                        return (
                            <>
                                <Card key={item.id} item={item} />
                            </>
                        );
                    })}
                </div>
            </section>
        </>
    );
};

export default Hero;
