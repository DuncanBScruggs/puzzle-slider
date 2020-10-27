import React from "react";

function Tiles(props) {

    function moveHandler(e) {
        // console.log("in moveHandler ", props.data[e.target.id].click)
        // if (props.data[e.target.id].click) {
            // console.log(e.target.id)
            props.moveTile(e.target.id)
        // }

    }
    
    

    return (

        props.data.map((item, index) => {
            return (
                <div id={index} name={item.id} class="col-3 border border-dark" onClick={moveHandler}
                    // style={{
                    //     maxWidth: "100px",
                    //     minWidth: "100px",
                    //     maxHeight: "100px",
                    //     minHeight: "100px",
                    //     overflow: "hidden",
                    //     margin: "0",
                    //     padding: "0"
                    // }}
                    >
                    {item.id}
                </div>
            )
        })


    )
}

export default Tiles