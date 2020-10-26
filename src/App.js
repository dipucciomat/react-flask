import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [currentTime, setCurrentTime] = useState(0);
  //invoked when this page is rendered
  //have to set to empty list so it doesn't get called recursively
  //this way only calls oce 
  useEffect(() => {
    //fetch api call to time
    fetch('/time').then(res => res.json()).then(data => {
      setCurrentTime(data.time);
    });
  }, []);

  useEffect(() => {
    //fetch api call to time
    fetch('/parse').then(res => res.json()).then(data => {
      console.log(data);
    });
  }, []);



  return (
    <div className="App">
      <header className="App-header">

        ... no changes in this part ...

        <p>The current time is {currentTime}.</p>
      </header>

      <form action="/parse" method="post" encType="multipart/form-data">
      <input type="file" name="file"></input>
      <input type= "submit" name = "update" value="submit"/>   
      </form>
    </div>
  );
}

export default App;
