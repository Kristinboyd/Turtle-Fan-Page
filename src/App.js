// Libraries
import React, { useState } from "react";
// Component
import BooBadge from "./BooBadge";
import Button from "./Button";
import LikeBadge from "./LikeBadge";
// Styles
import "./styles.css";

export default function App() {
  const [currentLikes, setCurrentLikes] = useState(0);

  return (
    <div className="App">
      <h1>Turtle Fan Page 🐢</h1>
      <Button
        style={{ backgroundColor: "whitesmoke" }}
        buttonName="Like 👍🏻"
        onClick={() => setCurrentLikes(currentLikes + 1)}
      ></Button>
      <Button
        style={{ backgroundColor: "slateblue	" }}
        buttonName="Boo 👎🏻"
        onClick={() => setCurrentLikes(currentLikes - 1)}
      />
      <h2
        style={{
          backgroundColor: currentLikes < 0 ? "slateblue	" : "whitesmoke"
        }}
      >
        likes: {currentLikes}
      </h2>
      <p>{currentLikes >= 0 ? <LikeBadge /> : <BooBadge />}</p>
      <p>{currentLikes >= 1 ? "🐢".repeat(currentLikes) : " "}</p>
    </div>
  );
}
//  currentLikes < 0 ? "red" : "green"
// if currentLikes are < 0 set bacgroundColor: "red"
// if currentLikes are > 0 set backgroundColor: "green"

// two new components
// badges
// one badge shows when the likes are positive
// second badge shows when the likes are negative
// currentLikes > 0 ? LikeBadge : BooBadge
// stretch goal = make a turtle counter for number of "likes"
