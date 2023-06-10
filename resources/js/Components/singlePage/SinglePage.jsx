import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { hero } from "../../dummyData"
import Side from "../home/sideContent/side/Side"
import "../home/mainContent/homes/style.css"
import "./singlepage.css"
import "../home/sideContent/side/side.css"
import SinglePageSlider from "./slider/SinglePageSlider"

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

  return (
    <>
      {item ? (
        <main>
          {/* <SinglePageSlider /> */}
          <div className='container'>
            <section className='mainContent details'>
              <h1>Anaitwa Man Nzomo👀😂😂😂😂😂</h1>
              <h1>kijana mpenda pombe👀😂😂😂😂😂</h1>
              {/* <h1 className='title'>{item.title}</h1>

              <div className='author'>
                <span>by</span>
                <img src={item.authorImg} alt='' />
                <p> {item.authorName} on</p>
                <label>{item.time}</label>
              </div> */}

     

              {/* <div className='desctop'>
                {item.desc.map((val) => {
                  return (
                    <>
                      <p>{val.para1}</p>
                      <p>{val.para2}</p>
                    </>
                  )
                })}
              </div>
              <img src={item.cover} alt='' />
              {item.desc.map((val) => (
                <p>{val.para3}</p>
              ))}

              <div className='descbot'>
                {item.details.map((data) => {
                  return (
                    <>
                      <h1>{data.title}</h1>
                      <p>{data.para1}</p>
                    </>
                  )
                })}
              </div>

              <div className='quote'>
                <i className='fa fa-quote-left'></i>
                {item.details.map((data) => (
                  <p>{data.quote}</p>
                ))}
              </div>

              <div className='desctop'>
                {item.details.map((data) => {
                  return (
                    <>
                      <p>{data.para2}</p>
                      <p>{data.para3}</p>
                    </>
                  )
                })}
              </div> */}
            </section>
            <section className='sideContent'>
              {/* <Side /> */}
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
