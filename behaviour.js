const signb1r1 = document.getElementById("box1r1")
const signb2r1 = document.getElementById("box2r1")
const signb3r1 = document.getElementById("box3r1")
const signb1r2 = document.getElementById("box1r2")
const signb2r2 = document.getElementById("box2r2")
const signb3r2 = document.getElementById("box3r2")
const signb1r3 = document.getElementById("box1r3")
const signb2r3 = document.getElementById("box2r3")
const signb3r3 = document.getElementById("box3r3")
const startGame = document.getElementById("start")
const game = document.getElementById("playerTurns")
const p1=document.getElementById("P1Score")
const draw=document.getElementById("draw")
const p2=document.getElementById("P2Score")


//  innerHTML update dont  hold  id but onclick works 

let x_o='not choosed'; 
let row1=[null,null,null];
let row2=[null,null,null];
let row3=[null,null,null];
let gameEnd='';
let player='one';
let turns=[];


startGame.addEventListener("click",function(){
game.innerHTML=`<p id="p1">PLAYER-1 :</p>
<button id="xbtn" onclick="xsign()">X</button> 
<button id="obtn" onclick="osign()">O</button>`;
});

 function xsign(){
  if(x_o==='not choosed'){
x_o=1;
p1choice(x_o);
turns.push(player);
playerTurn();
  }
}
 function osign(){  
  if(x_o==='not choosed'){
x_o=0; 
p1choice(x_o);
turns.push(player);
playerTurn();
  }
}
let i=0;
const playerTurn=()=>{ 
  switch(turns[i]){
    case 'one':if(x_o==1||x_o==3||x_o==5||x_o==7||x_o==9){
  game.innerHTML=`<div id="Player-1"><span>Player-1</span></div></div><div id="pt1">X</div>`; 
}else {
  game.innerHTML=`<div id="Player-1"><span>Player-1</span></div></div><div id="pt1">O</div>`; 
}
player='two';
break;
case 'two':if(x_o==1||x_o==3||x_o==5||x_o==7||x_o==9){
  game.innerHTML=`<div id="Player-2"><span>Player-2</span></div></div><div id="pt2">X</div>`; 
}else {     
  game.innerHTML=`<div id="Player-2"><span>Player-2</span></div></div><div id="pt2">O</div>`; 
}
player='one';
break;
  }
  console.log(turns)
}


function box1(){
  if(signb1r1.innerHTML==""&&gameEnd==''){
  switch(x_o){
    case 1:case 3:case 5:case 7:case 9:
  signb1r1.innerHTML='<p id="x">'+'</p>';
x_o++;   
row1[0]='odd';
i++;
turns.push(player);
break; 
    case 0:case 2:case 4:case 6:case 8:
  signb1r1.innerHTML='<p id="o">'+'</p>';
x_o++;
row1[0]='even';
i++;
turns.push(player);
break;
  }
  playerTurn();
  row1Match();column1Match();box159Match();noWinner();  
  }
} 

