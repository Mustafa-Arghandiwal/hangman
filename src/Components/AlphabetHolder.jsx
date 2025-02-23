
export default function AlphabetHolder(props) {
    return (

        <div className="w-10 h-10 bg-transparent flex justify-center items-end border-b border-b-white text-[#F9F4DA] font-bold text-[18px]">
            {props.letter}  
        </div>
    )
}