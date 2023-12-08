import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'

const navStyle={
    width: "20.5%",
    height: "62%",
    verticalAlign: "top",
    backgroundColor: "#6fa8dc",
}

const Navigation = () => {
    return (
        <div style={navStyle} className="d-inline-block me-3 border border-dark"></div>
    );
}

export default Navigation;