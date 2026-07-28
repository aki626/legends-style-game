function showDamage(value){

let d=document.getElementById("damage");

d.innerHTML="-"+value;

d.style.left="50%";

d.style.top="40%";


setTimeout(()=>{

d.innerHTML="";

},500);

}



function attack(power){

if(enemyHP<=0)return;


enemyHP-=power;

showDamage(power);


enemyTurn();

update();

}



function special(){

let power=50;


if(ki<30){

message.innerHTML="気力不足";

return;

}


ki-=30;


enemyHP-=power;


showDamage(power);


enemyTurn();

update();

}
