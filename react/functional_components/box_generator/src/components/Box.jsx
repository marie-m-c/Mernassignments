import React from "react";

const Box = ({ color, dimension}) => {
    const boxStyle = {
        width: dimension,
        height: dimension,
        margin: "10px",
        border: "solid 1px whitesmoke",
        backgroundColor: color
    }
    return (
        <div style={boxStyle} ></div>
    );
}

export default Box;