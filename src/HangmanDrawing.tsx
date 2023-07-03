import React from "react";

const Head = (
  <div style={{
    width: "50px",
    height: "50px",
    borderRadius: "100%",
    border: "10px solid black",
    position: "absolute",
    top: "50px",
    right: "-30px",
  }}/>
)

const Body = (
  <div style={{
    width: "10px",
    height: "200px",
    background: "black",
    position: "absolute",
    top: "110px",
    right: "0px"
  }}/>
)

const RIGHT_ARM = (
  <div style={{
    width: "100px",
    height: "10px",
    background: "black",
    position: "absolute",
    top: "250px",
    right: "-100px",
    rotate: "-30deg",
    transformOrigin: "left bottom",
  }}/>
)

const LEFT_ARM = (
  <div style={{
    width: "100px",
    height: "10px",
    background: "black",
    position: "absolute",
    top: "250px",
    right: "10px",
    rotate: "30deg",
    transformOrigin: "right bottom",
  }}/>
)

const RIGHT_LEG = (
  <div style={{
    width: "100px",
    height: "10px",
    background: "black",
    position: "absolute",
    bottom: "110px",
    right: "-90px",
    rotate: "60deg",
    transformOrigin: "left bottom",
  }}/>
)

const LEFT_LEG = (
  <div style={{
    width: "140px",
    height: "10px",
    background: "black",
    position: "absolute",
    bottom: "110px",
    right: "0px",
    rotate: "-50deg",
    transformOrigin: "right bottom",
  }}/>
)

type HangmanDrawingProps = {
  numberOfGuesses: number
}

const BODY_PARTS = [Head, Body, RIGHT_ARM, LEFT_ARM, RIGHT_LEG, LEFT_LEG]

export function HangmanDrawing({ numberOfGuesses }: 
HangmanDrawingProps) {
  return (
    <div style={{ position: "relative" }}>
      {BODY_PARTS.slice(0, numberOfGuesses)}
      <div //This div is the rope. Place relative to parent div.
        style={{
          height: "50px",
          width: "10px",
          background: "black",
          position: "absolute",
          top: 0,
          right: 0,
        }}
      />

      <div //The bar on top
        style={{
          height: "10px",
          width: "200px",
          background: "black",
          marginLeft: "120px",
        }}
      />

      <div //Pole
        style={{
          height: "400px",
          width: "10px",
          background: "black",
          marginLeft: "120px",
        }}
      />
      
      {/* Base */}
      <div style={{ height: "10px", width: "250px", 
                    background: "black" }}/>
    </div>
  )
}