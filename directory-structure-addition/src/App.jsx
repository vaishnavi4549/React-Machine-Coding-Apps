import React, {useState} from 'react';
import {directory} from './data/Data.jsx';
import {Structure} from './components/Structure.jsx';

function App() {
  
    const [directoryData, setDirectoryData] = useState(directory);
  return (
    <>
      <Structure directoryData={directoryData}/>
    </>
  )
}

export default App
