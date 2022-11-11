import React from "react";
import ReactDOM from "react-dom";

const name = "Heli";
const currentDate = new Date();
const year = currentDate.getFullYear();

ReactDOM.render(
  <div>
    <h1>Hello World!</h1>
    <h1 className="heading">These are my Favourite Foods</h1>

    <img
      className="food-img"
      alt="hummus"
      src="https://thefoodiediaries.co/wp-content/uploads/2021/03/img_8477_jpg-1.jpg"
    />
    <img
      className="food-img"
      alt="wontons"
      src="http://www.pamperedchef.ca/iceberg/com/recipe/85800-lg.jpg"
    />
    <img
      className="food-img"
      alt="panipuri"
      src="https://www.awesomecuisine.com/wp-content/uploads/2007/11/Pani-Puri.jpg"
    />

    <p className="myname">Created by {name}</p>
    <p className="myname">Copyright {year} </p>
  </div>,

  document.getElementById("root")
);
