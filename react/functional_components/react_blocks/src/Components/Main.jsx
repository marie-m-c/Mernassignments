import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'

const mainStyle={
    width: "77.85%",
    height: "82%",
    backgroundColor: "#e06666"
}

const Main = (prpos) => {
    return (
        <div style={mainStyle} className="d-inline-block ps-3 py-3 border border-dark">
            {prpos.children}
        </div>
    );
}

export default Main;