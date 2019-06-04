var uscore=0;
var cscore=0;
const userscore_span = document.getElementById("users");
const compscore_span = document.getElementById("comps");
const rock =document.getElementById("r");
const paper=document.getElementById("p");
const scissor=document.getElementById("s");

function getComputerChoice()
{
	const choices=['r','p','s'];
	const randomno=Math.floor(Math.random()*3);
	return choices[randomno];
}

  function win(userchoice,compchoice)
  { var user="r"; var comp="r";
  	uscore++;
		if(userchoice=="r") {user="Rock"; comp="Scissor";}
			if(userchoice=="p") {user="Paper"; comp="Rock";}
				if(userchoice=="s") {user="Scissor"; comp="Paper";}
  	userscore_span.innerHTML = uscore;
  	compscore_span.innerHTML= cscore;
		if(rock||paper||scissor)
  document.querySelector( "#ins").innerHTML=user + " beats "+comp +". You win.";
  }
 function lose(userchoice,compchoice)
  {var user="r"; var comp="r";
	if(userchoice=="r") {comp	="Rock"; user="Scissor";}
		if(userchoice=="p") {comp="Paper"; user="Rock";}
			if(userchoice=="s") {comp="Scissor"; user="Paper";}
  	cscore++;
  	userscore_span.innerHTML = uscore;
  	compscore_span.innerHTML= cscore;
		if(rock||paper||scissor)
	document.querySelector( "#ins").innerHTML=user + " beats "+comp +". You lose.";
  }
	function draw(){
		if(rock||paper||scissor)
	document.querySelector( "#ins").innerHTML="It's a draw.";
	}

   function game(userchoice)
   {
  const compchoice =  getComputerChoice();
  switch(userchoice+compchoice)
  {
  	case "rs":
  	case "sp":
  	case "pr":
  	win(userchoice,compchoice); break;
  	case "sr":
  	case "ps":
  	case "rp":
  	lose(userchoice,compchoice); break;
		default : draw();
}
}
function main()
{  if(rock){
    rock.addEventListener('click',function (){
	  game("r");})
    }
if(paper){
paper.addEventListener('click',function (){
	game("p");})
}
if(scissor){
scissor.addEventListener('click',function (){
	game("s");})
}
}
main();
