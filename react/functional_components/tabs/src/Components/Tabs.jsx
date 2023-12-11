import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'



const tabStyle = {
    width: "20%",
    height: "50px"
}

const Tabs = ( { tabs, updateDisplayIndex } ) => {
    return (
        <div class="d-flex flex-wrap gap-2 mb-4" >
          { tabs.map( (tab, index) => 
          {return <div style={tabStyle} class="btn btn-info text-white " onClick={() => updateDisplayIndex(index)}> {tab.label} </div>})
          }
        </div>
    );
}

export default Tabs;