import GameBox from './GameBox.jsx'
import {useState} from "react"
import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti'
function Board({boardVal,setBoardVal}){
const {width,height} = useWindowSize()
const [isXTurn,setIsXTurn] = useState(true)
const handleClick = (index) => {
    console.log("GameBox data entered",index)
    const boardValCopy =[...boardVal]
    console.log(boardValCopy)
    if(boardValCopy[index]==null){
        boardValCopy[index] = isXTurn?"X":"0"
        console.log(boardValCopy[index])
        console.log(boardValCopy)
        setBoardVal(boardValCopy)
        setIsXTurn(!isXTurn)
    }
}

const decideWinner = (boardVal)=>{
    const listItems=[[0,1,2],[3,4,5],[6,7,8],
  [0,3,6],[1,4,7],[2,5,8],
  [0,4,8],[2,4,6]]
  for(let i=0;i<listItems.length;i++){
    const [a,b,c] = listItems[i]
    if(boardVal[a]==boardVal[b] && boardVal[b]==boardVal[c] && boardVal[a]!==null){
        console.log("winner")
        return boardVal[a]
    }
  }
  return null
}
const winner = decideWinner(boardVal)
return(
<>
<div className="board">
{
    boardVal.map((element,index)=><GameBox element={element} index={index} playerClick={()=>handleClick(index)}/>)
}
{
    winner && <Confetti width={width} height={height} gravity={0.4}/> 
}
{
    winner && <div>Winner is: {winner} </div>
}
</div>
</>
)
}
export default Board;