document.addEventListener('DOMContentLoaded', () => {
    const gridDisplay = document.querySelector('.grid');
    const scoreDisplay = document.querySelector('#score');
    const resultDisplay = document.querySelector('.result');
    console.log(resultDisplay);
    const width = 4;
    let squares = [];
    let score=0;

    //creating a board game
    function createBoard() {
        for (let i = 0; i < 16; i++) {
            let square = document.createElement('div');
            square.innerHTML = 0;
            gridDisplay.appendChild(square);
            squares.push(square);
        }
        generate();
        generate();
    }
    createBoard();



    //generate random numbers 
    function generate() {
        let n = squares.length;
        let randomNumber = Math.floor(Math.random() * n);
        if (squares[randomNumber].innerHTML == 0) {
            squares[randomNumber].innerHTML = 2;
            
        }
        else generate();
    }
   //swipe right 
   function moveRight() {
       for(let i =0;i<16;i++){
           if(i%4==0) {
               let totalOne=squares[i].innerHTML;
               let totalTwo=squares[i+1].innerHTML;
               let totalThree=squares[i+2].innerHTML;
               let totalFour=squares[i+3].innerHTML;

               let row=[parseInt(totalOne),parseInt(totalTwo),parseInt(totalThree),parseInt(totalFour)];

               

               let filteredRow = row.filter(num=>num);
               
               let missing=4-filteredRow.length;
               let zeros=Array(missing).fill(0);
               
               let newRow =zeros.concat(filteredRow);
              

               squares[i].innerHTML=newRow[0];
               squares[i+1].innerHTML=newRow[1];
               squares[i+2].innerHTML=newRow[2];
               squares[i+3].innerHTML=newRow[3];
           }
       }
   }


    //swipe left 
    function moveLeft() {
        for(let i =0;i<16;i++){
            if(i%4==0) {
                let totalOne=squares[i].innerHTML;
                let totalTwo=squares[i+1].innerHTML;
                let totalThree=squares[i+2].innerHTML;
                let totalFour=squares[i+3].innerHTML;
 
                let row=[parseInt(totalOne),parseInt(totalTwo),parseInt(totalThree),parseInt(totalFour)];
 
 
                let filteredRow = row.filter(num=>num);
                
                let missing=4-filteredRow.length;
                let zeros=Array(missing).fill(0);
                
                let newRow =filteredRow.concat(zeros);
                
 
                squares[i].innerHTML=newRow[0];
                squares[i+1].innerHTML=newRow[1];
                squares[i+2].innerHTML=newRow[2];
                squares[i+3].innerHTML=newRow[3];
            }
        }
    }
    //swipe down 
   function moveDown() {
    for(let i =0;i<4;i++){
            let totalOne=squares[i].innerHTML;
            let totalTwo=squares[i+4].innerHTML;
            let totalThree=squares[i+8].innerHTML;
            let totalFour=squares[i+12].innerHTML;

            let column=[parseInt(totalOne),parseInt(totalTwo),parseInt(totalThree),parseInt(totalFour)];

            

            let filteredColumn = column.filter(num=>num);
            
            let missing=4-filteredColumn.length;
            let zeros=Array(missing).fill(0);
            
            let newColumn =zeros.concat(filteredColumn);
           

            squares[i].innerHTML=newColumn[0];
            squares[i+4].innerHTML=newColumn[1];
            squares[i+8].innerHTML=newColumn[2];
            squares[i+12].innerHTML=newColumn[3];
        
    }
   }
   //moveup
   function moveUp() {
    for(let i =0;i<4;i++){
            let totalOne=squares[i].innerHTML;
            let totalTwo=squares[i+4].innerHTML;
            let totalThree=squares[i+8].innerHTML;
            let totalFour=squares[i+12].innerHTML;

            let column=[parseInt(totalOne),parseInt(totalTwo),parseInt(totalThree),parseInt(totalFour)];

            

            let filteredColumn = column.filter(num=>num);
            
            let missing=4-filteredColumn.length;
            let zeros=Array(missing).fill(0);
            
            let newColumn =filteredColumn.concat(zeros);
           

            squares[i].innerHTML=newColumn[0];
            squares[i+4].innerHTML=newColumn[1];
            squares[i+8].innerHTML=newColumn[2];
            squares[i+12].innerHTML=newColumn[3];
        
    }
   }
   // combine
    function combineRow() {
        for(let i=0;i<15;i++){
            if(squares[i].innerHTML==squares[i+1].innerHTML)
            {
                let combinedTotal=parseInt(squares[i].innerHTML)*2;
                squares[i].innerHTML=combinedTotal;
                squares[i+1].innerHTML=0;
                score+=combinedTotal;
                scoreDisplay.innerHTML=score;
            }
                
            
        }
        checkForGameOver();
        checkForWin();
    }
    function combineColumn() {
        for(let i=0;i<12;i++){
            if(squares[i].innerHTML==squares[i+4].innerHTML)
            {
                let combinedTotal=parseInt(squares[i].innerHTML)*2;
                squares[i].innerHTML=combinedTotal;
                squares[i+4].innerHTML=0;
                score+=combinedTotal;
                scoreDisplay.innerHTML=score;
            }
        
               
            
        }
        checkForGameOver();
        checkForWin();
    }
    //assign keys
   function control(e){
       if(e.keyCode==39)
       {
           keyRight()
       }
       else if(e.keyCode==37)
       {
           keyLeft();
       }
       else if(e.keyCode==38){
           keyUp();
       }
       else if(e.keyCode==40){
           keyDown();
       }
   } 
  document.addEventListener('keyup',control) 
   function keyRight(){
       moveRight();
       combineRow();
       moveRight();
       generate();
   }
    

   function keyLeft() {
       moveLeft();
       combineRow();
       moveLeft();
       generate();
   }
   
 function keyUp() {
    moveUp();
    combineColumn();
    moveUp();
    generate();
  }
 
  function keyDown() {
    moveDown();
    combineColumn();
    moveDown();
    generate();
}

//check for win
function checkForWin(){
    for(let i = 0; i <16;i++)
    {
        if(squares[i].innerHTML==2048)
        {
            resultDisplay.innerHTML='CONGRATULATIONS YOU WIN &#128081;';
            document.removeEventListener('keyup',control);
        }
    }
}
//check for game over
function checkForGameOver(){
    let count=0;

    for(let i=0;i<16;i++){
        if(squares[i].innerHTML==0)
        {
            count++;
        }
    }
    if(count==0)
    {
        resultDisplay.innerHTML='YOU LOSE!!&#128524; BETTER LUCK NEXT TIME &#128519;';
        document.removeEventListener('keyup',control);
    }
}





})
