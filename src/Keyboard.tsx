import React from 'react';
import Keys from './Keys.json';
import styles from "./Keyboard.module.css";

type KeyboardProps = {
  disabled?: boolean
  activeLetters: string[]
  inactiveLetters: string[] 
  addGuessedLetter: (letter: string) => void
}

export function Keyboard({
  activeLetters, 
  disabled = false,
  inactiveLetters, 
  addGuessedLetter, 
}: KeyboardProps) {
  return ( 
    <div 
      style={{ 
        display: "grid", 
        gridTemplateColumns: "repeat(auto-fit, minmax(75px, 1fr))",
        gap: ".5rem",
      }}
    >
      {Keys.map(key => {
        const isActive = activeLetters.includes(key)
        const isInactive = inactiveLetters.includes(key)
        return (
          <button 
            onClick={() => addGuessedLetter(key)} 
            className={`${styles.btn} ${isActive ? styles.active : ""}
            ${isInactive ? styles.inactive : ""}`} 
            disabled={isInactive || isActive || disabled}
            key={key}
          >
            {key}
          </button>
        )
      })}
    </div>
  )
}