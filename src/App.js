import './App.css';
import { Board } from './components/Board';
import { Keyboard } from './components/Keyboard';
import { createContext, useEffect, useState } from 'react';
import { boardDefault,generateWordSet  } from './Word';
import GameOver from "./components/GameOver";
export const AppContext = createContext();
function App() {


  const [board, setBoard] = useState(boardDefault);
  const [currAttempt, setcurrAttempt] = useState({ attempt: 0, letterPos: 0 })
  const [wordSet, setWordSet] = useState(new Set());
  const [correctWord, setCorrectWord] = useState("");
  const [disabledLetters, setDisabledLetters] = useState([]);
  const [gameOver, setGameOver] = useState({
    gameOver: false,
    guessedWord: false,
  });

  // const correctWord="RIGHT";

  useEffect(()=>{
    generateWordSet().then((words)=>{
      setWordSet(words.wordSet);
      setCorrectWord(words.todaysWord);
    })
  },[])
  const onSelectLetter = (keyval) => {
    if (currAttempt.letterPos > 4) return;
    const newboard = [...board]
    newboard[currAttempt.attempt][currAttempt.letterPos] = keyval
    setBoard(newboard);
    setcurrAttempt({ ...currAttempt, letterPos: currAttempt.letterPos + 1 })
  }
  const onDelete = () => {
    if (currAttempt.letterPos === 0) return;
    const newboard = [...board]
    newboard[currAttempt.attempt][currAttempt.letterPos - 1] = "";
    setBoard(newboard)
    setcurrAttempt({ ...currAttempt, letterPos: currAttempt.letterPos - 1 })
  }
  const onEnter = () => {
    if (currAttempt.letterPos !== 5) return;

    let currWord = "";
    for (let i = 0; i < 5; i++) {
      currWord += board[currAttempt.attempt][i];
    }
    
  
    if (wordSet.has(currWord.toLowerCase())) {
      setcurrAttempt({ attempt: currAttempt.attempt + 1, letterPos: 0 })
    } 
    else {
      alert("Word not found");
      return ;
    }
   
    if(currWord.toLowerCase() === correctWord.toLowerCase()){
      setGameOver({ gameOver: true, guessedWord: true });
      return;
    }
    if (currAttempt.attempt === 5) {
      setGameOver({ gameOver: true, guessedWord: false });
      return;
    }
  }
  return (
    <div className="App">
      <nav>
        <h2>Wordle</h2>
      </nav>
      <AppContext.Provider value={{ 
        board,
       setBoard,
        currAttempt,
        setcurrAttempt, 
        onSelectLetter, 
        onDelete,
         onEnter,
         correctWord,
         setCorrectWord,
         setDisabledLetters,
          disabledLetters,
          gameOver,
          setGameOver}} >
        <div className='game'>
          <Board></Board>
          {gameOver.gameOver ? <GameOver></GameOver> : <Keyboard></Keyboard>}
        </div>
      </AppContext.Provider>
    </div>
  );
}

export default App;
