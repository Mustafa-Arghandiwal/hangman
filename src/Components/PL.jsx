
export default function PL(props) {
    return (
        <div className={`p-1 font-bold rounded-sm relative grid place-items-center ${props.dead ? "deadPl" : ""}`}
         style={{backgroundColor: props.color, color: props.textColor, opacity: props.dead ? .18 : 1}}>
            {props.plName}
        </div>
    )
}