function box2(){
  if(signb2r1.innerHTML==""&&gameEnd==''){
switch(x_o){
  case 1:case 3:case 5:case 7:case 9:
signb2r1.innerHTML='<p id="x">'+'</p>';
x_o++;
row1[1]='odd';
i++;
turns.push(player);
break;
  case 0:case 2:case 4:case 6:case 8:
signb2r1.innerHTML='<p id="o">'+'</p>';
x_o++;
row1[1]='even';
i++;
turns.push(player);
break;
} 
playerTurn();
row1Match();column2Match();noWinner();
 }
}
function box3(){
  if(signb3r1.innerHTML==""&&gameEnd==''){
  switch(x_o){
    case 1:case 3:case 5:case 7:case 9:
  signb3r1.innerHTML='<p id="x">'+'</p>';
  x_o++;
row1[2]='odd';
i++;
turns.push(player);
  break;
    case 0:case 2:case 4:case 6:case 8:
  signb3r1.innerHTML='<p id="o">'+'</p>';
  x_o++;
row1[2]='even';
i++;
turns.push(player);
break;
  }
  playerTurn();
  box357Match();row1Match();column3Match();noWinner();
  } 
  } 
  function box4(){
    if(signb1r2.innerHTML==""&&gameEnd==''){
    switch(x_o){
      case 1:case 3:case 5:case 7:case 9:
    signb1r2.innerHTML='<p id="x">'+'</p>';
    x_o++;
    row2[0]='odd';
    i++;
    turns.push(player);
    break;
      case 0:case 2:case 4:case 6:case 8:
    signb1r2.innerHTML='<p id="o">'+'</p>';
    x_o++;
    row2[0]='even';
    i++;
    turns.push(player);
    break;
    }
    playerTurn();
    row2Match();column1Match();noWinner();
    } 
    }
    function box5(){
      if(signb2r2.innerHTML==""&&gameEnd==''){
      switch(x_o){
        case 1:case 3:case 5:case 7:case 9:
      signb2r2.innerHTML='<p id="x">'+'</p>';
      x_o++;
      row2[1]='odd';
      i++;
      turns.push(player);
      break;
        case 0:case 2:case 4:case 6:case 8:
      signb2r2.innerHTML='<p id="o">'+'</p>';
      x_o++;
      row2[1]='even';
      i++;
      turns.push(player);
      break;
      }
      playerTurn();
      box357Match();row2Match();column2Match();box159Match();noWinner();
      } 
      }
      function box6(){
        if(signb3r2.innerHTML=="" && gameEnd==''){
        switch(x_o){
          case 1:case 3:case 5:case 7:case 9:
        signb3r2.innerHTML='<p id="x">'+'</p>';
        x_o++;
        row2[2]='odd';
        i++;
        turns.push(player);
        break;
          case 0:case 2:case 4:case 6:case 8:
        signb3r2.innerHTML='<p id="o">'+'</p>';
        x_o++;
        row2[2]='even';
        i++;
        turns.push(player);
        break;
        }
        playerTurn();
        row2Match();column3Match();noWinner();
        }
        }
        function box7(){
          if(signb1r3.innerHTML==""&&gameEnd==''){
          switch(x_o){
            case 1:case 3:case 5:case 7:case 9:
          signb1r3.innerHTML='<p id="x">'+'</p>';
          x_o++;
           row3[0]='odd';
           i++;
           turns.push(player); 
           break;
            case 0:case 2:case 4:case 6:case 8:
          signb1r3.innerHTML='<p id="o">'+'</p>';
          x_o++;
           row3[0]='even';
           i++;
           turns.push(player); 
           break;
          }
          playerTurn();
          box357Match(); row3Match();column1Match();noWinner();
          } 
          }
          function box8(){
            if(signb2r3.innerHTML==""&&gameEnd==''){
            switch(x_o){
              case 1:case 3:case 5:case 7:case 9:
            signb2r3.innerHTML='<p id="x">'+'</p>';
            x_o++;
             row3[1]='odd';
             i++;
             turns.push(player); 
             break;
              case 0:case 2:case 4:case 6:case 8:
            signb2r3.innerHTML='<p id="o">'+'</p>';
            x_o++;
            row3[1]='even';
            i++;
            turns.push(player); 
            break;
            }
            playerTurn();
            row3Match();column2Match();noWinner();
            }
            }
            function box9(){
              if(signb3r3.innerHTML==""&&gameEnd==''){
              switch(x_o){
                case 1:case 3:case 5:case 7:case 9:
              signb3r3.innerHTML='<p id="x">'+'</p>';
              x_o++;
              row3[2]='odd';
              i++;
              turns.push(player); 
              break;
                case 0:case 2:case 4:case 6:case 8:
              signb3r3.innerHTML='<p id="o">'+'</p>';
              x_o++;
              row3[2]='even';
              i++;
              turns.push(player); 
              break;
              }
              playerTurn();
              box159Match();row3Match();column3Match();noWinner();
              } 
              }
                             
                function row1Match(){
                  if(row1[0]=='odd'&&row1[1]=='odd'&&row1[2]=='odd'){
                    gameEnd='x won';
                    winner();
                  }else if(row1[0]=='even'&&row1[1]=='even'&&row1[2]=='even'){
                    gameEnd='o won';
                    winner();
                  }
                  }     
                  function row2Match(){
                    if(row2[0]=='odd' && row2[1]=='odd' && row2[2]=='odd'){
                      gameEnd='x won';
                      winner();
                    }else if(row2[0]=='even' && row2[1]=='even' && row2[2]=='even'){
                      gameEnd='o won';  
                      winner();
                    }
                    }
                  function row3Match(){
                    if(row3[0]=='odd'&&row3[1]=='odd'&&row3[2]=='odd'){
                      gameEnd='x won';
                       winner();
                    
                    }else if(row3[0]=='even'&&row3[1]=='even'&&row3[2]=='even'){
                      gameEnd='o won';
                      winner();
                     
                    }
                    }                                                 
