import { useState } from 'react';
import './App.css';
import {Notification} from './Notification';

function App() {
  const [notification,setNotification] = useState(false);
  const getNotification=()=>{
    setNotification(!notification)
  }
  return (
    <div className='container'>
        <button className='notify-button' onClick={getNotification}>Click to get Notification</button>
        <Notification/>
    </div>
  );
}

export default App;
