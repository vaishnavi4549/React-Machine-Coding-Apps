import {Structure} from './components/Structure'
import {directory} from './data/data';
import React, {useState} from 'react';

function App() {
  const [directoryData,setDirectoryData] = useState(directory)

  return (
    <>
      <div>
        <Structure directoryData={directoryData}/>
       </div>
    </>
  )
}

export default App
