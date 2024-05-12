import Board from "./Board";
import {useState} from "react"
function TicTacToe(){
const [boardVal,setBoardVal]=useState([null,null,null,null,null,null,null,null,null])
return(
<Board boardVal={boardVal} setBoardVal={setBoardVal}/>
)
}

export default TicTacToe;