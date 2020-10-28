import React from "react";

function Tiles(props) {

    let grid = props.data.map((y, j) => {
        return (
            (j + 1) % 4 === 0 &&
            <div className="row d-flex justify-content-center">
                {props.data.slice(j + 1 - 4, j + 1).map((item, index) => (
                    <div id={item.index} name={item.id} className="col-3 border border-dark " onClick={() => props.moveTile(item.index)}
                        style={{
                            maxWidth: "75px",
                            minWidth: "75px",
                            maxHeight: "75px",
                            minHeight: "75px",
                            overflow: "hidden",
                            margin: "0",
                            padding: "0"
                        }}
                    >
                        {item.id}
                    </div>
                ))}
            </div>
        )
    })

    return (
        <div className="container my-5">
            {grid}
        </div>
    )
}

export default Tiles