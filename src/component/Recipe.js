import React from 'react' ;

import Popup from "reactjs-popup";
const ViewItem = ({ index , item }) => {
    return (
        <div className="item-wrapper" >
            <h4> { item.recipe.label } </h4>
            <div className="item-content" >
            <div><img height={"200rem"} src={ item.recipe.image } /> </div>
                <div className="item-details">
                    <h5>Calories : </h5><div className="item-result" >{ (""+item.recipe.calories).substring(0,7) }</div>
                </div>
                <div className="item-details">
                    <h5>Time Needed : </h5><div  className="item-result">{item.recipe.totalTime>60 ? item.recipe.totalTime : "60"}mins</div>
                </div>
                <Popup
                    trigger={<div className="btn-ingredient-popup"> view Intgredients</div>}
                    modal
                >
                    <h4>Intgredients Required </h4>
                    <ol>    
                        <div className="item-ingredient" >{
                            item.recipe.ingredients.map( ( ingredient , index ) => <li key = {index} > {ingredient.text} </li>) 
                        }</div>
                    </ol>
                </Popup>
                <div><a href={ item.recipe.url }>For more check this out  </a></div>
                {/* <div className="bookmark" >Mark it- </div> */}
            </div>
        </div>
    );
}
const Recipe = ( { item ,recipe } ) => {
    return(
        <div className="recipe-wrapper" >
            <div className="recipe-head" >{ item }</div>
            <div className="item-card">
                { recipe.map( ( item , index ) => <ViewItem key={index} item={item} /> ) }
            </div>
        </div>
    );
}

export default Recipe ;