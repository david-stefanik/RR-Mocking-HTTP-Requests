import React, { useState, useEffect } from 'react'
import './App.css'


function App() {
  let [gethubName, setGithubName] = useState('')

  useEffect(() => {
    fetch('https://api.github.com/users/learningToCode1234')
      .then(res => res.json())
      .then(data => {
        setGithubName(data.name);
      })
  }, []);

  return (
    <div className="App">
      <h1>Github Profile Info:</h1>
      <h2>{githubName}</h2>
    </div>
  );
}

export default App;