function column1Match(){
  if(row1[0]=='odd'&&row2[0]=='odd'&&row3[0]=='odd'){
  gameEnd='x won';
  winner();
  }else if(row1[0]=='even'&&row2[0]=='even'&&row3[0]=='even'){
  gameEnd='o won';
  winner();
  }
}
function column2Match(){
  if(row1[1]=='odd'&&row2[1]=='odd'&&row3[1]=='odd'){
  gameEnd='x won';
  winner();
  }else if(row1[1]=='even'&&row2[1]=='even'&&row3[1]=='even'){
  gameEnd='o won';
  winner();
  }
}
function column3Match(){
  if(row1[2]=='odd'&&row2[2]=='odd'&&row3[2]=='odd'){
  gameEnd='x won';
  winner();
  }else if(row1[2]=='even'&&row2[2]=='even'&&row3[2]=='even'){
  gameEnd='o won';
  winner();
  }
}
function box159Match(){
  if(row1[0]=='odd'&&row2[1]=='odd'&&row3[2]=='odd'){
  gameEnd='x won';
  winner();

  }else if(row1[0]=='even'&&row2[1]=='even'&&row3[2]=='even'){
  gameEnd='o won';
  winner();
  
  }
}
function box357Match(){
  if(row1[2]=='odd'&&row2[1]=='odd'&&row3[0]=='odd'){
  gameEnd='x won';
  winner();
  }else if(row1[2]=='even'&&row2[1]=='even'&&row3[0]=='even'){
  gameEnd='o won';
  winner();
  }
}
function winner(){
if(gameEnd=='x won'){
  game.innerHTML=`<h1>X-win</h1><p id="ng" onclick="newGame()">New Game</p>`;
  player='';
turns=[];
pts();
}else if(gameEnd=='o won'){
  game.innerHTML=`<h1>O-win</h1><p id="ng" onclick="newGame()">New Game</p>`;
  player='';
turns=[];
pts();
}
}
function noWinner(){
  if(turns[9]&&gameEnd!=='o won'&&gameEnd!=='x won'){
    game.innerHTML=`<h1>Draw</h1><p id="ng" onclick="newGame()">New Game</p>`;
    player='';
  turns=[];
  pts();
  }
}

let val='';
let p1choice=(x_o)=>{
  if(x_o===0){
    val='O';
  }else if(x_o===1){
val='X';
  }
}
let pts1=0;
let pts2=0;
let tie=0;
function pts(){
if(val=='X'&&gameEnd=='x won'){
pts1++;
p1.textContent=`P1: ${pts1}`;
}else if(val=='O'&&gameEnd=='o won'){
pts1++;
p1.textContent=`P1: ${pts1}`;
}else if(val=='X'&&gameEnd=='o won'){
pts2++;
  p2.textContent=`P2: ${pts2}`;
  }else if(val=='O'&&gameEnd=='x won'){
    pts2++;
      p2.textContent=`P2: ${pts2}`;
      }else{
    tie++;
    draw.textContent=`Draw: ${tie}`;
      }
}

function newGame(){
   x_o='not choosed'; 
 row1=[null,null,null];
 row2=[null,null,null];
 row3=[null,null,null];
 gameEnd='';
i=0;
 game.innerHTML=`<p id="p1">PLAYER-1 :</p>
<button id="xbtn" onclick="xsign()">X</button> 
<button id="obtn" onclick="osign()">O</button>`;
signb1r1.innerHTML='';
signb2r1.innerHTML='';
signb3r1.innerHTML='';
signb1r2.innerHTML='';
signb2r2.innerHTML='';
signb3r2.innerHTML='';
signb1r3.innerHTML='';
signb2r3.innerHTML='';
signb3r3.innerHTML='';
player='one';
}

 




    




