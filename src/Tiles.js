import React from "react";

function Tiles(props) {
    
    function moveHandler(e){
        console.log("in moveHandler ",props.data[e.target.id].click)
        if(props.data[e.target.id].click){
            console.log(e.target.id)
            props.moveTile(e.target.id)
        }
        
    }

    return (

        props.data.map((item, index) => {
            return (
                <div id={index} class="col-3 border border-dark" onClick={moveHandler} >
                    {item.id}
                </div>
            )
        })
    )
}

export default Tiles