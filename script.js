
let sign='';
//let p1Score=[];
//let p2Score=[];

const card= document.getElementById("card")
const xbtn=document.getElementById('xbtn')
const obtn=document.getElementById('obtn').addEventListener('click',()=>sign='o')

let choosenCards =[];
let xchoosen =[];
let ochoosen =[];
let gameEnd=false;

function choose(){ //becomes a constructor function because of using this.textContent
if(gameEnd) return;
const id=parseInt(this.getAttribute('data-id'));
choosenCards.push(id)
if(sign =='o'){
    this.textContent='o';
      ochoosen.push(id)
      sign ='x';
}else{ 
    this.textContent='x';
    xchoosen.push(id);
     sign ='o';
}
this.removeEventListener('click',choose)
if(choosenCards.length>4){
    matchCheck()
}
}

for(let i=0 ;i<9;i++){
    const create=document.createElement("div")
    create.setAttribute('data-id',i)
    create.setAttribute('class','singleBox')
    create.addEventListener('click', choose)
    card.append(create)
    }
    
function matchCheck(){
//matching cases
  let match=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];

for(let i=0;i<match.length;i++){
if(xchoosen.includes(match[i][0]) && xchoosen.includes(match[i][1])  && xchoosen.includes(match[i][2])){
           gameEnd=true;
           document.getElementById('option').innerHTML=`<h1>X-WIN</h1>`
           
}else if(ochoosen.includes(match[i][0]) && ochoosen.includes(match[i][1])  && ochoosen.includes(match[i][2])){
        gameEnd=true;   
        document.getElementById('option').innerHTML=`<h1>O-WIN</h1>`
 }
}
}