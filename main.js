//my carte shop my monster-computer button
const plus = document.querySelector(".plus"),
minus= document.querySelector(".minus"),
removes = document.querySelector(".moves"),
num1= document.querySelector(".num");
let a=0;
let x=0;
plus.addEventListener("click",()=>{
    a++;
    a=(a<10)?"0"+a:a;
    num1.innerText = a;
    console.log(a);
    money();

});
minus.addEventListener("click",()=>{
    if(a>0){
        a--; 
       a=(a<10)?"0"+a:a;
       num1.innerText=a;
    };
    money();

});
removes.addEventListener("click",()=>{
    x=0;
    a=(x==a)?"0":x;
    num1.innerText = x;
    console.log(x);
    money();
});

//my carte shop ps5 button
const pluss = document.querySelector(".plusss"),
minuss=document.querySelector(".minusss"),
removess = document.querySelector(".movesss"),
nums=document.querySelector(".ecran");
let b=0;
let f=0;
pluss.addEventListener("click",()=>{
    b++;
    b=(b<10)?"0"+b:b;
    nums.innerText = b;
    money();
});
minuss.addEventListener("click",()=>{
    if(b>0){
        b--; 
       b=(b<10)?"0"+b:b;
       nums.innerText=b;
    }console.log(b)
    money();

});
removess.addEventListener("click",()=>{
    f=0;
    b=(f==b)?"0":f;
    nums.innerText = f;
    console.log(f);
    money();
});

//boutton liked jadore
var myButton = document.getElementById("big");
var isClicked = false;
myButton.onclick = function() {
    if (!isClicked) {
      myButton.style.backgroundColor = "red";
      isClicked = true;
    } else {
      myButton.style.backgroundColor = "white";
      isClicked = false;
    }
  };

  var waButton = document.getElementById("little");
var Clicked = false;
waButton.onclick = function() {
    if (!Clicked) {
      waButton.style.backgroundColor = "red";
      Clicked = true;
    } else {
      waButton.style.backgroundColor = "white";
      Clicked = false;
    }
  };
 
//finish fonc button liked jadore
//my panier //
function money() {
o=document.getElementsByClassName("total")
console.log(o[0].innerText);
let c;
var cc;
var aa=Number(a),
bb=Number(b);
if(aa>0){
  c=aa*3000;
  console.log("firstif",c,cc)
}
 if (bb>0){
  cc=bb*3000;
  console.log("second if",cc)
 }
 if(!cc){
  s=c
 }
 else if(!c){
  s=cc
 }
 else{
  s=c+cc;
 }

 o[0].innerHTML=s;
console.log(s)
console.log("aaaa",o);
if (o[0].innerText=="undefined"){
  console.log("ouhh")
  o[0].innerHTML="0000";
}
} 
console.log(a,b);