
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
        <button style={{backgroundColor: btnColor}} onClick={() => {
            // if(!props.clicked) {
            //     props.handleClickStatus(props.id)
            //     props.handleClickReveal(props.char)
            // }
            props.addGuessedLetter(props.letter)
        }}
         className="font-hanken text-[#1E1E1E] rounded-sm h-10 w-10 font-semibold text-[18px] border border-[#d7d7d7]"
         disabled={(props.allDone || props.wrongGuessCount === 8 ) ? true : false}
         >
            {props.letter}
        </button>
    )
}