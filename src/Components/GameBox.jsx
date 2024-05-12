function GameBox({element,playerClick}){
return(
<div className="gamebox" onClick={()=>playerClick()}>
    {element}
</div>
)
}

export default GameBox;