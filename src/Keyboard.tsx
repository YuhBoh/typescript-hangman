import React from 'react';
import Keys from './Keys.json';

export function Keyboard() {
  return <div 
    style={{ 
      display: "grid", 
      gridTemplateColumns: "repeat(auto-fit, minmix(75px, 1fr)",
      gap: ".5rem",
    }}>
      {Keys.map(key => {
        return <button key={key}>{key}</button>

      })}
    </div>
}