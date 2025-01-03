import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [greating, setGreating] = useState("");

  const handleChange = (event) => {
    //console.log(event.target.value);
    setName(event.target.value);
  };

  const handleClick = (event) => {
    setGreating(name);

    event.preventDefault(); //don't refresh the page on submit
  };

  return (
    <div className="container">
      <h1> Hello{` ${greating}`}</h1>
      <form onSubmit={handleClick}>
        <input
          onChange={handleChange}
          type="text"
          placeholder="What's your name?"
          value={name}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
