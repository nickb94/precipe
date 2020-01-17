import React from "react";


const Recipe = ({ title, calories, image, ingrdnts }) => {

return(

    <div className="tile">

<h1>{title}</h1>
        <p>Calories: {calories}</p>
        <p>Required: {ingrdnts.map(ingredient =>(
                          <li key={ingredient.weight}>{ingredient.text}</li>
                                      )
                        )}</p>
        <img src={image} alt="" />
    </div>
);

}

export default Recipe