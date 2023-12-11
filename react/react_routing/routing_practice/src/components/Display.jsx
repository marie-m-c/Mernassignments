import React from 'react';
import { useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Display = () => {
    const { text } = useParams();
    const getMessage = () => {
        return isNaN(text) ? "The word is: " + text : "The number is: " + text;
    }
    return (
            <h1 className='mt-4 p-4 text-center'> { getMessage() } </h1>
    );
}

export default Display;