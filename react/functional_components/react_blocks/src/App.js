import React from 'react';
import Header from './Components/Header';
import Navigation from './Components/Navigation';
import Main from './Components/Main';
import SubContents from './Components/SubContents';
import Advertisement from './Components/Advertisement';
 
const appStyle = {
  height: "90vh",
  margin: "5vh auto",
  backgroundColor: "#dddddd"
}

function App() {
  return (
    <div style={appStyle} className="w-75 p-3 border border-dark">
        <Header />
        <Navigation />
        <Main>
          <SubContents />
          <SubContents />
          <SubContents />
          <Advertisement />
        </Main>
    </div>
  );
}
                
export default App;

