import React from "react";

function Tiles(props) {

    // return (
    //     props.data.map((item, index) => {
    //         return (
    //             <div id={index} name={item.id} class="col-3 border border-dark" onClick={() => props.moveTile(index)}
    //             // style={{
    //             //     maxWidth: "100px",
    //             //     minWidth: "100px",
    //             //     maxHeight: "100px",
    //             //     minHeight: "100px",
    //             //     overflow: "hidden",
    //             //     margin: "0",
    //             //     padding: "0"
    //             // }}
    //             >
    //                 {item.id}
    //             </div>
    //         )
    //     })
    // )

    let grid = props.data.map((y, j) => {
        return (
            (j + 1) % 4 === 0 &&
            <div className="row">
                {props.data.slice(j + 1 - 4, j + 1).map((item, index) => (
                    <div id={index} name={item.id} className="col-3 border border-dark " onClick={() => props.moveTile(index)}>
                        {item.id}
                    </div>
                ))}
            </div>
        )
    })
    console.log(grid)

    return (
        <div className="container">
            {grid}
        </div>
    )
}

export default Tiles