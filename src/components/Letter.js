import React, { useContext, useEffect } from 'react'
import { AppContext } from "../App"



function Letter({ letterPos, letterVal }) {
  const { board, correctWord, currAttempt ,disabledLetters,setDisabledLetters} = useContext(AppContext);
  const letter = board[letterVal][letterPos];

  const correct = correctWord.toUpperCase()[letterPos] === letter;
  const almost = !correct && letter !== "" && correctWord.toUpperCase().includes(letter);
  const letterState = currAttempt.attempt > letterVal &&
    (correct ? "correct" : almost ? "almost" : "error");
 
    useEffect(() => {
      if (letter !== "" && !correct && !almost) {
        console.log(letter);
        setDisabledLetters((prev) => [...prev, letter]);
      }
    }, [currAttempt.attempt]);


  return (
    <div className='letter' id={letterState}>{letter}</div>
  )
}

export default Letter