
export default function KeyboardBtn(props) {
    let btnColor
    if(props.isCorrect) {
        btnColor = "#10A95B"
    } else if(props.isWrong) {
        btnColor = "#EC5D49"
    } else {
        btnColor = "#FCBA29"
    }
    
    return (
        <button style={{backgroundColor: btnColor}} onClick={() => {props.addGuessedLetter(props.letter)}}
            disabled={(props.allDone || props.wrongGuessCount === 8 )}
            className={`font-hanken text-[#1E1E1E] rounded-sm h-10 w-10 font-semibold text-[18px] border border-[#d7d7d7] cursor-pointer active:scale-95 duration-75 
                disabled:active:scale-100 disabled:cursor-default
                ${(props.allDone || props.wrongGuessCount === 8 ) ? "opacity-40" : ""}`}
         >
            {props.letter}
        </button>
    )
}