import React from "react";
import Box from "./Box"
import 'bootstrap/dist/css/bootstrap.min.css'

const Boxes = ({ boxProperties }) => {
    

    return (
        <div class="d-flex flex-wrap mt-5">
        { 
            boxProperties.map((p, index) => 
                <Box key={index} color={ p.color } dimension={ p.dimension } />)
        }
        </div>     
    );
}

export default Boxes;