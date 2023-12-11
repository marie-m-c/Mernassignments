import { useState } from 'react';
import Tabs from './Components/Tabs';
import Display from './Components/Display';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {

  const tabs = [
    {label: "Tab1", content: "Tab1 content is showing here"},
    {label: "Tab2", content: "Tab2 content is showing here"},
    {label: "Tab3", content: "Tab3 content is showing here"},
    {label: "Tab4", content: "Tab4 content is showing here"},
    {label: "Tab5", content: "Tab5 content is showing here"},
    {label: "Tab6", content: "Tab6 content is showing here"}
  ];

  const [displayIndex, setDisplayIndex] = useState(0)

  const updateDisplayIndex = (index) => {
    if (index !== displayIndex) {
      setDisplayIndex(index)
    }
  }

  return (
    <div class="w-50 mx-auto my-4 p-4 border boder-light-50 bg-light">
      <Tabs tabs={tabs} updateDisplayIndex={ updateDisplayIndex } />
      <Display> { tabs[displayIndex].content } </Display>
    </div>
  );
}

export default App;
