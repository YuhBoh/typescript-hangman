import React from 'react';
import Keys from './Keys.json';
import "./Keyboard.css";

export function Keyboard() {
  return <div 
    style={{ 
      display: "grid", 
      gridTemplateColumns: "repeat(auto-fit, minmax(75px, 1fr))",
      gap: ".5rem",
    }}>
      {Keys.map(key => {
        return <button className="btn" key={key}>{key}</button>
      })}
    </div>
}