import React, { useEffect } from "react";
import Slider from "react-slick";
import { lifestyle } from "../../../../dummyData";
import Heading from "../../../common/heading/Heading";

import "../Ppost/ppost.css";
//copy ppost code
const Life = (props) => {
    useEffect(() => {
        console.log(props);
    });
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
        ],
    };
    return (
        <>
            <section className="popularPost life">
                <Heading title="Just for you" />
                <div className="content">
                    <Slider {...settings}>
                        {props.data.map((val, index) => {
                            return (
                                <div key={index} className="items">
                                    <div className="box shadow">
                                        <div className="images">
                                            <div className="img">
                                                <img src={val.cover} alt="" />
                                            </div>
                                            <div class="category category1">
                                                <span>{val.catgeory}</span>
                                            </div>
                                        </div>
                                        <div className="text">
                                            <h1 className="title">
                                                {val.title.slice(0, 40)}...
                                            </h1>
                                            <div className="date">
                                                <i class="fas fa-calendar-days"></i>
                                                <label>{val.date}</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </Slider>
                </div>
            </section>
        </>
    );
};

export default Life;
