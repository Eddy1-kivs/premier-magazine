import React from "react";
import "./footer.css";

const Footer = () => {
    return (
        <>
            <footer className="bg-slate-400">
                <div className="container bg-slate-400">
                    <div className="box logo">
                        <img
                            src="../images/fashion/logo.png"
                            className="logo"
                            alt=""
                        />
                        <p>
                            Premier magazine is an amazing magazine that gives
                            you the latest news on fashion
                        </p>
                        <i className="fa fa-envelope"></i>
                        <span> hello@beautiful.com </span> <br />
                        <i className="fa fa-headphones"></i>
                        <span> +91 60521488</span>
                    </div>
                    <div className="box">
                        <h3 className="text-black">fashion</h3>
                        <div className="item">
                            <img src="../images/hero/hero1.jpg" alt="" />
                            <p>Google To Boost Android Security In Few Days</p>
                        </div>
                        <div className="item">
                            <img src="../images/hero/hero2.jpg" alt="" />
                            <p>Cespedes play the winning Baseball Game</p>
                        </div>
                    </div>
                    <div className="box">
                        <h3 className="text-black">Adult life</h3>
                        <div className="item">
                            <img src="../images/hero/hero3.jpg" alt="" />
                            <p>
                                US Promises to give Intel aid to locate the
                                soldiers
                            </p>
                        </div>
                        <div className="item">
                            <img src="../images/hero/hero1.jpg" alt="" />
                            <p>
                                Renewable energy dead as industry waits for
                                Policy
                            </p>
                        </div>
                    </div>
                    <div className='box'>
            <h3 className="text-black">Media</h3>
            
            <ul>
              <li>
                <a href="https://instagram.com/premier_magazine23?igshid=MzNlNGNkZWQ4Mg==" target="_blank">
                    <img className="h-8" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/132px-Instagram_logo_2016.svg.png?20210403190622" />
                </a>
              </li>
              <li>
                 <a href="https://wa.me/message/2GEHRKNLDCHRD1" target="_blank">
                    <img className="h-8" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/512px-WhatsApp.svg.png?20220228223904" />
                </a>
              </li>
            </ul>
          </div>
                </div>
            </footer>
            <div className="legal bg-slate-400 ">
                <div className="container flexSB">
                    <p className="text-black">© all rights reserved</p>
                    {/* <p>
            made with <i className='fa fa-heart'></i> by gorkhcoder
          </p> */}
                </div>
            </div>
        </>
    );
};

export default Footer;
