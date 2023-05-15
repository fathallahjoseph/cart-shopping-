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
    
});
minus.addEventListener("click",()=>{
    if(a>0){
        a--; 
       a=(a<10)?"0"+a:a;
       num1.innerText=a;
    };
});
removes.addEventListener("click",()=>{
    x=0;
    a=(x==a)?"0":x;
    num1.innerText = x;
    console.log(x);
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
});
minuss.addEventListener("click",()=>{
    if(b>0){
        b--; 
       b=(b<10)?"0"+b:b;
       nums.innerText=b;
    }console.log(b)
});
removess.addEventListener("click",()=>{
    f=0;
    b=(f==b)?"0":f;
    nums.innerText = f;
    console.log(f);
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
