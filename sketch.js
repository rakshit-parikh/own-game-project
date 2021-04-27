function enableButton(id) {
 document.getElementById(id).disabled = false;
}
 function disableButton(id) { 
document.getElementById(id).disabled = true;
 } 
 function showTurn(ply) { 
document.getElementById("splayer").innerHTML = ply.color + "'s Turn";
 }
  function MultishowTurn(ply) { document.getElementById("mplayer").innerHTML = ply.color + "'s Turn";
 }
  function pplay() { 
p.roll(random_number);
 p.move();
  if(com.position > 0) com.show(com.position);
   showTurn(com);
    if(p.position == 100) { alert("you win");
     reset(); 
     setTimeout(enableButton("dicebtn"),500);
      setTimeout(enableButton("reset"),500);
     }
      else setTimeout(bot,1000);
     } 
     function play() {
     disableButton("dicebtn");
     function complay() {
     com.roll(random_number);
     com.move(); 
     if(p.position > 0) p.show(p.position);
      if(com.position == 100) { alert("you lose");
       reset();
     } showTurn(p);
      setTimeout(enableButton("dicebtn"),500);
      setTimeout(enableButton("reset"),500);
     } 
     function bot()
      { rand();
     myfun();
      setTimeout(complay,3000);
    } 
    function showGame() {
    document.getElementById("game").style.display = "block";
     document.getElementById("head").style.display = "none";
     } 
     function senable() {
     document.getElementById("sbtn").style.display = "block"; 
    } 
    function menable() {
    document.getElementById("mbtn").style.display = "block"; 
} 
disableButton("reset");
 rand();
  myfun();
   setTimeout(pplay,3000);
 }
 function getcolor() { 
    var color = prompt("Enter Color: ","black"); 
    if(color == "yellow") { alert("Not available");
     color = prompt("Enter Color: ","black");
     }
      document.getElementById("splayer").innerHTML = color + "'s Turn"; p = new Player(color);
     } 
     function singleplayer() {
     showGame(); 
      getcolor();
       com = new Player("yellow");
        document.getElementById("splayer").innerHTML = yellow;
     }
     var i=0;
     function delayplaymulti() { 
    players[i].roll(random_number);
     players[i].move(); 
     for(var k = 0; k < nop; k++)
      { if(players[k].position > 0) players[k].show(players[k].position);
     } 
     if(globalpostion <= players[i].position) globalpostion = players[i].position; 
     if(globalpostion == 100) { alert(newFunction() + " Wins");
      reset();
     }
      else{ ++i; if(i == nop) i = 0;
        MultishowTurn(players[i]);
     }
      function newFunction() {
           return players[i].color;
         } }
         function playmulti() {
         rand();
          myfun(); 
          setTimeout(delayplaymulti,3000);
         }
          function start() {
         disableButton("btn1");
          setTimeout(playmulti(),3000);
           setTimeout(enableButton("btn1"),3000);
         }
          function multiplayer() { 
        menable();
         showGame();
          nop = prompt("Enter no of players : ","2"); 
          for(var i = 0; i < nop; ++i) { var color = prompt("Enter color :");
           for(var k = 0; k < i; ++k)
            { if(color == players[k].color) { alert("Not available");
             color = prompt("Enter color :");
              break;
             } }
              players[i] = new Player(color);
             } MultishowTurn(players[0]);
             }