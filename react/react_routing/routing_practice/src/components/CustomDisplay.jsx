import React from 'react';
import { useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const CustomDisplay = () => {
    const { text, col, bg } = useParams();

    return (
            <h1 style={{color: col, backgroundColor: bg}} className='mt-4 p-4 text-center'> { "The word is: " + text } </h1>
    );
}

export default CustomDisplay;