import React from 'react'
import { useEffect, useState } from 'react';
import socketIo from "socket.io-client";

let socket;

const ENDPOINT = "http://localhost:3500";

const Counter = () => {

    const [count,setCount]=useState(0)
    socket = socketIo(ENDPOINT, { transports: ['websocket'] });

    useEffect(() => {
      // Listen for count updates from the server
      socket.on('countUpdate', newCount => {
        setCount(newCount);
      });
    }, []);
  
    const increase = () => {
      socket.emit('increaseCount');
    };
  
    const decrease = () => {
      socket.emit('decreaseCount');
    };
  return (
    <div>
      <h2>Count : {count}</h2>
      <button onClick={increase}>Add</button>
      <button onClick={decrease}>Sub</button>
    </div>
  )
}

export default Counter
