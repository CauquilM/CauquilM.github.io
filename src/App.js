import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { entries, get, set } from "idb-keyval";
import "console-success";

function App() {
  const [key, setKey] = useState();
  const [value, setValue] = useState();
  const [posts, setPosts] = useState([]);

  const postData = () => {
    if (key !== undefined && value !== undefined) {
      set(key, value)
        .then(() => {
          console.success("succeed");
          getData();
        })
        .catch(() => {
          console.error("Already exists");
        });
    } else {
      console.error("Erreur");
    }
  };

  const getData = async () => {
    entries().then((entries) => {
      console.log(entries);
      setPosts(entries);
    });
  };

  const newKey = (event) => {
    console.log(event.target.value);
    setKey(event.target.value);
  };

  const newValue = (event) => {
    console.log(event.target.value);
    setValue(event.target.value);
  };

  return (
    <div className="App">
      <p onClick={postData}>Send</p>
      <p onClick={getData}>Get</p>
      <input onChange={newKey} type="text" placeholder="key" />
      <input onChange={newValue} type="text" placeholder="message" />
      <div>
        {posts.map((post) => {
          return (
            <div key={post}>
              <p>0 : {post[0]}</p>
              <p>1 : {post[1]}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
