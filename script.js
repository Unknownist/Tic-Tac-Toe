let boxes=document.querySelectorAll('.box')
let reset=document.querySelector('#Reset')
let newBtn=document.querySelector('#New')
let msgcon=document.querySelector('.msg-container')
let msg=document.querySelector('#msg')

let turnO= true;//player X, player,O


const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
]
let count=0;
 boxes.forEach((box)=>{
   box.addEventListener('click',()=>{
       if(turnO==true){
             box.innerText='O'
             turnO=false
        }
         else{
         box.innerText='X'
          turnO=true
         }
        box.disabled=true 
        count++
        CheckWinner()
        draw()
    })
})

const CheckWinner= () =>{
    for(let pattern of winPatterns){
        
        boxes[pattern[0]].textContent
        boxes[pattern[1]].textContent
        boxes[pattern[2]].textContent
  
      let pos1val=boxes[pattern[0]].textContent;
      let pos2val= boxes[pattern[1]].textContent;
      let pos3val=  boxes[pattern[2]].textContent;
      if(pos1val !=="" && pos2val !==''&& pos3val!==""){
        if(pos1val===pos2val && pos2val===pos3val){
        console.log("Winner",pos1val)
    ShowWinner(pos1val)
    return null
        }
      }
    }
}



const draw=()=>{
    if(count==9){
        msg.innerText='Draw!'
    }
}
const resetgame=()=>{
    turnO=true;
    enableBoxes()
    for(box of boxes){
    box.innerText=""
    }
    msgcon.classList.add('hide')
}




reset.addEventListener('click',resetgame)
const disableboxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}


const ShowWinner=(winner)=>{
      msg.innerText=`Congratulations, Winner is ${winner}`
      msgcon.classList.remove('hide')
      disableboxes()

}


const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
    }
}






 newBtn.addEventListener('click',resetgame)


