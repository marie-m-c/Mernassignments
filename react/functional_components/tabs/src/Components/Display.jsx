import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'

const Display = ( props ) => {
    return (
        <div class="border border-light-50 p-4"> { props.children } </div>
    );
}

export default Display;