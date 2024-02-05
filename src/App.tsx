import { useState } from "react";
import "./App.css";

export default function Page() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const getNoButtonText = () => {
    const phrases = [
      "Seriously, Babe",
      "Are you sure?",
      "Really sure?",
      "Sheryl, please!",
      "Oi, how dare you!",
      "I'm your HUSBAND!!?",
      "Bruh, c'mon!",
      "Give it another thought!",
      "Are you absolutely certain?",
      "This is A MISTAKE!",
      "BABE, I GIVE YOU $100!",
      "No no, I GIVE YOU $10,000!",
      "Pleaseeeee, I give you my whole life!",
      "I promise to love you even more?",
      "Wouldn't you reconsider?",
      "Really really final answer?",
      "Stop, I'm getting tired.",
      "Please, please pretty please?",
      "With a flower on top?",
      "Don't you love me?",
      "Why are you doing this Sheryl?",
      "No more beef for you!!",
      "Just kidding, press yes la babe?",
      "PLEASEEEEEEE?",
      "THAT's IT",
      "YOU LEAVE ME NO CHOICE",
      "I SHALL INVOKE THE POWER OF THE NEVER-NO",
      "I ain't taking NO as an answer muahaha ;(",
    ];

    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  return (
    <div className="centered-container">
      <a
        href="https://github.com/dikshikaaa/Valentine-s-day-experiment"
        target="_blank"
        rel="noopener noreferrer"
        className="github-link"
      >
        Visit Source Code on GitHub
      </a>
      <div className="valentine-container">
        {yesPressed ? (
          <>
            <img src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif" />
            <div className="text-container">Yay!!! I LOVE YOU BABE!</div>
          </>
        ) : (
          <>
            <img
              className="h-[200px]"
              style={{ width: "400x", height: "240px" }}
              src="https://gifdb.com/images/high/cute-love-bear-roses-ou7zho5oosxnpo6k.gif"
            />
            <h1 className="text-container">Will you be my Valentine?</h1>
            <div>
              <button
                className={"yes-button"}
                style={{ fontSize: yesButtonSize }}
                onClick={() => setYesPressed(true)}
              >
                Yes
              </button>

              <button onClick={handleNoClick} className="no-button">
                {noCount === 0 ? "No" : getNoButtonText()}
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
