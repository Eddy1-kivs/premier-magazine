import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const SinglePageSlider = (props) => {
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
    };
    return (
        <>
            <Carousel {...settings}>
                <Wrap>
                    <a>
                        <img className="max-h-[700px] min-h-[600px] w-full object-contain" src="/images/fashion/7.jpg" alt="Slider" />
                    </a>
                </Wrap>
                <Wrap>
                    <a>
                        <img className="max-h-[700px] min-h-[600px] w-full object-contain" src="/images/fashion/g.jpg" alt="Slider" />
                    </a>
                </Wrap>
                <Wrap>
                    <a>
                        <img className="max-h-[700px] min-h-[600px] w-full object-contain" src="/images/fashion/g.jpg" alt="Slider" />
                    </a>
                </Wrap>
                <Wrap>
                    <a>
                        <img className="max-h-[700px] min-h-[600px] w-full object-contain" src="/images/fashion/g.jpg" alt="Slider" />
                    </a>
                </Wrap>
            </Carousel>
        </>
    );
};

const Carousel = styled(Slider)`
    margin-top: 1px;

    & > button {
        opacity: 0;
        height: 100%;
        width: 5vw;
        position
        z-index: 1;

        &:hover {
            opacity: 1;
            transition: opacity 0.2s ease 0s;
        }
    }
    ul li button {
        &:before {
            font-size: 10px;
            color: rgb(150, 158, 171);
        }
    }
    li.slick-active button:before {
        color: white;
    }
    .slick-list {
        overflow: initial;
    }
    slick-prev {
        left: -75px;
    }
    .slick-next {
        right: -75px;
    }
`;

const Wrap = styled.div`
    border-radius: 4px;
    cursor: pointer;
    position: relative;
    align-items: center;
    justify-content: center;

    a {
        border-radius: 4px;
        
        cursor: pointer;
        display: block;
        position: relative;
        padding: 4px;

        img {
            // width: 100%;
            // height: 50%;
        }
        &:hover {
            padding: 0;
            // border: 4px solid rgba(249, 249, 249, 0.8);
            transition-duration: 300ms;
        }
    }
`;
export default SinglePageSlider;
