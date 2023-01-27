randomNumber1=Math.floor(Math.random()*6)+1;
randomNumber2=Math.floor(Math.random()*6)+1;

function imgchange1(){
return  document.querySelector(".img1").setAttribute("src",
  "images/dice"+ randomNumber1 + ".png");

}
function imgchange2(){

  return  document.querySelector(".img2").setAttribute("src",
    "images/dice"+ randomNumber2 + ".png");

}

function winner(randomNumber1,randomNumber2){
  if (randomNumber1>randomNumber2){
    return document.getElementById('header').textContent="Player 1 Wins";
  }else if(randomNumber1<randomNumber2){
    return document.getElementById('header').textContent="Player 2 Wins";
  }else
  return document.getElementById('header').textContent="Draw";


}





imgchange1();
imgchange2();
winner(randomNumber1,randomNumber2);
