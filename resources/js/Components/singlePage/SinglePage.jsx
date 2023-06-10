import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { hero } from "../../dummyData"
import Side from "../home/sideContent/side/Side"
import "../home/mainContent/homes/style.css"
import "./singlepage.css"
import "../home/sideContent/side/side.css"
import SinglePageSlider from "./slider/SinglePageSlider"
import Slider from "react-slick";
import { Button } from "@material-tailwind/react";
import {
  CloudArrowUpIcon,
} from "@heroicons/react/24/outline";

const SinglePage = () => {
  const { id } = useParams()
  const [item, setItem] = useState(null)

  useEffect(() => {
    const item = hero.find((item) => item.id === parseInt(id));
    window.scrollTo(0, 0);
    if (item) {
      setItem(item);
    } else {
      // Set a default item if no matching item is found
      setItem({ title: "Default Title", authorName: "Default Author", /* ... */ });
    }
  }, [id]);

   const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 2,
    };

  return (
    <>
      {item ? (
        <main>
          <div className='container m-10'>
            <section className='mainContent details items-center m-20'>
              <section className="w-50% m-20">
                <SinglePageSlider />
              </section>
              <Button variant="gradient" className="flex items-center bg-sky-600 gap-3">
                <CloudArrowUpIcon strokeWidth={2} className="h-5 w-5" /> Download
                </Button>
            </section>
 
          </div>
        </main>
      ) : (
        <h1>not found</h1>
      )}
    </>
  )
}

export default SinglePage
