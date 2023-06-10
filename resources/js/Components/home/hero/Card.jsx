import React from "react";
import { Link } from "@inertiajs/react";

const Card = ({ item: { id, cover, category, title, authorName, time } }) => {
  return (
    <>
      <div className="box">
        <div className="img">
          <img className="w-[90%] h-[90%] rounded-xl object-contain" src={cover} alt="" />
        </div>
        <div className="text">
          <span className="category">{category}</span>
          <Link to={`/SinglePage/${id}`}>
            <h1 className="titleBg">{title}</h1>
          </Link>
          <div className="author flex">
            <span>by {authorName}</span>
            <span>{time}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
