import { useEffect, useState } from 'react'
import CustomBackground from './CustomBackground'
import PL from './PL'
import AlphabetHolder from './AlphabetHolder';
import KeyboardBtn from './KeyboardBtn';
import { nanoid } from 'nanoid';






function App() {


  const [plArray, setPlArray] = useState(() => [
      { plName: "HTML", color: "#E2680F", textColor: "#F9F4DA", dead: false},
      { plName: "CSS", color: "#328AF1", textColor: "#F9F4DA", dead: false },
      { plName: "JavaScript", color: "#F4EB13", textColor: "#1E1E1E", dead: false },
      { plName: "React", color: "#2ED3E9", textColor: "#1E1E1E", dead: false },
      { plName: "TypeScript", color: "#298EC6", textColor: "#F9F4DA", dead: false },
      { plName: "Node.js", color: "#599137", textColor: "#F9F4DA", dead: false },
      { plName: "Python", color: "#FFD742", textColor: "#1E1E1E", dead: false },
      { plName: "Ruby", color: "#D02B2B", textColor: "#F9F4DA", dead: false },
      { plName: "Assembly", color: "#2D519F", textColor: "#F9F4DA", dead: false}
    ]
  )
  
  const alphabets = "QWERTYUIOPASDFGHJKLZXCVBNM"
  
  const words = ["developer"]
  const [word, setWord] = useState(words[0])
  const [guessedLetters, setGuessedLetters] = useState([])
 
  let wrongGuessCount = guessedLetters.filter(letter => !word.toUpperCase().includes(letter)).length
  console.log(wrongGuessCount)
  

  useEffect(() => {
    setPlArray(prevPlArray => 
      prevPlArray.map((obj, index) => {
        if(index === wrongGuessCount - 1) {
          return {
            ...obj,
            dead: true
          }
        } else {
          return obj
        }
      })
    )
  }, [wrongGuessCount])


  const addGuessedLetter = (letter) => {
    setGuessedLetters(prevLetters => {
      return prevLetters.includes(letter) ? prevLetters : [...prevLetters, letter]
    })
  }
 
  
  
  
  // ------------------------------------------------------------------
  let messageBox
  
  const deadList = plArray.filter(obj => obj.dead).map(obj => obj.plName)
  let farewellString
  if(deadList.length === 2) {
    farewellString = `Farewell ${deadList.join(" & ")} 🫡`
  } else if(deadList.length === 0){
    farewellString = "Guess something"
  } else {
    farewellString = `Farewell ${deadList.join(", ").replace(/,(?=[^,]*$)/, ", &")} 🫡`
  }
  

  let allDone = true
  for(const letter of [...new Set(word)]) {
    if (!guessedLetters.includes(letter.toUpperCase())) {
      allDone = false
      break
    }
  }
  
  if(wrongGuessCount < 8 && allDone) {
    messageBox = (
      <div className='bg-green-500 text-[#F9F4DA] text-[16px] h-[60px] grid place-items-center w-full mt-3.5'>
          You Won!
        </div>
    )
  } else if(wrongGuessCount < 8 && !allDone) {
    messageBox = (
      <div className='bg-[#7A5EA7] text-[#F9F4DA] text-[16px] h-[60px] grid place-items-center w-full mt-3.5'>
        {farewellString}
        </div>
    )
  } else {
    messageBox = (
      <div className='bg-red-500 text-[#F9F4DA] text-[16px] h-[60px] grid place-items-center w-full mt-3.5'>
        You Lost! Assembly Won! WTF!
          
        </div>
    )
  }
// ------------------------------------------------------------------
  

const plElements = plArray.map(pl => <PL plName={pl.plName} color={pl.color} textColor={pl.textColor} key={pl.plName} dead={pl.dead} />)
const alphaHolderEls = word.split("").map((letter, index) => <AlphabetHolder key={index} letter={guessedLetters.includes(letter.toUpperCase()) ? letter.toUpperCase() : ""} />)
const keys = alphabets.split("").map(letter => {
  const isClicked = guessedLetters.includes(letter)
  const isCorrect = isClicked && word.toUpperCase().includes(letter)
  const isWrong = isClicked && !word.toUpperCase().includes(letter)

  return <KeyboardBtn letter={letter} key={letter} isCorrect={isCorrect} isWrong={isWrong} addGuessedLetter={addGuessedLetter} 
                      allDone={allDone} wrongGuessCount={wrongGuessCount}
        />
})





// --------------------------------------------------------------------
  return(
    <main className='  font-hanken h-svh grid place-items-center py-20'>
      <CustomBackground />
      <section className='flex flex-col text-center items-center max-w-96 gap-2'>
        <h1 className='text-[#F9F4DA] text-[20px]'>
          Assembly: Endgame
        </h1>
        <p className='text-[#8E8E8E] text-[14px]'>
        Guess the word in under 8 attempts to keep the programming world safe from Assembly!
        </p>

        {messageBox}

      </section>




      <section className='flex gap-1 flex-wrap justify-center  max-w-[354px]'>
        {plElements}
      </section>



      <section className='flex gap-1 max-w-[354px]'>
        {alphaHolderEls}
      </section>


      <section className='flex justify-center flex-wrap gap-2 max-w-[480px]'>
        {keys}
      </section>

    {allDone || wrongGuessCount === 8 
    ? 
    <button onClick={() => {setPlArray(
      [
        { plName: "HTML", color: "#E2680F", textColor: "#F9F4DA", dead: false},
        { plName: "CSS", color: "#328AF1", textColor: "#F9F4DA", dead: false },
        { plName: "JavaScript", color: "#F4EB13", textColor: "#1E1E1E", dead: false },
        { plName: "React", color: "#2ED3E9", textColor: "#1E1E1E", dead: false },
        { plName: "TypeScript", color: "#298EC6", textColor: "#F9F4DA", dead: false },
        { plName: "Node.js", color: "#599137", textColor: "#F9F4DA", dead: false },
        { plName: "Python", color: "#FFD742", textColor: "#1E1E1E", dead: false },
        { plName: "Ruby", color: "#D02B2B", textColor: "#F9F4DA", dead: false },
        { plName: "Assembly", color: "#2D519F", textColor: "#F9F4DA", dead: false}
      ]
    ); setGuessedLetters([])}}
    className='bg-[#11b5e5] border border-[#d7d7d7] rounded-sm w-[225px] h-[40px] px-3 py-1.5 cursor-pointer'>New Game</button>
    :
    <div className='w-[225px] h-[40px]'></div> 
    }

    </main>
  )
}

export default App
